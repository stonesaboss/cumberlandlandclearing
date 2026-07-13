// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * Canonical production URL. Set PUBLIC_SITE_URL in Cloudflare Pages
 * (production AND preview environments) so canonical tags, Open Graph URLs,
 * sitemap URLs and structured data always point at the production domain.
 */
const site = process.env.PUBLIC_SITE_URL || 'https://cumberlandlandclearing.com';

export default defineConfig({
  site,
  trailingSlash: 'always',
  integrations: [
    sitemap({
      // Keep noindex/utility pages out of the sitemap.
      filter: (page) => !page.includes('/thank-you/'),
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
});
