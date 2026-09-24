# Privacy Policy and Website Terms Questionnaire

## Purpose

Complete this questionnaire and give the whole file to ChatGPT. Its answers
will be used to write replacement copy for:

- `https://how-to-use-ai.com/privacy/`
- `https://how-to-use-ai.com/terms/`

The objective is two complete, plain-English, publication-ready documents
that accurately describe the website and its operator. This questionnaire is
not legal advice and the generated documents should still be reviewed by an
Australian lawyer before paid sales or marketing email begins.

## How to Complete This File

1. Replace every `[ANSWER REQUIRED]` with an answer.
2. For conditional questions, write `NOT APPLICABLE` where appropriate.
3. For each prefilled repository observation, write `CONFIRMED` or provide the
   corrected wording.
4. Describe what happens now, not merely what may happen later. Label planned
   features as `PLANNED` and include their intended activation date or trigger.
5. Do not paste passwords, API keys, payment-card details, private identity
   documents, or any other secret into this file.
6. Only provide a home address if you have decided that it may be published.
   A business postal address or registered office may be more appropriate.
7. If you do not know an answer, write `UNKNOWN — LEGAL/OPERATIONAL DECISION
   REQUIRED` instead of guessing.

Answer in as much detail as necessary. ChatGPT must use your supplied legal
names, addresses, dates, timeframes, and operational details verbatim.

## Part 1 — Document Scope

### 1.1 Required output

Which output do you want ChatGPT to produce?

- `CURRENT`: policies describing only the website as it operates now, with
  direct commerce disabled.
- `COMMERCE READY`: policies intended to take effect when direct sales are
  activated and all described systems are operational.
- `BOTH`: current policies plus clearly separated replacement clauses or full
  revised policies for the commerce launch.

**Answer:** [ANSWER REQUIRED]

### 1.2 Effective date

What effective date must appear on both documents? Use a full unambiguous date,
for example `24 September 2026`.

**Answer:** [ANSWER REQUIRED]

### 1.3 Last-updated date

Should the documents show a separate last-updated date? If yes, provide it.

**Answer:** [ANSWER REQUIRED]

### 1.4 Website and related properties

List every domain, subdomain, app, download location, mailing list, store, or
other service these documents must cover.

**Answer:** [ANSWER REQUIRED]

### 1.5 Exclusions

List any websites, products, companies, consulting work, or other services that
must not be covered by these documents.

**Answer:** [ANSWER REQUIRED]

## Part 2 — Legal Operator and Contact Details

### 2.1 Website operator

The repository currently identifies `RePass Cloud Pty Ltd` as the publisher
and `How To Use AI.com` as its publishing imprint and the book-series name.

Is `RePass Cloud Pty Ltd` also the legal entity that owns and operates the
website and enters contracts with website customers?

**Answer:** [CONFIRM OR CORRECT]

### 2.2 Legal identifiers

Provide the operator's details exactly as they may be published.

- Full legal name: [ANSWER REQUIRED]
- Australian Business Number (ABN): [ANSWER REQUIRED]
- Australian Company Number (ACN), if it will be shown: [ANSWER REQUIRED]
- Country of registration: [ANSWER REQUIRED]
- State or territory of registration: [ANSWER REQUIRED]
- Registered office, if it will be published: [ANSWER REQUIRED OR NOT APPLICABLE]
- Public postal/business address: [ANSWER REQUIRED]
- Trading names or imprints: [ANSWER REQUIRED]

### 2.3 Copyright owner

Who owns the copyright in each of the following?

- Website code and design: [ANSWER REQUIRED]
- Website articles and other editorial content: [ANSWER REQUIRED]
- Book manuscripts and previews: [ANSWER REQUIRED]
- Book-cover artwork and other images: [ANSWER REQUIRED]
- `How To Use AI.com` name, branding, and logos: [ANSWER REQUIRED]

Identify any material licensed from someone else and the applicable
attribution or licence conditions.

**Answer:** [ANSWER REQUIRED OR NONE]

### 2.4 Public contact channels

- General enquiries email: [ANSWER REQUIRED]
- Privacy enquiries email: [ANSWER REQUIRED]
- Privacy complaints email: [ANSWER REQUIRED]
- Sales, fulfilment, and refund email: [ANSWER REQUIRED OR NOT APPLICABLE]
- Postal address for formal notices: [ANSWER REQUIRED]
- Contact-form URL: [ANSWER REQUIRED]
- Telephone number, if one will be published: [ANSWER REQUIRED OR NOT APPLICABLE]

### 2.5 Governing location

Where is the website business principally managed and operated?

- Country: [ANSWER REQUIRED]
- State or territory: [ANSWER REQUIRED]
- City: [ANSWER REQUIRED]

## Part 3 — Privacy-Law Coverage and Audience

### 3.1 Australian Privacy Act position

Provide the company's total annual turnover from all sources as a range, not an
exact figure, unless you want the exact figure recorded.

**Answer:** [ANSWER REQUIRED]

Does any circumstance make the company subject to the Australian Privacy Act
regardless of turnover, such as trading in personal information, providing a
health service, undertaking Commonwealth contract work, operating a residential
tenancy database, conducting credit reporting, or being an AML/CTF reporting
entity?

**Answer:** [ANSWER REQUIRED]

Has a lawyer confirmed whether the company is an APP entity?

**Answer:** [YES/NO, WITH DETAILS]

If the Privacy Act does not legally require it, does the company nevertheless
want the policy to promise compliance with the Australian Privacy Principles,
or only describe its actual privacy practices without claiming APP compliance?

**Answer:** [ANSWER REQUIRED]

### 3.2 Countries and regions

Where will the website, books, advertising, direct sales, retailer sales, and
marketing emails be actively offered or targeted? Distinguish incidental global
website access from deliberate targeting.

**Answer:** [ANSWER REQUIRED]

Will the business deliberately target or monitor people in any of the following?

- European Economic Area: [YES/NO]
- United Kingdom: [YES/NO]
- New Zealand: [YES/NO]
- California or other US states: [YES/NO]
- Canada: [YES/NO]
- Any other jurisdiction: [LIST OR NONE]

Has a lawyer advised that GDPR, UK GDPR, the New Zealand Privacy Act, CCPA/CPRA,
or another non-Australian privacy law applies?

**Answer:** [ANSWER REQUIRED]

### 3.3 Intended audience and children

- Intended reader/customer age range: [ANSWER REQUIRED]
- Minimum age for using the site without parental involvement: [ANSWER REQUIRED]
- Minimum age for joining the mailing list: [ANSWER REQUIRED]
- Minimum age for purchasing directly: [ANSWER REQUIRED OR NOT APPLICABLE]
- Is the site directed to children? [YES/NO]
- Does the business knowingly collect children's personal information? [YES/NO]
- What happens if a child's information is submitted? [ANSWER REQUIRED]

## Part 4 — Repository-Observed Privacy Facts

These statements are observations from the current `wwwroot` source and
configuration. They are not proof of live production behaviour or legal
conclusions. Confirm or correct each statement.

### 4.1 Hosting and first-party storage

The Astro site runs as the Cloudflare Worker named `how-to-use-ai` on
`how-to-use-ai.com` and `www.how-to-use-ai.com`. It uses a Cloudflare D1
database named `how-to-use-ai-site`. The repository README describes its D1
placement as Oceania.

**Answer:** [CONFIRM OR CORRECT, INCLUDING ACTUAL DATA LOCATION IF KNOWN]

### 4.2 Newsletter records

Each valid newsletter submission creates a new D1 record, including repeat
submissions. The record contains:

- a generated record identifier;
- email address;
- consent wording/version;
- source page;
- submission timestamp;
- request country from Cloudflare's `cf-ipcountry` header, when present; and
- browser user-agent string, when present.

The current form says: `I agree to have my email address stored for launch and
coupon notifications.`

**Answer:** [CONFIRM OR CORRECT]

### 4.3 Contact records

Each valid contact submission creates a D1 record containing:

- a generated record identifier;
- name, if supplied;
- email address;
- subject, if supplied;
- message;
- submission timestamp; and
- request country from Cloudflare's `cf-ipcountry` header, when present.

The form warns people not to expect an automatic response or a promised
response time.

**Answer:** [CONFIRM OR CORRECT]

### 4.4 Turnstile bot protection

Newsletter and contact submissions use Cloudflare Turnstile. The browser loads
Cloudflare's Turnstile script, and the server sends the Turnstile response
token, expected form action, and connecting IP address to Cloudflare for
verification.

**Answer:** [CONFIRM OR CORRECT]

### 4.5 Cookies, browser storage, and analytics

The repository contains no first-party analytics integration, advertising
pixel, login, customer account, comments system, or deliberate use of
`localStorage`, `sessionStorage`, or first-party cookies. Turnstile and other
infrastructure providers may process technical information under their own
systems and policies.

**Answer:** [CONFIRM OR CORRECT]

List anything added through the Cloudflare dashboard, tag managers, injected
scripts, proxies, or other systems that would not appear in this repository.

**Answer:** [ANSWER REQUIRED OR NONE]

### 4.6 Request and operational logs

Application code writes structured operational events such as whether a form
was recorded or rejected, whether checkout configuration is available, and the
outcome/status of Stripe webhooks. It does not deliberately include submitted
form contents in those application events. Cloudflare may separately retain
request, security, diagnostic, or observability data.

**Answer:** [CONFIRM OR CORRECT]

Exactly which Cloudflare logs, analytics, observability products, firewall
events, or dashboard datasets are enabled, what fields do they contain, and
how long is each retained?

**Answer:** [ANSWER REQUIRED]

### 4.7 Preview download

`/api/preview/` redirects visitors to a configured HTTPS preview-file URL. The
current tracked configuration points to
`https://how-to-use-ai.com/downloads/ai-for-normal-people-preview.pdf`. The
application does not generate the PDF during the request.

Where is that PDF actually hosted and which organisation receives request data
when it is opened?

**Answer:** [CONFIRM/CORRECT AND ANSWER]

### 4.8 Retailer links

The site can display external links to Amazon, Apple Books, and one other
retailer when their URLs are configured. The repository does not contain
affiliate identifiers or click tracking for these links.

**Answer:** [CONFIRM OR CORRECT]

Will any link be an affiliate link or otherwise generate commission or provide
referral reporting?

**Answer:** [ANSWER REQUIRED]

### 4.9 Direct checkout

Direct commerce is currently disabled in tracked production configuration. If
activated, the site creates a Stripe-hosted Checkout Session. For a completed
paid Checkout Session, D1 is designed to record:

- an internal order identifier;
- Stripe Checkout Session identifier;
- Stripe PaymentIntent identifier, when present;
- customer email supplied through Stripe, when present;
- purchased format (`ebook` or `print`);
- payment/order status;
- fulfilment state; and
- creation and update timestamps.

It also records Stripe event identifiers, event types, receipt times, and API
payload versions for webhook processing. The current implementation marks paid
orders `manual_pending`; it does not yet deliver a file or ship a product.

**Answer:** [CONFIRM OR CORRECT]

## Part 5 — Complete Personal-Information Inventory

### 5.1 Other information collected

Apart from the records above, list every category of personal or technical
information the business collects or receives. Consider direct emails,
customer-support correspondence, invoices, tax records, chargebacks, fraud
data, retailer reports, event registrations, surveys, social media, mailing
providers, contractors, authors, reviewers, and competition entries.

For each category, state:

- the information collected;
- who it concerns;
- how it is collected;
- whether collection is required or optional;
- why it is collected;
- where it is stored;
- who can access it; and
- whether it is disclosed to anyone else.

**Answer:** [ANSWER REQUIRED OR NONE]

### 5.2 Sensitive information

Does the business intentionally collect sensitive information, such as health,
racial or ethnic origin, political opinions, religious beliefs, sexual
orientation, criminal records, biometrics, or professional-association
membership?

**Answer:** [YES/NO, WITH DETAILS]

What should staff do if a contact-form user voluntarily submits sensitive
information that was not requested?

**Answer:** [ANSWER REQUIRED]

### 5.3 Information received from third parties

Does the business receive personal information from Stripe, retailers,
distributors, mailing platforms, social networks, event organisers, partners,
public sources, or any other third party?

**Answer:** [ANSWER REQUIRED]

### 5.4 Automated decision-making and profiling

Is personal information used for profiling, targeted advertising, credit or
fraud decisions, automated eligibility decisions, or any decision producing a
significant effect on a person?

**Answer:** [ANSWER REQUIRED]

## Part 6 — Purposes, Consent, and Marketing

### 6.1 Purposes

For each category of personal information, state every actual purpose for which
it may be collected, stored, used, or disclosed. Do not use vague wording such
as `business purposes` unless those purposes are then listed.

**Answer:** [ANSWER REQUIRED]

### 6.2 Mailing-list promise

What exact kinds of messages may subscribers receive?

- Book-launch announcements: [YES/NO]
- Discount or coupon messages: [YES/NO]
- New-book announcements: [YES/NO]
- Blog/article updates: [YES/NO]
- General company marketing: [YES/NO]
- Partner or third-party marketing: [YES/NO]
- Other: [LIST OR NONE]

How often do you expect to send messages?

**Answer:** [ANSWER REQUIRED]

Will subscriber details ever be sold, rented, shared with another business for
its own marketing, or combined with data from elsewhere?

**Answer:** [ANSWER REQUIRED]

### 6.3 Mailing provider

The current site stores signups but does not send marketing email. Before any
marketing message is sent:

- Which mailing platform will be used? [ANSWER REQUIRED]
- In which countries will it process/store data? [ANSWER REQUIRED]
- Will existing D1 signups be imported into it? [YES/NO]
- Will D1 remain the authoritative consent record? [YES/NO]
- Will double opt-in be used? [YES/NO]
- What sender name will recipients see? [ANSWER REQUIRED]
- What sender email/address details will messages contain? [ANSWER REQUIRED]

### 6.4 Withdrawal and unsubscribe

What exact method will let a person withdraw marketing consent or unsubscribe?

**Answer:** [ANSWER REQUIRED]

Within how many business days will unsubscribe requests be actioned?

**Answer:** [ANSWER REQUIRED]

How long will the unsubscribe mechanism remain functional after each message,
and will it work without login, payment, or supplying extra personal data?

**Answer:** [ANSWER REQUIRED]

Will a minimal suppression record be retained after unsubscription to prevent
accidental re-mailing? If yes, list its fields and retention period.

**Answer:** [ANSWER REQUIRED]

How can a person withdraw consent before the mailing platform is implemented?

**Answer:** [ANSWER REQUIRED]

### 6.5 International legal bases

Complete only if GDPR, UK GDPR, or another law requiring stated legal bases
applies. Map each processing purpose to the legal basis advised by counsel,
such as consent, contract, legal obligation, or legitimate interests. Describe
any legitimate-interests assessment.

**Answer:** [ANSWER REQUIRED OR NOT APPLICABLE]

## Part 7 — Service Providers and Overseas Handling

Complete one block for every provider that handles personal information or
website request data. Include Cloudflare and, if applicable, Stripe, the future
mailing provider, file hosting, email hosting, customer support, accounting,
book distribution, retailers, fulfilment/shipping, contractors, and backup
providers.

Copy this block as many times as needed:

### Provider

- Legal provider name: [ANSWER REQUIRED]
- Product/service: [ANSWER REQUIRED]
- Information handled: [ANSWER REQUIRED]
- Purpose: [ANSWER REQUIRED]
- Provider's role, if known (processor/service provider/independent controller): [ANSWER REQUIRED]
- Countries where data may be processed or accessed: [ANSWER REQUIRED]
- Contract or data-processing agreement in place: [YES/NO/UNKNOWN]
- Subprocessors relevant to this website: [ANSWER REQUIRED OR UNKNOWN]
- Provider privacy-policy URL: [ANSWER REQUIRED]
- Provider data-location/subprocessor URL: [ANSWER REQUIRED OR NOT AVAILABLE]
- Retention/deletion controls available to the business: [ANSWER REQUIRED]

### 7.1 Overseas disclosures

Is the company likely to disclose personal information to recipients outside
Australia? List the recipient categories and countries where practicable.

**Answer:** [ANSWER REQUIRED]

What contractual, technical, or organisational safeguards apply to overseas
handling?

**Answer:** [ANSWER REQUIRED]

## Part 8 — Retention, Deletion, Security, and Data Breaches

### 8.1 Retention schedule

Provide a real retention rule for every category. `As long as necessary` is not
enough unless the criteria used to decide necessity are also stated.

| Record or dataset | Retention period or deletion trigger | Reason/legal requirement | Deletion or de-identification method |
| --- | --- | --- | --- |
| Newsletter consent and signup records | [ANSWER REQUIRED] | [ANSWER REQUIRED] | [ANSWER REQUIRED] |
| Unsubscribe/suppression records | [ANSWER REQUIRED] | [ANSWER REQUIRED] | [ANSWER REQUIRED] |
| Contact messages | [ANSWER REQUIRED] | [ANSWER REQUIRED] | [ANSWER REQUIRED] |
| Cloudflare request/security logs | [ANSWER REQUIRED] | [ANSWER REQUIRED] | [ANSWER REQUIRED] |
| Stripe event records | [ANSWER REQUIRED] | [ANSWER REQUIRED] | [ANSWER REQUIRED] |
| Order and customer records | [ANSWER REQUIRED] | [ANSWER REQUIRED] | [ANSWER REQUIRED] |
| Tax/accounting records | [ANSWER REQUIRED] | [ANSWER REQUIRED] | [ANSWER REQUIRED] |
| Support, refund, and dispute records | [ANSWER REQUIRED] | [ANSWER REQUIRED] | [ANSWER REQUIRED] |
| Backups | [ANSWER REQUIRED] | [ANSWER REQUIRED] | [ANSWER REQUIRED] |
| Other | [ANSWER REQUIRED OR NONE] | [ANSWER REQUIRED] | [ANSWER REQUIRED] |

### 8.2 Deletion operations

Who is responsible for running deletions, how often are they performed, and
how is completion checked?

**Answer:** [ANSWER REQUIRED]

What happens to records that must be retained for tax, fraud, dispute, legal,
or suppression purposes after a person requests deletion?

**Answer:** [ANSWER REQUIRED]

### 8.3 Security description

Describe the security safeguards that may safely be stated publicly without
revealing exploitable details. Consider access restriction, account security,
encryption in transit/at rest, secret management, software updates, logging,
backups, contractor access, and incident response.

**Answer:** [ANSWER REQUIRED]

Do not claim a certification, audit, security guarantee, or encryption control
unless it is demonstrably true.

### 8.4 Data breaches

- Who receives a suspected privacy/security incident report? [ANSWER REQUIRED]
- Is there a documented incident-response process? [YES/NO]
- Is there an eligible data-breach assessment/notification process? [YES/NO]
- How will affected people be contacted when notification is required? [ANSWER REQUIRED]

## Part 9 — Privacy Rights, Requests, and Complaints

### 9.1 Available requests

Which requests will the business accept, and how should each be submitted?

- Ask what personal information is held: [ANSWER REQUIRED]
- Request access or a copy: [ANSWER REQUIRED]
- Request correction: [ANSWER REQUIRED]
- Request deletion: [ANSWER REQUIRED]
- Withdraw consent/object to marketing: [ANSWER REQUIRED]
- Ask about overseas handling: [ANSWER REQUIRED]
- Make a privacy complaint: [ANSWER REQUIRED]
- Any additional rights for non-Australian users: [ANSWER REQUIRED OR NONE]

### 9.2 Identity verification

How will identity be verified without collecting more information than needed?

**Answer:** [ANSWER REQUIRED]

### 9.3 Response process

- Person or role responsible: [ANSWER REQUIRED]
- Acknowledgement timeframe: [ANSWER REQUIRED]
- Target response timeframe: [ANSWER REQUIRED]
- Circumstances where access/deletion may be refused or limited: [ANSWER REQUIRED]
- How reasons and review options will be communicated: [ANSWER REQUIRED]
- Will any fee be charged? [ANSWER REQUIRED]

### 9.4 Complaints and escalation

Describe the internal complaint process, expected timeframes, and escalation
path.

**Answer:** [ANSWER REQUIRED]

Should the policy direct eligible complainants to the Office of the Australian
Information Commissioner after they first complain to the company? If another
regulator or dispute body is relevant, identify it.

**Answer:** [ANSWER REQUIRED]

## Part 10 — Privacy-Policy Changes

How will material privacy-policy changes be communicated—for example, by
updating the effective date, posting a notice, or emailing affected users?

**Answer:** [ANSWER REQUIRED]

Will previously collected information be used for a materially new purpose
without fresh consent? State the rule to follow.

**Answer:** [ANSWER REQUIRED]

## Part 11 — Website Terms: Acceptance and Scope

### 11.1 Parties and terminology

What short names should the terms use for:

- RePass Cloud Pty Ltd or the corrected operator: [ANSWER REQUIRED]
- How To Use AI.com: [ANSWER REQUIRED]
- A site visitor or customer: [ANSWER REQUIRED]
- The website, articles, downloads, previews, books, and related material collectively: [ANSWER REQUIRED]

### 11.2 Acceptance

When should a visitor be treated as accepting the website terms: merely by
using the site, by downloading the preview, by submitting a form, and/or by
actively accepting them during checkout?

**Answer:** [ANSWER REQUIRED]

Will direct checkout include an unchecked acceptance box linking to the terms
and privacy policy before payment?

**Answer:** [ANSWER REQUIRED OR NOT APPLICABLE]

### 11.3 Changes to terms

How will revised terms apply to ordinary site use and to purchases already
made? Describe how material changes will be notified and ensure new terms do
not purport to rewrite completed transactions retrospectively.

**Answer:** [ANSWER REQUIRED]

## Part 12 — Website Content and Permitted Use

### 12.1 Nature of the material

Confirm the intended description of the website and books. The current terms
call them general educational information and say they are not professional
advice for high-stakes decisions involving law, health, finance, safety, or
other specialist judgement.

**Answer:** [CONFIRM OR PROVIDE REPLACEMENT WORDING]

List any other disclaimer categories that genuinely match the content. Do not
add broad disclaimers merely because they are common in templates.

**Answer:** [ANSWER REQUIRED OR NONE]

### 12.2 Accuracy and reliance

What promises, if any, are made about accuracy, completeness, currency,
availability, fitness for a particular purpose, or error correction?

**Answer:** [ANSWER REQUIRED]

How should readers be told to verify changing AI product features, pricing,
law, safety information, or other time-sensitive material?

**Answer:** [ANSWER REQUIRED]

### 12.3 Website-use licence

What may a visitor do with freely available website material?

- Read and display it privately: [YES/NO]
- Link to public pages: [YES/NO, WITH CONDITIONS]
- Quote short extracts with attribution: [YES/NO, WITH CONDITIONS]
- Print a copy for personal use: [YES/NO]
- Share complete articles: [YES/NO, WITH CONDITIONS]
- Use material commercially: [YES/NO, WITH CONDITIONS]
- Use material to train AI or machine-learning models: [YES/NO, WITH CONDITIONS]
- Use automated crawlers, scraping, or text/data mining: [YES/NO, WITH CONDITIONS]
- Other permissions/restrictions: [ANSWER REQUIRED OR NONE]

### 12.4 Preview licence

What may a person do with the free book preview?

- Download and keep a personal copy: [YES/NO]
- Print a personal copy: [YES/NO]
- Send the PDF to another person: [YES/NO]
- Share only the official preview link: [YES/NO]
- Quote extracts in reviews or commentary: [YES/NO, WITH CONDITIONS]
- Upload or redistribute the complete file: [YES/NO, WITH CONDITIONS]
- Modify, resell, sublicense, or remove notices: [YES/NO, WITH CONDITIONS]
- Accessibility conversions for personal use: [YES/NO, WITH CONDITIONS]

May the preview change or be withdrawn without notice? Does access promise a
finished book, release date, future access, discount, or particular final
content?

**Answer:** [ANSWER REQUIRED]

### 12.5 Rights notices and infringement reports

What copyright and trademark notice should appear?

**Answer:** [ANSWER REQUIRED]

Where should a person report alleged copyright infringement, and what
information should the report contain?

**Answer:** [ANSWER REQUIRED]

## Part 13 — Forms, User Messages, and Acceptable Use

### 13.1 Contact-form content

The current site asks people not to submit unlawful material, secrets, payment
details, or sensitive personal information. Confirm or replace that rule.

**Answer:** [CONFIRM OR CORRECT]

Will contact messages be treated as confidential? If not, explain the limits
without implying that the business may publicly exploit private correspondence.

**Answer:** [ANSWER REQUIRED]

What limited permission does the business need to store, copy, route, and use a
message in order to respond, investigate, keep records, or comply with law?

**Answer:** [ANSWER REQUIRED]

### 13.2 Prohibited conduct

Confirm which conduct is prohibited:

- unlawful, fraudulent, abusive, threatening, or defamatory use;
- malicious code or security attacks;
- interfering with the site or other users;
- bypassing access controls or rate limits;
- impersonation or misrepresentation;
- infringement of intellectual-property or privacy rights;
- automated abuse, scraping, or excessive requests;
- submitting another person's personal information without authority;
- reverse engineering where restriction is legally permitted; and
- any additional conduct.

**Answer:** [CONFIRM/CORRECT AND LIST ADDITIONS]

### 13.3 Enforcement

What may the operator do in response to prohibited conduct—for example reject
a submission, restrict access, preserve evidence, contact a provider, or report
apparently unlawful activity? Ensure the response is proportionate.

**Answer:** [ANSWER REQUIRED]

## Part 14 — External Sites and Retailers

### 14.1 External links

What responsibility does the operator accept for selecting and describing
external links, and what matters remain controlled by the third-party site?

**Answer:** [ANSWER REQUIRED]

### 14.2 Retailer purchases

For purchases completed at Amazon, Apple Books, another retailer, or a book
distributor:

- Which party is the seller of record? [ANSWER REQUIRED]
- Whose checkout terms and privacy policy apply? [ANSWER REQUIRED]
- Who handles payment, delivery, returns, and refunds? [ANSWER REQUIRED]
- Which issues can RePass Cloud Pty Ltd still help with? [ANSWER REQUIRED]
- Are any links sponsored or affiliated? [ANSWER REQUIRED]

The terms must not disclaim responsibilities that legally remain with the
publisher or operator.

## Part 15 — Direct Sales

Complete this part even if commerce is planned but disabled. Write `NOT
APPLICABLE` for formats that will not be sold directly.

### 15.1 Seller and products

- Seller of record: [ANSWER REQUIRED]
- Products/formats sold directly: [ANSWER REQUIRED]
- Countries/regions served: [ANSWER REQUIRED]
- Consumer sales, business sales, or both: [ANSWER REQUIRED]
- Currency or currencies: [ANSWER REQUIRED]
- Are displayed prices tax-inclusive? [ANSWER REQUIRED]
- GST registration/status and invoice approach: [ANSWER REQUIRED]

### 15.2 Contract formation

At what point is an order accepted and a binding sales contract formed: when
checkout is submitted, when Stripe confirms payment, when the operator sends
an order-acceptance message, or another point?

**Answer:** [ANSWER REQUIRED]

Can the seller reject or cancel an order after payment because of fraud,
pricing error, stock/availability, territorial restrictions, or another
specific reason? State the refund process and avoid a one-sided unlimited
cancellation right.

**Answer:** [ANSWER REQUIRED]

### 15.3 Payment processing

- Payment processor: [ANSWER REQUIRED]
- Accepted payment methods: [ANSWER REQUIRED]
- Does the operator ever receive full card details? [YES/NO]
- Fraud screening used: [ANSWER REQUIRED]
- Payment authorisation/capture timing: [ANSWER REQUIRED]
- Failed, reversed, disputed, or charged-back payment process: [ANSWER REQUIRED]

### 15.4 Order confirmation and support

- Confirmation method and sender: [ANSWER REQUIRED]
- Information shown in confirmation: [ANSWER REQUIRED]
- Expected confirmation timeframe: [ANSWER REQUIRED]
- Missing-confirmation support process: [ANSWER REQUIRED]
- Proof-of-purchase requirements for support: [ANSWER REQUIRED]

### 15.5 Digital books

- File formats supplied: [ANSWER REQUIRED]
- Delivery method: [ANSWER REQUIRED]
- Expected delivery time after accepted payment: [ANSWER REQUIRED]
- Number/duration of download attempts: [ANSWER REQUIRED]
- Replacement process for a failed or corrupt download: [ANSWER REQUIRED]
- Device/software requirements disclosed before purchase: [ANSWER REQUIRED]
- DRM or watermarking: [ANSWER REQUIRED]
- Personal-use licence granted to buyer: [ANSWER REQUIRED]
- Sharing, copying, printing, backup, resale, and accessibility rules: [ANSWER REQUIRED]
- Update/correction policy after purchase: [ANSWER REQUIRED]

### 15.6 Printed books

- Are print copies sold directly? [YES/NO]
- Print-on-demand or stocked inventory: [ANSWER REQUIRED OR NOT APPLICABLE]
- Printer and fulfilment provider: [ANSWER REQUIRED OR NOT APPLICABLE]
- Shipping destinations: [ANSWER REQUIRED OR NOT APPLICABLE]
- Shipping prices and taxes/duties: [ANSWER REQUIRED OR NOT APPLICABLE]
- Dispatch and delivery estimates: [ANSWER REQUIRED OR NOT APPLICABLE]
- Tracking availability: [ANSWER REQUIRED OR NOT APPLICABLE]
- Risk/title transfer point, if counsel has advised one: [ANSWER REQUIRED OR NOT APPLICABLE]
- Lost, delayed, damaged, incorrect, or undeliverable order process: [ANSWER REQUIRED OR NOT APPLICABLE]
- Address-change/correction cutoff: [ANSWER REQUIRED OR NOT APPLICABLE]

### 15.7 Pre-orders

Will the site accept payment before a book is ready for delivery?

**Answer:** [YES/NO]

If yes, provide the estimated-release wording, delay notifications,
cancellation rights, refund process, and treatment if publication is cancelled.

**Answer:** [ANSWER REQUIRED OR NOT APPLICABLE]

### 15.8 Coupons and promotions

- Who is eligible? [ANSWER REQUIRED]
- Start and expiry rules: [ANSWER REQUIRED]
- Whether coupons can be combined: [ANSWER REQUIRED]
- Product/geographic exclusions: [ANSWER REQUIRED]
- Usage limits: [ANSWER REQUIRED]
- Treatment after refund/cancellation: [ANSWER REQUIRED]
- Correction of genuine errors or abuse: [ANSWER REQUIRED]
- Any promotion-specific terms: [ANSWER REQUIRED OR NONE]

## Part 16 — Refunds, Returns, and Consumer Guarantees

### 16.1 Australian Consumer Law

Confirm that the terms must preserve all non-excludable rights and remedies,
including Australian Consumer Law consumer guarantees where applicable.

**Answer:** [CONFIRM OR CORRECT BASED ON LEGAL ADVICE]

### 16.2 Faults and failures

Describe the remedy process for:

- a corrupt, inaccessible, missing, or incorrectly supplied ebook;
- a printed book that is faulty, damaged, materially misdescribed, or the wrong
  item;
- a major failure;
- a minor failure that can be remedied;
- an order not supplied within the promised or a reasonable time; and
- consequential loss where legally recoverable.

**Answer:** [ANSWER REQUIRED]

### 16.3 Change of mind

Is any voluntary change-of-mind refund or return offered beyond rights required
by law? If yes, give the timeframe, condition requirements, exclusions, return
method, shipping responsibility, and refund timing.

**Answer:** [ANSWER REQUIRED]

### 16.4 Refund operations

- How does a customer request a remedy? [ANSWER REQUIRED]
- What evidence is reasonably required? [ANSWER REQUIRED]
- Who assesses the request? [ANSWER REQUIRED]
- Response timeframe: [ANSWER REQUIRED]
- Refund destination/method: [ANSWER REQUIRED]
- Expected processing timeframe: [ANSWER REQUIRED]
- Treatment of original and return shipping costs: [ANSWER REQUIRED]

Do not state `no refunds`, impose an absolute short notification deadline for
faulty products, or otherwise restrict non-excludable consumer rights.

## Part 17 — Availability, Changes, and Discontinuation

### 17.1 Website availability

May the operator temporarily suspend the site for maintenance, security,
provider failure, legal compliance, or events beyond reasonable control?

**Answer:** [ANSWER REQUIRED]

What service availability, support response, backup, or continuity promises
are actually made, if any?

**Answer:** [ANSWER REQUIRED OR NONE]

### 17.2 Content and product changes

What may change before purchase, and what must remain as represented at the
time of purchase? Address manuscript previews, article corrections, cover
artwork, product descriptions, prices, release dates, formats, and availability.

**Answer:** [ANSWER REQUIRED]

### 17.3 Ending services

What happens to paid orders, existing download rights, pending support matters,
privacy records, and legal obligations if a product or the website is
discontinued?

**Answer:** [ANSWER REQUIRED]

## Part 18 — Disclaimers and Liability

These clauses are legally sensitive. Supply only positions reviewed for the
business and applicable consumer law. Do not ask ChatGPT to invent aggressive
template language.

### 18.1 Non-excludable rights

What mandatory wording or limitation formula has Australian counsel approved
for preserving non-excludable statutory rights?

**Answer:** [ANSWER REQUIRED OR `NO LAWYER-APPROVED WORDING YET`]

### 18.2 Proposed exclusions

Which categories of loss does the operator propose to exclude or limit, and in
which circumstances? Explain the legitimate reason for each exclusion.

**Answer:** [ANSWER REQUIRED OR NONE]

### 18.3 Proposed liability cap

Is a monetary or transaction-based liability cap proposed? State the cap,
exceptions, affected users, and legal-review status.

**Answer:** [ANSWER REQUIRED OR NONE]

### 18.4 Liability that will not be excluded

List exceptions such as fraud, wilful misconduct, death/personal injury where
applicable, breach of confidentiality/privacy, infringement, or liability that
cannot lawfully be excluded.

**Answer:** [ANSWER REQUIRED]

### 18.5 Indemnity

Is any user indemnity genuinely required? If yes, provide the precise,
lawyer-reviewed scope. Do not use an unlimited indemnity copied from a generic
template.

**Answer:** [ANSWER REQUIRED OR NONE]

## Part 19 — Governing Law and Disputes

### 19.1 Governing law

Which country's and state/territory's law governs the website terms?

**Answer:** [ANSWER REQUIRED]

### 19.2 Courts and mandatory local rights

Which courts have jurisdiction, and should the clause expressly preserve any
mandatory consumer rights available in a customer's home jurisdiction?

**Answer:** [ANSWER REQUIRED]

### 19.3 Informal dispute process

- First contact channel: [ANSWER REQUIRED]
- Information a complaint should contain: [ANSWER REQUIRED]
- Acknowledgement timeframe: [ANSWER REQUIRED]
- Target resolution timeframe: [ANSWER REQUIRED]
- Escalation or mediation process: [ANSWER REQUIRED]
- Relevant consumer-affairs or regulator escalation: [ANSWER REQUIRED]

### 19.4 Arbitration or class-action waiver

Is arbitration, a class-action waiver, or another special dispute clause
proposed? If yes, provide the exact lawyer-approved position and the countries
where it applies.

**Answer:** [ANSWER REQUIRED OR NONE]

## Part 20 — Standard Contract Provisions

Provide the intended position for each item. Ask counsel if uncertain.

- Severability if one term is invalid: [ANSWER REQUIRED]
- No waiver through delay or non-enforcement: [ANSWER REQUIRED]
- Assignment by the operator or user: [ANSWER REQUIRED]
- Events beyond reasonable control: [ANSWER REQUIRED]
- Entire-agreement wording for purchases: [ANSWER REQUIRED]
- Relationship between website terms and sale/promotion-specific terms: [ANSWER REQUIRED]
- Which terms survive termination or discontinuation: [ANSWER REQUIRED]
- Controlling language if translations are published: [ANSWER REQUIRED]
- Electronic notices and when they are received: [ANSWER REQUIRED]

## Part 21 — Final Accuracy Check

### 21.1 Operational readiness

For each item, write `LIVE`, `PLANNED`, or `NOT APPLICABLE`, plus any activation
condition:

- Newsletter storage: [ANSWER REQUIRED]
- Marketing email sending: [ANSWER REQUIRED]
- Unsubscribe handling: [ANSWER REQUIRED]
- Contact-form review/responding: [ANSWER REQUIRED]
- Privacy-request handling: [ANSWER REQUIRED]
- Record-retention/deletion process: [ANSWER REQUIRED]
- Direct Stripe checkout: [ANSWER REQUIRED]
- Digital fulfilment: [ANSWER REQUIRED]
- Direct print fulfilment: [ANSWER REQUIRED]
- Retailer links: [ANSWER REQUIRED]
- Refund/support workflow: [ANSWER REQUIRED]
- Data-breach response: [ANSWER REQUIRED]

### 21.2 Known legal advice

List the date, scope, and conclusions of any legal review relevant to these
documents. Do not include privileged advice if it should not be shared with an
external AI service.

**Answer:** [ANSWER REQUIRED OR NONE]

### 21.3 Unresolved decisions

List anything that must be decided before final policies can truthfully be
published.

**Answer:** [ANSWER REQUIRED OR NONE]

### 21.4 Exact wording to preserve

List any company description, consumer notice, copyright notice, licence term,
contact wording, or lawyer-approved clause that ChatGPT must reproduce verbatim.

**Answer:** [ANSWER REQUIRED OR NONE]

## Part 22 — Instructions for ChatGPT

Use the completed questionnaire above as the authoritative factual brief.

Produce the following in this order:

1. A short `Drafting blockers` section. If any answer needed for a truthful,
   internally consistent policy remains blank, unknown, contradictory, or
   marked for legal decision, list it precisely and stop. Do not invent a fact,
   provider, jurisdiction, address, retention period, right, operational
   process, promise, or legal conclusion.
2. If there are no blockers, write a complete replacement Privacy Policy for
   `/privacy/`.
3. Write complete replacement Website Terms for `/terms/`.
4. Add a short `Implementation consistency checks` list identifying any site,
   form, checkout, email, database, or operational change required to make the
   supplied answers true. Do not put this checklist inside either public policy.

### Mandatory drafting rules

- Use Australian English.
- Use the supplied legal entity name, identifiers, contact details, dates,
  jurisdictions, timeframes, product details, and approved wording exactly.
- Write for ordinary readers in clear, direct language while retaining the
  precision required for legal documents.
- Draft two standalone documents. Do not refer readers back to this
  questionnaire.
- Include an effective date and clear contact details in each document.
- Describe current operations as current and planned operations as planned.
  Never present dormant repository capability as a live service.
- Include only clauses relevant to the answered facts. Do not pad the documents
  with generic policy-template language.
- Do not claim legal compliance, certification, security guarantees,
  encryption, data locations, response deadlines, or rights that the answers
  do not establish.
- Preserve Australian Consumer Law and all other rights that cannot lawfully
  be excluded. Do not use blanket `no refunds` wording.
- Do not state that the business can change completed purchase terms
  retrospectively.
- Do not create an unlimited right to cancel paid orders, change products, use
  private user messages, suspend access, exclude liability, or demand an
  indemnity.
- Distinguish the website operator's direct sales from purchases made through
  third-party retailers.
- Explain privacy collection, purposes, storage, disclosure, overseas handling,
  retention, security, access/correction, deletion where offered or required,
  consent withdrawal, complaints, and policy changes using the supplied facts.
- Explain Turnstile, Cloudflare, Stripe, mailing providers, retailers, and other
  third parties accurately without asserting that their policies remove the
  operator's own legal responsibilities.
- If multiple jurisdictions apply, preserve mandatory local rights and avoid
  pretending that a governing-law clause removes them.
- Do not include statements such as `this is not legal advice` inside the public
  documents unless the completed answers specifically require that wording.
- Do not include drafting notes, square-bracket placeholders, alternatives, or
  commentary inside either final document.

### Required output format

Return each public document as clean Markdown suitable for conversion into the
existing Astro pages:

```text
# Privacy Policy

Effective: [completed date]

[complete policy]

# Website Terms

Effective: [completed date]

[complete terms]
```

Use one H1 per document, descriptive H2 headings, short paragraphs, and lists
where they improve readability. Do not output Astro frontmatter, components,
HTML, CSS, or code. The implementing developer will convert the approved copy
to the existing Astro page structure.

## Reference Links for the Drafter and Reviewer

These sources help identify drafting issues but do not replace tailored legal
advice:

- OAIC, APP 1 and privacy-policy contents:
  <https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-1-app-1-open-and-transparent-management-of-personal-information>
- OAIC, small-business Privacy Act coverage:
  <https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/organisations/small-business>
- OAIC, APP 11 security and destruction/de-identification:
  <https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-11-app-11-security-of-personal-information>
- ACMA, consent, sender identification, and unsubscribe requirements:
  <https://www.acma.gov.au/avoid-sending-spam>
- ACCC, contracts and non-excludable consumer rights:
  <https://www.accc.gov.au/consumers/buying-products-and-services/contracts>
- ACCC, online purchasing:
  <https://www.accc.gov.au/consumers/buying-products-and-services/buying-online>
- ACCC, misleading refund and return terms:
  <https://www.accc.gov.au/media-release/accc-sweep-uncovers-concerning-online-shopping-return-policies-and-terms-and-conditions>
