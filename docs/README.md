# Docs Directory

This directory is the committed working memory for the How-to-use-ai.com book series.

It contains:

- project memory
- series structure
- Book 1 structure
- planning files
- research notes
- open issues
- author decision reviews
- style guidance
- publishing guidance
- templates

## Directory Responsibilities

| Directory | Purpose |
|---|---|
| `00-project` | Project-wide memory, plans, decisions, and open issues |
| `10-series` | Series-level structure and decisions |
| `20-style` | Style guide, callouts, language, tone, and reader experience |
| `30-books` | One sub-folder per book, numbered `31`–`35` |
| `30-books/31-book-01` | Book 1 chapters, diagrams, plans, research, and decisions |
| `40-publishing` | Publishing formats, production workflow, print/PDF/Markdown decisions |
| `80-research` | Chapter research packages |
| `90-templates` | Reusable templates for ADRs, OIs, plans, research, and changelog entries |

Numbering: top-level areas use tens (`00`, `10`, `20`, …); a sub-area takes the next unit number of its parent (`30-books/31-book-01`). See `00-project/decisions/ADR-00-0003-docs-folder-numbering.md`.

## Legacy Data

Prior exported chat material should be placed in:

```text
../legacy-data/
```

Use legacy data as historical context, not as the automatic source of truth.
