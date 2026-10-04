#!/usr/bin/env bash
# Build the books: internal-review drafts (the default), chapter previews, and
# release editions ready for sale (ADR-03-0008).
#
# Every edition uses the house design (Option B, "Address bar"): IBM Plex type,
# navy chapter openers, styled callouts, 7.5 x 9.25in pages.
#
# Usage:
#   ./pub-books.sh                 # every configured book with chapters
#   ./pub-books.sh book 1          # Book 1 by number
#   ./pub-books.sh 1               # shorthand for Book 1
#   ./pub-books.sh 31-book-01      # book-folder selector (30-books/31-book-01 also works)
#   ./pub-books.sh book 1 chap 01,02,03
#                                            # preview edition: chapters 1-3 plus
#                                            # any front matter sorted before them,
#                                            # an end-of-preview page, and the back
#                                            # cover (ranges such as 01-03 also work)
#   ./pub-books.sh book 1 chap 01-03 --webpub
#                                            # also copy the preview to the site:
#                                            # wwwroot/public/downloads/<title-slug>-preview.pdf
#   ./pub-books.sh book 1 --no-index
#                                            # build without the back-of-book index
#
# Release editions (ADR-03-0008):
#   ./pub-books.sh book 1 --release
#                                            # paperback (interior + one wrap cover
#                                            # per printer), PDF ebook and EPUB
#   ./pub-books.sh book 1 --release --format paperback,epub
#   ./pub-books.sh book 1 --release --proof
#                                            # same layouts marked as a proof; missing
#                                            # ISBNs and unresolved placeholders are
#                                            # warnings instead of errors
#   ./pub-books.sh book 1 --release --ink bw # one paperback ink only (bw, colour, or
#                                            # bw,colour); the default is
#                                            # series.print.interiorInks in books.json
#   --edition release is an alias for --release; --edition draft is the default.
#
# Every PDF is checked for size: 7.5 x 9.25in pages, or 7.625 x 9.5in for
# paperback interiors (trim plus 0.125in bleed). A wrong size stops the build.
#
# Draft and preview PDFs go to dist/<book-folder>[-preview].pdf. Release files
# go to dist/release/<book-folder>/ (ADR-03-0010). Each paperback ink is its
# own product with its own ISBN (editions.paperback for black and white,
# editions.paperbackColour for colour):
#   <isbn>_interior-bw.pdf, <isbn>_interior-colour.pdf
#                                   paperback interiors (bleed); identical pages
#   <isbn>_cover-<ink>-<printer>.pdf
#                                   wrap cover per ink and enabled printer
#                                   (KDP, IngramSpark), barcode included
#   <isbn>_cover-<ink>-<printer>-no-barcode.pdf
#                                   the same cover with the barcode area left
#                                   blank, for the printer to add its own
#   <isbn>_ebook.pdf                colour PDF ebook with covers
#   <book-folder>.epub              EPUB 3
#   <book-folder>-release-report.md page counts, spine widths, ISBNs, warnings
#
# Every build, draft or release, also writes the flat covers to dist/covers/:
#   book-NN-front-cover.{pdf,png}, book-NN-front-cover-preview.png (and the same
#   for the back cover). Copy the front PNG into wwwroot by hand for the site.
#
# Values come from publishing/books.json; an empty string leaves that element
# out (docs/40-publishing/books-json-reference.md). Full builds end with the
# back-of-book index when docs/<book-folder>/index/index-terms.toml exists
# (ADR-03-0007). Preview editions never include it.

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DOCS_DIR="$ROOT_DIR/docs"
OUT_DIR="$ROOT_DIR/dist"
COVER_DIR="$OUT_DIR/covers"
PDF_TMP_DIR="$ROOT_DIR/tmp/pdfs"
CONFIG="${BOOK_PUBLISH_CONFIG:-$ROOT_DIR/publishing/books.json}"
WEB_DOWNLOADS_DIR="$ROOT_DIR/wwwroot/public/downloads"
INDEX_SCRIPT="$ROOT_DIR/scripts/build_book_index.py"
INDEX_STYLE="$ROOT_DIR/publishing/book-index.ist"
LATEX_STYLE="$ROOT_DIR/publishing/latex/howto-book.tex"
LUA_FILTER="$ROOT_DIR/publishing/pandoc/book.lua"
EPUB_CSS="$ROOT_DIR/publishing/epub/book.css"
FONT_DIR="$ROOT_DIR/publishing/fonts"
export PYTHONPATH="$ROOT_DIR${PYTHONPATH:+:$PYTHONPATH}"
export TEXINPUTS="$ROOT_DIR/publishing/latex//:${TEXINPUTS:-}"

# Pull the flags out of the arguments so the selectors below stay positional.
web_publish=0
include_index=1
edition="draft"
formats="paperback,pdf,epub"
inks=""
proof=0
remaining_args=()
expect=""
for argument in "$@"; do
  if [[ -n "$expect" ]]; then
    case "$expect" in
      edition) edition="$argument" ;;
      format) formats="$argument" ;;
      ink) inks="$argument" ;;
    esac
    expect=""
  elif [[ "$argument" == "--webpub" || "$argument" == "-webpub" ]]; then
    web_publish=1
  elif [[ "$argument" == "--no-index" ]]; then
    include_index=0
  elif [[ "$argument" == "--release" ]]; then
    edition="release"
  elif [[ "$argument" == "--edition" ]]; then
    expect="edition"
  elif [[ "$argument" == --edition=* ]]; then
    edition="${argument#--edition=}"
  elif [[ "$argument" == "--format" || "$argument" == "--formats" ]]; then
    expect="format"
  elif [[ "$argument" == --format=* ]]; then
    formats="${argument#--format=}"
  elif [[ "$argument" == "--ink" || "$argument" == "--inks" ]]; then
    expect="ink"
  elif [[ "$argument" == --ink=* || "$argument" == --inks=* ]]; then
    inks="${argument#*=}"
  elif [[ "$argument" == "--proof" ]]; then
    proof=1
  else
    remaining_args+=("$argument")
  fi
done
if [[ -n "$expect" ]]; then
  echo "Error: --$expect needs a value." >&2
  exit 1
fi
set -- "${remaining_args[@]+"${remaining_args[@]}"}"

if [[ "$edition" != "draft" && "$edition" != "release" ]]; then
  echo "Error: --edition must be draft or release, not '$edition'." >&2
  exit 1
fi
for format in ${formats//,/ }; do
  if [[ "$format" != "paperback" && "$format" != "pdf" && "$format" != "epub" ]]; then
    echo "Error: unknown format '$format' (use paperback, pdf, epub)." >&2
    exit 1
  fi
done
if [[ "$edition" == "draft" && ( "$proof" -eq 1 || "$formats" != "paperback,pdf,epub" || -n "$inks" ) ]]; then
  echo "Error: --format, --ink and --proof only apply to release builds; add --release." >&2
  exit 1
fi
# --ink takes the short names bw and colour; books.json uses black-and-white and colour.
ink_list=""
for ink in ${inks//,/ }; do
  case "$ink" in
    bw|black-and-white) ink_list+="${ink_list:+,}black-and-white" ;;
    colour|color) ink_list+="${ink_list:+,}colour" ;;
    *) echo "Error: unknown ink '$ink' (use bw, colour)." >&2; exit 1 ;;
  esac
done

require_command() {
  local command_name="$1"
  local installation_hint="$2"
  if ! command -v "$command_name" >/dev/null 2>&1; then
    echo "Error: $command_name is required ($installation_hint)." >&2
    exit 1
  fi
}

require_command pandoc "brew install pandoc"
require_command jq "install jq with your package manager"
require_command pdftoppm "brew install poppler"
require_command pdfinfo "brew install poppler"

PDF_ENGINE=""
for engine in xelatex lualatex; do
  if command -v "$engine" >/dev/null 2>&1; then
    PDF_ENGINE="$engine"
    break
  fi
done
if [[ -z "$PDF_ENGINE" ]]; then
  echo "Error: no supported PDF engine found (need xelatex or lualatex)." >&2
  echo "On macOS: brew install --cask basictex, then restart the shell." >&2
  exit 1
fi

PYTHON_BIN="${BOOK_PUBLISH_PYTHON:-}"
if [[ -z "$PYTHON_BIN" ]]; then
  PYTHON_BIN="$(command -v python3 || true)"
fi
if [[ -z "$PYTHON_BIN" ]] \
    || ! "$PYTHON_BIN" -c 'import PIL, reportlab, pypdf' >/dev/null 2>&1; then
  codex_python="${HOME}/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3"
  if [[ -x "$codex_python" ]] \
      && "$codex_python" -c 'import PIL, reportlab, pypdf' >/dev/null 2>&1; then
    PYTHON_BIN="$codex_python"
  else
    echo "Error: Python with Pillow, ReportLab, and pypdf is required." >&2
    echo "Install with: python3 -m pip install pillow reportlab pypdf" >&2
    exit 1
  fi
fi

if [[ ! -f "$CONFIG" ]]; then
  echo "Error: book metadata not found: $CONFIG" >&2
  exit 1
fi

mkdir -p "$OUT_DIR" "$COVER_DIR" "$PDF_TMP_DIR"

# Page sizes every PDF is checked against (series.print in books.json). The
# LaTeX style sets the same geometry; print interiors add bleed to the top,
# bottom and outside edge only.
TRIM_WIDTH="$(jq -r '.series.print.trimWidthInches // 7.5' "$CONFIG")"
TRIM_HEIGHT="$(jq -r '.series.print.trimHeightInches // 9.25' "$CONFIG")"
BLEED="$(jq -r '.series.print.bleedInches // 0.125' "$CONFIG")"
PRINT_WIDTH="$(awk -v w="$TRIM_WIDTH" -v b="$BLEED" 'BEGIN { print w + b }')"
PRINT_HEIGHT="$(awk -v h="$TRIM_HEIGHT" -v b="$BLEED" 'BEGIN { print h + 2 * b }')"

# Typeset a standalone .tex file. Runs enough LaTeX passes for the contents,
# notes and page references to settle; with an index, makeindex runs between
# passes (pandoc's own PDF route cannot do that).
typeset_tex() {
  local latex_dir="$1" stem="$2" with_index="$3" log="$1/typeset.log" pass passes
  : > "$log"
  if [[ "$with_index" -eq 1 ]]; then passes="1 2 index 3 index 4"; else passes="1 2 3"; fi
  for pass in $passes; do
    if [[ "$pass" == "index" ]]; then
      if ! (cd "$latex_dir" && makeindex -s "$INDEX_STYLE" "$stem.idx") >>"$log" 2>&1; then
        echo "Error: makeindex failed; see $log" >&2
        tail -n 20 "$log" >&2
        exit 1
      fi
    elif ! (cd "$latex_dir" && "$PDF_ENGINE" -interaction=nonstopmode -halt-on-error "$stem.tex") >>"$log" 2>&1; then
      echo "Error: $PDF_ENGINE failed on pass $pass; see $log" >&2
      tail -n 40 "$log" >&2
      exit 1
    fi
  done
}

# Stop the build if any page of a PDF isn't the expected size, so a wrong-sized
# file can't reach a printer. check_page_size <pdf> <width-in> <height-in>;
# a width of "-" checks the height only (wrap covers vary with the spine).
check_page_size() {
  "$PYTHON_BIN" - "$1" "$2" "$3" <<'PY' || exit 1
import sys
from pypdf import PdfReader
path, width, height = sys.argv[1], sys.argv[2], float(sys.argv[3]) * 72
for number, page in enumerate(PdfReader(path).pages, start=1):
    box = page.mediabox
    if (width != "-" and abs(float(box.width) - float(width) * 72) > 0.5) or abs(float(box.height) - height) > 0.5:
        expected = f"{width} x {sys.argv[3]}" if width != "-" else f"{sys.argv[3]} high"
        sys.exit(f"Error: {path} page {number} is {float(box.width) / 72:.3f} x {float(box.height) / 72:.3f} in; "
                 f"expected {expected} in")
PY
}

# Markdown -> PDF in the house style.
# build_interior <markdown> <output.pdf> <work-dir> <mode: print|ebook|draft> <notes: back|inline> <with-index> <accent> <resource-path>
build_interior() {
  local markdown="$1" output="$2" work_dir="$3" mode="$4" notes="$5" with_index="$6" accent="$7" resources="$8"
  local class_options="oneside,openany,10pt"
  [[ "$mode" == "print" ]] && class_options="twoside,openright,10pt"
  rm -rf "$work_dir"
  mkdir -p "$work_dir"
  cat > "$work_dir/style.tex" <<EOF
\\def\\hwMode{$mode}
\\def\\hwNotes{$notes}
\\def\\hwFontDir{$FONT_DIR/}
\\def\\hwAccentHex{${accent#\#}}
\\input{$LATEX_STYLE}
EOF
  pandoc "$markdown" \
    --standalone \
    -o "$work_dir/book.tex" \
    --resource-path="$resources" \
    --top-level-division=chapter \
    --lua-filter="$LUA_FILTER" \
    -M hw-notes="$notes" \
    -V documentclass=memoir \
    -V classoption="$class_options" \
    -H "$work_dir/style.tex"
  typeset_tex "$work_dir" book "$with_index"
  cp "$work_dir/book.pdf" "$output"
}

# One chapter through the shared preprocessing: footnote namespacing, Mermaid
# rendering, optional index markers (latex or anchors), and page-break cleanup.
chapter_markdown() {
  local chapter_file="$1" diagram_dir="$2" index_format="$3" index_terms="$4"
  local chapter_namespace
  chapter_namespace="$(basename "$chapter_file" .md)"
  "$PYTHON_BIN" "$ROOT_DIR/scripts/namespace_markdown_footnotes.py" \
    "$chapter_file" "$chapter_namespace" \
    | "$PYTHON_BIN" "$ROOT_DIR/scripts/render_mermaid_diagrams.py" \
      --source-dir "$(dirname "$chapter_file")" \
      --output-dir "$diagram_dir" \
    | if [[ -n "$index_format" ]]; then
        "$PYTHON_BIN" "$INDEX_SCRIPT" annotate \
          --terms "$index_terms" --chapter "$chapter_namespace" --format "$index_format"
      else
        cat
      fi \
    | sed 's/\\newpage[[:space:]]*$//'
  echo
}

# The index block from build_book_index.py, minus its contents line: memoir's
# \indexintoc adds that on the index's own page.
index_backmatter() {
  "$PYTHON_BIN" "$INDEX_SCRIPT" backmatter --terms "$1" \
    | grep -v '^\\addcontentsline{toc}{chapter}{\\indexname}$'
}

matter() {
  "$PYTHON_BIN" -m scripts.build_matter --config "$CONFIG" --book-number "$book_number" \
    --root-dir "$ROOT_DIR" "$@"
}

book_numbers=()
add_book_number() {
  local candidate="$1"
  local existing
  for existing in "${book_numbers[@]+"${book_numbers[@]}"}"; do
    [[ "$existing" == "$candidate" ]] && return
  done
  book_numbers+=("$candidate")
}

book_number_for_directory() {
  jq -er --arg directory "$1" \
    '.books[] | select(.sourceDirectory == $directory or (.sourceDirectory | split("/") | last) == $directory) | .number' "$CONFIG"
}

# Space-delimited chapter numbers for a preview edition, e.g. " 1 2 3 ".
preview_chapters=""
parse_chapter_list() {
  local list="$1" token start end number
  local IFS=','
  for token in $list; do
    if [[ "$token" =~ ^([0-9]+)-([0-9]+)$ ]]; then
      start=$((10#${BASH_REMATCH[1]}))
      end=$((10#${BASH_REMATCH[2]}))
    elif [[ "$token" =~ ^[0-9]+$ ]]; then
      start=$((10#$token))
      end=$start
    else
      echo "Error: '$token' is not a chapter number or range (use e.g. 01,02,03 or 01-03)." >&2
      exit 1
    fi
    if (( start < 1 || end < start )); then
      echo "Error: invalid chapter range '$token'." >&2
      exit 1
    fi
    for ((number = start; number <= end; number++)); do
      [[ " $preview_chapters " == *" $number "* ]] || preview_chapters+=" $number"
    done
  done
  preview_chapters+=" "
}

if [[ $# -eq 0 ]]; then
  while IFS= read -r number; do
    source_directory="$(jq -er --argjson number "$number" '.books[] | select(.number == $number) | .sourceDirectory' "$CONFIG")"
    if compgen -G "$DOCS_DIR/$source_directory/chapters/*.md" >/dev/null; then
      add_book_number "$number"
    fi
  done < <(jq -r '.books[].number' "$CONFIG")
elif [[ $# -eq 2 && "$1" == "book" && "$2" =~ ^[0-9]+$ ]]; then
  add_book_number "$2"
elif [[ $# -eq 4 && "$1" == "book" && "$2" =~ ^[0-9]+$ \
    && "$3" =~ ^(chap|chapter|chapters)$ ]]; then
  add_book_number "$2"
  parse_chapter_list "$4"
else
  for selector in "$@"; do
    if [[ "$selector" =~ ^[0-9]+$ ]]; then
      add_book_number "$selector"
    else
      if ! number="$(book_number_for_directory "$selector")"; then
        echo "Error: '$selector' is not a configured book number or source directory." >&2
        exit 1
      fi
      add_book_number "$number"
    fi
  done
fi

if [[ ${#book_numbers[@]} -eq 0 ]]; then
  echo "No configured books with drafted chapter content were found." >&2
  exit 1
fi

if [[ "$web_publish" -eq 1 && -z "$preview_chapters" ]]; then
  echo "Error: --webpub only publishes preview editions; add 'chap <list>' (e.g. book 1 chap 01-03)." >&2
  exit 1
fi
if [[ "$edition" == "release" && -n "$preview_chapters" ]]; then
  echo "Error: --release builds the whole book; it can't be combined with 'chap <list>'." >&2
  exit 1
fi

# ---------------------------------------------------------------- release
publish_release() {
  local release_dir="$OUT_DIR/release/$book_name"
  local work="$PDF_TMP_DIR/$book_name-release"
  local diagram_dir="$PDF_TMP_DIR/$book_name-diagrams"
  local index_terms="$DOCS_DIR/$source_directory/index/index-terms.toml"
  local build_index=0 format warnings="" proof_args=()
  [[ "$include_index" -eq 1 && -f "$index_terms" ]] && build_index=1
  [[ "$build_index" -eq 1 ]] && require_command makeindex "it ships with TeX Live and BasicTeX"
  [[ "$proof" -eq 1 ]] && proof_args=(--proof)
  # Start clean so files from an earlier build (say, before an ISBN was added)
  # can't be mistaken for this one's.
  rm -rf "$release_dir"
  mkdir -p "$release_dir" "$work"

  local paperback_inks="$ink_list"
  [[ -z "$paperback_inks" ]] && paperback_inks="$(jq -r '(.series.print.interiorInks // ["black-and-white"]) | join(",")' "$CONFIG")"

  echo "Release check for $book_name ($formats)..."
  local problems
  if ! problems="$("$PYTHON_BIN" -m scripts.book_metadata --config "$CONFIG" --book-number "$book_number" \
      --root-dir "$ROOT_DIR" --check "$formats" --inks "$paperback_inks" "${chapter_files[@]}" \
      $(find "$DOCS_DIR/$source_directory/frontmatter" "$DOCS_DIR/$source_directory/backmatter" \
        -maxdepth 1 -name '*.md' 2>/dev/null | sort))"; then
    if [[ "$proof" -eq 1 ]]; then
      warnings+="$problems"$'\n'
      echo "$problems" | sed 's/^/  proof warning: /' | sed "s|$ROOT_DIR/||"
    else
      echo "Error: $book_name is not ready for release:" >&2
      echo "$problems" | sed 's/^/  - /' | sed "s|$ROOT_DIR/||" >&2
      echo "Fix these, or add --proof to build a marked proof anyway." >&2
      exit 1
    fi
  fi

  local paperback_isbn colour_isbn pdf_isbn epub_isbn accent
  paperback_isbn="$(jq -r '.editions.paperback.isbn // empty' <<<"$book_json" | tr -d ' -')"
  colour_isbn="$(jq -r '.editions.paperbackColour.isbn // empty' <<<"$book_json" | tr -d ' -')"
  pdf_isbn="$(jq -r '.editions.pdf.isbn // empty' <<<"$book_json" | tr -d ' -')"
  epub_isbn="$(jq -r '.editions.epub.isbn // empty' <<<"$book_json" | tr -d ' -')"
  accent="$(jq -r '.accentColour // "#7C3AED"' <<<"$book_json")"

  # Shared front cover and PDF edition back cover.
  "$PYTHON_BIN" -m scripts.release_cover front --config "$CONFIG" --book-number "$book_number" \
    --root-dir "$ROOT_DIR" --output "$work/front-cover.pdf" >/dev/null
  "$PYTHON_BIN" -m scripts.release_cover back --variant pdf --config "$CONFIG" --book-number "$book_number" \
    --root-dir "$ROOT_DIR" --output "$work/back-cover-ebook.pdf" >/dev/null
  # Cover assets for the site, as draft builds make them: PDF, full-size PNG at
  # 300 DPI and a small preview PNG. Copying them into wwwroot stays manual.
  local padded_number cover_name cover_stem
  padded_number="$(printf '%02d' "$book_number")"
  for cover_name in front back; do
    cover_stem="$COVER_DIR/book-$padded_number-$cover_name-cover"
    if [[ "$cover_name" == "front" ]]; then
      cp "$work/front-cover.pdf" "$cover_stem.pdf"
    else
      cp "$work/back-cover-ebook.pdf" "$cover_stem.pdf"
    fi
    pdftoppm -png -r 300 -singlefile "$cover_stem.pdf" "$cover_stem"
    pdftoppm -png -scale-to-x 630 -scale-to-y -1 -singlefile "$cover_stem.pdf" "$cover_stem-preview"
    echo "  -> $cover_stem.png"
  done

  local report="$release_dir/$book_name-release-report.md"
  {
    echo "# Release report: $book_title"
    echo
    echo "- Built: $(date '+%Y-%m-%d %H:%M')"
    echo "- Edition: $([[ "$proof" -eq 1 ]] && echo "proof (not for sale)" || echo "release")"
    echo "- Formats: $formats"
    echo "- ISBNs: paperback (black and white) ${paperback_isbn:-none}, paperback (colour) ${colour_isbn:-none}, PDF ${pdf_isbn:-none}, EPUB ${epub_isbn:-none}"
  } > "$report"

  if [[ ",$formats," == *",paperback,"* || ",$formats," == *",pdf,"* ]]; then
    local latex_md="$work/book-latex.md"
    {
      matter --part front --edition release "${proof_args[@]+"${proof_args[@]}"}"
      for chapter_file in "${chapter_files[@]}"; do
        if [[ "$build_index" -eq 1 ]]; then
          chapter_markdown "$chapter_file" "$diagram_dir" latex "$index_terms"
        else
          chapter_markdown "$chapter_file" "$diagram_dir" "" ""
        fi
      done
      matter --part notes --edition release
      [[ "$build_index" -eq 1 ]] && index_backmatter "$index_terms"
      matter --part about --edition release
    } > "$latex_md"
  fi

  if [[ ",$formats," == *",paperback,"* ]]; then
    # One typesetting run serves every ink, so the interiors have identical
    # pages; each ink is then its own product with its own ISBN (ADR-03-0010).
    echo "  paperback interior (mirror margins, bleed; inks: $paperback_inks)..."
    build_interior "$latex_md" "$work/interior-colour.pdf" "$work/print" print back "$build_index" "$accent" \
      "$chapters_dir:$ROOT_DIR"
    require_command gs "brew install ghostscript"
    local ink ink_short stem interior colour_args pages printer barcode_mode
    for ink in ${paperback_inks//,/ }; do
      if [[ "$ink" == "colour" ]]; then
        ink_short=colour
        stem="${colour_isbn:-$book_name-paperback-colour}"
        colour_args=(-sColorConversionStrategy=LeaveColorUnchanged)
      else
        ink_short=bw
        stem="${paperback_isbn:-$book_name-paperback-bw}"
        colour_args=(-sColorConversionStrategy=Gray -dProcessColorModel=/DeviceGray)
      fi
      interior="$release_dir/${stem}_interior-$ink_short.pdf"
      gs -q -dSAFER -dBATCH -dNOPAUSE -sDEVICE=pdfwrite -dCompatibilityLevel=1.6 "${colour_args[@]}" \
        -dEmbedAllFonts=true -dSubsetFonts=true -dAutoRotatePages=/None \
        -sOutputFile="$interior" "$work/interior-colour.pdf"
      check_page_size "$interior" "$PRINT_WIDTH" "$PRINT_HEIGHT"
      pages="$(pdfinfo "$interior" | awk '/^Pages:/{print $2}')"
      echo "  -> $interior ($pages pages)"
      echo "- Paperback interior ($ink): \`$(basename "$interior")\`, $pages pages, $TRIM_WIDTH × $TRIM_HEIGHT in plus $BLEED in bleed" >> "$report"
      for printer in $(jq -r '.series.print.printers // {} | to_entries[] | select(.value.enabled != false) | .key' "$CONFIG"); do
        for barcode_mode in barcode no-barcode; do
          local cover_output spine_line log barcode_args=() suffix=""
          if [[ "$barcode_mode" == "no-barcode" ]]; then
            barcode_args=(--no-barcode)
            suffix="-no-barcode"
          fi
          cover_output="$release_dir/${stem}_cover-$ink_short-$printer$suffix.pdf"
          log="$work/cover-$ink_short-$printer$suffix.log"
          spine_line="$("$PYTHON_BIN" -m scripts.release_cover wrap --config "$CONFIG" --book-number "$book_number" \
            --root-dir "$ROOT_DIR" --output "$cover_output" --printer "$printer" --pages "$pages" \
            --ink "$ink" "${barcode_args[@]+"${barcode_args[@]}"}" 2>"$log" | head -1)"
          if [[ -s "$log" ]]; then
            warnings+="$(sed "s/^/$ink $printer cover: /" "$log")"$'\n'
            sed 's/^/  /' "$log"
          fi
          check_page_size "$cover_output" - "$PRINT_HEIGHT"
          echo "  -> $cover_output (${spine_line#spine=} spine)"
          echo "- Cover ($ink, $printer${suffix:+, no barcode}): \`$(basename "$cover_output")\`, spine ${spine_line#spine=} for $pages pages" >> "$report"
        done
      done
    done
  fi

  if [[ ",$formats," == *",pdf,"* ]]; then
    echo "  PDF ebook (colour, linked)..."
    build_interior "$latex_md" "$work/ebook-interior.pdf" "$work/ebook" ebook back "$build_index" "$accent" \
      "$chapters_dir:$ROOT_DIR"
    local ebook_stem="${pdf_isbn:-$book_name}"
    local ebook="$release_dir/${ebook_stem}_ebook.pdf"
    "$PYTHON_BIN" - "$work/front-cover.pdf" "$work/ebook-interior.pdf" "$work/back-cover-ebook.pdf" "$ebook" \
        "$book_title" "$author" "$pdf_isbn" <<'PY'
import sys
from pypdf import PdfReader, PdfWriter
front, interior, back, output, title, author, isbn = sys.argv[1:8]
writer = PdfWriter()
writer.clone_document_from_reader(PdfReader(interior))
writer.insert_page(PdfReader(front).pages[0], 0)
writer.add_page(PdfReader(back).pages[0])
metadata = {"/Title": title, "/Author": author}
if isbn:
    metadata["/Subject"] = f"ISBN {isbn}"
writer.add_metadata(metadata)
with open(output, "wb") as stream:
    writer.write(stream)
PY
    check_page_size "$ebook" "$TRIM_WIDTH" "$TRIM_HEIGHT"
    echo "  -> $ebook"
    echo "- PDF ebook: \`${ebook_stem}_ebook.pdf\`, $(pdfinfo "$ebook" | awk '/^Pages:/{print $2}') pages" >> "$report"
  fi

  if [[ ",$formats," == *",epub,"* ]]; then
    echo "  EPUB..."
    local epub_md="$work/book-epub.md" svg_dir="$work/epub-diagrams"
    mkdir -p "$svg_dir"
    {
      matter --part front --target epub --edition release "${proof_args[@]+"${proof_args[@]}"}"
      for chapter_file in "${chapter_files[@]}"; do
        if [[ "$build_index" -eq 1 ]]; then
          chapter_markdown "$chapter_file" "$diagram_dir" anchors "$index_terms"
        else
          chapter_markdown "$chapter_file" "$diagram_dir" "" ""
        fi
      done
      matter --part notes --target epub --edition release
      if [[ "$build_index" -eq 1 ]]; then
        "$PYTHON_BIN" "$INDEX_SCRIPT" backmatter --terms "$index_terms" --format anchors --chapters-dir "$chapters_dir"
      fi
      matter --part about --target epub --edition release
    } > "$epub_md"
    # EPUB readers need SVG or PNG, so each rendered diagram PDF gets an SVG twin.
    local diagram_pdf
    for diagram_pdf in "$diagram_dir"/*.pdf; do
      [[ -f "$diagram_pdf" ]] || continue
      pdftocairo -svg "$diagram_pdf" "$svg_dir/$(basename "${diagram_pdf%.pdf}").svg"
    done
    sed -i.bak "s|$diagram_dir/\([^)]*\)\.pdf|$svg_dir/\1.svg|g" "$epub_md" && rm -f "$epub_md.bak"
    pdftoppm -png -r 200 -singlefile "$work/front-cover.pdf" "$work/epub-cover"
    local epub="$release_dir/$book_name.epub" font_args=() font
    for font in "$FONT_DIR"/*.ttf; do font_args+=(--epub-embed-font="$font"); done
    local subtitle publisher identifier_args=()
    subtitle="$(jq -r '.description // ""' <<<"$book_json")"
    publisher="$(jq -r '.series.publisher.name // ""' "$CONFIG")"
    [[ -n "$epub_isbn" ]] && identifier_args=(-M identifier="urn:isbn:$epub_isbn")
    pandoc "$epub_md" -o "$epub" \
      --to epub3 \
      --resource-path="$chapters_dir:$ROOT_DIR" \
      --top-level-division=chapter \
      --split-level=1 \
      --toc --toc-depth=1 \
      --lua-filter="$LUA_FILTER" -M hw-notes=back \
      --css="$EPUB_CSS" "${font_args[@]}" \
      --epub-cover-image="$work/epub-cover.png" \
      -M title="$book_title" -M subtitle="$subtitle" -M author="$author" \
      -M publisher="$publisher" -M lang=en-AU -M date="$(date +%Y-%m-%d)" \
      "${identifier_args[@]+"${identifier_args[@]}"}"
    echo "  -> $epub"
    if command -v epubcheck >/dev/null 2>&1; then
      if epubcheck -q "$epub" >"$work/epubcheck.log" 2>&1; then
        echo "- EPUB: \`$book_name.epub\`, passed epubcheck" >> "$report"
      else
        echo "  epubcheck reported problems; see $work/epubcheck.log"
        echo "- EPUB: \`$book_name.epub\`, epubcheck reported problems (see tmp/pdfs/$book_name-release/epubcheck.log)" >> "$report"
      fi
    else
      echo "- EPUB: \`$book_name.epub\` (not validated: brew install epubcheck)" >> "$report"
    fi
  fi

  if [[ -n "$warnings" ]]; then
    {
      echo
      echo "## Warnings"
      echo
      printf '%s' "$warnings" | sed '/^$/d' | sed "s|$ROOT_DIR/||" | sed 's/^/- /'
    } >> "$report"
  fi
  echo "  -> $report"
}

# ---------------------------------------------------------------- draft / preview
publish_draft() {
  local edition_suffix="" preview_args=()
  if [[ -n "$preview_chapters" ]]; then
    # Keep the requested chapters plus any non-chapter file (front matter) that
    # sorts before the last requested chapter; drop everything else.
    local total_chapters=0 last_selected_index=-1 found_chapters=" " index number
    for index in "${!chapter_files[@]}"; do
      if [[ "$(basename "${chapter_files[$index]}")" =~ ^chapter-([0-9]+)- ]]; then
        total_chapters=$((total_chapters + 1))
        number=$((10#${BASH_REMATCH[1]}))
        if [[ "$preview_chapters" == *" $number "* ]]; then
          last_selected_index=$index
          found_chapters+="$number "
        fi
      fi
    done
    for number in $preview_chapters; do
      if [[ "$found_chapters" != *" $number "* ]]; then
        echo "Error: $book_name has no chapter $number in $chapters_dir." >&2
        exit 1
      fi
    done

    local preview_files=()
    for index in "${!chapter_files[@]}"; do
      (( index > last_selected_index )) && break
      if [[ "$(basename "${chapter_files[$index]}")" =~ ^chapter-([0-9]+)- ]]; then
        [[ "$preview_chapters" == *" $((10#${BASH_REMATCH[1]})) "* ]] || continue
      fi
      preview_files+=("${chapter_files[$index]}")
    done
    chapter_files=("${preview_files[@]}")

    edition_suffix="-preview"
    local preview_list
    preview_list="$(echo $preview_chapters | tr ' ' ',')"
    preview_args=(--preview-chapters "$preview_list" --total-chapters "$total_chapters")
  fi

  local index_terms="$DOCS_DIR/$source_directory/index/index-terms.toml"
  local build_index=0
  if [[ "$include_index" -eq 1 && -z "$preview_chapters" && -f "$index_terms" ]]; then
    build_index=1
    require_command makeindex "it ships with TeX Live and BasicTeX"
  fi

  echo "Publishing $book_name$edition_suffix (${#chapter_files[@]} manuscript files)..."
  [[ "$build_index" -eq 1 ]] && echo "  with back-of-book index from ${index_terms#"$ROOT_DIR/"}"
  local combined_md="$OUT_DIR/$book_name$edition_suffix.md"
  local manuscript_pdf="$PDF_TMP_DIR/$book_name$edition_suffix-manuscript.pdf"
  local diagram_output_dir="$PDF_TMP_DIR/$book_name-diagrams"
  local output_pdf="$OUT_DIR/$book_name$edition_suffix.pdf"
  # Previews are public, so their copyright page says "Preview edition", not "internal review".
  local matter_edition=draft
  [[ -n "$preview_chapters" ]] && matter_edition=preview

  {
    matter --part front --edition "$matter_edition"
    for chapter_file in "${chapter_files[@]}"; do
      if [[ "$build_index" -eq 1 ]]; then
        chapter_markdown "$chapter_file" "$diagram_output_dir" latex "$index_terms"
      else
        chapter_markdown "$chapter_file" "$diagram_output_dir" "" ""
      fi
    done
    matter --part notes --edition "$matter_edition"
    [[ "$build_index" -eq 1 ]] && index_backmatter "$index_terms"
    if [[ -z "$preview_chapters" ]]; then
      matter --part about --edition draft
    fi
  } > "$combined_md"

  local padded_number front_cover back_cover accent
  padded_number="$(printf '%02d' "$book_number")"
  front_cover="$COVER_DIR/book-$padded_number-front-cover"
  back_cover="$COVER_DIR/book-$padded_number-back-cover"
  "$PYTHON_BIN" -m scripts.release_cover front --config "$CONFIG" --book-number "$book_number" \
    --root-dir "$ROOT_DIR" --output "$front_cover.pdf" >/dev/null
  # Public previews get the clean back cover; only internal drafts carry the review notice.
  local back_variant=draft
  [[ -n "$preview_chapters" ]] && back_variant=ebook
  "$PYTHON_BIN" -m scripts.release_cover back --variant "$back_variant" --config "$CONFIG" --book-number "$book_number" \
    --root-dir "$ROOT_DIR" --output "$back_cover.pdf" >/dev/null
  # PNG copies for review and the site: full size at 300 DPI plus a small preview.
  local cover
  for cover in "$front_cover" "$back_cover"; do
    pdftoppm -png -r 300 -singlefile "$cover.pdf" "$cover"
    pdftoppm -png -scale-to-x 630 -scale-to-y -1 -singlefile "$cover.pdf" "$cover-preview"
  done

  accent="$(jq -r '.accentColour // "#7C3AED"' <<<"$book_json")"
  build_interior "$combined_md" "$manuscript_pdf" "$PDF_TMP_DIR/$book_name$edition_suffix-latex" \
    draft back "$build_index" "$accent" "$chapters_dir:$ROOT_DIR"

  "$PYTHON_BIN" -m scripts.assemble_draft_book \
    --config "$CONFIG" \
    --book-number "$book_number" \
    --front "$front_cover.pdf" \
    --manuscript "$manuscript_pdf" \
    --back "$back_cover.pdf" \
    --output "$output_pdf" \
    "${preview_args[@]+"${preview_args[@]}"}" >/dev/null
  check_page_size "$output_pdf" "$TRIM_WIDTH" "$TRIM_HEIGHT"

  echo "  -> $output_pdf"

  if [[ "$web_publish" -eq 1 ]]; then
    local title_slug web_pdf
    title_slug="$(printf '%s' "$book_title" | tr '[:upper:]' '[:lower:]' \
      | sed -e 's/[^a-z0-9]\{1,\}/-/g' -e 's/^-//' -e 's/-$//')"
    web_pdf="$WEB_DOWNLOADS_DIR/$title_slug-preview.pdf"
    mkdir -p "$WEB_DOWNLOADS_DIR"
    cp "$output_pdf" "$web_pdf"
    echo "  -> $web_pdf (site download)"
  fi
}

published_any=0
for book_number in "${book_numbers[@]}"; do
  if ! book_json="$(jq -ce --argjson number "$book_number" '.books[] | select(.number == $number)' "$CONFIG")"; then
    echo "Error: Book $book_number is not defined in $CONFIG." >&2
    exit 1
  fi

  source_directory="$(jq -r '.sourceDirectory' <<<"$book_json")"
  # Output files use the book folder alone: 30-books/31-book-01 -> 31-book-01.
  book_name="$(basename "$source_directory")"
  book_title="$(jq -r '.title' <<<"$book_json")"
  author="$(jq -r '.series.author' "$CONFIG")"
  chapters_dir="$DOCS_DIR/$source_directory/chapters"

  if [[ ! -d "$chapters_dir" ]]; then
    echo "Skipping $book_name: no chapters/ directory." >&2
    continue
  fi

  chapter_files=()
  while IFS= read -r chapter_file; do
    chapter_files+=("$chapter_file")
  done < <(find "$chapters_dir" -maxdepth 1 -name '*.md' | sort)

  if [[ ${#chapter_files[@]} -eq 0 ]]; then
    echo "Skipping $book_name: no drafted chapters yet." >&2
    continue
  fi

  if [[ "$edition" == "release" ]]; then
    publish_release
  else
    publish_draft
  fi
  published_any=1
done

if [[ "$published_any" -eq 0 ]]; then
  echo "Nothing was published." >&2
  exit 1
fi

if [[ "$edition" == "release" ]]; then
  echo "Done. Release files are in $OUT_DIR/release/ and cover assets are in $COVER_DIR/."
else
  echo "Done. Review PDFs are in $OUT_DIR/ and cover assets are in $COVER_DIR/."
fi
