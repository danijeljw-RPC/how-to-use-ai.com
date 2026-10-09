/** One year, without includeSubDomains or preload: both are hard to reverse and need their own decision (OI-0003). */
export const HSTS_HEADER = 'max-age=31536000';

/**
 * Adds site-wide response headers: an explicit UTF-8 charset on HTML, and HSTS on HTTPS responses.
 * Returns the original response untouched when nothing needs changing.
 */
export function withSiteHeaders(response: Response, url: URL): Response {
  const contentType = response.headers.get('content-type') ?? '';
  const needsCharset = contentType.startsWith('text/html') && !/charset=/i.test(contentType);
  const needsHsts = url.protocol === 'https:' && !response.headers.has('strict-transport-security');
  if (!needsCharset && !needsHsts) return response;

  const headers = new Headers(response.headers);
  if (needsCharset) headers.set('content-type', 'text/html; charset=utf-8');
  if (needsHsts) headers.set('strict-transport-security', HSTS_HEADER);
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
}
