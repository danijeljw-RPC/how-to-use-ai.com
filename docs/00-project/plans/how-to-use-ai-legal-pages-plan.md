# How To Use AI.com Legal Pages Plan

## Purpose

Publish the How To Use AI.com privacy, website terms, and refund documents supplied in `repasscloud-legal-pack-2026-09-24`, and expose the related site-specific and RePass Cloud master-policy links in the site footer.

## Files expected to change

- `wwwroot/src/layouts/LegalLayout.astro`
- `wwwroot/src/pages/privacy.md`
- `wwwroot/src/pages/terms.md`
- `wwwroot/src/pages/refund.md`
- `wwwroot/src/components/Footer.astro`
- `wwwroot/src/styles/global.css`
- `wwwroot/tests/legal-pages.test.ts`
- `wwwroot/README.md`
- `wwwroot/2026-09-24-launch-site-design.md`
- Existing `wwwroot/src/pages/privacy.astro` and `wwwroot/src/pages/terms.astro` will be removed after their replacement routes pass tests.

## Dependencies on ADRs

- `docs/03-publishing/decisions/ADR-03-0006-publisher-imprint-and-catalogue-metadata.md` identifies RePass Cloud Pty Ltd as publisher/operator context.
- The supplied legal pack remains authoritative for public policy wording and links.

## Dependencies on OIs

- None. Future analytics and commerce changes may require later policy revisions, but they do not block publishing the supplied documents.

## Risks

- Route collisions if the old Astro files remain beside replacement Markdown pages.
- Policy drift if wording is paraphrased instead of copied from the supplied pack.
- Long documents becoming difficult to read on narrow screens.
- Ambiguous footer labels between site-specific supplements and RePass Cloud master policies.

## Acceptance criteria

- `/privacy/`, `/terms/`, and `/refund/` return successful HTML responses.
- The three pages contain the supplied effective date, operator details, and policy-specific content.
- Site-specific policies link to the applicable RePass Cloud master policies.
- The footer links to all three local pages, all three RePass Cloud master policies, and RePass Cloud contact.
- Policy pages are readable and responsive within the existing visual system.
- Tests, Astro type checking, production build, and `git diff --check` complete without errors or warnings.

## Proposed commit message

`feat: publish How To Use AI legal policies`
