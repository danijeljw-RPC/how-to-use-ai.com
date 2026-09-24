# How-to-use-ai.com launch site design

## Status and decision

This is a design specification, not an implementation. It defines the
standalone website that will live entirely in `wwwroot/` until the website is
moved into its own repository.

The site launches before the finished book is available. Its working jobs are
to explain the series, expose a replaceable daily preview download, collect
email addresses for launch/coupon notification, make it easy to contact the
author, and publish a small amount of useful launch-related writing. It must
not imply that a customer can buy or receive a finished book before that is
true.

Direct Stripe sales are designed in now but locked off until explicitly
enabled. Retailer links can be enabled individually when available.

## Product principles

- The book remains the point. The site is calm, credible, beginner-friendly,
  useful, and firmly non-hype.
- Keep pages fast and content-first. Use browser JavaScript only for a small
  amount of progressive form handling if it materially improves the experience.
- Treat the preview link as publisher-managed configuration: the application
  redirects to it and never stores or generates the file.
- Capture newsletter signups exactly as requested: each valid submission is a
  new D1 row, including duplicate addresses. No unsubscribe system, mailing
  provider integration, automatic mail, or duplicate suppression is in this
  first release.
- Never place Stripe, Turnstile, or other secret values in the repository,
  generated pages, browser code, or logs.

## Deployment architecture

`wwwroot/` is an independent Node/Astro application, with its own lockfile,
package scripts, `.gitignore`, README, Wrangler configuration, migrations,
and source tree. The manuscript repository root remains untouched.

The application uses Astro server output with `@astrojs/cloudflare`, targeting
Cloudflare Pages Functions. The site will be deployable from this repository
by setting the Cloudflare Pages project root directory to `wwwroot`, build
command to `npm run build`, and output directory to `dist`.

Pages Functions need only one stateful binding for launch: `SITE_DB`, a D1
database. All public marketing and launch pages may be prerendered where
appropriate; form and commerce routes are server-rendered endpoints. The
architecture intentionally remains compatible with a later move to a
Cloudflare Worker if Pages no longer suits the product. No cloud resource is
created as part of this work.

```text
Browser
  -> static and SSR Astro pages on Cloudflare Pages
  -> POST API routes (same origin)
       -> Turnstile siteverify
       -> SITE_DB (D1)
       -> Stripe API (only when commerce is enabled)
Stripe event destination
  -> POST /api/stripe/webhook
       -> signature verification -> SITE_DB -> fulfilment adapter
```

## Planned directory structure

```text
wwwroot/
  README.md
  package.json
  package-lock.json
  astro.config.mjs
  tsconfig.json
  wrangler.jsonc
  .gitignore
  .dev.vars.example
  migrations/
    0001_launch_site.sql
  public/
    images/
    robots.txt
  src/
    pages/
      index.astro
      books/index.astro
      books/ai-for-normal-people.astro
      preview.astro
      purchase.astro
      blog/index.astro
      blog/[slug].astro
      contact.astro
      privacy.astro
      terms.astro
      checkout/success.astro
      checkout/cancel.astro
      404.astro
      api/newsletter.ts
      api/contact.ts
      api/preview.ts
      api/checkout.ts
      api/stripe/webhook.ts
    components/
    content/
      books.ts
      articles/
      site.ts
    layouts/
    lib/
      config.ts
      validation.ts
      turnstile.ts
      newsletter-repository.ts
      contact-repository.ts
      commerce.ts
      stripe.ts
      fulfilment.ts
    styles/
    env.d.ts
  tests/
```

The initial content will use only verified material already present in this
repository: the working series progression, Book 1 working title/subtitle,
and the supplied preview cover image. Unconfirmed claims, publication dates,
prices, retailer availability, endorsements, and author biography are not
invented. All launch copy is content data rather than hardcoded repeatedly in
components.

## Pages and user journeys

| Route | Launch behaviour | Later behaviour |
| --- | --- | --- |
| `/` | Series landing page, Book 1 introduction, preview/email CTAs | Direct-purchase CTA activates only when enabled |
| `/books/` | Series overview; only Book 1 is substantive | Additional books become content entries |
| `/books/ai-for-normal-people/` | Book details, cover, contents/topics, preview and notification CTAs | Links to each active purchase channel |
| `/preview/` | Explains the daily preview and links through `/api/preview` | Remains the preview entry point |
| `/purchase/` | Explains direct sales are not available yet; shows only configured retailer links | Shows configured formats and direct purchase buttons |
| `/blog/` and `/blog/[slug]/` | Small content collection of launch articles | Normal long-form companion content |
| `/contact/` | Turnstile-protected contact form | Same, with a later response workflow if wanted |
| `/privacy/`, `/terms/`, `/refund/` | Site-specific policies sourced from the RePass Cloud legal pack | Published with links to the RePass Cloud master policies |
| `/checkout/success/`, `/checkout/cancel/` | Not linked while commerce is off | Human-facing outcomes; never the proof of fulfilment |

The header includes Home, Books, Preview, Blog, and Contact. Purchase is not a
top-level promise while direct commerce is disabled; it becomes one only when
the `COMMERCE_ENABLED` gate is on. Footer includes the policy pages and an
email-capture form.

## Preview and newsletter flow

1. The reader enters an email address and explicitly ticks a concise consent
   statement explaining that it is for launch/coupon notification.
2. The browser obtains a Turnstile token for the `newsletter-signup` action.
3. `POST /api/newsletter` validates content type, email shape, consent, and
   Turnstile. It uses parameterized D1 SQL to append a row; it never queries
   for an existing email address.
4. The response gives a truthful confirmation: the address has been recorded;
   no email is claimed to have been sent.
5. The preview CTA goes to `GET /api/preview`, which reads
   `PREVIEW_DOWNLOAD_URL` and returns a temporary redirect. If not configured,
   it returns a helpful unavailable page rather than a broken redirect.

The preview is deliberately not gated behind email capture. This avoids
pretending that an email is required to access a public preview, and lets the
user decide whether to join the launch list.

## D1 model

```text
newsletter_signups
  id                 TEXT primary key (UUID)
  email              TEXT not null
  consent_version    TEXT not null
  source_page        TEXT not null
  created_at         TEXT not null (ISO 8601 UTC)
  request_country    TEXT nullable
  user_agent         TEXT nullable

contact_messages
  id                 TEXT primary key (UUID)
  name               TEXT nullable
  email              TEXT not null
  subject            TEXT nullable
  message            TEXT not null
  created_at         TEXT not null
  request_country    TEXT nullable

stripe_events
  stripe_event_id    TEXT primary key
  event_type         TEXT not null
  received_at        TEXT not null
  payload_version    TEXT not null

commerce_orders
  id                 TEXT primary key (UUID)
  stripe_session_id  TEXT unique not null
  stripe_payment_id  TEXT nullable
  email              TEXT nullable
  format             TEXT not null
  status             TEXT not null
  fulfilment_state   TEXT not null
  created_at         TEXT not null
  updated_at         TEXT not null
```

`stripe_events` is retained even though commerce starts disabled because a
webhook must be idempotent: Stripe can retry the same event. The launch site
has no user account model, customer table, login system, coupon delivery, or
email delivery service.

## Configuration contract

Public or non-secret values are set as Cloudflare Pages variables. Sensitive
values are Cloudflare Pages secrets and have only placeholder names in
`.dev.vars.example`.

| Name | Type | Launch value/behaviour |
| --- | --- | --- |
| `SITE_URL` | variable | Canonical production URL |
| `PREVIEW_DOWNLOAD_URL` | variable | Publisher-maintained daily preview target |
| `TURNSTILE_SITE_KEY` | variable | Enables form widget rendering |
| `TURNSTILE_SECRET_KEY` | secret | Required to accept protected forms |
| `COMMERCE_ENABLED` | variable | `false` by default; only exact `true` enables purchase endpoints |
| `STRIPE_SECRET_KEY` | secret | Omitted until direct sales are prepared |
| `STRIPE_WEBHOOK_SECRET` | secret | Omitted until the Stripe endpoint is registered |
| `STRIPE_PRICE_EBOOK` | variable | Omitted until an active ebook Price exists |
| `STRIPE_PRICE_PRINT` | variable | Omitted until a direct-print workflow exists |
| `RETAILER_AMAZON_URL` | variable | Empty until verified |
| `RETAILER_APPLE_BOOKS_URL` | variable | Empty until verified |
| `RETAILER_OTHER_URL` | variable | Empty until verified |

Configuration is fail-closed. `COMMERCE_ENABLED=true` without all required
Stripe values produces an unavailable response and an operator-visible
structured error; it must never show a button that leads to a broken or
partially configured payment flow.

## Stripe activation plan

No Product, Price, Payment Link, secret, or webhook is created now.

When the ebook and commercial terms are final:

1. Create one Stripe Product for the ebook. Create a one-time Price in the
   intended currency, then store its generated `price_...` identifier in
   `STRIPE_PRICE_EBOOK`. A Product describes the sellable item; a Price carries
   currency and amount, so a later price change creates a new Price rather than
   overwriting historical orders.
2. Create a separate Product only if the print copy has a genuinely different
   direct-sales fulfilment process. Otherwise show an external retailer link.
3. Configure a Stripe Event Destination for
   `checkout.session.completed` at `/api/stripe/webhook`; save its signing
   secret as `STRIPE_WEBHOOK_SECRET`.
4. Add the Stripe secret key as a Pages secret, set the intended Price IDs and
   any verified retailer URLs, and use Stripe test mode first.
5. Deploy with `COMMERCE_ENABLED=false`; exercise the endpoint and webhook
   using Stripe test events. Then set it to `true` only after a real fulfilment
   implementation and the production endpoint have passed their checks.

The application uses server-created Stripe Checkout Sessions rather than
Payment Links or an embedded payment form. The server accepts an allow-listed
format (`ebook` or `print`), selects its configured Price ID, creates a
one-time Checkout Session, and redirects to Stripe's hosted checkout. Client
input can never provide amount, currency, success URL, or an arbitrary Price
ID. The success page only says payment is being confirmed; the webhook is the
authoritative fulfilment trigger.

The first activation implementation may set `fulfilment_state=manual_pending`
and record orders without delivering an ebook. A later dedicated fulfilment
slice can issue short-lived download links from the chosen secure file store.
It must not use a permanently public ebook URL as a payment entitlement.

## Security and failure rules

- Newsletter/contact endpoints require POST, same-origin checks, input size
  limits, HTML-free server-side validation, action-specific Turnstile
  verification, and parameterized D1 statements.
- Turnstile is a bot-control layer, not an authorization system. Failed,
  expired, wrong-action, or missing tokens reject without a database write.
- The application logs structured event names and outcomes, never email body,
  Turnstile token, Stripe signature, Stripe secret, or full payment payload.
- Checkout requires the explicit enabled gate and complete valid configuration.
- Webhook handling reads the raw request body once, verifies the Stripe
  signature before parsing, stores the event ID transactionally/idempotently,
  then records the order. Invalid signatures return a non-success response;
  duplicate valid events return success without re-fulfilment.
- The contact form stores messages but does not promise an automatic response.
- Marketing pages and preview redirect may cache appropriately; form,
  checkout, webhook, success, and cancel responses are `no-store`.

## Accessibility, content, and SEO

- Semantic landmarks, one H1 per page, visible focus treatment, accessible
  labels/errors, keyboard navigation, reduced-motion support, and sufficient
  contrast are acceptance criteria rather than polish work.
- Form errors are announced without losing entered safe fields. Turnstile has
  a documented no-token failure path.
- Include canonical URLs, per-page titles/descriptions, Open Graph metadata,
  a sitemap, robots rules, and `Book`/`WebSite` structured data only where the
  underlying facts are confirmed.
- Do not include an unverified publication date, ISBN, edition, page count,
  testimonials, prices, or purchase availability in schema or visible copy.

## Test plan

### Automated unit and contract tests

| Area | Cases |
| --- | --- |
| Configuration | Missing required launch configuration fails clearly; only literal `true` enables commerce; enabled commerce without Stripe configuration fails closed; absent retailer URL does not render a link |
| Input validation | Valid/invalid email, required consent, field length boundaries, control characters, invalid form content type, unsupported checkout format |
| Turnstile | Valid expected action accepted; invalid, missing, expired, wrong-action, and provider-error tokens reject without D1 writes |
| Newsletter repository | Every valid request inserts a row; two identical email submissions result in two rows; consent/source/timestamp persist correctly; SQL parameters are used |
| Contact repository | Required message/email rules, safe optional fields, created timestamp, successful persistence |
| Preview | Configured URL results in redirect; absent/malformed URL is a controlled unavailable response; no preview target leaks into unrelated pages |
| Content | Required book metadata and article frontmatter validate; no unconfirmed commercial claims accidentally appear in generated output |
| Checkout | Disabled gate rejects before Stripe call; only configured server-side format maps to an allow-listed Price; amount/Price URL injection cannot influence the session |
| Stripe webhook | Invalid signature rejected; valid completion records an order; repeat event is idempotent; unrelated event is acknowledged but does not create an order; no fulfilment when commerce is disabled |

### Astro/output tests

- `npm run check` has no errors, warnings, or hints.
- `npm run build` has no errors or warnings.
- Rendered output has each declared public route, canonical URL, unique title,
  useful meta description, robots/sitemap inclusion, and no secrets.
- The preview URL is not embedded as an accidental static asset requirement.
- Disabled commerce output has no functional checkout form or misleading buy
  call to action; verified retailer URLs use safe external-link attributes.
- Form HTML has labels, error containers, consent copy, action-specific
  Turnstile configuration, and no browser-exposed secret.

### Local integration tests

- Start against local D1 persistence with a fake Turnstile verifier and fake
  Stripe client; POST the real endpoints and query the local database.
- Verify a newsletter signup and duplicate signup append two rows.
- Verify contact submission persists once, and failed Turnstile validation
  persists nothing.
- Verify preview redirect, unavailable-preview handling, 404, and invalid
  method responses.
- Enable commerce only with fake complete configuration: prove session request
  construction and webhook idempotency. No live Stripe call is necessary.

### Browser checks

- Desktop and narrow mobile: header, menu, primary CTAs, book cover crop,
  footer, blog cards, and form flow are legible and usable.
- Keyboard-only: navigation, modal-free forms, visible focus, error recovery,
  and submit path work.
- Screen-reader-oriented inspection: landmarks, heading order, labels,
  required/invalid states, and live form confirmation are meaningful.
- Confirm commerce-off purchase behaviour is honest; it must never imply a
  transaction has occurred.

### Cloudflare preview and production checks

- Configure a separate preview D1 database/binding from production before the
  first public deployment.
- In a Pages preview deployment, verify all public routes, the actual
  Turnstile widget, submission persistence, and no cross-environment data
  writes.
- Before direct sales activation, use Stripe test mode and Stripe CLI/event
  delivery to exercise raw-signature verification and duplicate retry
  handling, then inspect D1 state.
- Before production launch, manually verify canonical host, TLS, custom
  domain, Pages environment variables/bindings, privacy wording, and
  publication facts. Browser verification remains a separate real-world
  check; a successful build is not proof that configured cloud services work.

## Implementation slices

1. Bootstrap the isolated Astro/Cloudflare Pages SSR project and local checks.
2. Build the visual system, verified book metadata, launch pages, article
   collection, metadata, and responsive navigation.
3. Add D1 migrations plus the newsletter, preview redirect, and contact
   endpoint/form contracts behind Turnstile.
4. Add the disabled purchase surface, configuration validation, and retailer
   link model.
5. Add the dormant Stripe Checkout and webhook contracts with fake-client
   tests, keeping `COMMERCE_ENABLED=false`.
6. Carry out the later Stripe product/Price/webhook and fulfilment activation
   as a separate reviewed release once the book and commercial terms exist.

## Explicit non-goals for this launch slice

- Creating Cloudflare resources, a Pages project, Stripe products, Price IDs,
  webhook endpoints, or secrets.
- Payment collection, ebook delivery, coupon generation, fulfilment email,
  sales tax configuration, physical-shipping integration, or refunds.
- Newsletter sending, subscriber management UI, duplicate suppression, or
  unsubscribe automation.
- An administrative dashboard, account system, analytics, comments, or a
  large editorial CMS.
- Editing any repository material outside `wwwroot/`.

## Acceptance criteria for the later implementation plan

- All application files, dependencies, migrations, documentation, and tests
  live below `wwwroot/`; no existing repository file is edited.
- `wwwroot` can be built and deployed independently as an Astro SSR Pages app.
- The site truthfully presents Book 1 and the series without inventing sales
  facts.
- Preview redirect, D1 newsletter append-only capture, contact capture, and
  Turnstile validation work in local and Cloudflare preview environments.
- Commerce is demonstrably unavailable until explicit configuration enables
  it; it fails closed when incomplete.
- The future Checkout/webhook design has complete test coverage for signature
  verification, validation, and idempotency before any live Stripe activation.
