# Book page expansion — 6 October 2026

Published to https://how-to-use-ai.com/books/ai-for-normal-people/.

## Delivered

Expanded the book page with reader suitability, learning outcomes, four manuscript parts and 14 expandable chapter descriptions, the epilogue, a Chapter 1 excerpt, a companion exercise, reading aids, six FAQs and preview/purchase/article links. The publication date is informational, independent of availability. Added Book structured-data language, image, URL and publication date. Updated homepage discovery links and removed developing-manuscript wording from the preview page. Fixed cover sizing and grid stretching at tablet widths.

## Sources

Chapter descriptions follow `docs/30-books/31-book-01/chapters/` and the four-part structure in `book-01-structure.md`. The excerpt reproduces the first two paragraphs and Key Idea from Chapter 1. Reading-aid descriptions follow `frontmatter/how-this-book-works.md`. The exercise is new companion content, identified as such. Manuscript files were read, not changed.

## Verification

94 tests passed. Astro check: zero errors, warnings or hints. Production build succeeded; deployment packaging passed. Tests noted a pre-existing occupied inspector port and automatically selected another. Live browser checks verified the expanded page, chapter expansion and anchor navigation at desktop/tablet and 390px mobile width; no document overflow on mobile. Preview description was verified live. The preview redirect returned HTTP 200 with application/pdf. Python's HTTP client was blocked with 403; browser and curl checks succeeded. The local browser blocked localhost access, so visual checks were performed against the published page.

Production Worker: how-to-use-ai. Final deployed version: e1881834-1f20-4c18-861b-e42b4faa64f0. Existing production bindings and commerce-disabled settings matched the previous deployment and were preserved.

## Next content opportunities

Standalone manuscript-grounded articles on confident wrong answers, privacy and task-first tool selection can extend the companion site. They are future editorial work, not included in this deployment.
