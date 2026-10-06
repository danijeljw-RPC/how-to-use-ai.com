import { requestAccess } from './auth';
import { catalogue, type StoreFormat } from './catalogue';
import { authReady, storeMode, type StoreDB, type StoreEnv } from './types';
function escape(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}
export async function enqueueAccess(
  db: StoreDB,
  email: string,
  mode: 'test' | 'live',
  now: number,
) {
  await db
    .prepare(
      "INSERT INTO store_outbox (id,mode,email,kind,next_at,created_at) VALUES (?,?,?,'access',?,?)",
    )
    .bind(crypto.randomUUID(), mode, email, now, now)
    .run();
}
export async function deliverOutbox(options: {
  db: StoreDB;
  env: StoreEnv;
  now?: () => number;
}) {
  const { db, env } = options,
    now = (options.now ?? (() => Math.floor(Date.now() / 1000)))(),
    mode = storeMode(env);
  if (!authReady(env)) return;
  const jobs = (
    await db
      .prepare(
        `SELECT id,email,kind,order_id,attempts FROM store_outbox WHERE mode=? AND state='pending' AND next_at<=? AND (lease_until IS NULL OR lease_until<=?) ORDER BY created_at LIMIT 10`,
      )
      .bind(mode, now, now)
      .all<{
        id: string;
        email: string;
        kind: string;
        order_id: string | null;
        attempts: number;
      }>()
  ).results;
  for (const job of jobs) {
    const lease = crypto.randomUUID();
    const claim = await db
      .prepare(
        "UPDATE store_outbox SET lease_id=?,lease_until=? WHERE id=? AND state='pending' AND (lease_until IS NULL OR lease_until<=?)",
      )
      .bind(lease, now + 120, job.id, now)
      .run();
    if (!claim.meta.changes) continue;
    try {
      let intro =
        'Use the link below to sign in and view your purchases or buy a book.';
      let physical = false;
      if (job.kind === 'order') {
        const order = await db
          .prepare(
            'SELECT status,format FROM store_orders WHERE session_id=? AND mode=?',
          )
          .bind(job.order_id!, mode)
          .first<{ status: string; format: StoreFormat }>();
        if (!order || order.status !== 'paid') {
          await db
            .prepare(
              "UPDATE store_outbox SET state='cancelled',lease_id=NULL,lease_until=NULL WHERE id=? AND lease_id=?",
            )
            .bind(job.id, lease)
            .run();
          continue;
        }
        physical = order.format === 'signed';
        intro = physical
          ? 'Thank you for ordering a signed paperback. Your order is recorded for dispatch. Contact hello@repasscloud.com for delivery enquiries.'
          : `Thank you for purchasing ${catalogue[order.format].label}. Sign in below to download the latest available files. Your purchase includes future editions of this book in the formats you bought.`;
      }
      const token = await requestAccess(db, job.email, mode, now);
      if (!token) throw new Error('Login cooldown');
      const url = new URL('/store/verify/', env.SITE_URL!);
      url.searchParams.set('token', token);
      const text = `${intro}\n\n${url.href}\n\nThis sign-in link expires in 15 minutes and can be used once. You can request another at ${new URL('/downloads/', env.SITE_URL!).href}. Download links last ten minutes.\n\nSupport: hello@repasscloud.com`;
      await env.STORE_EMAIL!.send({
        from: { email: env.STORE_EMAIL_FROM!, name: 'How-To-Use-AI.com' },
        to: job.email,
        replyTo: 'hello@repasscloud.com',
        subject:
          job.kind === 'order'
            ? physical
              ? 'Your signed-book order'
              : 'Your book downloads'
            : 'Your book store sign-in link',
        text,
        html: `<p>${escape(intro)}</p><p><a href="${escape(url.href)}">Sign in to your book library</a></p><p>This sign-in link expires in 15 minutes and works once. Request a fresh link at <a href="${escape(new URL('/downloads/', env.SITE_URL!).href)}">your library</a>.</p><p>Support: <a href="mailto:hello@repasscloud.com">hello@repasscloud.com</a></p>`,
      });
      await db
        .prepare(
          "UPDATE store_outbox SET state='sent',sent_at=?,lease_id=NULL,lease_until=NULL WHERE id=? AND lease_id=?",
        )
        .bind(now, job.id, lease)
        .run();
    } catch {
      const attempts = job.attempts + 1;
      await db
        .prepare(
          'UPDATE store_outbox SET state=?,attempts=?,next_at=?,lease_id=NULL,lease_until=NULL WHERE id=? AND lease_id=?',
        )
        .bind(
          attempts >= 8 ? 'failed' : 'pending',
          attempts,
          now + Math.min(3600, 300 * 2 ** (attempts - 1)),
          job.id,
          lease,
        )
        .run();
      console.warn(
        JSON.stringify({
          event: 'store_email_retry',
          jobId: job.id,
          attempts,
          failed: attempts >= 8,
        }),
      );
    }
  }
}
