#!/usr/bin/env python3
"""Render Option B ("Address bar") covers from publishing/books.json (ADR-03-0008).

Outputs, all vector PDF with embedded IBM Plex fonts (the illustration and the
author photo are the only raster images):

* ``front``  the front cover at trim size (also used as the PDF ebook's first
  page, and rasterised as the EPUB cover image);
* ``back``   the back cover at trim size: ``--variant ebook`` (no barcode or
  price), ``--variant draft`` (internal-review notice instead of the barcode);
* ``wrap``   the paperback cover for one printer: back + spine + front with
  bleed, sized from the interior page count and that printer's paper.

Empty values in books.json are left out (see scripts/book_metadata.py). Text
that doesn't fit the back cover is set smaller, down to a floor; anything
still too long is reported so the copy can be shortened.
"""

from __future__ import annotations

import argparse
import html
import json
import re
import sys
from dataclasses import dataclass
from pathlib import Path
from typing import Any

from PIL import Image
from reportlab.lib.colors import HexColor, white
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph

from scripts.book_metadata import DEFAULT_PRICE_CODE, load_release_metadata
from scripts.isbn_barcode import draw_barcode

INCH = 72.0
NAVY = HexColor("#061532")
SKY = HexColor("#0EA5E9")
SKY_LIGHT = HexColor("#BFE6F8")
MIST = HexColor("#EEF3F9")
SLATE = HexColor("#5E6F89")
GOLD = HexColor("#E9C46A")
GOLD_DARK = HexColor("#B8892E")

FONT_DIR = Path(__file__).resolve().parents[1] / "publishing" / "fonts"
FONTS = {
    "Serif": "IBMPlexSerif-Regular", "SerifItalic": "IBMPlexSerif-Italic",
    "SerifBold": "IBMPlexSerif-SemiBold", "SerifBoldItalic": "IBMPlexSerif-SemiBoldItalic",
    "Sans": "IBMPlexSansCondensed-Regular", "SansMedium": "IBMPlexSansCondensed-Medium",
    "SansSemi": "IBMPlexSansCondensed-SemiBold", "SansBold": "IBMPlexSansCondensed-Bold",
    "SansItalic": "IBMPlexSansCondensed-Italic",
    "Mono": "IBMPlexMono-Medium", "MonoSemi": "IBMPlexMono-SemiBold",
}


class CoverError(ValueError):
    """Raised when a cover cannot be produced from the metadata."""


def register_fonts() -> None:
    if "Plex-Serif" in pdfmetrics.getRegisteredFontNames():
        return
    for name, file in FONTS.items():
        pdfmetrics.registerFont(TTFont(f"Plex-{name}", str(FONT_DIR / f"{file}.ttf")))
    pdfmetrics.registerFontFamily("Plex-Serif", normal="Plex-Serif", bold="Plex-SerifBold",
                                  italic="Plex-SerifItalic", boldItalic="Plex-SerifBoldItalic")
    pdfmetrics.registerFontFamily("Plex-Sans", normal="Plex-Sans", bold="Plex-SansBold",
                                  italic="Plex-SansItalic", boldItalic="Plex-SansItalic")


def inline_markup(text: str) -> str:
    """Escape for ReportLab paragraphs; **bold** and *italic* become <b>/<i>."""
    escaped = html.escape(text, quote=False)
    escaped = re.sub(r"\*\*(.+?)\*\*", r"<b>\1</b>", escaped)
    return re.sub(r"(?<!\*)\*(?!\s)(.+?)(?<!\s)\*(?!\*)", r"<i>\1</i>", escaped)


def paragraphs(text: str) -> list[str]:
    return [part.strip() for part in re.split(r"\n\s*\n", text) if part.strip()]


@dataclass
class Panel:
    """Trim-box origin (bottom-left) of a 7.5 x 9.25in panel on the canvas, plus its bleeds."""

    x: float
    y: float
    width: float
    height: float
    bleed_left: float = 0
    bleed_right: float = 0
    bleed_top: float = 0
    bleed_bottom: float = 0

    def top(self, inches_from_top: float) -> float:
        return self.y + self.height - inches_from_top * INCH

    def fill(self, pdf: canvas.Canvas, colour, top_inches: float, bottom_inches: float) -> None:
        """Fill a full-width band (including side bleeds) between two distances from the top."""
        y0 = self.top(bottom_inches)
        y1 = self.top(top_inches)
        if top_inches <= 0:
            y1 += self.bleed_top
        if bottom_inches >= self.height / INCH:
            y0 -= self.bleed_bottom
        pdf.setFillColor(colour)
        pdf.rect(self.x - self.bleed_left, y0, self.width + self.bleed_left + self.bleed_right, y1 - y0,
                 stroke=0, fill=1)


def _wordmark(pdf: canvas.Canvas, x: float, baseline: float, size: float, colour=NAVY) -> float:
    """Draw how-to-use-ai.com with a sky "ai"; return its width."""
    parts = [("how-to-use-", colour), ("ai", SKY), (".com", colour)]
    pen = x
    for text, part_colour in parts:
        pdf.setFillColor(part_colour)
        pdf.setFont("Plex-MonoSemi", size)
        pdf.drawString(pen, baseline, text)
        pen += pdfmetrics.stringWidth(text, "Plex-MonoSemi", size)
    return pen - x


def _address_bar(pdf: canvas.Canvas, x: float, top: float, size: float) -> None:
    width = pdfmetrics.stringWidth("how-to-use-ai.com", "Plex-MonoSemi", size)
    pad_x, height = size * 0.85, size * 2.0
    caret_gap = size * 0.45
    pdf.setFillColor(white)
    pdf.roundRect(x, top - height, width + 2 * pad_x + caret_gap + 2, height, height / 2, stroke=0, fill=1)
    baseline = top - height / 2 - size * 0.35
    _wordmark(pdf, x + pad_x, baseline, size)
    pdf.setFillColor(SKY)
    pdf.rect(x + pad_x + width + caret_gap, top - height * 0.78, 1.4, height * 0.56, stroke=0, fill=1)


def _paragraph(text: str, font: str, size: float, colour, leading: float = 1.3, **style) -> Paragraph:
    style.setdefault("alignment", TA_LEFT)
    return Paragraph(text, ParagraphStyle(
        "p", fontName=font, fontSize=size, leading=size * leading, textColor=colour, **style))


def _draw_block(pdf: canvas.Canvas, block: Paragraph, x: float, top: float, width: float) -> float:
    """Draw a paragraph with its top at ``top``; return the new top."""
    _, height = block.wrap(width, 10_000)
    block.drawOn(pdf, x, top - height)
    return top - height


def _cutout(image_path: Path) -> Image.Image:
    image = Image.open(image_path).convert("RGBA")
    box = image.getchannel("A").getbbox()
    return image.crop(box) if box else image


# ---------------------------------------------------------------- front
def draw_front(pdf: canvas.Canvas, panel: Panel, series: dict[str, Any], book: dict[str, Any],
               root_dir: Path, total_books: int) -> None:
    pdf.setFillColor(white)
    panel.fill(pdf, white, 0, panel.height / INCH)
    panel.fill(pdf, NAVY, 0, 5.2)
    left = panel.x + 0.7 * INCH
    text_width = panel.width - 1.5 * INCH

    illustration = root_dir / book["image"] if book.get("image") else None
    if illustration and illustration.is_file():
        art = _cutout(illustration)
        region_top, region_bottom = panel.top(4.15), panel.y + 1.0 * INCH
        scale = min(panel.width * 0.9 / art.width, (region_top - region_bottom) / art.height)
        width, height = art.width * scale, art.height * scale
        x = panel.x + panel.width * 0.62 - width / 2
        x = min(x, panel.x + panel.width - width - 0.25 * INCH)
        pdf.drawImage(ImageReader(art), x, region_bottom + (region_top - region_bottom - height) / 2,
                      width, height, mask="auto")

    _address_bar(pdf, left, panel.top(0.7), 14)
    pdf.setFillColor(SKY)
    pdf.setFont("Plex-MonoSemi", 9)
    pdf.drawString(left, panel.top(1.75), f"Book {book['number']} of {total_books}")
    top = _draw_block(pdf, _paragraph(inline_markup(book["title"]), "Plex-SansBold", 54, white, 0.95),
                      left, panel.top(1.95), text_width)
    if book.get("description"):
        _draw_block(pdf, _paragraph(inline_markup(book["description"]), "Plex-SerifItalic", 14, SKY_LIGHT, 1.3),
                    left, top - 12, text_width * 0.9)

    descriptor = book.get("descriptor")
    if descriptor:
        diameter = 1.1 * INCH
        cx, cy = left + diameter / 2, panel.top(6.0) - diameter / 2
        pdf.setFillColor(GOLD)
        pdf.setStrokeColor(GOLD_DARK)
        pdf.setLineWidth(2.2)
        pdf.circle(cx, cy, diameter / 2, stroke=1, fill=1)
        pdf.setLineWidth(0.7)
        pdf.circle(cx, cy, diameter / 2 - 4.5, stroke=1, fill=0)
        block = _paragraph(inline_markup(descriptor), "Plex-SansBold", 8.5, NAVY, 1.1, alignment=1)
        _, height = block.wrap(diameter * 0.7, 200)
        block.drawOn(pdf, cx - diameter * 0.35, cy - height / 2)

    pdf.setFillColor(NAVY)
    pdf.setFont("Plex-SansSemi", 13)
    pdf.drawString(left, panel.y + 0.62 * INCH, series.get("author", ""))


# ---------------------------------------------------------------- back
def _price_line(book: dict[str, Any]) -> str:
    prices = book.get("editions", {}).get("paperback", {}).get("price", {})
    return "   ".join(f"{currency} ${amount}" for currency, amount in prices.items())


def draw_back(pdf: canvas.Canvas, panel: Panel, series: dict[str, Any], book: dict[str, Any],
              root_dir: Path, variant: str, warnings: list[str]) -> None:
    """``variant``: paperback (barcode, price), ebook (neither), draft (review notice)."""
    panel.fill(pdf, white, 0, panel.height / INCH)
    panel.fill(pdf, NAVY, 0, 1.75)
    left = panel.x + 0.75 * INCH
    right = panel.x + panel.width - 0.7 * INCH
    width = right - left
    back = book.get("backCover", {})

    meta_baseline = panel.top(0.85)
    pdf.setFont("Plex-SansMedium", 8)
    pdf.setFillColor(SKY_LIGHT)
    if back.get("category"):
        pdf.drawString(left, meta_baseline, back["category"])
    price = _price_line(book) if variant == "paperback" else ""
    if price:
        pdf.setFillColor(white)
        pdf.setFont("Plex-MonoSemi", 8)
        pdf.drawRightString(right, meta_baseline, price)
    _draw_block(pdf, _paragraph(inline_markup(book["title"]), "Plex-SansBold", 24, white, 1.0),
                left, panel.top(1.0), width)

    # Footer first, so the body knows how much room it has.
    footer_bottom = panel.y + 0.55 * INCH
    footer_top = footer_bottom + 0.42 * INCH
    if variant == "paperback":
        isbn = book.get("editions", {}).get("paperback", {}).get("isbn")
        if isbn:
            barcode_width = 2.0 * INCH
            pad = 0.08 * INCH
            # Probe the height, then draw on a white box in the safe area.
            probe = canvas.Canvas("/dev/null")
            height = draw_barcode(probe, 0, 0, barcode_width - 2 * pad, isbn, DEFAULT_PRICE_CODE, background=False,
                                  font_name="Plex-Mono")
            box_height = height + 2 * pad
            pdf.setFillColor(white)
            pdf.setStrokeColor(HexColor("#D3DBE7"))
            pdf.setLineWidth(0.5)
            pdf.rect(right - barcode_width, footer_bottom, barcode_width, box_height, stroke=1, fill=1)
            paperback = book["editions"]["paperback"]
            draw_barcode(pdf, right - barcode_width + pad, footer_bottom + pad, barcode_width - 2 * pad,
                         isbn, paperback.get("priceCode", DEFAULT_PRICE_CODE),
                         label=f"ISBN {paperback.get('isbnDisplay', isbn)}", background=False,
                         font_name="Plex-Mono")
            footer_top = max(footer_top, footer_bottom + box_height)
        else:
            warnings.append("paperback ISBN is empty: back cover printed without a barcode")
    elif variant == "draft":
        box_height = 0.62 * INCH
        pdf.setFillColor(MIST)
        pdf.roundRect(right - 2.6 * INCH, footer_bottom, 2.6 * INCH, box_height, 4, stroke=0, fill=1)
        pdf.setFillColor(NAVY)
        pdf.setFont("Plex-SansBold", 9)
        pdf.drawString(right - 2.48 * INCH, footer_bottom + box_height - 0.24 * INCH, "Internal review edition")
        pdf.setFont("Plex-Sans", 8)
        pdf.setFillColor(SLATE)
        pdf.drawString(right - 2.48 * INCH, footer_bottom + 0.14 * INCH, "Not for sale or public distribution")
        footer_top = max(footer_top, footer_bottom + box_height)
    _wordmark(pdf, left, footer_bottom + 0.2 * INCH, 10.5)
    publisher = series.get("publisher", {})
    if publisher.get("name"):
        pdf.setFont("Plex-Sans", 7.5)
        pdf.setFillColor(SLATE)
        # The wordmark is the series; it is only an imprint when books.json names one.
        label = "An imprint of" if publisher.get("imprint") else "Published by"
        pdf.drawString(left, footer_bottom + 0.04 * INCH, f"{label} {publisher['name']}")

    body_top, body_bottom = panel.top(2.05), footer_top + 0.25 * INCH
    for scale in (1.0, 0.95, 0.9, 0.85, 0.8, 0.75):
        blocks = _back_blocks(series, book, root_dir, scale, width)
        if sum(gap + block_height for gap, block_height, _ in blocks) <= body_top - body_bottom:
            break
    else:
        warnings.append("back-cover copy is too long to fit even at 75% size; shorten the summary, "
                        "highlights, endorsements or authorProfile.shortBio")
    top = body_top
    for gap, _, draw in blocks:
        top -= gap
        top = draw(pdf, left, top, width)


def _back_blocks(series: dict[str, Any], book: dict[str, Any], root_dir: Path, scale: float,
                 width: float) -> list[tuple[float, float, Any]]:
    """Measure the back-cover body at a type scale: [(gap above, height, draw function)]."""
    back = book.get("backCover", {})
    blocks: list[tuple[float, float, Any]] = []

    def add(gap: float, paragraph: Paragraph, indent: float = 0, rule=None) -> None:
        _, height = paragraph.wrap(width - indent, 10_000)

        def draw(pdf, x, top, _width, paragraph=paragraph, indent=indent, height=height, rule=rule):
            if rule:
                pdf.setFillColor(rule)
                pdf.rect(x, top - height, 2, height, stroke=0, fill=1)
            paragraph.drawOn(pdf, x + indent, top - height)
            return top - height
        blocks.append((gap, height, draw))

    size = 9.5 * scale
    for index, text in enumerate(back.get("summary", [])):
        add(0 if index == 0 else size * 0.5, _paragraph(inline_markup(text), "Plex-Serif", size, NAVY, 1.42))
    if back.get("highlights"):
        if back.get("highlightsLead"):
            add(size * 0.9, _paragraph(inline_markup(back["highlightsLead"]), "Plex-SansBold", size, NAVY))
        for index, item in enumerate(back["highlights"]):
            add(size * (0.35 if index or back.get("highlightsLead") else 0.9),
                _paragraph(f"<font color='#0EA5E9'>•</font>&nbsp;&nbsp;{inline_markup(item)}",
                           "Plex-Sans", size * 1.02, NAVY, 1.3), indent=4)
    for endorsement in back.get("endorsements", []):
        text = f"<i>“{inline_markup(endorsement['quote'])}”</i>"
        if endorsement.get("attribution"):
            text += (f"<br/><font name='Plex-SansSemi' size='{size * 0.82:.1f}' color='#5E6F89'>"
                     f"{inline_markup(endorsement['attribution'])}</font>")
        add(size * 1.1, _paragraph(text, "Plex-Serif", size, NAVY, 1.4), indent=10, rule=SKY)

    profile = series.get("authorProfile", {})
    bio = profile.get("shortBio")
    photo = root_dir / profile["photo"] if profile.get("photo") else None
    photo = photo if photo and photo.is_file() else None
    if bio or photo:
        bio_size = 8.3 * scale
        photo_width = 0.8 * INCH if photo else 0
        text_width = width - 16 - (photo_width + 10 if photo else 0)
        bio_text = "<br/><br/>".join(inline_markup(part) for part in paragraphs(bio or ""))
        author = series.get("author", "")
        if author and bio:
            bio_text = f"<b>{html.escape(author)}</b><br/>{bio_text}"
        paragraph = _paragraph(bio_text, "Plex-Sans", bio_size, NAVY, 1.32)
        _, text_height = paragraph.wrap(text_width, 10_000) if bio else (0, 0)
        box_height = max(text_height, photo_width) + 16

        def draw_bio(pdf, x, top, _width, paragraph=paragraph, box_height=box_height):
            pdf.setFillColor(MIST)
            pdf.roundRect(x, top - box_height, width, box_height, 4, stroke=0, fill=1)
            text_x = x + 8
            if photo:
                portrait = Image.open(photo).convert("RGB")
                side = min(portrait.size)
                portrait = portrait.crop(((portrait.width - side) // 2, 0, (portrait.width + side) // 2, side))
                pdf.drawImage(ImageReader(portrait), x + 8, top - 8 - photo_width, photo_width, photo_width)
                text_x += photo_width + 10
            if bio:
                paragraph.drawOn(pdf, text_x, top - 8 - text_height)
            return top - box_height
        blocks.append((size * 1.3, box_height, draw_bio))
    return blocks


# ---------------------------------------------------------------- spine
def draw_spine(pdf: canvas.Canvas, x: float, y: float, width: float, height: float, bleed: float,
               series: dict[str, Any], book: dict[str, Any], with_text: bool) -> None:
    pdf.setFillColor(NAVY)
    pdf.rect(x, y - bleed, width, height + 2 * bleed, stroke=0, fill=1)
    if not with_text:
        return
    centre = x + width / 2
    size = min(15, width * 0.42)
    # Book number chip at the head of the spine (reads upright).
    chip = min(width * 0.6, 0.32 * INCH)
    pdf.setFillColor(HexColor(book.get("accentColour", "#7C3AED")))
    pdf.roundRect(centre - chip / 2, y + height - 0.45 * INCH - chip, chip, chip, 2, stroke=0, fill=1)
    pdf.setFillColor(white)
    pdf.setFont("Plex-MonoSemi", min(10, chip * 0.55))
    pdf.drawCentredString(centre, y + height - 0.45 * INCH - chip * 0.68, str(book["number"]))
    # Title, author and wordmark run top to bottom.
    pdf.saveState()
    pdf.translate(centre, y + height)
    pdf.rotate(-90)
    baseline = -size * 0.36
    pdf.setFillColor(white)
    pdf.setFont("Plex-SansBold", size)
    pdf.drawString(0.45 * INCH + chip + 0.3 * INCH, baseline, book["title"])
    surname = series.get("author", "").split()[-1] if series.get("author") else ""
    pdf.setFillColor(SKY_LIGHT)
    pdf.setFont("Plex-SansMedium", size * 0.62)
    mark_size = size * 0.55
    mark_width = pdfmetrics.stringWidth("how-to-use-ai.com", "Plex-MonoSemi", mark_size)
    pdf.drawRightString(height - 0.5 * INCH - mark_width - 0.35 * INCH, -size * 0.62 * 0.36, surname)
    _wordmark(pdf, height - 0.5 * INCH - mark_width, -mark_size * 0.36, mark_size, white)
    pdf.restoreState()


# ---------------------------------------------------------------- outputs
def _context(config: Path, book_number: int) -> tuple[dict[str, Any], dict[str, Any], int]:
    metadata = load_release_metadata(config, book_number)
    total = len(json.loads(config.read_text(encoding="utf-8"))["books"])
    return metadata["series"], metadata["book"], total


def trim_size(series: dict[str, Any]) -> tuple[float, float]:
    printing = series.get("print", {})
    page = series.get("page", {})
    width = float(printing.get("trimWidthInches") or page.get("widthInches", 7.5))
    height = float(printing.get("trimHeightInches") or page.get("heightInches", 9.25))
    return width * INCH, height * INCH


def _new_canvas(path: Path, width: float, height: float, title: str) -> canvas.Canvas:
    path.parent.mkdir(parents=True, exist_ok=True)
    pdf = canvas.Canvas(str(path), pagesize=(width, height), pageCompression=1, initialFontName="Plex-Sans")
    pdf.setTitle(title)
    return pdf


def render_front(config: Path, book_number: int, root_dir: Path, output: Path) -> Path:
    register_fonts()
    series, book, total = _context(config, book_number)
    width, height = trim_size(series)
    pdf = _new_canvas(output, width, height, f"{book['title']} — front cover")
    draw_front(pdf, Panel(0, 0, width, height), series, book, root_dir, total)
    pdf.showPage()
    pdf.save()
    return output


def render_back(config: Path, book_number: int, root_dir: Path, output: Path, variant: str) -> list[str]:
    register_fonts()
    series, book, _ = _context(config, book_number)
    width, height = trim_size(series)
    warnings: list[str] = []
    pdf = _new_canvas(output, width, height, f"{book['title']} — back cover")
    draw_back(pdf, Panel(0, 0, width, height), series, book, root_dir, variant, warnings)
    pdf.showPage()
    pdf.save()
    return warnings


def spine_width(series: dict[str, Any], printer: str, page_count: int) -> float:
    settings = series.get("print", {}).get("printers", {}).get(printer)
    if not settings:
        raise CoverError(f"series.print.printers.{printer} is not configured")
    override = settings.get("spineWidthOverrideInches")
    if override:
        return float(override) * INCH
    return page_count * float(settings["paperCaliperInches"]) * INCH


def render_wrap(config: Path, book_number: int, root_dir: Path, output: Path, printer: str,
                page_count: int) -> tuple[float, list[str]]:
    """Return the spine width in inches and any warnings."""
    register_fonts()
    series, book, total = _context(config, book_number)
    width, height = trim_size(series)
    bleed = float(series.get("print", {}).get("bleedInches", 0.125)) * INCH
    spine = spine_width(series, printer, page_count)
    settings = series["print"]["printers"][printer]
    with_text = page_count >= int(settings.get("minimumPagesForSpineText", 0))
    warnings: list[str] = []
    pdf = _new_canvas(output, 2 * width + spine + 2 * bleed, height + 2 * bleed,
                      f"{book['title']} — paperback cover ({printer})")
    draw_back(pdf, Panel(bleed, bleed, width, height, bleed_left=bleed, bleed_top=bleed, bleed_bottom=bleed),
              series, book, root_dir, "paperback", warnings)
    draw_front(pdf, Panel(bleed + width + spine, bleed, width, height, bleed_right=bleed, bleed_top=bleed,
                          bleed_bottom=bleed), series, book, root_dir, total)
    draw_spine(pdf, bleed + width, bleed, spine, height, bleed, series, book, with_text)
    pdf.showPage()
    pdf.save()
    if not with_text:
        warnings.append(f"{page_count} pages is below {printer}'s minimum for spine text; spine left blank")
    return spine / INCH, warnings


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("kind", choices=("front", "back", "wrap"))
    parser.add_argument("--config", type=Path, required=True)
    parser.add_argument("--book-number", type=int, required=True)
    parser.add_argument("--root-dir", type=Path, default=Path.cwd())
    parser.add_argument("--output", type=Path, required=True)
    parser.add_argument("--variant", choices=("paperback", "ebook", "draft"), default="ebook")
    parser.add_argument("--printer", help="wrap only: kdp or ingramspark")
    parser.add_argument("--pages", type=int, help="wrap only: interior page count")
    arguments = parser.parse_args()
    root = arguments.root_dir.resolve()
    try:
        if arguments.kind == "front":
            render_front(arguments.config, arguments.book_number, root, arguments.output)
            warnings: list[str] = []
        elif arguments.kind == "back":
            warnings = render_back(arguments.config, arguments.book_number, root, arguments.output, arguments.variant)
        else:
            if not arguments.printer or not arguments.pages:
                parser.error("wrap needs --printer and --pages")
            spine, warnings = render_wrap(arguments.config, arguments.book_number, root, arguments.output,
                                          arguments.printer, arguments.pages)
            print(f"spine={spine:.4f}in")
    except CoverError as error:
        parser.error(str(error))
    for warning in warnings:
        print(f"Warning: {warning}", file=sys.stderr)
    print(arguments.output)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
