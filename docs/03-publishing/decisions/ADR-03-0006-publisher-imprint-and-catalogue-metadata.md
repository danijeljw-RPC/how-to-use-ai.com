# ADR-03-0006 — Publisher, Imprint, and National Library Catalogue Metadata

## Status

Accepted

## Date

2026-09-24

## Area

Publishing

## Context

The author is preparing the National Library of Australia (NLA) prepublication and legal deposit details for Book 1 ahead of publication. The form asks for publisher details (contact name, email, publisher name, publisher imprint, publisher category, address), publication details (title, subtitle, series title, series number, ISBN, edition, format, estimated retail price, expected year and month, audience, genre, summary, subjects), and creator details (name, life dates, role).

The questions were:

- What is the difference between a publisher name and a publisher imprint?
- Should the publisher be the author as an individual, or the author's company?
- If it's the company, should the publisher name be "RePass Cloud Pty Ltd" or "RePass Cloud"?
- How should "How To Use AI.com" be used: as the title, the series title, the imprint, or a mix of these?

The discussion took place on 2026-09-24 in a chat outside this repository. It was saved as `docs/03-publishing/how-to-use-ai-publisher-metadata-discussion.md`, and this ADR replaces that file. The discussion's advice first assumed self-publishing as an individual. The author then chose to publish through their company, and the final recommendation below reflects that choice.

## Decision

### Publishing hierarchy

The following roles are kept separate:

```text
Author
    └── Danijel-James Wynyard-McClay

Publisher (legal entity)
    └── RePass Cloud Pty Ltd

Publishing imprint (brand)
    └── How To Use AI.com

Series
    └── How To Use AI.com

Book
    ├── Book-specific title and subtitle
    ├── Series number
    ├── Edition
    └── ISBN (one per format)
```

- **Publisher name:** `RePass Cloud Pty Ltd`. Always use the full legal company name, never just "RePass Cloud". The NLA defines a publisher as the person or organisation making the work available to the public, so a company can be the publisher.
- **Publisher imprint:** `How To Use AI.com`. An imprint is the publishing brand shown on the book. It doesn't need its own company.
- **Publisher category:** Company/organisation, or the closest corporate or business option the form offers. Don't use "Individual / Self".
- **ISBN registration:** Register and buy ISBNs under `RePass Cloud Pty Ltd` as well, so the publisher name matches across the ISBN and NLA records.
- **Author:** The author is listed as the creator, with the role **Author**, separately from the publisher.

### Title hierarchy

"How To Use AI.com" is the imprint and the series title. It is **not** the title of each book. Each volume has its own title and subtitle plus a series number, so the series catalogues as five distinct books rather than five books with the same title (for example, `How To Use AI.com ; 2` for Book 2).

The metadata must follow what actually appears on each book's title page and cover, because cataloguers work from the publication itself. If a cover design ever puts "HOW TO USE AI.COM" forward as the main title, this ADR must be revisited.

### Book 1 catalogue values

| Field | Value |
| --- | --- |
| Title | AI for Normal People (working title, see ADR-02-0001; confirm before submission) |
| Subtitle | Understanding Artificial Intelligence Without the Hype (from `publishing/books.json`) |
| Series title | How To Use AI.com (exact wording open, see OI-0004) |
| Series number | 1 |
| ISBN | The ISBN assigned to this specific format (pending) |
| Edition | First edition |
| Format | eBook — PDF |
| Estimated retail price | Intended Australian retail price (pending) |
| Expected year | 2026 |
| Expected month | Intended publication month (pending) |
| Audience | General |
| Genre | Non-fiction (not "Non-fiction + textbook") |
| Subject 1 | Technology, Engineering, Agriculture |
| Subject 2 | Computing & Information Technology |

Reasons:

- **Audience: General.** Book 1 is written for non-specialist readers who may never have used AI. It is not an academic textbook.
- **Genre: Non-fiction.** "Textbook" would suggest a more formal, academic teaching work than this book is.

### Creator values

| Field | Value |
| --- | --- |
| Name | The author name used on the publication |
| Life dates | Birth year, if supplied, in the form `YYYY–` for a living person (open, see OI-0004) |
| Role | Author |

Life dates are used in bibliographic records to tell apart authors with the same or similar names, for example `Surname, Given names, 1980–`.

### Copyright page wording

The NLA recommends putting the publisher, publication date, copyright notice, and ISBN in the publication itself. Base the copyright/imprint page on this template:

```text
© 2026 [Author name]

First published in Australia in 2026 by How To Use AI.com,
an imprint of RePass Cloud Pty Ltd.

ISBN 978-X-XXXXXX-XX-X

All rights reserved.
```

The copyright holder (the author or the company) is not decided in the discussion. The template shows the author, and that choice should be confirmed before the page is typeset (see OI-0004).

## Options Considered

### Option 1 — Company publisher, "How To Use AI.com" imprint and series, per-book titles (chosen)

Pros:

- The legal publishing entity is unambiguous and matches ISBN registration.
- Reuses the existing series and website brand instead of inventing a new imprint.
- Each volume catalogues as a distinct book in a numbered series.

Cons:

- The same wording is used for the imprint and the series. This is allowed, but the catalogue record repeats the name.

### Option 2 — Author as an individual publisher, "How To Use AI.com" imprint

Pros:

- Simplest form entry, with no company details needed.

Cons:

- Doesn't match the author's intent to publish through RePass Cloud Pty Ltd.

### Option 3 — "How To Use AI.com" as the title of every book

Pros:

- Strongest brand repetition on every catalogue record.

Cons:

- Five books with the same main title are hard to tell apart in catalogues and ISBN records.
- Doesn't match the current covers, which lead with each book's own title.

## Consequences

Positive:

- The NLA form, ISBN registration, copyright page, PDF metadata, website, and covers can all use one consistent set of values.

Negative or trade-offs:

- Several values (ISBN, price, month, life dates, final title, exact series wording) must still be settled before submission. They are tracked in OI-0004.
- Every later book must repeat the same publisher, imprint, and series values, with its own title and series number.

## Impacted Files or Areas

- The NLA prepublication and legal deposit submission (outside this repository)
- ISBN registration (outside this repository)
- Front matter and copyright page for Book 1 (not yet created)
- PDF metadata produced by `publish-draft-books.sh` and `scripts/assemble_draft_book.py`
- `publishing/books.json` (series and book titles)
- Website copy that names the publisher

## Related Open Issues

- `docs/03-publishing/open-issues/OI-0004.md` (remaining catalogue metadata values)
- `docs/02-book-01/decisions/ADR-02-0001-book-01-structure.md` (Book 1 working title)

## References

1. National Library of Australia — Legal deposit questions and answers: <https://www.library.gov.au/services/publishers-and-self-publishers/legal-deposit/legal-deposit-questions-and-answers>
2. National Library of Australia — International Standard Book Number (ISBN): <https://www.library.gov.au/services/publishers-and-self-publishers/international-standard-book-number-isbn>
3. National Library of Australia — General prepublication data: <https://www.library.gov.au/services/publishers-and-self-publishers/prepublication-data-service/general-prepublication-data>
4. National Library of Australia — Monograph cataloguing guidance (archived): <https://pandora.nla.gov.au/manual/monocat.html>
5. National Library of Australia / Trove — Recent Australian Publications (example listing): <https://trove.nla.gov.au/sites/default/files/attachments/2024-10/Recent%20Australian%20Publications%20June%202024%20%E2%80%93%20Alphabetic.pdf>

These links came from the chat discussion. They were not re-checked when this ADR was written.

## Review Notes

Record author review notes here.
