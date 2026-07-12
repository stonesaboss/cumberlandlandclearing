/**
 * Pages middleware: keep preview deployments out of search indexes.
 *
 * Cloudflare sets CF_PAGES_BRANCH on Pages builds. Anything that isn't the
 * production branch gets X-Robots-Tag: noindex, nofollow on every response.
 * The production deployment is untouched.
 */

interface Env {
  CF_PAGES_BRANCH?: string;
}

export const onRequest: PagesFunction<Env> = async (context) => {
  const response = await context.next();
  const branch = context.env.CF_PAGES_BRANCH ?? '';
  if (branch && branch !== 'main') {
    const headers = new Headers(response.headers);
    headers.set('X-Robots-Tag', 'noindex, nofollow');
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  }
  return response;
};
