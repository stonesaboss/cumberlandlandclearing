/// <reference types="astro/client" />

/**
 * Browser-safe environment variables (inlined at build time).
 * Set these in Cloudflare Pages build environment for Production AND Preview.
 * Server-only secrets (TURNSTILE_SECRET_KEY, LEAD_WEBHOOK_*, EMAIL_API_KEY…)
 * are runtime Pages Function bindings — see functions/api/lead.ts.
 */
interface ImportMetaEnv {
  readonly PUBLIC_SITE_URL?: string;
  readonly PUBLIC_TURNSTILE_SITE_KEY?: string;
  readonly PUBLIC_ANALYTICS_ID?: string;
  readonly PUBLIC_TAG_MANAGER_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
