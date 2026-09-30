# Vector Cover Rendering Plan

## Purpose

The covers go to print, so every shape and every piece of text must stay sharp
at any zoom. Today `scripts/cover_generator.py` paints the whole cover
(circles, badges, rules, text, illustration) into a 2100 x 3000 pixel image and
drops that image into the cover PDF, so the gold seal and the text go soft when
zoomed.

The author also asked for the name footer to read as `——— NAME ———`: two rules
with the name centred in the gap between them. Today the name sits above a gap
in the rules instead of on the same line.

## Approach

- Draw the front and back covers directly as PDF vector content with ReportLab:
  filled and stroked shapes (circles, rounded rectangles, rules, bars) and real
  embedded fonts (Arial, with DejaVu fallback).
- The illustration is the only raster element. It is embedded at its source
  resolution rather than resampled to the cover's pixel grid. Full-bleed
  (opaque) art keeps its crop and fade, baked into that one image.
- PDF is the print format; "SVG-quality" here means PDF vector paths, which is
  what an SVG becomes when placed into a PDF anyway.
- The PNG and preview-PNG outputs are rasterised from the vector PDF with
  `pdftoppm` at 300 DPI, so they still exist for the site and tests at
  2100 x 3000.
- The name footer is vertically centred on the rules, with the rules stopping a
  fixed gap before and after the name. The same applies on the back cover.

## Files expected to change

- `scripts/cover_generator.py`
- `tests/test_cover_generator.py`
- `tests/test_publish_draft_books.sh` (the back cover no longer contains an image)
- `publish-draft-books.sh` (require `pdftoppm`)
- `docs/40-publishing/decisions/ADR-03-0002-data-driven-series-covers.md`
- `changelog.md`
- this plan

## Dependencies

- ADRs: ADR-03-0002 (amended: vector cover output).
- OIs: none. Print-shop specifics (bleed, CMYK) are not in scope here.

## Risks

- Text metrics differ slightly between Pillow and ReportLab, so vertical
  positions may shift by a few pixels. Checked visually after the change.
- `pdftoppm` (poppler) becomes a build dependency for the PNG outputs.

## Acceptance criteria

- The front and back cover PDFs contain text as fonts and shapes as vector
  paths. The front has exactly one image (the illustration); the back has none.
- The cover PNGs are still 2100 x 3000, with 630 x 900 previews.
- The name sits between the two rules, vertically centred on them.
- Unit tests and `./publish-draft-books.sh book 1` pass.

## Review

The author directed this change in session on 2026-09-30 ("All the geometric
shapes should be SVG ... needs to be CRISP"), so work proceeded without a
separate review stop.

## Proposed commit message

```text
publishing: render covers as vector PDF with centred author rule
```
