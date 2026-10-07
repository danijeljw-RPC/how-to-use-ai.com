# Store API contract

All endpoints use trailing slashes. Private responses are no-store and noindex; application logs never intentionally include tokens or buyer data. Restrict access to platform request logs, which may contain request URLs.

- `POST /api/store/access/`: same-origin bounded form with `email` and `turnstileToken`, action `store-access`. Returns a generic email-sent acknowledgement for new and existing buyers; recipient cooldown and IP rate limits prevent abuse. Unready email/config returns 503. No purchase lookup disclosed.
- `GET /store/verify/?token=...`: confirmation only. Does not consume the login token; mail scanners cannot establish a session.
- `POST /api/store/verify/`: same-origin form with one-use token. Redirects to `/downloads/` and sets a Secure HttpOnly SameSite=Lax seven-day session cookie. Invalid/used/expired tokens rejected.
- `POST /api/store/logout/`: same-origin, revokes current session and clears cookie.
- `GET /downloads/`: email-verification form or authenticated library with current entitlement links and available purchase choices. Does not treat Stripe return session IDs as credentials.
- `POST /api/checkout/`: verified session required; allow-listed format `pdf`, `epub`, `bundle`, `signed`, currency, and country for signed copies. Server chooses product, price, shipping and identity. Overlap ownership or an existing checkout reservation returns 409. Config/asset gaps return 503. Valid purchase redirects 303 to Stripe. Session expires after about 31 minutes; pending delayed-payment reservations remain locked until terminal Stripe state.
- `POST /api/stripe/webhook/`: bounded raw body, signature required. Event mode must match merchant mode. Completed/asynchronous paid sessions are retrieved with line items and validated against persisted attempt. Unpaid completion leaves reservation pending. Async failure/expired sessions release reservation; refunds/disputes revoke affected access. Persist order, entitlements, email job and event transactionally; duplicate events acknowledge without duplicate fulfilment. Temporary failures return 503 for retry.
- `GET /api/download/?token=...`: verifies HMAC, version, ten-minute expiry, hashed session and mode, plus current paid entitlement. Streams only the configured private R2 object for PDF or EPUB. Tampered token 403, expired token 410, missing file 503. No automatic renewal from untrusted expired claims; renew through `/downloads/` after authentication.
- Worker scheduled handler: retries ready outbox jobs using expiring database leases, cleans expired auth/rate rows and reconciles stale checkout attempts against Stripe. Does not depend on website traffic. Failed jobs remain inspectable; do not discard them.

Signed-copy Checkout amounts and per-country shipping rates are server-controlled by `signedBookPricing` in `src/lib/store/catalogue.ts`. Wrangler retains the Product and enable flag; serialized price/shipping variables are no longer used. Supported delivery countries remain AU/NZ, and a country/currency needs an explicit rate.

## MailerSend contract

The approved MailerSend adapter POSTs generated HTML and text to https://api.mailersend.com/v1/email with a server-only Bearer token, a fixed hello@repasscloud.com From/Reply-To, one verified customer recipient and tracking disabled. Redirects are rejected; requests have a fifteen-second timeout and responses are bounded. 202 with x-message-id records accepted/queued or paused, not delivered. Definitive rejection is failed; explicit 429 retries within eight attempts; uncertainty becomes ambiguous without automatic resubmission. A stale submitting lease is also ambiguous. D1 stores provider IDs and sanitized categories, never raw provider errors or login URLs. Project templates are the sole source of email content.

Branding uses two fixed inline PNG attachments (`email-wordmark` and `email-favicon`) with matching CID references in every HTML template. These are the only attachments; full books remain private library downloads. Sender, tracking, acceptance and retry contracts are unchanged.

### Checkout discounts, business details and receipts

Checkout allows Stripe promotion codes and optional business-name/tax-ID collection.
Create coupons and customer-facing promotion codes in the matching Stripe test/live environment.
PaymentIntents request Stripe receipts at the verified purchase email. MailerSend continues to
send the separate book-access confirmation. Stripe test receipts must be sent manually from
Dashboard; live customer-email settings should enable successful-payment receipts.
No paid post-purchase invoice-generation add-on is enabled.
Fulfilment validates the undiscounted catalogue line and Stripe's discounted total, stores the
net book amount, and accepts fully discounted digital orders with no PaymentIntent. Scheduled
reconciliation also recognises no-payment-required completion. Shipping remains charged separately.

## Site invoice contract (supersedes Stripe receipt request)

`GET /api/store/invoice/?order=<checkout-session-id>` requires the current HttpOnly
library session. Missing session: 401; another owner/mode or missing invoice: 404.
Successful responses are private/no-store PDF attachments. Original invoices remain
available to their authenticated owner after refunds; they are accounting records,
not book entitlements. No public PDF URL or book attachment is created.

New paid fulfilment writes the purchase snapshot with the order in a D1 batch.
Duplicate webhook/reconciliation events preserve invoice number, buyer details and
amounts. PDF generation is persisted before email submission; first persisted copy
wins. MailerSend order emails include that PDF alongside existing inline brand images.
Historic orders are not silently backfilled. Stripe invoice_creation remains disabled
and explicit Stripe receipt_email is removed. Existing Stripe Dashboard automatic
receipt settings may still send receipts until the operator switches them off.

Test invoices use TEST identifiers and say no money was charged. Live checkout is
currently gated on confirmed invoice tax treatment, because existing legal records
leave Australian price/GST treatment unconfirmed. GST-registered invoicing requires
per-sale treatment, including overseas sales, before that gate can be removed. Never
label a registered live invoice Tax Invoice without its correct tax breakdown.
Refund/credit-note automation is not part of this change.
