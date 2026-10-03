# OI and ADR Close-Out Pass (2026-10-03)

## Purpose

Review every open OI and every ADR still marked Proposed, and close the ones that have actually been resolved. Several were settled in practice, or by the author, without the file being updated. The author asked for this pass and approved it, with all changes going into one commit.

## Detected Changes Since the Last Run

The working tree was clean at 380e6a8. The audit relied on these recent author commits: 5405151 (Chapter 1 Spotify passage rewritten, placeholder removed), 3a30f95 (author reflections, including Chapter 8's), c1b5657 (research-backed Chapter 14) and f1170df (preview download URL set).

## Author Answers (2026-10-03)

- Book 1 title confirmed: *AI for Normal People*, subtitle *Understanding Artificial Intelligence Without the Hype*.
- Profanity in author reflections: keep as written.
- Chapter 3 CurseDelete reflection: keep as written.
- Chapter 4 and Chapter 12 database stories: leave open, because the author doesn't want repetition.
- Chapter 1 myth table: convert later, so OI-0003 stays open.
- Preview edition wording: approved as it is.
- Author name: the full surname "Wynyard-McClay" is used everywhere. The author typed "Wynard-McClay". This is assumed to be a typo, because their own copyright line and the website use "Wynyard-McClay".
- Release build: white paper, no printed price, endorsements omitted, Option B illustrations, hardcover later, and a hand-curated references list.

## Files Expected to Change

- ADRs accepted: ADR-00-0001, ADR-04-0001, ADR-02-0001, ADR-03-0001, ADR-03-0007
- ADR amended: ADR-03-0006 (author name and confirmed title)
- New ADR: ADR-04-0005 (strong language in author reflections)
- OIs closed: Book 1 OI-0001, OI-0002, OI-0006, OI-0007, OI-0008; style OI-0001; publishing OI-0001, OI-0002, OI-0007, OI-0008
- OIs updated but left open: Book 1 OI-0004 (Chapter 8 reflection item ticked); publishing OI-0004 (answers so far)
- `publishing/books.json` (`series.author`)
- `docs/30-books/31-book-01/book-01-structure.md`, `docs/10-series/series-structure.md` (title confirmed)
- `docs/20-style/style-guide.md` (strong-language rule)
- `changelog.md`

## Left Open Deliberately

- Book 1 OI-0003 (Chapter 1 myth table): to be converted later.
- Book 1 OI-0004 and OI-0005 (Chapter 8 and Chapter 11 fact checks): pre-publication checks still pending.
- Book 1 OI-0009 (database stories): the author doesn't want repetition.
- Publishing OI-0004 (NLA metadata): series wording, retail price for the NLA form, life dates and publisher category are still open.
- Publishing OI-0005 (print readiness): waiting on KDP and IngramSpark proof results.
- Publishing OI-0006 (index term review): not yet reviewed.

## Dependencies

- ADR-04-0002 supersedes Book 1 OI-0001.
- ADR-03-0008 answers OI-0007 items 17 and 18.

## Risks

- The author-name assumption ("Wynyard", not "Wynard"). The author confirmed "Wynyard-McClay" later the same day.
- Accepting the 2026-05-18 ADRs records current practice. It does not re-review their content.

## Acceptance Criteria

- Every closed file has a filled Resolution and the closing date 2026-10-03.
- No manuscript chapter text changes.
- One commit.

## Proposed Commit Message

`docs: close out resolved OIs and accept implemented ADRs`
