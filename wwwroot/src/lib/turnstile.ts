export interface TurnstileVerificationOptions {
  secret: string;
  token: string;
  expectedAction: 'newsletter-signup' | 'contact-message';
  remoteIp?: string;
  fetcher?: typeof fetch;
}

export type TurnstileResult =
  | { ok: true }
  | { ok: false; reason: 'missing-token' | 'verification-failed' | 'wrong-action' | 'provider-error' };

interface TurnstileResponse {
  success?: boolean;
  action?: string;
}

export async function verifyTurnstile(options: TurnstileVerificationOptions): Promise<TurnstileResult> {
  if (!options.token) return { ok: false, reason: 'missing-token' };
  const body = new URLSearchParams({ secret: options.secret, response: options.token });
  if (options.remoteIp) body.set('remoteip', options.remoteIp);

  try {
    const response = await (options.fetcher ?? fetch)('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
    });
    if (!response.ok) return { ok: false, reason: 'provider-error' };
    const result = await response.json() as TurnstileResponse;
    if (!result.success) return { ok: false, reason: 'verification-failed' };
    if (result.action !== options.expectedAction) return { ok: false, reason: 'wrong-action' };
    return { ok: true };
  } catch {
    return { ok: false, reason: 'provider-error' };
  }
}
