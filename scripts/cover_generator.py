#!/usr/bin/env python3
"""Render the shared How To Use AI.com series cover from JSON metadata.

Covers are drawn as vector PDF content (shapes and embedded fonts) so they stay
sharp in print. The illustration is the only raster element and is embedded at
its source resolution. PNG outputs are rasterised from the PDF.
"""

from __future__ import annotations

import argparse
import json
import shutil
import subprocess
import tempfile
from dataclasses import asdict, dataclass
from pathlib import Path
from typing import Any, Callable, Iterable

from PIL import Image, ImageColor, ImageDraw, ImageFont
from reportlab.lib.colors import Color
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas


NAVY = "#061532"
SLATE = "#5E6F89"
WHITE = "#FFFFFF"
GOLD = "#E9C46A"
GOLD_DARK = "#B8892E"

REGULAR_FONTS = [
    "/System/Library/Fonts/Supplemental/Arial.ttf",
    "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
]
BOLD_FONTS = [
    "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
    "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
]
# Characters whose ink drops below the baseline; used to match line spacing to
# the visible text rather than the font's full line box.
DESCENDERS = set("gjpqyQ,;()[]{}|/")


class CoverConfigurationError(ValueError):
    """Raised when the cover metadata cannot produce a valid cover."""


@dataclass(frozen=True)
class RenderedCoverAssets:
    book_number: int
    illustration: Path
    used_placeholder: bool
    front_png: Path
    front_pdf: Path
    front_preview: Path
    back_png: Path
    back_pdf: Path
    back_preview: Path

    def to_json_dict(self) -> dict[str, Any]:
        values = asdict(self)
        return {key: str(value) if isinstance(value, Path) else value for key, value in values.items()}


def _font_path(bold: bool) -> str:
    candidates = BOLD_FONTS if bold else REGULAR_FONTS
    for candidate in candidates:
        if Path(candidate).is_file():
            return candidate
    return "DejaVuSans-Bold.ttf" if bold else "DejaVuSans.ttf"


def _load_font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont:
    """Pillow font, used only for the raster placeholder illustration."""
    return ImageFont.truetype(_font_path(bold), size=size)


_REGISTERED_FONTS: dict[bool, str] = {}


def _pdf_font_name(bold: bool) -> str:
    if bold not in _REGISTERED_FONTS:
        name = "CoverBold" if bold else "CoverRegular"
        pdfmetrics.registerFont(TTFont(name, _font_path(bold)))
        _REGISTERED_FONTS[bold] = name
    return _REGISTERED_FONTS[bold]


@dataclass(frozen=True)
class _Font:
    """A PDF font at a size, measured in cover pixels."""

    name: str
    size: float

    @property
    def _face(self):
        return pdfmetrics.getFont(self.name).face

    @property
    def ascent(self) -> float:
        return self._face.ascent * self.size / 1000

    @property
    def cap_height(self) -> float:
        return self._face.capHeight * self.size / 1000

    @property
    def descent(self) -> float:
        return -self._face.descent * self.size / 1000

    def width(self, text: str) -> float:
        return pdfmetrics.stringWidth(text, self.name, self.size)


def _font(size: float, bold: bool = False) -> _Font:
    return _Font(_pdf_font_name(bold), size)


def _hex_colour(value: str, field: str) -> tuple[int, int, int]:
    try:
        colour = ImageColor.getrgb(value)
    except ValueError as error:
        raise CoverConfigurationError(f"{field} must be a valid colour, got {value!r}") from error
    if len(colour) != 3:
        raise CoverConfigurationError(f"{field} must be an opaque RGB colour")
    return colour


def _pdf_colour(value: str | tuple[int, int, int]) -> Color:
    red, green, blue = ImageColor.getrgb(value) if isinstance(value, str) else value
    return Color(red / 255, green / 255, blue / 255)


class _Page:
    """Vector drawing surface in cover pixels with a top-left origin.

    Outlines are drawn inside their boxes, and text ``y`` is the top of the
    font's ascent, matching the original Pillow layout coordinates.
    """

    def __init__(self, pdf: canvas.Canvas, width: int, height: int) -> None:
        self.pdf = pdf
        self.width = width
        self.height = height

    def _y(self, y: float) -> float:
        return self.height - y

    def rect(self, box: tuple[float, float, float, float], fill) -> None:
        x0, y0, x1, y1 = box
        self.pdf.setFillColor(_pdf_colour(fill))
        self.pdf.rect(x0, self._y(y1), x1 - x0, y1 - y0, stroke=0, fill=1)

    def rounded_rect(self, box, radius: float, fill=None, outline=None, width: float = 0) -> None:
        x0, y0, x1, y1 = box
        inset = width / 2 if outline else 0
        if fill:
            self.pdf.setFillColor(_pdf_colour(fill))
        if outline:
            self.pdf.setStrokeColor(_pdf_colour(outline))
            self.pdf.setLineWidth(width)
        self.pdf.roundRect(
            x0 + inset,
            self._y(y1) + inset,
            x1 - x0 - 2 * inset,
            y1 - y0 - 2 * inset,
            max(0, radius - inset),
            stroke=1 if outline else 0,
            fill=1 if fill else 0,
        )

    def ellipse(self, box, fill=None, outline=None, width: float = 0) -> None:
        x0, y0, x1, y1 = box
        inset = width / 2 if outline else 0
        if fill:
            self.pdf.setFillColor(_pdf_colour(fill))
        if outline:
            self.pdf.setStrokeColor(_pdf_colour(outline))
            self.pdf.setLineWidth(width)
        self.pdf.ellipse(
            x0 + inset,
            self._y(y1) + inset,
            x1 - inset,
            self._y(y0) - inset,
            stroke=1 if outline else 0,
            fill=1 if fill else 0,
        )

    def line(self, x0: float, y0: float, x1: float, y1: float, colour, width: float) -> None:
        self.pdf.setStrokeColor(_pdf_colour(colour))
        self.pdf.setLineWidth(width)
        self.pdf.line(x0, self._y(y0), x1, self._y(y1))

    def text(self, x: float, y: float, text: str, font: _Font, colour) -> None:
        self.pdf.setFillColor(_pdf_colour(colour))
        self.pdf.setFont(font.name, font.size)
        self.pdf.drawString(x, self._y(y + font.ascent), text)

    def image(self, image: Image.Image, x: float, y: float, width: float, height: float) -> None:
        self.pdf.drawImage(ImageReader(image), x, self._y(y + height), width=width, height=height)


def _load_config(config_path: Path) -> dict[str, Any]:
    try:
        config = json.loads(config_path.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError) as error:
        raise CoverConfigurationError(f"Unable to read cover configuration {config_path}: {error}") from error
    if not isinstance(config.get("series"), dict) or not isinstance(config.get("books"), list):
        raise CoverConfigurationError("Cover configuration requires a series object and books array")
    return config


def _select_book(config: dict[str, Any], book_number: int) -> dict[str, Any]:
    for book in config["books"]:
        if book.get("number") == book_number:
            return book
    raise CoverConfigurationError(f"Book {book_number} is not defined in the cover configuration")


def _fit_font(text: str, max_width: int, start_size: int, minimum_size: int, bold: bool = True) -> _Font:
    for size in range(start_size, minimum_size - 1, -2):
        font = _font(size, bold=bold)
        if font.width(text) <= max_width:
            return font
    return _font(minimum_size, bold=bold)


def _wrap_text(text: str, font: _Font, max_width: int) -> list[str]:
    if not text.strip():
        return []
    lines: list[str] = []
    current: list[str] = []
    for word in text.split():
        candidate = " ".join([*current, word])
        if current and font.width(candidate) > max_width:
            lines.append(" ".join(current))
            current = [word]
        else:
            current.append(word)
    if current:
        lines.append(" ".join(current))
    return lines


def _ink_height(line: str, font: _Font) -> float:
    return font.cap_height + (font.descent if DESCENDERS & set(line) else 0)


def _draw_centered_lines(
    page: _Page,
    lines: Iterable[str],
    y: float,
    font: _Font,
    fill,
    spacing: float,
    center_x: float | None = None,
) -> float:
    current_y = y
    resolved_center_x = page.width / 2 if center_x is None else center_x
    for line in lines:
        page.text(resolved_center_x - font.width(line) / 2, current_y, line, font, fill)
        current_y += _ink_height(line, font) + spacing
    return current_y


def _draw_spaced_text(
    page: _Page, text: str, center_x: float, y: float, font: _Font, fill, spacing: float
) -> tuple[float, float]:
    """Draw letter-spaced text centred on ``center_x``; return its left and right edges."""
    widths = [font.width(character) for character in text]
    total = sum(widths) + spacing * max(0, len(text) - 1)
    x = start = center_x - total / 2
    for character, width in zip(text, widths):
        page.text(x, y, character, font, fill)
        x += width + spacing
    return start, start + total


def _draw_name_rule(
    page: _Page, name: str, y: float, font: _Font, fill, rule_colour, margin: float, spacing: float
) -> None:
    """Draw ``——— NAME ———``: rules either side of the name, centred on its capitals."""
    left, right = _draw_spaced_text(page, name, page.width / 2, y, font, fill, spacing)
    rule_y = y + font.ascent - font.cap_height / 2
    gap = 48
    page.line(margin, rule_y, left - gap, rule_y, rule_colour, 3)
    page.line(right + gap, rule_y, page.width - margin, rule_y, rule_colour, 3)


def _has_transparency(image: Image.Image) -> bool:
    if image.mode in ("RGBA", "LA") or (image.mode == "P" and "transparency" in image.info):
        return image.convert("RGBA").getchannel("A").getextrema()[0] < 255
    return False


def _cutout_art(image: Image.Image) -> Image.Image:
    """Trim transparent margins and flatten onto white, keeping source resolution."""
    image = image.convert("RGBA")
    subject_box = image.getchannel("A").getbbox()
    if subject_box:
        image = image.crop(subject_box)
    background = Image.new("RGBA", image.size, WHITE)
    background.alpha_composite(image)
    return background.convert("RGB")


def _full_bleed_art(image: Image.Image, size: tuple[int, int], fade_height: int) -> Image.Image:
    """Centre-crop to ``size``'s shape at source resolution and fade the top edge into white."""
    image = image.convert("RGB")
    scale = max(size[0] / image.width, size[1] / image.height)
    crop_width, crop_height = round(size[0] / scale), round(size[1] / scale)
    left, top = (image.width - crop_width) // 2, (image.height - crop_height) // 2
    art = image.crop((left, top, left + crop_width, top + crop_height))
    fade_pixels = max(1, round(fade_height / scale))
    column = Image.new("L", (1, fade_pixels))
    column.putdata([int(255 * (1 - y / fade_pixels) ** 1.8) for y in range(fade_pixels)])
    mask = Image.new("L", art.size, 0)
    mask.paste(column.resize((art.width, fade_pixels)), (0, 0))
    art.paste(Image.new("RGB", art.size, WHITE), (0, 0), mask)
    return art


def _generate_placeholder(path: Path, width: int, height: int) -> Path:
    path.parent.mkdir(parents=True, exist_ok=True)
    background = Image.new("RGB", (width, height), "#E8EDF6")
    draw = ImageDraw.Draw(background)
    for offset in range(-height, width, 180):
        draw.line((offset, height, offset + height, 0), fill="#D8E0EE", width=42)
    border = max(12, width // 90)
    draw.rounded_rectangle(
        (border * 5, border * 5, width - border * 5, height - border * 5),
        radius=border * 3,
        outline="#7C3AED",
        width=border,
    )
    title_font = _load_font(max(72, width // 12), bold=True)
    detail_font = _load_font(max(36, width // 28), bold=False)
    y = height // 2 - title_font.size
    for line in ["PREVIEW", "PUBLICATION ONLY"]:
        box = draw.textbbox((0, 0), line, font=title_font)
        draw.text(((width - (box[2] - box[0])) / 2, y), line, font=title_font, fill=NAVY)
        y += (box[3] - box[1]) + title_font.size // 3
    detail = "Illustration pending"
    box = draw.textbbox((0, 0), detail, font=detail_font)
    draw.text(((width - (box[2] - box[0])) / 2, height // 2 + title_font.size * 2), detail, font=detail_font, fill=SLATE)
    background.save(path, format="PNG", optimize=True)
    return path


def _resolve_illustration(
    root_dir: Path, series: dict[str, Any], book: dict[str, Any]
) -> tuple[Path, bool]:
    illustration_path = root_dir / book["image"]
    if illustration_path.is_file():
        return illustration_path, False
    illustration = series["illustration"]
    placeholder_path = root_dir / illustration["placeholder"]
    expected_size = (int(illustration["widthPixels"]), int(illustration["heightPixels"]))
    placeholder_size = None
    if placeholder_path.is_file():
        with Image.open(placeholder_path) as placeholder:
            placeholder_size = placeholder.size
    if placeholder_size != expected_size:
        _generate_placeholder(placeholder_path, *expected_size)
    return placeholder_path, True


def _render_front(page: _Page, series: dict[str, Any], book: dict[str, Any], illustration_path: Path) -> None:
    width = page.width
    accent = _hex_colour(book["accentColour"], "accentColour")
    supporting = book.get("supportingAccentColours") or [book["accentColour"]]
    supporting_colour = _hex_colour(supporting[0], "supportingAccentColours[0]")
    page.rect((0, 0, width, page.height), WHITE)

    _draw_spaced_text(page, series.get("descriptor", ""), width / 2, 78, _font(44), SLATE, 16)
    _draw_centered_lines(page, ["How To Use"], 190, _font(260, bold=True), NAVY, 0)

    ai_font = _font(330, bold=True)
    ai_text, com_text = "AI", ".com"
    start_x = (width - ai_font.width(ai_text) - ai_font.width(com_text)) / 2
    page.text(start_x, 440, ai_text, ai_font, supporting_colour)
    page.text(start_x + ai_font.width(ai_text), 440, com_text, ai_font, NAVY)
    _draw_spaced_text(page, series.get("tagline", ""), width / 2, 785, _font(42, bold=True), NAVY, 8)

    badge_text = f"BOOK {book['number']}"
    badge_font = _font(62, bold=True)
    badge_width = int(badge_font.width(badge_text) + 120)
    badge_box = ((width - badge_width) // 2, 902, (width + badge_width) // 2, 1022)
    page.rounded_rect(badge_box, 34, fill=accent)
    page.text((width - badge_font.width(badge_text)) / 2, 922, badge_text, badge_font, WHITE)
    page.line(250, 962, badge_box[0] - 42, 962, accent, 3)
    page.line(badge_box[2] + 42, 962, width - 250, 962, accent, 3)

    title = str(book["title"]).upper()
    title_font = _fit_font(title, width - 300, 116, 78, bold=True)
    title_lines = _wrap_text(title, title_font, width - 300)
    title_bottom = _draw_centered_lines(page, title_lines, 1070, title_font, NAVY, 12)
    description_font = _font(52)
    description_lines = _wrap_text(str(book.get("description", "")), description_font, width - 460)
    text_bottom = _draw_centered_lines(page, description_lines, title_bottom + 28, description_font, SLATE, 12)

    with Image.open(illustration_path) as illustration:
        # Cut-out art (transparent background) is shown whole on white and may use
        # all the clear space between the subtitle and the author name; full-bleed
        # art is cropped to fill the band and blended in with a fade and side bars.
        cutout = _has_transparency(illustration)
        if cutout:
            art = _cutout_art(illustration)
            region_top, region_bottom = text_bottom + 30, 2765
            scale = min(width / art.width, (region_bottom - region_top) / art.height)
            art_width, art_height = art.width * scale, art.height * scale
            page.image(
                art,
                (width - art_width) / 2,
                region_top + (region_bottom - region_top - art_height) / 2,
                art_width,
                art_height,
            )
        else:
            art_top, art_bottom = 1440, 2700
            art = _full_bleed_art(illustration, (width, art_bottom - art_top), 310)
            page.image(art, 0, art_top, width, art_bottom - art_top)
            page.rect((0, art_top, 18, art_bottom), accent)
            page.rect((width - 18, art_top, width, art_bottom), accent)

    descriptor = str(book.get("descriptor", "")).upper().strip()
    if descriptor:
        circle_size = 360
        circle_box = (70, 1510, 70 + circle_size, 1510 + circle_size)
        page.ellipse(circle_box, fill=GOLD, outline=GOLD_DARK, width=12)
        page.ellipse(
            (circle_box[0] + 22, circle_box[1] + 22, circle_box[2] - 22, circle_box[3] - 22),
            outline=GOLD_DARK,
            width=3,
        )
        descriptor_font = _font(43, bold=True)
        descriptor_lines = _wrap_text(descriptor, descriptor_font, circle_size - 72)
        line_height = descriptor_font.cap_height + 8
        descriptor_y = circle_box[1] + (circle_size - len(descriptor_lines) * line_height) / 2
        descriptor_y -= descriptor_font.ascent - descriptor_font.cap_height
        _draw_centered_lines(
            page,
            descriptor_lines,
            descriptor_y,
            descriptor_font,
            NAVY,
            8,
            center_x=circle_box[0] + circle_size / 2,
        )

    author = series["author"].upper()
    author_font = _fit_font(author, width - 1260, 54, 40, bold=True)
    _draw_name_rule(page, author, 2795, author_font, NAVY, accent, 180, 9)


def _render_back(page: _Page, series: dict[str, Any], book: dict[str, Any]) -> None:
    width, height = page.width, page.height
    accent = _hex_colour(book["accentColour"], "accentColour")
    page.rect((0, 0, width, height), WHITE)
    page.rect((0, 0, 56, height), accent)
    page.rect((width - 56, 0, width, height), accent)
    page.rect((56, 0, width - 56, 360), NAVY)

    _draw_spaced_text(page, series.get("descriptor", ""), width / 2, 90, _font(38), WHITE, 12)
    _draw_centered_lines(page, [series["title"]], 170, _font(104, bold=True), WHITE, 0)

    badge_text = f"BOOK {book['number']}  •  {str(book['theme']).upper()}"
    badge_font = _font(44, bold=True)
    badge_width = int(badge_font.width(badge_text) + 100)
    badge_box = ((width - badge_width) // 2, 500, (width + badge_width) // 2, 602)
    page.rounded_rect(badge_box, 28, fill=accent)
    page.text((width - badge_font.width(badge_text)) / 2, 518, badge_text, badge_font, WHITE)

    title = str(book["title"]).upper()
    title_font = _fit_font(title, width - 360, 118, 76, bold=True)
    title_lines = _wrap_text(title, title_font, width - 360)
    title_bottom = _draw_centered_lines(page, title_lines, 770, title_font, NAVY, 18)

    description = str(book.get("backCoverDescription") or book.get("description") or "")
    description_font = _font(54)
    description_lines = _wrap_text(description, description_font, width - 520)
    description_bottom = _draw_centered_lines(
        page, description_lines, title_bottom + 80, description_font, SLATE, 18
    )

    page.line(360, description_bottom + 90, width - 360, description_bottom + 90, accent, 5)
    _draw_centered_lines(
        page,
        ["UNDERSTAND  →  USE  →  OPERATE", "BUILD  →  ENGINEER"],
        description_bottom + 170,
        _font(48, bold=True),
        NAVY,
        28,
    )

    page.rounded_rect((280, 1940, width - 280, 2380), 48, fill="#F4F6FA", outline=accent, width=5)
    _draw_centered_lines(
        page,
        ["INTERNAL REVIEW EDITION", "Not for sale or public distribution"],
        2040,
        _font(52, bold=True),
        NAVY,
        34,
    )

    author = series["author"].upper()
    author_font = _fit_font(author, width - 1320, 52, 38, bold=True)
    _draw_name_rule(page, author, 2705, author_font, NAVY, accent, 220, 8)
    _draw_centered_lines(page, [series.get("tagline", "")], 2860, _font(34), SLATE, 0)


def _rasterise(pdf_path: Path, png_path: Path, dpi: int) -> None:
    pdftoppm = shutil.which("pdftoppm")
    if not pdftoppm:
        raise RuntimeError("pdftoppm is required to render cover PNGs (brew install poppler)")
    with tempfile.TemporaryDirectory() as scratch:
        stem = Path(scratch) / "page"
        subprocess.run(
            [pdftoppm, "-png", "-r", str(dpi), "-singlefile", str(pdf_path), str(stem)],
            check=True,
        )
        with Image.open(stem.with_suffix(".png")) as rendered:
            rendered.convert("RGB").save(png_path, format="PNG", dpi=(dpi, dpi), optimize=True)


def _write_outputs(
    draw: Callable[[_Page], None],
    stem: str,
    output_dir: Path,
    series: dict[str, Any],
) -> tuple[Path, Path, Path]:
    output_dir.mkdir(parents=True, exist_ok=True)
    png_path = output_dir / f"{stem}.png"
    pdf_path = output_dir / f"{stem}.pdf"
    preview_path = output_dir / f"{stem}-preview.png"

    artwork, page_inches = series["coverArtwork"], series["page"]
    width, height = int(artwork["widthPixels"]), int(artwork["heightPixels"])
    page_size = (float(page_inches["widthInches"]) * 72, float(page_inches["heightInches"]) * 72)
    # Start on an embedded font so the PDF never references unembedded Helvetica,
    # which print preflight checks reject.
    pdf = canvas.Canvas(
        str(pdf_path), pagesize=page_size, pageCompression=1, initialFontName=_pdf_font_name(False)
    )
    pdf.scale(page_size[0] / width, page_size[1] / height)
    draw(_Page(pdf, width, height))
    pdf.showPage()
    pdf.save()

    # Rasterise at the resolution that reproduces the configured artwork pixels.
    _rasterise(pdf_path, png_path, round(width / float(page_inches["widthInches"])))
    preview_width = int(artwork.get("previewWidthPixels", 630))
    with Image.open(png_path) as image:
        preview_height = round(image.height * preview_width / image.width)
        image.resize((preview_width, preview_height), Image.Resampling.LANCZOS).save(
            preview_path, format="PNG", optimize=True
        )
    return png_path, pdf_path, preview_path


def render_book_cover(
    config_path: str | Path,
    book_number: int,
    root_dir: str | Path,
    output_dir: str | Path,
) -> RenderedCoverAssets:
    config_path = Path(config_path)
    root_dir = Path(root_dir)
    output_dir = Path(output_dir)
    config = _load_config(config_path)
    series = config["series"]
    book = _select_book(config, int(book_number))
    illustration, used_placeholder = _resolve_illustration(root_dir, series, book)

    front_png, front_pdf, front_preview = _write_outputs(
        lambda page: _render_front(page, series, book, illustration),
        f"book-{book_number:02d}-front-cover",
        output_dir,
        series,
    )
    back_png, back_pdf, back_preview = _write_outputs(
        lambda page: _render_back(page, series, book),
        f"book-{book_number:02d}-back-cover",
        output_dir,
        series,
    )
    return RenderedCoverAssets(
        book_number=int(book_number),
        illustration=illustration,
        used_placeholder=used_placeholder,
        front_png=front_png,
        front_pdf=front_pdf,
        front_preview=front_preview,
        back_png=back_png,
        back_pdf=back_pdf,
        back_preview=back_preview,
    )


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--config", type=Path, required=True)
    parser.add_argument("--book-number", type=int, required=True)
    parser.add_argument("--root-dir", type=Path, default=Path.cwd())
    parser.add_argument("--output-dir", type=Path, required=True)
    arguments = parser.parse_args()
    try:
        assets = render_book_cover(
            arguments.config, arguments.book_number, arguments.root_dir, arguments.output_dir
        )
    except CoverConfigurationError as error:
        parser.error(str(error))
    print(json.dumps(assets.to_json_dict(), indent=2, sort_keys=True))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
