import { SITE } from '../config';

/**
 * JSON-LD builders. Only truthful, verifiable data — no invented addresses,
 * ratings, reviews, hours or geo coordinates.
 */

export function organizationSchema(siteUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteUrl}/#organization`,
    name: SITE.name,
    url: `${siteUrl}/`,
    logo: `${siteUrl}${SITE.logoPath}`,
    description:
      'Independent project-request and referral service connecting property owners with local land-clearing and forestry-mulching contractors across the Upper Cumberland region of Tennessee.',
    areaServed: 'Upper Cumberland, Tennessee',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: SITE.phoneTel,
      email: SITE.email,
    },
  };
}

export function websiteSchema(siteUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    name: SITE.name,
    url: `${siteUrl}/`,
    publisher: { '@id': `${siteUrl}/#organization` },
  };
}

export interface Crumb {
  label: string;
  href: string;
}

export function breadcrumbSchema(siteUrl: string, crumbs: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.label,
      item: `${siteUrl}${c.href}`,
    })),
  };
}

export function serviceSchema(
  siteUrl: string,
  opts: { name: string; description: string; url: string; areaServed: string[] },
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: opts.name,
    description: opts.description,
    url: `${siteUrl}${opts.url}`,
    areaServed: opts.areaServed.map((a) => ({ '@type': 'Place', name: a })),
    provider: { '@id': `${siteUrl}/#organization` },
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}
