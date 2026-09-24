#!/usr/bin/env python3
"""Assemble a publication-structured internal-review or preview book PDF."""

from __future__ import annotations

import argparse
import io
import json
from pathlib import Path
from typing import Any

from pypdf import PdfReader, PdfWriter
from reportlab.lib.colors import HexColor
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.pdfgen import canvas


class AssemblyError(ValueError):
    """Raised when the source PDFs cannot be assembled safely."""


NAVY = HexColor("#061532")
SLATE = HexColor("#5E6F89")


def _chapter_range_label(chapters: list[int]) -> str:
    """Describe chapters as "Chapter 1", "Chapters 1–3", or "Chapters 1, 3 and 5"."""
    ordered = sorted(set(chapters))
    if len(ordered) == 1:
        return f"Chapter {ordered[0]}"
    if ordered == list(range(ordered[0], ordered[-1] + 1)):
        return f"Chapters {ordered[0]}–{ordered[-1]}"
    return "Chapters " + ", ".join(str(number) for number in ordered[:-1]) + f" and {ordered[-1]}"


def _new_page(metadata: dict[str, Any]) -> tuple[io.BytesIO, canvas.Canvas, float, float]:
    width, height = _expected_page_size(metadata)
    stream = io.BytesIO()
    document = canvas.Canvas(stream, pagesize=(width, height), pageCompression=1)
    document.setFillColor(NAVY)
    document.rect(0, height - 18, width, 18, fill=1, stroke=0)
    return stream, document, width, height


def _finish_page(stream: io.BytesIO, document: canvas.Canvas) -> io.BytesIO:
    document.showPage()
    document.save()
    stream.seek(0)
    return stream


def _notice_page(metadata: dict[str, Any], preview_chapters: list[int] | None = None) -> io.BytesIO:
    series = metadata["series"]
    book = metadata["book"]
    stream, document, width, height = _new_page(metadata)
    accent = HexColor(book.get("accentColour", "#7C3AED"))

    document.setFont("Helvetica-Bold", 12)
    document.setFillColor(SLATE)
    series_title = series["title"]
    document.drawCentredString(width / 2, height - 84, series_title)

    document.setFillColor(accent)
    document.roundRect(width / 2 - 58, height - 154, 116, 30, 10, fill=1, stroke=0)
    document.setFillColorRGB(1, 1, 1)
    document.setFont("Helvetica-Bold", 14)
    document.drawCentredString(width / 2, height - 145, f"BOOK {book['number']}")

    document.setFillColor(NAVY)
    document.setFont("Helvetica-Bold", 22)
    title = book["title"]
    title_width = stringWidth(title, "Helvetica-Bold", 22)
    if title_width > width - 100:
        document.setFont("Helvetica-Bold", 18)
    document.drawCentredString(width / 2, height - 218, title)

    document.setStrokeColor(accent)
    document.setLineWidth(2)
    document.line(90, height - 260, width - 90, height - 260)

    document.setFillColor(NAVY)
    document.setFont("Helvetica-Bold", 20)
    if preview_chapters:
        document.drawCentredString(width / 2, height / 2 + 52, "PREVIEW EDITION")
        document.setFont("Helvetica", 13)
        document.setFillColor(SLATE)
        document.drawCentredString(
            width / 2,
            height / 2 + 14,
            f"This free preview contains {_chapter_range_label(preview_chapters)} of the book.",
        )
        document.drawCentredString(width / 2, height / 2 - 10, "The text may change before final publication.")
        footer = "A free preview of a book in progress."
    else:
        document.drawCentredString(width / 2, height / 2 + 52, "INTERNAL REVIEW EDITION")
        document.setFont("Helvetica", 13)
        document.setFillColor(SLATE)
        document.drawCentredString(
            width / 2, height / 2 + 14, "This book is for internal and review distribution only."
        )
        document.drawCentredString(width / 2, height / 2 - 10, "It is not a final publication and is not for sale.")
        footer = "Generated from the current manuscript source for editorial review."

    document.setFillColor(NAVY)
    document.setFont("Helvetica-Bold", 12)
    document.drawCentredString(width / 2, 92, series["author"])
    document.setFont("Helvetica", 9)
    document.setFillColor(SLATE)
    document.drawCentredString(width / 2, 70, footer)
    return _finish_page(stream, document)


def _preview_end_page(
    metadata: dict[str, Any], preview_chapters: list[int], total_chapters: int | None = None
) -> io.BytesIO:
    series = metadata["series"]
    book = metadata["book"]
    stream, document, width, height = _new_page(metadata)
    accent = HexColor(book.get("accentColour", "#7C3AED"))

    document.setFillColor(accent)
    document.roundRect(width / 2 - 90, height / 2 + 120, 180, 30, 10, fill=1, stroke=0)
    document.setFillColorRGB(1, 1, 1)
    document.setFont("Helvetica-Bold", 13)
    document.drawCentredString(width / 2, height / 2 + 130, "END OF PREVIEW")

    document.setFillColor(NAVY)
    document.setFont("Helvetica-Bold", 20)
    document.drawCentredString(width / 2, height / 2 + 64, "Thanks for reading this preview")

    document.setStrokeColor(accent)
    document.setLineWidth(2)
    document.line(90, height / 2 + 44, width - 90, height / 2 + 44)

    lines = [f"You have been reading {_chapter_range_label(preview_chapters)} of", f"{book['title']}."]
    remaining = (total_chapters or 0) - len(set(preview_chapters))
    if remaining > 0:
        noun = "chapter" if remaining == 1 else "chapters"
        lines.append(f"The full book continues with {remaining} more {noun}.")
    else:
        lines.append("The full book continues from here.")
    document.setFont("Helvetica", 13)
    document.setFillColor(SLATE)
    for index, line in enumerate(lines):
        document.drawCentredString(width / 2, height / 2 + 8 - index * 22, line)

    website = series.get("website")
    if website:
        document.setFillColor(NAVY)
        document.setFont("Helvetica-Bold", 14)
        document.drawCentredString(width / 2, height / 2 - 80, "Get the full book at")
        document.setFillColor(accent)
        document.setFont("Helvetica-Bold", 18)
        document.drawCentredString(width / 2, height / 2 - 106, website)

    document.setFillColor(NAVY)
    document.setFont("Helvetica-Bold", 12)
    document.drawCentredString(width / 2, 92, series["author"])
    document.setFont("Helvetica", 9)
    document.setFillColor(SLATE)
    document.drawCentredString(width / 2, 70, series["title"])
    return _finish_page(stream, document)


def _expected_page_size(metadata: dict[str, Any]) -> tuple[float, float]:
    page = metadata["series"]["page"]
    return float(page["widthInches"]) * 72, float(page["heightInches"]) * 72


def _validate_page_sizes(reader: PdfReader, source: Path, expected: tuple[float, float]) -> None:
    for index, page in enumerate(reader.pages, start=1):
        actual = (float(page.mediabox.width), float(page.mediabox.height))
        if abs(actual[0] - expected[0]) > 0.5 or abs(actual[1] - expected[1]) > 0.5:
            raise AssemblyError(
                f"{source} page {index} is {actual[0] / 72:.2f} x {actual[1] / 72:.2f} inches; "
                f"expected {expected[0] / 72:.2f} x {expected[1] / 72:.2f} inches"
            )


def assemble_draft_book(
    front_pdf: str | Path,
    manuscript_pdf: str | Path,
    back_pdf: str | Path,
    output_pdf: str | Path,
    metadata: dict[str, Any],
    preview_chapters: list[int] | None = None,
    total_chapters: int | None = None,
) -> Path:
    """Assemble front cover, notice, manuscript, and back cover.

    When ``preview_chapters`` is given, the notice describes a preview edition and an
    end-of-preview page is inserted between the manuscript and the back cover.
    """
    front_pdf = Path(front_pdf)
    manuscript_pdf = Path(manuscript_pdf)
    back_pdf = Path(back_pdf)
    output_pdf = Path(output_pdf)
    expected = _expected_page_size(metadata)
    readers = [
        (front_pdf, PdfReader(front_pdf)),
        (manuscript_pdf, PdfReader(manuscript_pdf)),
        (back_pdf, PdfReader(back_pdf)),
    ]
    for source, reader in readers:
        _validate_page_sizes(reader, source, expected)

    notice_reader = PdfReader(_notice_page(metadata, preview_chapters))
    writer = PdfWriter()
    writer.clone_document_from_reader(readers[1][1])
    writer.insert_page(notice_reader.pages[0], 0)
    writer.insert_page(readers[0][1].pages[0], 0)
    if preview_chapters:
        end_reader = PdfReader(_preview_end_page(metadata, preview_chapters, total_chapters))
        writer.add_page(end_reader.pages[0])
    writer.add_page(readers[2][1].pages[0])
    writer.add_metadata(
        {
            "/Title": metadata["book"]["title"],
            "/Author": metadata["series"]["author"],
            "/Subject": "Preview edition" if preview_chapters else "Internal review edition",
        }
    )
    output_pdf.parent.mkdir(parents=True, exist_ok=True)
    with output_pdf.open("wb") as output_stream:
        writer.write(output_stream)
    return output_pdf


def _load_metadata(config_path: Path, book_number: int) -> dict[str, Any]:
    config = json.loads(config_path.read_text(encoding="utf-8"))
    try:
        book = next(book for book in config["books"] if book["number"] == book_number)
    except StopIteration as error:
        raise AssemblyError(f"Book {book_number} is not defined in {config_path}") from error
    return {"series": config["series"], "book": book}


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--config", type=Path, required=True)
    parser.add_argument("--book-number", type=int, required=True)
    parser.add_argument("--front", type=Path, required=True)
    parser.add_argument("--manuscript", type=Path, required=True)
    parser.add_argument("--back", type=Path, required=True)
    parser.add_argument("--output", type=Path, required=True)
    parser.add_argument(
        "--preview-chapters",
        help="comma-separated chapter numbers; builds a preview edition with an end-of-preview page",
    )
    parser.add_argument("--total-chapters", type=int, help="chapter count of the full book (preview only)")
    arguments = parser.parse_args()
    preview_chapters = None
    if arguments.preview_chapters:
        try:
            preview_chapters = [int(number) for number in arguments.preview_chapters.split(",")]
        except ValueError:
            parser.error(f"invalid --preview-chapters value: {arguments.preview_chapters}")
    try:
        metadata = _load_metadata(arguments.config, arguments.book_number)
        assemble_draft_book(
            arguments.front,
            arguments.manuscript,
            arguments.back,
            arguments.output,
            metadata,
            preview_chapters=preview_chapters,
            total_chapters=arguments.total_chapters,
        )
    except (AssemblyError, OSError, json.JSONDecodeError) as error:
        parser.error(str(error))
    print(arguments.output)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
