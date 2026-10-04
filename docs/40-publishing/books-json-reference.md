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
| `publisher.imprint` | Imprint on the title and copyright pages. Empty: How-To-Use-AI.com is the series, not an imprint (ADR-03-0006, 2026-10-02 amendment). |
| `publisher.address` | Optional address for the copyright page. |
| `publisher.website` | Website printed on the title page and covers. |
| `defaultPriceCode` | Five-digit barcode add-on used when a book sets none. `90000` means "no price encoded". |
| `print.trimWidthInches`, `print.trimHeightInches` | Paperback trim: 7.5 × 9.25 in. |
| `print.bleedInches` | Cover bleed: 0.125 in. |
| `print.interiorInks` | Paperback interiors to build: `["black-and-white", "colour"]` builds both (ADR-03-0010). Remove one to skip that interior and its covers; `--ink bw` or `--ink colour` does the same for a single build. PDF and EPUB are always colour. |
| `print.paper` | `white` or `cream` (black-and-white interior). |
| `print.printers.kdp` / `print.printers.ingramspark` | Per-printer settings. Set `enabled: false` to skip that printer's covers. |
| `…paperCaliperInches` | Black-and-white paper thickness per page, used for the spine: spine = page count × caliper. These are starting values to check against each printer's own calculator. |
| `…colourPaper` | The colour stock chosen for that printer (a note; it doesn't change the build). KDP: standard colour. IngramSpark: standard colour 50 lb. |
| `…colourPaperCaliperInches` | Colour paper thickness per page, used for the colour edition's spine. |
| `…minimumPagesForSpineText` | Below this page count the spine is left blank. |
| `…spineWidthOverrideInches`, `…colourSpineWidthOverrideInches` | Leave `""` to calculate. Fill in when the printer's cover template states an exact spine width for that ink. |
| `page`, `coverArtwork`, `illustration` | Older draft-cover settings. `page` matches the 7.5 × 9.25 in trim, so nothing falls back to another size. |

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
| `editions.paperback.isbn` | Black-and-white paperback ISBN-13. Digits with or without hyphens; the check digit is verified. The same ISBN is used for KDP and IngramSpark. |
| `editions.paperbackColour.isbn`, `.isbnDisplay`, `.priceCode`, `.price` | The colour paperback, a separate product with its own ISBN (ADR-03-0010). The fields work like `editions.paperback`. Its ISBN goes on the colour covers' barcode and, alongside the black-and-white ISBN, on the copyright page of both interiors. Required for a real release when `colour` is in `print.interiorInks`. |
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
- On the back cover the photo is cropped to a square from the top centre. On the About the Author page it is shown whole.

## Back Cover Fit

The back cover holds the summary, highlights, endorsements and `shortBio` together. If they don't fit, the build sets the copy smaller, down to 75%, and the release report warns when even that isn't enough. About 50 words of `shortBio` fits comfortably at full size alongside two endorsements. Longer bios work but make the whole back cover smaller.
