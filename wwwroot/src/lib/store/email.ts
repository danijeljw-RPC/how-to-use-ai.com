import { requestAccess } from "./auth";
import {
  catalogue,
  isCurrency,
  priceLabel,
  type StoreFormat,
} from "./catalogue";
import { authReady, storeMode, type StoreDB, type StoreEnv } from "./types";
import { sendEmail } from "../email/mailersend";
import { signInEmail } from "../email/templates/sign-in";
import { digitalOrderEmail } from "../email/templates/digital-order";
import { signedOrderEmail } from "../email/templates/signed-order";
export async function enqueueAccess(
  db: StoreDB,
  email: string,
  mode: "test" | "live",
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
  request?: typeof fetch;
}) {
  const { db, env } = options,
    clock = options.now ?? (() => Math.floor(Date.now() / 1000)),
    now = clock(),
    mode = storeMode(env);
  // A submission with an expired lease may have reached the provider. Never resend it automatically.
  await db
    .prepare(
      "UPDATE store_outbox SET state='ambiguous',last_error_code='interrupted_submission',lease_id=NULL,lease_until=NULL WHERE mode=? AND state='submitting' AND lease_until<=?",
    )
    .bind(mode, now)
    .run();
  if (!authReady(env)) return;
  const jobs = (
    await db
      .prepare(
        "SELECT id,email,kind,order_id,attempts FROM store_outbox WHERE mode=? AND state='pending' AND next_at<=? AND (lease_until IS NULL OR lease_until<=?) ORDER BY created_at LIMIT 10",
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
    const now = clock();
    const lease = crypto.randomUUID();
    const claim = await db
      .prepare(
        "UPDATE store_outbox SET lease_id=?,lease_until=? WHERE id=? AND state='pending' AND (lease_until IS NULL OR lease_until<=?)",
      )
      .bind(lease, now + 120, job.id, now)
      .run();
    if (!claim.meta.changes) continue;
    let submitted = false;
    try {
      type Order = {
        status: string;
        format: StoreFormat;
        amount: number;
        currency: string;
        shipping_json: string | null;
      };
      type Shipping = {
        amount: number;
        shipping_amount: number;
        country: string | null;
      };
      let order: Order | null = null;
      let attempt: Shipping | null = null;
      if (job.kind === "order") {
        order = await db
          .prepare(
            "SELECT status,format,amount,currency,shipping_json FROM store_orders WHERE session_id=? AND mode=?",
          )
          .bind(job.order_id!, mode)
          .first<Order>();
        if (!order || order.status !== "paid") {
          await db
            .prepare(
              "UPDATE store_outbox SET state='cancelled',lease_id=NULL,lease_until=NULL WHERE id=? AND lease_id=?",
            )
            .bind(job.id, lease)
            .run();
          continue;
        }
        if (order.format === "signed")
          attempt = await db
            .prepare(
              "SELECT amount,shipping_amount,country FROM store_attempts WHERE session_id=? AND mode=?",
            )
            .bind(job.order_id!, mode)
            .first<Shipping>();
      }
      const token = await requestAccess(db, job.email, mode, now);
      if (!token) throw new Error("Login cooldown");
      const url = new URL("/store/verify/", env.SITE_URL!);
      url.searchParams.set("token", token);
      const input = { siteUrl: env.SITE_URL!, loginUrl: url.href };
      const message = !order
        ? signInEmail(input)
        : order.format === "signed"
          ? signedOrderEmail({
              ...input,
              reference: job.order_id!,
              total: isCurrency(order.currency)
                ? priceLabel(
                    order.amount + (attempt?.shipping_amount ?? 0),
                    order.currency,
                  )
                : "See your payment confirmation",
              ...(attempt && isCurrency(order.currency)
                ? {
                    book: priceLabel(attempt.amount, order.currency),
                    shipping: priceLabel(
                      attempt.shipping_amount,
                      order.currency,
                    ),
                    country: attempt.country ?? undefined,
                  }
                : {}),
            })
          : digitalOrderEmail({
              ...input,
              reference: job.order_id!,
              format: catalogue[order.format].label,
            });
      const submission = await db
        .prepare(
          "UPDATE store_outbox SET state='submitting',submission_started_at=?,attempts=attempts+1 WHERE id=? AND lease_id=? AND state='pending'",
        )
        .bind(now, job.id, lease)
        .run();
      if (!submission.meta.changes) continue;
      submitted = true;
      const result = await sendEmail(
        env.MAILERSEND_API_KEY!,
        job.email,
        message,
        options.request,
      );
      if (result.kind === "accepted") {
        await db
          .prepare(
            "UPDATE store_outbox SET state='sent',sent_at=?,provider_message_id=?,provider_status=?,last_error_code=NULL,lease_id=NULL,lease_until=NULL WHERE id=? AND lease_id=? AND state='submitting'",
          )
          .bind(now, result.messageId, result.status, job.id, lease)
          .run();
      } else {
        const retry = result.kind === "retry" && job.attempts + 1 < 8;
        const state = retry
          ? "pending"
          : result.kind === "ambiguous"
            ? "ambiguous"
            : "failed";
        const next =
          now +
          Math.max(
            Math.min(3600, 300 * 2 ** job.attempts),
            result.kind === "retry" ? result.retryAfter : 0,
          );
        await db
          .prepare(
            "UPDATE store_outbox SET state=?,next_at=?,last_error_code=?,lease_id=NULL,lease_until=NULL WHERE id=? AND lease_id=?",
          )
          .bind(state, next, result.code, job.id, lease)
          .run();
        console.warn(
          JSON.stringify({
            event: "store_email_retry",
            jobId: job.id,
            state,
            code: result.code,
          }),
        );
      }
    } catch {
      const attempts = job.attempts + 1,
        state = submitted ? "ambiguous" : attempts >= 8 ? "failed" : "pending";
      await db
        .prepare(
          "UPDATE store_outbox SET state=?,attempts=?,next_at=?,last_error_code=?,lease_id=NULL,lease_until=NULL WHERE id=? AND lease_id=?",
        )
        .bind(
          state,
          attempts,
          now + Math.min(3600, 300 * 2 ** job.attempts),
          submitted ? "submission_result_unknown" : "preparation_failed",
          job.id,
          lease,
        )
        .run();
      console.warn(
        JSON.stringify({ event: "store_email_retry", jobId: job.id, state }),
      );
    }
  }
}
