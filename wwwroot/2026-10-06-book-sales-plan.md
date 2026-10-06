# Book 1 retailer links and direct-sales plan

Date: 6 October 2026 (Australia/Adelaide)

## Scope and implementation

Work stays inside `wwwroot`. The user authorised autonomous implementation of Amazon links and planning for Stripe sales; Google and Apple destinations are pending. The starting working tree was clean. The latest commit concerned manuscript layout and the writing guide; those files are outside this task.

Implement all 13 supplied Amazon Kindle pre-order destinations as public content independent of the direct-commerce gate. Make purchase options discoverable from the homepage, book page and navigation. Keep pending retailer links absent until a valid HTTPS destination is supplied. Do not invent release dates or prices. Describe Amazon as Kindle Edition; a Kindle purchase is distinct from a downloadable EPUB bought here.

Expected files: retailer content data, purchase page, header, homepage and book page, retailer configuration and its tests, local configuration example, README, this plan and the questions handoff. No manuscript, publishing ADR or OI dependency is needed for these links; the handoff records decisions still needed for direct sales.

Risks: Amazon cannot be independently verified through the automated browser; legacy ebook/print checkout must not be misrepresented as four-format fulfilment. Keep `COMMERCE_ENABLED=false`; do not create live Stripe products or deploy during this change.

Acceptance: all supplied regions appear with exact ASIN B0HLYQSMQT; retailer links work while commerce is disabled; Google/Apple links accept only HTTPS; tests, Astro checks and build pass; remaining decisions are in Markdown. Proposed commit: `publishing: add Kindle pre-order links and direct-sales plan`.

## Verification result

67 tests passed, including locally rendered purchase/home/book routes. The purchase route renders 13 distinct Amazon URLs and no direct-checkout form while commerce is disabled. Optional Google/Apple HTTPS configuration is tested. Astro check: 0 errors, warnings or hints; production build completed without warnings. The test runtime reported a pre-existing occupied inspector port and automatically used another port; this did not affect tests. Amazon listing content was not independently verified and the site was not deployed.
