# Docs Folder Renumbering Plan

## Purpose

Renumber the `docs/` areas in tens, with books nested under `30-books`, as
requested by the author on 2026-10-01. The author asked for this to be done
directly on `book01/chap08` without a separate review stop.

## Files expected to change

- Folder moves: `01-series`, `02-book-01`, `03-publishing` and `04-style`
  (see ADR-00-0003 for the mapping).
- Path references in about 60 Markdown files under `docs/`.
- `CLAUDE.md` and `docs/README.md`.
- `publishing/books.json`, `publish-draft-books.sh`,
  `tests/test_publish_draft_books.sh` and `tests/test_cover_generator.py`.
- `changelog.md`.

## Dependencies

- ADRs: ADR-00-0003 (this change) and ADR-00-0001 (working method).
- OIs: none.

## Risks

- ADR file names such as `ADR-04-0002-book-01-…` contain the substring
  `02-book-01`. Only matches without a letter or digit immediately before them
  were replaced.
- Relative links that leave the Book 1 folder need one extra `../`.
- Build output names change from `dist/02-book-01*` to `dist/31-book-01*`.

## Acceptance criteria

- No old folder names are referenced outside historical changelog entries and
  ADR IDs.
- Every relative Markdown link under `docs/` resolves.
- `bash -n publish-draft-books.sh` passes, and the selector resolves
  `31-book-01` to Book 1.
- `tests/test_cover_generator.py` passes.

## Proposed commit message

`chore: renumber docs folders in tens and nest books under 30-books`
