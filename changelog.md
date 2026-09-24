# Changelog

All meaningful project changes should be recorded here.

## 2026-09-24 (39)

### Changed

- Added a `--webpub` (or `-webpub`) flag to `publish-draft-books.sh`. With a preview build (`book 1 chap 01-03 --webpub`), it also copies the preview to `wwwroot/public/downloads/ai-for-normal-people-preview.pdf`, the file behind the site's `PREVIEW_DOWNLOAD_URL`. The flag is refused for full internal-review builds.
- Verification: the full build with `--webpub` is rejected; the preview build copies a file identical to `dist/02-book-01-preview.pdf`.

### Files changed

- `publish-draft-books.sh`
- `docs/03-publishing/decisions/ADR-03-0005-chapter-preview-edition.md`
- `changelog.md`

### Decisions added or changed

- Updated `ADR-03-0005` with the `--webpub` site-publishing step.

### Open issues added or closed

- None. Publishing `OI-0001` stays open until the preview PDF is deployed to the live site.

### Commit

- pending commit

## 2026-09-24 (38)

### Changed

- `publish-draft-books.sh book 1 chap 01,02,03` (ranges such as `01-03` also work) now builds a preview edition at `dist/02-book-01-preview.pdf`. It contains the front cover, a "Preview edition" notice, the selected chapters plus any front matter sorted before them, an "End of preview" page, and the back cover. The full `book 1` build is unchanged.
- Added `series.website` to `publishing/books.json` for the end-of-preview page.
- Fixed an order-dependent integration-test assertion that picked an arbitrary diagram PDF. It now targets the Chapter 1 recommendation diagram by name. The test also builds and checks the preview edition.
- Verification: 13/13 unit tests pass, and `tests/test_publish_draft_books.sh` passes for both the full and the preview builds.

### Files changed

- `publish-draft-books.sh`
- `scripts/assemble_draft_book.py`
- `publishing/books.json`
- `tests/test_assemble_draft_book.py`
- `tests/test_publish_draft_books.sh`
- `docs/03-publishing/decisions/ADR-03-0005-chapter-preview-edition.md` (new)
- `docs/03-publishing/open-issues/OI-0002.md` (new)
- `changelog.md`

### Decisions added or changed

- Added `ADR-03-0005`: chapter preview edition built by the draft publisher.

### Open issues added or closed

- Opened publishing `OI-0002`: approve the preview edition wording. Publishing `OI-0001` (public preview file) stays open: the excerpt build now exists, but the file still has to be hosted at `PREVIEW_DOWNLOAD_URL`.

### Commit

- pending commit

## 2026-09-24 (37)

### Changed

- Deployed the launch site to production as the Cloudflare Worker `how-to-use-ai` on `how-to-use-ai.com` and `www.how-to-use-ai.com`. `www` permanently redirects to the apex host, and `workers.dev` and preview URLs are disabled.
- Created the single production D1 database `how-to-use-ai-site` (Oceania) and applied migration `0001`. There is no remote development database; local testing uses Wrangler's local D1.
- Created the managed Turnstile widget `How To Use AI PROD` and stored its secret as a Worker secret.
- Set up Stripe test mode in the Peach Freestyle account: Product `prod_VJjxyKYLjkU457` with placeholder Price `price_1UJ6TX4BF2uOrrJb7uyZM1iR` (AUD 19.99). Commerce remains off in production, and no production webhook endpoint is registered.
- Verified the Stripe flow locally in the Workers runtime:
  - a real test Checkout session was created;
  - a signed paid event recorded one order;
  - a resent event was acknowledged as a duplicate, with no second order;
  - a forged signature was rejected.
- Added the `www`-to-apex middleware (with tests) and structured logging for failed Checkout creation.
- Live checks passed:
  - all 13 pages returned 200 and unknown paths 404;
  - `www` redirected to the apex host;
  - checkout was refused with 503, and cross-origin posts with 403.
- The preview link is unavailable until a preview file URL is set (see OI below).
- Not yet verified: a real-browser Turnstile solve and a live form submission.

### Files changed

- `wwwroot/wrangler.jsonc`, `wwwroot/src/cloudflare-env.d.ts`, `wwwroot/src/middleware.ts` (new), `wwwroot/src/lib/canonical-host.ts` (new), `wwwroot/tests/canonical-host.test.ts` (new), `wwwroot/src/pages/api/checkout.ts`, `wwwroot/.dev.vars.example`, `wwwroot/README.md`, `wwwroot/IMPLEMENTATION_LEDGER.md`
- `docs/03-publishing/decisions/ADR-03-0003-launch-site-cloudflare-workers.md`
- `docs/03-publishing/decisions/ADR-03-0004-production-site-and-stripe-test-mode.md` (new)
- `docs/03-publishing/open-issues/OI-0002.md` (new)
- `changelog.md`

### Decisions added or changed

- Added `ADR-03-0004`: single production database, production resource layout, Stripe test mode in Peach Freestyle, commerce off in production, and no production webhook until activation.
- Updated `ADR-03-0003` status to deployed.

### Open issues added or closed

- Opened `docs/03-publishing/open-issues/OI-0001.md`: public preview file for the launch site.

### Commit

- pending commit

## 2026-09-24 (36)

### Changed

- Added the companion-website launch site as a standalone Astro SSR application in `wwwroot/`, built from the approved design `wwwroot/2026-09-24-launch-site-design.md`. It includes home, book/series, preview, purchase, blog (two articles), contact, privacy, terms, checkout success/cancel, and 404 pages, and uses the Book 1 cover and its palette.
- Server endpoints cover newsletter capture (append-only D1 rows; duplicate emails are kept on purpose), contact messages, the preview redirect configured through `PREVIEW_DOWNLOAD_URL`, dormant Stripe Checkout, and a signature-verified, idempotent Stripe webhook. Forms require a same-origin request and an action-specific Turnstile check. Commerce stays off unless `COMMERCE_ENABLED` is exactly `true`.
- Codex did the initial implementation on Astro 5 / Cloudflare Pages. That pin failed `npm audit` (1 critical, 6 high, 1 low), so the site was migrated to Astro 7.3.4 and `@astrojs/cloudflare` 14.3.3 on Cloudflare Workers. `npm audit` is now clean.
- Fixed forms and preview links that targeted `/api/*` without a trailing slash, which caused an extra redirect on every submission.
- Verification: 52/52 tests pass; `astro check` reports 0 errors, warnings, and hints; the build is clean; `wrangler deploy --dry-run` shows only the `SITE_DB`, `ASSETS`, `SITE_URL`, and `COMMERCE_ENABLED` bindings; a local Workers-runtime smoke test returned the expected status for every route.
- No Cloudflare or Stripe resources were created. The D1 database ID in `wwwroot/wrangler.jsonc` is a placeholder.

### Files changed

- `wwwroot/` (new: application source, tests, D1 migration, configuration, `README.md`, implementation plan and ledger, approved design specification)
- `docs/03-publishing/decisions/ADR-03-0003-launch-site-cloudflare-workers.md` (new)
- `changelog.md`

### Decisions added or changed

- Added `ADR-03-0003`: deploy the launch site as a Cloudflare Worker, not Pages, on patched Astro and adapter releases, with pages kept server-rendered to preserve the runtime commerce gate.

### Open issues added or closed

- None.

### Commit

- pending commit

## 2026-09-24 (35)

### Changed

- Rewrote and expanded Chapter 5, “Talking to AI Properly,” from approximately 1,580 words into a complete research-backed manuscript built around context, specificity, examples, and iteration. The chapter now explains why these habits change the range of plausible output, demonstrates source-grounded requests and output shapes, shows how to ask clarifying questions and split complex work into stages, and treats inspection and verification as part of the conversation.
- Preserved the approved beginner-facing, anti-guru framing while adding evidence-based nuance: short prompts can be clear, long prompts can contain distracting material, examples are useful rather than mandatory, models and tasks respond differently to exact wording, and better prompts improve relevance rather than guaranteeing truth.
- Added four distinct before-and-after examples, a focused reader exercise, the required author-reflection placeholder, 11 unobtrusive chapter endnotes, and a dedicated Chapter 5 bibliography with source types, claim mapping, and cautions.
- Replaced the vague-versus-contextual diagram placeholder with a portrait-friendly Mermaid diagram and added a second focused diagram for the request-inspect-refine loop. Both diagrams are inserted with explanatory alt text and use raw Mermaid source.
- Updated the Chapter 5 plan and Book 1 drafting status to record the research-backed manuscript pass.

### Files changed

- `docs/02-book-01/chapters/chapter-05-talking-to-ai-properly.md`
- `docs/02-book-01/diagrams/vague-versus-clear-request.mmd` (new)
- `docs/02-book-01/diagrams/request-inspect-refine-loop.mmd` (new)
- `docs/02-book-01/research/chapter-05-bibliography.md` (new)
- `docs/02-book-01/plans/chapter-05-plan.md`
- `docs/02-book-01/book-01-structure.md`
- `changelog.md`

### Decisions added or changed

- None. This pass applies accepted `ADR-04-0002` and `ADR-04-0003` and follows the approved Chapter 5 plan.

### Open issues added or closed

- None.

### Commit

- pending commit

## 2026-09-24 (34)

### Changed

- Replaced Chapter 4's confidence-versus-correctness diagram placeholder with a Mermaid quadrant chart. The chart makes the intended point explicit: apparent confidence and factual correctness are independent, so an incorrect answer can still sound confident.

### Files changed

- `docs/02-book-01/chapters/chapter-04-what-ai-cannot-do.md`
- `docs/02-book-01/diagrams/confidence-versus-correctness.mmd` (new)
- `changelog.md`

### Decisions added or changed

- None. The diagram implements the existing Chapter 4 plan.

### Open issues added or closed

- None.

### Commit

- pending commit

## 2026-09-24 (33)

### Changed

- Replaced the review-only draft export with a publication-structured 7 by 10 inch PDF pipeline. Draft books now include a generated front cover, an inside-cover internal-review notice, a title page, contents, the manuscript, and a matching back cover.
- Added one data-driven cover system for the five-book `How To Use AI.com` series. Shared branding, typography, composition, spacing, badge treatment, illustration region, and author footer live in one renderer; volume content and accent colours live in JSON.
- Added all five volume metadata records and illustration paths. Book 1 uses the accepted title `AI for Normal People: Understanding Artificial Intelligence Without the Hype`, and all volumes use the author name `Danijel-James Wynyard-McClay`.
- Added a deterministic 1800 by 2700 pixel `Preview Publication Only` placeholder. Missing configured artwork now falls back to that image without blocking an internal review build.
- Added standalone 2100 by 3000 pixel front/back cover artwork, 7 by 10 inch cover PDFs, development previews, precise missing-book errors, chapter-scoped footnote identifiers, and warning-free PDF assembly that preserves the manuscript document tree.
- Added automated coverage for metadata selection, fallback artwork, output dimensions, PDF size and order, optional copy, footnote namespacing, and the real `book 1` publishing command.

### Files changed

- `publish-books.sh` renamed to `publish-draft-books.sh` and expanded
- `publishing/books.json` (new)
- `scripts/cover_generator.py` (new)
- `scripts/assemble_draft_book.py` (new)
- `scripts/namespace_markdown_footnotes.py` (new)
- `assets/covers/preview-placeholder.png` (new generated fallback asset)
- `tests/` (new publishing regression coverage)
- `docs/03-publishing/decisions/ADR-03-0002-data-driven-series-covers.md` (new)
- `docs/03-publishing/plans/book-cover-and-draft-publication-plan.md` (new)
- `.gitignore`
- `changelog.md`

### Decisions added or changed

- Accepted `ADR-03-0002`: series covers are generated from one shared layout and JSON metadata; missing illustrations use the internal-review placeholder.

### Open issues added or closed

- None.

### Commit

- pending commit

## 2026-09-24 (32)

### Changed

- Rewrote and expanded Chapter 4, “What AI Cannot Do,” from approximately 1,960 to approximately 4,800 words using the supplied research package. The manuscript now explains hallucination, human-like understanding, consciousness, emotion, intent, morality, common sense, knowledge cutoffs, training-data dependency, confidence, and sycophancy through connected beginner-friendly examples rather than a list of warnings.
- Preserved the plan's practical, non-hype and non-doomist purpose while correcting claims the research identified as too absolute or outdated. The chapter now distinguishes base models, search/retrieval-enabled products, and tool-using agents; observable behaviour and subjective inner state; operational goal pursuit and human-like intent; ethical output and moral responsibility; apparent confidence, measured uncertainty, and correctness.
- Added unobtrusive chapter endnotes and a dedicated Chapter 4 bibliography mapping each retained research-dependent claim to primary, peer-reviewed, standards, court, authoritative philosophical, or clearly labelled first-party sources and cautions.
- Updated the Chapter 4 plan and Book 1 drafting status to record the completed research-backed manuscript pass. The unapproved Johnny scenario was not used.

### Files changed

- `docs/02-book-01/chapters/chapter-04-what-ai-cannot-do.md`
- `docs/02-book-01/plans/chapter-04-plan.md`
- `docs/02-book-01/research/chapter-04-bibliography.md` (new)
- `docs/02-book-01/book-01-structure.md`
- `changelog.md`

### Decisions added or changed

- None. This pass applies accepted `ADR-04-0002` and `ADR-04-0003` and follows the approved Chapter 4 plan.

### Open issues added or closed

- None.

### Commit

- pending commit

## 2026-09-23 (31)

### Changed

- Re-audited Chapter 2 against the evidence-and-citation standard established for Chapter 3. Corrected its over-simple interface-only explanation, predictive-versus-generative binary, chatbot authority example, language-model anthropomorphism, AI-winter framing, investment categories, strategic-partnership claims, adoption claims, and productivity generalisations.
- Added a six-question reader framework for separating demonstrated AI capability from adoption, financial, marketing, and forecasting claims, plus a direct statement of the series' position: use and scrutinise AI without surrendering judgement to either hype or reflexive dismissal.
- Added 12 chapter notes and a dedicated Chapter 2 bibliography mapping retained claims to primary, peer-reviewed, government, university, intergovernmental, or clearly labelled first-party evidence, with source-specific cautions.
- Removed weakly supported claims about 100 million users, a 3-per-cent paid-user share, sector revenue versus investment, a “house of cards,” and late-2025 circular-deal totals. Marked the initial Chapter 2 research note as superseded while preserving it as an audit trail.
- Updated the Chapter 2 plan with the approved evidence-audit scope, editorial corrections, source hierarchy, reader-facing position, and acceptance criteria.

### Files changed

- `docs/02-book-01/chapters/chapter-02-why-everyone-suddenly-talks-about-ai.md`
- `docs/02-book-01/plans/chapter-02-plan.md`
- `docs/02-book-01/research/chapter-02-bibliography.md` (new)
- `docs/02-book-01/research/research-note-chapter-02-history-vc-mainstream-facts.md`
- `changelog.md`

### Decisions added or changed

- None. This pass applies accepted `ADR-04-0003` to Chapter 2.

### Open issues added or closed

- None.

### Commit

- pending commit

## 2026-09-23 (30)

### Changed

- Rewrote and expanded Chapter 3, “What AI Can Actually Do,” from approximately 1,801 to approximately 4,700 words using the supplied research pack and checked source material. The chapter now organises capability around four verbs—generate, transform, interpret, and act—develops every planned capability with beginner-friendly examples, explains the jagged technological frontier, corrects the earlier “most likely complete answer” simplification, and presents human direction and verification as part of a useful AI workflow.
- Added unobtrusive Markdown endnotes for research-dependent claims and a dedicated Chapter 3 bibliography that records the sources actually used, their claim mapping, source type, and cautions.
- Accepted ADR-04-0003, establishing the book's evidence-citation and AI-assisted drafting acknowledgement style. The chapter records that it was developed from the author's viewpoint with research and drafting assistance from ChatGPT and Codex; no personal experience was invented.
- Updated the Chapter 3 plan to reflect the full research-backed draft.

### Files changed

- `docs/02-book-01/chapters/chapter-03-what-ai-can-actually-do.md`
- `docs/02-book-01/plans/chapter-03-plan.md`
- `docs/02-book-01/research/chapter-03-bibliography.md` (new)
- `docs/04-style/style-guide.md`
- `docs/04-style/decisions/ADR-04-0003-evidence-citation-and-ai-assistance.md` (new)
- `changelog.md`

### Decisions added or changed

- `ADR-04-0003` — accepted unobtrusive Markdown endnotes for research-dependent claims, dedicated research records for evidence-heavy chapters, and brief acknowledgement when ChatGPT or Codex materially assists research and drafting.

### Open issues added or closed

- None.

### Commit

- pending commit

## 2026-09-23 (29)

### Changed

- Updated `ADR-02-0001`'s Chapter 2 topic list to formally include the four topics added in the prior expansion pass: a short history of prior AI hype/bust cycles, venture capital funding and circular financing deals, mainstream cultural adoption, and facts vs reality. Per direct author instruction to bring the ADR in line with the chapter as drafted. Closed the corresponding "topic drift" risk note in `chapter-02-plan.md` as resolved.

### Files changed

- `docs/02-book-01/decisions/ADR-02-0001-book-01-structure.md`
- `docs/02-book-01/plans/chapter-02-plan.md`
- `changelog.md`

### Decisions added or changed

- `ADR-02-0001` — Chapter 2 topic list expanded to match the drafted chapter (see above).

### Open issues added or closed

- None.

### Commit

- pending commit

## 2026-09-23 (28)

### Changed

- Substantially expanded Chapter 2 on branch `book01/chap02`, per direct author instruction to cover a history of AI hype/bust cycles, venture capital funding, how AI bled into mainstream culture, and a fuller facts-vs-reality treatment. Added four new H2 sections: "AI Has Been Loud Before" (the two prior AI winters and deep learning's 2012–2017 recovery, with H3s per era), "The Money Behind the Moment" (VC funding-surge figures and circular financing deals explained in plain English, with H3s), "How It Bled Into Everyday Life" (Collins Dictionary word-of-the-year, pop-culture moments), and an expanded "Facts vs Reality: Sorting the Signal From the Noise" (adoption vs. paying-user gap, revenue-vs-investment gap and economist skepticism, and tying the bubble question back to the history section). Word count grew from ~2,399 to ~4,282, landing within `ADR-02-0001`'s 4,000–5,000-word chapter target. Callout count held at 4 (no new callouts added — new depth lives in prose per `ADR-04-0002`). No existing content, placeholder, or takeaway removed.
- Added `docs/02-book-01/research/research-note-chapter-02-history-vc-mainstream-facts.md`, sourcing and citing every historical date, funding figure, and bubble-skepticism claim used in the expansion, with explicit dating/reliability caveats per `CLAUDE.md`'s Research Handling rules.

### Files changed

- `docs/02-book-01/chapters/chapter-02-why-everyone-suddenly-talks-about-ai.md`
- `docs/02-book-01/plans/chapter-02-plan.md`
- `docs/02-book-01/research/research-note-chapter-02-history-vc-mainstream-facts.md` (new)
- `changelog.md`

### Decisions added or changed

- None. Note recorded in the chapter-02 plan: this pass extends beyond `ADR-02-0001`'s explicit Chapter 2 topic list (VC funding and bubble skepticism aren't separately named there) under direct author instruction; formalizing that in the ADR itself is left to the author.

### Open issues added or closed

- None.

### Commit

- pending commit

## 2026-09-23 (27)

### Changed

- Performed an editorial expansion pass on Chapter 2 on branch `book01/chap02`, per direct author instruction. Removed the chapter's standalone "Myth vs Reality" table (folded its strongest pair into the existing `Watch Out` callout as prose; the remaining pairs were already covered elsewhere in the chapter's prose) — the same style-guide violation OI-0003 flagged for Chapter 1, which OI-0003's own chapter 2–9 survey had missed. Added a new H3 subsection, "Why This Wave Feels Different From Earlier Tech Shifts," closing an ADR-02-0001 topic gap ("why this feels different from previous technology waves") that the existing draft never addressed. Added a `Try This` callout (previously absent from this chapter). Word count grew from ~2,121 to ~2,399. No existing content, placeholder, or takeaway removed.
- Corrected OI-0003's inaccurate "chapters 2–9 checked, none affected" note now that Chapter 2's instance has been found and fixed; OI-0003's scope remains Chapter 1-specific.

### Files changed

- `docs/02-book-01/chapters/chapter-02-why-everyone-suddenly-talks-about-ai.md`
- `docs/02-book-01/plans/chapter-02-plan.md`
- `docs/02-book-01/open-issues/OI-0003.md`
- `changelog.md`

### Decisions added or changed

- None.

### Open issues added or closed

- None opened or closed. `OI-0003` corrected in place (see above); it remains open, scoped to Chapter 1.

### Commit

- pending commit

## 2026-09-23 (26)

### Changed

- Investigated a local llama.cpp session's failed attempt to re-run the Chapter 1 expansion: found the expansion was already complete and accepted (2026-09-21), and the session's only real edit was a broken, duplicated rewrite of "Streaming Recommendations" mixing US and AU spelling and inserting a diagram redundant with the existing placeholder. Reverted the chapter file to the clean, committed baseline (`git checkout`).
- Performed an editorial publication-readiness review of Chapter 1 against the style guide, callout guide, and ADR-02-0001. Findings: word count (~2,238) is well short of the 4,000–5,000 target; the chapter uniquely retains a standalone "Myth vs Reality" table that the current callout guide retired in favour of folding myth/reality content into `Watch Out` callouts (checked chapters 2–9, none carry this pattern); the opening epigraph is styled as a quotation but is unattributed authorial framing. Diagram placeholders, reflection placeholder, examples, heading structure, and callout budget otherwise meet the bar.

### Files changed

- `docs/02-book-01/chapters/chapter-01-youve-already-been-using-ai.md` (reverted to committed baseline, no net change)
- `docs/02-book-01/open-issues/OI-0003.md` (new)
- `changelog.md`

### Decisions added or changed

- None.

### Open issues added or closed

- Opened `OI-0003` — Chapter 1's standalone Myth vs Reality table conflicts with the current callout guide's retirement of that type in favour of `Watch Out`. Related to the still-open `OI-0001`.

### Commit

- pending commit

## 2026-09-21 (25)

### Changed

- Recorded the author's acceptance of Q3: the existing four-part, 14-chapter-plus-epilogue structure and approximately 65% consumer / 35% professional emphasis are the durable Book 1 editorial baseline.
- Marked the Phase 1 author-decision gate complete while preserving Phase 2's ability to recommend evidence-based chapter refinements.

### Files changed

- `docs/00-project/plans/next-editorial-phases.md`
- `changelog.md`

### Decisions added or changed

- Q3 accepted. Phase 3 will propagate the acceptance into ADR-02-0001.

### Open issues added or closed

- No OI file changed in this pass; formal governance reconciliation remains scheduled for Phase 3.

### Commit

- pending commit

## 2026-09-21 (24)

### Changed

- Recorded the author's answers to Q1–Q2, Q4–Q14, and Q16–Q19 in `docs/00-project/plans/next-editorial-phases.md`; Q3 remains the only unresolved Phase 1 decision.
- Confirmed the final Book 1 title, the new 65,000–80,000-word target, qualified beginner-first technical accuracy, selective personal reflections, Mermaid-first diagrams selected by teaching value, unobtrusive source notes, in-book and downloadable companion material, and author-owned placeholder-link domains.
- Authorised use of the Johnny case study with his name and tribunal details, focused on how the author and her husband used AI to solve the problem. Required all relevant forced-AI/Copilot research to be retained, independently verified where factual, explained in plain English, and supported by a glossary or equivalent reader aid where helpful.
- Recorded the Phase 3 governance answers and the exact public series name, **How To Use AI.com Book Series**, while preserving the existing phase order. Later-book scope boundaries are deferred until after Book 2 planning.
- Confirmed that `legacy-data` is already absent and that its useful content had been reconciled before deletion.

### Files changed

- `docs/00-project/plans/next-editorial-phases.md`
- `changelog.md`

### Decisions added or changed

- Decision inputs were recorded in the active phase plan. Phase 3 remains responsible for propagating them into and formally resolving the relevant ADRs, OIs, and authoritative project files.

### Open issues added or closed

- Q3 remains open pending explanation and author confirmation.
- Q15 retains two non-blocking Phase 3 implementation choices: local-only versus CI lint enforcement, and whether to backfill historical changelog hashes.

### Commit

- pending commit

## 2026-09-21 (23)

### Changed

- Expanded `docs/00-project/plans/next-editorial-phases.md` with a consolidated author-decision gate covering every explicit open OI, proposed ADR awaiting ratification, research item awaiting permission, unresolved editorial strategy choice, author-reflection prompt, governance choice, and declared series-level open item found during the full-project review.
- Mapped each question to the phase it affects, recorded recommendations without treating them as decisions, and separated Book 1 blockers from series questions that may be explicitly deferred.
- Recorded already-resolved matters that should not be presented as new decisions: the five-book arc, backward-only cross-referencing, the accepted four-callout standard, and intentional removal of `legacy-data`.

### Files changed

- `docs/00-project/plans/next-editorial-phases.md`
- `changelog.md`

### Decisions added or changed

- None; all newly catalogued questions remain awaiting author answers.

### Open issues added or closed

- None in this pass. Phase 3 will reconcile the individual ADR/OI files against the author's recorded answers.

### Commit

- pending commit

## 2026-09-21 (22)

### Added

- Added `docs/00-project/plans/next-editorial-phases.md` to preserve the author's requested order for the next three work phases across separate context windows: plan the next editorial phase, perform a detailed manuscript critique, then clean up project governance.
- Recorded that Phase 1 is next and that no phase should automatically continue into the following phase without an explicit author request.

### Files changed

- `docs/00-project/plans/next-editorial-phases.md` (new)
- `changelog.md`

### Decisions added or changed

- None.

### Open issues added or closed

- None.

### Commit

- pending commit

## 2026-09-21 (21)

### Changed

- Repository hygiene cleanup: a stray embedded worktree (`.claude/worktrees/composed-tumbling-dongarra`, branch `worktree-composed-tumbling-dongarra`) had been accidentally staged as a nested git repo via `git add .`. Its one unmerged commit (LaTeX word-break hyphenation fix in `publish-books.sh`) was merged into `main`, then the worktree and its now-fully-merged branch were removed, so `main` is the only branch and there are no outstanding worktrees.
- Removed a stray, unrelated `Claude outputs/claude-settings.json` file (a local Claude Code permissions export, not book content) and a leftover vim swap file (`docs/02-book-01/chapters/.chapter-01-youve-already-been-using-ai.md.swp`). Added `*.swp` and `.claude/worktrees/` to `.gitignore` to prevent recurrence.
- Added `.markdownlint.json` (untracked lint config) to version control.
- Removed the `./legacy-data/` archive. All four substantive legacy files were already marked migrated/reviewed into current `docs/` sources per `CLAUDE.md`'s legacy data table, leaving nothing unreconciled to preserve. Documented as `docs/00-project/decisions/ADR-00-0002-remove-legacy-data-archive.md` per the CLAUDE.md rule that structural, hard-to-reverse changes get an ADR.

### Files changed

- `publish-books.sh` (merged from worktree branch)
- `.gitignore`
- `.markdownlint.json` (newly tracked)
- `legacy-data/` (removed: `README.md`, `book1-part1-chapter1-draft.md`, `book1_ai_literacy_context_reference.md`, `copilot_forced_ai_transcript_research_notes.md`, `how-to-use-ai-book-chat-handoff.md`)
- `docs/00-project/decisions/ADR-00-0002-remove-legacy-data-archive.md` (new)

### Decisions added or changed

- Added `ADR-00-0002-remove-legacy-data-archive.md`.

### Open issues added or closed

- None.

### Commit

- pending commit

## 2026-09-21 (20)

### Changed

- Follow-up to entry (19): the depth-expansion pass used Chapter 1 as the depth benchmark for chapters 2–14 but never revisited Chapter 1 itself, so "What AI Actually Is," "Why AI Feels Suddenly New," and "The Problem With AI Hype" stayed flat while every other chapter gained subsections. The author caught this after rebuilding the PDF from the earlier pass and seeing only "AI Is Already Everywhere" nested in the table of contents. Added H3 subsections to all three remaining sections of `docs/02-book-01/chapters/chapter-01-youve-already-been-using-ai.md`. Chapter 1 word count grew from ~2,070 to ~2,238. Documented in `docs/02-book-01/plans/chapter-01-plan.md`.
- Merged the `worktree-chapter-expansion` branch (entries 19 and this one) into `main` so the full expansion — chapters 2–14, the epilogue, and this Chapter 1 follow-up — is included in the next PDF rebuild.

### Files changed

- `docs/02-book-01/chapters/chapter-01-youve-already-been-using-ai.md`
- `docs/02-book-01/plans/chapter-01-plan.md`

### Commit

- `df43400` (chapter 1 subsections), merged to `main` alongside the branch's prior 15 commits.

## 2026-09-21 (19)

### Added

- Added `docs/02-book-01/plans/book-01-chapter-depth-expansion-plan.md`, the required plan for a >13-file change, covering a chapter-by-chapter depth expansion pass across Book 1.

### Changed

- Expanded chapters 2 through 14 and the epilogue (`docs/02-book-01/chapters/*.md`) to add H3 subsections and additional worked examples, matching the internal structure and depth already present in Chapter 1 (which the author flagged as the only chapter with real subsection structure — every other chapter was flat H2-only and noticeably thinner). Each chapter's section most naturally decomposing into a list of concrete cases (e.g. Chapter 3's writing/images/code/translation/tutoring categories, Chapter 8's creative domains, Chapter 9's risk categories, Chapter 10's four-way jobs framing, Chapter 12's six durable skills, Chapter 13's six tool categories, Chapter 14's education/healthcare/transport) was split into H3 subsections with its own concrete worked example. Thin sections elsewhere were fleshed out with additional worked examples per the style guide's guidance for thin sections. The epilogue received a lighter pass (no forced subsections, per its intentionally short and reflective design) adding texture to two existing sections. No factual content, placeholders (reflection/diagram), takeaways, or recaps were removed or altered in meaning — manuscript word count grew from ~20,200 to ~22,787 words. Each chapter's plan file (`docs/02-book-01/plans/chapter-XX-plan.md`, `epilogue-plan.md`) was updated with a "Depth Expansion" note documenting what changed and the resulting word count. Callout counts were held within the existing 1–3-per-chapter baseline from `ADR-04-0002` throughout — no new callouts were added, only prose and subsections.
- The full 4,000–5,000 word per-chapter target from `ADR-02-0001` remains a longer-run goal, not met by this pass; see `docs/02-book-01/plans/book-01-chapter-depth-expansion-plan.md`'s "Scope Decision" section for the reasoning (Chapter 1, the depth benchmark used for this pass, is itself only ~2,070 words, well short of that target).

### Files changed

- `docs/02-book-01/plans/book-01-chapter-depth-expansion-plan.md` (new)
- `docs/02-book-01/chapters/chapter-02-why-everyone-suddenly-talks-about-ai.md` through `chapter-14-where-ai-goes-next.md`, and `epilogue-dont-panic.md`
- `docs/02-book-01/plans/chapter-02-plan.md` through `chapter-14-plan.md`, and `epilogue-plan.md`

### Decisions added or changed

- None — this pass followed existing `ADR-02-0001` and `ADR-04-0002` rather than introducing a new decision. The scope decision to target Chapter 1 parity rather than the full 4,000–5,000 word ADR-02-0001 target is documented in the plan file rather than a new ADR, since it's a working-scope note for this pass, not a change to the series' structural direction.

### Open issues added or closed

- None. The gap between this pass's ~2,000-word-per-chapter parity target and `ADR-02-0001`'s longer-run 4,000–5,000 word target is noted as a known follow-on in the plan file; no OI was opened for it since the author's request was specifically about matching Chapter 1's existing depth, not about reaching the full ADR target in this pass.

### Commit

- Fourteen commits, one per chapter/epilogue: `9c99901` (ch02) through `80d5d1d` (epilogue), on branch `worktree-chapter-expansion`.

## 2026-09-21 (18)

### Added

- Added `ADR-04-0002-book-01-structure-and-callout-standard.md`, a durable structural style decision: exactly one H1 per chapter file, no `---` dividers, and a consolidated four-type callout set (Key Idea, Try This, Watch Out, Recap), replacing the previous nine-type callout list. Written in response to author review feedback that chapter navigation was broken (every mid-chapter section was an H1, making sections look like sibling chapters), `---` dividers were overused, and callouts had sprawled past the point of being useful highlights.
- Added `docs/02-book-01/plans/book-01-style-revision-plan.md`, the required plan for a >3-file change, covering the retroactive application of the new standard across all of Book 1.

### Changed

- Updated `docs/04-style/style-guide.md` and `docs/04-style/callout-guide.md` to codify the new structural standard (heading hierarchy, no dividers, four-type callout set, prose-over-scaffolding guidance) so it applies to the rest of the series by default, not just this revision.
- Revised all 14 Book 1 chapters and the epilogue (`docs/02-book-01/chapters/*.md`) against `ADR-04-0002`: fixed heading hierarchy so every chapter has exactly one H1 with sections correctly nested under H2/H3; removed every `---` divider; moved "Chapter Purpose"/"Intended Reader Outcome" scaffolding out of the reader-facing manuscript (that content already lives in each chapter's plan file); consolidated all callouts to Key Idea/Try This/Watch Out/Recap, folding retired callout types (Plain English, Author Note, Reflection, Example) into surrounding prose rather than deleting them; rewrote bullet-heavy sections into connected paragraphs with bridging sentences between sections; and fleshed out thin sections with additional examples and plainer restatements. No factual content, cross-chapter references, or diagram/reflection placeholders were removed — manuscript word count grew from the pre-revision draft to roughly 20,200 words. Verified by rebuilding `dist/02-book-01.pdf` via `publish-books.sh` and confirming the table of contents now nests chapter sections correctly instead of listing them as sibling chapters.

### Files changed

- `docs/04-style/decisions/ADR-04-0002-book-01-structure-and-callout-standard.md` (new)
- `docs/02-book-01/plans/book-01-style-revision-plan.md` (new)
- `docs/04-style/style-guide.md`
- `docs/04-style/callout-guide.md`
- `docs/02-book-01/chapters/chapter-01-youve-already-been-using-ai.md`
- `docs/02-book-01/chapters/chapter-02-why-everyone-suddenly-talks-about-ai.md`
- `docs/02-book-01/chapters/chapter-03-what-ai-can-actually-do.md`
- `docs/02-book-01/chapters/chapter-04-what-ai-cannot-do.md`
- `docs/02-book-01/chapters/chapter-05-talking-to-ai-properly.md`
- `docs/02-book-01/chapters/chapter-06-ai-at-home.md`
- `docs/02-book-01/chapters/chapter-07-ai-at-work.md`
- `docs/02-book-01/chapters/chapter-08-ai-and-creativity.md`
- `docs/02-book-01/chapters/chapter-09-the-problems-nobody-should-ignore.md`
- `docs/02-book-01/chapters/chapter-10-will-ai-replace-jobs.md`
- `docs/02-book-01/chapters/chapter-11-ai-hype-vs-reality.md`
- `docs/02-book-01/chapters/chapter-12-how-to-stay-relevant-in-the-ai-era.md`
- `docs/02-book-01/chapters/chapter-13-building-your-personal-ai-toolkit.md`
- `docs/02-book-01/chapters/chapter-14-where-ai-goes-next.md`
- `docs/02-book-01/chapters/epilogue-dont-panic.md`

### Commit

- pending commit

## 2026-09-21 (17)

### Added

- Added `publish-books.sh`, a root-level review script that concatenates each book's drafted chapters (in filename order) and converts them to a single PDF via pandoc, so the author can proof-read a full draft outside the Markdown source. Auto-detects any `docs/*-book-*/chapters/` directory with content (currently only `02-book-01`), or takes an explicit book directory name as an argument. Output goes to `./dist/` (gitignored), which is not tracked. This is a drafting/review convenience, not the series' final publishing pipeline — `ADR-03-0001-manuscript-source-format.md` still leaves that later decision open.

### Files changed

- `publish-books.sh` (new)
- `.gitignore` (new)
- `changelog.md`

### Commit

- pending commit

## 2026-09-21 (16)

### Added

- Added `docs/02-book-01/plans/epilogue-plan.md` and drafted `docs/02-book-01/chapters/epilogue-dont-panic.md` ("Don't Panic"), per `ADR-02-0001-book-01-structure.md`'s Epilogue direction. Short and deliberately less structurally dense than the numbered chapters (one callout only), delivering the four-part closing message and a concrete, immediate next action. **This completes the full Book 1 manuscript arc: 14 chapters plus epilogue, all drafted.**

### Changed

- Updated `docs/02-book-01/book-01-structure.md`'s drafting-status table and Epilogue section to mark it drafted and note full manuscript completion.

### Files changed

- `docs/02-book-01/plans/epilogue-plan.md` (new)
- `docs/02-book-01/chapters/epilogue-dont-panic.md` (new)
- `docs/02-book-01/book-01-structure.md`
- `changelog.md`

### Commit

- pending commit

## 2026-09-21 (15)

### Added

- Added `docs/02-book-01/plans/chapter-14-plan.md` and drafted `docs/02-book-01/chapters/chapter-14-where-ai-goes-next.md` ("Where AI Goes Next"), per `ADR-02-0001-book-01-structure.md`'s Chapter 14 direction. Covers agents, robotics, autonomous systems, and education/healthcare/transport/personal-assistant directions without hard predictions, explicitly inviting the reader to apply Chapter 11's evaluation method to this chapter's own claims. **This completes Part 4 and all 14 numbered chapters.** Only the Epilogue remains for the full manuscript arc.

### Changed

- Updated `docs/02-book-01/book-01-structure.md`'s drafting-status table and Part 4 chapter list to mark Chapter 14 as drafted and Part 4 as complete.

### Files changed

- `docs/02-book-01/plans/chapter-14-plan.md` (new)
- `docs/02-book-01/chapters/chapter-14-where-ai-goes-next.md` (new)
- `docs/02-book-01/book-01-structure.md`
- `changelog.md`

### Commit

- pending commit

## 2026-09-21 (14)

### Added

- Added `docs/02-book-01/plans/chapter-13-plan.md` and drafted `docs/02-book-01/chapters/chapter-13-building-your-personal-ai-toolkit.md` ("Building Your Personal AI Toolkit"), per `ADR-02-0001-book-01-structure.md`'s Chapter 13 direction. Introduces six AI tool categories without naming specific products, gives an evaluation checklist and scam/subscription-trap red flags, and ties "literacy over tool loyalty" back to the book's overall approach.

### Changed

- Updated `docs/02-book-01/book-01-structure.md`'s drafting-status table and Part 4 chapter list to mark Chapter 13 as drafted.

### Files changed

- `docs/02-book-01/plans/chapter-13-plan.md` (new)
- `docs/02-book-01/chapters/chapter-13-building-your-personal-ai-toolkit.md` (new)
- `docs/02-book-01/book-01-structure.md`
- `changelog.md`

### Commit

- pending commit

## 2026-09-21 (13)

### Added

- Added `docs/02-book-01/plans/chapter-12-plan.md` and drafted `docs/02-book-01/chapters/chapter-12-how-to-stay-relevant-in-the-ai-era.md` ("How to Stay Relevant in the AI Era"), per `ADR-02-0001-book-01-structure.md`'s Chapter 12 direction. Opens Part 4. Covers communication, judgement, leadership, creativity, systems thinking, and emotional intelligence, each tied to the effort-vs-judgement framework established since Chapter 6, turning Chapter 10's "adaptability" takeaway into specific guidance.

### Changed

- Updated `docs/02-book-01/book-01-structure.md`'s drafting-status table and Part 4 chapter list to mark Chapter 12 as drafted.

### Files changed

- `docs/02-book-01/plans/chapter-12-plan.md` (new)
- `docs/02-book-01/chapters/chapter-12-how-to-stay-relevant-in-the-ai-era.md` (new)
- `docs/02-book-01/book-01-structure.md`
- `changelog.md`

### Commit

- pending commit

## 2026-09-21 (12)

### Added

- Added `docs/02-book-01/plans/chapter-11-plan.md` and drafted `docs/02-book-01/chapters/chapter-11-ai-hype-vs-reality.md` ("AI Hype vs Reality"), per `ADR-02-0001-book-01-structure.md`'s Chapter 11 direction. Covers AGI panic, doom claims, utopian claims, startup hype, fake demos, and investor marketing generically (no named companies/products), gives a reusable claim-evaluation method, and explicitly distinguishes hype-skepticism from denying Chapter 9's genuine risks. **This completes Part 3 (Risks, Fear, and Reality).**

### Changed

- Updated `docs/02-book-01/book-01-structure.md`'s drafting-status table and Part 3 chapter list to mark Chapter 11 as drafted and Part 3 as complete.

### Files changed

- `docs/02-book-01/plans/chapter-11-plan.md` (new)
- `docs/02-book-01/chapters/chapter-11-ai-hype-vs-reality.md` (new)
- `docs/02-book-01/book-01-structure.md`
- `changelog.md`

### Commit

- pending commit

## 2026-09-21 (11)

### Added

- Added `docs/02-book-01/plans/chapter-10-plan.md` and drafted `docs/02-book-01/chapters/chapter-10-will-ai-replace-jobs.md` ("Will AI Replace Jobs?"), per `ADR-02-0001-book-01-structure.md`'s Chapter 10 direction. Gives a balanced answer (change/disappear/evolve/emerge), explains augmentation vs. replacement, honestly acknowledges real historical transition costs rather than promising a painless outcome, and gives the reader a practical effort-vs-judgement self-assessment.

### Changed

- Updated `docs/02-book-01/book-01-structure.md`'s drafting-status table and Part 3 chapter list to mark Chapter 10 as drafted.

### Files changed

- `docs/02-book-01/plans/chapter-10-plan.md` (new)
- `docs/02-book-01/chapters/chapter-10-will-ai-replace-jobs.md` (new)
- `docs/02-book-01/book-01-structure.md`
- `changelog.md`

### Commit

- pending commit

## 2026-09-21 (10)

### Added

- Added `docs/02-book-01/plans/chapter-09-plan.md` and drafted `docs/02-book-01/chapters/chapter-09-the-problems-nobody-should-ignore.md` ("The Problems Nobody Should Ignore"), per `ADR-02-0001-book-01-structure.md`'s Chapter 9 direction. Opens Part 3. Covers misinformation, deepfakes, scams, bias, surveillance, copyright disputes, privacy, environmental costs, and monopolisation, each grounded in a concrete example, without citing unverified statistics.

### Changed

- Updated `docs/02-book-01/book-01-structure.md`'s drafting-status table and Part 3 chapter list to mark Chapter 9 as drafted.

### Files changed

- `docs/02-book-01/plans/chapter-09-plan.md` (new)
- `docs/02-book-01/chapters/chapter-09-the-problems-nobody-should-ignore.md` (new)
- `docs/02-book-01/book-01-structure.md`
- `changelog.md`

### Commit

- pending commit

## 2026-09-21 (9)

### Added

- Added `docs/02-book-01/plans/chapter-08-plan.md` and drafted `docs/02-book-01/chapters/chapter-08-ai-and-creativity.md` ("AI and Creativity"), per `ADR-02-0001-book-01-structure.md`'s Chapter 8 direction. Covers writing, art, music, video, and design, and addresses the theft/replacement/creativity-killing questions with balance rather than false certainty, deliberately not taking a legal position on unsettled copyright/training-data questions. **This completes Part 2 (Using AI in Real Life).**

### Changed

- Updated `docs/02-book-01/book-01-structure.md`'s drafting-status table and Part 2 chapter list to mark Chapter 8 as drafted and Part 2 as complete.

### Files changed

- `docs/02-book-01/plans/chapter-08-plan.md` (new)
- `docs/02-book-01/chapters/chapter-08-ai-and-creativity.md` (new)
- `docs/02-book-01/book-01-structure.md`
- `changelog.md`

### Commit

- pending commit

## 2026-09-21 (8)

### Added

- Added `docs/02-book-01/plans/chapter-07-plan.md` and drafted `docs/02-book-01/chapters/chapter-07-ai-at-work.md` ("AI at Work"), per `ADR-02-0001-book-01-structure.md`'s Chapter 7 direction. Covers reports, meeting summaries, customer support, presentations, spreadsheets, research, and brainstorming, then addresses confidentiality, company policy, and verification as practical workplace guardrails.

### Changed

- Updated `docs/02-book-01/book-01-structure.md`'s drafting-status table and Part 2 chapter list to mark Chapter 7 as drafted.

### Files changed

- `docs/02-book-01/plans/chapter-07-plan.md` (new)
- `docs/02-book-01/chapters/chapter-07-ai-at-work.md` (new)
- `docs/02-book-01/book-01-structure.md`
- `changelog.md`

### Commit

- pending commit

## 2026-09-21 (7)

### Added

- Added `docs/02-book-01/plans/chapter-06-plan.md` and drafted `docs/02-book-01/chapters/chapter-06-ai-at-home.md` ("AI at Home"), per `ADR-02-0001-book-01-structure.md`'s Chapter 6 direction. Applies Chapter 5's context/specificity pattern to meal planning, travel, budgeting, writing, parenting, hobbies, organising, and accessibility, and introduces over-reliance as a grounded, non-alarmist watch-out.

### Changed

- Updated `docs/02-book-01/book-01-structure.md`'s drafting-status table and Part 2 chapter list to mark Chapter 6 as drafted.
- **Closed `docs/01-series/open-issues/OI-0001.md`** — the author rejected the deferred "cross-reference table" framing directly in the file and clarified that cross-referencing flows backward only (Book 2 may cite Book 1, Book 3 may cite Books 1–2, etc.); Book 1 itself is not cross-referenced against the rest of the arc since it has no predecessor. Reworded `docs/01-series/series-structure.md`'s Continuity Rules section to state this explicitly and replace the deferred cross-reference-table idea with a per-book backward-citation practice.

### Open issues added or closed

- Closed: `docs/01-series/open-issues/OI-0001.md` (Book 1 cross-referencing — resolved: backward-only citation, no forward artifact needed from Book 1).

### Decisions added or changed

- `docs/01-series/series-structure.md`'s Continuity Rules updated to state the backward-only cross-referencing direction explicitly, per the author's resolution of OI-0001.

### Files changed

- `docs/02-book-01/plans/chapter-06-plan.md` (new)
- `docs/02-book-01/chapters/chapter-06-ai-at-home.md` (new)
- `docs/02-book-01/book-01-structure.md`
- `docs/01-series/open-issues/OI-0001.md`
- `docs/01-series/series-structure.md`
- `changelog.md`

### Commit

- pending commit

## 2026-09-21 (6)

### Added

- Added `docs/02-book-01/plans/chapter-05-plan.md` and drafted `docs/02-book-01/chapters/chapter-05-talking-to-ai-properly.md` ("Talking to AI Properly"), per `ADR-02-0001-book-01-structure.md`'s Chapter 5 direction. Opens Part 2. Teaches context, specificity, examples, and iteration via before/after examples, deliberately avoiding "prompt engineering" jargon per the legacy handoff notes' guidance, and ties the explanation back to Chapter 3's "most likely answer" mechanic.

### Changed

- Updated `docs/02-book-01/book-01-structure.md`'s drafting-status table and Part 2 chapter list to mark Chapter 5 as drafted.

### Files changed

- `docs/02-book-01/plans/chapter-05-plan.md` (new)
- `docs/02-book-01/chapters/chapter-05-talking-to-ai-properly.md` (new)
- `docs/02-book-01/book-01-structure.md`
- `changelog.md`

### Commit

- pending commit

## 2026-09-21 (5)

### Added

- Added `docs/02-book-01/plans/chapter-04-plan.md` and drafted `docs/02-book-01/chapters/chapter-04-what-ai-cannot-do.md` ("What AI Cannot Do"), per `ADR-02-0001-book-01-structure.md`'s Chapter 4 direction. Covers hallucinations, lack of true understanding, no consciousness/emotion/intent/morality, no common sense, knowledge cutoffs, and training-data dependency — each tied back to Chapter 3's "most likely answer" explanation rather than introduced as new, disconnected facts. **This completes Part 1 (What AI Actually Is).**

### Changed

- Updated `docs/02-book-01/book-01-structure.md`'s drafting-status table and Part 1 chapter list to mark Chapter 4 as drafted and Part 1 as complete.

### Files changed

- `docs/02-book-01/plans/chapter-04-plan.md` (new)
- `docs/02-book-01/chapters/chapter-04-what-ai-cannot-do.md` (new)
- `docs/02-book-01/book-01-structure.md`
- `changelog.md`

### Commit

- pending commit

## 2026-09-21 (4)

### Added

- Added `docs/02-book-01/plans/chapter-03-plan.md` and drafted `docs/02-book-01/chapters/chapter-03-what-ai-can-actually-do.md` ("What AI Can Actually Do"), per `ADR-02-0001-book-01-structure.md`'s Chapter 3 direction. Covers writing, summarising, brainstorming, images, code, translation, tutoring, analysis, voice, and automation with concrete (non-product-specific) examples, and fully develops the "confident but wrong" idea Chapter 2 flagged but didn't expand on.

### Changed

- Updated `docs/02-book-01/book-01-structure.md`'s drafting-status table and Part 1 chapter list to mark Chapter 3 as drafted.
- **Closed `docs/01-series/open-issues/OI-0002.md`** — the author confirmed directly in the file that the 5-book series arc is final and the 3-book handoff-file version is superseded. Status set to Resolved, dated 2026-09-21.

### Open issues added or closed

- Closed: `docs/01-series/open-issues/OI-0002.md` (5-book vs 3-book series arc — resolved in favour of the 5-book arc).

### Files changed

- `docs/02-book-01/plans/chapter-03-plan.md` (new)
- `docs/02-book-01/chapters/chapter-03-what-ai-can-actually-do.md` (new)
- `docs/02-book-01/book-01-structure.md`
- `docs/01-series/open-issues/OI-0002.md`
- `changelog.md`

### Commit

- pending commit

## 2026-09-21 (3)

### Added

- Added `docs/02-book-01/plans/chapter-02-plan.md` and drafted `docs/02-book-01/chapters/chapter-02-why-everyone-suddenly-talks-about-ai.md` ("Why Everyone Suddenly Talks About AI"), per `ADR-02-0001-book-01-structure.md`'s Chapter 2 direction. Builds directly on Chapter 1 (callbacks to the spam filter and recommendation examples rather than re-explaining them) and introduces "language model" and "generative AI" in plain English.
- User directed drafting to proceed without a per-chapter review pause for this session; noted in `chapter-02-plan.md`'s Session Note.

### Changed

- Updated `docs/02-book-01/book-01-structure.md`'s drafting-status table and Part 1 chapter list to mark Chapter 2 as drafted.

### Files changed

- `docs/02-book-01/plans/chapter-02-plan.md` (new)
- `docs/02-book-01/chapters/chapter-02-why-everyone-suddenly-talks-about-ai.md` (new)
- `docs/02-book-01/book-01-structure.md`
- `changelog.md`

### Commit

- pending commit

## 2026-09-21 (2)

### Added

- Migrated `legacy-data/book1-part1-chapter1-draft.md` into `docs/02-book-01/chapters/chapter-01-youve-already-been-using-ai.md`, the first real manuscript chapter draft in the repository. Legacy callout types (Note, Warning, Reference, Personal Reflection, Try This, Myth vs Reality, Diagram Opportunity) were mapped onto the baseline callout system (`docs/04-style/callout-guide.md`); one mapping (legacy "Reference" → "Plain English") is not a clean fit and is tracked in a new open issue.
- Added `docs/02-book-01/open-issues/OI-0001.md` (callout naming reconciliation), `OI-0002.md` (Book 1 title confirmation), `docs/01-series/open-issues/OI-0001.md` (cross-referencing Book 1 structure against the 5-book series arc), and `docs/01-series/open-issues/OI-0002.md` (a newly discovered conflict: `legacy-data/how-to-use-ai-book-chat-handoff.md` describes an earlier 3-book series concept, distinct from the 5-book arc now in `docs/01-series/series-structure.md`).
- Added `docs/02-book-01/research/research-note-johnny-tribunal-scenario.md`, extracting a candidate case study (an author anecdote about a tenancy-tribunal AI mishap) from the handoff file — flagged as not yet approved for manuscript use.
- Added `docs/02-book-01/research/research-note-copilot-forced-ai.md`, reconciling `legacy-data/copilot_forced_ai_transcript_research_notes.md` into the research-note format, with reliability caveats preserved (source is an unverified, opinionated YouTube transcript).
- Added `docs/00-project/plans/legacy-reconciliation-plan.md`, the required planning file for this >3-file pass per `CLAUDE.md`.

### Changed

- Rewrote `docs/02-book-01/plans/chapter-01-plan.md` to reflect the actual migrated draft (real section structure, actual callout usage, and a newly identified risk: the draft is ~1,600–1,800 words versus the ADR's 4,000–5,000 word target — flagged for author review, not silently padded).
- Expanded `docs/02-book-01/book-01-structure.md` from Chapter-1-only content to the full four-part, 14-chapter-plus-epilogue structure, with a drafting-status table, and pointed to `ADR-02-0001-book-01-structure.md` as the single source of truth for chapter-level content direction (to avoid the two files drifting apart again).
- Updated `docs/00-project/memory/book-01-memory.md` with the full four-part structure summary and Chapter 1's drafted status.
- Updated `CLAUDE.md`'s legacy-data status table to reflect that all four `legacy-data/` files have now been migrated or reviewed.

### Decisions added or changed

- None new (no ADR-level decisions required for this pass; open questions were filed as OIs instead).

### Open issues added or closed

- Opened: `docs/02-book-01/open-issues/OI-0001.md`, `docs/02-book-01/open-issues/OI-0002.md`, `docs/01-series/open-issues/OI-0001.md`, `docs/01-series/open-issues/OI-0002.md`. None closed.

### Files changed

- `docs/02-book-01/chapters/chapter-01-youve-already-been-using-ai.md` (new)
- `docs/02-book-01/plans/chapter-01-plan.md`
- `docs/02-book-01/book-01-structure.md`
- `docs/02-book-01/open-issues/OI-0001.md` (new)
- `docs/02-book-01/open-issues/OI-0002.md` (new)
- `docs/01-series/open-issues/OI-0001.md` (new)
- `docs/01-series/open-issues/OI-0002.md` (new)
- `docs/02-book-01/research/research-note-johnny-tribunal-scenario.md` (new)
- `docs/02-book-01/research/research-note-copilot-forced-ai.md` (new)
- `docs/00-project/plans/legacy-reconciliation-plan.md` (new)
- `docs/00-project/memory/book-01-memory.md`
- `CLAUDE.md`
- `changelog.md`

### Commit

- pending commit

## 2026-09-21

### Added

- Added `prompt.md` at repo root: the task queue Claude Code CLI reads on each run, on top of `CLAUDE.md`'s operating rules.
- Added `.claude/settings.json` granting Claude Code CLI unrestricted bash/file permissions for this project (`bypassPermissions`).
- Restored the Book 1 structure ADR (previously an unfiled file sitting at repo root, never actually implemented per its own requirements) to its correct location as `docs/02-book-01/decisions/ADR-02-0001-book-01-structure.md`.
- Created the full directory skeleton promised by `CLAUDE.md`'s Directory Model but never actually created: `docs/*/plans/`, `docs/*/open-issues/`, `docs/01-series/decisions/`, `docs/02-book-01/chapters/`, `docs/02-book-01/research/`.
- Expanded `docs/01-series/series-structure.md` with the 5-book series arc and author-background note (both previously only in `legacy-data/`, never reconciled into current docs).

### Changed

- Flattened the repository: content previously nested under `ai-book-claude-starter/` (the actual working docs, legacy-data, and changelog) is now at repo root, which is what `CLAUDE.md` itself assumed all along.
- Normalized ADR numbering to a consistent `ADR-NN-xxxx` scheme (two-digit area code) across all areas; updated `CLAUDE.md`'s own naming rule section to describe this accurately instead of the inconsistent `ADR-xxxx` pattern it previously documented.
- Updated `CLAUDE.md` to reference `prompt.md`, the new directory skeleton, the series arc, and the current (unmigrated) status of each `legacy-data/` file.

### Removed

- Removed duplicate root-level `CLAUDE.md` (byte-identical to the one under the old starter subfolder).
- Removed stray, never-relocated `ADR-0001-book-01-structure.md` from repo root (content preserved, relocated — see Added).
- Removed unrelated loose files at repo root: `catch-phrase.txt`, `start-llama.sh`, `x` (an ad hoc prompt fragment for local Llama use, unconnected to this repo's working method).

### Decisions added or changed

- Relocated and renamed Book 1 structure ADR to `ADR-02-0001-book-01-structure.md`; flagged three related open issues for filing (callout naming reconciliation, Book 1 title confirmation, series cross-referencing).

### Open issues added or closed

- None filed yet as formal `OI-xxxx.md` files — three are flagged in `ADR-02-0001` and assigned to the reconciliation pass in `prompt.md`.

### Files changed

- `CLAUDE.md`
- `prompt.md` (new)
- `.claude/settings.json` (new)
- `docs/01-series/series-structure.md`
- `docs/02-book-01/decisions/ADR-02-0001-book-01-structure.md` (new, relocated content)
- Directory skeleton additions under `docs/**/plans/`, `docs/**/open-issues/`, `docs/01-series/decisions/`, `docs/02-book-01/chapters/`, `docs/02-book-01/research/`
- Removed: root `CLAUDE.md` duplicate, `ADR-0001-book-01-structure.md`, `catch-phrase.txt`, `start-llama.sh`, `x`

### Commit

- pending commit

## 2026-05-18

### Added

- Added initial Claude Code repository operating model.
- Added documentation structure for project memory, series planning, Book 1 planning, publishing decisions, and style guidance.
- Added templates for Author Decision Reviews, Open Issues, chapter plans, research notes, and changelog entries.
- Added starter project memory files and starter ADRs.

### Files changed

- `CLAUDE.md`
- `docs/README.md`
- `docs/00-project/memory/project-brief.md`
- `docs/00-project/memory/series-memory.md`
- `docs/00-project/memory/book-01-memory.md`
- `docs/01-series/series-structure.md`
- `docs/02-book-01/book-01-structure.md`
- `docs/04-style/style-guide.md`
- `docs/04-style/callout-guide.md`
- `docs/90-templates/ADR-template.md`
- `docs/90-templates/OI-template.md`
- `docs/90-templates/chapter-plan-template.md`
- `docs/90-templates/research-note-template.md`
- `docs/90-templates/changelog-entry-template.md`
- `docs/03-publishing/decisions/ADR-0001-manuscript-source-format.md`
- `docs/00-project/decisions/ADR-0001-claude-code-working-method.md`
- `docs/04-style/decisions/ADR-0001-book-01-style-baseline.md`

### Decisions added or changed

- Added ADR for Markdown-first manuscript source format.
- Added ADR for Claude Code working method.
- Added ADR for Book 1 style baseline.

### Open issues added or closed

- None.

### Commit

- pending commit
