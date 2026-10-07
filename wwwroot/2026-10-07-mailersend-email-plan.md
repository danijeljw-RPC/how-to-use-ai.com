# MailerSend transactional email replacement

Status: approved by the author, 7 October 2026; implementation complete; deployed and provider submission tested. The author uploaded MAILERSEND_API_KEY and authorised controlled test emails to their inbox. This supersedes the Cloudflare Email Sending portions of the digital-store plan, store setup guide and configuration audit. MailerSend is the selected provider; no alternative-provider evaluation is required.

## Decision and scope

All outgoing application email will use **hello@repasscloud.com**, with the same reply-to address. Display name: **How-To-Use-AI.com · RePass Cloud**. This is the author's real mailbox and replies must reach it. No outgoing message may use how-to-use-ai.com or a customer address as its From identity. Website, sign-in, library and support links still use how-to-use-ai.com.

Implement MailerSend's HTTPS API from the Cloudflare Worker using native fetch. Cloudflare remains the hosting platform, D1/R2/cron provider; its native email binding is removed. No SDK dependency is needed for this single provider endpoint. API contract comes before implementation, using the proposed integration contract below and mocked provider tests.

Cover the three existing transactional messages: sign-in link, digital purchase confirmation, and signed-paperback order confirmation. Contact and newsletter currently only save submissions. This plan does not silently introduce automatic acknowledgements, operator alerts or marketing campaigns; any future message will use the same sender and adapter.

Keep templates versioned inside wwwroot. Send generated HTML and plain text directly; no MailerSend-hosted template IDs or dashboard template maintenance are required. Stripe configuration is accepted as user-completed and is not changed by this migration.

## Review of existing implementation

- src/lib/store/email.ts already queues access/order jobs in D1, claims two-minute leases, processes ten jobs at a time and retries at most eight times.
- It currently combines content generation, sign-in token issuance, provider submission and outbox updates. Extracting these responsibilities makes templates easy to edit and provider behaviour testable.
- authReady() depends on STORE_EMAIL, STORE_EMAIL_FROM, STORE_EMAIL_READY and the download signing secret. The native binding is the main provider dependency to replace.
- Purchase webhooks persist paid orders/entitlements and outbox jobs transactionally. Preserve that behaviour: email availability must not decide whether a paid customer owns the book.
- Login tokens are hashed, one-use and valid for fifteen minutes; scanner GET does not log the reader in. Downloads remain authenticated, short-lived and streamed from private R2.
- Current retry handling treats every exception alike and does not retain provider message IDs. MailerSend needs distinct rejected, accepted and uncertain outcomes.
- Contact support links already point to /contact/?subject=purchase-support. Replies to hello@repasscloud.com remain available as requested.

## Sender, key and readiness

Keep sender identity in a shared source configuration module, fixed to hello@repasscloud.com for both from/reply_to. Remove STORE_EMAIL_FROM from readiness/config/examples to avoid contradictory sender settings. Every template must use the shared identity rather than having its own address.

Add Worker secret **MAILERSEND_API_KEY**. The user will upload it from wwwroot:

```sh
npx wrangler secret put MAILERSEND_API_KEY
```

Never place the value in vars, source, tests, logs or documentation. Local tests use injected fake fetch; local manual work can use an ignored .dev.vars entry. The key name is proposed and will be the implementation's exact contract.

Remove the STORE_EMAIL native binding/type and old Cloudflare onboarding comments. Retain STORE_EMAIL_READY as the explicit operational gate, initially false. authReady() will require HTTPS SITE_URL, a signing secret of at least 32 characters, a nonempty MailerSend key and STORE_EMAIL_READY=true. It should not make external requests during page rendering. Provider rejection still needs proper handling because key presence does not prove validity.

User setup prerequisites: repasscloud.com verified/authenticated in MailerSend; account permits real recipients and adequate sending quota; existing receiving mailbox remains intact. Review MailerSend's domain DNS instructions without replacing the parent company's receiving MX records. Check token expiry and permissions. Email Full access is needed to submit messages; dashboard-hosted Templates access is unnecessary. Activity Read is optional for an operator/API diagnostic tool, not a runtime requirement for the initial adapter. Keep unrelated token permissions disabled where practical.

## Project-owned templates

Proposed files under src/lib/email/templates/ with a shared layout and typed input objects. Templates return subject/html/text and never perform network or database operations.

| Template | Subject | Required content |
| --- | --- | --- |
| sign-in.ts | Your book store sign-in link | Sign-in button, full fallback URL, fifteen-minute/one-use explanation, fresh-link library URL, unsolicited-request note. |
| digital-order.ts | Your book downloads | Book title, PDF/EPUB/bundle label, safe order reference, purchase confirmation, library sign-in button, future-edition access, contact support. |
| signed-order.ts | Your signed-book order | Book title, signed copy, safe order reference, paid book/shipping/total and currency where persisted, destination country, manual dispatch statement, contact support. |

Shared layout: restrained navy/white book branding, clear text, table-based email layout with inline CSS, readable on phones. Text must remain complete if styles/images are stripped. Use absolute HTTPS website links. Footer identifies RePass Cloud Pty Ltd. Escape every dynamic HTML value, validate URLs and keep customer values out of subjects/headers unless specifically normalized. Order reference is for support, not an access credential. Never attach full book files or promise an unconfigured dispatch date. A signed order grants no digital entitlement.

Create local preview artifacts through a script using obviously fake references and nonfunctional example URLs. Review each HTML preview and text equivalent. Do not bake live login tokens or personal addresses into snapshots/artifacts. Keep login URLs as direct first-party links: disable click/open/content tracking per send. Keep plain text and HTML wording aligned.

## Proposed MailerSend API contract

POST https://api.mailersend.com/v1/email with Authorization: Bearer <secret>, Content-Type: application/json and Accept: application/json. Body:

```json
{
  "from": {"email":"hello@repasscloud.com","name":"How-To-Use-AI.com · RePass Cloud"},
  "reply_to": {"email":"hello@repasscloud.com","name":"RePass Cloud"},
  "to": [{"email":"<verified customer address>"}],
  "subject":"<template subject>",
  "html":"<rendered template>",
  "text":"<plain-text equivalent>",
  "settings":{"track_clicks":false,"track_opens":false,"track_content":false}
}
```

No template_id, full-book attachments, CC or BCC. Recipient is the verified customer stored by the application. Endpoint is fixed in code, not supplied by browser input. Reject redirects to avoid sending the Bearer key to another host. Use a 15-second request timeout and bounded response-body handling.

202 with x-message-id records provider acceptance, not inbox delivery. Empty response bodies are valid. A paused response records accepted-but-paused and is not resent. Suppression warnings and missing IDs need explicit handling; an all-suppressed response is a permanent delivery failure rather than success. Never log raw response bodies containing recipient data.

User-facing store endpoint shapes remain unchanged. The proposed integration contract will be incorporated into docs/store-api.md during implementation. No provider delivery webhook is required for the first release; actual inbox tests and MailerSend dashboard activity are the acceptance evidence.

## Reliable outbox and failure handling

Add an additive migration 0003_mailersend_outbox.sql, retaining existing rows and orders. Add provider_message_id, submission_started_at, provider_status and last_error_code metadata. Existing state is an unconstrained string, so use explicit states pending, submitting, sent (documented as accepted), failed, ambiguous and cancelled. Preserve existing sent rows as historical accepted sends, not proof of inbox delivery.

Before submitting, persist submitting state and submission timestamp under the claimed lease. Generate a fresh one-use token immediately before sending rather than when the job was originally queued. Do not store raw token/HTML in operational logs. Retain current paid-order recheck so reversed orders do not generate new delivery messages.

- Accepted: persist provider ID/outcome and release lease; do not resend on delayed/paused delivery. A later failure to save the response is ambiguous.
- Definitive authentication/validation/suppression rejection: retain failed job with sanitized category; fix configuration or recipient issue before a deliberate requeue.
- Explicit rate-limit rejection: bounded backoff, honoring a valid Retry-After, within current attempt limits. Retrying requires a fresh still-valid login link.
- Timeout, connection interruption, 5xx or unexpected response where acceptance is uncertain: ambiguous, retained for manual review; no automatic duplicate submission. MailerSend is not assumed to provide client-request idempotency.
- A stale submitting lease becomes ambiguous, not pending. Crashes before external submission may therefore require manual review; this is a conservative trade-off.

Do not infer non-delivery from absent activity. Known provider IDs can be checked in MailerSend; unknown acceptance must be reviewed before an order email is resubmitted. A customer can always explicitly request another sign-in link from the library without buying again. Such a new user request is distinct from an automatic retry of the uncertain send.

Update recovery documentation/queries for the new states; prohibit a blanket requeue of ambiguous/submitting jobs. No automatic operator email alert that depends on the same failing provider. Customer ownership/download access and payment idempotency remain unchanged.

## Implementation order and files

1. Finalize the proposed API/template contracts and source sender identity after author review.
2. Add typed template modules/shared layout plus local previews; test content, escaping and direct URLs.
3. Add src/lib/email/mailersend.ts adapter with injected fetch, timeout and explicit outcomes; mocked contract tests for every provider response class.
4. Add migration/outbox state transitions and refactor src/lib/store/email.ts; update maintenance lease recovery and recovery queries.
5. Update store/types.ts, wrangler.jsonc, .dev.vars.example and regenerate cloudflare-env.d.ts. Do not enable readiness or commerce automatically.
6. Update store tests and store-api.md, replace Cloudflare sections in store-setup.md/configuration-audit.md, and update changelog. Preserve all unrelated edits, NZD/signed prices and user-added secrets.
7. Run migration against local D1 and run focused integration tests, then full tests/check/build/deploy dry-run. Stage operational deployment separately from this plan.
8. After MailerSend domain/key setup, deploy with commerce=false and perform controlled real-email sign-in test. Set readiness true only for that controlled test; revert false if it fails. Then run Stripe test purchase and confirm purchase email plus downloads. Live payment activation remains a separate action.

## Acceptance criteria

- All three templates submit only from/reply_to hello@repasscloud.com; no Cloudflare email dependency or sender on how-to-use-ai.com remains in executable email paths.
- With no key or readiness=false, login sending remains unavailable; Stripe credentials and unrelated website forms remain unaffected.
- HTML and text previews are readable and match. Special characters/customer data cannot inject markup or headers; link tracking is disabled.
- Mock tests validate actual provider body/headers, normal 202, paused 202, suppression, malformed responses, 401/403/422, 429, timeout, 5xx and lease crash recovery.
- Order webhook duplication does not create duplicate jobs; parallel workers cannot submit the same job; ambiguous sends are retained without automatic resend. No claim of exactly-once external email delivery.
- PDF/EPUB access, order reversal checks and one-use authentication retain existing guarantees.
- Real inbox evidence confirms From/reply-to and usable sign-in; digital purchase and signed-order templates each receive controlled delivery checks. Replies route to the author's mailbox. No real message is sent during plan preparation.

## Review points

The recommended scope is the three existing transactional messages. If you also want contact submission notifications, customer acknowledgements or newsletter sending, explicitly add those flows before implementation; they need their own content/consent/queue behaviour. Signed-copy dispatch emails remain outside this plan because no dispatch-status workflow exists yet.

MailerSend delivery webhooks/automatic dashboards are deferred. The initial implementation retains provider IDs and uses manual activity review, reducing setup while still handling uncertain submissions honestly.

## Sources checked 7 October 2026

- [Email API: body fields, response IDs, paused/suppressed outcomes and tracking controls](https://developers.mailersend.com/api/v1/email)
- [API token management and permissions](https://www.mailersend.com/help/managing-api-tokens)
- [Sending-domain setup](https://www.mailersend.com/help/how-to-start-sending-emails)

Source statements describe provider behaviour; outbox policy, template layout and scope above are project design decisions. Domain verification, account sending limits and the user-held key have not been checked remotely.

## Completion evidence — 7 October 2026

- Native email dependency removed; fixed sender/reply-to and all three project templates implemented.
- Migration 0003 applied locally/remotely; provider IDs and uncertain-submission handling implemented.
- Independent review identified batch timing issue; corrected and regression-covered. Runtime live test found redirect:error unsupported in Workers; changed to manual redirect handling without forwarding credentials.
- Three authorised, clearly labelled emails were accepted by MailerSend with HTTP 202 and message IDs: sign-in 6ac5d561629058579f7e1f18; digital preview 6ac5d561ee6451b5c2068e10; signed preview 6ac5d561d842a3506fd15fcc. Recipient hello@repasscloud.com. Accepted/queued is not independently verified inbox delivery.
- A temporary bearer-protected, expiring, fixed-recipient, test-mode-only endpoint performed the test; endpoint and local control secret were removed before final deployment. Fake purchase previews created no orders or dispatches.
- Email readiness is enabled for controlled sign-in testing. COMMERCE_ENABLED remains false; signed sales disabled and Stripe mode test. No payment was taken. Customer browser sign-in/purchase and inbox/reply verification remain operator acceptance checks.

Final version: `e4bba15a-c34f-48d5-80fe-68c488538c37`. Final checks: 110 tests pass; Astro check zero errors/warnings/hints; build successful. Live browser confirmed the email sign-in form is available. Temporary preview endpoint is absent from the final build. Local runtime logs report an existing inspector-port collision and select an alternate port; no application diagnostic errors.
