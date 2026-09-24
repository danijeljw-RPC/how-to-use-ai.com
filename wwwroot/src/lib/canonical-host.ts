/** Returns a permanent redirect from `www.` to the apex host, or null when the host is already canonical. */
export function canonicalHostRedirect(url: URL): Response | null {
  if (!url.hostname.startsWith('www.')) return null;
  const target = new URL(url);
  target.hostname = url.hostname.slice('www.'.length);
  return new Response(null, { status: 301, headers: { location: target.href } });
}
