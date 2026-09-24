import type { CommerceConfig, BookFormat } from './config';
import type { D1DatabaseLike, RepositoryDependencies } from './database';
import { repositoryDependencies } from './database';

export interface StripeWebhookEvent {
  id: string;
  type: string;
  api_version: string | null;
  data: {
    object: unknown;
  };
}

interface CheckoutSessionPayload {
  id: string;
  payment_status?: string;
  payment_intent?: string | { id: string } | null;
  customer_details?: { email?: string | null } | null;
  metadata?: Record<string, string> | null;
}

function isCheckoutSessionPayload(value: unknown): value is CheckoutSessionPayload {
  return typeof value === 'object' && value !== null && 'id' in value && typeof value.id === 'string';
}

type VerifyWebhook = (rawBody: string, signature: string, secret: string) => Promise<StripeWebhookEvent>;
type FulfilOrder = (order: { orderId: string; sessionId: string; format: BookFormat }) => Promise<void>;

export interface WebhookOptions extends RepositoryDependencies {
  rawBody: string;
  signature: string;
  config: CommerceConfig;
  db: D1DatabaseLike;
  verify: VerifyWebhook;
  fulfil?: FulfilOrder;
}

export interface WebhookResult {
  status: number;
  outcome: 'disabled' | 'invalid-signature' | 'invalid-event' | 'ignored' | 'processed' | 'duplicate';
}

function isDuplicateError(error: unknown): boolean {
  return error instanceof Error && /UNIQUE constraint failed.*stripe_events/i.test(error.message);
}

async function recordEventOnly(
  options: WebhookOptions,
  event: StripeWebhookEvent,
  receivedAt: string,
): Promise<WebhookResult> {
  try {
    await options.db.prepare(`
      INSERT INTO stripe_events (stripe_event_id, event_type, received_at, payload_version)
      VALUES (?, ?, ?, ?)
    `).bind(event.id, event.type, receivedAt, event.api_version ?? 'unknown').run();
    return { status: 200, outcome: 'ignored' };
  } catch (error) {
    if (isDuplicateError(error)) return { status: 200, outcome: 'duplicate' };
    throw error;
  }
}

export async function processStripeWebhook(options: WebhookOptions): Promise<WebhookResult> {
  if (!options.config.enabled) return { status: 503, outcome: 'disabled' };

  let event: StripeWebhookEvent;
  try {
    event = await options.verify(options.rawBody, options.signature, options.config.webhookSecret);
  } catch {
    return { status: 400, outcome: 'invalid-signature' };
  }

  const { now, id } = repositoryDependencies(options);
  const receivedAt = now().toISOString();
  if (event.type !== 'checkout.session.completed') {
    return recordEventOnly(options, event, receivedAt);
  }

  const session = event.data.object;
  if (!isCheckoutSessionPayload(session)) return { status: 422, outcome: 'invalid-event' };
  const format = session.metadata?.format;
  if ((format !== 'ebook' && format !== 'print') || session.payment_status !== 'paid') {
    return { status: 422, outcome: 'invalid-event' };
  }

  const orderId = id();
  const eventStatement = options.db.prepare(`
    INSERT INTO stripe_events (stripe_event_id, event_type, received_at, payload_version)
    VALUES (?, ?, ?, ?)
  `).bind(event.id, event.type, receivedAt, event.api_version ?? 'unknown');
  const orderStatement = options.db.prepare(`
    INSERT INTO commerce_orders
      (id, stripe_session_id, stripe_payment_id, email, format, status, fulfilment_state, created_at, updated_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).bind(
    orderId,
    session.id,
    typeof session.payment_intent === 'string' ? session.payment_intent : null,
    session.customer_details?.email ?? null,
    format,
    'paid',
    'manual_pending',
    receivedAt,
    receivedAt,
  );

  try {
    await options.db.batch([eventStatement, orderStatement]);
  } catch (error) {
    if (isDuplicateError(error)) return { status: 200, outcome: 'duplicate' };
    throw error;
  }

  await (options.fulfil ?? (async () => undefined))({ orderId, sessionId: session.id, format });
  return { status: 200, outcome: 'processed' };
}
