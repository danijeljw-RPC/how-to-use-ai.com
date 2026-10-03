# Book 1 Uniform Chapter Endings

## Authority and scope

The author requested removal of next-chapter previews and uniform chapter behaviour on 4 October 2026. Continue directly on main and commit, as authorised in this session. Apply ADR-04-0002's single closing Recap and record the author's new no-preview rule in ADR-04-0006.

## Changes

Remove labelled Chapter/Epilogue Preview sections and unlabelled closing teasers. Every numbered chapter ends with Core Takeaway and one Recap callout, followed only by Chapter Notes/endnote definitions where present. Remove redundant recap headings; preserve retrospective Part summaries within the takeaway. Chapters 6/7 gain the Recap label using their existing final takeaway paragraph. Preserve author reflections, evidence, substantive cross-references and genuine product-preview terminology. The epilogue retains its own closing form.

Update style guidance and the old CLAUDE.md requirement for a next-chapter transition. Regenerate the index line map. No unrelated prose rewrite or research update.

## Verification

Audit all 14 numbered chapters for the closing structure, preview/teaser removal, footnote integrity and unchanged author blocks. Run index checks, repository unit tests, manuscript parsing and the real Book 1 publisher. Inspect rendered endings. Record results here before the scoped commit.

## Results — 4 October 2026

- All 14 numbered chapters have one H1, one Core Takeaway and one closing Recap, with no extra recap heading, preview section or paragraph after the Recap before notes.
- Body content before Core Takeaway (including every author reflection) and all Chapter Notes/endnotes are byte-identical to starting HEAD. Chapters 6/7 reuse their existing final paragraph as the Recap.
- Chapter-local footnote references and definitions match. All 15 manuscript files parse individually without warnings; parsing raw concatenated files is unsuitable because earlier chapters intentionally share local numeric note IDs, which the publisher namespaces.
- Regenerated index report and index check pass without dead-phrase notes. All 78 repository tests pass.
- Full Book 1 publisher succeeds; PDF has 405 pages. Extracted text contains no preview headings or removed teasers. Rendered Chapter 6/7 endings inspected on PDF pages 96/124: Core Takeaway and Recap are legible and use the house styles.
- `git diff --check` passes. No evidence, author content, product-preview terminology or substantive body cross-reference was removed.
