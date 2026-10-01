#!/usr/bin/env python3
"""Draw a book barcode: EAN-13 of the ISBN plus a five-digit price add-on.

The barcode is vector artwork (PDF rectangles and embedded text), so it prints
sharply at any size. The add-on defaults to 90000, which means "no price
encoded" (OI-0007, ADR-03-0008).
"""

from __future__ import annotations

import argparse
from pathlib import Path

from reportlab.lib.colors import black, white
from reportlab.pdfgen import canvas

from scripts.book_metadata import DEFAULT_PRICE_CODE, MetadataError, normalise_isbn13
from scripts.cover_generator import _pdf_font_name

L_CODES = ("0001101", "0011001", "0010011", "0111101", "0100011", "0110001", "0101111", "0111011", "0110111", "0001011")
R_CODES = tuple("".join("1" if bit == "0" else "0" for bit in code) for code in L_CODES)
G_CODES = tuple(code[::-1] for code in R_CODES)
EAN13_PARITY = ("LLLLLL", "LLGLGG", "LLGGLG", "LLGGGL", "LGLLGG", "LGGLLG", "LGGGLL", "LGLGLG", "LGLGGL", "LGGLGL")
EAN5_PARITY = ("GGLLL", "GLGLL", "GLLGL", "GLLLG", "LGGLL", "LLGGL", "LLLGG", "LGLGL", "LGLLG", "LLGLG")

QUIET_LEFT = 11   # room for the leading digit, in modules
ADDON_GAP = 9     # space between the EAN-13 and the add-on, in modules
QUIET_RIGHT = 5
BAR_MODULES = 95
ADDON_MODULES = 48  # leading space + start guard 1011 + 5 digits + 4 separators


def _code(parity: str, digit: int) -> str:
    return {"L": L_CODES, "G": G_CODES, "R": R_CODES}[parity][digit]


def ean13_modules(isbn: str) -> str:
    """The 95 bar/space modules of an EAN-13 ("1" = bar)."""
    digits = [int(digit) for digit in normalise_isbn13(isbn)]
    left = "".join(_code(parity, digit) for parity, digit in zip(EAN13_PARITY[digits[0]], digits[1:7]))
    right = "".join(_code("R", digit) for digit in digits[7:])
    return "101" + left + "01010" + right + "101"


def ean5_checksum(code: str) -> int:
    digits = [int(digit) for digit in code]
    return (3 * (digits[0] + digits[2] + digits[4]) + 9 * (digits[1] + digits[3])) % 10


def ean5_modules(code: str) -> str:
    """The 48 modules of a five-digit add-on (leading space included): start guard, digits split by 01."""
    if len(code) != 5 or not code.isdigit():
        raise MetadataError(f"price code {code!r} must be five digits")
    parity = EAN5_PARITY[ean5_checksum(code)]
    return "01011" + "01".join(_code(parity[index], int(digit)) for index, digit in enumerate(code))


def _runs(modules: str):
    """Yield (start, width) for each run of bars."""
    start = None
    for index, bit in enumerate(modules + "0"):
        if bit == "1" and start is None:
            start = index
        elif bit == "0" and start is not None:
            yield start, index - start
            start = None


def _is_guard(index: int) -> bool:
    return index < 3 or 45 <= index < 50 or index >= 92


def draw_barcode(
    pdf: canvas.Canvas,
    x: float,
    y: float,
    width: float,
    isbn: str,
    price_code: str = DEFAULT_PRICE_CODE,
    label: str | None = None,
    background: bool = True,
    font_name: str | None = None,
) -> float:
    """Draw the barcode with its bottom-left corner at (x, y), in points.

    The height follows the width at the standard EAN proportions. Returns the
    drawn height so callers can place the white box around it.
    """
    digits = normalise_isbn13(isbn)
    main, addon = ean13_modules(digits), ean5_modules(price_code)
    total = QUIET_LEFT + BAR_MODULES + ADDON_GAP + ADDON_MODULES + QUIET_RIGHT
    module = width / total
    font = font_name or _pdf_font_name(False)
    digit_size = module * 9      # human-readable digits
    label_size = module * 8      # "ISBN ..." line above the bars
    bar_height = module * 56     # normal bars
    guard_extra = module * 5     # guard bars drop this far between the digit groups
    text_band = digit_size * 1.1

    # Bottom-up: digit band, bars, label.
    bars_bottom = y + text_band
    bars_top = bars_bottom + bar_height
    height = text_band + bar_height + label_size * 1.5

    if background:
        pdf.setFillColor(white)
        pdf.rect(x, y, width, height, stroke=0, fill=1)
    pdf.setFillColor(black)
    main_left = x + QUIET_LEFT * module
    for start, run in _runs(main):
        drop = guard_extra if _is_guard(start) else 0
        pdf.rect(main_left + start * module, bars_bottom - drop, run * module, bar_height + drop, stroke=0, fill=1)
    # Add-on bars stop short of the top so their digits sit above them.
    addon_left = main_left + (BAR_MODULES + ADDON_GAP) * module
    addon_top = bars_top - digit_size * 1.2
    for start, run in _runs(addon):
        pdf.rect(addon_left + start * module, bars_bottom - guard_extra, run * module,
                 addon_top - bars_bottom + guard_extra, stroke=0, fill=1)

    pdf.setFont(font, digit_size)
    digits_baseline = y + module
    pdf.drawRightString(main_left - module * 2, digits_baseline, digits[0])
    pdf.drawCentredString(main_left + 24 * module, digits_baseline, " ".join(digits[1:7]))
    pdf.drawCentredString(main_left + 71 * module, digits_baseline, " ".join(digits[7:]))
    pdf.drawCentredString(addon_left + ADDON_MODULES * module / 2, addon_top + digit_size * 0.25, " ".join(price_code))
    pdf.setFont(font, label_size)
    pdf.drawCentredString(main_left + BAR_MODULES * module / 2, bars_top + label_size * 0.5, label or f"ISBN {digits}")
    return height


def render_barcode_pdf(output: str | Path, isbn: str, price_code: str = DEFAULT_PRICE_CODE,
                       label: str | None = None, width_inches: float = 2.0) -> Path:
    """Write a standalone barcode PDF (for checking, or for a printer that wants the artwork)."""
    output = Path(output)
    output.parent.mkdir(parents=True, exist_ok=True)
    width = width_inches * 72
    probe = canvas.Canvas(str(output))
    height = draw_barcode(probe, 0, 0, width, isbn, price_code, label)
    pdf = canvas.Canvas(str(output), pagesize=(width, height), initialFontName=_pdf_font_name(False))
    draw_barcode(pdf, 0, 0, width, isbn, price_code, label)
    pdf.showPage()
    pdf.save()
    return output


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--isbn", required=True)
    parser.add_argument("--price-code", default=DEFAULT_PRICE_CODE)
    parser.add_argument("--label", help='text above the bars, e.g. "ISBN 978-0-6451234-0-8"')
    parser.add_argument("--width-inches", type=float, default=2.0)
    parser.add_argument("--output", type=Path, required=True)
    arguments = parser.parse_args()
    try:
        render_barcode_pdf(arguments.output, arguments.isbn, arguments.price_code, arguments.label, arguments.width_inches)
    except MetadataError as error:
        parser.error(str(error))
    print(arguments.output)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
