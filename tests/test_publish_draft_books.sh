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

test -f dist/02-book-01.pdf
test -f dist/covers/book-01-front-cover.png
test -f dist/covers/book-01-front-cover.pdf
test -f dist/covers/book-01-front-cover-preview.png
test -f dist/covers/book-01-back-cover.png
test -f dist/covers/book-01-back-cover.pdf
test -f dist/covers/book-01-back-cover-preview.png
test -f assets/covers/preview-placeholder.png

front_dimensions="$(identify -format '%wx%h' dist/covers/book-01-front-cover.png)"
placeholder_dimensions="$(identify -format '%wx%h' assets/covers/preview-placeholder.png)"
[[ "$front_dimensions" == "2100x3000" ]]
[[ "$placeholder_dimensions" == "1800x2700" ]]

BOOK_PDF="$ROOT_DIR/dist/02-book-01.pdf" MANUSCRIPT_PDF="$ROOT_DIR/tmp/pdfs/02-book-01-manuscript.pdf" "$TEST_PYTHON" - <<'PY'
import os
from pypdf import PdfReader

reader = PdfReader(os.environ["BOOK_PDF"])
manuscript = PdfReader(os.environ["MANUSCRIPT_PDF"])
assert len(reader.pages) == len(manuscript.pages) + 3
for page in reader.pages:
    assert abs(float(page.mediabox.width) - 504.0) < 0.5
    assert abs(float(page.mediabox.height) - 720.0) < 0.5
assert "internal and review distribution only" in (reader.pages[1].extract_text() or "").lower()
assert "/XObject" in reader.pages[-1]["/Resources"]
PY

echo "Draft publication integration test passed."
