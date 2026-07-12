/**
 * POST /api/lead — server-side lead intake for the project-request form.
 *
 * Validates every field, verifies Turnstile, optionally stores photo uploads
 * in a private R2 bucket and lead metadata in D1, then delivers the lead to a
 * configurable webhook and/or email service. Secrets never reach the browser.
 */

interface Env {
  // Optional bindings — endpoint degrades gracefully without them.
  LEADS_DB?: D1Database;
  LEAD_UPLOADS?: R2Bucket;

  // Secrets / vars (set in Cloudflare Pages settings or .dev.vars locally)
  TURNSTILE_SECRET_KEY?: string;
  LEAD_WEBHOOK_URL?: string;
  LEAD_WEBHOOK_SECRET?: string;
  FORM_RECIPIENT_EMAIL?: string;
  EMAIL_API_KEY?: string;
  DEV_MODE?: string;
  CF_PAGES_BRANCH?: string;
}

const MAX_FILES = 6;
const MAX_FILE_BYTES = 10 * 1024 * 1024;
const MAX_TOTAL_BYTES = 30 * 1024 * 1024;

/** Required text fields with max lengths. Option lists mirror src/data/form-options.ts. */
const TEXT_FIELDS: Record<string, number> = {
  full_name: 120,
  phone: 30,
  email: 200,
  property_location: 250,
  city_or_county: 120,
  acreage: 60,
  service: 60,
  condition: 60,
  intended_use: 60,
  terrain: 60,
  access: 60,
  timing: 60,
  details: 4000,
};

function json(status: number, body: Record<string, unknown>): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  });
}

function sanitize(value: string, max: number): string {
  // Strip control chars, collapse whitespace runs, enforce length.
  return value
    .split('').filter((c) => c.charCodeAt(0) >= 32 && c.charCodeAt(0) !== 127).join('')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, max);
}

function normalizePhone(raw: string): string | null {
  const digits = raw.replace(/\D/g, '');
  if (digits.length < 10 || digits.length > 15) return null;
  return digits.length === 10 ? `+1${digits}` : `+${digits}`;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]{1,64}@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

/** Basic magic-byte check for JPEG/PNG/HEIC. Returns the safe extension or null. */
function sniffImage(bytes: Uint8Array, filename: string): string | null {
  if (bytes.length > 3 && bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) return 'jpg';
  if (
    bytes.length > 8 &&
    bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4e && bytes[3] === 0x47
  ) {
    return 'png';
  }
  // HEIC/HEIF: ISO BMFF "ftyp" box with heic/heix/mif1... major brand
  if (bytes.length > 12) {
    const ftyp = String.fromCharCode(...bytes.subarray(4, 8));
    const brand = String.fromCharCode(...bytes.subarray(8, 12)).toLowerCase();
    if (ftyp === 'ftyp' && /^(heic|heix|hevc|heim|heis|mif1|msf1)/.test(brand)) return 'heic';
  }
  // Fall back to extension only if the name looks like an allowed image;
  // reject everything else (executables, svg, html, archives...).
  void filename;
  return null;
}

async function verifyTurnstile(secret: string, token: string, ip: string | null): Promise<boolean> {
  try {
    const body = new URLSearchParams({ secret, response: token });
    if (ip) body.set('remoteip', ip);
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body,
    });
    const data = (await res.json()) as { success?: boolean };
    return data.success === true;
  } catch {
    return false;
  }
}

export const onRequest: PagesFunction<Env> = async (context) => {
  // Accept POST only; reject every other method explicitly.
  if (context.request.method !== 'POST') {
    return json(405, { ok: false, error: 'Method not allowed.' });
  }
  const { request, env } = context;
  const devMode = env.DEV_MODE === 'true' || (!!env.CF_PAGES_BRANCH && env.CF_PAGES_BRANCH !== 'main');

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return json(400, { ok: false, error: 'The form could not be read. Please try again.' });
  }

  // Honeypot: silently accept but do nothing.
  if (typeof form.get('website') === 'string' && (form.get('website') as string).trim() !== '') {
    return json(200, { ok: true, leadId: 'UC-OK' });
  }

  // ── Validate text fields ──
  const fields: Record<string, string> = {};
  for (const [name, max] of Object.entries(TEXT_FIELDS)) {
    const raw = form.get(name);
    const value = typeof raw === 'string' ? sanitize(raw, max) : '';
    if (!value) {
      return json(422, { ok: false, error: `Missing required field: ${name.replace(/_/g, ' ')}.` });
    }
    fields[name] = value;
  }

  const phone = normalizePhone(fields.phone);
  if (!phone) return json(422, { ok: false, error: 'Please provide a valid phone number.' });
  if (!isValidEmail(fields.email)) {
    return json(422, { ok: false, error: 'Please provide a valid email address.' });
  }

  const sourcePage = sanitize(String(form.get('source_page') ?? ''), 200);

  // ── Turnstile ──
  if (env.TURNSTILE_SECRET_KEY) {
    const token = String(form.get('cf-turnstile-response') ?? '');
    const ip = request.headers.get('CF-Connecting-IP');
    if (!token || !(await verifyTurnstile(env.TURNSTILE_SECRET_KEY, token, ip))) {
      return json(403, {
        ok: false,
        error: 'Spam check failed or expired. Please complete the verification and try again.',
      });
    }
  } else if (!devMode) {
    console.warn('lead: TURNSTILE_SECRET_KEY not configured on production — submission accepted without verification');
  }

  // ── Lead identity ──
  const leadId = `UC-${Date.now().toString(36).toUpperCase()}-${crypto.randomUUID().slice(0, 6).toUpperCase()}`;
  const createdAt = new Date().toISOString();

  // ── File uploads → private R2 ──
  const files = form.getAll('photos').filter((f): f is File => f instanceof File && f.size > 0);
  if (files.length > MAX_FILES) {
    return json(422, { ok: false, error: `Please upload at most ${MAX_FILES} photos.` });
  }
  const totalBytes = files.reduce((sum, f) => sum + f.size, 0);
  if (files.some((f) => f.size > MAX_FILE_BYTES) || totalBytes > MAX_TOTAL_BYTES) {
    return json(422, { ok: false, error: 'Photos must be 10 MB or less each (30 MB total).' });
  }

  const uploadRefs: string[] = [];
  for (const file of files) {
    const bytes = new Uint8Array(await file.arrayBuffer());
    const ext = sniffImage(bytes, file.name);
    if (!ext) {
      return json(422, { ok: false, error: 'Only JPG, PNG and HEIC photos are supported.' });
    }
    if (env.LEAD_UPLOADS) {
      // Randomized object name; visitor filename never used.
      const key = `${devMode ? 'test/' : ''}${leadId}/${crypto.randomUUID()}.${ext}`;
      try {
        await env.LEAD_UPLOADS.put(key, bytes, {
          httpMetadata: { contentType: ext === 'png' ? 'image/png' : ext === 'heic' ? 'image/heic' : 'image/jpeg' },
        });
        uploadRefs.push(key);
      } catch (err) {
        console.error(`lead ${leadId}: R2 upload failed`, err);
        // Photos are optional context — do not fail the whole lead over storage.
      }
    }
  }

  const lead = {
    id: leadId,
    created_at: createdAt,
    full_name: fields.full_name,
    phone,
    email: fields.email,
    property_location: fields.property_location,
    city_or_county: fields.city_or_county,
    approximate_acreage: fields.acreage,
    service_needed: fields.service,
    property_condition: fields.condition,
    intended_use: fields.intended_use,
    terrain: fields.terrain,
    equipment_access: fields.access,
    preferred_timing: fields.timing,
    additional_details: fields.details,
    upload_references: uploadRefs,
    source_page: sourcePage,
    consent_recorded_at: createdAt,
    test_submission: devMode,
  };

  // ── Optional D1 persistence ──
  if (env.LEADS_DB) {
    try {
      await env.LEADS_DB.prepare(
        `INSERT INTO leads (id, created_at, full_name, phone, email, property_location,
          city_or_county, approximate_acreage, service_needed, property_condition, intended_use,
          terrain, equipment_access, preferred_timing, additional_details, upload_references,
          lead_status, source_page, consent_recorded_at)
         VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
      )
        .bind(
          lead.id, lead.created_at, lead.full_name, lead.phone, lead.email,
          lead.property_location, lead.city_or_county, lead.approximate_acreage,
          lead.service_needed, lead.property_condition, lead.intended_use, lead.terrain,
          lead.equipment_access, lead.preferred_timing, lead.additional_details,
          JSON.stringify(uploadRefs), devMode ? 'test' : 'new', lead.source_page,
          lead.consent_recorded_at,
        )
        .run();
    } catch (err) {
      console.error(`lead ${leadId}: D1 insert failed`, err);
      // Continue — webhook/email delivery below is the primary channel.
    }
  }

  // ── Delivery: webhook and/or email. Skipped in dev mode (safe local testing). ──
  let delivered = false;
  if (!devMode) {
    if (env.LEAD_WEBHOOK_URL) {
      try {
        const res = await fetch(env.LEAD_WEBHOOK_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...(env.LEAD_WEBHOOK_SECRET ? { 'X-Webhook-Secret': env.LEAD_WEBHOOK_SECRET } : {}),
          },
          body: JSON.stringify(lead),
        });
        delivered = res.ok;
        if (!res.ok) console.error(`lead ${leadId}: webhook returned ${res.status}`);
      } catch (err) {
        console.error(`lead ${leadId}: webhook delivery failed`, err);
      }
    }

    if (env.FORM_RECIPIENT_EMAIL && env.EMAIL_API_KEY) {
      // Generic transactional-email delivery (Resend-compatible endpoint).
      // Swap the URL/payload for your provider if different.
      try {
        const res = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${env.EMAIL_API_KEY}`,
          },
          body: JSON.stringify({
            from: 'leads@uppercumberlandlandclearing.com',
            to: [env.FORM_RECIPIENT_EMAIL],
            subject: `New land-clearing lead ${leadId} — ${lead.service_needed} in ${lead.city_or_county}`,
            text: [
              `Lead ${leadId} (${createdAt})`,
              `Name: ${lead.full_name}`,
              `Phone: ${lead.phone}`,
              `Email: ${lead.email}`,
              `Location: ${lead.property_location} (${lead.city_or_county})`,
              `Acreage: ${lead.approximate_acreage}`,
              `Service: ${lead.service_needed}`,
              `Condition: ${lead.property_condition}`,
              `Intended use: ${lead.intended_use}`,
              `Terrain: ${lead.terrain} · Access: ${lead.equipment_access}`,
              `Timing: ${lead.preferred_timing}`,
              `Details: ${lead.additional_details}`,
              `Photos: ${uploadRefs.length ? uploadRefs.join(', ') : 'none'}`,
              `Source page: ${lead.source_page}`,
            ].join('\n'),
          }),
        });
        delivered = delivered || res.ok;
        if (!res.ok) console.error(`lead ${leadId}: email API returned ${res.status}`);
      } catch (err) {
        console.error(`lead ${leadId}: email delivery failed`, err);
      }
    }

    // Never silently discard: if nothing delivered and nothing persisted, tell the visitor.
    if (!delivered && !env.LEADS_DB) {
      console.error(`lead ${leadId}: no delivery channel succeeded and no D1 configured`);
      return json(502, {
        ok: false,
        error: 'The request could not be delivered right now. Please try again or call instead.',
      });
    }
  } else {
    console.log(`lead ${leadId}: TEST submission (dev mode) — delivery skipped`, {
      service: lead.service_needed,
      city: lead.city_or_county,
    });
  }

  return json(200, { ok: true, leadId });
};
