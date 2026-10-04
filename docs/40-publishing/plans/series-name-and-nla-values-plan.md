# Series Name and NLA Values Plan

## Purpose

Apply the author's 2026-10-04 answers to publishing OI-0004:

- The series name is exactly **How-To-Use-AI.com**, everywhere.
- The estimated retail price for the NLA form is AUD 19.99.
- Creator life dates: 1982–.
- Publisher category: already decided in ADR-03-0006 (Company/organisation).

The author explicitly told Claude to proceed without further review.

## Files Expected to Change

- Every active file that spelled the series as "How To Use AI.com", "How-to-use-ai.com" or "HOW TO USE AI.COM": `CLAUDE.md`, docs (memory, series structure, plans, ADRs, OIs, research package headers, design options), `publishing/` (books.json bio, LaTeX, Lua and EPUB headers), `scripts/cover_generator.py` (front-cover wordmark), `tests/` fixtures, `wwwroot/` (site name, header wordmark, footer, page descriptions, tests, README, questionnaire), and `repasscloud-legal-pack-2026-09-24/`.
- `docs/40-publishing/decisions/ADR-03-0006-publisher-imprint-and-catalogue-metadata.md` (values plus 2026-10-04 amendment).
- `docs/40-publishing/open-issues/OI-0004.md` (resolved).
- `docs/40-publishing/books-json-reference.md` (imprint row matches the 2026-10-02 decision).
- `changelog.md`.

## Deliberately Unchanged

- `legacy-data/`: archived chat exports.
- Earlier `changelog.md` entries: historical record.
- `How To Use AI PROD`: the name of the live Cloudflare Turnstile widget. The docs must match the real resource.
- The quoted commit message in `docs/00-project/plans/how-to-use-ai-legal-pages-plan.md`.
- The pasted third-party AI-chat text in `docs/80-research/chapter-11-research-package/source-material/chapter-11-ai-hype-vs-reality.md`.
- Lowercase `how-to-use-ai.com` wherever it is the web address or domain.
- The working-title option "How to Use AI" in Book 1 OI-0002 and the legacy file title in the Johnny research note. Both are book or file titles, not the series name.

## Dependencies on ADRs

- ADR-03-0006 (publisher, imprint, catalogue metadata)
- ADR-03-0002 (data-driven covers)

## Dependencies on OIs

- Publishing OI-0004 (closed by this work)
- Publishing OI-0007 (no printed price)

## Risks

- The front-cover wordmark now breaks as "How-To-Use-" / "AI.com". It was rendered and checked: it fits within the margins.
- The live legal privacy policy (`repasscloud-legal-pack-2026-09-24/how-to-use-ai.com/privacy-policy.md`) still describes the brand as "a publishing imprint, book-series name and website". Only the spelling was changed. The imprint wording is legal copy and was not rewritten.
- Changes to the website name and wordmark go live on the next site deploy.

## Acceptance Criteria

- No active file uses "How To Use AI.com", "How-to-use-ai.com" or "Book Series" as the series name.
- Python tests (unittest) and website tests (vitest) pass.
- OI-0004 is closed, and ADR-03-0006 carries the final NLA values.

## Proposed Commit Message

`publishing: standardise series name as How-To-Use-AI.com and close NLA OI-0004`
