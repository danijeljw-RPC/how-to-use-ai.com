# Book 1 Notes and Source Cleanup — 4 October 2026

## Purpose and Authority

The author requested source rechecks, removal of internal editing instructions from printed Chapter Notes and footnotes, and a commit directly on main. This authorisation covers implementation without a separate planning approval.

Starting state: clean main at b83c988; the latest commit supplies the Chapter 12 author reflection. Preserve it and the earlier 4 October checks in OI-0004 and OI-0005.

## Expected Files

- Chapter 8–14 manuscripts and the epilogue; two additional internal footnote instructions discovered in Chapters 3/4 during PDF verification.
- Chapter 8–14 bibliographies where stale verification statements need updating.
- A dated research verification record, this plan, changelog, and the generated index line map if required.
- An OI only if a material source question remains unresolved after retrieval attempts.

## Dependencies

Apply ADR-04-0003 (evidence, endnotes, AI assistance) and existing publishing contracts. OI-0004/OI-0005 contain today's completed checks; OI-0010 concerns author-story overlap and is outside this cleanup.

## Method and Risks

Inventory editorial instructions separately from genuine limitations and ordinary prose. Revisit the bibliography checklists and prioritise previously inaccessible primary sources, unsettled research outcomes, authorship and legal status. Preserve dated historical claims; do not turn vendor claims, forecasts or secondary outcomes into established outcomes. Record actual retrieval limits rather than claim a check succeeded. Keep internal workflow notes in research records, not printed notes.

## Acceptance Criteria

- No internal recheck/confirmation/author-input instructions in printed notes.
- Epilogue and Chapter 11 stale statements corrected.
- Each chapter checklist has dated dispositions and supporting URLs; unresolved material claims are removed, bounded or tracked.
- Footnote references and definitions match; manuscript assembly parses without warnings; index checks and appropriate publication checks pass.
- Scoped commit on main with changelog updated.

## Proposed Commit

research: verify book 1 sources and clean printed notes

## Completion and Verification

Completed 4 October 2026. The dated research record distinguishes original full texts, published abstracts, publisher metadata, indexed primary excerpts and today's prior OI checks. Earlier access failures for GPN-AI, eSafety, Adelaide and NTC are resolved. MASAI's primary results are published and now represented accurately. No source-access failure is silently labelled a full-text verification. Literature gaps and future refresh milestones remain explicit research boundaries, not invented evidence.

- All 78 repository unit tests pass on the final manuscript state.
- Index report regenerated; index check passes with no unmatched phrase notes.
- Ch8–14 footnote references and definitions match; no duplicate definitions or internal recheck instructions.
- Pandoc parses the changed Ch8–14/epilogue sources without warnings.
- Full `./pub-books.sh book 1` completes; generated review PDF has 407 pages.
- Final extracted-PDF sweep finds none of the stale publication/retrieval/author-input instructions. Ordinary Chapter 4 prose and Chapter 7 prompts remain.
- Rendered notes inspected for eSafety, Court and MASAI, including PDF pages 379 and 389 for the corrected Court and trial endnotes; text is legible and the evidence limitations appear.
- Chapter 12's entire body, including its author reflection, is byte-identical to starting HEAD.
- `git diff --check` passes.

Files committed are limited to the affected manuscripts, bibliographies, dated verification record, regenerated index, this plan and changelog. No deployment or manuscript lock was requested.
