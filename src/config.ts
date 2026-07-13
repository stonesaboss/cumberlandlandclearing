/**
 * Site-wide editable settings.
 *
 * Everything a non-developer is likely to change lives here:
 * phone number, email, logo path, analytics IDs, and disclosure copy.
 */

export const SITE = {
  name: 'Upper Cumberland Land Clearing',
  shortName: 'UC Land Clearing',
  region: 'Upper Cumberland, Tennessee',

  phoneDisplay: '(629) 888-3733',
  phoneTel: '+16298883733',

  email: 'projects@cumberlandlandclearing.com',

  /**
   * Finalized supplied logo. logo.webp is the 480px web version;
   * logo-full.png is the original full-resolution asset.
   */
  logoPath: '/logos/logo.webp',

  /**
   * Browser-safe integration IDs — set via Cloudflare Pages env vars.
   * (The Turnstile site key is read directly from PUBLIC_TURNSTILE_SITE_KEY
   * in src/components/LeadForm.astro.)
   */
  analyticsId: import.meta.env.PUBLIC_ANALYTICS_ID || 'G-6NBXC4SXPG',
  tagManagerId: import.meta.env.PUBLIC_TAG_MANAGER_ID ?? '',
} as const;

/** Shown near the form and in the footer. Required disclosure — do not remove. */
export const REFERRAL_DISCLOSURE =
  'Upper Cumberland Land Clearing is an independent referral service and does not directly perform land-clearing work unless otherwise stated. Project requests may be shared with local contractors. Contractor availability, qualifications, estimates, pricing and service terms are determined independently by the contractor.';

export const PROCESS_DISCLOSURE =
  'Upper Cumberland Land Clearing is an independent project-request and referral service that helps connect property owners with local land-clearing contractors. Contractor availability, qualifications, service offerings, estimates, pricing and scheduling are determined by the contractor.';

export const CONSENT_TEXT =
  'By submitting this form, you agree to be contacted regarding your project request by this website and/or a local land-clearing contractor. Submission does not guarantee contractor availability, a project estimate or service.';
