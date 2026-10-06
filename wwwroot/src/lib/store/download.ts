import { expiredDownload, verifyDownload } from './tokens';
import { storeMode, type StoreDB, type StoreEnv } from './types';
const headers = {
  'cache-control': 'no-store, private',
  'referrer-policy': 'no-referrer',
  'x-robots-tag': 'noindex, nofollow',
  'x-content-type-options': 'nosniff',
};
export async function downloadFile(options: {
  db: StoreDB;
  env: StoreEnv;
  token: string;
  now?: () => number;
}) {
  const { db, env, token } = options,
    now = (options.now ?? (() => Math.floor(Date.now() / 1000)))();
  if (!env.STORE_SIGNING_SECRET || !env.BOOK_FILES)
    return new Response('Downloads are temporarily unavailable.', {
      status: 503,
      headers,
    });
  const claims = await verifyDownload(token, env.STORE_SIGNING_SECRET, now);
  if (!claims)
    return new Response(
      (await expiredDownload(token, env.STORE_SIGNING_SECRET, now))
        ? 'This download link expired. Sign in at /downloads/ for a new link.'
        : 'This download link is invalid.',
      {
        status: (await expiredDownload(token, env.STORE_SIGNING_SECRET, now))
          ? 410
          : 403,
        headers,
      },
    );
  if (claims.mode !== storeMode(env))
    return new Response('Invalid download link.', { status: 403, headers });
  const entitlement = await db
    .prepare(
      `SELECT 1 FROM store_auth a JOIN store_entitlements e ON e.mode=a.mode AND e.email=a.email JOIN store_orders o ON o.session_id=e.order_id AND o.mode=e.mode WHERE a.token_hash=? AND a.mode=? AND a.kind='session' AND a.used_at IS NULL AND a.expires_at>? AND e.asset=? AND o.status='paid' LIMIT 1`,
    )
    .bind(claims.sessionHash, claims.mode, now, claims.asset)
    .first();
  if (!entitlement)
    return new Response(
      'Download access is unavailable. Sign in at /downloads/ or contact hello@repasscloud.com.',
      { status: 403, headers },
    );
  const assetKey =
    claims.asset === 'pdf' ? env.BOOK_PDF_KEY : env.BOOK_EPUB_KEY;
  const object = assetKey ? await env.BOOK_FILES.get(assetKey) : null;
  if (!object)
    return new Response(
      'The latest file is temporarily unavailable. Please try again later.',
      { status: 503, headers },
    );
  return new Response(object.body, {
    headers: {
      ...headers,
      'content-type':
        claims.asset === 'pdf' ? 'application/pdf' : 'application/epub+zip',
      'content-disposition': `attachment; filename="ai-for-normal-people.${claims.asset}"`,
      'content-length': String(object.size),
    },
  });
}
