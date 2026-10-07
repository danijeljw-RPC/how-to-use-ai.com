import { describe, expect, it } from 'vitest';
import {
  privateHeaders,
  boundedText,
  handleStoreCheckout,
  handleStoreWebhook,
  storeForm,
} from '../src/lib/store/http';
import { StoreError } from '../src/lib/store/checkout';
function form(origin = 'https://how-to-use-ai.com') {
  return new Request('https://how-to-use-ai.com/api/checkout/', {
    method: 'POST',
    headers: { origin, 'content-type': 'application/x-www-form-urlencoded' },
    body: 'format=pdf&currency=aud&terms=yes&amount=1',
  });
}
describe('public store request boundaries', () => {
  it('keeps browser form origins while withholding external referrers', () => {
    expect(privateHeaders['referrer-policy']).toBe('same-origin');
  });
  it('accepts same-site forms but rejects opaque origins', async () => {
    expect((await storeForm(form())).get('format')).toBe('pdf');
    await expect(storeForm(form('null'))).rejects.toMatchObject({ status: 403 });
  });
  it('requires same-origin POST forms', async () => {
    await expect(
      storeForm(form('https://attacker.example')),
    ).rejects.toMatchObject({ status: 403 });
    await expect(
      storeForm(new Request('https://how-to-use-ai.com/api/checkout/')),
    ).rejects.toMatchObject({ status: 405 });
  });
  it('bounds an undeclared request body while streaming', async () => {
    const request = new Request('https://how-to-use-ai.com/api/store/access/', {
      method: 'POST',
      body: 'x'.repeat(8193),
    });
    await expect(boundedText(request)).rejects.toBeInstanceOf(StoreError);
  });
  it('keeps checkout closed before database/assets are ready', async () => {
    expect(
      (await handleStoreCheckout(form(), { COMMERCE_ENABLED: 'false' })).status,
    ).toBe(503);
  });
  it('rejects a mismatched Stripe key/mode before reading webhook data', async () => {
    const request = new Request(
      'https://how-to-use-ai.com/api/stripe/webhook/',
      { method: 'POST', body: '{}' },
    );
    expect(
      (
        await handleStoreWebhook(request, {
          STORE_MODE: 'test',
          STRIPE_SECRET_KEY: 'sk_live_fixture',
          STRIPE_WEBHOOK_SECRET: 'whsec_fixture',
        })
      ).status,
    ).toBe(503);
  });
});
