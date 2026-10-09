import type { Asset } from './catalogue';
import type { Mode } from './types';
const encoder = new TextEncoder();
function hex(bytes: Uint8Array) {
  return [...bytes].map((b) => b.toString(16).padStart(2, '0')).join('');
}
export function randomToken() {
  return hex(crypto.getRandomValues(new Uint8Array(32)));
}
export async function tokenHash(token: string) {
  return hex(
    new Uint8Array(
      await crypto.subtle.digest('SHA-256', encoder.encode(token)),
    ),
  );
}
async function key(secret: string) {
  return crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign', 'verify'],
  );
}
export interface DownloadClaims {
  sessionHash: string;
  asset: Asset;
  mode: Mode;
  exp: number;
  v: 1;
}
function base64(bytes: Uint8Array) {
  return btoa(String.fromCharCode(...bytes))
    .replaceAll('+', '-')
    .replaceAll('/', '_')
    .replace(/=+$/, '');
}
function unbase64(s: string) {
  return Uint8Array.from(
    atob(s.replaceAll('-', '+').replaceAll('_', '/')),
    (c) => c.charCodeAt(0),
  );
}
export async function signDownload(
  claims: Omit<DownloadClaims, 'exp' | 'v'>,
  secret: string,
  now = Math.floor(Date.now() / 1000),
) {
  const body = base64(
    encoder.encode(JSON.stringify({ ...claims, exp: now + 600, v: 1 })),
  );
  return `${body}.${base64(new Uint8Array(await crypto.subtle.sign('HMAC', await key(secret), encoder.encode(body))))}`;
}
export async function verifyDownload(
  token: string,
  secret: string,
  now = Math.floor(Date.now() / 1000),
): Promise<DownloadClaims | null> {
  if (token.length > 1024) return null;
  try {
    const parts = token.split('.');
    if (parts.length !== 2) return null;
    const [body, signature] = parts;
    if (
      !(await crypto.subtle.verify(
        'HMAC',
        await key(secret),
        unbase64(signature),
        encoder.encode(body),
      ))
    )
      return null;
    const claims = JSON.parse(
      new TextDecoder().decode(unbase64(body)),
    ) as DownloadClaims;
    if (
      claims.v !== 1 ||
      !['pdf', 'epub'].includes(claims.asset) ||
      !['test', 'live'].includes(claims.mode) ||
      !/^\w{64}$/.test(claims.sessionHash) ||
      !Number.isSafeInteger(claims.exp) ||
      claims.exp <= now ||
      claims.exp > now + 600
    )
      return null;
    return claims;
  } catch {
    return null;
  }
}
// Distinguish an authentically expired token from a forged one without renewing it.
export async function expiredDownload(
  token: string,
  secret: string,
  now: number,
) {
  try {
    const exp = JSON.parse(
      new TextDecoder().decode(unbase64(token.split('.')[0])),
    ).exp;
    return (
      Number.isSafeInteger(exp) &&
      exp <= now &&
      !!(await verifyDownload(token, secret, exp - 1))
    );
  } catch {
    return false;
  }
}
