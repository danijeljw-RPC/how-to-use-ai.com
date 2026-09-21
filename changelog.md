# Changelog

All meaningful project changes should be recorded here.

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
