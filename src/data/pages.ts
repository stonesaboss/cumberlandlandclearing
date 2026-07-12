import type { ServicePage } from './types';
import { corePages } from './pages-core';
import { acreagePages } from './pages-acreage';
import { locationPages } from './pages-locations';

export const allServicePages: ServicePage[] = [...corePages, ...acreagePages, ...locationPages];

export function getPage(slug: string): ServicePage | undefined {
  return allServicePages.find((p) => p.slug === slug);
}
