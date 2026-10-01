#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
if python3 -c 'import PIL, reportlab, pypdf' >/dev/null 2>&1; then
  TEST_PYTHON="$(command -v python3)"
else
  TEST_PYTHON="${HOME}/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3"
fi

cd "$ROOT_DIR"
bash -n publish-draft-books.sh
BUILD_LOG="$ROOT_DIR/tmp/pdfs/test-publish-draft-books.log"
mkdir -p "$(dirname "$BUILD_LOG")"
BOOK_PUBLISH_PYTHON="$TEST_PYTHON" ./publish-draft-books.sh book 1 2>&1 | tee "$BUILD_LOG"
if rg -n '\[WARNING\]|Annotation sizes differ' "$BUILD_LOG"; then
  echo "Publication emitted warnings." >&2
  exit 1
fi

test -f dist/31-book-01.pdf
test -f dist/covers/book-01-front-cover.png
test -f dist/covers/book-01-front-cover.pdf
test -f dist/covers/book-01-front-cover-preview.png
test -f dist/covers/book-01-back-cover.png
test -f dist/covers/book-01-back-cover.pdf
test -f dist/covers/book-01-back-cover-preview.png

diagram_pdf="$(find tmp/pdfs/31-book-01-diagrams -maxdepth 1 -type f -name 'recommendation-engine-feedback-loop-*.pdf' -print -quit)"
test -n "$diagram_pdf"
if rg -n '!\[[^]]+\]\([^)]*\.mmd' dist/31-book-01.md; then
  echo "Combined manuscript still contains an unrendered Mermaid image." >&2
  exit 1
fi

front_dimensions="$(identify -format '%wx%h' dist/covers/book-01-front-cover.png)"
# 7.5 x 9.25in at 300 DPI (ADR-03-0008).
[[ "$front_dimensions" == "2250x2775" ]]

BOOK_PDF="$ROOT_DIR/dist/31-book-01.pdf" MANUSCRIPT_PDF="$ROOT_DIR/tmp/pdfs/31-book-01-manuscript.pdf" DIAGRAM_PDF="$diagram_pdf" "$TEST_PYTHON" - <<'PY'
import os
from pypdf import PdfReader

reader = PdfReader(os.environ["BOOK_PDF"])
manuscript = PdfReader(os.environ["MANUSCRIPT_PDF"])
diagram = PdfReader(os.environ["DIAGRAM_PDF"])
assert len(reader.pages) == len(manuscript.pages) + 3
for page in reader.pages:
    assert abs(float(page.mediabox.width) - 540.0) < 0.5
    assert abs(float(page.mediabox.height) - 666.0) < 0.5
assert "internal and review distribution only" in (reader.pages[1].extract_text() or "").lower()
assert "/Font" in reader.pages[-1]["/Resources"]  # vector back cover
diagram_page = diagram.pages[0]
diagram_text = diagram_page.extract_text() or ""
assert "User watches" in diagram_text
assert "Recommendations" in diagram_text
assert float(diagram_page.mediabox.width) < 612.0
assert float(diagram_page.mediabox.height) < 792.0
PY

# The full build ends with the back-of-book index (ADR-03-0007).
rg -q '\\printindex' dist/31-book-01.md
rg -q '\\index\{hallucination@Hallucination\}' dist/31-book-01.md
rg -q '0 rejected' tmp/pdfs/31-book-01-latex/book.ilg
MANUSCRIPT_PDF="$ROOT_DIR/tmp/pdfs/31-book-01-manuscript.pdf" "$TEST_PYTHON" - <<'PY'
import os
from pypdf import PdfReader

manuscript = PdfReader(os.environ["MANUSCRIPT_PDF"])
contents = " ".join((page.extract_text() or "") for page in manuscript.pages[:8])
assert "Index" in contents, "the index is missing from the table of contents"
index_text = " ".join((page.extract_text() or "") for page in manuscript.pages[-8:])
assert "Hallucination" in index_text and "see also" in index_text
assert "LLM, see Language models" in index_text
PY

BOOK_PUBLISH_PYTHON="$TEST_PYTHON" ./publish-draft-books.sh book 1 chap 01-03 2>&1 | tee "$BUILD_LOG"
if rg -n '\[WARNING\]|Annotation sizes differ' "$BUILD_LOG"; then
  echo "Preview publication emitted warnings." >&2
  exit 1
fi
test -f dist/31-book-01-preview.pdf
[[ "$(rg -c '^# Chapter ' dist/31-book-01-preview.md)" == "3" ]]
if rg -n 'Internal review draft|^# Epilogue|\\index\{|\\printindex' dist/31-book-01-preview.md; then
  echo "Preview manuscript contains review-only or out-of-range content." >&2
  exit 1
fi

BOOK_PDF="$ROOT_DIR/dist/31-book-01-preview.pdf" MANUSCRIPT_PDF="$ROOT_DIR/tmp/pdfs/31-book-01-preview-manuscript.pdf" "$TEST_PYTHON" - <<'PY'
import os
from pypdf import PdfReader

reader = PdfReader(os.environ["BOOK_PDF"])
manuscript = PdfReader(os.environ["MANUSCRIPT_PDF"])
assert len(reader.pages) == len(manuscript.pages) + 4
assert "preview edition" in (reader.pages[1].extract_text() or "").lower()
assert "end of preview" in (reader.pages[-2].extract_text() or "").lower()
assert "/Font" in reader.pages[-1]["/Resources"]  # vector back cover
PY

# Release proof (ADR-03-0008): every format, house design, print geometry.
BOOK_PUBLISH_PYTHON="$TEST_PYTHON" ./publish-draft-books.sh book 1 --release --proof 2>&1 | tee "$BUILD_LOG"
if rg -n '\[WARNING\]' "$BUILD_LOG"; then
  echo "Release publication emitted warnings." >&2
  exit 1
fi
RELEASE_DIR="$ROOT_DIR/dist/release/31-book-01" "$TEST_PYTHON" - <<'PY'
import os
import zipfile
from pathlib import Path
from pypdf import PdfReader

release = Path(os.environ["RELEASE_DIR"])
interior = next(release.glob("*_interior.pdf"))
pages = PdfReader(interior).pages
assert all(abs(float(p.mediabox.width) - 549.0) < 0.5 and abs(float(p.mediabox.height) - 684.0) < 0.5
           for p in pages), "paperback interior must be 7.5 x 9.25in plus 0.125in bleed"
text = " ".join((pages[i].extract_text() or "") for i in range(12))
assert "Proof copy" in text and "Contents" in text
for cover in release.glob("*_cover-*.pdf"):
    box = PdfReader(cover).pages[0].mediabox
    assert abs(float(box.height) - 684.0) < 0.5
    assert float(box.width) > 2 * 540 + 18, f"{cover.name} has no spine"
assert len(list(release.glob("*_cover-*.pdf"))) == 2, "one cover per enabled printer"
ebook = PdfReader(release / "31-book-01-ebook.pdf").pages
assert abs(float(ebook[0].mediabox.width) - 540.0) < 0.5
with zipfile.ZipFile(release / "31-book-01.epub") as epub:
    assert epub.read("mimetype") == b"application/epub+zip"
    names = epub.namelist()
    assert any(name.endswith(".ttf") for name in names)
    assert any(name.endswith(".svg") for name in names)
assert (release / "31-book-01-release-report.md").is_file()
PY

echo "Draft publication integration test passed."
