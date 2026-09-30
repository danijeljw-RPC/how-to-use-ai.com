# ADR-03-0001 — Manuscript Source Format

## Status

Proposed

## Date

2026-05-18

## Area

Publishing

## Context

The series needs to support multiple output formats:

- Markdown files
- PDF
- hardcover book
- softcover book
- possible website content
- possible video adaptation

The author also wants Claude Code to co-author and maintain the project inside a repository. The format must be practical for iterative editing, version control, review, conversion, and long-term maintenance.

## Decision

Use Markdown as the primary manuscript and planning source format unless a later ADR changes this.

Use Markdown for:

- chapter drafts
- project memory
- research notes
- open issues
- author decision reviews
- planning files
- style guides
- publishing notes

Use later publishing tooling to convert Markdown into PDF, print layout, website pages, ebook formats, or video scripts.

## Options Considered

### Option 1 — Markdown-first repository

Pros:

- easy to version control
- readable in plain text
- easy for Claude Code and other AI tools to edit
- works well for documentation, plans, research notes, ADRs, and manuscript drafts
- can be converted into other formats
- supports website workflows
- supports future chapter-by-chapter reuse

Cons:

- print-ready layout will need additional tooling
- advanced typography may require a later layout stage
- PDF output quality depends on the conversion pipeline
- complex tables, image placement, and print design may require extra handling

### Option 2 — LaTeX-first manuscript

Pros:

- strong PDF output
- excellent for structured long-form publishing
- good for print-quality typesetting
- handles cross-references and indexes well

Cons:

- less approachable for non-technical editing
- harder to reuse directly for website content
- more friction for AI-assisted editing
- less convenient for lightweight planning and research notes

### Option 3 — Word processor-first manuscript

Pros:

- familiar to many editors
- strong review/comment workflows
- common in traditional publishing and editing workflows

Cons:

- weaker for Git-based version control
- harder to maintain structured project memory
- less suitable for automated transformations
- harder for Claude Code to manage safely at scale

### Option 4 — Dedicated book publishing tool first

Pros:

- may provide strong export pipelines
- may integrate print, ebook, and layout workflows

Cons:

- can create vendor lock-in
- may be harder to automate in a repo
- may be less transparent for long-term project memory
- may not suit website and video reuse

## Consequences

Positive:

- Markdown becomes the shared source format for author, AI tooling, and version control.
- The project can maintain durable memory and manuscript source in one repository.
- Chapters can later be adapted into website pages and video scripts.
- Publishing output can be handled as a later production stage.

Negative or trade-offs:

- A later ADR is needed for the final conversion and layout pipeline.
- Print-ready hardcover and softcover production may need additional tooling.
- Image, diagram, and typography rules will need to be defined before production.

## Impacted Files or Areas

- `CLAUDE.md`
- `docs/`
- chapter drafts
- publishing workflow
- website adaptation workflow
- video adaptation workflow

## Related Open Issues

- None yet.

## Review Notes

The decision is proposed as a practical starting point. It should be reviewed before the first full production workflow is built.
