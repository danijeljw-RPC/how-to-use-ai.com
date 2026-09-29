# Transparent Cover Illustration Plan

## Purpose

Let a cover illustration with a transparent background (such as the Book 1
octopus, `assets/covers/book-01.png`, 1800 x 2700 RGBA) appear whole on a white
cover. Today the renderer:

- drops the alpha channel, so transparent areas render black;
- fill-crops the art into the 2100 x 1260 picture band, cutting off the top and
  bottom of tall images;
- draws a white fade over the top 310 px of the band, which reads as blur;
- draws 18 px accent bars down both sides of the band.

## Approach

When the illustration has any transparent pixels, treat it as a cut-out:

- trim empty transparent margins;
- scale it to fit entirely inside the picture band (with a small margin), never
  cropping;
- composite it onto white;
- skip the white fade and the side accent bars.

Fully opaque illustrations (full-bleed photos) keep the existing fill-crop,
fade, and side bars unchanged.

## Files expected to change

- `scripts/cover_generator.py`
- `tests/test_cover_generator.py`
- `docs/03-publishing/decisions/ADR-03-0002-data-driven-series-covers.md`
- `changelog.md`
- `docs/03-publishing/plans/transparent-cover-illustration-plan.md` (this file)

## Dependencies

- ADRs: ADR-03-0002 (data-driven series covers). This change amends its shared
  composition for cut-out art only.
- OIs: none.

## Risks

- Tall cut-outs appear smaller than full-bleed photos, because the band is a
  wide 5:3 strip.
- Semi-transparent anti-aliased edges are composited onto white, which is the
  intended cover background; a non-white background would need a follow-up.

## Acceptance criteria

- A transparent illustration renders with no black background, no cropping of
  the visible subject, no fade, and no side bars.
- Opaque illustrations render exactly as before.
- `tests/test_cover_generator.py` passes, including a new transparent-art test.
- `./publish-draft-books.sh book 1` builds and the front cover shows the whole
  octopus.

## Review

The author asked for this directly in session on 2026-09-30 ("Can you not make
it work with transparent for me?") after the approach was proposed, so work
proceeded without a separate review stop.

## Proposed commit message

```text
publishing: render transparent cover illustrations whole on white
```
