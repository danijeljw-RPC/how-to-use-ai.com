# Book Cover and Draft Publication Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a reusable JSON-driven series-cover system and assemble publication-structured internal-review PDFs from `publish-draft-books.sh`.

**Architecture:** A Python renderer reads `publishing/books.json`, applies one fixed cover layout, creates a deterministic fallback illustration when needed, and emits front/back PNG, preview, and PDF assets. The existing shell publisher builds the Markdown manuscript with Pandoc and calls a small Python assembler to prepend the front cover and review notice and append the back cover.

**Tech Stack:** Bash, Python standard library, Pillow, ReportLab, pypdf, Pandoc, XeLaTeX, Poppler.

**Spec:** `docs/03-publishing/decisions/ADR-03-0002-data-driven-series-covers.md`

## Global Constraints

- Final PDF pages are exactly 7 by 10 inches.
- High-resolution cover output is 2100 by 3000 pixels at 300 DPI.
- Expected illustration assets are 1800 by 2700 pixels.
- Missing illustration assets fall back to a generated `Preview Publication Only` image.
- Content lives in JSON; shared presentation lives in one renderer.
- The assembled PDF states that it is for internal and review distribution only.
- Existing unrelated working-tree changes must not be overwritten or committed.

## Review Focus

- A missing illustration must select the placeholder without failing publication.
- An unknown book number must fail with a precise error.
- Empty optional descriptions must not leave visible blank layout artefacts.
- Every emitted PDF page must remain exactly 7 by 10 inches.
- Existing directory arguments and the new `book N` selector must both work.

---

### Task 1: Metadata and Cover Renderer

**Files:**

- Create: `publishing/books.json`
- Create: `scripts/cover_generator.py`
- Test: `tests/test_cover_generator.py`

**Interfaces:**

- Consumes: a JSON path, book number, repository root, and output directory.
- Produces: `render_book_cover(config_path, book_number, root_dir, output_dir)` returning generated asset paths.

- [ ] **Step 1: Write failing metadata and fallback tests**

```python
def test_missing_book_art_uses_generated_placeholder(self):
    result = render_book_cover(self.config, 1, self.root, self.output)
    self.assertTrue(result.used_placeholder)
    self.assertEqual(Image.open(result.illustration).size, (1800, 2700))
```

- [ ] **Step 2: Run the focused tests and confirm missing imports/functions fail**

Run: `python3 -m unittest tests.test_cover_generator -v`

- [ ] **Step 3: Implement metadata validation, deterministic placeholder generation, and the shared front/back layout**

```python
result = render_book_cover(config_path, book_number, root_dir, output_dir)
```

- [ ] **Step 4: Re-run the focused tests and confirm they pass**

Run: `python3 -m unittest tests.test_cover_generator -v`

### Task 2: PDF Assembly

**Files:**

- Create: `scripts/assemble_draft_book.py`
- Test: `tests/test_assemble_draft_book.py`

**Interfaces:**

- Consumes: front-cover PDF, manuscript PDF, back-cover PDF, book metadata, and output path.
- Produces: `assemble_draft_book(...)` with an internal-review notice inserted after the front cover.

- [ ] **Step 1: Write a failing page-order and page-size test**

```python
assemble_draft_book(front, body, back, output, metadata)
reader = PdfReader(output)
self.assertEqual(len(reader.pages), 5)
self.assertIn("internal and review distribution only", reader.pages[1].extract_text().lower())
```

- [ ] **Step 2: Run the focused test and confirm the missing assembler fails**

Run: `python3 -m unittest tests.test_assemble_draft_book -v`

- [ ] **Step 3: Implement the ReportLab notice page and pypdf merge**

```python
assemble_draft_book(front_pdf, manuscript_pdf, back_pdf, output_pdf, metadata)
```

- [ ] **Step 4: Re-run the focused test and confirm it passes**

Run: `python3 -m unittest tests.test_assemble_draft_book -v`

### Task 3: Shell Publishing Integration

**Files:**

- Modify: `publish-draft-books.sh`
- Create: `tests/test_publish_draft_books.sh`

**Interfaces:**

- Consumes: no arguments, legacy book-directory names, a number, or `book N`.
- Produces: combined Markdown, cover assets, manuscript intermediate PDF, and assembled review PDF under `dist/`.

- [ ] **Step 1: Write a failing shell contract test for selectors and dependency checks**

```bash
bash -n publish-draft-books.sh
./publish-draft-books.sh book 1
```

- [ ] **Step 2: Run the test and confirm the existing script lacks the new outputs**

Run: `bash tests/test_publish_draft_books.sh`

- [ ] **Step 3: Integrate metadata lookup, cover rendering, 7 by 10 Pandoc output, and final assembly**

```bash
"$PYTHON" "$ROOT_DIR/scripts/cover_generator.py" --config "$CONFIG" --book-number "$book_number" --output-dir "$cover_dir"
```

- [ ] **Step 4: Run shell and Python tests**

Run: `python3 -m unittest discover -s tests -p 'test_*.py' -v && bash tests/test_publish_draft_books.sh`

### Task 4: Documentation, Publication Build, and Visual QA

**Files:**

- Modify: `changelog.md`
- Generate: `dist/covers/book-01-*`
- Generate: `dist/02-book-01.pdf`

**Interfaces:**

- Consumes: the completed renderer, assembler, metadata, and drafted Book 1 chapters.
- Produces: verified review artifacts and repository documentation.

- [ ] **Step 1: Run the complete publication**

Run: `./publish-draft-books.sh book 1`

- [ ] **Step 2: Validate page size, page order, metadata-derived text, and output dimensions**

Run: `pdfinfo dist/02-book-01.pdf`, `pdftotext dist/02-book-01.pdf -`, and `identify dist/covers/book-01-front-cover.png`

- [ ] **Step 3: Render representative PDF pages and inspect them visually**

Run: `pdftoppm -f 1 -l 3 -png -r 110 dist/02-book-01.pdf tmp/pdfs/book-01`

- [ ] **Step 4: Run final checks and stage only in-scope files**

Run: `git diff --check && git status --short`

## Self-Review

- The plan covers all outputs and the missing-image fallback.
- No task duplicates the cover layout.
- The renderer and assembler interfaces match across tasks.
- All five review-focus cases have an owning test or integration check.
- The user explicitly requested native completion, so implementation proceeds in this session.
