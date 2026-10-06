# Book sales: decisions and implementation handoff

Prepared 6 October 2026. All work in this change is inside `wwwroot`.

Implementation note: the author answers below are accepted and preserved. The original proposal after the answers is historical; [store-setup.md](store-setup.md) documents the implemented PDF/EPUB/bundle store, Amazon paperback boundary and disabled signed-copy option.

## What is ready

The purchase page lists all 13 author-supplied Amazon Kindle pre-order links, independent of Stripe being enabled. The homepage, Book 1 page and navigation point there. No release date or price is invented. Amazon blocked automated listing verification; links use the supplied ASIN B0HLYQSMQT exactly.

Google Play Books and Apple Books are pending. Set `RETAILER_GOOGLE_PLAY_BOOKS_URL` and `RETAILER_APPLE_BOOKS_URL` in `wrangler.jsonc` variables once their final HTTPS URLs arrive, then deploy. Blank or invalid values produce no link. Kindle Edition is described separately from the EPUB download planned for this store.

Direct sales remain disabled. No live Stripe resources, secrets, remote migrations or deployments were made.

## Questions to answer first

1. **Digital distribution rights:** Is this ebook enrolled, or intended to be enrolled, in KDP Select? Confirm the applicable exclusivity terms before selling PDF/EPUB here or distributing the ebook through Google/Apple. Ordinary Kindle publication and Select enrolment are distinct; do not assume which applies.
   A: We are not enrolling in any exclusivity terms (eg: KDP Select, etc). All books can be sold anywhere to anyone.
2. **Release and availability:** What is the release date for each format? Should direct sales begin on release, or should the store accept pre-orders? Recommendation: launch direct digital sales only once approved files can be delivered immediately; keep physical sales off until fulfilment is ready.
   A: The PDF and EPUB version are available for download from my site as soon as the document links to the R2 are available. Physical copies come from Amazon as we use Print on Demand via that.
3. **Prices and currencies:** What are the PDF, EPUB, black and white paperback and colour paperback prices? Start with AUD, or offer other currencies? Is PDF+EPUB a bundle or two separate purchases? Are displayed prices inclusive of applicable tax?
    A: We offer PDF and EPUB for following prices (provided they are currencies I can use on Stripe!):
       - USD: 7.99
       - GBP: 5.99
       - EUR: 6.99
       - JPY: 1199
       - BRL: 40.99
       - CAD: 10.99
       - MXN: 139.00
       - AUD: 11.49
    If we offer the bundle, that is both the EPUB and PDF, the prices are as follows:
       - USD: 10.99
       - GBP: 7.99
       - EUR: 8.99
       - JPY: 1599
       - BRL: 55.99
       - CAD: 14.99
       - MXN: 199.00
       - AUD: 15.49
4. **Merchant:** Which live Stripe account/legal entity should receive payments? The README records a Peach Freestyle test setup; confirm ownership and branding before using its live account. The AUD 19.99 test Price is not an approved retail price.
    A: We will be using the Peach Freestyle account for all testing/development, before swapping to my live Stripe account. That's why it's there.
5. **Digital assets:** Which exact release files should buyers receive? Should buyers receive later updates? Choose watermarking/DRM policy, download expiry, download count and support for replacement links. Keep full books out of `public/` and the public preview directory.
    A: The site should be able to use their purchase to create a unique link to download either the PDF or EPUB file download link. I would like to use the built-in sql to be able to run the query to save a link to the account for the user or something, and use that "sign" the link, or sign the link and set an expiry token into the signature so my website only responds to those requests if the signature in the URL is valid (eg - expires 10 mins from when it's generated). Else it generates a new one for the user. They should be able to always get updated versions of the file when they request it, eg - we publish a Second, Third, Fourth, etc edition of the book. Want to store their purchase (pretty much only need email address and transaction data - unless you think something else is needed?) stored in the sqlitedb from the stripe webhook our site needs to receive/process. All new orders should be able to identify what was purchased and send them a download link to their email address. Also they should need to put their email address in so they don't purcahse the same thing twice - i don't want to offer refunds for stupidy - i want to offer refunds for genuine reasons. So if they purchased the book once, they shouldn't be purchasing as second time.
6. **Paperback supply:** Are copies held and shipped by you, or printed and shipped on demand? Who owns stock, printing costs, dispatch, returns and damaged-copy replacement? What are the edition ISBNs, trim size, page counts, weight and packaging? Do not assume Amazon fulfils website orders. The shipped copies should come from Amazon print on demand. Info is on the URLs that i provided you.
7. **Shipping:** Which countries are supported at launch, what rates apply, and what dispatch/delivery estimates can be promised? Is tracking available? Who pays import duties? Restrict checkout to destinations with a confirmed fulfilment route. Wherever amazon print on demand ships to.
8. **Tax and policies:** Confirm merchant location, applicable registrations, digital/physical product tax classification, receipts, refunds, cancellation rights and international obligations with the appropriate adviser. Which current policy text must change to cover downloads and shipping? Australia. We are only dealing with digital copies. i might add a signed physical copy later for australian/new zealand people to purchase and set per-country delivery capture - put that in now for those kind of things, tell me how to configure/setup the product on the web so i can grab their shipping details etc for thoser products.
9.  **Email and support:** Which sender address and delivery service should send download/order messages? Who receives failed-delivery and fulfilment alerts? How should customers request replacement downloads or report missing parcels? I answered most of this already, except support emails always go to: hello@repasscloud.com
10. **Retailer details:** Supply the final Google Play Books and Apple Books listing URLs. Should any region be highlighted, or should the current neutral country list stay? Waiting on google and apple to finish their setup.

## Original recommended approach (superseded)

Extend the existing Stripe-hosted Checkout rather than adding a second payment integration. Start with one format per order, quantity one; add carts, bundles or multiple copies only if needed. Use separate server-side product/Price mappings and availability for each edition:

| Format identifier | Customer label | Delivery | Proposed configuration |
| --- | --- | --- | --- |
| `pdf` | PDF download | Private file entitlement | `STRIPE_PRICE_PDF` |
| `epub` | EPUB download | Private file entitlement | `STRIPE_PRICE_EPUB` |
| `paperback_bw` | Black and white paperback | Shipping order | `STRIPE_PRICE_PAPERBACK_BW` |
| `paperback_colour` | Colour paperback | Shipping order | `STRIPE_PRICE_PAPERBACK_COLOUR` |

These are planned identifiers, not currently supported values. Do not silently reinterpret existing `ebook` orders as PDF or EPUB, or existing `print` orders as either paperback. Retain historical records and explicitly migrate the checkout contract. Missing price, file, shipping or fulfilment configuration must hide/disable only that edition. The global commerce gate remains a final launch switch; configured Stripe keys alone do not mean delivery is ready.

Use a server-only restricted Stripe key with sufficient permissions, signed webhook secrets, distinct test/live configuration and Stripe's dynamic payment methods. Confirm the pinned SDK/API compatibility during implementation rather than copying an unverified version from a plan.

## Initial implementation gaps (addressed by the new store)

Inspected source: `src/lib/config.ts`, `commerce.ts`, `fulfilment.ts`, `http-handlers.ts`, `stripe.ts`, `src/pages/api/checkout.ts` and `src/pages/api/stripe/webhook.ts`.

- Only `ebook` and `print` are accepted; ebook Price is required to enable commerce.
- Checkout uses one configured Price and quantity one, with no physical shipping collection/rates.
- Only `checkout.session.completed` is processed for paid sessions; asynchronous success/failure is not handled.
- Orders are persisted as `manual_pending`; the default fulfilment callback does nothing. Event persistence alone is not successful file delivery.
- No private paid-download entitlement route, email delivery or printing/shipping integration exists.
- The README activation instructions currently register only the completed event; revise them for delayed methods before launch.

## Proposed API contract for the next implementation

Preserve the existing same-origin form flow and trailing slashes.

- `POST /api/checkout/`: accept only an allow-listed `format` from the four values above. Server determines Price, currency, amount, allowed countries and return URLs; ignore/reject client-controlled pricing. Available edition creates a hosted Checkout and returns the existing redirect response. Invalid input is rejected; disabled or unready edition returns controlled unavailability without charging. Repeated clicks/network retries should reuse the same checkout attempt through an idempotency design.
- `POST /api/stripe/webhook/`: verify the raw request signature, handle completed and asynchronous successful/failed payments, verify line items and format against the catalogue, and gate delivery on verified payment state. Idempotency must be enforced by Checkout Session/order and fulfilment job, not just event ID, because distinct events can describe one payment. Persist a durable job before acknowledging. Retry delivery independently; a recorded event must not prevent retries after delivery failure. Handle refund/dispute state and any entitlement revocation policy.
- Proposed `GET /api/download/`: an opaque expiring token grants access only to its paid edition. Verify entitlement and revocation server-side, then stream or redirect to a short-lived private-object URL. Reject forged, expired or revoked tokens without disclosing buyer information. A session ID or buyer email alone must never grant file access.

Store order items with edition, Price ID, amount/currency, asset version and delivery state; physical orders additionally need address, shipping charge, dispatch/tracking and supplier reference. Do not log secrets, tokens or full personal data. Run external fulfilment in a durable queue/outbox with bounded retries and an operator recovery path. Select storage/email/print services only after the questions above are answered.

## Implementation stages and acceptance

1. Finalise prices, rights, release assets and policies. Document a local OpenAPI contract or equivalent before changing endpoints; no Postman cloud push is needed.
2. Implement four edition identifiers end-to-end across config, validation, Checkout metadata, orders, migrations and purchase UI. Keep legacy order data intelligible. Verify every edition maps only to its server Price; unknown/unconfigured formats cannot create Checkout.
3. Implement private digital delivery and email. In test mode verify paid PDF and EPUB delivery, unpaid sessions, delayed success/failure, duplicate/different events for one session, concurrent callbacks, delivery failure/retry, expired links and refunds. Ensure the success page is never the sole delivery trigger.
4. Implement physical address collection, allowed destinations, rates and stock/print fulfilment. Test both paperbacks, unsupported countries, insufficient stock, duplicate dispatch and supplier failure recovery.
5. Validate local/unit/integration contracts, then real Stripe test-mode checkout, webhooks, customer email and downloads. Use test fulfilment orders for print. Confirm tax registration before automatic tax activation. Register the live webhook only when the ready handler can process it.
6. Activate only editions that pass end-to-end checks. Make the final live deployment and commerce-switch change explicit; monitor paid-but-undelivered orders and webhook/job failures.

## Sources checked

- [Stripe order fulfilment](https://docs.stripe.com/checkout/fulfillment.md?payment-ui=stripe-hosted): paid-state verification, duplicate-safe fulfilment and completed/asynchronous-success events.
- [Stripe Tax setup](https://docs.stripe.com/tax/set-up): product tax codes and registrations; no registration can produce zero tax. The plan is an implementation dependency, not a determination of the merchant's tax obligations.
- [KDP Select](https://kdp.amazon.com/en_US/help/topic/G200798990): confirm enrolment and applicable terms in the publisher account. The automated page extraction did not expose sufficient terms to verify distribution permission.
