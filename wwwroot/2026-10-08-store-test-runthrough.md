# Store test run-through — ready

Approved invoice design is locked: crisp outlined vector white pill on solid navy header;
Bill to left, content-width From at right margin; clean aligned totals with no blue box.

Current setup: COMMERCE_ENABLED=true, STORE_MODE=test, STORE_EMAIL_READY=true,
STORE_SIGNED_ENABLED=false. Peach Freestyle test webhook is enabled for all six lifecycle
events. D1 migration 0004 is applied. Site invoices are generated internally; Stripe invoice
creation is disabled. MailerSend sends the PDF attachment, and library sessions protect copies.

## Run through

1. Open https://how-to-use-ai.com/downloads/ and sign in by email.
2. Use an unowned format. For a full fresh bundle purchase, use another email address or
   alias whose mailbox you control. Existing entitlements deliberately prevent duplicate purchases.
3. Choose the edition/currency, accept terms and go to Stripe Checkout.
4. Use Stripe test card 4242 4242 4242 4242, expiry 12/34, any three-digit CVC,
   and your own buyer/business details. A real payment is not charged in test mode.
5. Check the order email from hello@repasscloud.com. It includes the approved PDF invoice
   and library access. Allow a few minutes for scheduled outbox processing if needed.
6. Confirm the formats and invoice appear in the library; open both the invoice and book file.

Invoices issued before the design revision remain immutable. New purchases use the locked
layout. Stripe Dashboard automatic receipts can be disabled separately if they cause duplicates.
Live checkout remains gated on confirmed tax treatment; test checkout is ready.

Validation: 123 tests passed, Astro check reported zero errors/warnings/hints, build passed.
Verified remote invoice table and enabled test webhook; validated persisted invoice bytes
match the email attachment in the full paid-event/outbox test. Actual browser payment and
recipient inbox delivery for the next purchase are the operator's run-through.
