# How-To-Use-AI.com Books: Writing and Building Guide

This repository holds the How-To-Use-AI.com book series: the manuscripts, the planning notes and the tools that turn them into finished books. This guide explains how to write chapters so they come out right in print, how to control the page layout, and how to build the PDFs and EPUB.

You don't need to read any code to follow it. The few commands you need are given in full and can be copied.

## Contents

1. [The Big Picture](#the-big-picture)
2. [Where Things Live](#where-things-live)
3. [Writing a Chapter](#writing-a-chapter)
4. [Callout Boxes](#callout-boxes)
5. [Author Reflections](#author-reflections)
6. [Diagrams and Images](#diagrams-and-images)
7. [Sources and Notes](#sources-and-notes)
8. [How a Chapter Ends](#how-a-chapter-ends)
9. [Controlling Page Breaks](#controlling-page-breaks)
10. [Front Matter, Back Matter and Book Details](#front-matter-back-matter-and-book-details)
11. [The Index](#the-index)
12. [Building the Books](#building-the-books)
13. [Checking a Proof](#checking-a-proof)
14. [Troubleshooting](#troubleshooting)
15. [Where Decisions Are Recorded](#where-decisions-are-recorded)

## The Big Picture

Every book is written as plain text files in **Markdown**, a simple way of marking headings, lists and emphasis with ordinary characters. A build script turns those files into every edition from the same text:

- a **black-and-white paperback** interior and a **colour paperback** interior, with wrap-around covers for each printer (Amazon KDP and IngramSpark);
- a **PDF ebook** with covers;
- an **EPUB** ebook;
- **review drafts** and **chapter previews** (for example, chapters 1 to 3 as a free sample).

Because everything is built from one set of files, you fix a problem **once in the Markdown** (or once in the shared design), never separately in each edition. The page design (fonts, colours, the navy chapter openers, the callout boxes) is applied automatically. You write the words and mark what each part is, and the build handles how it looks.

## Where Things Live

The folders that matter for writing and building:

| Folder or file | What it holds |
| --- | --- |
| `docs/30-books/31-book-01/chapters/` | **The Book 1 manuscript.** One file per chapter, plus the epilogue. |
| `docs/30-books/31-book-01/frontmatter/` | Extra pages before Chapter 1, such as "How This Book Works". |
| `docs/30-books/31-book-01/backmatter/` | Extra pages at the back, such as `references.md`. |
| `docs/30-books/31-book-01/diagrams/` | Diagram sources (`.mmd` files) used by the chapters. |
| `docs/30-books/31-book-01/index/` | The back-of-book index term list. See [The Index](#the-index). |
| `docs/30-books/31-book-01/plans/` | One plan per chapter, written before drafting. |
| `publishing/books.json` | Book details: titles, author, ISBNs, prices, editions, printers. |
| `publishing/` (the rest) | The page design and fonts. You rarely need to touch these. |
| `pub-books.sh` | The build command. See [Building the Books](#building-the-books). |
| `dist/` | **Output.** Built PDFs and EPUBs land here. It is rebuilt every time, so never edit files in it. |
| `docs/20-style/` | The style guide and the callout guide. |
| `changelog.md` | A dated record of every meaningful change. |

Later books follow the same pattern: Book 2 lives in `docs/30-books/32-book-02/`, and so on.

## Writing a Chapter

### The file

- Each chapter is one file in `chapters/`, named in lowercase with hyphens: `chapter-08-ai-and-creativity.md`.
- Files are put in order by their names, so the number at the front matters. Always use two digits (`chapter-08`, not `chapter-8`). The epilogue file (`epilogue-dont-panic.md`) sorts after the chapters automatically.
- Write a chapter plan in `docs/30-books/31-book-01/plans/` before drafting.

### The chapter title

The first line of the file is the chapter title, written exactly like this:

```markdown
# Chapter 8 — AI and Creativity
```

The build reads the number and the title from this line. It draws the navy chapter opener, puts "Chapter 08" above the title, and adds the chapter to the contents page and the PDF bookmarks. The separator can be an em dash (—), an en dash (–), a hyphen or a colon.

Unnumbered sections use a word instead of a number. `Epilogue`, `Prologue`, `Introduction` and `Preface` are recognised:

```markdown
# Epilogue — Don't Panic
```

Use exactly **one** `#` title per file.

### Headings inside the chapter

| You type | What it is | Use it for |
| --- | --- | --- |
| `## Heading` | Section | The main parts of a chapter. |
| `### Heading` | Subsection | Parts within a section. |
| `#### Heading` | Sub-subsection | Rarely. Prefer to restructure. |

Headings aren't numbered in print. Don't add numbers yourself.

### Ordinary text

| You type | You get |
| --- | --- |
| A blank line between paragraphs | A new paragraph. Paragraphs are separated by a small gap, not indented. |
| `*words*` | *italic* |
| `**words**` | **bold** (use sparingly) |
| `- item` at the start of lines | A bulleted list |
| `1. item` at the start of lines | A numbered list |
| `<https://example.com>` | A web address. In print, long addresses break neatly across lines. |
| `[text](https://example.com)` | A link with its own wording |

Tables use vertical bars, with a dashed line under the header row:

```markdown
| Domain | Generative AI often helps with |
| --- | --- |
| Writing | exploring directions, changing tone |
```

### Plain quotes

A line starting with `>` and **no** bold label is a plain quote. It is printed with a thin blue line down the left. Use it for something the reader might type into an AI tool, something a tool might say back, or a short passage the chapter looks at closely.

```markdown
> Summarise this email in three bullet points for my manager.
```

## Callout Boxes

A callout is a shaded or outlined box with a small label. It pulls out the few things in a chapter worth stopping for. Aim for one to three per chapter, not one per section.

Write a callout as a quote that starts with a **bold label and a colon**:

```markdown
> **Key Idea:** AI is not magic. It is pattern recognition at scale.
```

The four standard types:

| Label | Meaning |
| --- | --- |
| `**Key Idea:**` | The one thing to remember from a section. |
| `**Try This:**` | A small, practical thing the reader can do right now. |
| `**Watch Out:**` | A risk, a limitation or a common misunderstanding. |
| `**Recap:**` | The summary at the end of a chapter (exactly one per chapter). |

Things to know:

- The label must be spelled exactly as above, including capitals, and be bold with the colon inside the bold. Otherwise the text prints as a plain quote.
- A callout can run to several paragraphs: start each line of the callout with `>`, and put a line containing just `>` between paragraphs.
- **A callout is never split across pages.** If it doesn't fit at the foot of a page, the whole box moves to the next page. Keep callouts short enough to fit on one page.
- Older labels (`Plain English`, `Myth vs Reality`, `Example`, `Author Note`, `Reflection`) still print as boxes, but they have been retired. Don't use them in new writing. See `docs/20-style/callout-guide.md`.
- The front matter page "How This Book Works" explains the callouts to readers. If you change what a callout means, update that page too.

## Author Reflections

Author reflections are the author's own first-hand stories. They have their own gold design.

### While the story is still to be written

Leave a placeholder:

```markdown
> [Author reflection placeholder: Add a short personal example about a first AI experiment here.]
```

In drafts and proofs it shows as a gold "Author Reflection" box, so reviewers can see where a story will go. **A release build stops while any placeholder is left** (see [Building the Books](#building-the-books)).

### Once the story is written

Replace the placeholder with the finished text, wrapped like this:

```markdown
::: {.author-reflection}

The author's reflection goes here, as many paragraphs as needed.

### It can have its own sub-headings

:::
```

- The `:::` lines must be on lines of their own, with a blank line after the opening one and before the closing one.
- In print it gets the gold "Author Reflection" label and a gold line down the left. Unlike callouts, a reflection **can** continue across pages.
- Never paste a finished reflection in as plain paragraphs, or as a plain `>` quote. It would lose its label.

## Diagrams and Images

### Diagrams

Diagrams are drawn as text in **Mermaid** format and kept as `.mmd` files in the book's `diagrams/` folder. The build turns them into sharp vector images automatically.

To place a diagram in a chapter, put this on a line of its own, with blank lines around it:

```markdown
![Caption text that explains what the diagram shows.](../diagrams/creative-ai-involvement-continuum.mmd){ width=60% }
```

- The text in square brackets becomes the **caption**. The figure is numbered automatically per chapter (Figure 8-1, 8-2, …). Write the caption as a full sentence that explains the point, not just a label.
- `{ width=60% }` is optional. It sets the width as a share of the text width, which helps keep a tall diagram from filling a whole page. The build also caps every image's height so nothing can overrun the page.
- Ordinary pictures (`.png`, `.jpg`) are placed the same way, with a path to the image file.

**Where a figure appears.** A figure is placed as close to its spot in the text as space allows. If it doesn't fit at the foot of a page, it moves to the top of the next page (or a page of its own) while the text keeps flowing. This is normal book behaviour and keeps pages full. So write "the diagram below shows…" or refer to the figure by its caption, never "on the next page".

### Diagram placeholders

If a diagram is planned but not drawn yet:

```markdown
> [Diagram placeholder: Mermaid diagram showing AI as input → pattern matching → prediction/output.]
```

Like reflection placeholders, these block a release build until they are replaced.

## Sources and Notes

Sources are cited with **footnote markers**. In the text:

```markdown
Over half of daily uploads were fully AI-generated.[^ch8-deezer]
```

The matching definition goes under the chapter's `## Chapter Notes` heading at the end of the file:

```markdown
[^ch8-deezer]: Deezer, "Deezer confirms demonetization of up to 85% of AI-music streams due to fraud" (29 January 2026), <https://newsroom-deezer.com/...>. Checked 30 September 2026.
```

- The name after `^` is your own label. Prefix it with the chapter (`ch8-…`) to keep it readable. The build keeps labels from different chapters apart anyway.
- Notes are numbered automatically, starting again at 1 in each chapter.
- **The same source cited twice in a chapter** gets one note: the second citation reuses the first number.
- In the print and PDF editions, all notes are gathered at the **back of the book**, grouped by chapter, rather than at the foot of each page. Any ordinary paragraph under `## Chapter Notes` (for example, a sentence about how the chapter was researched) moves to the back with that chapter's notes.
- Include the date you checked any fact that can change, such as prices, product features or policies.

The evidence and citation rules are in `docs/20-style/decisions/ADR-04-0003-evidence-citation-and-ai-assistance.md`.

## How a Chapter Ends

Every numbered chapter ends the same way (ADR-04-0006):

1. `## Core Takeaway`, with a short closing section;
2. one `> **Recap:**` callout;
3. `## Chapter Notes` with the source definitions, where the chapter has any.

Don't add a "Next Chapter" preview or a teaser for what comes next.

## Controlling Page Breaks

### What happens automatically

You normally don't need to think about page breaks. The build already follows these rules in every PDF:

- **Each chapter starts on a right-hand page** in print (on a new page in the ebook PDF).
- **A heading never sits alone at the foot of a page.** It needs room for itself and a few lines of text; if there isn't enough, it moves to the next page.
- **A heading followed straight away by a subheading, or by a paragraph ending in a colon, moves together with it.** For example, "Is AI Replacing Artists?" followed by "Ask About Tasks, Not Titles" stays as one group.
- **A paragraph ending in a colon stays with what it introduces**, for example "Think of a ladder with six rungs:" and the list after it.
- **Callout boxes never split**, and a figure moves to where it fits (see [Diagrams and Images](#diagrams-and-images)).

To make all of this possible, pages are allowed to end a little short, leaving some white space at the foot. That is deliberate.

### The keep-with-next marker

If you find a layout problem the rules above don't catch, add a **keep-with-next marker** in the Markdown just **before** the part that should not be separated from what follows it:

```markdown
The last paragraph of the previous section.

<!-- keep-with-next -->

## The Heading That Was Being Stranded

Its first paragraph.
```

It means: **"if there are fewer than 12 lines left on this page, start a new page here."** If there is room, nothing happens.

For a bigger block, give the number of lines it needs. A full page holds about 45 lines:

```markdown
<!-- keep-with-next: 20 -->
```

Rules for using it:

- Put it **on a line of its own, with a blank line before and after.** Written in the middle of a paragraph it is ignored.
- Spell it exactly: `keep-with-next`, in lowercase, inside `<!--` and `-->`.
- It affects **every PDF**: drafts, previews, both print interiors and the PDF ebook. The **EPUB ignores it** (ebook readers flow text to fit the screen, so they have no fixed pages), and it is invisible on the website and in any Markdown viewer.
- It is a **last resort**. Rebuild and check the page first, since the automatic rules may already handle it. When text is edited later, check whether the marker is still needed and delete it if not. An unneeded marker can leave an unnecessary gap.
- There is deliberately **no "force a page break" marker.** A forced break goes stale as soon as you edit anything before it, and leaves a half-empty page. (A `\newpage` typed at the end of a line is removed by the build.)

The decision behind the marker is recorded in `docs/40-publishing/decisions/ADR-03-0013-keep-with-next-marker.md`.

### How to report or find a layout problem

Page numbers can mean two things:

- the **printed** page number (the folio at the foot of the page);
- the **PDF viewer's** page number, which counts every page from the front cover or title page.

In the current Book 1 interiors the viewer's number is 12 higher than the printed number, because of the front matter. When noting a problem, quote the **heading or a phrase** near it as well as the page number. Page numbers shift after almost any edit, but the words don't.

## Front Matter, Back Matter and Book Details

Most pages outside the chapters are **generated** from `publishing/books.json`, so you change them by editing that file, not a manuscript page:

- half title, series page, title page;
- the copyright page (ISBNs for each edition, edition line, publisher, disclaimers);
- dedication and epigraph;
- contents;
- About the Author (photo and biography) and About the Series;
- the front and back covers (title, blurb, endorsements, price, barcode).

**Leaving a value empty (`""`) removes that line or page** from every edition. The full list of fields is in `docs/40-publishing/books-json-reference.md`.

Pages you **write** as Markdown:

- `frontmatter/*.md`: placed after the contents, before Chapter 1, in file-name order (for example "How This Book Works");
- `backmatter/*.md`: placed after the notes at the back (for example `references.md`).

Each of these files starts with a `# Title` line, like a chapter.

## The Index

The back-of-book index is built automatically. The chapters contain **no** index markup. Instead, `docs/30-books/31-book-01/index/index-terms.toml` lists each index heading and the phrases that count as mentioning it, and the build finds them and adds page numbers.

- To add or change an entry, follow `docs/30-books/31-book-01/index/README.md`.
- Phrases in headings, captions, Chapter Notes and placeholders are never indexed, so match the wording used in the body text.
- Previews don't include the index. A full build can skip it with `--no-index`.

## Building the Books

### One-time setup (Mac)

The build needs these tools installed:

| Tool | What it does | How to install |
| --- | --- | --- |
| pandoc | Reads the Markdown | `brew install pandoc` |
| A TeX system (XeLaTeX) and `makeindex` | Typesets the PDF pages | MacTeX or BasicTeX |
| jq | Reads `books.json` | `brew install jq` |
| Poppler (`pdfinfo`, `pdftoppm`) | Checks PDF sizes and makes cover images | `brew install poppler` |
| Ghostscript | Prepares release PDFs | `brew install ghostscript` |
| Mermaid CLI (`mmdc`) and Chrome, Edge or Chromium | Draws the diagrams | `npm install -g @mermaid-js/mermaid-cli` |
| Python 3 with Pillow, ReportLab and pypdf | Covers, front matter, index | `pip3 install pillow reportlab pypdf` |
| epubcheck (optional) | Validates the EPUB | `brew install epubcheck` |

If something is missing, the build stops and names the tool to install.

### The commands

Open Terminal in the repository folder and run one of these:

| Command | What it makes | Where it goes |
| --- | --- | --- |
| `./pub-books.sh book 1` | A review draft of the whole of Book 1, with covers and index | `dist/31-book-01.pdf` |
| `./pub-books.sh book 1 chap 01-03` | A preview of chapters 1–3 with an "end of preview" page | `dist/31-book-01-preview.pdf` |
| `./pub-books.sh book 1 chap 01-03 --webpub` | The same preview, also copied to the website's downloads | also `wwwroot/public/downloads/` |
| `./pub-books.sh book 1 --release` | **Every edition ready for sale**: both print interiors, all printer covers, the PDF ebook and the EPUB | `dist/release/31-book-01/` |
| `./pub-books.sh book 1 --release --proof` | The same files marked as a proof. Unfinished items become warnings instead of errors | `dist/release/31-book-01/` |
| `./pub-books.sh book 1 --release --format paperback` | Only some editions (`paperback`, `epub`, `pdf`, `print`, or edition names from `books.json`, separated by commas) | `dist/release/31-book-01/` |
| `./pub-books.sh book 1 --release --ink bw` | Print editions in one ink only (`bw`, `colour`, or `bw,colour`) | `dist/release/31-book-01/` |
| `./pub-books.sh book 1 --no-index` | A build without the index | as above |

Chapters can be listed as a range (`chap 01-03`) or one by one (`chap 01,02,05`).

A full release build takes a few minutes. **Each release build first deletes the old release folder**, so copy anything you want to keep before rebuilding.

### What the release folder contains

Release files are named by ISBN:

- `…_interior-bw.pdf` and `…_interior-colour.pdf`: the print interiors, with bleed. Both come from one typesetting run, so their page breaks are identical.
- `…_cover-<ink>-kdp.pdf` and `…_cover-<ink>-ingramspark.pdf`: the wrap covers. The spine width is calculated from the page count. Each also comes in a `-no-barcode` version.
- `…_ebook.pdf` and `…_ebook.epub`: the ebooks.
- `31-book-01-release-report.md`: page counts, spine widths, ISBNs, and any warnings. **Read it after every release build.**

### The release check

Before building a release, the script checks that the book is ready. It stops, listing each problem, if it finds:

- any `[… placeholder: …]` text left in the chapters, front matter or back matter;
- a missing ISBN for an enabled edition;
- missing printer measurements needed for a cover.

Fix the items listed, or use `--proof` to build a marked proof anyway.

## Checking a Proof

When you review a built PDF, it helps to check:

1. **Headings**: none alone at the foot of a page.
2. **Figures**: each one near the text that refers to it, with its caption.
3. **Callouts**: none cut off or overlapping.
4. **Notes**: the back-of-book notes are grouped by chapter, with no repeated notes.
5. **Contents and index**: page numbers look right.
6. **The release report**: no warnings, and the page count matches what you expect.

For an exact match with the printed book, check the **release interior** (`dist/release/…`). The review draft has the same page size and text width, but it is single-sided and its front matter differs, so its page numbers and some breaks differ.

## Troubleshooting

| Problem | Likely cause and fix |
| --- | --- |
| A callout prints as a plain quote with a blue line | The label is misspelled, not bold, or the colon is outside the bold. Write `> **Key Idea:**` exactly. |
| A finished reflection has no gold label | The `:::` wrapper is missing, or the blank lines inside it are missing. |
| A heading is alone at the foot of a page | Rebuild first. If it persists, put `<!-- keep-with-next -->` on its own line before the heading. |
| A keep-with-next marker does nothing | It isn't on a line of its own with blank lines around it, or it's misspelled. There may also simply be enough room already, in which case it correctly does nothing. |
| A figure isn't exactly where it appears in the text | Normal: figures move to where they fit. Refer to the figure by its caption, not "below" or "on the next page". |
| A diagram fails to build | Check that the `.mmd` file name in the chapter matches the file in `diagrams/`, and that the Mermaid CLI and a browser are installed. |
| The release build stops with "not ready for release" | Read the list it prints: usually a placeholder or a missing ISBN. Fix it, or use `--proof`. |
| A footnote shows as literal `[^label]` text | The definition is missing or its label doesn't match exactly. |
| Changing a manuscript page didn't change the title page or copyright page | Those pages come from `publishing/books.json`, not the manuscript. |
| The build says a tool is missing | Install it using the table in [One-time setup](#one-time-setup-mac). |

## Where Decisions Are Recorded

The project keeps its decisions and open questions as files, so they don't get lost in conversation:

- **ADRs** (Author Decision Reviews) record decisions. The ones about the build and layout are in `docs/40-publishing/decisions/`; style decisions are in `docs/20-style/decisions/`.
- **OIs** (Open Issues) record unresolved questions, in each area's `open-issues/` folder.
- `CLAUDE.md` holds the working rules for the AI co-author, and `docs/20-style/style-guide.md` and `docs/20-style/callout-guide.md` hold the writing style.

If this guide and a decision record ever disagree, the decision record is the source of truth. Update this guide to match.
