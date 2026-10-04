# Book 1 Index

This folder holds the back-of-book index for Book 1 (ADR-03-0007).

| File | What it is |
| --- | --- |
| `index-terms.toml` | The term list. **Edit this one.** It decides what goes in the index. |
| `book-01-index-lines.md` | Generated working index: every entry with clickable line links into the chapters. Do not edit by hand. |

The chapters themselves carry no index markup. The build finds the phrases
listed in `index-terms.toml` and turns them into a page-numbered index at the
end of the PDF.

## Adding or Changing an Entry

Add an `[[entry]]` table to `index-terms.toml`:

```toml
[[entry]]
term = "Hallucination"            # the heading a reader looks up
match = ["hallucinat*"]           # phrases in the text; * matches any word ending
see_also = ["Confabulation"]      # optional related headings
```

Other options are documented at the top of the term list: `sub` for subentries,
`case` for names and acronyms, `chapters` to limit an entry to some chapters,
`scope = "chapter"` for broad terms, `see` for pure cross-references, and `sort`.

Phrases in headings, Chapter Notes, captions and author placeholders are never
indexed, so match the wording used in the body text.

## After Editing the Term List or a Chapter

Regenerate the line index and check that every term still matches:

```text
python3 scripts/build_book_index.py report \
  --terms docs/30-books/31-book-01/index/index-terms.toml \
  --chapters-dir docs/30-books/31-book-01/chapters \
  --output docs/30-books/31-book-01/index/book-01-index-lines.md

python3 scripts/build_book_index.py check \
  --terms docs/30-books/31-book-01/index/index-terms.toml \
  --chapters-dir docs/30-books/31-book-01/chapters
```

`check` fails if a term matches nothing or a cross-reference points to a missing
heading. The **Coverage Notes** at the end of the line index list very broad
headings and phrases that no longer match anything.

## Building the PDF With the Index

`./pub-books.sh book 1` includes the index automatically. Add
`--no-index` to leave it out. Preview editions (`chap 01-03`) never include it.

## EPUB

The same term list can produce a linked index for EPUB or the website:

```text
python3 scripts/build_book_index.py annotate --terms … --chapter <file> --format anchors
python3 scripts/build_book_index.py backmatter --terms … --chapters-dir … --format anchors
```

This is ready for when the EPUB build is created (see OI-0006).
