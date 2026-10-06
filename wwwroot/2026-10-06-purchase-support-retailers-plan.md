# Purchase support and regional retailer presentation

The author prefers the existing contact form for purchase support and asked about Amazon branding and country flags. Route storefront/library/cancel/order-email support links to `/contact/?subject=purchase-support`; preserve hello@repasscloud.com as the email reply-to and fallback operational contact. Prefill the contact subject from only that explicit query value, with guidance to include purchase email and order reference. The form still stores messages in D1 for manual review; it does not send an operator alert.

Use KDP's unaltered official Available at Amazon badge once, with spacing and no implied endorsement. Regional buttons keep full country names and decorative flags (`aria-hidden`) so they remain understandable without flags or emoji rendering. Preserve all supplied destinations and existing safe external-link attributes.

Expected changes: retailer content, purchase page, support links in store offers/library/cancel/errors/downloads/email, contact page, local official badge asset, rendered-page tests, guide and website changelog. Work stays in `wwwroot`. No API/database/schema or merchant changes. Validate website tests/check/build, then deploy and verify the visible pages. Proposed commit: `publishing: use contact form for purchase support and clarify Amazon regions`.

Source checked: https://kdp.amazon.com/en_US/help/topic/G9WES4WJAC3GUVSV (6 October 2026). KDP permits its supplied badge under its guidelines, forbids altering it and requires written permission for other Amazon logos in publisher marketing. The badge and flags remain separate elements.

Verification: 94 tests passed; Astro check reported zero diagnostics; production build succeeded. Live browser verified the badge and flag layout, then followed Purchase support to the contact form with the correct subject and order-reference guidance. Published version: `51207c69-4ba6-42a0-85e6-14c69e5fd1ca`.
