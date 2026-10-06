import { catalogue, type StoreFormat } from './catalogue';
import { storeMode, type StoreDB, type StoreEnv } from './types';
import type { Attempt } from './checkout';
export interface StoreEvent {
  id: string;
  type: string;
  livemode: boolean;
  data: { object: unknown };
}
export interface PaidSession {
  id: string;
  payment_status: string;
  payment_intent?: string | { id: string } | null;
  customer_details?: { email?: string | null } | null;
  currency?: string | null;
  amount_subtotal?: number | null;
  metadata?: Record<string, string> | null;
  line_items?: {
    data: Array<{
      quantity: number | null;
      price?: {
        product: string | { id: string } | null;
        unit_amount: number | null;
        currency: string;
      } | null;
    }>;
  };
  collected_information?: {
    shipping_details?: {
      name?: string | null;
      address?: { country?: string | null } | null;
    } | null;
  } | null;
  shipping_cost?: { amount_total?: number } | null;
}
function objectId(object: unknown): string {
  return typeof object === 'object' &&
    object !== null &&
    'id' in object &&
    typeof object.id === 'string'
    ? object.id
    : '';
}
function paymentId(session: PaidSession) {
  return typeof session.payment_intent === 'string'
    ? session.payment_intent
    : (session.payment_intent?.id ?? null);
}
export async function acceptStoreEvent(options: {
  db: StoreDB;
  env: StoreEnv;
  event: StoreEvent;
  retrieve: (id: string) => Promise<PaidSession>;
  now?: () => number;
}) {
  const { db, env, event } = options,
    now = (options.now ?? (() => Math.floor(Date.now() / 1000)))(),
    mode = storeMode(env);
  if (event.livemode !== (mode === 'live'))
    throw new Error('Stripe event mode does not match store mode');
  if (
    await db
      .prepare('SELECT id FROM store_events WHERE id=? AND mode=?')
      .bind(event.id, mode)
      .first()
  )
    return 'duplicate';
  const eventStatement = db
    .prepare(
      'INSERT OR IGNORE INTO store_events (id,mode,type,created_at) VALUES (?,?,?,?)',
    )
    .bind(event.id, mode, event.type, now);
  if (['charge.refunded', 'charge.dispute.created'].includes(event.type)) {
    const object = event.data.object as {
      payment_intent?: string;
      charge?: string;
    };
    let payment = object.payment_intent;
    // Dispute objects have a charge; the route resolves its payment_intent before calling this function.
    if (!payment) throw new Error('Reversal payment could not be identified');
    await db.batch([
      db
        .prepare(
          'INSERT OR IGNORE INTO store_reversals (mode,payment_id,reason) VALUES (?,?,?)',
        )
        .bind(mode, payment, event.type),
      db
        .prepare(
          "UPDATE store_orders SET status='revoked' WHERE mode=? AND payment_id=?",
        )
        .bind(mode, payment),
      eventStatement,
    ]);
    return 'revoked';
  }
  const known = [
    'checkout.session.completed',
    'checkout.session.async_payment_succeeded',
    'checkout.session.async_payment_failed',
    'checkout.session.expired',
  ];
  if (!known.includes(event.type)) {
    await eventStatement.run();
    return 'ignored';
  }
  const session = await options.retrieve(objectId(event.data.object));
  if (session.metadata?.project !== 'how-to-use-ai.com') {
    await eventStatement.run();
    return 'ignored';
  }
  const attempt = await db
    .prepare('SELECT * FROM store_attempts WHERE id=? AND mode=?')
    .bind(session.metadata.attempt ?? '', mode)
    .first<Attempt>();
  if (!attempt)
    throw new Error('Stripe session does not match a checkout attempt');
  if (
    session.metadata.mode !== mode ||
    session.metadata.format !== attempt.format ||
    (attempt.session_id && attempt.session_id !== session.id)
  )
    throw new Error('Stripe session does not match checkout metadata');
  if (
    [
      'checkout.session.expired',
      'checkout.session.async_payment_failed',
    ].includes(event.type)
  ) {
    // A late failure/expiry must never revoke a verified successful payment.
    await db.batch([
      db
        .prepare(
          "UPDATE store_attempts SET state='failed',session_id=? WHERE id=? AND state NOT IN ('paid','revoked')",
        )
        .bind(session.id, attempt.id),
      db
        .prepare(
          "DELETE FROM store_purchase_locks WHERE attempt_id=? AND NOT EXISTS (SELECT 1 FROM store_orders WHERE session_id=? AND status='paid')",
        )
        .bind(attempt.id, session.id),
      eventStatement,
    ]);
    return 'failed';
  }
  if (session.payment_status !== 'paid') {
    // Record the event, but later async-success has its own ID and can fulfil.
    await db.batch([
      db
        .prepare(
          "UPDATE store_attempts SET state='pending',session_id=? WHERE id=? AND state NOT IN ('paid','revoked')",
        )
        .bind(session.id, attempt.id),
      eventStatement,
    ]);
    return 'pending';
  }
  const line = session.line_items?.data[0];
  const product =
    typeof line?.price?.product === 'string'
      ? line.price.product
      : line?.price?.product?.id;
  if (
    session.currency !== attempt.currency ||
    session.amount_subtotal !== attempt.amount ||
    session.line_items?.data.length !== 1 ||
    line?.quantity !== 1 ||
    line.price?.unit_amount !== attempt.amount ||
    line.price.currency !== attempt.currency ||
    product !== attempt.product_id ||
    !paymentId(session)
  )
    throw new Error('Paid session does not match the server order');
  const shipping = session.collected_information?.shipping_details;
  if (
    attempt.format === 'signed' &&
    (!shipping?.name ||
      shipping.address?.country !== attempt.country ||
      session.shipping_cost?.amount_total !== attempt.shipping_amount)
  )
    throw new Error('Shipping does not match the server order');
  const sessionId = session.id,
    payment = paymentId(session)!;
  const statements = [
    db
      .prepare(
        `INSERT OR IGNORE INTO store_orders (session_id,mode,email,format,payment_id,amount,currency,status,shipping_json,created_at)
      VALUES (?,?,?,?,?,?,?,CASE WHEN EXISTS(SELECT 1 FROM store_reversals WHERE mode=? AND payment_id=?) THEN 'revoked' ELSE 'paid' END,?,?)`,
      )
      .bind(
        sessionId,
        mode,
        attempt.email,
        attempt.format,
        payment,
        attempt.amount,
        attempt.currency,
        mode,
        payment,
        attempt.format === 'signed' ? JSON.stringify(shipping) : null,
        now,
      ),
    ...catalogue[attempt.format as StoreFormat].assets.map((asset) =>
      db
        .prepare(
          'INSERT OR IGNORE INTO store_entitlements (mode,email,asset,order_id) VALUES (?,?,?,?)',
        )
        .bind(mode, attempt.email, asset, sessionId),
    ),
    db
      .prepare(
        `INSERT OR IGNORE INTO store_outbox (id,mode,email,kind,order_id,next_at,created_at)
      SELECT ?,?,?,'order',?,?,? WHERE EXISTS(SELECT 1 FROM store_orders WHERE session_id=? AND status='paid')`,
      )
      .bind(
        `order-${sessionId}`,
        mode,
        attempt.email,
        sessionId,
        now,
        now,
        sessionId,
      ),
    db
      .prepare(
        "UPDATE store_attempts SET state=CASE WHEN EXISTS(SELECT 1 FROM store_reversals WHERE mode=? AND payment_id=?) THEN 'revoked' ELSE 'paid' END,session_id=? WHERE id=?",
      )
      .bind(mode, payment, sessionId, attempt.id),
    db
      .prepare('DELETE FROM store_purchase_locks WHERE attempt_id=?')
      .bind(attempt.id),
    eventStatement,
  ];
  await db.batch(statements);
  return 'processed';
}
