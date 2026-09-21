# Changelog

All meaningful project changes should be recorded here.

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
