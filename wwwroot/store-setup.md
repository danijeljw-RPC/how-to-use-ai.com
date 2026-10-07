# Book store setup and operation

> **Email provider change, 7 October 2026:** The approved [MailerSend replacement plan](2026-10-07-mailersend-email-plan.md) is implemented. Cloudflare remains the website hosting/storage provider.

Updated 7 October 2026. The author's answers in `book-sales-questions.md` are accepted. The implemented design replaces the old ebook/print proposal.

## Implemented behaviour

PDF, EPUB and their bundle use the approved prices below. Buyer email is verified before checkout. Paid purchases live in D1 and grant access to the latest release files in the formats bought, including future editions of Book 1. Buyers sign in using email, then download through signed links lasting ten minutes. They can reload their library for fresh links or request another sign-in email. Email alone, a receipt number or a Stripe session ID never grants access.

| Currency | PDF or EPUB | PDF + EPUB |
| --- | ---: | ---: |
| USD | 7.99 | 10.99 |
| GBP | 5.99 | 7.99 |
| EUR | 6.99 | 8.99 |
| JPY | 1199 | 1599 |
| BRL | 40.99 | 55.99 |
| CAD | 10.99 | 14.99 |
| MXN | 139.00 | 199.00 |
| AUD | 10.99 | 14.99 |
| NZD | 12.99 | 17.99 |

The original 24 combinations were accepted by actual Stripe test Checkout in Peach Freestyle. No payments were taken; each session was immediately expired. This verified the original presentment amounts, not live-account settlement or fees. The author subsequently added NZD and revised AUD prices; those changes are covered locally but have not been rerun against Stripe. JPY uses integer yen. Other currencies use cents/minor units. Prices are controlled in `src/lib/store/catalogue.ts`, never by customer form fields. Hosted Checkout uses inline Price data tied to the correct Product; no separate Stripe Price ID is required. Prices are configured tax-inclusive to keep the supplied totals. Automatic tax is not enabled: merchant registrations and accounting still need the merchant's review before live launch.

A buyer cannot buy a digital format they already own. Bundle ownership grants both PDF and EPUB. Someone who owns PDF can buy EPUB separately, and vice versa; a bundle containing an owned format is blocked. Reservations also block simultaneous overlapping checkouts. A failed network request is reconciled against Stripe before its reservation is released. Unpaid asynchronous payments stay pending until success/failure. Refunds (including partial refunds) or disputes conservatively revoke that order's digital access; reinstatement after resolution is an operator action.

Standard paperback printing, shipping and returns are handled by Amazon for orders placed there. Kindle URLs are not silently relabelled as paperback listings. Add edition-specific paperback destinations when Amazon provides them. Signed copies ordered here use the separate configuration below and are manually dispatched by the publisher.

## Resources already prepared

- Dedicated private R2 bucket: `how-to-use-ai-books`, binding `BOOK_FILES`. Created in the current Cloudflare account. Public access was not enabled. Both configured current keys were found remotely in the 6 October configuration audit; release content still needs reader verification.
- Additive migration: `migrations/0002_digital_store.sql`. Leaves legacy tables and historical ebook/print orders intact. Applied to local and production D1 and tested with actual local D1/R2 bindings.
- Stripe test account: Peach Freestyle, `acct_1SJ3Xb4BF2uOrrJb`.
- PDF Product: `prod_VOC3ptyaUPGT00`; EPUB Product: `prod_VOC3gVz9WhnbCQ`; bundle Product: `prod_VOC3Law5Bj9Jvn`.
- `stripe-test-store.json` records the test catalogue and checks. Repeat product preparation with `node scripts/prepare-stripe-test-store.mjs`; add `--validate-checkout` to create and immediately expire all 24 test checkouts. The script refuses any other account or live mode.
- Five-minute scheduled handler: retries email jobs and reconciles interrupted/expired checkouts. The handler remains active when new checkout is switched off, so existing customers still have delivery/access.

## Put the released books in private R2

Upload only approved customer release files, replacing these current keys when publishing a new edition:

```sh
npx wrangler r2 object put how-to-use-ai-books/book-01/current/ai-for-normal-people.pdf --file /absolute/path/to/approved-book.pdf --remote
npx wrangler r2 object put how-to-use-ai-books/book-01/current/ai-for-normal-people.epub --file /absolute/path/to/approved-book.epub --remote
```

`BOOK_PDF_KEY` and `BOOK_EPUB_KEY` in `wrangler.jsonc` point to these private keys. Keep the full books out of `public/` and public buckets. No public R2 document URL is required: the Worker streams the object only after access checks. Keep dated archival editions under separate keys if needed; only the current key is served to buyers. Local testing uses separate local R2 storage by omitting `--remote`; never upload a test fixture to the production current keys.

## Enable transactional email with MailerSend

MailerSend is the only outgoing email provider. All messages use `hello@repasscloud.com` as From and Reply-To, with project-owned HTML/plain-text templates in `src/lib/email/templates/`. No native Cloudflare email binding or MailerSend-hosted template ID is needed. Keep receiving mailbox MX records intact when authenticating repasscloud.com in MailerSend.

Upload the API token using `npx wrangler secret put MAILERSEND_API_KEY`. Grant Email Full access; dashboard template access is unnecessary. Confirm the sender domain is verified, the account can send to real recipients, token expiry is suitable and quota is sufficient. No secret goes into tracked files or public variables.

Keep `STORE_EMAIL_READY=false` until configured for controlled tests. Enable it to exercise sign-in delivery while `COMMERCE_ENABLED=false`, build/deploy and check a real inbox. Revert readiness if delivery fails. The existing Stripe and signing secrets are retained.

The three templates cover sign-in, digital purchases and signed-paperback confirmations. Contact/newsletter remain record-only. Full ebooks are never attached. Tracking is disabled and direct website links are used.

Local previews: `npx esbuild scripts/render-email-previews.ts --bundle --platform=node --format=esm --outfile=.wrangler/render-email-previews.mjs`, then `node .wrangler/render-email-previews.mjs`. Safe preview HTML/text files are written under `.wrangler/email-previews/` using nonfunctional example URLs.

## Connect Stripe in test mode

Keep `STORE_MODE=test` and the test Product IDs. Store the test restricted key and webhook secret using Wrangler secrets (never public variables or tracked files). The existing variable name `STRIPE_SECRET_KEY` accepts a restricted `rk_test_` key. Grant the permissions needed for Checkout Sessions, Products/Prices, PaymentIntents/Charges and webhook reconciliation. Checkout and webhook handling reject mode/key mismatches.

Use a random signing secret of at least 32 characters:

```sh
npx wrangler secret put STORE_SIGNING_SECRET
npx wrangler secret put STRIPE_SECRET_KEY
npx wrangler secret put STRIPE_WEBHOOK_SECRET
```

For local work, put only test secrets in ignored `.dev.vars`. Use `stripe listen --forward-to localhost:4399/api/stripe/webhook/ --events checkout.session.completed,checkout.session.async_payment_succeeded,checkout.session.async_payment_failed,checkout.session.expired,charge.refunded,charge.dispute.created` and its local signing secret. Use test Turnstile keys locally. A plain HTTP localhost page cannot maintain the production Secure `__Host-` cookie; use local HTTPS or a separate secured test deployment for a full browser test. Do not weaken the production cookie for convenience.

Apply D1 migration before deploying routes that use it. Production migration commands affect the website's existing database:

```sh
npx wrangler d1 migrations apply SITE_DB --remote
npm run check
npm test
npm run build
npx wrangler deploy
```

Keep `COMMERCE_ENABLED=false` during setup. Once the assets, email, credentials and webhook are configured, enable it in **test mode** for a controlled end-to-end run-through; keep live purchases disabled until that flow passes. Availability is per format: absent PDF/EPUB keys or Products disable the corresponding offer; bundle needs both. Checkout also checks that the actual private objects exist before creating a payment session. Publishing a configured key alone does not prove its release file exists.

For the test website flow, verify a controlled email, buy each format, complete test payment, confirm D1 entitlements, delivery email and both downloads. Also verify a duplicate order is blocked, download expiry/renewal, a refund revokes access, and a queued email retries after failure. Signed webhooks and local binding tests run automatically; actual mailbox delivery and live checkout cannot be certified until the above setup exists.

## Live-account switch

Create the same three Products in the actual live merchant account, and replace all three Product IDs, restricted key and webhook signing secret together. Register the six events above at `https://how-to-use-ai.com/api/stripe/webhook/` (including its trailing slash). Use a different test database/deployment when continuing development; never exercise test purchases against a live merchant.

Set `STORE_MODE=live`. Test orders and sessions cannot grant live access because every query includes mode. Test and live merchant keys cannot be mixed. Keep the download signing secret stable for existing live customers unless deliberately rotating it; changing it invalidates outstanding signed download URLs, and buyers can renew through their library.

Confirm merchant identity/branding, tax treatment/registrations, product classification and consumer-policy fit before live activation. The earlier placeholder AUD 19.99 ebook Price is unused by the new endpoints. Only after successful setup and testing set `COMMERCE_ENABLED=true` and deploy.

## Add signed copies for Australia and New Zealand

1. Create a Product in the matching Stripe account named “AI for Normal People — signed paperback”. Include your dispatch estimate in its description and ensure stock exists. Set `STORE_PRODUCT_SIGNED` to its Product ID. No separate Stripe Price is needed because website amounts are configured below.
2. Edit `signedBookPricing.prices` in `src/lib/store/catalogue.ts`. Amounts use minor units; for example the configured `aud: 4500` means AUD 45.00.
3. Edit `signedBookPricing.shipping` in the same file. `AU: { aud: 1200 }` means AUD 12.00 delivery to Australia. Add approved NZ rates when ready; zero allows free delivery. Both country and currency need a rate. Supplied rates for other countries are retained but the checkout still accepts only AU/NZ.
4. Set `STORE_SIGNED_ENABLED=true` only when dispatch and returns are ready. The website shows only configured combinations. The chosen country is the only address country allowed in that Checkout, so a buyer cannot choose the cheaper AU rate for an NZ address.
5. Stripe collects name and postal address. The verified webhook saves shipping details in `store_orders.shipping_json` and sends the buyer confirmation. Use Stripe Dashboard and the database to dispatch manually; this code does not submit a print-on-demand order to Amazon. Signed copies grant no digital entitlement unless separately purchased. Multiple completed physical orders are permitted; concurrent physical checkouts for one email are temporarily blocked.

Update displayed dispatch estimates and current policy text before enabling this physical product. The author's signed-copy retail and shipping prices are preserved in the catalogue; physical sales remain disabled.

## Recovery and support

Useful D1 queries (select the intended test/live mode):

```sql
SELECT session_id,email,format,status,created_at FROM store_orders WHERE mode='live' ORDER BY created_at DESC;
SELECT id,kind,state,attempts,next_at FROM store_outbox WHERE mode='live' AND state IN ('pending','submitting','failed','ambiguous');
SELECT id,email,state,session_id,next_check FROM store_attempts WHERE mode='live' AND state IN ('creating','open','pending');
```

Email jobs claim a two-minute lease and retry up to eight times with backoff. Provider acceptance is recorded as `sent` plus a provider message ID and queued/paused status; it is not inbox-delivery evidence. Unknown acceptance, timeout or an interrupted submission becomes `ambiguous` and is not automatically resent. Explicit rate-limit rejections retry with backoff; definitive rejections remain failed. Paid entitlements and orders remain idempotent. Failed jobs stay stored. After fixing a definitive rejection, reset only a selected failed job to pending. Never blanket-requeue ambiguous/submitting jobs; inspect MailerSend activity and retain uncertain outcomes for manual review. An absent activity result is not proof of non-acceptance:

```sql
UPDATE store_outbox SET state='pending',attempts=0,next_at=unixepoch(),lease_id=NULL,lease_until=NULL,last_error_code=NULL WHERE id='the-selected-job-id' AND state='failed';
```

Restrict access to platform request logs because link URLs can contain short-lived bearer tokens. Application error logs omit addresses, tokens and provider request details. Watch structured Worker logs for `store_email_retry`, `store_reconciliation_failed` and `store_request_failed`. Connect an operational log alert to hello@repasscloud.com if desired; do not depend on the failing email sender to alert about its own outage. Buyer support uses `/contact/?subject=purchase-support`; hello@repasscloud.com is the transactional reply-to and operational fallback. Expired sign-in/download links do not require a refund or repurchase; direct customers to `/downloads/`.

## References

- [Stripe currencies](https://docs.stripe.com/currencies): minor units, including JPY, and the distinction between presentment and settlement.
- [Stripe fulfilment](https://docs.stripe.com/checkout/fulfillment.md?payment-ui=stripe-hosted): verified paid-state fulfilment and delayed-success events.
- [MailerSend email API](https://developers.mailersend.com/api/v1/email): structured transactional sending, acceptance IDs and suppression outcomes.
- [R2 Workers API](https://developers.cloudflare.com/r2/api/workers/workers-api-reference/): private binding reads and streaming bodies.

## Current published state

MailerSend implementation deployed 7 October 2026, version `5f6077e9-2bcc-44b9-aa89-6e4c3c1bd55d`. Email sign-in is enabled at /downloads/; native Cloudflare email is removed. COMMERCE_ENABLED remains false, Stripe mode is test and signed sales are disabled. Three labelled visual-test emails to hello@repasscloud.com received MailerSend 202 acceptance; inbox receipt and browser sign-in remain for the operator to confirm. No test payment or customer purchase was created by these preview sends. Migration 0003 is applied locally and remotely; scheduled maintenance remains active.

## Purchase support and retailer branding

Customer-facing purchase support links use `/contact/?subject=purchase-support`. This prefills “Purchase support” and asks for the purchase email/order reference. The form stores submissions in `contact_messages` for manual review; it does not alert the operator automatically. Review that table regularly and respond using the provided customer address. hello@repasscloud.com remains the transactional reply-to and operational fallback. This change does not replace the email verification/download delivery system.

The retailer list uses KDP's supplied Available at Amazon badge, unchanged, once above labelled regional buttons. Flag emoji are decorative and full country names remain visible. Official source: https://kdp.amazon.com/en_US/help/topic/G9WES4WJAC3GUVSV; original asset: https://images-na.ssl-images-amazon.com/images/G/01/rainier/available_at_amazon_1200x600_Nvz5h2M.png. The supplied artwork is stored without cropping or recolouring.

## Latest configuration audit

See `store-configuration-audit.md` for the verified resource status, remaining secrets/email/webhook tasks, physical shipping-map limits and test-purchase checklist. The obsolete `STRIPE_PRICE_EBOOK` variable has been removed from active configuration. Signed-copy values are now maintained in `signedBookPricing` in the catalogue; AU/AUD and the author-added NZ/NZD shipping pair are configured.

## Email branding assets

The shared layout embeds the site bubble wordmark and favicon as inline PNG attachments, avoiding remote image fetching. Generated assets and their source SVGs are under public/images/email-*. The generation script reads the existing IBM Plex Mono font, outlines the glyphs and renders PNGs through the project's sharp dependency. To regenerate, provide Python fonttools/brotli (an isolated .wrangler/branding-tools install is sufficient) and run `PYTHONPATH=.wrangler/branding-tools python3 scripts/generate-email-branding.py`; it also regenerates src/lib/email/branding.ts. Preview rendering converts CID references to data URLs for local HTML files.

Every HTML/plain-text footer identifies: How-To-Use-AI.com is operated and published by RePass Cloud Pty Ltd, ABN 74642243801. These images are message content; they do not control an inbox's sender avatar.
