# Implementation Consistency Checks

These are operational checks, not public policy copy.

## RePass Cloud parent website

- Replace the current parent Privacy Policy, Terms of Service and Refund Policy with the master versions in this package.
- Update the public legal address to `3 Pioneer Street, Findon SA 5023` wherever the parent legal pages still show older address details.
- Use South Australia as the governing law in the new master Terms.
- Do not carry forward a general 12-month-fees liability cap into the master public Terms unless a separately reviewed product or enterprise agreement legitimately contains one.
- Do not carry forward a general user indemnity into the master public Terms.
- Do not use a universal statement that every log is retained for 90–100 days; product/site-specific logging differs.
- Keep the parent Privacy Policy technology-neutral enough to accommodate different analytics stacks across products.
- Ensure footer links on every RePass Cloud-operated public website point to the correct master legal URLs.

## How To Use AI.com

### Current site

- Publish the supplied site Privacy Policy at `/privacy/`.
- Publish the supplied Website Terms at `/terms/`.
- Link the RePass Cloud master Refund Policy from the footer and checkout.
- Keep the local refund supplement if a local refund page is desired.
- Retain Cloudflare Turnstile disclosures.
- Ensure application logs continue not to include contact/newsletter form contents.
- Keep D1 newsletter consent wording/version and source/timestamp records.
- Implement quarterly retention review/deletion before representing that operation as active.
- Complete the written incident-response checklist.

### Before marketing email

- Select the mailing provider.
- Record its legal entity, privacy URL, subprocessors, processing countries, DPA and deletion/suppression controls.
- Configure double opt-in.
- Configure an unsubscribe mechanism that works without login or extra personal information.
- Ensure automated unsubscribe takes effect promptly.
- Ensure manual unsubscribe is actioned within 5 business days.
- Ensure the unsubscribe mechanism remains functional for at least 30 days after a message.
- Ensure D1 suppression/consent history prevents withdrawn addresses being imported.
- Finalise the sender address at the `how-to-use-ai.com` domain.
- Update the Privacy Policy with provider-specific information if material.

### Before Google analytics or tracking

- Identify the exact Google product or products: Analytics, Ads, Tag Manager or another service.
- Determine which cookies, storage and network identifiers are used.
- Implement consent or opt-out controls required by the jurisdictions actually targeted.
- Prevent non-essential tags firing before consent where prior consent is required.
- Update the How To Use AI.com Privacy Policy before or when the feature is enabled.
- Test withdrawal/opt-out behaviour.

### Before direct Stripe checkout

- Confirm current GST registration status.
- Configure correct Australian price display and tax, receipt and invoice treatment.
- Use an unchecked Terms acceptance control.
- Link Privacy, Terms and Refund Policy from checkout.
- Do not make marketing consent a condition of purchase.
- Configure the final order-confirmation sender.
- Test order confirmation, fraud handling, cancellation and refund processing.
- Test License Server/API polling and state updates.
- Confirm full card data is never written to RePass systems or logs.
- Ensure the Terms version accepted at checkout can be identified later.

### Before digital sales

- Implement and test secure PDF delivery.
- Keep download availability for at least the intended 30-day baseline.
- Implement a support-driven link reissue process.
- Decide whether purchaser watermarking is used and disclose it if introduced.
- Confirm product pages state the file format and any unusual requirement.
- Do not advertise EPUB until it is actually supplied.

### Before direct print sales

- Select the print-on-demand, printer or fulfilment provider.
- Record its legal entity, privacy policy, processing countries and subprocessors.
- Configure shipping destinations.
- Configure realistic production, dispatch and delivery estimates.
- Configure tracking information where available.
- Configure return, damage and lost-delivery escalation.
- Confirm customer delivery data is sent only after the necessary provider/privacy review.

### Affiliate or referral program

Before enabling RePass Cloud's own referral tracking:

- document identifier, cookie or storage behaviour;
- publish disclosure wording;
- update privacy/cookie controls where required;
- implement commission reconciliation; and
- implement abuse controls.

## Aethon Jobs

- Keep the application-specific privacy notice and platform terms.
- Confirm the actual legal status of "Aethon Software" and use the contracting/controller entity consistently.
- Verify public claims that there are no analytics/tracking cookies and no data brokerage against the deployed application and marketing site.
- Verify any public claims about Australian data storage against the current architecture.
- Keep candidate, resume, application, employer, recruiter and verification handling in the detailed product notice rather than only the generic marketing notice.
- Ensure AI-assisted matching or ranking disclosures match actual application behaviour and any human review.
- Check under-18 handling against the application's actual account rules and retention processes.
- Ensure payment, credits and verification refund terms are accessible before purchase.

## Cinturon360

- Keep the product's existing detailed privacy, terms, DPA, refund/cancellation and enterprise documents.
- Use the new parent master policies for the public marketing website baseline.
- Ensure contact and waitlist forms link the parent Privacy Policy.
- Verify marketing-site analytics and tracking against the master policy.
- Do not let the short marketing terms override signed enterprise/customer agreements.

## Small tools

For every tool that links only to the master policies, confirm that it does not materially introduce:

- payment handling;
- user accounts;
- non-essential analytics or advertising;
- user-generated content;
- profiling or automated significant decisions;
- sensitive personal information;
- location tracking;
- health, financial or other regulated data; or
- a materially different retention model.

If it does, create a specific supplement.

## Record keeping

Keep an internal register containing:

- service/product;
- legal documents and version dates;
- providers;
- data categories;
- data locations;
- subprocessors where material;
- retention periods;
- analytics/cookies;
- payment model;
- customer types;
- targeted jurisdictions; and
- owner/review date.

Review the register whenever a material provider, feature or jurisdiction changes.
