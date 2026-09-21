# Plan — Legacy Data Reconciliation (One-Time Pass)

## Status

Approved (task is fully specified by the user's own `prompt.md`, Priority 1: "do it now" with an explicit numbered procedure). Proceeding without a separate review pause per `CLAUDE.md`'s "unless the user explicitly said to proceed without review" — `prompt.md` is the user's own checked-in instruction and already constitutes that explicit direction for this specific, one-time task.

## Date

2026-09-21

## Purpose

Complete the one-time legacy reconciliation pass described in `prompt.md` Priority 1: migrate the Chapter 1 legacy draft into the working manuscript, bring the Book 1 structure doc up to the full four-part ADR structure, reconcile callout naming, and pull anything durable out of the two unreviewed legacy handoff/research files before treating `docs/` as complete.

## Files Expected to Change

- `docs/02-book-01/chapters/chapter-01-youve-already-been-using-ai.md` (new — migrated chapter)
- `docs/02-book-01/plans/chapter-01-plan.md` (rewritten to match real draft content)
- `docs/02-book-01/book-01-structure.md` (expanded to full four-part + epilogue structure)
- `docs/02-book-01/open-issues/OI-0001.md` (new — callout naming reconciliation)
- `docs/02-book-01/open-issues/OI-0002.md` (new — Book 1 title confirmation)
- `docs/01-series/open-issues/OI-0001.md` (new — cross-referencing Book 1 structure against 5-book arc)
- `docs/01-series/open-issues/OI-0002.md` (new — 3-book vs 5-book series arc conflict found in legacy handoff data)
- `docs/02-book-01/research/research-note-johnny-tribunal-scenario.md` (new — candidate case study from handoff file)
- `docs/02-book-01/research/research-note-copilot-forced-ai.md` (new — reconciled research note from transcript file)
- `CLAUDE.md` (update legacy-data status table to reflect completed migration/review)
- `changelog.md` (reconciliation entry)

## Dependencies on ADRs

- `docs/02-book-01/decisions/ADR-02-0001-book-01-structure.md` — source of truth for structure and the three flagged OIs; this pass implements its Implementation Requirements items 2 and 8.

## Dependencies on OIs

- None pre-existing (none filed yet). This pass creates them.

## Risks

- Callout renaming could lose nuance from the legacy "Reference" type, which has no clean baseline equivalent — mitigated by opening OI-0001 rather than silently forcing a mapping.
- The Johnny scenario and the 5-book-vs-3-book structural conflict are legacy ideas that were never approved by the author — mitigated by filing them as research/OI rather than writing them into the manuscript or ADRs.
- Chapter 1 word count target (4,000–5,000 words per ADR) exceeds the legacy draft's actual length — noted in the rewritten chapter plan as a known gap, not silently padded.

## Acceptance Criteria

- `docs/02-book-01/chapters/` contains a Chapter 1 draft using only baseline callout names, with legacy content preserved.
- `docs/02-book-01/plans/chapter-01-plan.md` accurately reflects the migrated draft rather than the original placeholder-level plan.
- `docs/02-book-01/book-01-structure.md` documents all four parts, 14 chapters, and the epilogue.
- All three OIs referenced in ADR-02-0001 exist as real files, plus one new OI for the structural conflict found in the handoff file.
- Nothing from the two unreviewed legacy files is silently dropped or silently copied into the manuscript without review — durable ideas are filed as research notes or OIs.
- `changelog.md` records the pass explicitly so future runs know it happened.
- Commit created per `CLAUDE.md` commit rules.

## Proposed Commit Message

```text
docs: reconcile legacy Chapter 1 draft, Book 1 structure, and legacy research notes
```
