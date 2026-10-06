import type Stripe from 'stripe';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { DatabaseSync } from 'node:sqlite';
import { readFileSync } from 'node:fs';
import { catalogue, amountFor, currencies } from '../src/lib/store/catalogue';
import {
  signDownload,
  verifyDownload,
  tokenHash,
} from '../src/lib/store/tokens';
import { requestAccess, consumeLogin, getBuyer } from '../src/lib/store/auth';
import { startCheckout, type Attempt } from '../src/lib/store/checkout';
import { acceptStoreEvent } from '../src/lib/store/webhook';
import { deliverOutbox } from '../src/lib/store/email';
import { downloadFile } from '../src/lib/store/download';
import { sqliteStore } from './helpers/sqlite-store';

let sql: DatabaseSync;
let db: ReturnType<typeof sqliteStore>;
const now = () => 1_800_000_000;
const env = {
  SITE_URL: 'https://how-to-use-ai.com',
  COMMERCE_ENABLED: 'true',
  STORE_MODE: 'test',
  STRIPE_SECRET_KEY: 'sk_test_fixture',
  STRIPE_WEBHOOK_SECRET: 'whsec_fixture',
  STORE_SIGNING_SECRET: 'a-test-only-signing-secret-longer-than-32-characters',
  STORE_EMAIL_FROM: 'hello@repasscloud.com',
  STORE_EMAIL_READY: 'true',
  STORE_PRODUCT_PDF: 'prod_pdf',
  STORE_PRODUCT_EPUB: 'prod_epub',
  STORE_PRODUCT_BUNDLE: 'prod_bundle',
  BOOK_PDF_KEY: 'current/book.pdf',
  BOOK_EPUB_KEY: 'current/book.epub',
  BOOK_FILES: {
    head: vi.fn().mockResolvedValue({ size: 8 }),
    get: vi.fn().mockResolvedValue({ body: 'newest', size: 6 }),
  },
  STORE_EMAIL: { send: vi.fn().mockResolvedValue({ messageId: 'mail_1' }) },
};
beforeEach(() => {
  env.BOOK_FILES.head.mockResolvedValue({ size: 8 });
  env.BOOK_FILES.get.mockResolvedValue({ body: 'newest', size: 6 });
  env.STORE_EMAIL.send.mockResolvedValue({ messageId: 'mail_1' });
  create.mockImplementation(async () => ({
    id: 'cs_1',
    url: 'https://checkout.stripe.com/c/pay/test',
    expires_at: now() + 1800,
  }));
  sql = new DatabaseSync(':memory:');
  sql.exec('PRAGMA foreign_keys=ON');
  for (const name of ['0001_initial.sql', '0002_digital_store.sql']) {
    // First migration uses the repository's exact filename below.
    if (name.startsWith('0001')) continue;
    sql.exec(
      readFileSync(new URL(`../migrations/${name}`, import.meta.url), 'utf8'),
    );
  }
  db = sqliteStore(sql);
});

async function buyer(email = 'buyer@example.com') {
  const login = await requestAccess(db, email, 'test', now());
  const result = await consumeLogin(db, login!, 'test', now());
  return { email, session: result!, hash: await tokenHash(result!) };
}
afterEach(() => sql.close());
const create = vi.fn(
  async (_params: Stripe.Checkout.SessionCreateParams, _key: string) => ({
    id: 'cs_1',
    url: 'https://checkout.stripe.com/c/pay/test',
    expires_at: now() + 1800,
  }),
);

function paid(
  attempt: Attempt,
  type = 'checkout.session.completed',
  eventId = 'evt_1',
) {
  return {
    id: eventId,
    type,
    livemode: false,
    data: { object: { id: 'cs_1' } },
    session: {
      id: 'cs_1',
      payment_status: 'paid',
      payment_intent: 'pi_1',
      customer_details: { email: attempt.email },
      currency: attempt.currency,
      amount_subtotal: attempt.amount,
      metadata: {
        project: 'how-to-use-ai.com',
        attempt: attempt.id,
        format: attempt.format,
        mode: 'test',
      },
      line_items: {
        data: [
          {
            quantity: 1,
            price: {
              product: `prod_${attempt.format}`,
              currency: attempt.currency,
              unit_amount: attempt.amount,
            },
          },
        ],
      },
    },
  };
}

describe('digital store security and fulfilment', () => {
  it('uses the approved prices for every currency and zero-decimal JPY', () => {
    expect(currencies).toHaveLength(8);
    expect(currencies.map((c) => amountFor('pdf', c))).toEqual([
      799, 599, 699, 1199, 4099, 1099, 13900, 1149,
    ]);
    expect(currencies.map((c) => amountFor('epub', c))).toEqual([
      799, 599, 699, 1199, 4099, 1099, 13900, 1149,
    ]);
    expect(currencies.map((c) => amountFor('bundle', c))).toEqual([
      1099, 799, 899, 1599, 5599, 1499, 19900, 1549,
    ]);
    expect(catalogue.bundle.assets).toEqual(['pdf', 'epub']);
  });
  it('consumes a login once and isolates test/live sessions', async () => {
    const token = await requestAccess(db, 'Buyer@Example.com', 'test', now());
    expect(
      await requestAccess(db, 'buyer@example.com', 'test', now()),
    ).toBeNull();
    const session = await consumeLogin(db, token!, 'test', now());
    expect(await consumeLogin(db, token!, 'test', now())).toBeNull();
    expect(await getBuyer(db, session!, 'live', now())).toBeNull();
    expect((await getBuyer(db, session!, 'test', now()))?.email).toBe(
      'buyer@example.com',
    );
    expect(
      sql.prepare('SELECT token_hash FROM store_auth').all(),
    ).not.toContainEqual({ token_hash: token });
  });
  it('rejects expired login tokens', async () => {
    const token = await requestAccess(db, 'buyer@example.com', 'test', now());
    expect(await consumeLogin(db, token!, 'test', now() + 901)).toBeNull();
  });
  it('requires verified email and configured private assets before checkout', async () => {
    await expect(
      startCheckout({
        db,
        env,
        session: '',
        format: 'pdf',
        currency: 'aud',
        create,
        now,
      }),
    ).rejects.toThrow('verify');
    const b = await buyer();
    await expect(
      startCheckout({
        db,
        env: { ...env, BOOK_PDF_KEY: '' },
        session: b.session,
        format: 'pdf',
        currency: 'aud',
        create,
        now,
      }),
    ).rejects.toThrow('available');
  });
  it('maps prices on the server and reserves overlapping purchases across requests', async () => {
    const b = await buyer();
    await startCheckout({
      db,
      env,
      session: b.session,
      format: 'bundle',
      currency: 'jpy',
      create,
      now,
    });
    expect(create.mock.calls[0][0]).toMatchObject({
      currency: 'jpy',
      customer_email: b.email,
      line_items: [{ price_data: { unit_amount: 1599, currency: 'jpy' } }],
    });
    await expect(
      startCheckout({
        db,
        env,
        session: b.session,
        format: 'pdf',
        currency: 'aud',
        create,
        now,
      }),
    ).rejects.toThrow('progress');
  });
  it('rejects an ownership race between the initial lookup and reservation', async () => {
    const b = await buyer();
    await startCheckout({
      db,
      env,
      session: b.session,
      format: 'pdf',
      currency: 'aud',
      create,
      now,
    });
    const e = paid(
      sql.prepare('SELECT * FROM store_attempts').get() as unknown as Attempt,
    );
    let resume!: () => void;
    let paused!: () => void;
    const headEntered = new Promise<void>((resolve) => {
      paused = resolve;
    });
    const headReleased = new Promise<void>((resolve) => {
      resume = resolve;
    });
    const head = vi.fn(async () => {
      paused();
      await headReleased;
      return env.BOOK_FILES.head('fixture');
    });
    const second = startCheckout({
      db,
      env: { ...env, BOOK_FILES: { ...env.BOOK_FILES, head } },
      session: b.session,
      format: 'pdf',
      currency: 'aud',
      create,
      now,
    });
    await headEntered;
    await acceptStoreEvent({
      db,
      env,
      event: e,
      retrieve: async () => e.session,
      now,
    });
    resume();
    await expect(second).rejects.toThrow('already');
    expect(create).toHaveBeenCalledTimes(1);
  });

  it('records a paid bundle once across duplicate and different Stripe events', async () => {
    const b = await buyer();
    await startCheckout({
      db,
      env,
      session: b.session,
      format: 'bundle',
      currency: 'aud',
      create,
      now,
    });
    const attempt = sql
      .prepare('SELECT * FROM store_attempts')
      .get() as unknown as Attempt;
    const event = paid(attempt);
    await acceptStoreEvent({
      db,
      env,
      event,
      retrieve: async () => event.session,
      now,
    });
    await acceptStoreEvent({
      db,
      env,
      event,
      retrieve: async () => event.session,
      now,
    });
    await acceptStoreEvent({
      db,
      env,
      event: {
        ...event,
        id: 'evt_2',
        type: 'checkout.session.async_payment_succeeded',
      },
      retrieve: async () => event.session,
      now,
    });
    expect(sql.prepare('SELECT * FROM store_orders').all()).toHaveLength(1);
    expect(sql.prepare('SELECT * FROM store_entitlements').all()).toHaveLength(
      2,
    );
    expect(sql.prepare('SELECT * FROM store_outbox').all()).toHaveLength(1);
    await expect(
      startCheckout({
        db,
        env,
        session: b.session,
        format: 'pdf',
        currency: 'aud',
        create,
        now,
      }),
    ).rejects.toThrow('already');
  });
  it('grants nothing for unpaid, wrong-price or live events in test mode', async () => {
    const b = await buyer();
    await startCheckout({
      db,
      env,
      session: b.session,
      format: 'pdf',
      currency: 'aud',
      create,
      now,
    });
    const e = paid(
      sql.prepare('SELECT * FROM store_attempts').get() as unknown as Attempt,
    );
    await acceptStoreEvent({
      db,
      env,
      event: e,
      retrieve: async () => ({ ...e.session, payment_status: 'unpaid' }),
      now,
    });
    expect(sql.prepare('SELECT * FROM store_entitlements').all()).toHaveLength(
      0,
    );
    await expect(
      acceptStoreEvent({
        db,
        env,
        event: { ...e, id: 'evt_wrong' },
        retrieve: async () => ({ ...e.session, amount_subtotal: 1 }),
        now,
      }),
    ).rejects.toThrow('match');
    await expect(
      acceptStoreEvent({
        db,
        env,
        event: { ...e, id: 'evt_live', livemode: true },
        retrieve: async () => e.session,
        now,
      }),
    ).rejects.toThrow('mode');
  });
  it('delivers to the verified account when billing email is changed at Stripe', async () => {
    const b = await buyer();
    await startCheckout({
      db,
      env,
      session: b.session,
      format: 'pdf',
      currency: 'aud',
      create,
      now,
    });
    const e = paid(
      sql.prepare('SELECT * FROM store_attempts').get() as unknown as Attempt,
    );
    await acceptStoreEvent({
      db,
      env,
      event: e,
      retrieve: async () => ({
        ...e.session,
        customer_details: { email: 'billing@example.com' },
      }),
      now,
    });
    expect(sql.prepare('SELECT email FROM store_orders').get()?.email).toBe(
      b.email,
    );
  });

  it('fulfils delayed success after unpaid completion and ignores late expiry', async () => {
    const b = await buyer();
    await startCheckout({
      db,
      env,
      session: b.session,
      format: 'epub',
      currency: 'eur',
      create,
      now,
    });
    const e = paid(
      sql.prepare('SELECT * FROM store_attempts').get() as unknown as Attempt,
    );
    await acceptStoreEvent({
      db,
      env,
      event: e,
      retrieve: async () => ({ ...e.session, payment_status: 'unpaid' }),
      now,
    });
    expect(
      sql.prepare('SELECT * FROM store_purchase_locks').all(),
    ).toHaveLength(1);
    await acceptStoreEvent({
      db,
      env,
      event: {
        ...e,
        id: 'evt_success',
        type: 'checkout.session.async_payment_succeeded',
      },
      retrieve: async () => e.session,
      now,
    });
    await acceptStoreEvent({
      db,
      env,
      event: { ...e, id: 'evt_expired', type: 'checkout.session.expired' },
      retrieve: async () => e.session,
      now,
    });
    expect(sql.prepare('SELECT status FROM store_orders').get()?.status).toBe(
      'paid',
    );
    expect(sql.prepare('SELECT * FROM store_entitlements').all()).toHaveLength(
      1,
    );
  });

  it('revokes refunds received before fulfilment and never sends their delivery email', async () => {
    const b = await buyer();
    await startCheckout({
      db,
      env,
      session: b.session,
      format: 'pdf',
      currency: 'aud',
      create,
      now,
    });
    const e = paid(
      sql.prepare('SELECT * FROM store_attempts').get() as unknown as Attempt,
    );
    await acceptStoreEvent({
      db,
      env,
      event: {
        id: 'evt_refund',
        type: 'charge.refunded',
        livemode: false,
        data: { object: { payment_intent: 'pi_1' } },
      },
      retrieve: async () => e.session,
      now,
    });
    await acceptStoreEvent({
      db,
      env,
      event: e,
      retrieve: async () => e.session,
      now,
    });
    expect(sql.prepare('SELECT status FROM store_orders').get()?.status).toBe(
      'revoked',
    );
    expect(sql.prepare('SELECT * FROM store_outbox').all()).toHaveLength(0);
  });

  it('collects only the selected AU or NZ address and configured shipping rate', async () => {
    const b = await buyer();
    const signedEnv = {
      ...env,
      STORE_SIGNED_ENABLED: 'true',
      STORE_PRODUCT_SIGNED: 'prod_signed',
      STORE_SIGNED_PRICES: '{"aud":3500}',
      STORE_SIGNED_SHIPPING: '{"AU":{"aud":900},"NZ":{"aud":1800}}',
    };
    await expect(
      startCheckout({
        db,
        env: signedEnv,
        session: b.session,
        format: 'signed',
        currency: 'aud',
        country: 'US',
        create,
        now,
      }),
    ).rejects.toThrow('not available');
    await startCheckout({
      db,
      env: signedEnv,
      session: b.session,
      format: 'signed',
      currency: 'aud',
      country: 'NZ',
      create,
      now,
    });
    expect(create.mock.calls[0][0]).toMatchObject({
      shipping_address_collection: { allowed_countries: ['NZ'] },
      shipping_options: [
        {
          shipping_rate_data: {
            fixed_amount: { currency: 'aud', amount: 1800 },
          },
        },
      ],
    });
    expect(create.mock.calls[0][0].expires_at).toBe(now() + 1860);
  });

  it('rejects tampered and expired signed links and streams the current asset only while entitled', async () => {
    const b = await buyer();
    sql
      .prepare(
        "INSERT INTO store_orders (session_id,mode,email,format,payment_id,amount,currency,status,created_at) VALUES ('cs','test',?,'pdf','pi',1149,'aud','paid',?)",
      )
      .run(b.email, now());
    sql
      .prepare(
        "INSERT INTO store_entitlements (mode,email,asset,order_id) VALUES ('test',?,'pdf','cs')",
      )
      .run(b.email);
    const token = await signDownload(
      { sessionHash: b.hash, asset: 'pdf', mode: 'test' },
      env.STORE_SIGNING_SECRET,
      now(),
    );
    expect(
      await verifyDownload(token + 'x', env.STORE_SIGNING_SECRET, now()),
    ).toBeNull();
    expect(
      await verifyDownload(token, env.STORE_SIGNING_SECRET, now() + 600),
    ).toBeNull();
    const response = await downloadFile({ db, env, token, now });
    expect(await response.text()).toBe('newest');
    expect(env.BOOK_FILES.get).toHaveBeenCalledWith('current/book.pdf');
    sql.prepare("UPDATE store_orders SET status='refunded'").run();
    expect((await downloadFile({ db, env, token, now })).status).toBe(403);
    expect(
      (await downloadFile({ db, env, token, now: () => now() + 601 })).status,
    ).toBe(410);
  });
  it('retries email failures without losing the durable order job', async () => {
    const b = await buyer();
    await startCheckout({
      db,
      env,
      session: b.session,
      format: 'pdf',
      currency: 'aud',
      create,
      now,
    });
    const e = paid(
      sql.prepare('SELECT * FROM store_attempts').get() as unknown as Attempt,
    );
    await acceptStoreEvent({
      db,
      env,
      event: e,
      retrieve: async () => e.session,
      now,
    });
    const send = vi
      .fn()
      .mockRejectedValueOnce(new Error('offline'))
      .mockResolvedValue({ messageId: 'mail' });
    await deliverOutbox({ db, env: { ...env, STORE_EMAIL: { send } }, now });
    expect(sql.prepare('SELECT state FROM store_outbox').get()?.state).toBe(
      'pending',
    );
    await deliverOutbox({
      db,
      env: { ...env, STORE_EMAIL: { send } },
      now: () => now() + 301,
    });
    expect(sql.prepare('SELECT state FROM store_outbox').get()?.state).toBe(
      'sent',
    );
    expect(send).toHaveBeenCalledTimes(2);
  });
});
