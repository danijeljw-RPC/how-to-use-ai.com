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
  --check paperback,paperbackColour,pdf,epub docs/30-books/31-book-01/chapters/*.md
```

`--check` takes edition ids, types (`print`, `pdf`, `epub`) or bindings (`paperback`, `hardcover`), the same values as `pub-books.sh --format`. To see which files a release would build for each edition, with their trim, printers and file names:

```text
python3 scripts/book_metadata.py --config publishing/books.json --book-number 1 --plan --book-name 31-book-01
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
| `print.trimWidthInches`, `print.trimHeightInches` | Default trim for every edition and for drafts: 7.5 × 9.25 in. An edition can set its own. |
| `print.bleedInches` | Default interior bleed for print editions: 0.125 in (top, bottom and outside edge). |
| `print.printers.<printer>` | One profile per printer (`kdp`, `ingramspark`, or any new name). Set `enabled: false` to skip its covers for every edition. |
| `…minimumPagesForSpineText` | Below this page count the spine is left blank. |
| `…papers.<ink>.stock` | The paper chosen for that ink (a note; it doesn't change the build). KDP: white / standard colour. IngramSpark: white / standard colour 50 lb. |
| `…papers.<ink>.caliperInches` | Paper thickness per page for `black-and-white` or `colour`: spine = page count × caliper (+ the binding's allowance). Starting values to check against each printer's calculator. |
| `…papers.<ink>.spineWidthOverrideInches` | Leave `""` to calculate. Fill in when the printer's cover template states an exact spine width. |
| `…bindings.<binding>.coverBleedInches` | Cover bleed on every outside edge. Paperback: 0.125. Hardcover: the wrap (turn-in) from the printer's template (OI-0010). |
| `…bindings.<binding>.hingeInches` | Gap on each side of the spine. Paperback: 0. Hardcover: from the template. |
| `…bindings.<binding>.spineAllowanceInches` | Extra spine width added to page count × caliper (hardcover boards). Paperback: 0. |
| `page`, `coverArtwork`, `illustration` | Older draft-cover settings. `page` matches the 7.5 × 9.25 in trim, so nothing falls back to another size. |

A cover measurement left `""` is treated as missing. The release check names every field a selected edition still needs, so a new binding or printer can't produce a wrongly sized cover.

## `books[]` (one per volume)

| Field | Meaning |
| --- | --- |
| `number`, `sourceDirectory`, `title`, `description`, `descriptor`, colours, `image`, `theme` | Existing fields. `description` is the subtitle. |
| `dedication.text` | Dedication page. `\n\n` starts a new paragraph. |
| `epigraph.quote`, `epigraph.author` | Epigraph page. |
| `copyright.holder` | Name after the © on the copyright page (OI-0004, item 7). |
| `copyright.year` | Copyright year. |
| `copyright.edition` | For example `First edition`. |
| `copyright.publicationMonth` | For example `November`. Together these make the shared edition line, "First edition, November 2026", used by any edition whose `editionLine` is empty and by drafts and previews. |
| `editions` | One entry per product the book is sold as (ADR-03-0012); see below. |

## `books[].editions` (one entry per product)

Each key is an edition id of your choosing (`paperback`, `paperbackColour`, `hardcover`, `epub`, …). It is used by `--format` and in file names when there is no ISBN. Each edition is its own product with its own ISBN. The copyright page lists every enabled edition that has an ISBN, in the order they appear here.

| Field | Meaning |
| --- | --- |
| `type` | Required. `print` (interior + wrap covers), `pdf` (PDF ebook) or `epub` (EPUB 3). |
| `binding` | Print only: `paperback` (`softcover` means the same) or `hardcover`. |
| `ink` | Print only: `black-and-white` (or `bw`) or `colour`. Picks the paper caliper and converts the interior to greyscale for black and white. PDF and EPUB are always colour. |
| `enabled` | `false` leaves the edition out of builds and the copyright page. |
| `label` | The name in the copyright page's ISBN list, for example `Paperback (black and white)`. Empty → a default from the flags: "Paperback", "Paperback (colour)", "Hardcover", "PDF", "EPUB". The ISBN column lines up after the longest label. |
| `editionLine` | The edition line on this edition's copyright page, for example `First colour edition, October 2026`. Empty → the shared line from `copyright`. |
| `isbn` | ISBN-13, digits with or without hyphens; the check digit is verified. The same ISBN is used for KDP and IngramSpark. The EPUB's ISBN is also written into its metadata. |
| `isbnDisplay` | The hyphenated form exactly as Thorpe-Bowker issued it, for example `978-0-6451234-0-8`. Printed on the copyright page and above the barcode. If empty, plain digits are printed. |
| `priceCode` | Print only: barcode add-on. Empty → `series.defaultPriceCode` (`90000`). |
| `price.AUD`, `price.USD` | Print only: optional printed prices on the back cover, for example `"34.99"`. |
| `trimWidthInches`, `trimHeightInches` | Optional trim for this edition. Empty → `series.print`. The interior, covers and size checks all use it. |
| `interiorBleedInches` | Print only, optional. Empty → `series.print.bleedInches`. |
| `printers` | Print only, optional list such as `["kdp"]`. Empty → every enabled printer profile. |
| `fileStem` | Optional start of this edition's file names. Empty → the ISBN, else `<book-folder>-<edition id>`. |

### Adding an edition

To add a hardcover, add an entry after the paperbacks:

```json
"hardcover": {
  "type": "print",
  "binding": "hardcover",
  "ink": "colour",
  "enabled": true,
  "label": "Hardcover",
  "editionLine": "First hardcover edition, 2027",
  "isbn": "978-…",
  "isbnDisplay": "978-…"
}
```

Then fill in `series.print.printers.<printer>.bindings.hardcover` from each printer's cover template (OI-0010). `./pub-books.sh book 1 --release --format hardcover` builds just that edition. The release check lists anything still missing.

### Release file names

`<stem>` is `fileStem`, else the ISBN, else `<book-folder>-<edition id>`:

- print: `<stem>_interior-<bw|colour>.pdf`, `<stem>_cover-<bw|colour>-<printer>.pdf` and `…-no-barcode.pdf`
- PDF: `<stem>_ebook.pdf`
- EPUB: `<stem>_ebook.epub`

Print editions whose copyright page, trim and bleed are the same share one typesetting run, so their pages are identical. Different `editionLine`s make different copyright pages, so each is typeset separately. The build warns if editions with the same binding and trim end up with different page counts.
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
