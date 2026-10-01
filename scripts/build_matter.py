#!/usr/bin/env python3
"""Write a book's front and back matter as pandoc Markdown (ADR-03-0008).

Every value comes from publishing/books.json through scripts/book_metadata.py,
so an empty string there leaves its line, block, or page out. LaTeX targets
use the page macros in publishing/latex/howto-book.tex; the EPUB target writes
plain Markdown sections styled by publishing/epub/book.css.

Parts, in book order:
  front  half title, series page, title page, copyright, dedication,
         epigraph, contents, any docs/<book>/frontmatter/*.md, then \\mainmatter
  notes  \\backmatter, the back-of-book notes (LaTeX, notes at the back), and
         docs/<book>/backmatter/*.md (for example references.md)
  about  About the Author (photo and bio) and About the Series
"""

from __future__ import annotations

import argparse
import re
from pathlib import Path
from typing import Any

from scripts.book_metadata import load_release_metadata

DISCLAIMER = (
    "AI products change quickly. Product names, features and behaviour described in this book "
    "were checked at the time of writing and may have changed since. This book gives general "
    "information, not professional, legal or financial advice."
)
TRADEMARKS = (
    "Product names mentioned in this book are trademarks of their respective owners. "
    "This book is independent and is not endorsed by them."
)
RIGHTS = (
    "No part of this publication may be reproduced, stored or transmitted in any form without the "
    "prior written permission of the publisher, except as permitted under the Copyright Act 1968 (Cth)."
)
CATALOGUE = "A catalogue record for this book is available from the National Library of Australia."
FORMAT_NAMES = {"paperback": "Paperback", "epub": "EPUB", "pdf": "PDF"}

_LATEX_SPECIAL = re.compile(r"([\\{}$&#%_~^])")
_LATEX_REPLACEMENTS = {
    "\\": r"\textbackslash{}", "{": r"\{", "}": r"\}", "$": r"\$", "&": r"\&", "#": r"\#",
    "%": r"\%", "_": r"\_", "~": r"\textasciitilde{}", "^": r"\textasciicircum{}",
}


def latex(text: str) -> str:
    """Escape plain text for a LaTeX macro argument; keeps **bold** as \\textbf."""
    escaped = _LATEX_SPECIAL.sub(lambda match: _LATEX_REPLACEMENTS[match.group(1)], text)
    return re.sub(r"\*\*(.+?)\*\*", r"\\textbf{\1}", escaped)


def raw(lines: list[str]) -> str:
    return "```{=latex}\n" + "\n".join(lines) + "\n```\n"


def paragraphs(text: str) -> list[str]:
    return [part.strip() for part in re.split(r"\n\s*\n", text) if part.strip()]


def _markdown_files(directory: Path) -> list[Path]:
    return sorted(directory.glob("*.md")) if directory.is_dir() else []


class Matter:
    def __init__(self, metadata: dict[str, Any], root_dir: Path, target: str, edition: str,
                 output_format: str, proof: bool) -> None:
        self.series = metadata["series"]
        self.book = metadata["book"]
        self.root_dir = root_dir
        self.target = target
        self.edition = edition
        self.format = output_format
        self.proof = proof
        self.book_dir = root_dir / "docs" / self.book.get("sourceDirectory", "")
        self.publisher = self.series.get("publisher", {})
        self.author = self.series.get("author", "")

    # ----- shared values
    def series_heading(self) -> str:
        website = self.publisher.get("website") or self.series.get("website")
        return f"The {website} series" if website else "The series"

    def imprint_line(self) -> str:
        imprint, name = self.publisher.get("imprint"), self.publisher.get("name")
        if imprint and name:
            return f"{imprint}, an imprint of {name}"
        return imprint or name or ""

    def edition_line(self) -> str:
        details = self.book.get("copyright", {})
        when = " ".join(part for part in (details.get("publicationMonth"), details.get("year")) if part)
        return ", ".join(part for part in (details.get("edition"), when) if part)

    def copyright_line(self) -> str:
        details = self.book.get("copyright", {})
        holder, year = details.get("holder"), details.get("year")
        if not holder:
            return ""
        return f"Copyright © {year + ' ' if year else ''}{holder}. All rights reserved."

    def published_line(self) -> str:
        line = self.imprint_line()
        if not line:
            return ""
        text = f"Published in Australia by {line}."
        if self.publisher.get("address"):
            text += f" {self.publisher['address']}."
        return text

    def isbns(self) -> list[tuple[str, str]]:
        editions = self.book.get("editions", {})
        return [(FORMAT_NAMES[name], editions[name].get("isbnDisplay", editions[name]["isbn"]))
                for name in ("paperback", "epub", "pdf") if "isbn" in editions.get(name, {})]

    def proof_text(self) -> str:
        if self.edition == "draft":
            return "Internal review draft. Not for sale or public distribution."
        if self.edition == "preview":
            return "Preview edition. The text may change before final publication."
        if self.proof:
            return "Proof copy. Not for sale."
        return ""

    def full_title(self) -> str:
        subtitle = self.book.get("description")
        return f"{self.book['title']}: {subtitle}" if subtitle else self.book["title"]

    def photo(self) -> Path | None:
        relative = self.series.get("authorProfile", {}).get("photo")
        path = self.root_dir / relative if relative else None
        return path if path and path.is_file() else None

    # ----- LaTeX
    def latex_front(self) -> str:
        book = self.book
        title, subtitle = latex(book["title"]), latex(book.get("description", ""))
        lines = [r"\frontmatter"]
        if self.edition == "release":
            lines.append(rf"\hwHalfTitle{{{title}}}")
            items = "".join(
                rf"\hwSeriesItem{{{entry['number']:02d}}}{{{latex(entry['title'])}}}{{{1 if entry['number'] == book['number'] else 0}}}"
                for entry in self.series_books())
            lines.append(rf"\hwSeriesPage{{{latex(self.series_heading())}}}{{{items}}}")
        lines.append(rf"\hwTitlePage{{{title}}}{{{subtitle}}}{{{latex(self.author)}}}{{{latex(self.imprint_line())}}}")
        lines += self.latex_copyright()
        if self.edition == "release":
            dedication = book.get("dedication", {}).get("text")
            if dedication:
                lines.append(r"\begin{hwDedication}")
                lines += [latex(paragraph) + r"\par" for paragraph in paragraphs(dedication)]
                lines.append(r"\end{hwDedication}")
            epigraph = book.get("epigraph", {})
            if epigraph.get("quote"):
                attribution = f"— {epigraph['author']}" if epigraph.get("author") else ""
                lines.append(rf"\hwEpigraph{{{latex(epigraph['quote'])}}}{{{latex(attribution)}}}")
        # memoir's contents heading doesn't start a new page by itself.
        lines += [r"\hwRecto", r"\tableofcontents*"]
        output = raw(lines) + "\n"
        for path in _markdown_files(self.book_dir / "frontmatter"):
            output += path.read_text(encoding="utf-8").rstrip() + "\n\n"
        return output + raw([r"\mainmatter"])

    def latex_copyright(self) -> list[str]:
        lines = [r"\begin{hwCopyright}", rf"\hwCopyrightTitle{{{latex(self.full_title())}}}"]
        if self.author:
            lines.append(rf"by {latex(self.author)}\par")
        for text in (self.copyright_line(), self.published_line()):
            if text:
                lines.append(latex(text) + r"\par")
        website = self.publisher.get("website") or self.series.get("website")
        if website:
            lines.append(rf"\hwWordmark\par")
        isbns = self.isbns()
        if isbns:
            lines += [rf"\hwIsbn{{{name}}}{{ISBN {latex(value)}}}" for name, value in isbns]
            lines.append(r"\vspace{6pt}")
        if self.edition_line():
            lines.append(latex(self.edition_line()) + r"\par")
        if self.edition == "release":
            lines.append(latex(CATALOGUE) + r"\par")
        lines += [latex(DISCLAIMER) + r"\par", latex(TRADEMARKS) + r"\par", latex(RIGHTS) + r"\par"]
        if self.proof_text():
            lines.append(rf"\hwProofLine{{{latex(self.proof_text())}}}")
        lines.append(r"\end{hwCopyright}")
        return lines

    def latex_notes(self, notes_at_back: bool) -> str:
        output = raw([r"\backmatter"] + ([r"\printpagenotes"] if notes_at_back else []))
        for path in _markdown_files(self.book_dir / "backmatter"):
            output += "\n" + path.read_text(encoding="utf-8").rstrip() + "\n\n"
        return output

    def about(self) -> str:
        profile = self.series.get("authorProfile", {})
        bio = profile.get("bio") or profile.get("shortBio")
        about_series = self.series.get("about")
        output = ""
        if bio or self.photo():
            output += "# About the Author\n\n"
            photo = self.photo()
            if photo and self.target == "latex":
                output += raw([rf"\hwAuthorPhoto{{{photo.as_posix()}}}"]) + "\n"
            elif photo:
                output += f"![{self.author}]({photo.as_posix()}){{.author-photo}}\n\n"
            if bio:
                output += "\n\n".join(paragraphs(bio)) + "\n\n"
            if profile.get("website"):
                output += f"<{profile['website']}>\n\n"
        if about_series:
            output += ("## About the Series\n\n" if output else "# About the Series\n\n")
            output += "\n\n".join(paragraphs(about_series)) + "\n\n"
            output += "\n".join(f"{entry['number']}. {entry['title']}" for entry in self.series_books()) + "\n\n"
        return output

    def series_books(self) -> list[dict[str, Any]]:
        return self.series_list

    # ----- EPUB
    def epub_front(self) -> str:
        book = self.book
        sections = ["# Copyright {.unnumbered .unlisted .matter .copyright}\n",
                    f"**{self.full_title()}**\n"]
        if self.author:
            sections.append(f"by {self.author}\n")
        for text in (self.copyright_line(), self.published_line()):
            if text:
                sections.append(text + "\n")
        for name, value in self.isbns():
            sections.append(f"{name} ISBN {value}\\")
        if self.isbns():
            sections[-1] = sections[-1].rstrip("\\") + "\n"
        for text in (self.edition_line(), CATALOGUE, DISCLAIMER, TRADEMARKS, RIGHTS, self.proof_text()):
            if text:
                sections.append(text + "\n")
        dedication = book.get("dedication", {}).get("text")
        if dedication:
            sections.append("# Dedication {.unnumbered .unlisted .matter .dedication}\n")
            sections += [paragraph + "\n" for paragraph in paragraphs(dedication)]
        epigraph = book.get("epigraph", {})
        if epigraph.get("quote"):
            sections.append("# Epigraph {.unnumbered .unlisted .matter .epigraph}\n")
            sections.append(f"> {epigraph['quote']}\n")
            if epigraph.get("author"):
                sections.append(f"::: attribution\n— {epigraph['author']}\n:::\n")
        output = "\n".join(sections) + "\n"
        for path in _markdown_files(self.book_dir / "frontmatter"):
            output += path.read_text(encoding="utf-8").rstrip() + "\n\n"
        return output

    def epub_notes(self) -> str:
        return "".join("\n" + path.read_text(encoding="utf-8").rstrip() + "\n\n"
                       for path in _markdown_files(self.book_dir / "backmatter"))


def build(config: Path, book_number: int, root_dir: Path, part: str, target: str = "latex",
          edition: str = "release", output_format: str = "paperback", proof: bool = False,
          notes_at_back: bool = True) -> str:
    import json

    metadata = load_release_metadata(config, book_number)
    matter = Matter(metadata, root_dir, target, edition, output_format, proof)
    matter.series_list = [
        {"number": entry["number"], "title": entry["title"]}
        for entry in json.loads(config.read_text(encoding="utf-8"))["books"] if entry.get("title")
    ]
    if part == "front":
        return matter.latex_front() if target == "latex" else matter.epub_front()
    if part == "notes":
        return matter.latex_notes(notes_at_back) if target == "latex" else matter.epub_notes()
    if part == "about":
        return matter.about()
    raise ValueError(f"unknown part {part!r}")


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--config", type=Path, required=True)
    parser.add_argument("--book-number", type=int, required=True)
    parser.add_argument("--root-dir", type=Path, default=Path.cwd())
    parser.add_argument("--part", choices=("front", "notes", "about"), required=True)
    parser.add_argument("--target", choices=("latex", "epub"), default="latex")
    parser.add_argument("--edition", choices=("release", "draft", "preview"), default="release")
    parser.add_argument("--format", dest="output_format", choices=("paperback", "pdf", "epub"), default="paperback")
    parser.add_argument("--proof", action="store_true")
    parser.add_argument("--notes-inline", action="store_true", help="keep notes with their chapters")
    arguments = parser.parse_args()
    print(build(arguments.config, arguments.book_number, arguments.root_dir.resolve(), arguments.part,
                arguments.target, arguments.edition, arguments.output_format, arguments.proof,
                not arguments.notes_inline), end="")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
