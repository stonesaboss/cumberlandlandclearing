# Upper Cumberland Land Clearing

Local SEO lead-generation website for land clearing and forestry mulching across the Upper
Cumberland region of Tennessee. Built with **Astro 5** (static HTML output), styled to the
approved mockup, with a **Cloudflare Pages Function** backend for lead intake.

> **This site is an independent project-request and referral service.** All copy is written to
> that standard — no invented reviews, credentials, pricing, addresses or contractor claims.
> Keep it that way when editing content.

---

## Quick start

```bash
npm install
npm run dev        # Astro dev server (UI only — /api/lead is not available here)
npm run build      # production build → dist/
npm run preview    # preview the built static site
npm run typecheck  # astro check (TypeScript + template validation)
npm run check      # typecheck + build
npm run pages:dev  # wrangler pages dev dist — full site + /api/lead + _headers/_redirects
```

To test the form end-to-end locally: `npm run build`, then `npm run pages:dev` and submit the
form at `http://localhost:8788`. Copy `.env.example` to `.dev.vars` for local Function config.
With `DEV_MODE=true` (or on any non-`main` branch deployment) submissions are labeled **TEST**,
delivery to webhooks/email is skipped, and R2 uploads (if enabled) go under a `test/` prefix —
local testing can never notify a live contractor.

## Cloudflare Pages deployment

1. Create/open the GitHub repository and push this project.
2. In Cloudflare, create a **Pages** project and connect the GitHub repository.
3. Production branch: **main** · Build command: **`npm run build`** · Output directory: **`dist`**.
4. Add environment variables (below) for **both Production and Preview**.
5. Add the custom domain, choose the canonical host (apex recommended) and add a zone
   Redirect Rule from the other host (e.g. `www` → apex, 301).
6. Verify redirects, canonical tags, `/sitemap-index.xml`, the 404 page and a test form submission.

Pull requests get preview deployments automatically. `functions/_middleware.ts` adds
`X-Robots-Tag: noindex, nofollow` to every non-`main` deployment, so previews stay out of
search indexes. Build failures stop deployment; never commit `dist/`.

## Environment variables

| Variable | Where | Secret? | Purpose |
|---|---|---|---|
| `PUBLIC_SITE_URL` | Build env (prod + preview) | no | Canonical production URL used for canonicals, OG, sitemap, schema |
| `PUBLIC_TURNSTILE_SITE_KEY` | Build env | no | Turnstile widget site key (browser-safe) |
| `TURNSTILE_SECRET_KEY` | Pages **secret** | **yes** | Server-side Turnstile verification in `/api/lead` |
| `LEAD_WEBHOOK_URL` | Pages secret | yes | CRM/Zapier/Make webhook receiving lead JSON |
| `LEAD_WEBHOOK_SECRET` | Pages secret | yes | Sent as `X-Webhook-Secret` header |
| `FORM_RECIPIENT_EMAIL` | Pages var | no | Lead notification recipient |
| `EMAIL_API_KEY` | Pages secret | yes | Transactional email API key (Resend-compatible; swap provider in `functions/api/lead.ts`) |
| `PUBLIC_ANALYTICS_ID` | Build env | no | GA4 measurement ID |
| `PUBLIC_TAG_MANAGER_ID` | Build env | no | GTM container ID (takes precedence over GA4 snippet) |
| `DEV_MODE` | `.dev.vars` only | no | `true` = label submissions TEST and skip delivery |

Locally: `.env` feeds Astro (`PUBLIC_*` at build time), `.dev.vars` feeds `wrangler pages dev`.
Both are git-ignored. Never commit real keys.

## Turnstile

1. Create a Turnstile widget in Cloudflare for the production domain (add `localhost` for dev).
2. Set `PUBLIC_TURNSTILE_SITE_KEY` (build env) and `TURNSTILE_SECRET_KEY` (secret).
3. The widget renders automatically once the site key is present; the Function rejects
   missing/expired tokens with an accessible error and the widget resets for retry.
4. Without a configured secret the Function logs a warning on production and accepts — set the
   secret before launch.

## Optional storage: R2 photos & D1 leads

Both are optional; the endpoint works without them (webhook/email delivery only).

- **R2 (photo uploads)**: create a **private** bucket, then uncomment the `r2_buckets` block in
  `wrangler.jsonc` and set the real bucket name, and add the same binding (`LEAD_UPLOADS`) in the
  Pages project settings. Uploads get randomized object names, validated MIME/magic-bytes
  (JPG/PNG/HEIC only), 6-file / 10 MB-each / 30 MB-total limits. The bucket must never be public;
  lead notifications carry object keys, not URLs. Retention: prune objects older than your chosen
  policy (e.g. 90 days) with an R2 lifecycle rule.
- **D1 (lead metadata)**: create a database, uncomment `d1_databases` in `wrangler.jsonc` with the
  real ID, add the `LEADS_DB` binding in Pages settings, then run
  `npx wrangler d1 migrations apply <name>`. Image binaries are never stored in D1 — only R2 keys.
  Delete a lead with `DELETE FROM leads WHERE id = ?` plus removal of its R2 objects.

## Replacing placeholders before launch

All in [`src/config.ts`](src/config.ts) unless noted:

1. **Logo** — done: the finalized logo ships as `public/logos/logo.webp` (480px web version)
   with the original at `public/logos/logo-full.png`. Favicon and apple-touch-icon are derived
   from it.
2. **Phone** — `phoneDisplay` / `phoneTel` (currently a fictional 555 number).
3. **Email** — `email`.
4. **Imagery** — files in `public/images/` are illustrated placeholders. Replace with real,
   properly licensed photos (or verified contractor photos) keeping the same filenames, or update
   the paths in `src/pages/index.astro` and `src/data/pages-*.ts`. Never label stock images as
   completed local projects.
5. **robots.txt** — update the sitemap URL if the domain differs.
6. **`_redirects` / `_headers`** — review host names and CSP if you add third-party embeds.

## Editing content

- **Service/location pages** live as data in `src/data/pages-core.ts`, `pages-acreage.ts` and
  `pages-locations.ts`, rendered by `src/pages/[slug].astro`. Each entry owns its URL, title tag,
  meta description, H1, sections, FAQs, related links and Service-schema fields.
- **To add a location page without thin duplication**: add a new entry with genuinely local
  content (county, terrain, property mix, availability caveats) — do not copy an existing entry
  and swap city names. If there isn't enough distinct to say, extend the grouped regional page
  instead (see `land-clearing-livingston-smithville-tn`).
- **Homepage FAQs**: `src/data/faqs.ts` (FAQPage schema is emitted only where FAQs are visible).
- **Form options**: `src/data/form-options.ts` — mirror any changes in `functions/api/lead.ts`.
- **Sitemap** regenerates on every build (`@astrojs/sitemap`); no manual step.

## Quality checks

- `npm run check` — TypeScript + full production build (fails on broken imports/templates).
- Internal links: all internal hrefs are relative and covered by the build; spot-check with any
  crawler against `npm run preview`.
- SEO/accessibility audit: run Lighthouse against `npm run preview` (or a preview deployment) and
  verify unique titles/descriptions/H1s per page, form labels, contrast and keyboard navigation.

## Workflow

`main` = production. Branch for changes → PR → Cloudflare preview → merge to deploy.
Do **not** configure GitHub Pages; GitHub is source control only.

## Repository layout

```
public/           static assets, _headers, _redirects, robots.txt, logos, placeholder images
src/config.ts     editable site settings (phone, email, logo, IDs)
src/data/         page content, nav, FAQs, form options
src/components/   header/footer/form/FAQ/CTA/map components
src/layouts/      BaseLayout (SEO head, schema, analytics)
src/pages/        homepage, [slug] service/location template, utility pages, 404
functions/        Cloudflare Pages Functions (lead endpoint, preview-noindex middleware)
migrations/       D1 schema for optional lead storage
```
