# `publishing/books.json` Field Reference

`publishing/books.json` is the single source for cover, front-matter, back-cover and release metadata (ADR-03-0002, ADR-03-0008). JSON can't hold comments, so this file explains each field.

## The Empty-String Rule

Any optional text left as `""`, any empty list `[]`, and any object whose fields are all empty is **left out of every edition**, along with its page or block. For example:

- `"bio": ""` → no About the Author text.
- `"photo": ""` → no author photo on the back cover or the About the Author page.
- An endorsement with `"quote": ""` is skipped even if `"attribution"` is filled in. If every endorsement is empty, the endorsements block disappears.
- `"price": {"AUD": "", "USD": ""}` → no printed price on the back cover. The barcode still carries the price code.

`scripts/book_metadata.py` applies this rule once, so every renderer sees only what should print. To see the result for a book:

```text
python3 scripts/book_metadata.py --config publishing/books.json --book-number 1
```

To see what still blocks a real release:

```text
python3 scripts/book_metadata.py --config publishing/books.json --book-number 1 \
  --check paperback,pdf,epub docs/30-books/31-book-01/chapters/*.md
```

## `series` (shared by every book)

| Field | Meaning |
| --- | --- |
| `title`, `descriptor`, `tagline`, `website` | Existing series branding, used on draft covers. |
| `author` | Author name as printed. |
| `about` | About the Series text (back of the book). |
| `authorProfile.photo` | Path to the author photo, relative to the repository root. Default: `assets/author/author-photo.jpg`. |
| `authorProfile.shortBio` | About 50 words, for the back cover. |
| `authorProfile.bio` | About 120–180 words, for the About the Author page. |
| `authorProfile.website` | Optional personal link printed under the long bio. |
| `publisher.name` | Legal publisher: `RePass Cloud Pty Ltd` (ADR-03-0006). |
| `publisher.imprint` | Imprint on the title and copyright pages: `How To Use AI.com`. |
| `publisher.address` | Optional address for the copyright page. |
| `publisher.website` | Website printed on the title page and covers. |
| `defaultPriceCode` | Five-digit barcode add-on used when a book sets none. `90000` means "no price encoded". |
| `print.trimWidthInches`, `print.trimHeightInches` | Paperback trim: 7.5 × 9.25 in. |
| `print.bleedInches` | Cover bleed: 0.125 in. |
| `print.interiorInk` | `black-and-white` for the paperback. PDF and EPUB stay in colour. |
| `print.paper` | `white` or `cream`. |
| `print.printers.kdp` / `print.printers.ingramspark` | Per-printer settings. Set `enabled: false` to skip that printer's cover. |
| `…paperCaliperInches` | Paper thickness per page, used for the spine: spine = page count × caliper. These are starting values to check against each printer's own calculator. |
| `…minimumPagesForSpineText` | Below this page count the spine is left blank. |
| `…spineWidthOverrideInches` | Leave `""` to calculate. Fill in when the printer's cover template states an exact spine width. |
| `page`, `coverArtwork`, `illustration` | Existing draft-cover settings (7 × 10 in draft pages). |

## `books[]` (one per volume)

| Field | Meaning |
| --- | --- |
| `number`, `sourceDirectory`, `title`, `description`, `descriptor`, colours, `image`, `theme` | Existing fields. `description` is the subtitle. |
| `dedication.text` | Dedication page. `\n\n` starts a new paragraph. |
| `epigraph.quote`, `epigraph.author` | Epigraph page. |
| `copyright.holder` | Name after the © on the copyright page (OI-0004, item 7). |
| `copyright.year` | Copyright year. |
| `copyright.edition` | For example `First edition`. |
| `copyright.publicationMonth` | For example `November`. Printed as "First edition, November 2026". |
| `editions.paperback.isbn` | Paperback ISBN-13. Digits with or without hyphens; the check digit is verified. The same ISBN is used for KDP and IngramSpark. |
| `editions.paperback.isbnDisplay` | The hyphenated form exactly as Thorpe-Bowker issued it, for example `978-0-6451234-0-8`. Printed on the copyright page and above the barcode. If empty, plain digits are printed. |
| `editions.paperback.priceCode` | Barcode add-on for this book. Empty → `series.defaultPriceCode` (`90000`). |
| `editions.paperback.price.AUD`, `.USD` | Optional printed prices on the back cover, for example `"34.99"`. |
| `editions.pdf.isbn`, `editions.epub.isbn` (+ `isbnDisplay`) | ISBNs for the PDF ebook and the EPUB. The EPUB ISBN is also written into the EPUB metadata. |
| `backCover.category` | Shelving line at the top of the back cover, for example `Technology / Artificial intelligence`. |
| `backCover.summary` | List of paragraphs for the back-cover description. |
| `backCover.highlightsLead` | Line before the bullet list, for example `In this book you'll learn how to:`. |
| `backCover.highlights` | List of bullet points. |
| `backCover.endorsements` | List of `{ "quote", "attribution" }`. Only print quotes you have permission to use. |

## Author Photo

- **File name:** `assets/author/author-photo.jpg` (the default in `series.authorProfile.photo`). Any name works if you change that field to match.
- **Format:** JPG (or PNG), sRGB colour. The build converts it to greyscale for the black-and-white interior and keeps colour on the cover, PDF and EPUB.
- **Size:** at least 1200 × 1500 px (portrait, 4:5), head and shoulders, plain background. That is 300 DPI or better at the largest printed size.
- A real release build fails if the field names a file that doesn't exist. Set it to `""` to print no photo.
