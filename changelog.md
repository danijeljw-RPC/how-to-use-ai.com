# Changelog

All meaningful project changes should be recorded here.

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
