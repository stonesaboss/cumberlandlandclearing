export interface PageFaq {
  q: string;
  a: string;
}

export interface ContentSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface RelatedLink {
  label: string;
  href: string;
}

export interface ServicePage {
  /** URL slug without slashes, e.g. 'land-clearing-cookeville-tn' */
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  eyebrow: string;
  intro: string[];
  image: string;
  imageAlt: string;
  sections: ContentSection[];
  faqs: PageFaq[];
  related: RelatedLink[];
  /** Schema.org Service serviceType value */
  serviceType: string;
  areaServed: string[];
  breadcrumbLabel: string;
  /** Resource-hub links rendered as a compact "Helpful Guides" block. */
  resources?: RelatedLink[];
}
