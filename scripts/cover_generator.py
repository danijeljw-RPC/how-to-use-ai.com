#!/usr/bin/env python3
"""Render the shared How To Use AI.com series cover from JSON metadata."""

from __future__ import annotations

import argparse
import json
from dataclasses import asdict, dataclass
from pathlib import Path
from typing import Any, Iterable

from PIL import Image, ImageColor, ImageDraw, ImageFont, ImageOps
from reportlab.lib.utils import ImageReader
from reportlab.pdfgen import canvas


NAVY = "#061532"
SLATE = "#5E6F89"
WHITE = "#FFFFFF"


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


def _load_font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont:
    candidates = (
        [
            "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
            "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
        ]
        if bold
        else [
            "/System/Library/Fonts/Supplemental/Arial.ttf",
            "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
        ]
    )
    for candidate in candidates:
        if Path(candidate).is_file():
            return ImageFont.truetype(candidate, size=size)
    return ImageFont.truetype("DejaVuSans-Bold.ttf" if bold else "DejaVuSans.ttf", size=size)


def _hex_colour(value: str, field: str) -> tuple[int, int, int]:
    try:
        colour = ImageColor.getrgb(value)
    except ValueError as error:
        raise CoverConfigurationError(f"{field} must be a valid colour, got {value!r}") from error
    if len(colour) != 3:
        raise CoverConfigurationError(f"{field} must be an opaque RGB colour")
    return colour


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


def _fit_font(text: str, max_width: int, start_size: int, minimum_size: int, bold: bool = True):
    for size in range(start_size, minimum_size - 1, -2):
        font = _load_font(size, bold=bold)
        if font.getlength(text) <= max_width:
            return font
    return _load_font(minimum_size, bold=bold)


def _wrap_text(text: str, font: ImageFont.FreeTypeFont, max_width: int) -> list[str]:
    if not text.strip():
        return []
    lines: list[str] = []
    current: list[str] = []
    for word in text.split():
        candidate = " ".join([*current, word])
        if current and font.getlength(candidate) > max_width:
            lines.append(" ".join(current))
            current = [word]
        else:
            current.append(word)
    if current:
        lines.append(" ".join(current))
    return lines


def _draw_centered_lines(
    draw: ImageDraw.ImageDraw,
    lines: Iterable[str],
    y: int,
    font: ImageFont.FreeTypeFont,
    fill: str | tuple[int, int, int],
    canvas_width: int,
    spacing: int,
    center_x: float | None = None,
) -> int:
    current_y = y
    resolved_center_x = canvas_width / 2 if center_x is None else center_x
    for line in lines:
        box = draw.textbbox((0, 0), line, font=font)
        line_width = box[2] - box[0]
        draw.text((resolved_center_x - line_width / 2, current_y), line, font=font, fill=fill)
        current_y += (box[3] - box[1]) + spacing
    return current_y


def _draw_spaced_text(
    draw: ImageDraw.ImageDraw,
    text: str,
    center_x: int,
    y: int,
    font: ImageFont.FreeTypeFont,
    fill: str,
    spacing: int,
) -> None:
    widths = [draw.textlength(character, font=font) for character in text]
    total = sum(widths) + spacing * max(0, len(text) - 1)
    x = center_x - total / 2
    for character, width in zip(text, widths):
        draw.text((x, y), character, font=font, fill=fill)
        x += width + spacing


def _cover_crop(image: Image.Image, size: tuple[int, int]) -> Image.Image:
    return ImageOps.fit(image.convert("RGB"), size, method=Image.Resampling.LANCZOS, centering=(0.5, 0.5))


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
    _draw_centered_lines(
        draw,
        ["PREVIEW", "PUBLICATION ONLY"],
        height // 2 - title_font.size,
        title_font,
        NAVY,
        width,
        title_font.size // 3,
    )
    _draw_centered_lines(
        draw,
        ["Illustration pending"],
        height // 2 + title_font.size * 2,
        detail_font,
        SLATE,
        width,
        0,
    )
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


def _render_front(
    series: dict[str, Any], book: dict[str, Any], illustration_path: Path
) -> Image.Image:
    output = series["coverArtwork"]
    width, height = int(output["widthPixels"]), int(output["heightPixels"])
    accent = _hex_colour(book["accentColour"], "accentColour")
    supporting = book.get("supportingAccentColours") or [book["accentColour"]]
    supporting_colour = _hex_colour(supporting[0], "supportingAccentColours[0]")
    cover = Image.new("RGB", (width, height), WHITE)
    draw = ImageDraw.Draw(cover)

    _draw_spaced_text(draw, series.get("descriptor", ""), width // 2, 78, _load_font(44), SLATE, 16)
    _draw_centered_lines(draw, ["How To Use"], 190, _load_font(260, bold=True), NAVY, width, 0)

    ai_font = _load_font(330, bold=True)
    ai_text, com_text = "AI", ".com"
    combined_width = ai_font.getlength(ai_text) + ai_font.getlength(com_text)
    start_x = (width - combined_width) / 2
    draw.text((start_x, 440), ai_text, font=ai_font, fill=supporting_colour)
    draw.text((start_x + ai_font.getlength(ai_text), 440), com_text, font=ai_font, fill=NAVY)
    _draw_spaced_text(draw, series.get("tagline", ""), width // 2, 785, _load_font(42, bold=True), NAVY, 8)

    badge_text = f"BOOK {book['number']}"
    badge_font = _load_font(62, bold=True)
    badge_width = int(badge_font.getlength(badge_text) + 120)
    badge_box = ((width - badge_width) // 2, 902, (width + badge_width) // 2, 1022)
    draw.rounded_rectangle(badge_box, radius=34, fill=accent)
    badge_text_width = badge_font.getlength(badge_text)
    draw.text(((width - badge_text_width) / 2, 922), badge_text, font=badge_font, fill=WHITE)
    draw.line((250, 962, badge_box[0] - 42, 962), fill=accent, width=3)
    draw.line((badge_box[2] + 42, 962, width - 250, 962), fill=accent, width=3)

    title = str(book["title"]).upper()
    title_font = _fit_font(title, width - 300, 116, 78, bold=True)
    title_lines = _wrap_text(title, title_font, width - 300)
    title_bottom = _draw_centered_lines(draw, title_lines, 1070, title_font, NAVY, width, 12)
    description_font = _load_font(52)
    description_lines = _wrap_text(str(book.get("description", "")), description_font, width - 460)
    _draw_centered_lines(draw, description_lines, title_bottom + 28, description_font, SLATE, width, 12)

    art_top, art_bottom = 1440, 2700
    with Image.open(illustration_path) as illustration:
        art = _cover_crop(illustration, (width, art_bottom - art_top))
    cover.paste(art, (0, art_top))
    fade = Image.new("RGBA", (width, 310), (255, 255, 255, 0))
    fade_pixels = fade.load()
    for y in range(fade.height):
        alpha = int(255 * (1 - y / fade.height) ** 1.8)
        for x in range(width):
            fade_pixels[x, y] = (255, 255, 255, alpha)
    cover.paste(fade, (0, art_top), fade)
    draw = ImageDraw.Draw(cover)
    draw.rectangle((0, art_top, 18, art_bottom), fill=accent)
    draw.rectangle((width - 18, art_top, width, art_bottom), fill=accent)

    descriptor = str(book.get("descriptor", "")).upper().strip()
    if descriptor:
        circle_size = 360
        circle_box = (70, 1510, 70 + circle_size, 1510 + circle_size)
        draw.ellipse(circle_box, fill="#FFF3D6", outline=accent, width=12)
        descriptor_font = _load_font(43, bold=True)
        descriptor_lines = _wrap_text(descriptor, descriptor_font, circle_size - 72)
        line_height = descriptor_font.size + 8
        descriptor_y = circle_box[1] + (circle_size - len(descriptor_lines) * line_height) // 2
        _draw_centered_lines(
            draw,
            descriptor_lines,
            descriptor_y,
            descriptor_font,
            NAVY,
            width,
            8,
            center_x=circle_box[0] + circle_size / 2,
        )

    draw.rectangle((0, 2700, width, height), fill=WHITE)
    draw.line((180, 2845, 590, 2845), fill=accent, width=3)
    draw.line((width - 590, 2845, width - 180, 2845), fill=accent, width=3)
    author_font = _fit_font(series["author"].upper(), width - 1260, 54, 40, bold=True)
    _draw_spaced_text(draw, series["author"].upper(), width // 2, 2795, author_font, NAVY, 9)
    return cover


def _render_back(series: dict[str, Any], book: dict[str, Any]) -> Image.Image:
    output = series["coverArtwork"]
    width, height = int(output["widthPixels"]), int(output["heightPixels"])
    accent = _hex_colour(book["accentColour"], "accentColour")
    cover = Image.new("RGB", (width, height), WHITE)
    draw = ImageDraw.Draw(cover)
    draw.rectangle((0, 0, 56, height), fill=accent)
    draw.rectangle((width - 56, 0, width, height), fill=accent)
    draw.rectangle((56, 0, width - 56, 360), fill=NAVY)

    _draw_spaced_text(draw, series.get("descriptor", ""), width // 2, 90, _load_font(38), WHITE, 12)
    _draw_centered_lines(draw, [series["title"]], 170, _load_font(104, bold=True), WHITE, width, 0)

    badge_text = f"BOOK {book['number']}  •  {str(book['theme']).upper()}"
    badge_font = _load_font(44, bold=True)
    badge_width = int(badge_font.getlength(badge_text) + 100)
    badge_box = ((width - badge_width) // 2, 500, (width + badge_width) // 2, 602)
    draw.rounded_rectangle(badge_box, radius=28, fill=accent)
    draw.text(((width - badge_font.getlength(badge_text)) / 2, 518), badge_text, font=badge_font, fill=WHITE)

    title_font = _fit_font(str(book["title"]).upper(), width - 360, 118, 76, bold=True)
    title_lines = _wrap_text(str(book["title"]).upper(), title_font, width - 360)
    title_bottom = _draw_centered_lines(draw, title_lines, 770, title_font, NAVY, width, 18)

    description = str(book.get("backCoverDescription") or book.get("description") or "")
    description_font = _load_font(54)
    description_lines = _wrap_text(description, description_font, width - 520)
    description_bottom = _draw_centered_lines(
        draw, description_lines, title_bottom + 80, description_font, SLATE, width, 18
    )

    draw.line((360, description_bottom + 90, width - 360, description_bottom + 90), fill=accent, width=5)
    progression_font = _load_font(48, bold=True)
    _draw_centered_lines(
        draw,
        ["UNDERSTAND  →  USE  →  OPERATE", "BUILD  →  ENGINEER"],
        description_bottom + 170,
        progression_font,
        NAVY,
        width,
        28,
    )

    draw.rounded_rectangle((280, 1940, width - 280, 2380), radius=48, fill="#F4F6FA", outline=accent, width=5)
    _draw_centered_lines(
        draw,
        ["INTERNAL REVIEW EDITION", "Not for sale or public distribution"],
        2040,
        _load_font(52, bold=True),
        NAVY,
        width,
        34,
    )

    draw.line((220, 2755, 620, 2755), fill=accent, width=3)
    draw.line((width - 620, 2755, width - 220, 2755), fill=accent, width=3)
    author_font = _fit_font(series["author"].upper(), width - 1320, 52, 38, bold=True)
    _draw_spaced_text(draw, series["author"].upper(), width // 2, 2705, author_font, NAVY, 8)
    _draw_centered_lines(draw, [series.get("tagline", "")], 2860, _load_font(34), SLATE, width, 0)
    return cover


def _write_pdf(image: Image.Image, path: Path, page_width_inches: float, page_height_inches: float) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    page_size = (page_width_inches * 72, page_height_inches * 72)
    pdf = canvas.Canvas(str(path), pagesize=page_size, pageCompression=1)
    pdf.drawImage(ImageReader(image), 0, 0, width=page_size[0], height=page_size[1])
    pdf.showPage()
    pdf.save()


def _write_outputs(
    image: Image.Image,
    stem: str,
    output_dir: Path,
    page: dict[str, Any],
    preview_width: int,
) -> tuple[Path, Path, Path]:
    output_dir.mkdir(parents=True, exist_ok=True)
    png_path = output_dir / f"{stem}.png"
    pdf_path = output_dir / f"{stem}.pdf"
    preview_path = output_dir / f"{stem}-preview.png"
    image.save(png_path, format="PNG", dpi=(300, 300), optimize=True)
    preview_height = round(image.height * preview_width / image.width)
    image.resize((preview_width, preview_height), Image.Resampling.LANCZOS).save(
        preview_path, format="PNG", optimize=True
    )
    _write_pdf(image, pdf_path, float(page["widthInches"]), float(page["heightInches"]))
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

    front = _render_front(series, book, illustration)
    back = _render_back(series, book)
    preview_width = int(series["coverArtwork"].get("previewWidthPixels", 630))
    front_png, front_pdf, front_preview = _write_outputs(
        front, f"book-{book_number:02d}-front-cover", output_dir, series["page"], preview_width
    )
    back_png, back_pdf, back_preview = _write_outputs(
        back, f"book-{book_number:02d}-back-cover", output_dir, series["page"], preview_width
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
