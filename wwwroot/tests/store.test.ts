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
import { startCheckout, signedSettings, checkoutParams, type Attempt } from '../src/lib/store/checkout';
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
  MAILERSEND_API_KEY: 'test-mailersend-key',
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
};
beforeEach(() => {
  env.BOOK_FILES.head.mockResolvedValue({ size: 8 });
  env.BOOK_FILES.get.mockResolvedValue({ body: 'newest', size: 6 });
  create.mockImplementation(async () => ({
    id: 'cs_1',
    url: 'https://checkout.stripe.com/c/pay/test',
    expires_at: now() + 1800,
  }));
  sql = new DatabaseSync(':memory:');
  sql.exec('PRAGMA foreign_keys=ON');
  for (const name of ['0001_initial.sql', '0002_digital_store.sql', '0003_mailersend_outbox.sql', '0004_store_invoices.sql','0005_invoice_stripe_references.sql','0006_order_notifications.sql']) {
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
    expect(currencies).toHaveLength(9);
    expect(currencies.map((c) => amountFor('pdf', c))).toEqual([
      799, 599, 699, 1199, 4099, 1099, 13900, 1099, 1299,
    ]);
    expect(currencies.map((c) => amountFor('epub', c))).toEqual([
      799, 599, 699, 1199, 4099, 1099, 13900, 1099, 1299,
    ]);
    expect(currencies.map((c) => amountFor('bundle', c))).toEqual([
      1099, 799, 899, 1599, 5599, 1499, 19900, 1499, 1799,
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

  it.each([250, 'free', 'free-paid'] as const)('fulfils promotion discounts (%s) at the actual paid amount', async (discount) => {
    const b = await buyer();
    await startCheckout({db, env, session:b.session, format:'pdf', currency:'aud', create, now});
    const attempt=sql.prepare('SELECT * FROM store_attempts').get() as unknown as Attempt;
    const params=checkoutParams(attempt,'https://how-to-use-ai.com');
    expect(params.allow_promotion_codes).toBe(true);
    expect(params.name_collection?.business).toEqual({enabled:true,optional:true});
    expect(params.tax_id_collection).toEqual({enabled:true,required:'never'});
    expect(params.invoice_creation?.enabled).not.toBe(true);
    expect(params.payment_intent_data?.receipt_email).toBeUndefined();
    const e=paid(attempt);
    const free=typeof discount==='string';
    const reduction=free?attempt.amount:discount;
    const session={...e.session,amount_total:attempt.amount-reduction,total_details:{amount_discount:reduction,amount_tax:0,amount_shipping:0},...(free?{payment_status:discount==='free-paid'?'paid':'no_payment_required',status:'complete',payment_intent:null}: {})};
    const notifyEnv={...env,STORE_ORDER_NOTIFY_EMAIL:'danijel@repasscloud.com'};
    await acceptStoreEvent({db,env:notifyEnv,event:e,retrieve:async()=>session,now});
    expect(sql.prepare('SELECT amount FROM store_orders').get()?.amount).toBe(attempt.amount-reduction);
    expect(sql.prepare('SELECT * FROM store_entitlements').all()).toHaveLength(1);
    expect(sql.prepare('SELECT payment_id,status FROM store_orders').get()).toMatchObject({payment_id:free?null:'pi_1',status:'paid'});
    expect(sql.prepare('SELECT state FROM store_attempts').get()?.state).toBe('paid');
    expect(sql.prepare('SELECT * FROM store_purchase_locks').all()).toHaveLength(0);
    await acceptStoreEvent({db,env:notifyEnv,event:{...e,id:'evt_replay'},retrieve:async()=>session,now});
    expect(sql.prepare('SELECT * FROM store_orders').all()).toHaveLength(1);
    expect(sql.prepare('SELECT * FROM store_entitlements').all()).toHaveLength(1);
    expect(sql.prepare('SELECT * FROM store_invoices').all()).toHaveLength(1);
    expect(sql.prepare('SELECT * FROM store_outbox WHERE kind=\'order\' AND audience=\'buyer\'').all()).toHaveLength(1);
    expect(sql.prepare('SELECT email FROM store_outbox WHERE audience=\'operator\'').all()).toEqual([{email:'danijel@repasscloud.com'}]);
  });
  it('does not grant access for an unfinished zero-total checkout', async () => {
    const b=await buyer();
    await startCheckout({db,env,session:b.session,format:'pdf',currency:'aud',create,now});
    const attempt=sql.prepare('SELECT * FROM store_attempts').get() as unknown as Attempt;
    const e=paid(attempt);
    await acceptStoreEvent({db,env,event:e,retrieve:async()=>({...e.session,status:'open',payment_status:'no_payment_required',payment_intent:null,amount_total:0,total_details:{amount_discount:attempt.amount,amount_tax:0,amount_shipping:0}}),now});
    expect(sql.prepare('SELECT * FROM store_entitlements').all()).toHaveLength(0);
  });
  it.each(['open', 'nonzero'] as const)('rejects a paid checkout without a PaymentIntent when %s', async (invalid) => {
    const b=await buyer();
    await startCheckout({db,env,session:b.session,format:'pdf',currency:'aud',create,now});
    const attempt=sql.prepare('SELECT * FROM store_attempts').get() as unknown as Attempt;
    const e=paid(attempt);
    const discount=invalid==='open'?attempt.amount:0;
    await expect(acceptStoreEvent({db,env,event:e,retrieve:async()=>({...e.session,status:invalid==='open'?'open':'complete',payment_intent:null,amount_total:attempt.amount-discount,total_details:{amount_discount:discount,amount_tax:0,amount_shipping:0}}),now})).rejects.toThrow('Paid session does not match');
    expect(sql.prepare('SELECT * FROM store_entitlements').all()).toHaveLength(0);
  });
  it('rejects inconsistent discounted totals', async () => {
    const b=await buyer();
    await startCheckout({db,env,session:b.session,format:'pdf',currency:'aud',create,now});
    const e=paid(sql.prepare('SELECT * FROM store_attempts').get() as unknown as Attempt);
    await expect(acceptStoreEvent({db,env,event:e,retrieve:async()=>({...e.session,amount_total:1,total_details:{amount_discount:1,amount_tax:0,amount_shipping:0}}),now})).rejects.toThrow('Discounted total');
    expect(sql.prepare('SELECT * FROM store_entitlements').all()).toHaveLength(0);
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
    expect(sql.prepare('SELECT * FROM store_invoices').all()).toHaveLength(1);
    expect(sql.prepare('SELECT * FROM store_entitlements').all()).toHaveLength(
      2,
    );
    expect(sql.prepare('SELECT * FROM store_outbox').all()).toHaveLength(1);
    // A historic order is not silently backfilled on a later event.
    sql.prepare('DELETE FROM store_invoices').run();
    await acceptStoreEvent({db,env,event:{...event,id:'evt_historic_late'},retrieve:async()=>event.session,now});
    expect(sql.prepare('SELECT * FROM store_invoices').all()).toHaveLength(0);

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

  it('keeps disabled, unsupported and unpriced signed delivery unavailable', () => {
    const enabled = { ...env, STORE_SIGNED_ENABLED: 'true', STORE_PRODUCT_SIGNED: 'prod_signed' };
    expect(signedSettings(env, 'aud', 'AU')).toBeNull();
    expect(signedSettings(enabled, 'usd', 'US')).toBeNull();
    expect(signedSettings(enabled, 'nzd', 'NZ')).toMatchObject({amount:4800,shipping:1500});
    expect(signedSettings(enabled, 'jpy', 'NZ')).toBeNull();
    expect(signedSettings(enabled, 'usd', 'AU')).toBeNull();
    expect(signedSettings(enabled, 'unknown', 'AU')).toBeNull();
  });

  it.each([['AU','aud',4500,1200],['NZ','nzd',4800,1500]] as const)('uses catalogue signed pricing and validates shipping for %s', async (country,currency,amount,shippingAmount) => {
    const b = await buyer();
    const signedEnv = {
      ...env,
      STORE_SIGNED_ENABLED: 'true',
      STORE_PRODUCT_SIGNED: 'prod_signed',
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
      currency,
      country,
      create,
      now,
    });
    expect(create.mock.calls[0][0]).toMatchObject({
      line_items: [{ price_data: { currency, unit_amount: amount, product: 'prod_signed' }, quantity: 1 }],
      shipping_address_collection: { allowed_countries: [country] },
      shipping_options: [
        {
          shipping_rate_data: {
            fixed_amount: { currency, amount: shippingAmount },
          },
        },
      ],
    });
    expect(create.mock.calls[0][0].expires_at).toBe(now() + 1860);
    const attempt=sql.prepare('SELECT * FROM store_attempts').get() as unknown as Attempt;
    const event=paid(attempt);
    const shipping={name:'Test Buyer',address:{country,line1:'1 Test Street',city:'Test City',postal_code:'0000'}};
    const session={...event.session,status:'complete',amount_total:amount+shippingAmount,total_details:{amount_discount:0,amount_tax:0,amount_shipping:shippingAmount},shipping_cost:{amount_total:shippingAmount},collected_information:{shipping_details:shipping}};
    await expect(acceptStoreEvent({db,env:signedEnv,event,retrieve:async()=>({...session,collected_information:{shipping_details:{...shipping,address:{...shipping.address,country:country==='AU'?'NZ':'AU'}}}}),now})).rejects.toThrow('Shipping does not match');
    await acceptStoreEvent({db,env:signedEnv,event,retrieve:async()=>session,now});
    expect(JSON.parse(String(sql.prepare('SELECT shipping_json FROM store_orders').get()?.shipping_json))).toEqual(shipping);
    expect(sql.prepare('SELECT * FROM store_entitlements').all()).toHaveLength(0);
    expect(JSON.parse(String(sql.prepare('SELECT snapshot_json FROM store_invoices').get()?.snapshot_json))).toMatchObject({shipping:shippingAmount,total:amount+shippingAmount});
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
      .mockResolvedValueOnce(new Response(null,{status:429}))
      .mockImplementation(async()=>new Response(null,{status:202,headers:{'x-message-id':'mail'}}));
    await deliverOutbox({ db, env, request: send, now });
    expect(sql.prepare('SELECT state FROM store_outbox').get()?.state).toBe(
      'pending',
    );
    await deliverOutbox({
      db,
      env, request: send,
      now: () => now() + 301,
    });
    expect(sql.prepare('SELECT state FROM store_outbox').get()?.state).toBe(
      'sent',
    );
    expect(send).toHaveBeenCalledTimes(2);
    const saved=sql.prepare('SELECT pdf_base64 FROM store_invoices').get()?.pdf_base64;
    expect(saved).toBeTruthy();
    const sentBody=JSON.parse(send.mock.calls[1][1].body);
    expect(sentBody.attachments.find((attachment:{disposition:string})=>attachment.disposition==='attachment').content).toBe(saved);
    expect(sentBody.to).toEqual([{email:'buyer@example.com'}]);
  });
});
