# Changelog

All meaningful project changes should be recorded here.

## 2026-10-02 (76)

### Fixed

Book 1, Chapter 13: added endnotes for the four external claims in the author's Copilot reflection, in response to the Codex review on PR #37 (ADR-04-0003). The claims are GitHub's Copilot data terms, Copilot pricing, the Majdinasab et al. security replication study and the Peng et al. productivity experiment. Each was checked against its primary source on 2 October 2026 and qualified in its note: population, task, date, version and who ran the study. The author's wording is unchanged; only footnote markers were added. One finding: since 24 April 2026, individual Copilot plans use interaction data for training unless the user opts out. The reflection's "individual users have different data controls" is still accurate, and the note gives the detail. The Chapter Notes sentence saying no products are named in the main text now excepts the author's reflection. The chapter 13 bibliography records the new evidence and recheck items.

- Files changed: `docs/30-books/31-book-01/chapters/chapter-13-building-your-personal-ai-toolkit.md`, `docs/30-books/31-book-01/research/chapter-13-bibliography.md`, `changelog.md`.
- Decisions: none (applies ADR-04-0003).
- Open issues: none.
- Commit: 723a6d2.

## 2026-10-02 (75)

### Fixed

Book 1, Chapter 13: wrapped the author reflection in "Leaving a Tool Cleanly" in `::: {.author-reflection}` so it renders as an Author Reflection rather than plain prose (ADR-04-0004). The text is unchanged.

- Files changed: `docs/30-books/31-book-01/chapters/chapter-13-building-your-personal-ai-toolkit.md`, `changelog.md`.
- Decisions: none (applies ADR-04-0004).
- Open issues: none.
- Commit: 75cf2b7.

## 2026-10-02 (74)

### Changed

Book 1, Chapter 13: replaced the author reflection placeholder at the end of "Leaving a Tool Cleanly" with the author's account of evaluating GitHub Copilot, taken from the comment on issue #28. The text is used word for word. The only formatting change is that its title, "Putting the Evaluation Method to Work", is now a `###` heading.

- Files changed: `docs/30-books/31-book-01/chapters/chapter-13-building-your-personal-ai-toolkit.md`, `changelog.md`.
- Decisions: none.
- Open issues: none (closes GitHub issue #28).
- Commit: 394fd00.

## 2026-10-02 (72)

### Fixed

Finished author reflections now render as Author Reflections. When the Chapter 2 reflection replaced its placeholder (56bd431), it lost its styling and printed as ordinary prose. The book filter boxed only the placeholder form. A finished reflection is now wrapped in `::: {.author-reflection}` … `:::`. In the PDF it gets the gold "Author Reflection" label and a gold left rule that continues across pages. In the EPUB it gets the reflection box. The Chapter 2 reflection is wrapped, and its text is unchanged.

- Files changed: `publishing/pandoc/book.lua`, `publishing/latex/howto-book.tex`, `docs/30-books/31-book-01/chapters/chapter-02-why-everyone-suddenly-talks-about-ai.md`, `docs/20-style/callout-guide.md`, `docs/20-style/decisions/ADR-04-0004-finished-author-reflection-markup.md`, `docs/20-style/plans/finished-author-reflection-markup-plan.md`, `changelog.md`.
- Decisions: added ADR-04-0004.
- Open issues: none.
- Commit: 3341f3b.

## 2026-10-02 (71)

### Changed

Book 1, Chapter 2: replaced the author reflection placeholder in "The Anxiety Case" with the author's own reflection, taken word for word from the comment on issue #24. It covers seeing AI as ordinary tooling before 30 November 2022, the ChatGPT moment, and the subsection "Then I Changed My Mind".

- Files changed: `docs/30-books/31-book-01/chapters/chapter-02-why-everyone-suddenly-talks-about-ai.md`, `changelog.md`.
- Decisions: none.
- Open issues: none (closes GitHub issue #24).
- Commit: 56bd431.

## 2026-10-02 (70)

### Fixed

Layout fixes from the author's review of the Book 1 draft PDF (ADR-03-0009, plan `docs/40-publishing/plans/book-01-pdf-layout-fixes-plan.md`):

- **Roles:** the author on the book is "Danijel-James Wynyard". How-To-Use-AI.com is the series, not an imprint, so the title page, copyright page and back cover now name RePass Cloud Pty Ltd as the publisher. The copyright holder is unchanged.
- **Contents:** fits on one page (tighter entries, no paragraph spacing).
- **Dedication and epigraph:** now in draft and preview builds too, not only release builds.
- **Paragraphs:** block style, with no first-line indent and half a line between paragraphs.
- **Tables:** about half a line of extra space between rows.
- **New "How This Book Works" page:** explains Key Idea, Try This, Watch Out, Recap and Author Reflection boxes.
- **Author reflection placeholders:** shown as an "Author Reflection" callout.
- **Callouts:** never split across pages; a box that doesn't fit moves whole to the next page.
- **Headings:** stay with their subheading and opening text.
- **Lead-ins:** a paragraph ending in a colon stays with the block it introduces.
- **PDF bookmarks:** read "Chapter 1: Title", with sections nested underneath, instead of leaked LaTeX (`[2.2em][I]hwSky1You`).
- **About the Author:** the bio wraps around the photo (vendored `wrapfig.sty`).
- **Release check:** also scans `frontmatter/` and `backmatter/` for unresolved placeholders.

Details:

- Files changed: `publishing/books.json`, `publishing/latex/howto-book.tex`, `publishing/latex/wrapfig.sty` (new), `publishing/pandoc/book.lua`, `publishing/epub/book.css`, `scripts/build_matter.py`, `scripts/release_cover.py`, `publish-draft-books.sh`, `tests/test_build_matter.py`, `docs/30-books/31-book-01/frontmatter/how-this-book-works.md` (new), `docs/40-publishing/plans/book-01-pdf-layout-fixes-plan.md` (new), `changelog.md`.
- Decisions: added ADR-03-0009 (interior layout refinements). Amended ADR-03-0006 (no imprint; author name on the book). Updated ADR-03-0008 (callouts no longer split).
- Open issues: added `docs/40-publishing/open-issues/OI-0008.md` (author name versus legal name; the website still says Wynyard-McClay).
- Commit: a96b115.

## 2026-10-02 (69)

### Fixed

Draft and preview PDFs now collect notes at the back of the book, grouped by chapter, as ADR-03-0008 (item 10) requires for every format. Before this change only `--release` builds did; the default `./publish-draft-books.sh book 1` still typeset per-page footnotes, because the draft path passed `inline` to the interior build and `--notes-inline` to the matter script.

- Files changed: `publish-draft-books.sh`, `tests/test_publish_draft_books.sh` (asserts `\printpagenotes` and `\hwNotes{back}` in the draft build), `changelog.md`.
- Decisions: none added or changed (implements ADR-03-0008 as accepted).
- Open issues: none.
- Commit: ee7ef4d.

## 2026-10-02 (68)

### Changed

Implemented the house design (Option B, "Address bar") and the release build (ADR-03-0008, plan steps 3–9). Draft, preview and release editions now all use the new design at 7.5 × 9.25 in.

- New interior style (`publishing/latex/howto-book.tex`, `memoir`):
  - IBM Plex Serif, Sans Condensed and Mono, shipped in `publishing/fonts/` (OFL);
  - navy chapter bands labelled "Chapter 01";
  - callouts in their own colours (Key Idea, Watch Out, Try This, Recap) that split across pages (vendored `framed.sty`);
  - plain quotes with a sky rule, tables in sans, figures numbered 1-1;
  - running feet with the page number on the outer edge;
  - mirror margins and bleed for print;
  - notes at the back of the book, grouped by chapter, each chapter's sources paragraph after its notes;
  - memoir's index in the contents.
- New pandoc filter (`publishing/pandoc/book.lua`): chapter openers, callouts, "Chapter Notes" handling, height-capped images.
- New `scripts/build_matter.py`. It writes the half title, series page, title page, the copyright page (all ISBNs, imprint, edition, NLA line, disclaimers, proof/draft/preview line), dedication, epigraph and contents, plus any `frontmatter/*.md` files. At the back it writes the notes, any `backmatter/*.md` files, About the Author (photo, Markdown bio) and About the Series. Empty `books.json` values are left out.
- New `scripts/release_cover.py`. It draws the Option B front cover (address-bar wordmark, "Book 1 of 5", title, illustration, seal) and the back cover in paperback, ebook and draft variants (category, price, summary, highlights, endorsements, bio and photo, barcode). It also draws a wrap with bleed for each printer, with the spine width calculated from the page count (KDP and IngramSpark calipers) or a manual override. Copy that doesn't fit is set smaller, down to 75%.
- `publish-draft-books.sh`:
  - `--release` (or `--edition release`), `--format paperback,pdf,epub` and `--proof`;
  - a release check, which fails on unresolved placeholders or missing ISBNs unless `--proof` is given;
  - paperback outputs: interior typeset in colour, then converted to greyscale with Ghostscript; one cover per printer;
  - a colour PDF ebook with covers, an EPUB 3 (ISBN identifier, embedded fonts, SVG diagrams, linked index) and a release report;
  - a clean release folder on each run;
  - draft and preview builds use the new design; previews say "Preview edition" and get the clean back cover;
  - `BOOK_PUBLISH_CONFIG` overrides the metadata file.
- `scripts/assemble_draft_book.py` uses the trim size from `series.print` and embedded Plex fonts. `scripts/isbn_barcode.py` accepts a font.
- Tests: new `tests/test_build_matter.py` and `tests/test_release_cover.py`. The integration test now expects the new page sizes and runs a full `--release --proof` build. Results: 75 unit tests pass (1 skipped: no zbar), and the integration test passes.

### Files changed

- `publish-draft-books.sh`
- `publishing/latex/howto-book.tex` (new), `publishing/latex/framed.sty` (new, vendored)
- `publishing/pandoc/book.lua` (new)
- `publishing/epub/book.css` (new)
- `publishing/fonts/` (new: 14 IBM Plex TTFs and `OFL.txt`)
- `scripts/build_matter.py` (new), `scripts/release_cover.py` (new)
- `scripts/assemble_draft_book.py`, `scripts/isbn_barcode.py`
- `tests/test_build_matter.py` (new), `tests/test_release_cover.py` (new), `tests/test_publish_draft_books.sh`
- `docs/40-publishing/decisions/ADR-03-0008-release-edition-build.md`
- `docs/40-publishing/plans/release-edition-build-plan.md`
- `docs/40-publishing/open-issues/OI-0005.md`
- `docs/40-publishing/books-json-reference.md`
- `changelog.md`

### Decisions

- ADR-03-0008: implementation recorded.

### Open issues

- OI-0005: gaps 1, 2, 4 and 5 fixed, gap 3 partly. It closes after KDP and IngramSpark preflight.

### Commit

`ab2a9d3`

## 2026-10-02 (67)

### Changed

Recorded the author's release-build decisions and added the release metadata fields, the loader and the barcode generator (plan steps 1–2). Draft builds are unchanged; the draft integration test passes.

- `publishing/books.json` gains `series.about`, `series.authorProfile` (photo `assets/author/author-photo.jpg`, short and long bio, website), `series.publisher`, `series.defaultPriceCode` (`90000`) and `series.print` (7.5 × 9.25 in trim, bleed, black-and-white interior, per-printer KDP and IngramSpark caliper and spine settings). Each book gains `copyright`, `editions` (paperback, PDF and EPUB ISBNs, display form, price code, optional printed prices) and `backCover`. Book 1's back-cover copy is the sample text from the design options, for the author to edit. Every new value the author must supply is `""`, so it is left out until filled in.
- Added `scripts/book_metadata.py`. It loads one book's metadata with every empty value removed (an endorsement without a quote is dropped), validates ISBN-13 check digits and price codes, and lists release blockers: missing ISBNs, copyright holder, a missing photo file, and visible placeholder or author-input text with file and line. Run with `--check` to see what blocks a release.
- Added `scripts/isbn_barcode.py`: a vector EAN-13 + EAN-5 barcode with an embedded font, drawn into any ReportLab canvas or as a standalone PDF.
- Added `docs/40-publishing/books-json-reference.md` (every field, the empty-string rule, author photo name and specification) and `assets/author/README.md`.
- The ADR, OI and plan record the author's answers. Item 2 is read as a black-and-white paperback interior with colour PDF/EPUB; this is marked as an assumption in OI-0007.

### Files changed

- `publishing/books.json`
- `scripts/book_metadata.py` (new)
- `scripts/isbn_barcode.py` (new)
- `tests/test_book_metadata.py` (new)
- `tests/test_isbn_barcode.py` (new)
- `assets/author/README.md` (new)
- `docs/40-publishing/books-json-reference.md` (new)
- `docs/40-publishing/decisions/ADR-03-0008-release-edition-build.md`
- `docs/40-publishing/open-issues/OI-0007.md`
- `docs/40-publishing/plans/release-edition-build-plan.md`
- `changelog.md`

### Decisions

- ADR-03-0008 accepted: KDP and IngramSpark, black-and-white paperback interior, Option B, wordmark 3, back-of-book notes grouped by chapter.

### Open issues

- OI-0007 partly answered (items 1, 2, 4, 5, 7; JSON fields created for 9–14 and 16).

### Commit

`63d8b7d`

## 2026-10-02 (66)

### Changed

Planned a release (ready-to-print) mode for `publish-draft-books.sh` and produced design options for author review. No build code has changed yet; implementation waits for the author's review (CLAUDE.md: more than three files).

- Added the release edition build plan. It covers `--release` (draft stays the default), `--format paperback,pdf,epub` and `--proof`; paperback interior and wrap-cover PDFs at the confirmed 7.5 × 9.25 in trim; the PDF ebook and EPUB; front and back matter per format; one ISBN per format with a default `90000` price code and a generated EAN-13 + EAN-5 barcode; a back cover driven by `books.json` where empty strings are left out; and a release gate that refuses a build while placeholders remain (Book 1 currently has 13 placeholders and 9 `AUTHOR-INPUT` blocks).
- Added three single-file HTML design proofs drawn to scale: Option A "Engraving" and Option B "Address bar" (cover wrap with bleed and spine guides, front matter, chapter opener, mirror-margin body spread, about the author, format table, working sample barcode), and four front-cover wordmark treatments that read as `how-to-use-ai.com`.
- Reviewed `oreillymedia/orm_book_samples`. It is boilerplate for O'Reilly's internal Atlas tooling, so none of its code is reusable here. It was used as a front/back matter checklist, and its legal text shows that O'Reilly treats its cover animal and trade dress as trademarks; that risk is recorded in the plan.

### Files changed

- `docs/40-publishing/plans/release-edition-build-plan.md` (new)
- `docs/40-publishing/design-options/option-a-engraving.html` (new)
- `docs/40-publishing/design-options/option-b-address-bar.html` (new)
- `docs/40-publishing/design-options/cover-wordmark-options.html` (new)
- `docs/40-publishing/decisions/ADR-03-0008-release-edition-build.md` (new, proposed)
- `docs/40-publishing/open-issues/OI-0007.md` (new)
- `docs/40-publishing/open-issues/OI-0005.md`
- `changelog.md`

### Decisions

- ADR-03-0008 (proposed): release edition build.

### Open issues

- Opened OI-0007: author decisions for the release build (printer, interior ink, paper, design option, wordmark, cover art, notes, references, ISBNs, photo, bio, back-cover copy, price, copyright holder, preface, draft trim size).
- OI-0005 now points to the release plan.

### Commit

`2c7c204`

## 2026-10-02 (65)

### Changed

Addressed the Codex review comments collected in GitHub issue #15 (PRs #14, #16–#20).

- Restored ADR-02-0001 from `docs/30-books/31-book-01/chapters/decisions/` to its canonical `docs/30-books/31-book-01/decisions/` path. Commit `5164959` had moved it, breaking 33 references. Replaced the "stale path" notes in the Chapter 12–14 plans with a record of the restore.
- Chapter 11: anecdotes are now an explicit aside (evidence that can appear inside any claim type), not a sixth kind of claim, so the "Five Kinds of Claim" count is consistent in the prose, question 1, the diagram and the recap. The Chapter 11 plan now records this.
- Chapter 11: the weather-model example no longer says it "holds up under independent evaluation". It is described as a peer-reviewed result whose cited evidence comes from the model's creators.
- Chapter 11 Chapter Notes: the 1 October verification statement no longer includes the expert-survey comparison and the bar-exam re-analysis. These are now described as checked only against abstracts or summaries, matching OI-0005 items 4 and 5.
- Chapter 14 Try This: "Who benefits if you believe it now?" now reads as a prompt to check more carefully, in line with Chapter 11's question 4. The rest of the Chapter 14 points in the review had already been fixed on this branch.
- Regenerated the line index (one new locator).

### Files changed

- `docs/30-books/31-book-01/decisions/ADR-02-0001-book-01-structure.md` (moved back)
- `docs/30-books/31-book-01/chapters/chapter-11-ai-hype-vs-reality.md`
- `docs/30-books/31-book-01/chapters/chapter-14-where-ai-goes-next.md`
- `docs/30-books/31-book-01/diagrams/ai-claim-five-questions.mmd`
- `docs/30-books/31-book-01/plans/chapter-11-plan.md`
- `docs/30-books/31-book-01/plans/chapter-12-plan.md`
- `docs/30-books/31-book-01/plans/chapter-13-plan.md`
- `docs/30-books/31-book-01/plans/chapter-14-plan.md`
- `docs/30-books/31-book-01/index/book-01-index-lines.md` (regenerated)
- `changelog.md`

### Decisions

None added or changed.

### Open issues

None added or closed. OI-0005 (Book 1) items 4 and 5 remain open.

### Commit

`c0f1320`

## 2026-10-01 (64)

### Changed

- Reviewed all fourteen chapters and the epilogue and built a curated Book 1 index: 299 headings and subentries, 136 cross-references and about 2,150 locators, in `docs/30-books/31-book-01/index/index-terms.toml`. Chapter limits keep ambiguous words apart (for example *agent* means AI agents in Chapters 3–4 and 13–14 but human support agents in Chapters 7 and 10), and broad concepts index their first mention per chapter.
- Added `scripts/build_book_index.py`. It matches the term list against the manuscript without adding markup to the chapters, and never indexes headings, Chapter Notes, captions, placeholders, `AUTHOR-INPUT` blocks, code or URLs. Subcommands: `annotate` (LaTeX `\index` markers or EPUB anchors), `backmatter` (index block), `report` (line-referenced Markdown index) and `check`.
- Generated the working line index, `docs/30-books/31-book-01/index/book-01-index-lines.md`: every locator links to `chapter-file#Lline`.
- `publish-draft-books.sh` now ends full builds with a two-column, page-numbered index, listed in the contents. It takes letter headings from `publishing/book-index.ist` and runs xelatex → makeindex → xelatex, using base `makeidx` only. Preview editions never include the index; `--no-index` skips it. Builds without an index use the original pandoc route unchanged.
- Verified that pandoc output with markers is identical to output without them, apart from the markers themselves (now a unit test). Markers in tables go before the table, and markers move past bold text and possessives. A test EPUB built with anchor markers had 2,153 index links, all resolving.

### Files changed

- `scripts/build_book_index.py` (new)
- `tests/test_build_book_index.py` (new)
- `publishing/book-index.ist` (new)
- `publish-draft-books.sh`
- `tests/test_publish_draft_books.sh`
- `docs/30-books/31-book-01/index/index-terms.toml` (new)
- `docs/30-books/31-book-01/index/book-01-index-lines.md` (new, generated)
- `docs/30-books/31-book-01/index/README.md` (new)
- `docs/40-publishing/decisions/ADR-03-0007-back-of-book-index.md` (new)
- `docs/40-publishing/open-issues/OI-0006.md` (new)
- `docs/40-publishing/plans/book-index-plan.md` (new)
- `docs/00-project/memory/book-01-memory.md`
- `changelog.md`

### Decisions added or changed

- Added ADR-03-0007 (back-of-book index from a curated term list), Proposed.

### Open issues added or closed

- Opened OI-0006 (author review of the index term list; EPUB wiring).

### Commit

- `publishing: add curated back-of-book index with PDF build support` (a231b8e)

## 2026-10-01 (63)

### Changed

- Rewrote the Epilogue ("Don't Panic") from a ~940-word draft into a full closing piece (~3,000 words of prose), following the quality rules of the `chapter-1X-writing-prompt.md` files while keeping it an epilogue rather than a fifteenth chapter.
- Added a Douglas Adams "Don't Panic" opening (footnoted); a "What You Can Do Now" section with five everyday situations; a fifth "you don't need" point (keeping up with everything); a one-page reference table mapping situations to each chapter's key question; "Calm Is Not the Same as Complacent", which qualifies the "adapt calmly" message with Chapter 10's conditions; "When the Details Go Out of Date"; a three-step, seven-day Try This; and a short series-continuation note.
- Added four tagged author-input blocks (`<!-- AUTHOR-INPUT id="EPI-1…4" -->`): EPI-2 (companion website) and EPI-4 (closing message) are required; EPI-1 (origin note) and EPI-3 (Book 2 teaser) are optional.
- Added Chapter Notes with an AI-assistance note per ADR-04-0003.

### Files changed

- `docs/30-books/31-book-01/chapters/epilogue-dont-panic.md`
- `docs/30-books/31-book-01/plans/epilogue-plan.md`
- `docs/30-books/31-book-01/book-01-structure.md`
- `changelog.md`

### Decisions added or changed

- None. Callouts (one Key Idea and one Try This) follow ADR-04-0002; the plan records why it moved from "one Key Idea only" to two callouts.

### Open issues added or closed

- None. Author input is tracked in the tagged blocks and the epilogue plan.

### Commit

- `draft: rewrite epilogue with reference table and tagged author input` (144f6ab)

## 2026-10-01 (62)

### Changed

- Replaced the ~1,270-word Chapter 14 template with a full research-backed manuscript (about 10,600 words before notes), drawing on every file in the Chapter 14 research package and following `chapter-14-writing-prompt.md`.
- Made the chapter follow its own advice: an evidence standard in the introduction, a capability → deployment → adoption lens with a six-step maturity vocabulary, and the same questions for every direction (what exists, where deployed, what is hard, what was predicted, what to watch).
- Agents: workflow-versus-agent definition; "answering vs acting with delegated authority" and a keycard analogy with its limits; METR time horizons with stated limitations and no extrapolation; prompt injection / agent hijacking (NIST, OWASP, a patched vendor flaw); identity, permissions, audit and least privilege; the calendar example rebuilt around five authority questions.
- Robotics: robots as several maturity levels; warehouse scale; Pilbara mining autonomy (new primary source); ISO 10218:2025; an announced warehouse robot later withdrawn; humanoid teleoperation and productive-hours questions; Moravec's paradox as intuition.
- Education: Bloom's 2 sigma as motivation, not promise; assisted performance vs learning; teachers at task level; Australian framework, EdChat, NSWEduChat and NSW HSC assessment change; detectors unsuitable for high-stakes accusations; conditional equity.
- Healthcare: FDA >1,600 devices; TGA intended-purpose regulation and scribe scope creep; six categories; MASAI, Epic Sepsis Model external validation and a mixed AI-scribe RCT (all checked); 2025 Australian reviews; discovery-to-treatment stages.
- Transport: SAE Levels 2/4/5 and the driver-assistance rule; robotaxi safety as company data; Cruise suspension; Australian 2027 conditional-deployment pathway and AVSL; Adelaide AI traffic trials as a bounded problem.
- Personal assistants as a convergence of conversation, memory, tools and action; announcement vs deployment; on-device not automatically private; accessibility both ways; gradual vs sudden visibility. Brief AI-in-science and energy/compute note.
- Rebuilt "Why This Chapter Avoids Hard Predictions": wrong in both directions, expert surveys as belief, fast adoption vs slow transformation, scenarios vs forecasts, IASR trajectories, signals to watch (list and table), a future-claim audit (Try This) and "Who Decides?" showing human agency through Australian institutional choices.
- New diagram `capability-deployment-adoption.mmd` (portrait, rendered with mmdc); one four-column table. Companies generic in prose, as in Chapters 11 and 13. Above the 4,500–6,500-word guidance; candidate cuts are listed in the plan.
- Committed the user-added Chapter 14 research package.

### Files changed

- `docs/30-books/31-book-01/chapters/chapter-14-where-ai-goes-next.md`
- `docs/30-books/31-book-01/diagrams/capability-deployment-adoption.mmd` (new)
- `docs/30-books/31-book-01/research/chapter-14-bibliography.md` (new)
- `docs/30-books/31-book-01/plans/chapter-14-plan.md`
- `docs/30-books/31-book-01/book-01-structure.md`
- `docs/80-research/chapter-14-research-package/` (new, user-added)
- `changelog.md`

### Decisions added or changed

- None. Callouts follow ADR-04-0002 (Myth vs Reality as an H2 section; reflection questions in the Recap); citations follow ADR-04-0003.

### Open issues added or closed

- None. Recheck items (including the NTC and Adelaide pages that could not be retrieved) are recorded in the Chapter 14 bibliography, as Chapters 10–13 did.

### Commit

- `draft: write research-backed chapter 14` (c1b5657)

## 2026-10-01 (61)

### Changed

- Replaced the ~1,250-word Chapter 13 template with a full research-backed manuscript (about 11,500 words before notes), drawing on every file in the Chapter 13 research package and following `chapter-13-writing-prompt.md`.
- Reframed the six required categories as "kinds of help" rather than six apps, with convergence, embedded AI and a "Map, Not a Taxonomy" section folding in AI search, transcription, translation, companions, video/music, accessibility and on-device AI.
- Made the chapter task-first ("Start With the Task, Not the App"), added "Do You Need a New Tool at All?" with a free-versus-paid treatment, and qualified "literacy over loyalty" as examined loyalty that allows rational continuity.
- Replaced the short checklist with a two-tier evaluation: a five-question first pass (need, maker, data, result, cost and exit) and a deeper check covering fit, publisher identity, permission-to-feature matching, reliability, real cost, age, accessibility and exit.
- Added "Privacy Is Several Questions, Not One": a six-question table; training versus storage; temporary modes; deletion versus all data (shared-link and legal-hold examples); consumer, business and on-device differences; proportionate Australian privacy-law context (APP coverage, small-business exemption, no general erasure right, Children's Online Privacy Code pending).
- Strengthened safe experimentation (concrete low-stakes tests, what not to paste, accuracy testing, account security, connected and action-taking tools) and added children and teenagers (eSafety 2026), older readers without stereotyping, and small businesses.
- Rebuilt the scams section around documented fleeceware, malicious-extension and fake-AI-site cases without prevalence claims; subscription traps with weekly-price arithmetic; ACCC JustAnswer enforcement; the Unfair Trading Practices Act 2026 (passed, commencing 1 July 2027); neutral treatment of wrappers; ACCC fake-review guidance.
- Added "Leaving a Tool Cleanly". New task-first diagram `toolkit-task-first-decision.mmd` replaces the six-bubble placeholder; two tables added.
- Checked the ACCC JustAnswer release and the Treasury reform announcement on 1 October 2026; the eSafety survey page timed out and is flagged for recheck. The chapter is above the 5,000–7,000-word guidance; candidate cuts are listed in the plan.

### Files changed

- `docs/30-books/31-book-01/chapters/chapter-13-building-your-personal-ai-toolkit.md`
- `docs/30-books/31-book-01/diagrams/toolkit-task-first-decision.mmd` (new)
- `docs/30-books/31-book-01/research/chapter-13-bibliography.md` (new)
- `docs/30-books/31-book-01/plans/chapter-13-plan.md`
- `docs/30-books/31-book-01/book-01-structure.md`
- `changelog.md`

### Decisions added or changed

- None. Callouts follow ADR-04-0002 (Myth vs Reality as an H2 section; reflection questions in the Recap); citations follow ADR-04-0003.

### Open issues added or closed

- None. Recheck items are recorded in the Chapter 13 bibliography, as Chapters 10–12 did.

### Commit

- `draft: write research-backed chapter 13` (996f5f0)

## 2026-10-01 (60)

### Changed

- Replaced the ~1,120-word Chapter 12 template with a full research-backed manuscript (about 9,800 words before notes), drawing on every file in the Chapter 12 research package.
- Defined what "more important" means (four meanings), stated that durable does not mean uniquely human, and treated effort vs judgement as a moving line. Adaptability is named as the throughline connecting six skill sections; domain knowledge and verification run through all six.
- Rewrote every skill section with what AI can already do, what remains human, a concrete (mostly non-office) example and practice advice. Judgement is the strongest section: automation bias, human-AI meta-analysis, domain expertise, Australian accountability (Dayal matter, Federal Court practice note) and a worked football-club example.
- Emotional intelligence now acknowledges the contested construct and AI empathy-rating evidence, distinguishing empathetic performance from relationship, presence and accountability.
- Added "Protecting the Skills While You Use AI": today's output vs tomorrow's ability, the supervision paradox (Bainbridge), deskilling evidence with limits, adult learning, growth-mindset debate and using AI to practise rather than avoid practising.
- Added two tables (six skills at a glance; supervision paradox). No diagram.
- Checked the Dayal regulator statement on 1 October 2026; the Federal Court practice note page returned 403 and is flagged for recheck.
- The chapter is above the 5,500–7,500-word guidance; candidate cuts are listed in the plan.

### Files changed

- `docs/30-books/31-book-01/chapters/chapter-12-how-to-stay-relevant-in-the-ai-era.md`
- `docs/30-books/31-book-01/research/chapter-12-bibliography.md` (new)
- `docs/30-books/31-book-01/plans/chapter-12-plan.md`
- `docs/30-books/31-book-01/book-01-structure.md`
- `changelog.md`

### Decisions added or changed

- None. Callouts follow ADR-04-0002 (Example and Reflection carried in prose; Myth vs Reality as an H2 section); citations follow ADR-04-0003.

### Open issues added or closed

- None. Recheck items are recorded in the Chapter 12 bibliography, as Chapter 10 did.

### Commit

- `draft: write research-backed chapter 12` (`b8668a8`)

## 2026-10-01 (59)

### Changed

- Replaced the ~1,280-word Chapter 11 template with a full research-backed manuscript (about 12,600 words of prose before notes), drawing on every file in the Chapter 11 research package.
- Added forecast as its own claim type, a possible-to-dependable ladder, and the operating-envelope idea, which replaces the outdated self-driving example.
- Replaced the three-question method with five questions: what kind of claim, what exactly and compared with what, where it came from, who else has checked it, and what would change my mind. "Who benefits?" now sets how hard to check, not the answer.
- Added a worked example of the "95% of AI projects fail" statistic, checked against the report itself on 1 October 2026. The report states its 95/5 split three different ways and calls its figures "directionally accurate based on individual interviews".
- Covered AGI definitions, the long-term-risk disagreement, expert surveys, utopian claims, edited demos, AI washing (US and Australian regulators), benchmarks, "AI beats humans", anti-hype as hype, underhype, and examples for executives, students and older adults.
- Kept companies, products and individuals unnamed in prose, per the plan; endnotes and the bibliography identify sources.
- Rechecked the bar-exam re-analysis, expert survey, student study, international safety report and driverless ride-hailing status on 1 October 2026.
- Added one diagram (the five questions) and a Chapter 11 bibliography.
- The chapter is above the 6,500–8,500-word guidance. Candidate cuts are listed in the plan.
- Numbered (59) to follow Chapter 10's entry (58). Chapter 10 was drafted on `book01/chap10-draft` and merged into `book01/chap11` before this branch.

### Files changed

- `docs/30-books/31-book-01/chapters/chapter-11-ai-hype-vs-reality.md`
- `docs/30-books/31-book-01/research/chapter-11-bibliography.md` (new)
- `docs/30-books/31-book-01/diagrams/ai-claim-five-questions.mmd` (new)
- `docs/30-books/31-book-01/open-issues/OI-0005.md` (new)
- `docs/30-books/31-book-01/open-issues/OI-0006.md` (new)
- `docs/30-books/31-book-01/plans/chapter-11-plan.md`
- `docs/30-books/31-book-01/book-01-structure.md`
- `changelog.md`

### Decisions added or changed

- None. Plain English and Myth vs Reality follow ADR-04-0002 (table and prose; Myth vs Reality as an H2 section), as in Chapters 7–9.

### Open issues added or closed

- Added `docs/30-books/31-book-01/open-issues/OI-0005.md` (Chapter 11 claims to confirm).
- Added `docs/30-books/31-book-01/open-issues/OI-0006.md` (Chapter 14 must adopt the revised method).

### Commit

- `draft: write research-backed chapter 11` (14efa91)

## 2026-10-01 (58)

### Changed

- Replaced the ~1,430-word Chapter 10 template with a full research-backed manuscript (about 11,500 words of prose before notes), drawing on every file in the Chapter 10 research package.
- The chapter is now organised around tasks rather than job titles. It separates exposure, adoption, workflow change, help-or-replace, demand and labour-market impact, and teaches readers to ask "what exactly did they count?" of headline percentages (IMF, ILO, WEF, Frey and Osborne versus OECD).
- The four outcomes (change, disappear, evolve, emerge) now use real evidence: the Stanford payroll study, Danish administrative data, freelance platforms, Klarna's filing (as company evidence), the 41-country junior/senior study and new work since 1940. A new subsection covers entry-level workers and apprenticeship tasks.
- The history section covers transition costs as well as new work: Luddites, Engels' pause, robots in US regions, French firm-versus-industry results, displaced-worker losses (Watch Out), and a bounded ATM example.
- Augmentation vs. Replacement explains how augmentation can still reduce headcount, why productivity is not job security, the jagged frontier, the METR slowdown, micro gains versus flat Australian productivity, and provider usage data that moves between reports.
- Added a dedicated Australian subsection (ABS adoption, JSA, Productivity Commission, Fair Work consultation), and non-office examples (receptionist, electrician, aged care).
- The self-assessment now adds ten questions and four output groups to the effort/judgement heuristic. Adaptability is framed as widening options, not guaranteeing protection.
- Rechecked the Stanford, 41-country, ABS, Productivity Commission, Klarna, ILO, JSA and Anthropic sources on 1 October 2026. Updated the package's Anthropic usage shares, and dropped its unconfirmed Klarna "human support remains available" claim.
- Added one portrait diagram and a Chapter 10 bibliography with a claim map, numerical audit, package corrections and recheck priorities.
- Updated the Chapter 10 plan and the Book 1 drafting status. The chapter is above the drafting prompt's 6,000–8,000-word guidance; candidate cuts are listed in the plan.

### Files changed

- `docs/30-books/31-book-01/chapters/chapter-10-will-ai-replace-jobs.md`
- `docs/30-books/31-book-01/research/chapter-10-bibliography.md` (new)
- `docs/30-books/31-book-01/diagrams/ai-capability-to-labour-impact.mmd` (new)
- `docs/30-books/31-book-01/plans/chapter-10-plan.md`
- `docs/30-books/31-book-01/book-01-structure.md`
- `changelog.md`

### Decisions added or changed

- None. The plan's Plain English and Myth vs Reality callouts follow ADR-04-0002 (prose definitions; Myth vs Reality as an H2 section), as in Chapters 7 to 9.

### Open issues added or closed

- None.

### Commit

- `draft: write research-backed chapter 10` (623da23)

## 2026-10-01 (57)

### Changed

- Replaced the ~1,485-word Chapter 9 template with a full research-backed manuscript (about 12,000 words of prose before notes), drawing on every file in the Chapter 9 research package.
- The chapter now uses a four-question evidence test (capability, prevalence, impact, response) throughout. It covers all nine required risks with concrete Australian-first evidence, and adds a synthesis section on individual, organisational and collective safeguards and what "responsible regulation" means.
- Labelled the $2.18 billion 2025 scam figure as all reported scams, not AI scams. Labelled data-centre electricity as distinct from AI electricity, and forecasts as forecasts.
- Corrected the research package's Bunnings summary after checking the OAIC statement: the Tribunal set aside the APP 3 collection finding and allowed consent exceptions for a limited purpose, while upholding the APP 1 and APP 5 findings.
- Rechecked the ACCC scam figures, Scams Prevention Framework dates and AEMO data-centre forecast on 1 October 2026.
- Added three diagrams, replacing the plan's individual-versus-society placeholder.
- Added a Chapter 9 bibliography with a claim map, a numerical-claim audit, corrections to the research package, material reserved for the website, and recheck priorities.
- Updated the Chapter 9 plan and the Book 1 drafting status.
- The chapter is above the 6,500–8,500-word guidance. Candidate cuts are listed in the plan.

### Files changed

- `docs/30-books/31-book-01/chapters/chapter-09-the-problems-nobody-should-ignore.md`
- `docs/30-books/31-book-01/research/chapter-09-bibliography.md` (new)
- `docs/30-books/31-book-01/diagrams/risk-claim-evidence-questions.mmd` (new)
- `docs/30-books/31-book-01/diagrams/ai-risk-safeguard-layers.mmd` (new)
- `docs/30-books/31-book-01/diagrams/ai-industry-stack-layers.mmd` (new)
- `docs/30-books/31-book-01/plans/chapter-09-plan.md`
- `docs/30-books/31-book-01/book-01-structure.md`
- `changelog.md`

### Decisions added or changed

- None. The plan's Example and Myth vs Reality callouts follow ADR-04-0002 (prose example subsection; Myth vs Reality as an H2 section), as in Chapters 7 and 8.

### Open issues added or closed

- None.

### Commit

- `draft: write research-backed chapter 09` (4878136)

## 2026-10-01 (56)

### Changed

- Added a deep-research prompt for each of Chapters 9 to 14. Each matches the depth and structure of the Chapter 8 prompt and is written for its own chapter's plan and draft. Each assumes the plan and draft are uploaded with it.
- Each prompt includes a list of unverified starting leads for the research system to check or discard.
- The Chapter 11 prompt covers the author's notes on three audiences (executives, students, seniors).
- The prompts for Chapters 10, 12, 13 and 14 openly override their plans' "no new external research required" note. The plans themselves are unchanged.

### Files changed

- `docs/80-research/chapter-09-research-package/chapter-09-research-prompt.md` (new)
- `docs/80-research/chapter-10-research-package/chapter-10-research-prompt.md` (new)
- `docs/80-research/chapter-11-research-package/chapter-11-research-prompt.md` (new)
- `docs/80-research/chapter-12-research-package/chapter-12-research-prompt.md` (new)
- `docs/80-research/chapter-13-research-package/chapter-13-research-prompt.md` (new)
- `docs/80-research/chapter-14-research-package/chapter-14-research-prompt.md` (new)
- `docs/30-books/31-book-01/plans/chapters-09-14-research-prompts-plan.md` (new)
- `changelog.md`

### Decisions added or changed

- None.

### Open issues added or closed

- None.

### Commit

- `research: add research prompts for chapters 09 to 14`

## 2026-10-01 (55)

### Changed

- Renumbered the `docs/` folders in tens, as the author asked. `01-series` is now `10-series`, `04-style` is `20-style`, `02-book-01` is `30-books/31-book-01` and `03-publishing` is `40-publishing`. `00-project`, `80-research` and `90-templates` are unchanged. Books 2 to 5 will go in `30-books/32-book-02` through `35-book-05`.
- Updated every path reference in `docs/`, `CLAUDE.md`, `publishing/books.json`, the publish script and the tests. Relative links that leave the Book 1 folder gained one extra `../`. Earlier entries in this changelog keep their original paths.
- `publish-draft-books.sh` now names build outputs after the book folder alone: `dist/31-book-01.pdf` and `dist/31-book-01-preview.pdf`, which replace `dist/02-book-01*.pdf`. It also accepts `31-book-01` as a selector.
- ADR area codes and OI numbers are unchanged. `CLAUDE.md` now maps each code to its new folder.

### Files changed

- Folder moves (`git mv`): `docs/10-series/`, `docs/20-style/`, `docs/30-books/31-book-01/`, `docs/40-publishing/`
- Path updates in about 60 Markdown files under `docs/`
- `docs/00-project/decisions/ADR-00-0003-docs-folder-numbering.md` (new)
- `docs/00-project/plans/docs-folder-renumbering-plan.md` (new)
- `docs/README.md`
- `CLAUDE.md`
- `publishing/books.json`
- `publish-draft-books.sh`
- `tests/test_publish_draft_books.sh`
- `tests/test_cover_generator.py`
- `changelog.md`

### Decisions added or changed

- Added `docs/00-project/decisions/ADR-00-0003-docs-folder-numbering.md`.

### Open issues added or closed

- None.

### Commit

- `chore: renumber docs folders in tens and nest books under 30-books`

## 2026-10-01 (54)

### Changed

- Added a single review checklist for Chapter 8's flagged claims: three claims needing confirmation, one citation correction already made, time-sensitive facts to recheck near publication, and decisions for the author.
- Fixed the LaTeX "Float too large for page" warning in the Book 1 build. The involvement-continuum diagram was about 10.8 inches tall at its set width, on a page with 8.4 inches of text height. Its start, end and summary labels moved into the caption, and the figure widths for the continuum (32%), the creative loop (42%) and the abundance diagram (36%) were reduced. Book 1 now builds without warnings, and the continuum page was checked visually.

### Files changed

- `docs/02-book-01/open-issues/OI-0004.md` (new)
- `docs/02-book-01/chapters/chapter-08-ai-and-creativity.md`
- `docs/02-book-01/diagrams/creative-ai-involvement-continuum.mmd`
- `docs/02-book-01/research/chapter-08-bibliography.md`
- `docs/02-book-01/plans/chapter-08-plan.md`
- `changelog.md`

### Decisions added or changed

- None.

### Open issues added or closed

- Added `docs/02-book-01/open-issues/OI-0004.md`.

### Commit

- `docs: add chapter 08 claim-review issue and fix oversized figure`

## 2026-09-30 (53)

### Changed

- Expanded Chapter 8 from about 5,900 to about 15,000 words of prose (before notes) after the author judged the previous revision too dry, missing information and lacking diagrams.
- Added worked prompts and illustrative outputs in all five creative domains, a new three-person opening, a conventional-tool comparison table, a four-jurisdiction copyright table (Australia first), a five-question ownership table, and new subsections on style/voice/likeness and on disclosure, provenance and detection.
- Brought more of both research packages into the text: Deezer's upload trend and fraud figures, Spotify spam removals, WMG/Suno licensing, US case examples, the UK computer-generated-works rule, creator survey and UK testimony figures, a labelled CISAC forecast, the Doshi and Hauser method and figures, the Lee and Chung/Meincke exchange, and the standard definition of creativity.
- Added six Mermaid diagrams, validated with Mermaid CLI and the project PDF renderer.
- Updated the Chapter 8 bibliography with new sources, claim-map rows and recheck items. Corrected the Kandpal et al. deduplication citation: the research packages and previous draft linked a different ACL paper. The corrected PMLR record was confirmed online.
- Flagged for confirmation before publication: the description of the 2025 Bartz v. Anthropic trial ruling, the Australian publicity-right sentence (general legal context without a package source), and the AlDahoul et al. author given names.
- Possible cuts if the chapter is too long: the wedding-toast and family-video asides, the historical-comparisons paragraph, and the effect list in "Ask About Tasks, Not Titles".

### Files changed

- `docs/02-book-01/chapters/chapter-08-ai-and-creativity.md`
- `docs/02-book-01/research/chapter-08-bibliography.md`
- `docs/02-book-01/plans/chapter-08-plan.md`
- `docs/02-book-01/book-01-structure.md`
- `docs/02-book-01/diagrams/creative-ai-involvement-continuum.mmd` (new)
- `docs/02-book-01/diagrams/creative-judgement-loop.mmd` (new)
- `docs/02-book-01/diagrams/creative-abundance-bottleneck.mmd` (new)
- `docs/02-book-01/diagrams/four-questions-inside-ai-stealing.mmd` (new)
- `docs/02-book-01/diagrams/training-generation-retrieval.mmd` (new)
- `docs/02-book-01/diagrams/individual-uplift-group-similarity.mmd` (new)
- `changelog.md`

### Decisions added or changed

- The Chapter 8 plan's "no diagram" note is superseded at the author's request. No new ADR was needed because the existing diagram and callout standards were applied.

### Open issues added or closed

- None. Items needing confirmation are tracked in the bibliography's publication checklist. The author reflection placeholder remains open.

### Commit

- `draft: expand chapter 08 with examples, evidence and diagrams`

## 2026-09-30 (52)

### Changed

- Replaced the 1,603-word Chapter 8 template with a complete research-backed manuscript of approximately 7,400 words including source notes, using both complementary Chapter 8 research packages and Chapters 5–7 for continuity.
- Developed practical workflows across writing, art/image creation, music/audio, video/film and design; reframed effort versus judgement as an iterative creative loop in which craft and execution also contain judgement.
- Added plain-English training, retrieval and memorisation distinctions; separated legal, ethical and economic objections; and added a compact Australia/US/EU/UK copyright comparison.
- Added empirical creativity, fixation and freelance-market evidence; creator and pro-use perspectives; commercial-rights versus copyright guidance; voice/likeness, provenance, accessibility and abundance/discoverability material.
- Added a dedicated Chapter 8 bibliography with claim mapping, source limitations and time-sensitive publication checks. Retained the genuine author-reflection placeholder; no new diagram was necessary.
- Updated the Chapter 8 plan and Book 1 drafting status for detailed author review.

### Files changed

- `docs/02-book-01/chapters/chapter-08-ai-and-creativity.md`
- `docs/02-book-01/research/chapter-08-bibliography.md` (new)
- `docs/02-book-01/plans/chapter-08-plan.md`
- `docs/02-book-01/book-01-structure.md`
- `changelog.md`

### Decisions added or changed

- None; applied the authoritative Chapter 8 plan and existing evidence/style ADRs.

### Open issues added or closed

- None; the genuine author-reflection placeholder remains pending in the manuscript.

### Commit

- This entry accompanies `draft: write research-backed chapter 08`.

## 2026-09-30 (51)

### Changed

- Corrected Chapter 7 to end with Core Takeaway and Chapter Notes; removed its recap, recap callout and next-chapter preview.
- Added three original Mermaid diagrams tied to the meeting, customer-support and workday-test examples.
- Developed hiring and staff-training examples and reader exercises to make the workplace guidance easier to apply.
- Published and visually checked all three figures in the full book. Corrected an oversized timing figure; the final build and publication integration test pass without warnings. Markdown lint and the focused Mermaid renderer test pass.

### Files changed

- `docs/02-book-01/chapters/chapter-07-ai-at-work.md`
- `docs/02-book-01/plans/chapter-07-plan.md`
- `docs/02-book-01/research/chapter-07-bibliography.md`
- `docs/02-book-01/diagrams/meeting-estimate-versus-commitment.mmd` (new)
- `docs/02-book-01/diagrams/support-draft-and-authority.mmd` (new)
- `docs/02-book-01/diagrams/workday-test-completion-time.mmd` (new)
- `changelog.md`

### Decisions added or changed

- Applied the author's explicit correction to the chapter ending and diagram requirements; updated the chapter plan to supersede its earlier scope.

### Open issues added or closed

- None; the genuine author-reflection placeholder remains.

### Commit

- This entry accompanies `draft: improve chapter 07 diagrams and workplace examples`.

## 2026-09-30 (50)

### Changed

- Replaced the Chapter 7 template with a full research-backed manuscript of approximately 8,470 words before source notes, using both complementary research packages and Chapter 6 for continuity.
- Developed all eight workplace example categories, including an original meeting with raw notes, structured record, conditional assignments and subtle failure checks; added testable spreadsheet logic and whole-workflow productivity measurement.
- Preserved positive, negative and limited productivity findings, junior/expert differences and creativity/diversity evidence. Kept confidentiality, account approval and verification practical and proportionate.
- Added a dedicated bibliography with claim mappings, evidence types, study-version reconciliation, current product/policy checks and access limitations. Retained one author-reflection placeholder; no diagram was needed.
- Updated the existing chapter plan and drafting status for detailed author review.

### Files changed

- `docs/02-book-01/chapters/chapter-07-ai-at-work.md`
- `docs/02-book-01/research/chapter-07-bibliography.md` (new)
- `docs/02-book-01/plans/chapter-07-plan.md`
- `docs/02-book-01/book-01-structure.md`
- `changelog.md`

### Decisions added or changed

- None; applied the approved chapter plan and existing evidence/style ADRs.

### Open issues added or closed

- None; genuine author reflection remains pending in the manuscript.

### Commit

- pending commit

## 2026-09-30 (49)

### Changed

- "BOOK 1" (and the back-cover "BOOK n • THEME") is now centred on its visible letters inside the pill, both ways. It previously sat 6 px high and looked left-shifted because of the empty space built into the "1" glyph.
- The gold seal text block is now vertically centred exactly (it was about 4 px high).
- Added a regression test for badge text centring.
- Confirmed the pill and seal are vector paths in the PDF (no raster edges); the illustration is the only image.

### Files changed

- `scripts/cover_generator.py`
- `tests/test_cover_generator.py`
- `changelog.md`

### Decisions added or changed

- None.

### Open issues added or closed

- None.

### Commit

- pending commit

## 2026-09-30 (48)

### Changed

- Front and back covers are now drawn as vector PDF: circles, badges, rules and bars are PDF shapes, and all text uses embedded Arial. They stay sharp at any zoom and in print. The illustration is the only image and is embedded at source resolution (the Book 1 octopus prints at about 459 ppi).
- The cover PDFs no longer reference unembedded Helvetica.
- The author name now sits between the two accent rules, vertically centred on them, on both covers.
- Cover PNGs and previews are rasterised from the vector PDF with `pdftoppm`, which `publish-draft-books.sh` now requires.
- Added tests for vector output (one image on the front, none on the back, fonts embedded) and for the name placement; the integration test now expects a vector back cover.

### Files changed

- `scripts/cover_generator.py`
- `tests/test_cover_generator.py`
- `tests/test_publish_draft_books.sh`
- `publish-draft-books.sh`
- `docs/03-publishing/decisions/ADR-03-0002-data-driven-series-covers.md`
- `docs/03-publishing/plans/vector-cover-rendering-plan.md` (new)
- `docs/03-publishing/open-issues/OI-0005.md` (new)
- `changelog.md`

### Decisions added or changed

- Amended ADR-03-0002: vector cover output and the centred author-name rule.

### Open issues added or closed

- Added `docs/03-publishing/open-issues/OI-0005.md`: print readiness of the assembled book (unembedded Helvetica on generated notice pages, bleed, colour space, wrap-around cover, review wording on public previews).

### Commit

- pending commit

## 2026-09-30 (47)

### Changed

- Cut-out (transparent) cover art now fills all the clear space between the subtitle and the author name, making the Book 1 octopus about 25% larger. A full 50% would overlap the subtitle or author name.
- The front-cover descriptor badge is now a gold seal across the series. The Book 1 wording "No technical skills required" is kept, not replaced with "First Edition".

### Files changed

- `scripts/cover_generator.py`
- `docs/03-publishing/decisions/ADR-03-0002-data-driven-series-covers.md`
- `docs/03-publishing/plans/transparent-cover-illustration-plan.md`
- `changelog.md`

### Decisions added or changed

- Amended ADR-03-0002: cut-out art sizing and the gold descriptor seal.

### Open issues added or closed

- None.

### Commit

- pending commit

## 2026-09-30 (46)

### Changed

- Cover illustrations with a transparent background are now shown whole on white: empty margins are trimmed and the subject is fitted inside the picture band instead of being fill-cropped. Previously transparent areas rendered black and tall art lost its top and bottom.
- Cut-out illustrations skip the white top fade and the accent side bars; fully opaque (full-bleed) illustrations render exactly as before.
- Added the Book 1 octopus cover illustration (`assets/covers/book-01.png`, 1800 x 2700 transparent PNG).
- Added a unit test for transparent cover art.

### Files changed

- `scripts/cover_generator.py`
- `tests/test_cover_generator.py`
- `assets/covers/book-01.png` (new)
- `docs/03-publishing/decisions/ADR-03-0002-data-driven-series-covers.md`
- `docs/03-publishing/plans/transparent-cover-illustration-plan.md` (new)
- `changelog.md`

### Decisions added or changed

- Amended ADR-03-0002: cut-out (transparent) illustrations are fitted whole on white without the fade or side bars.

### Open issues added or closed

- None.

### Commit

- pending commit

## 2026-09-29 (45)

### Changed

- Rewrote Chapter 6 as a complete research-backed household chapter using both complementary research packages and the approved Chapter 6 plan.
- Added original contextual requests across all eight practical areas, a worked meal-plan/refinement example, meaningful accessibility coverage, and proportionate guidance on offloading and judgement.
- Added chapter endnotes and a dedicated bibliography with claim mapping, source limits, live verification notes, corrected nutrition author order, a changed product-link exclusion and the retracted-paper exclusion.
- Represented the author's stated first-hand education-research motivation without inventing the underlying conversations; no diagram was needed.
- Updated drafting status and the existing plan with the revision scope and review record. Preserved the user-added research packages and unrelated `.DS_Store` change.
- Expanded Chapter 6 again after author review from a careful but overly antiseptic treatment to approximately 7,700 reader-facing words before endnotes, bringing the research data and competing judgements into the prose.
- Added a substantial university, TAFE and Free TAFE decision case with current Australian outcomes, completion figures, the invalid cumulative-ratio trap, arguments from both ends and an extended ChatGPT pathway-comparison workflow.
- Added a practical fit-for-purpose comparison of ChatGPT, Claude, Gemini, Perplexity, Microsoft Copilot and DeepSeek, using ChatGPT as the main beginner example without claiming a permanent universal ranking.
- Removed the standalone Chapter Recap and Chapter Preview so Chapter 6 now ends consistently with the other Book 1 chapters: Core Takeaway followed by Chapter Notes.
- Extended the real-world evidence and examples for meals, travel, writing, parenting, tutoring and AI-search behaviour, and rewrote Myth vs Reality as explicit competing claims readers can judge.

### Files changed

- `docs/02-book-01/chapters/chapter-06-ai-at-home.md`
- `docs/02-book-01/research/chapter-06-bibliography.md` (new)
- `docs/02-book-01/plans/chapter-06-plan.md`
- `docs/02-book-01/book-01-structure.md`
- `changelog.md`

### Decisions added or changed

- None. Applied the existing structure, style and evidence ADRs.

### Open issues added or closed

- None. The planned author-reflection placeholder remains for the author.

### Commit

- pending commit

## 2026-09-24 (44)

### Added

- Reviewed the Astro launch site's existing privacy and terms pages, data flows,
  form handling, Cloudflare/D1/Turnstile integration, dormant Stripe checkout,
  preview redirect, and retailer-link configuration.
- Added a fill-in legal-policy questionnaire covering the factual, operational,
  privacy, marketing, consumer-law, fulfilment, refund, licensing, liability,
  and dispute details needed to draft complete replacement policies without
  inventing missing information.
- Included a strict ChatGPT handoff prompt that stops on unresolved blockers,
  separates current from planned behaviour, preserves supplied facts verbatim,
  and returns clean Markdown for the two Astro routes.

### Files changed

- `wwwroot/legal-policy-questionnaire.md` (new)
- `changelog.md`

### Decisions added or changed

- None.

### Open issues added or closed

- None. Unresolved policy facts are intentionally collected in the questionnaire.

### Commit

- pending commit

## 2026-09-24 (43)

### Added

- Recorded the publisher and National Library catalogue metadata discussion as ADR-03-0006: RePass Cloud Pty Ltd is the publisher (full legal name), How To Use AI.com is the imprint and series, each book keeps its own title and series number, and Book 1's NLA values are listed (General audience, Non-fiction genre, eBook — PDF, first edition). It also gives a copyright-page template.
- Opened OI-0004 for the values still to settle: the final title, the exact series wording, the ISBN, price, month, life dates, the copyright holder, and the publisher category.
- Deleted the source discussion file at the author's request. Its content is captured in ADR-03-0006.

### Files changed

- `docs/03-publishing/decisions/ADR-03-0006-publisher-imprint-and-catalogue-metadata.md` (new)
- `docs/03-publishing/open-issues/OI-0004.md` (new)
- `docs/03-publishing/how-to-use-ai-publisher-metadata-discussion.md` (removed; it was never committed)
- `changelog.md`

### Decisions added or changed

- Added `ADR-03-0006`.

### Open issues added or closed

- Opened `docs/03-publishing/open-issues/OI-0004.md`.

### Commit

pending commit

## 2026-09-24 (42)

### Changed

- Implemented the launch site SEO fixes plan, applying the resolved OI-0003 recommendations:
  - HTTP on the production host now `301`s to HTTPS, and `http://www.` goes straight to `https://how-to-use-ai.com` in one hop.
  - HTML responses send `charset=utf-8`, and HTTPS responses send HSTS (1 year, no preload).
  - The layout links `favicon.svg` and a new 180×180 `apple-touch-icon.png`, and adds `og:image` (the Book 1 cover).
  - The homepage has a longer title and a new "Who this is for" section (word count now over 250, and the H1's terms are reused). The series titles use a styled span instead of `<strong>`, bringing the homepage to 2 bold tags.
- Verification: `npm test` (60 passed), `npm run check` (0 errors), and `npm run build` all pass. A local `astro preview` confirmed the charset header, the 56-character title, both icon links, 2 bold tags, and about 355 words.

### Files changed

- `wwwroot/src/lib/canonical-host.ts`
- `wwwroot/src/lib/response-headers.ts` (new)
- `wwwroot/src/middleware.ts`
- `wwwroot/src/layouts/BaseLayout.astro`
- `wwwroot/src/pages/index.astro`
- `wwwroot/src/styles/global.css`
- `wwwroot/public/apple-touch-icon.png` (new)
- `wwwroot/tests/canonical-host.test.ts`
- `wwwroot/tests/response-headers.test.ts` (new)
- `docs/03-publishing/plans/site-seo-fixes-plan.md`
- `docs/03-publishing/open-issues/OI-0003.md`
- `changelog.md`

### Decisions added or changed

- None (the choices are recorded as the resolution of OI-0003).

### Open issues added or closed

- Closed `docs/03-publishing/open-issues/OI-0003.md`.

### Commit

- pending commit

## 2026-09-24 (41)

### Changed

- Reviewed the Seobility on-page check of the launch site homepage (81%, one critical issue) against production (`curl`) and `wwwroot/src`. Confirmed findings: plain HTTP is served with `200` instead of redirecting to HTTPS, the HTML `Content-Type` has no charset, `favicon.svg` exists but is not linked, there is no Apple touch icon, the homepage title is only the site name, the H1 terms are not reused in the body, and the homepage is under 250 words. Wrote a prioritised fix plan. No site code changed yet; awaiting author review.

### Files changed

- `docs/03-publishing/plans/site-seo-fixes-plan.md` (new)
- `docs/03-publishing/open-issues/OI-0003.md` (new)
- `changelog.md`

### Decisions added or changed

- None.

### Open issues added or closed

- Added `docs/03-publishing/open-issues/OI-0003.md` — homepage title, homepage copy, external links, social sharing, HSTS preload.

### Commit

- pending commit

## 2026-09-24 (40)

### Changed

- Replaced the Chapter 1 fraud-detection diagram placeholder with a real Mermaid diagram. It puts a normal travel pattern (Sydney → Parramatta → Chatswood → payment approved) beside an abnormal one (Sydney → Singapore 20 minutes later → impossible travel → fraud risk flagged). It follows the existing `.mmd` image-reference convention, so the publishing pipeline renders it to a vector PDF.
- Verification: `mmdc` renders the diagram; `scripts/render_mermaid_diagrams.py` resolves the Chapter 1 reference; `tests.test_render_mermaid_diagrams` passes.

### Files changed

- `docs/02-book-01/diagrams/fraud-detection-travel-pattern.mmd` (new)
- `docs/02-book-01/chapters/chapter-01-youve-already-been-using-ai.md`
- `docs/02-book-01/plans/chapter-01-plan.md`
- `changelog.md`

### Decisions added or changed

- None.

### Open issues added or closed

- None.

### Commit

- pending commit

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
