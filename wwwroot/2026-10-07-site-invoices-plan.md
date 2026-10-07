# Site-generated purchase invoices

Implement paid PDF invoices locally in the Worker and attach them to the existing MailerSend purchase email. No Stripe invoice creation. Seller: RePass Cloud Pty Ltd; reference How-To-Use-AI.com; ABN 74642243801; email hello@repasscloud.com. Use canonical bubble logo.

Create an immutable invoice snapshot in the same D1 transaction as fulfilment, keyed uniquely by Stripe session and mode. Include buyer/business/billing/tax identifiers supplied in completed Checkout, original price, discount, shipping, actual paid total/currency/date/reference. Generate PDF once and preserve it in private D1 storage; authenticated owner can retrieve it from library. Test documents prominently labelled TEST; no fabricated tax calculation. GST status remains unconfirmed: live invoice sending must wait for explicit configuration; test PDFs can proceed without asserting GST treatment. Historic orders are not silently reconstructed.

Outbox retains existing submission/ambiguity protections. Invoice preparation before provider submission allows safe retry. Refund does not rewrite original invoice; refund/credit-note automation is follow-up scope.

Validate payment snapshot, duplicate events, ownership access, PDF layout/text and attachment body. Apply migration, deploy and visually inspect sample PDF.

## Implementation and verification

Implemented and deployed 7 October 2026 in Stripe test mode. Migration 0004 applied remotely.
Permanent D1 snapshot/PDF, purchase-email attachment and owner-only library invoice download
are implemented. Test and Japanese-font regression checks passed; sample PDF rendered and
visually inspected. MailerSend accepted the sample invoice to hello@repasscloud.com
(message ID 6ac609dde0195a7048ce5270, queued; inbox delivery requires recipient confirmation).
Temporary gated preview endpoint removed; live endpoint returns 404.
Final Worker version f4e89aee-b828-43bd-8dde-b0fe23b8a8f6.

Review fixes: free order completion retained; registered/unconfirmed live invoicing is gated;
distinct delayed events cannot reconstruct invoices for historic orders. Original purchase
records and PDF copies are never rewritten after issue. Live checkout itself is gated before
an immutable invoice snapshot could be accepted without configured tax treatment.

### Outstanding operator detail

ABN Lookup retrieved during implementation lists GST registration from 1 July 2020:
https://abr.business.gov.au/ABN/View?abn=74642243801
Confirm displayed Australian prices include GST and the treatment of overseas sales. Until
per-sale tax treatment is implemented, test invoices work and live invoicing/checkout is gated.
No invented GST amount is shown. This supersedes the earlier assumption that ordinary Stripe
receipts alone would cover the requested company invoice.

Dependency audit reports existing Astro/Cloudflare/Wrangler transitive advisories; no new
invoice-library advisory was listed. No unrelated framework upgrade was introduced.
