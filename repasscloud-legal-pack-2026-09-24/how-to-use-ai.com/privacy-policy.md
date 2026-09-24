# Privacy Policy

**Effective:** 24 September 2026  
**Last updated:** 24 September 2026

## 1. About this policy

This policy applies to **How To Use AI.com**, including `https://how-to-use-ai.com` and the website features described below.

How To Use AI.com is a publishing imprint, book-series name and website operated by **RePass Cloud Pty Ltd**.

This site-specific policy supplements the RePass Cloud Privacy Policy:

https://repasscloud.com/legal/privacy-policy/

If this policy states a more specific rule for How To Use AI.com, that specific rule applies to this site.

Operator details:

**RePass Cloud Pty Ltd**  
ABN 74642243801  
ACN 642243801  
3 Pioneer Street  
Findon SA 5023  
Australia

Email: hello@repasscloud.com  
Contact: https://repasscloud.com/contact/

## 2. What the site does

How To Use AI.com provides educational and informational material about artificial intelligence and related technology, book information and previews, contact and newsletter functionality, and links to places where publications may be purchased.

Direct sales of digital and printed books may also be enabled.

## 3. Hosting and infrastructure

The site runs on Cloudflare infrastructure and uses a Cloudflare D1 database for site application data. The D1 database is configured with Oceania placement.

Cloudflare may process website request and response data, IP addresses, timestamps, URLs, browser/device/network information, security signals, Ray IDs and other technical information required to deliver and protect the site.

The site uses Cloudflare Turnstile for bot and abuse protection on forms. The browser loads the Turnstile component and the server sends the Turnstile response token, expected form action and connecting IP address to Cloudflare for verification.

Cloudflare privacy information:  
https://www.cloudflare.com/privacypolicy/

## 4. Newsletter signups

A valid newsletter signup is stored in Cloudflare D1.

The signup record may contain:

- a generated record identifier;
- email address;
- consent wording or consent version;
- source page;
- submission date and time;
- request country supplied by Cloudflare when present; and
- browser user-agent string when present.

The site currently uses newsletter consent wording for launch and coupon notifications.

Marketing messages are not sent until a mailing platform has been selected, its privacy and international-processing arrangements have been reviewed, double opt-in and unsubscribe handling are operational, and subscriber information is appropriately transferred.

The selected mailing platform will be documented before subscriber data is transferred to it.

D1 is intended to remain the authoritative consent-history record.

## 5. Contact form

A valid contact submission may create a D1 record containing:

- generated record identifier;
- name, if supplied;
- email address;
- subject, if supplied;
- message;
- submission date and time; and
- request country supplied by Cloudflare when present.

Do not send passwords, API keys, authentication credentials, payment-card details, unnecessary confidential information or sensitive personal information through the contact form.

Contact messages are handled as private business correspondence but are not treated as creating legal, professional or contractual confidentiality merely because they are submitted through a general form.

## 6. Free preview

The site may provide a free book preview.

The preview PDF is hosted as part of the How To Use AI.com site deployment on Cloudflare rather than by a separate public file-hosting provider.

Opening or downloading the preview therefore involves ordinary website request processing by the site and Cloudflare.

## 7. Retailer links

The site may link to Amazon, Apple Books or other book retailers.

Ordinary retailer links are not intended to be affiliate links unless they are specifically identified as affiliate or sponsored links.

If a visitor follows an external retailer link, the external retailer controls its own website, privacy practices, checkout and tracking.

## 8. Referral and affiliate tracking

How To Use AI.com may later operate its own referral or affiliate program so that a referring party can receive commission for a qualifying direct sale on this site.

If that feature is introduced, the site may process a referral code or identifier and associate it with a visit or order to calculate commission.

Before such tracking is activated, the implementation must be reviewed and this policy and any required cookie/tracking controls must be updated to accurately describe the technology used.

## 9. Direct checkout and payments

Direct commerce is not treated as active merely because supporting code exists.

Where direct checkout is enabled, RePass Cloud Pty Ltd is the seller of record for purchases made directly from the site.

Stripe is the intended payment processor.

A Stripe-hosted Checkout Session may process payment, billing, transaction, fraud, device and related information.

For a completed paid checkout, How To Use AI.com may record in D1:

- an internal order identifier;
- Stripe Checkout Session identifier;
- Stripe PaymentIntent identifier when present;
- customer email supplied through Stripe when present;
- purchased format, such as ebook or print;
- payment or order status;
- fulfilment state; and
- creation and update timestamps.

The site may also record Stripe event identifiers, event types, receipt times and API payload versions needed to process webhooks.

Full payment-card details are not intentionally stored by RePass Cloud where Stripe-hosted or Stripe-provided payment functionality is used.

Stripe privacy information:  
https://stripe.com/au/privacy

## 10. Fulfilment processing

RePass Cloud operates a separate licence/order-processing application that can retrieve new How To Use AI.com sales from the Cloudflare D1 database through an API and process digital or physical orders.

The intended process retrieves new sales periodically, currently designed around hourly processing, and updates order state through the API.

Digital delivery and direct printed-book fulfilment must be implemented and tested before they are represented as live.

If a print-on-demand, printer, courier or fulfilment provider is selected, the provider and material overseas-processing details must be reviewed before customer delivery information is sent to it.

## 11. Analytics and browser storage

At the effective date of this policy, the How To Use AI.com repository does not intentionally implement:

- first-party analytics;
- advertising pixels;
- customer accounts;
- comments;
- deliberate first-party `localStorage` use;
- deliberate first-party `sessionStorage` use; or
- ordinary first-party tracking cookies.

Cloudflare, Turnstile and infrastructure services may still process technical and security information as part of operating the site.

Google analytics/tracking is planned but is **not described as active by this policy**.

Before non-essential Google analytics, advertising or similar tracking is enabled, the site must:

- identify the actual technology and data collected;
- update this policy;
- provide any consent, opt-out or privacy control required in the jurisdictions where the tracking is used; and
- ensure the public site accurately describes the implementation.

## 12. Operational logs

Application code records structured operational events such as:

- whether a form was recorded or rejected;
- whether checkout configuration is available; and
- Stripe webhook outcome or status.

The application does not deliberately include submitted form contents in those application events.

Known Cloudflare configuration for this site includes:

- Worker Observability enabled;
- Worker invocation logs enabled at 100% sampling;
- Workers Free retention currently 3 days;
- Worker traces disabled;
- Worker Logpush disabled for the Worker;
- D1 enabled; and
- Turnstile enabled.

Other Cloudflare security and analytics datasets are subject to the retention applicable to the product and account configuration.

## 13. Other information we may receive

In operating the publishing business, RePass Cloud may also receive information relating to:

- customer support and direct email correspondence;
- direct orders and transactions;
- invoices, accounting and tax;
- chargebacks, fraud and disputes;
- retailers, marketplaces, distributors and fulfilment;
- event registrations;
- surveys and feedback;
- social-media interactions;
- contractors and suppliers;
- authors, contributors, guests and reviewers; and
- competitions, promotions and giveaways.

The RePass Cloud Privacy Policy explains these broader corporate categories.

## 14. Why we use information

Information collected through How To Use AI.com may be used to:

- deliver website content;
- operate and secure the site;
- detect bots, spam, fraud, malicious traffic and abuse;
- diagnose errors and performance problems;
- process and respond to contact messages;
- administer newsletter consent and subscriptions;
- send permitted launch, coupon, new-book, company-marketing and existing-publication/new-edition messages;
- process direct orders where checkout is enabled;
- deliver digital purchases;
- arrange print fulfilment and shipping where enabled;
- manage refunds, returns, disputes and chargebacks;
- reconcile payments and retailer reports;
- maintain accounting, tax and statutory records;
- administer authors, contributors, reviewers, contractors and suppliers;
- administer events, surveys, promotions or competitions;
- establish, exercise or defend legal rights; and
- comply with applicable law.

Subscriber information is not sold or rented and is not shared with another business for that business's independent marketing.

## 15. Mailing list and unsubscribe

The intended mailing list is for:

- book-launch announcements;
- discount or coupon messages;
- new-book announcements;
- general company marketing relevant to How To Use AI.com; and
- updates about existing books and new editions.

The mailing list is not intended to be used for unrelated third-party marketing.

Messages are periodic rather than sent on a fixed schedule and may be more frequent around launches, releases, promotions or significant updates.

The mailing-list minimum age is intended to be 18.

Every marketing email will contain a clear electronic unsubscribe mechanism.

An automated unsubscribe is intended to take effect promptly. A manually submitted request will be actioned as soon as practicable and no later than 5 business days after receipt.

The unsubscribe method will not require payment, account creation, login or extra personal information.

The mechanism will remain functional for at least 30 days after the message is sent.

A minimal suppression record may be retained to prevent accidental re-mailing.

Before a mailing provider is implemented, a person may withdraw consent by contacting hello@repasscloud.com.

## 16. Disclosure and service providers

Information may be disclosed to providers only where reasonably necessary for the relevant function.

Providers may include:

- Cloudflare;
- Stripe, where direct checkout is enabled;
- a future mailing provider;
- business email providers;
- accounting/bookkeeping providers;
- retailers and distributors;
- printers, print-on-demand and fulfilment providers;
- couriers and postal services;
- contractors and professional advisers; and
- security, dispute, fraud and legal services.

Not every category of information is disclosed to every provider.

## 17. Overseas handling

Cloudflare and Stripe operate internationally and may process information in Australia and other countries used by their group companies and subprocessors.

Known or reasonably anticipated overseas handling may include:

- Cloudflare: Australia, the United States, Europe and other locations in its global service infrastructure;
- Stripe: Australia, Ireland, the United States and other locations used to provide payment and fraud-prevention services;
- future mailing, fulfilment, email, storage or backup providers: countries to be reviewed before the relevant service is introduced; and
- overseas contractors or professional providers if engaged.

We use the safeguards described in the RePass Cloud Privacy Policy.

## 18. Retention

How To Use AI.com uses the following intended retention rules:

| Record | Retention |
| --- | --- |
| Newsletter signup/consent | While subscribed, with limited consent-history records for up to 5 years after withdrawal where reasonably required |
| Marketing suppression | While the relevant mailing list operates or until the address can no longer reasonably be reintroduced |
| Contact messages | 2 years after resolution unless the record belongs to a category requiring longer retention |
| D1 website form submissions | 2 years after resolution unless they become part of an order, consent record, dispute or other longer-retention category |
| Workers Observability/invocation logs | Currently 3 days on the Workers Free configuration used for this site |
| Business copies of Stripe event/order records | Generally 5 years after the transaction, or longer where an unresolved dispute, chargeback, tax or legal matter requires it |
| Order/customer records | Generally 5 years after the transaction, subject to longer tax, accounting, warranty, dispute or legal requirements |
| Tax/accounting records | For the period required by applicable Australian law |
| Ordinary support | 2 years after resolution |
| Refund/chargeback/fraud/material dispute | Generally 5 years after final resolution, or longer where a legal hold or active matter requires it |
| Security incident records | Generally 5 years after closure, or longer for an active legal, regulatory, insurance or enforcement matter |
| Business backups | Target maximum 90 days where that is the configured backup lifecycle |

Retention is reviewed at least quarterly once the recurring retention process is operational.

## 19. Security

Security measures include authenticated administrative access, HTTPS/TLS, access controls, protected application secrets, limited application/database permissions, software updates, Cloudflare security and anti-abuse controls, operational logging and incident-response procedures.

Payment-card details are intended to be handled by Stripe rather than stored directly by the business.

No system can provide absolute security.

## 20. Children

The site is not directed to children.

The intended general audience is 18+, although ordinary public informational pages may be accessible to people aged 13 or older without an account.

The mailing list is intended for people aged 18 or older.

We do not knowingly seek children's personal information through the ordinary site. If we learn that a child's personal information has been submitted in circumstances where it should not have been collected, we will take reasonable steps to remove it, subject to any lawful retention requirement.

## 21. Privacy requests and complaints

You may ask what information is held, request access or correction, request deletion where available or legally required, withdraw marketing consent, ask about overseas handling or make a complaint.

Contact:

hello@repasscloud.com

We aim to acknowledge a request or complaint within 5 business days and provide a substantive response within 30 calendar days where reasonably practicable.

Identity verification will be proportionate to the request. Government-issued identity documents are not normally requested.

Deletion does not require us to remove information that must lawfully or reasonably be retained for tax, accounting, fraud, chargeback, dispute, legal, security or suppression purposes.

Where the Office of the Australian Information Commissioner has jurisdiction, an eligible complainant may contact the OAIC after giving RePass Cloud a reasonable opportunity to respond:

https://www.oaic.gov.au/

## 22. International users

How To Use AI.com may be accessed internationally and may deliberately market or sell in Australia, New Zealand, the United Kingdom, the United States, Canada and parts of Europe.

Where an overseas privacy law applies, mandatory rights under that law continue to apply.

Any additional legal-basis mapping, representative appointment or jurisdiction-specific notice required for deliberate EEA or UK targeting must be implemented where legally required.

## 23. Changes to this policy

The current policy will be published with its effective and last-updated dates.

Material changes may also be communicated through a prominent site notice and, where appropriate, directly to affected customers or subscribers.

Previously collected information will not be used for a materially incompatible new purpose merely because this policy changes. Fresh consent will be obtained where applicable law requires it.

## 24. Contact

**RePass Cloud Pty Ltd**  
ABN 74642243801  
ACN 642243801  
3 Pioneer Street  
Findon SA 5023  
Australia

Email: hello@repasscloud.com  
Contact: https://repasscloud.com/contact/
