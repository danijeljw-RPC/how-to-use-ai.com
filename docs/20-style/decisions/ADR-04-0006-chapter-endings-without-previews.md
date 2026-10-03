# ADR-04-0006 — Chapter Endings Without Previews

- Status: Accepted
- Date: 2026-10-04
- Authority: author's explicit request to remove next-chapter previews and make chapters function uniformly.

## Decision

Numbered chapters close with `## Core Takeaway`, followed by one `> **Recap:**` callout. Chapter Notes and endnote definitions may follow where applicable. Do not insert a separate Chapter Recap heading, Part Recap heading, Chapter Preview, Epilogue Preview or unlabelled teaser after the recap.

Retrospective summaries of a completed Part may remain in the takeaway prose. Useful cross-references in the chapter body remain valid. A product's research preview is factual terminology, not a chapter-preview section. The epilogue is a closing piece rather than another numbered chapter and retains its own form.

This supersedes the next-chapter-transition requirement in CLAUDE.md and clarifies ADR-04-0002's instruction to use one Recap at the end of each chapter.

## Consequences

Each chapter ends on its own lesson instead of an advertisement for the next. Chapter 6/7's existing closing prose receives the Recap label; other recap content remains intact. Source and assistance disclosures remain in Chapter Notes where present. Future drafts must use this same pattern.

## Implementation

See `docs/30-books/31-book-01/plans/uniform-chapter-endings-plan.md`.
