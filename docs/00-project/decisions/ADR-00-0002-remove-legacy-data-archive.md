# ADR-00-0002: Remove the legacy-data archive

## Status

Accepted

## Context

`./legacy-data/` held four exported chat/research files plus a README. Per
`CLAUDE.md`'s legacy data tracking table, all four substantive files had
already been reconciled into current `./docs` sources:

- `book1_ai_literacy_context_reference.md` -> reconciled into
  `docs/01-series/series-structure.md` and
  `docs/02-book-01/decisions/ADR-02-0001-book-01-structure.md`.
- `book1-part1-chapter1-draft.md` -> migrated into
  `docs/02-book-01/chapters/chapter-01-youve-already-been-using-ai.md`.
- `how-to-use-ai-book-chat-handoff.md` -> reviewed; the tenancy-tribunal
  scenario extracted to `docs/02-book-01/research/research-note-johnny-tribunal-scenario.md`,
  and a conflicting series-arc claim flagged in
  `docs/01-series/open-issues/OI-0002.md`.
- `copilot_forced_ai_transcript_research_notes.md` -> moved into
  `docs/02-book-01/research/research-note-copilot-forced-ai.md`.

With nothing left unreconciled, the archive was pure duplication of material
that now lives, with proper caveats, under `./docs`.

## Decision

Delete `./legacy-data/` (all files, including its `README.md`) from the
repository. Current `./docs` files remain the single source of truth for
this material; there is no remaining unreconciled legacy content to protect
by keeping the archive.

## Consequences

- Anyone looking for the original exported chat material should look in git
  history (pre-removal commits) rather than a live `legacy-data/` directory.
- Future legacy exports, if any, should go back into a `legacy-data/`
  directory following the same reconciliation process before being removed
  again.
- No open issues or ADRs referencing legacy-data as a live path need updates;
  they already point at the reconciled `docs/` destinations.
