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

  /**
   * TODO: replace with the real tracking phone number before launch.
   * The 555 number below is an intentionally fictional placeholder.
   */
  phoneDisplay: '(931) 555-0123',
  phoneTel: '+19315550123',

  /** TODO: replace with the real contact email before launch. */
  email: 'projects@uppercumberlandlandclearing.com',

  /**
   * Logo file. Replace public/logos/logo.svg with the finalized supplied
   * logo (e.g. drop in public/logos/logo.png) and update this path.
   */
  logoPath: '/logos/logo.svg',

  /** Browser-safe integration IDs — set via Cloudflare Pages env vars. */
  analyticsId: import.meta.env.PUBLIC_ANALYTICS_ID ?? '',
  tagManagerId: import.meta.env.PUBLIC_TAG_MANAGER_ID ?? '',
  turnstileSiteKey: import.meta.env.PUBLIC_TURNSTILE_SITE_KEY ?? '',
} as const;

/** Shown near the form and in the footer. Required disclosure — do not remove. */
export const REFERRAL_DISCLOSURE =
  'Upper Cumberland Land Clearing is an independent referral service and does not directly perform land-clearing work unless otherwise stated. Project requests may be shared with local contractors. Contractor availability, qualifications, estimates, pricing and service terms are determined independently by the contractor.';

export const PROCESS_DISCLOSURE =
  'Upper Cumberland Land Clearing is an independent project-request and referral service that helps connect property owners with local land-clearing contractors. Contractor availability, qualifications, service offerings, estimates, pricing and scheduling are determined by the contractor.';

export const CONSENT_TEXT =
  'By submitting this form, you agree to be contacted regarding your project request by this website and/or a local land-clearing contractor. Submission does not guarantee contractor availability, a project estimate or service.';
