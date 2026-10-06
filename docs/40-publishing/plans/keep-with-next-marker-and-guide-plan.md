# Keep-With-Next Marker and Writing and Building Guide Plan

## Purpose

On 2026-10-06 the author asked to:

1. add the soft "keep with next" marker (described as a fallback in `heading-keep-together-plan.md`) to the build, and document it;
2. write a plain-English guide covering everything needed to write and build the books, readable without any code knowledge;
3. commit to `main`.

These are direct requests, so the work proceeds without a separate review stop.

## Files Expected to Change

- `publishing/pandoc/book.lua`: turns `<!-- keep-with-next -->` (with an optional line count) into `\hwKeepWithNext` for PDF and drops it from EPUB.
- `publishing/latex/howto-book.tex`: the `\hwKeepWithNext` command.
- `tests/test_book_lua_keep_headings.py`: tests for the marker.
- `README.md` (new, repository root): the writing and building guide.
- `CLAUDE.md`: lists `README.md` as a file-name exception and points to the guide.
- `docs/40-publishing/decisions/ADR-03-0013-keep-with-next-marker.md` (new).
- `changelog.md`.

No chapter files change: no current page needs the marker.

## Dependencies

- ADR-03-0009 (layout rules), ADR-03-0001 (Markdown source), ADR-04-0004 (reflection markup), ADR-04-0006 (chapter endings), ADR-03-0007 (index), ADR-03-0012 (editions).
- No OIs.

## Risks

- The guide can drift from the build. It names the files that are the real source of truth for each topic, so readers can check.
- A marker written inline (no blank lines around it) is not recognised and is silently ignored. The guide says to put it on a line of its own.

## Acceptance Criteria

- The marker produces `\hwKeepWithNext{n}` in the LaTeX through the full build pipeline and leaves no trace in the EPUB.
- All unit tests pass.
- The guide covers the folders, chapter markup, callouts, reflections, diagrams and images, notes, chapter endings, layout control, front and back matter, `books.json`, the index, building, checking proofs and troubleshooting.

## Proposed Commit Message

```text
publishing: add keep-with-next marker and writing and building guide
```
