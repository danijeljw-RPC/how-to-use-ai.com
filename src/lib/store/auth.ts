import { randomToken, tokenHash } from './tokens';
import type { Mode, StoreDB } from './types';
export const SESSION_COOKIE = '__Host-book-session';
export function emailAddress(value: string): string | null {
  const email = value.trim().toLowerCase();
  return email.length <= 254 &&
    /^[^\s@<>\x00-\x1f\x7f]+@[^\s@<>\x00-\x1f\x7f]+\.[^\s@<>\x00-\x1f\x7f]+$/.test(
      email,
    )
    ? email
    : null;
}
export async function rateLimit(
  db: StoreDB,
  key: string,
  now: number,
  limit = 5,
  window = 900,
) {
  const result = await db
    .prepare(
      `INSERT INTO store_rate_limits (key,window_start,count) VALUES (?,?,1)
    ON CONFLICT(key) DO UPDATE SET window_start=CASE WHEN window_start<=? THEN excluded.window_start ELSE window_start END,
    count=CASE WHEN window_start<=? THEN 1 ELSE count+1 END RETURNING count`,
    )
    .bind(key, now, now - window, now - window)
    .first<{ count: number }>();
  return !!result && result.count <= limit;
}
export async function requestAccess(
  db: StoreDB,
  address: string,
  mode: Mode,
  now: number,
  expiry = 900,
): Promise<string | null> {
  const email = emailAddress(address);
  if (!email) throw new Error('Invalid email');
  const token = randomToken();
  const hash = await tokenHash(token);
  const result = await db
    .prepare(
      `INSERT INTO store_auth (token_hash,mode,email,kind,expires_at,created_at)
    SELECT ?,?,?,'login',?,? WHERE NOT EXISTS (SELECT 1 FROM store_auth WHERE mode=? AND email=? AND kind='login' AND used_at IS NULL AND created_at>?)`,
    )
    .bind(hash, mode, email, now + expiry, now, mode, email, now - 60)
    .run();
  return result.meta.changes ? token : null;
}
export async function consumeLogin(
  db: StoreDB,
  token: string,
  mode: Mode,
  now: number,
): Promise<string | null> {
  if (!/^[a-f0-9]{64}$/.test(token)) return null;
  const session = randomToken();
  const sessionHash = await tokenHash(session),
    loginHash = await tokenHash(token);
  const batch = await db.batch([
    db
      .prepare(
        `UPDATE store_auth SET used_at=? WHERE token_hash=? AND mode=? AND kind='login' AND used_at IS NULL AND expires_at>?`,
      )
      .bind(now, loginHash, mode, now),
    db
      .prepare(
        `INSERT INTO store_auth (token_hash,mode,email,kind,expires_at,created_at)
      SELECT ?,mode,email,'session',?,? FROM store_auth WHERE token_hash=? AND mode=? AND used_at=? AND changes()=1`,
      )
      .bind(sessionHash, now + 604800, now, loginHash, mode, now),
  ]);
  const last = batch[1] as { meta: { changes?: number } };
  return last.meta.changes ? session : null;
}
export async function getBuyer(
  db: StoreDB,
  session: string,
  mode: Mode,
  now: number,
): Promise<{ email: string; token_hash: string } | null> {
  if (!/^[a-f0-9]{64}$/.test(session)) return null;
  return db
    .prepare(
      `SELECT email,token_hash FROM store_auth WHERE token_hash=? AND mode=? AND kind='session' AND used_at IS NULL AND expires_at>?`,
    )
    .bind(await tokenHash(session), mode, now)
    .first();
}
export function cookieSession(request: Request) {
  return (
    request.headers
      .get('cookie')
      ?.split(';')
      .map((x) => x.trim())
      .find((x) => x.startsWith(`${SESSION_COOKIE}=`))
      ?.slice(SESSION_COOKIE.length + 1) ?? ''
  );
}
export async function ownedAssets(db: StoreDB, email: string, mode: Mode) {
  return (
    await db
      .prepare(
        `SELECT DISTINCT e.asset FROM store_entitlements e JOIN store_orders o ON o.session_id=e.order_id AND o.mode=e.mode WHERE e.mode=? AND e.email=? AND o.status='paid'`,
      )
      .bind(mode, email)
      .all<{ asset: 'pdf' | 'epub' }>()
  ).results.map((r) => r.asset);
}
