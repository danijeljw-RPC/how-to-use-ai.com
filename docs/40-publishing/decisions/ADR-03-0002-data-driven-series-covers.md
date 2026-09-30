# ADR-03-0002 - Data-Driven Series Covers

## Status

Accepted for the draft publication pipeline.

## Date

2026-09-24

## Area

Publishing

## Context

The five-book series needs one recognisable cover system rather than five
independently designed covers. Draft PDFs also need publication-like front and
back matter while remaining unmistakably internal review editions.

The visual reference supplied by the author establishes the hierarchy: a small
series descriptor, dominant `How To Use AI.com` branding, series tagline,
accent-coloured book badge, volume title and description, a fixed illustration
region, and a restrained author footer.

## Decision

Use `publishing/books.json` as the source of truth for series and volume content.
Use one renderer and one shared layout for every volume. Book-specific metadata
may change copy, accent colours, descriptors, theme, source directory, and the
illustration path; it may not redefine the common composition.

Illustrations are expected at the JSON paths and should be 1800 by 2700 pixels.
If an illustration is missing, the renderer generates and uses a same-size
placeholder labelled `Preview Publication Only`. Missing commissioned artwork
therefore does not block internal PDF review.

Amendment (2026-09-30): an illustration with a transparent background is
treated as cut-out art. Its empty margins are trimmed and the whole subject is
fitted on white into all the clear space between the subtitle and the author
name (not just the 2100 by 1260 pixel picture band), with no cropping, no top
fade, and no accent side bars. Fully opaque illustrations keep the
original fill-crop, fade, and side bars. Transparent illustrations need no
particular size. Opaque art is cropped to the band's 5:3 shape, so it should be
supplied at 2100 by 1260 pixels (or larger at 5:3) to avoid losing its top and
bottom; the 1800 by 2700 figure above only governs the generated placeholder.

Amendment (2026-09-30): the front-cover descriptor badge is a series-wide gold
seal (fill `#E9C46A`, ring `#B8892E`, navy text) rather than cream with the
book accent outline. Its text stays book-specific audience copy (Book 1: `No
technical skills required`), not edition wording; edition statements belong on
the copyright page.

Amendment (2026-09-30): covers are print output, so the cover PDFs are drawn
as vector content. Shapes are PDF paths and text uses embedded fonts; the
illustration is the only raster element and is embedded at its source
resolution. The PNG outputs are rasterised from the PDF with `pdftoppm`. The
author name sits between two accent rules, vertically centred on them
(`——— NAME ———`), on both covers. Print gaps beyond the covers are tracked in
`docs/40-publishing/open-issues/OI-0005.md`.

The draft publication pipeline produces:

- a 2100 by 3000 pixel front cover (7 by 10 inches at 300 DPI);
- a 7 by 10 inch standalone front-cover PDF;
- a scaled development preview;
- matching back-cover artwork and PDF;
- a 7 by 10 inch assembled review PDF ordered as front cover, internal-review
  notice, title/table-of-contents/manuscript pages, and back cover.

Book 1 uses the accepted title `AI for Normal People` and subtitle
`Understanding Artificial Intelligence Without the Hype`. The shared author
name is `Danijel-James Wynyard-McClay`.

## Consequences

- Adding Book 6 is primarily a JSON and illustration change.
- Common typography or layout changes affect the full series.
- Cover generation remains deterministic and can run before commissioned art
  exists.
- The review-only notice is part of the assembled book, not baked into the
  manuscript chapters.
- The image reference supplied by the author informs style only; text shown in
  that image is not treated as metadata.

## Verification

- Unit tests validate metadata selection, missing-image fallback dimensions,
  cover output dimensions, PDF page size, and assembled page order.
- The shell script is syntax-checked and exercised against Book 1.
- Final PDFs are inspected with `pdfinfo`, extracted text, and rendered PNGs.
