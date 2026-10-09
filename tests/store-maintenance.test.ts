import { afterEach, describe, expect, it, vi } from 'vitest';
import { DatabaseSync } from 'node:sqlite';
import { readFileSync } from 'node:fs';
import { sqliteStore } from './helpers/sqlite-store';
import { maintainStore } from '../src/lib/store/maintenance';
const provider = vi.hoisted(() => ({
  retrieve: vi.fn(),
  list: vi.fn(),
  intent: vi.fn(),
}));
vi.mock('../src/lib/stripe', () => ({
  createStripeClient: () => ({
    checkout: { sessions: provider },
    paymentIntents: { retrieve: provider.intent },
  }),
}));
afterEach(() => vi.restoreAllMocks());
describe('scheduled checkout recovery fairness', () => {
  it('moves unresolved old attempts behind later attempts instead of starving them', async () => {
    vi.spyOn(console, 'error').mockImplementation(() => {});
    const sql = new DatabaseSync(':memory:');
    sql.exec(
      readFileSync(
        new URL('../migrations/0002_digital_store.sql', import.meta.url),
        'utf8',
      ),
    );
    sql.exec(readFileSync(new URL('../migrations/0003_mailersend_outbox.sql', import.meta.url), 'utf8'));
    sql.exec(readFileSync(new URL('../migrations/0004_store_invoices.sql', import.meta.url), 'utf8'));
    sql.exec(readFileSync(new URL('../migrations/0005_invoice_stripe_references.sql', import.meta.url), 'utf8'));
    sql.exec(readFileSync(new URL('../migrations/0006_order_notifications.sql', import.meta.url), 'utf8'));
    sql.exec(readFileSync(new URL('../migrations/0007_signed_colour.sql', import.meta.url), 'utf8'));
    const db = sqliteStore(sql);
    for (let n = 0; n < 21; n++)
      sql
        .prepare(
          "INSERT INTO store_attempts (id,mode,email,format,currency,amount,product_id,session_id,state,expires_at,created_at) VALUES (?,'test','buyer@example.com','pdf','aud',1149,'prod_pdf',?,'pending',1,?)",
        )
        .run(`attempt_${n}`, `cs_${n}`, n);
    provider.retrieve.mockRejectedValue(new Error('temporary'));
    await maintainStore({
      SITE_DB: db,
      STORE_MODE: 'test',
      STRIPE_SECRET_KEY: 'sk_test_fixture',
    });
    expect(provider.retrieve).toHaveBeenCalledTimes(20);
    await maintainStore({
      SITE_DB: db,
      STORE_MODE: 'test',
      STRIPE_SECRET_KEY: 'sk_test_fixture',
    });
    expect(provider.retrieve).toHaveBeenCalledWith('cs_20', expect.anything());
    expect(provider.retrieve).toHaveBeenCalledTimes(21);
    sql.close();
  });
});

describe('lost delayed-payment failure webhook recovery', () => {
  it.each([
    ['processing', true],
    ['requires_payment_method', false],
    ['canceled', false],
  ] as const)(
    'reconciles %s without releasing a still-processing payment',
    async (status, locked) => {
      const sql = new DatabaseSync(':memory:');
      sql.exec(
        readFileSync(
          new URL('../migrations/0002_digital_store.sql', import.meta.url),
          'utf8',
        ),
      );
      sql.exec(readFileSync(new URL('../migrations/0003_mailersend_outbox.sql', import.meta.url), 'utf8'));
    sql.exec(readFileSync(new URL('../migrations/0004_store_invoices.sql', import.meta.url), 'utf8'));
    sql.exec(readFileSync(new URL('../migrations/0005_invoice_stripe_references.sql', import.meta.url), 'utf8'));
    sql.exec(readFileSync(new URL('../migrations/0006_order_notifications.sql', import.meta.url), 'utf8'));
    sql.exec(readFileSync(new URL('../migrations/0007_signed_colour.sql', import.meta.url), 'utf8'));
    const db = sqliteStore(sql);
      sql
        .prepare(
          "INSERT INTO store_attempts (id,mode,email,format,currency,amount,product_id,session_id,state,expires_at,created_at) VALUES ('attempt','test','buyer@example.com','pdf','aud',1149,'prod_pdf','cs','pending',1,1)",
        )
        .run();
      sql
        .prepare(
          "INSERT INTO store_purchase_locks VALUES ('test','buyer@example.com','pdf','attempt')",
        )
        .run();
      provider.retrieve.mockResolvedValue({
        id: 'cs',
        livemode: false,
        status: 'complete',
        payment_status: 'unpaid',
        payment_intent: 'pi',
        metadata: {
          project: 'how-to-use-ai.com',
          attempt: 'attempt',
          format: 'pdf',
          mode: 'test',
        },
      });
      provider.intent.mockResolvedValue({
        id: 'pi',
        status,
        last_payment_error:
          status === 'requires_payment_method'
            ? { code: 'payment_failed' }
            : null,
      });
      await maintainStore({
        SITE_DB: db,
        STORE_MODE: 'test',
        STRIPE_SECRET_KEY: 'sk_test_fixture',
      });
      expect(
        sql.prepare('SELECT * FROM store_purchase_locks').all(),
      ).toHaveLength(locked ? 1 : 0);
      expect(sql.prepare('SELECT state FROM store_attempts').get()?.state).toBe(
        locked ? 'pending' : 'failed',
      );
      sql.close();
    },
  );
});
