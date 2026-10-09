import {syncInvoiceReferences} from './invoice-stripe';
import { createStripeClient } from '../stripe';
import { acceptStoreEvent } from './webhook';
import { deliverOutbox } from './email';
import { storeMode, paymentModeReady, type StoreEnv } from './types';
import type { Attempt } from './checkout';
export async function maintainStore(env: StoreEnv) {
  const db = env.SITE_DB;
  if (!db) return;
  const now = Math.floor(Date.now() / 1000),
    mode = storeMode(env);
  if (paymentModeReady(env)) {
    const client = createStripeClient(env.STRIPE_SECRET_KEY!);
    const attempts = (
      await db
        .prepare(
          "SELECT * FROM store_attempts WHERE mode=? AND state IN ('creating','open','pending') AND expires_at<? AND next_check<=? ORDER BY next_check,created_at LIMIT 20",
        )
        .bind(mode, now - 60, now)
        .all<Attempt>()
    ).results;
    for (const attempt of attempts) {
      // Move every attempted row back in the rotation, even on provider failure.
      await db
        .prepare('UPDATE store_attempts SET next_check=? WHERE id=?')
        .bind(now + 3600, attempt.id)
        .run();
      try {
        let session = attempt.session_id
          ? await client.checkout.sessions.retrieve(attempt.session_id, {
              expand: ['line_items.data.price.product'],
            })
          : null;
        if (!session) {
          // An interrupted request may have created Checkout but missed the D1 update.
          for await (const candidate of client.checkout.sessions.list({
            limit: 100,
            created: { gte: attempt.created_at - 5, lte: attempt.expires_at },
          })) {
            if (candidate.metadata?.attempt === attempt.id) {
              session = await client.checkout.sessions.retrieve(candidate.id, {
                expand: ['line_items.data.price.product'],
              });
              break;
            }
          }
        }
        if (!session) {
          await db.batch([
            db
              .prepare(
                "UPDATE store_attempts SET state='failed' WHERE id=? AND state='creating'",
              )
              .bind(attempt.id),
            db
              .prepare('DELETE FROM store_purchase_locks WHERE attempt_id=?')
              .bind(attempt.id),
          ]);
          continue;
        }
        let failedPayment = false;
        if (
          session.status === 'complete' &&
          session.payment_status === 'unpaid' &&
          session.payment_intent
        ) {
          const intent =
            typeof session.payment_intent === 'string'
              ? await client.paymentIntents.retrieve(session.payment_intent)
              : session.payment_intent;
          failedPayment =
            intent.status === 'canceled' ||
            (intent.status === 'requires_payment_method' &&
              !!intent.last_payment_error);
        }
        if (
          (session.payment_status === 'paid' || (session.payment_status === 'no_payment_required' && session.status === 'complete')) ||
          session.status === 'expired' ||
          failedPayment
        )
          await acceptStoreEvent({
            db,
            env,
            event: {
              id: `reconcile-${session.id}-${session.payment_status}-${session.status}-${failedPayment}`,
              type:
                (session.payment_status === 'paid' || (session.payment_status === 'no_payment_required' && session.status === 'complete'))
                  ? 'checkout.session.completed'
                  : failedPayment
                    ? 'checkout.session.async_payment_failed'
                    : 'checkout.session.expired',
              livemode: session.livemode,
              data: { object: { id: session.id } },
            },
            retrieve: async () => session!,
          });
        else
          await db
            .prepare(
              "UPDATE store_attempts SET session_id=?,state=? WHERE id=? AND state NOT IN ('paid','revoked')",
            )
            .bind(
              session.id,
              session.status === 'complete' ? 'pending' : 'open',
              attempt.id,
            )
            .run();
      } catch {
        console.error(
          JSON.stringify({
            event: 'store_reconciliation_failed',
            attemptId: attempt.id,
          }),
        );
      }
    }
  }
  await deliverOutbox({ db, env });
  try { await syncInvoiceReferences(env); } catch {
    console.error(JSON.stringify({event:'invoice_reference_sync_unavailable'}));
  }
  await db.batch([
    db.prepare('DELETE FROM store_auth WHERE expires_at<?').bind(now - 86400),
    db
      .prepare('DELETE FROM store_rate_limits WHERE window_start<?')
      .bind(now - 86400),
  ]);
}
