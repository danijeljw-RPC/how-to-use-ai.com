# ADR-00-0003: Renumber `docs/` folders in tens

## Status

Accepted (2026-10-01, requested by the author)

## Context

The `docs/` areas were numbered sequentially (`00-project`, `01-series`,
`02-book-01`, `03-publishing`, `04-style`) and then jumped to `80-research`
and `90-templates`. Sequential numbering left no room to insert areas, and
Book 1 sat at the same level as project-wide areas even though four more
books are planned.

## Decision

Top-level areas use tens. A sub-area inside an area takes the next unit
number of its parent. `80-` and `90-` stay as they are.

| Old | New |
|---|---|
| `00-project` | `00-project` (unchanged) |
| `01-series` | `10-series` |
| `04-style` | `20-style` |
| `02-book-01` | `30-books/31-book-01` |
| `03-publishing` | `40-publishing` |
| `80-research` | `80-research` (unchanged) |
| `90-templates` | `90-templates` (unchanged) |

Books 2 to 5 get `30-books/32-book-02` through `30-books/35-book-05` when
they are created. `publishing/books.json` already points at those paths.

ADR area codes (`ADR-00`, `ADR-01`, `ADR-02`, `ADR-03`, `ADR-04`) and OI
numbers are **not** changed. They are identifiers, not folder names, and
renaming them would break hundreds of cross-references and the history
recorded in `changelog.md`. `CLAUDE.md` maps each area code to its new folder.

## Consequences

- All folders were moved with `git mv`, so file history is preserved.
- Paths were updated in `docs/`, `CLAUDE.md`, `publishing/books.json`,
  `publish-draft-books.sh` and `tests/`. Relative links that leave the Book 1
  folder gained one extra `../` because it is now one level deeper.
- Historical `changelog.md` entries keep their original paths. They describe
  what was true at the time.
- `publish-draft-books.sh` names build outputs after the book folder alone:
  `dist/31-book-01.pdf` and `dist/31-book-01-preview.pdf`, which replace
  `dist/02-book-01*.pdf`. Either `31-book-01` or `30-books/31-book-01` can be
  used as a selector.
