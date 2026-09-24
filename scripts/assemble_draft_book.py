#!/usr/bin/env python3
"""Assemble a publication-structured internal-review book PDF."""

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


def _notice_page(metadata: dict[str, Any]) -> io.BytesIO:
    series = metadata["series"]
    book = metadata["book"]
    width = float(series["page"]["widthInches"]) * 72
    height = float(series["page"]["heightInches"]) * 72
    stream = io.BytesIO()
    document = canvas.Canvas(stream, pagesize=(width, height), pageCompression=1)

    navy = HexColor("#061532")
    accent = HexColor(book.get("accentColour", "#7C3AED"))
    slate = HexColor("#5E6F89")
    document.setFillColor(navy)
    document.rect(0, height - 18, width, 18, fill=1, stroke=0)

    document.setFont("Helvetica-Bold", 12)
    document.setFillColor(slate)
    series_title = series["title"]
    document.drawCentredString(width / 2, height - 84, series_title)

    document.setFillColor(accent)
    document.roundRect(width / 2 - 58, height - 154, 116, 30, 10, fill=1, stroke=0)
    document.setFillColorRGB(1, 1, 1)
    document.setFont("Helvetica-Bold", 14)
    document.drawCentredString(width / 2, height - 145, f"BOOK {book['number']}")

    document.setFillColor(navy)
    document.setFont("Helvetica-Bold", 22)
    title = book["title"]
    title_width = stringWidth(title, "Helvetica-Bold", 22)
    if title_width > width - 100:
        document.setFont("Helvetica-Bold", 18)
    document.drawCentredString(width / 2, height - 218, title)

    document.setStrokeColor(accent)
    document.setLineWidth(2)
    document.line(90, height - 260, width - 90, height - 260)

    document.setFillColor(navy)
    document.setFont("Helvetica-Bold", 20)
    document.drawCentredString(width / 2, height / 2 + 52, "INTERNAL REVIEW EDITION")
    document.setFont("Helvetica", 13)
    document.setFillColor(slate)
    document.drawCentredString(
        width / 2, height / 2 + 14, "This book is for internal and review distribution only."
    )
    document.drawCentredString(width / 2, height / 2 - 10, "It is not a final publication and is not for sale.")

    document.setFillColor(navy)
    document.setFont("Helvetica-Bold", 12)
    document.drawCentredString(width / 2, 92, series["author"])
    document.setFont("Helvetica", 9)
    document.setFillColor(slate)
    document.drawCentredString(width / 2, 70, "Generated from the current manuscript source for editorial review.")
    document.showPage()
    document.save()
    stream.seek(0)
    return stream


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
) -> Path:
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

    notice_stream = _notice_page(metadata)
    notice_reader = PdfReader(notice_stream)
    writer = PdfWriter()
    writer.clone_document_from_reader(readers[1][1])
    writer.insert_page(notice_reader.pages[0], 0)
    writer.insert_page(readers[0][1].pages[0], 0)
    writer.add_page(readers[2][1].pages[0])
    writer.add_metadata(
        {
            "/Title": metadata["book"]["title"],
            "/Author": metadata["series"]["author"],
            "/Subject": "Internal review edition",
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
    arguments = parser.parse_args()
    try:
        metadata = _load_metadata(arguments.config, arguments.book_number)
        assemble_draft_book(
            arguments.front, arguments.manuscript, arguments.back, arguments.output, metadata
        )
    except (AssemblyError, OSError, json.JSONDecodeError) as error:
        parser.error(str(error))
    print(arguments.output)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
