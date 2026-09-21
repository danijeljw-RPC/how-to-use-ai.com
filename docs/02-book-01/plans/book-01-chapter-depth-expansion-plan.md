# Book 1 Chapter Depth Expansion Plan

## Status

Approved to proceed without per-chapter review pause — the user explicitly said "Proceed automatically" when requesting this pass.

## Date

2026-09-21

## Purpose

The user observed that Chapter 1 is the only chapter with real internal structure: it has an H3 subsection under "AI Is Already Everywhere" for each everyday example (streaming, navigation, spam, social media, voice assistants, fraud detection, shopping), and runs to ~2,070 words. Every other chapter (2 through 14, plus the epilogue) is flat — H2 sections only, no subsections — and noticeably thinner (794–1,658 words). This plan covers reviewing each chapter in turn and expanding it so its depth and internal structure match Chapter 1's pattern, per [[ADR-04-0002-book-01-structure-and-callout-standard]] and the style guide.

## Scope Decision

ADR-02-0001 states a long-run target of 4,000–5,000 words per chapter. Chapter 1 itself — the chapter held up as the depth benchmark — is only ~2,070 words, well short of that target. Hitting the full 4–5k target across 13 remaining chapters in one pass (~45,000+ new words) is a much larger undertaking than "add the subsections and depth Chapter 1 has." This plan targets **parity with Chapter 1's depth and structure**, not the ADR's longer-run word count, as the achievable goal for this pass:

- Each chapter gains H3 subsections under at least the section(s) that most naturally decompose into a list of concrete cases (mirroring Chapter 1's "AI Is Already Everywhere" → per-example subsections pattern).
- Thin sections are fleshed out with a second example, a plainer restatement, or an in-line answer to the next question a beginner would ask — per the style guide's explicit instruction for thin sections.
- Target word count per chapter: roughly 1,900–2,400 words (Chapter 1 parity), up from the current 1,000–1,700.
- The gap to the full 4–5k ADR target is a known follow-on; if the author wants that deeper pass later, it should be a separate planning cycle, noted in an OI if it stays open at the end of this one.

## Files Expected to Change

Per chapter (2 through 14, plus epilogue — 14 files):

- `docs/02-book-01/chapters/chapter-XX-*.md` (expanded manuscript)
- `docs/02-book-01/plans/chapter-XX-plan.md` (updated: planned sections list reflects new subsections; chapter summary updated)

Plus:

- `changelog.md` (updated per chapter or in batches)
- This plan file, updated with a completion checklist as chapters finish

## Dependencies

### ADRs

- [[ADR-02-0001-book-01-structure]] — chapter topic lists and per-chapter core takeaways being expanded from
- [[ADR-04-0002-book-01-structure-and-callout-standard]] — heading hierarchy, no `---` dividers, 4-callout baseline, connected prose over bullet scaffolding

### OIs

- None of the open OIs (OI-0001, OI-0002 project-area; OI-0001, OI-0002 series-area) block this work — they concern callout naming reconciliation and title confirmation, not chapter depth.

## Approach

Work one chapter at a time, in order (2 → 14 → epilogue). For each chapter:

1. Re-read the current chapter file and its existing plan file.
2. Identify which section(s) most naturally take H3 subsections (a list of examples, cases, or categories currently compressed into one paragraph or a table).
3. Expand: add subsections with concrete worked examples in the Chapter 1 style (explain the mechanism in plain terms, then what makes it non-obvious or worth noticing), flesh out remaining thin sections, keep to the 4-callout baseline (roughly 1–3 per chapter total, not per section), keep existing placeholders (reflection/diagram) and add more only where genuinely useful.
4. Do not remove factual content, placeholders, or the chapter's existing core takeaway / recap — extend, don't replace.
5. Update the chapter's plan file to reflect the new section list.
6. Commit per chapter (or small batches) with message `draft: expand chapter NN with subsections and additional depth (<short title>)`.

## Risks

- **Padding risk:** expanding for word count alone rather than genuine reader value. Mitigated by requiring every new subsection/example to answer a concrete "what would a beginner ask next" question, not just restate the same point differently.
- **Callout sprawl creeping back in:** more content could tempt adding a callout per new subsection. Mitigated by holding the 1–3-per-chapter budget from [[ADR-04-0002-book-01-structure-and-callout-standard]] regardless of chapter length.
- **Drift from ADR-02-0001's topic lists:** expansion should pull additional concrete examples from the topics ADR-02-0001 already lists for each chapter (most chapters currently only cover a subset), not invent new topic areas.
- **Consistency across 14 files done sequentially:** later chapters could develop a different voice than earlier ones if this runs across a very long session. Mitigated by re-reading Chapter 1 and the style guide before drafting, and reusing established phrasing patterns (e.g., "That's not X. It's Y." pattern already used in Chapter 1).

## Acceptance Criteria

- Every chapter from 2 to 14 plus the epilogue has at least one section with H3 subsections (except the epilogue, which is intentionally short and reflective — see epilogue-specific note below).
- Every chapter's word count increases materially toward the ~1,900–2,400 word parity target.
- No chapter exceeds 4 callouts or drops below 1.
- Heading hierarchy stays exactly one H1, H2 for sections, H3 for subsections (per ADR-04-0002) — no `---` dividers reintroduced.
- Each chapter's plan file is updated to match its new structure.
- `changelog.md` reflects the work.
- Existing reflection/diagram placeholders and each chapter's Recap/Core Takeaway content are preserved, not deleted.

## Epilogue Note

The epilogue (794 words) is a short reflective closer by design (per ADR-02-0001: "a short reflective ending"). It will get a lighter expansion pass — fleshing out its existing sections with a bit more texture — rather than being forced into Chapter 1's subsection pattern, since a heavily subdivided epilogue would work against its intended tone.

## Proposed Commit Messages

One per chapter, e.g.:

```text
draft: expand chapter 02 with subsections and additional depth (why everyone suddenly talks about AI)
```

## Progress Checklist

- [ ] Chapter 02
- [ ] Chapter 03
- [ ] Chapter 04
- [ ] Chapter 05
- [ ] Chapter 06
- [ ] Chapter 07
- [ ] Chapter 08
- [ ] Chapter 09
- [ ] Chapter 10
- [ ] Chapter 11
- [ ] Chapter 12
- [ ] Chapter 13
- [ ] Chapter 14
- [ ] Epilogue
