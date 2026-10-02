#!/usr/bin/env python3
"""Build a back-of-book index from a curated term list.

The chapter Markdown is never edited. Index markers are added on the way into
the publication build, so the same sources stay clean for the website and video
adaptations.

Sub-commands:
  annotate    read one chapter on stdin and write it with index markers added
  backmatter  print the block that closes the book with the index
  report      write the line-referenced Markdown index of the chapter sources
  check       fail when a term no longer matches anything, or a reference is broken

Formats (annotate and backmatter):
  latex    \\index{...} markers for makeindex; the PDF and print builds
  anchors  []{#id} anchors plus a linked index chapter; for EPUB and web builds
"""

from __future__ import annotations

import argparse
import os
import re
import sys
import tomllib
from collections import defaultdict
from dataclasses import dataclass, field
from pathlib import Path


SCOPES = ("paragraph", "chapter")
ENTRY_KEYS = {"term", "sub", "sort", "match", "case", "chapters", "scope", "see", "see_also"}
BROAD_TERM_LOCATORS = 40

CHAPTER_FILE = re.compile(r"^chapter-(\d+)-")
NOTES_HEADING = re.compile(r"^#{1,6}\s+(Chapter )?Notes\s*$")
FOOTNOTE_DEFINITION = re.compile(r"^\[\^[^\]]+\]:")
FENCE = re.compile(r"^\s*(```|~~~)")
PLACEHOLDER = re.compile(r"^>\s*\[(Author|Diagram)\b")
TABLE_RULE = re.compile(r"^\s*\|?\s*:?-{3,}")

# Spans inside an indexable line that must never be matched or split.
PROTECTED_SPANS = re.compile(
    r"`[^`]*`(?:\{[^}]*\})?"      # inline code, including raw `...`{=latex}
    r"|<!--.*?-->"                # inline HTML comments
    r"|\[\^[^\]]*\]"              # footnote references
    r"|\]\([^)]*\)"               # link and image targets
    r"|\{[^}]*\}"                 # attribute blocks such as { width=50% }
    r"|<[^>\s]+>"                 # autolinks and HTML tags
    r"|https?://\S+"              # bare URLs
)


@dataclass(frozen=True)
class Rule:
    pattern: re.Pattern[str]
    chapters: frozenset[str] | None


@dataclass
class Entry:
    term: str
    sub: str | None
    sort: str
    sub_sort: str | None
    scope: str
    rules: list[Rule] = field(default_factory=list)
    see: str | None = None
    see_also: list[str] = field(default_factory=list)

    @property
    def label(self) -> str:
        return f"{self.term} > {self.sub}" if self.sub else self.term


@dataclass(frozen=True)
class Hit:
    entry: Entry
    line: int    # 1-based line number in the chapter file
    offset: int  # character offset in that line where a marker belongs
    # Set for hits inside a pipe table: the table's first line. Markers go in
    # their own block before the table, because longer cells would make
    # pandoc lay the table out differently.
    table_start: int | None = None


# ---------------------------------------------------------------------------
# Term list


def default_sort_key(text: str) -> str:
    """Lower-case sort key that ignores leading quotes and punctuation."""
    return re.sub(r"^[^0-9a-z]+", "", text.lower()) or text.lower()


def compile_phrase(phrase: str, case_sensitive: bool) -> re.Pattern[str]:
    """Turn a term-list phrase into a whole-word regular expression.

    A trailing ``*`` on a word matches any word ending (``hallucinat*``), and a
    space or hyphen between words matches either, so ``decision support`` also
    finds ``decision-support``.
    """
    if not phrase.strip():
        raise ValueError("Empty match phrase in index term list")
    parts = []
    for word in re.split(r"[\s-]+", phrase.strip()):
        stem = word[:-1] if word.endswith("*") else word
        if not stem:
            raise ValueError(f"Match phrase {phrase!r} has a bare '*'")
        parts.append(re.escape(stem) + (r"\w*" if word.endswith("*") else ""))
    body = r"[\s\-]+".join(parts)
    flags = 0 if case_sensitive else re.IGNORECASE
    return re.compile(rf"(?<!\w){body}(?!\w)", flags)


def chapter_id_for(name: str) -> str:
    """Identify a manuscript file: chapter-03-x.md -> "3", epilogue-x.md -> "epilogue"."""
    stem = Path(name).stem
    match = CHAPTER_FILE.match(stem)
    if match:
        return str(int(match.group(1)))
    return stem.split("-", 1)[0]


def chapter_label(chapter_id: str) -> str:
    return f"Ch {chapter_id}" if chapter_id.isdigit() else chapter_id.capitalize()


def load_entries(path: Path) -> list[Entry]:
    with path.open("rb") as handle:
        data = tomllib.load(handle)
    raw_entries = data.get("entry", [])
    if not isinstance(raw_entries, list) or not raw_entries:
        raise ValueError(f"{path} has no [[entry]] tables")

    entries: dict[tuple[str, str | None], Entry] = {}
    for position, raw in enumerate(raw_entries, start=1):
        unknown = set(raw) - ENTRY_KEYS
        if unknown:
            raise ValueError(f"Entry {position} has unknown keys: {', '.join(sorted(unknown))}")
        term = raw.get("term", "").strip()
        if not term:
            raise ValueError(f"Entry {position} has no term")
        sub = raw.get("sub")
        sub = sub.strip() if isinstance(sub, str) and sub.strip() else None
        scope = raw.get("scope", "paragraph")
        if scope not in SCOPES:
            raise ValueError(f"{term}: scope must be one of {SCOPES}")
        matches = raw.get("match", [])
        if isinstance(matches, str):
            matches = [matches]
        if not matches and "see" not in raw and "see_also" not in raw:
            raise ValueError(f"{term}: needs match phrases or a see reference")
        if sub and ("see" in raw or "see_also" in raw):
            raise ValueError(f"{term} > {sub}: put see references on the main term")
        chapters = raw.get("chapters")
        chapter_set = frozenset(str(item).lower() for item in chapters) if chapters else None

        key = (term, sub)
        entry = entries.get(key)
        if entry is None:
            entry = Entry(
                term=term,
                sub=sub,
                sort=default_sort_key(term),
                sub_sort=default_sort_key(sub) if sub else None,
                scope=scope,
            )
            entries[key] = entry
        elif entry.scope != scope:
            raise ValueError(f"{entry.label}: every definition must use the same scope")
        if "sort" in raw:
            if sub:
                entry.sub_sort = raw["sort"]
            else:
                entry.sort = raw["sort"]
        for phrase in matches:
            entry.rules.append(Rule(compile_phrase(phrase, bool(raw.get("case"))), chapter_set))
        if "see" in raw:
            entry.see = raw["see"].strip()
        see_also = raw.get("see_also", [])
        entry.see_also.extend([see_also] if isinstance(see_also, str) else see_also)

    # A subentry needs its main heading in the index even if the main term has
    # no locators of its own; makeindex creates it, the other formats need it.
    for term, sub in list(entries):
        if sub and (term, None) not in entries:
            entries[(term, None)] = Entry(
                term=term, sub=None, sort=entries[(term, sub)].sort, sub_sort=None, scope="paragraph"
            )
    # Subentries share their main heading's sort key, or makeindex would file
    # them under a second copy of the heading.
    for (term, sub), entry in entries.items():
        if sub:
            entry.sort = entries[(term, None)].sort
    return sorted(entries.values(), key=lambda e: (e.sort, e.term, e.sub_sort or "", e.sub or ""))


def broken_references(entries: list[Entry]) -> list[str]:
    terms = {entry.term for entry in entries}
    problems = []
    for entry in entries:
        for target in ([entry.see] if entry.see else []) + entry.see_also:
            if target not in terms:
                problems.append(f"{entry.label}: refers to missing term {target!r}")
    return problems


# ---------------------------------------------------------------------------
# Finding terms in a chapter


def mask_protected(line: str) -> str:
    """Blank out protected spans without changing character offsets."""
    return PROTECTED_SPANS.sub(lambda match: "\0" * len(match.group(0)), line)


def indexable_blocks(lines: list[str]) -> list[list[tuple[int, str]]]:
    """Group a chapter's indexable lines into blocks (paragraphs, lists, tables).

    Returns blocks of (line number, masked text). Headings, code, footnote
    definitions, placeholders, images, HTML comment blocks and everything from
    the Chapter Notes heading onwards are left out.
    """
    blocks: list[list[tuple[int, str]]] = []
    current: list[tuple[int, str]] = []
    skip_block = False
    in_fence = False
    in_comment = False

    def close() -> None:
        nonlocal current, skip_block
        if current and not skip_block:
            blocks.append(current)
        current, skip_block = [], False

    for number, line in enumerate(lines, start=1):
        stripped = line.strip()
        if in_fence:
            if FENCE.match(line):
                in_fence = False
            continue
        if in_comment:
            if "-->" in line:
                in_comment = False
            continue
        if FENCE.match(line):
            close()
            in_fence = True
            continue
        if NOTES_HEADING.match(stripped):
            break
        if not stripped:
            close()
            continue
        if stripped.startswith("<!--"):
            # An HTML comment opens a block that is skipped as a whole, which
            # covers the epilogue's AUTHOR-INPUT wrappers and their contents.
            if not current:
                skip_block = True
            if "-->" not in stripped:
                in_comment = True
            current.append((number, ""))
            continue
        if not current and (
            stripped.startswith("#")
            or stripped.startswith("![")
            or stripped.startswith("\\")
            or FOOTNOTE_DEFINITION.match(stripped)
            or PLACEHOLDER.match(stripped)
        ):
            skip_block = True
        if TABLE_RULE.match(stripped) and stripped.replace("|", "").replace(":", "").replace("-", "").strip() == "":
            current.append((number, ""))
            continue
        current.append((number, mask_protected(line)))
    close()
    return blocks


def marker_offset(text: str, end: int) -> int:
    """Move a marker past closing emphasis, closing quotes and possessives.

    A marker between a word and ``'s`` would stop pandoc reading the apostrophe
    as part of the word, and one inside ``**bold**`` would split the emphasis.
    """
    while end < len(text):
        if text[end] in "*\"”":
            end += 1
        elif text[end] in "'’":
            end += 1
            while end < len(text) and text[end].isalnum():
                end += 1
        else:
            break
    return end


def table_start_for(lines: list[str], number: int) -> int | None:
    if not lines[number - 1].lstrip().startswith("|"):
        return None
    while number > 1 and lines[number - 2].lstrip().startswith("|"):
        number -= 1
    return number


def find_hits(lines: list[str], chapter_id: str, entries: list[Entry]) -> list[Hit]:
    """Locate one hit per entry per block (or per chapter for chapter scope)."""
    blocks = indexable_blocks(lines)
    hits: list[Hit] = []
    chapter_key = chapter_id.lower()
    for entry in entries:
        rules = [rule for rule in entry.rules if rule.chapters is None or chapter_key in rule.chapters]
        if not rules:
            continue
        for block in blocks:
            best: tuple[int, int, int] | None = None
            for number, masked in block:
                for rule in rules:
                    match = rule.pattern.search(masked)
                    if match and (best is None or (number, match.start()) < best[:2]):
                        best = (number, match.start(), match.end())
                if best is not None:
                    break
            if best is None:
                continue
            number, _, end = best
            offset = marker_offset(lines[number - 1], end)
            hits.append(Hit(entry, number, offset, table_start_for(lines, number)))
            if entry.scope == "chapter":
                break
    hits.sort(key=lambda hit: (hit.line, hit.offset, hit.entry.sort, hit.entry.sub_sort or ""))
    return hits


# ---------------------------------------------------------------------------
# Markers


def latex_escape(text: str) -> str:
    replacements = {
        "\\": r"\textbackslash{}",
        "&": r"\&",
        "%": r"\%",
        "$": r"\$",
        "#": r"\#",
        "_": r"\_",
        "{": r"\{",
        "}": r"\}",
        "~": r"\textasciitilde{}",
        "^": r"\textasciicircum{}",
    }
    return "".join(replacements.get(character, character) for character in text)


def makeindex_quote(text: str) -> str:
    """Escape makeindex's special characters with its quote character."""
    return re.sub(r'(["!@|])', r'"\1', text)


def makeindex_key(entry: Entry) -> str:
    key = f"{makeindex_quote(entry.sort)}@{makeindex_quote(latex_escape(entry.term))}"
    if entry.sub:
        key += f"!{makeindex_quote(entry.sub_sort or '')}@{makeindex_quote(latex_escape(entry.sub))}"
    return key


def anchor_slug(chapter_namespace: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", chapter_namespace.lower()).strip("-")


def anchor_ids(hits: list[Hit], chapter_namespace: str) -> list[str]:
    slug = anchor_slug(chapter_namespace)
    return [f"idx-{slug}-{number:04d}" for number in range(1, len(hits) + 1)]


def annotate(markdown: str, chapter_namespace: str, entries: list[Entry], output_format: str) -> str:
    keeps_newline = markdown.endswith("\n")
    lines = markdown.split("\n")
    if keeps_newline:
        lines = lines[:-1]
    hits = find_hits(lines, chapter_id_for(chapter_namespace), entries)
    if output_format == "latex":
        markers = [f"\\index{{{makeindex_key(hit.entry)}}}" for hit in hits]
    else:
        markers = [f"[]{{#{anchor}}}" for anchor in anchor_ids(hits, chapter_namespace)]

    inline: dict[int, dict[int, list[str]]] = defaultdict(lambda: defaultdict(list))
    before_table: dict[int, list[str]] = defaultdict(list)
    for hit, marker in zip(hits, markers):
        if hit.table_start is not None:
            before_table[hit.table_start].append(marker)
        else:
            inline[hit.line][hit.offset].append(marker)

    for number, by_offset in inline.items():
        text = lines[number - 1]
        # Insert from the right so earlier offsets stay valid.
        for offset in sorted(by_offset, reverse=True):
            joined = "".join(by_offset[offset])
            if output_format == "latex":
                joined = f"`{joined}`{{=latex}}"
            text = text[:offset] + joined + text[offset:]
        lines[number - 1] = text

    # Work upwards so inserted lines do not shift the tables still to come.
    for number in sorted(before_table, reverse=True):
        joined = "".join(before_table[number])
        block = ["", "```{=latex}", joined, "```", ""] if output_format == "latex" else ["", joined, ""]
        lines[number - 1:number - 1] = block
    return "\n".join(lines) + ("\n" if keeps_newline else "")


# ---------------------------------------------------------------------------
# Whole-book views


def chapter_files(chapters_dir: Path) -> list[Path]:
    return sorted(chapters_dir.glob("*.md"))


def collect(chapters_dir: Path, entries: list[Entry]) -> dict[Path, list[Hit]]:
    results = {}
    for path in chapter_files(chapters_dir):
        lines = path.read_text(encoding="utf-8").split("\n")
        results[path] = find_hits(lines, chapter_id_for(path.name), entries)
    return results


def unused_phrases(chapters_dir: Path, entries: list[Entry]) -> list[tuple[Entry, str]]:
    """Match phrases that occur nowhere indexable (for example, only in headings)."""
    texts = {
        chapter_id_for(path.name).lower(): [
            masked
            for block in indexable_blocks(path.read_text(encoding="utf-8").split("\n"))
            for _, masked in block
        ]
        for path in chapter_files(chapters_dir)
    }
    unused = []
    for entry in entries:
        for rule in entry.rules:
            chapters = [key for key in texts if rule.chapters is None or key in rule.chapters]
            if not any(rule.pattern.search(line) for key in chapters for line in texts[key]):
                unused.append((entry, rule.pattern.pattern))
    return unused


def latex_backmatter(entries: list[Entry]) -> str:
    # Cross-references carry no page number, so they are written to the index
    # file immediately. An ordinary \index waits for its page to be shipped
    # out, and the index page is empty (never shipped) on the first LaTeX run.
    lines = ["```{=latex}", r"\makeatletter"]
    for entry in entries:
        key = makeindex_key(entry)
        if entry.see:
            encap = f"see{{{latex_escape(entry.see)}}}"
        elif entry.see_also:
            encap = f"seealso{{{', '.join(latex_escape(target) for target in entry.see_also)}}}"
        else:
            continue
        lines.append(rf"\immediate\write\@indexfile{{\string\indexentry{{\unexpanded{{{key}|{encap}}}}}{{99999}}}}")
    lines += [
        r"\makeatother",
        r"\clearpage",
        r"\phantomsection",
        r"\addcontentsline{toc}{chapter}{\indexname}",
        # Justified text in narrow index columns leaves wide gaps between locators.
        r"\begingroup\raggedright",
        r"\printindex",
        r"\endgroup",
        "```",
        "",
    ]
    return "\n".join(lines)


def grouped_locators(collected: dict[Path, list[Hit]]) -> dict[int, list[tuple[Path, list[Hit]]]]:
    """Map id(entry) -> [(chapter file, hits)] in manuscript order."""
    grouped: dict[int, dict[Path, list[Hit]]] = defaultdict(dict)
    for path, hits in collected.items():
        for hit in hits:
            grouped[id(hit.entry)].setdefault(path, []).append(hit)
    return {key: list(value.items()) for key, value in grouped.items()}


def letter_for(entry: Entry) -> str:
    first = entry.sort[:1].upper()
    return first if first.isalpha() else "#"


def cross_reference_text(entry: Entry) -> list[str]:
    parts = []
    if entry.see:
        parts.append(f"*see* {entry.see}")
    if entry.see_also:
        parts.append(f"*see also* {', '.join(entry.see_also)}")
    return parts


def anchors_backmatter(chapters_dir: Path, entries: list[Entry]) -> str:
    collected = collect(chapters_dir, entries)
    anchors = {
        (path, hit.line, hit.offset, id(hit.entry)): anchor
        for path, hits in collected.items()
        for hit, anchor in zip(hits, anchor_ids(hits, path.stem))
    }
    grouped = grouped_locators(collected)
    out = ["# Index {.unnumbered}", ""]
    current_letter = None
    for entry in entries:
        locators = grouped.get(id(entry), [])
        if not locators and not entry.see and not entry.see_also and entry.sub:
            continue
        letter = letter_for(entry)
        if letter != current_letter:
            out += [f"**{letter}**", ""]
            current_letter = letter
        links = []
        for path, hits in locators:
            numbered = " ".join(
                f"[{number}](#{anchors[(path, hit.line, hit.offset, id(hit.entry))]})"
                for number, hit in enumerate(hits, start=1)
            )
            links.append(f"{chapter_label(chapter_id_for(path.name))} {numbered}")
        text = "; ".join(links + cross_reference_text(entry))
        name = f" {entry.sub}" if entry.sub else entry.term
        out += [f"{name}{', ' + text if text else ''}  ", ""]
    return "\n".join(out)


def write_report(chapters_dir: Path, terms_path: Path, entries: list[Entry], output: Path) -> None:
    collected = collect(chapters_dir, entries)
    grouped = grouped_locators(collected)
    output.parent.mkdir(parents=True, exist_ok=True)

    def link(path: Path, line: int) -> str:
        relative = Path(os.path.relpath(path, output.parent)).as_posix()
        return f"[{line}]({relative}#L{line})"

    total = sum(len(hits) for hits in collected.values())
    with_locators = [entry for entry in entries if grouped.get(id(entry))]
    unmatched = [entry for entry in entries if entry.rules and not grouped.get(id(entry))]
    broad = [
        (entry, sum(len(hits) for _, hits in grouped[id(entry)]))
        for entry in with_locators
        if sum(len(hits) for _, hits in grouped[id(entry)]) > BROAD_TERM_LOCATORS
    ]
    terms_link = Path(os.path.relpath(terms_path, output.parent)).as_posix()

    out = [
        "# Book 1 Index — Line References",
        "",
        f"> Generated from [`{terms_path.name}`]({terms_link}) by "
        "`scripts/build_book_index.py report`. Do not edit this file by hand: change the "
        "term list and regenerate it.",
        "",
        "This is the working index for the Markdown manuscript. Each number is a line in a "
        "chapter file and links straight to it. The printed index in the PDF build uses the "
        "same term list and matching rules, so it lists the same places with page numbers "
        "instead. Line numbers move whenever a chapter is edited; regenerate this file "
        "before relying on them.",
        "",
        "Regenerate with:",
        "",
        "```text",
        "python3 scripts/build_book_index.py report \\",
        "  --terms docs/30-books/31-book-01/index/index-terms.toml \\",
        "  --chapters-dir docs/30-books/31-book-01/chapters \\",
        "  --output docs/30-books/31-book-01/index/book-01-index-lines.md",
        "```",
        "",
        "## Summary",
        "",
        f"- Index headings and subentries: {len(entries)} "
        f"({sum(1 for entry in entries if entry.sub)} subentries)",
        f"- Cross-references: {sum(1 for entry in entries if entry.see or entry.see_also)}",
        f"- Locators: {total} across {len(collected)} manuscript files",
        f"- Terms with no matches: {len(unmatched)}",
        "",
    ]
    current_letter = None
    for entry in entries:
        locators = grouped.get(id(entry), [])
        cross = cross_reference_text(entry)
        if not locators and not cross and entry.sub:
            continue
        letter = letter_for(entry)
        if letter != current_letter:
            out += ([""] if out[-1] else []) + [f"## {letter}", ""]
            current_letter = letter
        parts = [
            f"{chapter_label(chapter_id_for(path.name))}: " + ", ".join(link(path, hit.line) for hit in hits)
            for path, hits in locators
        ]
        text = " · ".join(parts + cross)
        bullet = f"  - {entry.sub}" if entry.sub else f"- **{entry.term}**"
        out.append(f"{bullet}{' — ' + text if text else ''}")
    out.append("")
    unused = unused_phrases(chapters_dir, entries)
    if unmatched or broad or unused:
        out += ["## Coverage Notes", ""]
        for entry in unmatched:
            out.append(f"- **{entry.label}** matched nothing. Check its phrases or remove it.")
        for entry, count in broad:
            out.append(
                f"- **{entry.label}** has {count} locators. Consider `scope = \"chapter\"`, "
                "narrower phrases or subentries."
            )
        for entry, pattern in unused:
            out.append(f"- **{entry.label}**: the phrase `{pattern}` is not found in indexable text.")
        out.append("")
    output.write_text("\n".join(out), encoding="utf-8")


# ---------------------------------------------------------------------------
# Command line


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    commands = parser.add_subparsers(dest="command", required=True)

    annotate_parser = commands.add_parser("annotate", help="add index markers to one chapter (stdin to stdout)")
    annotate_parser.add_argument("--terms", type=Path, required=True)
    annotate_parser.add_argument("--chapter", required=True, help="chapter file name or stem, e.g. chapter-03-what-ai-can-actually-do")
    annotate_parser.add_argument("--format", choices=("latex", "anchors"), default="latex")

    back_parser = commands.add_parser("backmatter", help="print the closing index block")
    back_parser.add_argument("--terms", type=Path, required=True)
    back_parser.add_argument("--format", choices=("latex", "anchors"), default="latex")
    back_parser.add_argument("--chapters-dir", type=Path, help="required for --format anchors")

    report_parser = commands.add_parser("report", help="write the line-referenced Markdown index")
    report_parser.add_argument("--terms", type=Path, required=True)
    report_parser.add_argument("--chapters-dir", type=Path, required=True)
    report_parser.add_argument("--output", type=Path, required=True)

    check_parser = commands.add_parser("check", help="fail on unmatched terms or broken references")
    check_parser.add_argument("--terms", type=Path, required=True)
    check_parser.add_argument("--chapters-dir", type=Path, required=True)

    arguments = parser.parse_args(argv)
    entries = load_entries(arguments.terms)

    if arguments.command == "annotate":
        sys.stdout.write(annotate(sys.stdin.read(), Path(arguments.chapter).stem, entries, arguments.format))
    elif arguments.command == "backmatter":
        if arguments.format == "latex":
            sys.stdout.write(latex_backmatter(entries))
        else:
            if arguments.chapters_dir is None:
                parser.error("backmatter --format anchors needs --chapters-dir")
            sys.stdout.write(anchors_backmatter(arguments.chapters_dir, entries))
    elif arguments.command == "report":
        write_report(arguments.chapters_dir, arguments.terms, entries, arguments.output)
    else:
        problems = broken_references(entries)
        grouped = grouped_locators(collect(arguments.chapters_dir, entries))
        problems += [f"{entry.label}: matched nothing" for entry in entries if entry.rules and not grouped.get(id(entry))]
        for problem in problems:
            print(f"Index check: {problem}", file=sys.stderr)
        # Unused phrases are worth tidying but are not errors: a term can keep
        # an alternative wording that a later revision may use.
        for entry, pattern in unused_phrases(arguments.chapters_dir, entries):
            print(f"Index note: {entry.label}: phrase {pattern} is not found", file=sys.stderr)
        return 1 if problems else 0
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
