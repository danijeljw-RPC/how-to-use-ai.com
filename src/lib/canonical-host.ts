const PRODUCTION_HOST = 'how-to-use-ai.com';

/**
 * Returns a single permanent redirect to the canonical origin, or null when the URL is already canonical.
 * `www.` is always folded into the apex host; plain HTTP is upgraded to HTTPS on the production host only,
 * so localhost and workers.dev keep working as they are.
 */
export function canonicalHostRedirect(url: URL): Response | null {
  const isWww = url.hostname.startsWith('www.');
  const hostname = isWww ? url.hostname.slice('www.'.length) : url.hostname;
  const upgradeToHttps = url.protocol === 'http:' && hostname === PRODUCTION_HOST;
  if (!isWww && !upgradeToHttps) return null;
  const target = new URL(url);
  target.hostname = hostname;
  if (upgradeToHttps) target.protocol = 'https:';
  return new Response(null, { status: 301, headers: { location: target.href } });
}
