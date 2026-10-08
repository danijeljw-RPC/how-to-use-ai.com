# Store launch, Stripe live setup and shutdown

This is the operational runbook for how-to-use-ai.com. Work from the main checkout:

```sh
cd /Users/danijeljw/Developer/how-to-use-ai.com/wwwroot
```

Use the repository's installed Wrangler through `npx`; do not install or upgrade
it just to run this guide. Current deployment: Cloudflare Worker `how-to-use-ai`,
D1 binding `SITE_DB`, private R2 binding `BOOK_FILES`. The public domain is already
production hosting; `STORE_MODE` selects whether its store talks to Stripe test
or live resources. It is not a separate deployment environment.

## Current shutdown settings

Testing is finished for now. These settings in `wrangler.jsonc` pause the store:

```json
"COMMERCE_ENABLED": "false",
"STORE_MODE": "test",
"STORE_SIGNED_ENABLED": "false",
"STORE_EMAIL_READY": "false",
"STORE_ORDER_NOTIFY_EMAIL": ""
```

| Setting | What it controls |
| --- | --- |
| `COMMERCE_ENABLED` | New direct digital and physical checkouts. Only the literal string `"true"` enables sales. |
| `STORE_SIGNED_ENABLED` | Both signed-paperback editions. Digital sales can stay enabled while physical sales are off. |
| `STORE_EMAIL_READY` | New email sign-in and sending queued buyer/operator emails. Turning it off also prevents new checkout because the store requires working email. |
| `STORE_ORDER_NOTIFY_EMAIL` | Recipient for new operator notification jobs. Empty means no new seller notifications are queued. Previously queued jobs retain their recipient. |
| `STORE_MODE` | `test` or `live`; chooses the accepted Stripe key prefix and the database namespace. |

Disabling sales does **not** delete orders, invoices, entitlements, secrets, private
book files or retailer links. Existing authenticated sessions and download access
remain valid under their normal expiry/entitlement rules. Email jobs already
queued remain stored; `STORE_EMAIL_READY=false` stops sending them until re-enabled.
Normal new test/live sessions are separate namespaces.

The signed webhook and five-minute maintenance schedule remain active to finish
existing sessions, reconcile payments, process refunds/disputes and synchronize
invoice references. This is intentional. Do not delete the webhook secret or cron
as a routine sales-pause method.

Already-created Stripe Checkout URLs can still accept payment until they expire.
For a hard stop, inspect open sessions in the **matching Stripe account/mode** and
expire each relevant open session. Do not cancel completed orders or refund them
merely to stop new sales. Stripe supports expiration only for open sessions.

### Publish the shutdown (or any switch change)

Edit `wrangler.jsonc`, then run:

```sh
npm run check
npm run build
npx wrangler deploy
```

Verify `/purchase/` has no direct-order buttons or signed-copy offers and
`/downloads/` has no active email sign-in form. Amazon links and the free preview
remain available. An ordinary shutdown needs no SQL changes or secret deletion.

## Pause sales while keeping existing customer support operational

After real customers exist, usually turn off only sales:

```json
"COMMERCE_ENABLED": "false",
"STORE_SIGNED_ENABLED": "false",
"STORE_EMAIL_READY": "true",
"STORE_ORDER_NOTIFY_EMAIL": "danijel@repasscloud.com"
```

Keep `STORE_MODE=live` and retain live credentials. Buyers can still sign in,
download their purchases and retrieve invoices. Payment/refund events still work.
Do not switch a live customer store back to `test` to pause sales.

## Before moving to retail / live mode

There is no `retail` mode flag. Real Stripe sales use `STORE_MODE=live`; release-day
retailer wording is managed separately in the page content.

### Resolve the live invoice gate first

In `src/lib/store/invoice.ts`, `invoiceSeller.gst` is currently `unconfirmed`.
`startCheckout()` explicitly rejects live checkout unless it is `not-registered`.
The current invoice renderer also rejects live invoices for other values.

- If the business is confirmed **not GST registered**, set the value to
  `not-registered` after confirming that is correct.
- If the business **is GST registered**, the current store needs proper per-sale
  tax handling and invoice implementation before live checkout can be enabled.
  Simply changing it to `registered` will still block checkout.
- Do not set `not-registered` merely to bypass the gate. Confirm the actual
  business tax treatment with your accounting records/adviser first.

This is an existing code requirement, separate from successful test purchases.
Switching Stripe keys or enabling `COMMERCE_ENABLED` alone cannot remove it.

### Check assets, shipping and fulfilment

- Verify current release PDF/EPUB objects exist in the private R2 bucket at the
  configured `BOOK_PDF_KEY` and `BOOK_EPUB_KEY`.
- Confirm all retail prices in `src/lib/store/catalogue.ts`. They are integer
  Stripe minor-unit amounts; JPY/KRW use whole units.
- Confirm signed-copy stock, shipping rates, permitted destinations, dispatch
  estimates and returns terms before enabling physical retail orders.
- Review the [signed paperback quick reference](signed-paperback-quick-reference.md).
- Confirm MailerSend is working, the sender domain is verified and its key has
  Email sending access. Buyer invoices and seller alerts depend on this.

## Set up the actual Stripe live merchant account

Select the intended business account in Stripe Dashboard, then enter its **live**
mode. The test sandbox used during development has its own resources. Confirm
merchant activation, business details, statement descriptor and checkout branding.

### Create five live Products

Copy each new live Product's `prod_...` ID into `wrangler.jsonc`:

| Variable | Product |
| --- | --- |
| `STORE_PRODUCT_PDF` | AI for Normal People — PDF download |
| `STORE_PRODUCT_EPUB` | AI for Normal People — EPUB download |
| `STORE_PRODUCT_BUNDLE` | AI for Normal People — PDF + EPUB bundle |
| `STORE_PRODUCT_SIGNED` | AI for Normal People — signed paperback |
| `STORE_PRODUCT_SIGNED_COLOUR` | AI for Normal People — signed paperback (colour edition) |

Do **not** reuse the existing test Product IDs. Live and test Product IDs both
start with `prod_`; the prefix does not prove the account/mode.

There are no fixed Stripe checkout URLs to replace. The site creates a new live
Checkout Session for each order and redirects to the URL Stripe returns. Switching
the merchant key, Product IDs, mode and webhook secret is what changes the account.
Prices are supplied from `catalogue.ts`; no `price_...` ID is required by the active
store. Legacy `STRIPE_PRICE_EBOOK`/`STRIPE_PRICE_PRINT` are not this store's configuration.

### Create a live restricted API key

Store the key only as a Worker secret named `STRIPE_SECRET_KEY`. Runtime key
prefixes must be `rk_live_` or `sk_live_` in live mode.

Grant the permissions needed by the implementation:

- Checkout Sessions: **Write** (create, retrieve, list and update metadata).
- Payment Intents: **Write** (retrieve status, write invoice metadata/description).
- Charges: **Read** (identify the payment behind a dispute).
- Products/Prices: **Read** for the expanded catalogue objects; check Stripe's
  request logs for any additional permission required by your account's setup.

Do not grant broad unrelated access. The runtime does not create refunds or
manage payouts. Set up the webhook through Dashboard; Webhook Endpoints Write is
not needed by the running website.

## Register the live webhook in Stripe

In the intended live account, open **Workbench → Webhooks / Event destinations**
and add this exact HTTPS endpoint, including the final slash:

```text
https://how-to-use-ai.com/api/stripe/webhook/
```

Subscribe to these six events:

```text
checkout.session.completed
checkout.session.async_payment_succeeded
checkout.session.async_payment_failed
checkout.session.expired
charge.refunded
charge.dispute.created
```

Use events for the merchant's own account. This is a direct store, not a Connect
marketplace. Copy this destination's **live signing secret** (`whsec_...`). A
Stripe CLI `stripe listen` secret is for that local listener and must not replace
the deployed destination's secret.

Webhook registration happens in Stripe, not with `npx wrangler`. Wrangler uploads
the destination's signing secret to Cloudflare so our server can verify requests.

No-cost purchases also depend on `checkout.session.completed`: they may have no
PaymentIntent. Do not subscribe only to payment-intent events.

## Deploy live configuration safely, with sales still off

Coordinate outstanding test sessions before switching this single deployment.
It accepts only the configured mode and one webhook secret. Once live is active,
the old test destination should not target this live store. Preserve the test
records; do not delete them to achieve isolation.

1. Update all five Product IDs to their actual live values.
2. Keep shutdown switches off; set `STORE_MODE` to `live`.
3. Build and deploy that closed-store configuration:

```sh
npm test
npm run check
npm run build
npx wrangler d1 migrations apply SITE_DB --remote
npx wrangler deploy
```

4. Upload the live credentials interactively:

```sh
npx wrangler secret put STRIPE_SECRET_KEY
npx wrangler secret put STRIPE_WEBHOOK_SECRET
```

Paste the actual live restricted key and live webhook signing secret at the
respective prompts. Never put them in `wrangler.jsonc`, command arguments, commits
or this runbook. Each `secret put` can create and deploy a Worker version; keep
sales off throughout the switch.

Astro generates `dist/server/wrangler.json` and redirects Wrangler to it. Always
rebuild after editing source `wrangler.jsonc`; do not edit generated configuration.
This project has no separate `[env.production]` configuration, so do not append
`--env production` to these commands.

### Secrets that usually stay unchanged

Retain `STORE_SIGNING_SECRET`: changing it invalidates outstanding signed links
for downloads. Do not rotate it just because Stripe changes mode.
Retain the existing MailerSend and Turnstile credentials if they remain valid.
For initial setup or a deliberate credential change, the commands are:

```sh
npx wrangler secret put STORE_SIGNING_SECRET
npx wrangler secret put MAILERSEND_API_KEY
npx wrangler secret put TURNSTILE_SECRET_KEY
```

`STORE_SIGNING_SECRET` must contain at least 32 characters. `TURNSTILE_SITE_KEY`
is public configuration; its matching secret remains server-only. Review configured
hostnames/actions without weakening server-side verification.

Inspect configured secret **names**, not values:

```sh
npx wrangler secret list
npx wrangler deployments list
```

## Enable retail sales on release

After the live tax gate, assets, prices, keys, webhook, email and policies are
ready, set these values and deploy:

```json
"STORE_MODE": "live",
"COMMERCE_ENABLED": "true",
"STORE_EMAIL_READY": "true",
"STORE_SIGNED_ENABLED": "true",
"STORE_ORDER_NOTIFY_EMAIL": "danijel@repasscloud.com"
```

For **digital-only** launch, keep `STORE_SIGNED_ENABLED=false`. For an email-only
readiness check before sales, enable `STORE_EMAIL_READY` while keeping commerce off.

Run `npm run check`, `npm test`, `npm run build`, then `npx wrangler deploy`.
Confirm the latest deployment is live. No date-triggered launch automation exists;
these changes are manual when the release is confirmed at the end of October 2026.

## Update retailer links and pre-order wording

Stripe live sales and Amazon availability are independent.

- Regional Kindle URLs are in `src/content/retailers.ts` (`kindlePreorderLinks`).
  Verify the existing ASIN links after release; do not change valid URLs solely
  because the book moves from pre-order to retail.
- `src/pages/purchase.astro` currently says “Pre-order now”, “Pre-order the Kindle
  Edition”, refers to Amazon delivering a pre-order, and has a pre-order description.
  Update these to confirmed retail wording when the edition is available.
- Search for other release copy with:

```sh
rg -n 'Pre-order|pre-order|Coming soon|release date' src
```

- Add the actual black-and-white/colour Amazon paperback URLs to the paperback
  section when those listings exist. Add Google Play Books/Apple Books links only
  once verified. Optional generic retailer URLs are read from
  `RETAILER_AMAZON_URL`, `RETAILER_GOOGLE_PLAY_BOOKS_URL`,
  `RETAILER_APPLE_BOOKS_URL` and `RETAILER_OTHER_URL` in Worker variables.

Rebuild/deploy after content edits. There is no automatic conversion of Kindle
links into paperback links and no automatic retailer launch switch.

## Verify a real live order

Use genuine payment details for an authorized real purchase. Test cards such as
4242 do not work for live-mode validation. Before broad launch, verify:

1. The expected live merchant branding, currency, Product and total in Checkout.
2. Stripe completion webhook returns HTTP 200. Failed fulfilment returns 503 and
   Stripe retries; inspect logs and replay the event after fixing the cause.
3. Order/invoice rows have `mode='live'`; test entitlements must not grant live access.
4. Digital downloads work; physical orders record the correct edition and full address.
5. Buyer confirmation/invoice and operator notification reach their intended inboxes.
6. Fully discounted orders fulfil correctly. A book coupon does not waive shipping.
7. Invoice-reference synchronization completes; Payment Intents Write is required.

Buyer/operator emails use separate durable jobs. Scheduled delivery normally runs
within five minutes. `sent` means MailerSend accepted the message, not proof of
inbox delivery. Ambiguous submissions are not blindly resent.

## Operational commands and queries

Inspect Worker errors without sharing raw logs that might contain private URLs:

```sh
npx wrangler tail --format json
```

Paste these SQL queries into Cloudflare D1 console (choose `test` or `live` deliberately):

```sql
SELECT session_id, email, format, amount, currency, status, shipping_json, created_at
FROM store_orders WHERE mode='live' ORDER BY created_at DESC LIMIT 50;

SELECT id, email, audience, state, attempts, provider_status, last_error_code
FROM store_outbox WHERE mode='live' ORDER BY created_at DESC LIMIT 50;

SELECT number, session_id, stripe_synced_at, sync_error
FROM store_invoices WHERE mode='live' ORDER BY number DESC LIMIT 50;
```

`store_orders.amount` is the discounted **book** amount, excluding shipping.
The invoice snapshot includes subtotal, discount, shipping and total.

Stripe invoice metadata uses the site reference such as `HTUAI-0000005`; it is not
a native Stripe Invoice (`in_...`). Direct payment/session IDs and the Stripe link
in your operator email are reliable lookup references if metadata search lags.

Refunds/disputes revoke paid-order access through the webhook. Free orders have
no refund payment: revoke their site order directly. For a manually reviewed order,
replace `SESSION_ID` below and use the correct mode:

```sql
UPDATE store_orders SET status='revoked'
WHERE session_id='SESSION_ID' AND mode='live';
UPDATE store_attempts SET state='revoked'
WHERE session_id='SESSION_ID' AND mode='live';
```

Keep history/invoices; don't delete order or entitlement rows. Revocation prevents
future downloads but cannot recall files already downloaded. Review current order
status before any manual change; this is not a refund or credit-note workflow.

## Troubleshooting

| Symptom | Check |
| --- | --- |
| New prices not visible | Save in main, rebuild/deploy, reload. Digital currencies derive from `single`, with matching `bundle` prices. |
| Signed edition not visible | Commerce/email readiness, signed switch, edition Product ID, enabled country and matching price/shipping currency. |
| Live checkout says invoice tax treatment is unconfirmed | Resolve `invoiceSeller.gst` and the live tax implementation; do not bypass the gate. |
| Completion page but no library access | Webhook delivery status, persisted checkout attempt, product/amount validation and mode mismatch. The return page is not fulfilment authority. |
| No operator email | Notification recipient, email-ready switch and `store_outbox` audience/state/provider status. |
| Stripe invoice reference not synchronized | `store_invoices.sync_error`, restricted-key write permissions and five-minute maintenance. |
| Old test records disappear from the library after switching live | Expected mode isolation; records are preserved in D1. |

## References

- [Stripe webhook setup](https://docs.stripe.com/webhooks)
- [Stripe API key management](https://docs.stripe.com/keys)
- [Expire a Checkout Session](https://docs.stripe.com/api/checkout/sessions/expire)
- [Stripe currencies and minor units](https://docs.stripe.com/currencies)
- [Cloudflare Worker secrets](https://developers.cloudflare.com/workers/configuration/secrets/)
- [Wrangler commands](https://developers.cloudflare.com/workers/wrangler/commands/)
