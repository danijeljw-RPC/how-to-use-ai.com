# Website launch campaign

Purpose: implement section 4 of the supplied 8 October launch plan before promotion. The user authorised implementation, commit, merge to main and publication. Initial worktree and main checkout are clean at d6968b1; origin/main matches.

Files: Footer.astro, NewsletterForm.astro, BaseLayout.astro, index.astro, books/ai-for-normal-people.astro, preview.astro, purchase.astro, changelog.md, and this plan.

Dependencies: existing site, newsletter storage, Turnstile and ungated preview. No new ADR or OI dependencies.

Risks: offer must clearly apply to the direct digital edition; existing release commerce and email operations remain separate from this section 4 copy change. Avoid implying Kindle or print discounts.

Acceptance: date visible in all requested sections; exact offer heading and button; clear consent; working campaign links; no preview gate; existing tests, Astro check and build pass; main merged and pushed; production deployment and live page verification.

Proposed commit: publishing: prepare website for book launch campaign.
