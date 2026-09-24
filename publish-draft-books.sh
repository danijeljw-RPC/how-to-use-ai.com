#!/usr/bin/env bash
# Build publication-structured internal-review PDFs for drafted books.
#
# Usage:
#   ./publish-draft-books.sh                 # every configured book with chapters
#   ./publish-draft-books.sh book 1          # Book 1 by number
#   ./publish-draft-books.sh 1               # shorthand for Book 1
#   ./publish-draft-books.sh 02-book-01      # legacy source-directory selector
#   ./publish-draft-books.sh book 1 chap 01,02,03
#                                            # preview edition: chapters 1-3 plus
#                                            # any front matter sorted before them,
#                                            # an end-of-preview page, and the back
#                                            # cover (ranges such as 01-03 also work)
#
# Preview editions are written to dist/<source-directory>-preview.pdf.

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DOCS_DIR="$ROOT_DIR/docs"
OUT_DIR="$ROOT_DIR/dist"
COVER_DIR="$OUT_DIR/covers"
PDF_TMP_DIR="$ROOT_DIR/tmp/pdfs"
CONFIG="$ROOT_DIR/publishing/books.json"

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
  echo "Error: cover metadata not found: $CONFIG" >&2
  exit 1
fi

mkdir -p "$OUT_DIR" "$COVER_DIR" "$PDF_TMP_DIR"

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
  jq -er --arg directory "$1" '.books[] | select(.sourceDirectory == $directory) | .number' "$CONFIG"
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

published_any=0
for book_number in "${book_numbers[@]}"; do
  if ! book_json="$(jq -ce --argjson number "$book_number" '.books[] | select(.number == $number)' "$CONFIG")"; then
    echo "Error: Book $book_number is not defined in $CONFIG." >&2
    exit 1
  fi

  book_name="$(jq -r '.sourceDirectory' <<<"$book_json")"
  book_title="$(jq -r '.title' <<<"$book_json")"
  book_description="$(jq -r '.description // ""' <<<"$book_json")"
  series_title="$(jq -r '.series.title' "$CONFIG")"
  author="$(jq -r '.series.author' "$CONFIG")"
  chapters_dir="$DOCS_DIR/$book_name/chapters"

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

  edition_suffix=""
  preview_args=()
  if [[ -n "$preview_chapters" ]]; then
    # Keep the requested chapters plus any non-chapter file (front matter) that
    # sorts before the last requested chapter; drop everything else.
    total_chapters=0
    last_selected_index=-1
    found_chapters=" "
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

    preview_files=()
    for index in "${!chapter_files[@]}"; do
      (( index > last_selected_index )) && break
      if [[ "$(basename "${chapter_files[$index]}")" =~ ^chapter-([0-9]+)- ]]; then
        [[ "$preview_chapters" == *" $((10#${BASH_REMATCH[1]})) "* ]] || continue
      fi
      preview_files+=("${chapter_files[$index]}")
    done
    chapter_files=("${preview_files[@]}")

    edition_suffix="-preview"
    preview_list="$(echo $preview_chapters | tr ' ' ',')"
    preview_args=(--preview-chapters "$preview_list" --total-chapters "$total_chapters")
  fi

  echo "Publishing $book_name$edition_suffix (${#chapter_files[@]} manuscript files)..."
  combined_md="$OUT_DIR/$book_name$edition_suffix.md"
  manuscript_pdf="$PDF_TMP_DIR/$book_name$edition_suffix-manuscript.pdf"
  diagram_output_dir="$PDF_TMP_DIR/$book_name-diagrams"
  output_pdf="$OUT_DIR/$book_name$edition_suffix.pdf"

  title_json="$(jq -cn --arg value "$book_title" '$value')"
  description_json="$(jq -cn --arg value "$book_description" '$value')"
  author_json="$(jq -cn --arg value "$author" '$value')"
  series_json="$(jq -cn --arg value "$series_title" '$value')"
  {
    echo "---"
    echo "title: $title_json"
    [[ -n "$book_description" ]] && echo "subtitle: $description_json"
    echo "author: $author_json"
    echo "date: \"$(date +%Y-%m-%d)\""
    echo "series: $series_json"
    echo "documentclass: book"
    echo "classoption: oneside"
    echo "---"
    echo
    if [[ -z "$preview_chapters" ]]; then
      echo "> Internal review draft. Not for sale or public distribution."
      echo
    fi
    for chapter_file in "${chapter_files[@]}"; do
      chapter_namespace="$(basename "$chapter_file" .md)"
      "$PYTHON_BIN" "$ROOT_DIR/scripts/namespace_markdown_footnotes.py" \
        "$chapter_file" "$chapter_namespace" \
        | "$PYTHON_BIN" "$ROOT_DIR/scripts/render_mermaid_diagrams.py" \
          --source-dir "$(dirname "$chapter_file")" \
          --output-dir "$diagram_output_dir" \
        | sed 's/\\newpage[[:space:]]*$//'
      echo
      printf '%s\n' '\newpage'
      echo
    done
  } > "$combined_md"

  "$PYTHON_BIN" "$ROOT_DIR/scripts/cover_generator.py" \
    --config "$CONFIG" \
    --book-number "$book_number" \
    --root-dir "$ROOT_DIR" \
    --output-dir "$COVER_DIR"

  no_hyphenate_args=()
  if command -v kpsewhich >/dev/null 2>&1 \
      && kpsewhich hyphenat.sty >/dev/null 2>&1; then
    no_hyphenate_args=(-V header-includes='\usepackage[none]{hyphenat}')
  fi

  pandoc "$combined_md" \
    -o "$manuscript_pdf" \
    --pdf-engine="$PDF_ENGINE" \
    --resource-path="$chapters_dir:$ROOT_DIR" \
    --toc \
    --toc-depth=2 \
    --top-level-division=chapter \
    -V documentclass=book \
    -V classoption=oneside \
    -V geometry:paperwidth=7in,paperheight=10in,top=0.78in,bottom=0.82in,left=0.82in,right=0.72in \
    -V mainfont="Arial" \
    "${no_hyphenate_args[@]+"${no_hyphenate_args[@]}"}"

  padded_number="$(printf '%02d' "$book_number")"
  "$PYTHON_BIN" "$ROOT_DIR/scripts/assemble_draft_book.py" \
    --config "$CONFIG" \
    --book-number "$book_number" \
    --front "$COVER_DIR/book-$padded_number-front-cover.pdf" \
    --manuscript "$manuscript_pdf" \
    --back "$COVER_DIR/book-$padded_number-back-cover.pdf" \
    --output "$output_pdf" \
    "${preview_args[@]+"${preview_args[@]}"}"

  echo "  -> $output_pdf"
  published_any=1
done

if [[ "$published_any" -eq 0 ]]; then
  echo "Nothing was published." >&2
  exit 1
fi

echo "Done. Review PDFs are in $OUT_DIR/ and cover assets are in $COVER_DIR/."
