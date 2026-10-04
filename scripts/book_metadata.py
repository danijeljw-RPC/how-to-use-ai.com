#!/usr/bin/env python3
"""Load release metadata for one book from publishing/books.json.

Every optional value follows one rule: an empty string, empty list or empty
object means "leave it out". ``release_metadata`` returns the book's metadata
with those values already removed, so renderers only test for presence.
``release_problems`` lists what blocks a real (non-proof) release build.
"""

from __future__ import annotations

import argparse
import copy
import json
import re
from pathlib import Path
from typing import Any

FORMATS = ("paperback", "pdf", "epub")
DEFAULT_PRICE_CODE = "90000"
# The paperback is printed in two inks; each is its own product with its own
# ISBN, barcode and cover (ADR-03-0010).
INKS = ("black-and-white", "colour")
PAPERBACK_EDITIONS = {"black-and-white": "paperback", "colour": "paperbackColour"}


def interior_inks(series: dict[str, Any], requested: list[str] | None = None) -> list[str]:
    """The paperback inks to build: ``requested``, else series.print.interiorInks, else black-and-white."""
    inks = requested or series.get("print", {}).get("interiorInks") or ["black-and-white"]
    unknown = [ink for ink in inks if ink not in INKS]
    if unknown:
        raise MetadataError(f"series.print.interiorInks: unknown ink {unknown[0]!r}; use {', '.join(INKS)}")
    return list(inks)

# Visible manuscript text that must be resolved before release: the bracketed
# placeholders from the chapter drafting rules in CLAUDE.md, and the text inside
# AUTHOR-INPUT blocks. The AUTHOR-INPUT comment tags never print, so they are
# not matched; optional blocks still print their bracketed text and are matched.
PLACEHOLDER_PATTERNS = (
    re.compile(r"\[[^\]]*placeholder:", re.IGNORECASE),
    re.compile(r"\[Author input needed", re.IGNORECASE),
)


class MetadataError(ValueError):
    """Raised when books.json cannot describe the requested book."""


def prune_empty(value: Any) -> Any:
    """Drop empty strings, lists and objects, recursively.

    Returns ``None`` when nothing is left. Numbers and booleans are kept, so
    ``false`` and ``0`` survive.
    """
    if isinstance(value, str):
        return value if value.strip() else None
    if isinstance(value, list):
        items = [item for item in (prune_empty(item) for item in value) if item is not None]
        return items or None
    if isinstance(value, dict):
        items = {key: item for key, item in ((key, prune_empty(item)) for key, item in value.items()) if item is not None}
        return items or None
    return value


def normalise_isbn13(value: str) -> str:
    """Return the 13 digits of an ISBN-13, accepting hyphens and spaces."""
    digits = re.sub(r"[\s-]", "", value)
    if not re.fullmatch(r"97[89]\d{10}", digits):
        raise MetadataError(f"{value!r} is not an ISBN-13 (13 digits starting 978 or 979)")
    if isbn13_check_digit(digits[:12]) != int(digits[12]):
        raise MetadataError(f"ISBN {value!r} has the wrong check digit; expected {isbn13_check_digit(digits[:12])}")
    return digits


def isbn13_check_digit(first_twelve: str) -> int:
    total = sum(int(digit) * (3 if index % 2 else 1) for index, digit in enumerate(first_twelve))
    return (10 - total % 10) % 10


def _select_book(config: dict[str, Any], book_number: int) -> dict[str, Any]:
    for book in config.get("books", []):
        if book.get("number") == book_number:
            return book
    raise MetadataError(f"Book {book_number} is not defined in books.json")


def _resolve_editions(series: dict[str, Any], book: dict[str, Any], errors: list[str]) -> dict[str, Any]:
    editions = book.get("editions") or {}
    default_price_code = series.get("defaultPriceCode") or DEFAULT_PRICE_CODE
    for name, edition in editions.items():
        isbn = edition.get("isbn")
        if isbn:
            try:
                edition["isbn"] = normalise_isbn13(isbn)
            except MetadataError as error:
                errors.append(f"editions.{name}.isbn: {error}")
                del edition["isbn"]
        if "isbn" in edition:
            edition.setdefault("isbnDisplay", edition["isbn"])
    for name in PAPERBACK_EDITIONS.values():
        paperback = editions.setdefault(name, {})
        price_code = paperback.get("priceCode") or default_price_code
        if not re.fullmatch(r"\d{5}", price_code):
            errors.append(f"editions.{name}.priceCode: {price_code!r} must be five digits (90000 = no price)")
        paperback["priceCode"] = price_code
    return editions


def release_metadata(config: dict[str, Any], book_number: int) -> dict[str, Any]:
    """Return ``{"series", "book", "errors"}`` with empty values removed."""
    book = _select_book(config, book_number)
    series = prune_empty(copy.deepcopy(config.get("series", {}))) or {}
    book = prune_empty(copy.deepcopy(book)) or {}
    errors: list[str] = []

    back_cover = book.get("backCover")
    if back_cover and "endorsements" in back_cover:
        # An attribution without a quote has nothing to print.
        endorsements = [item for item in back_cover["endorsements"] if item.get("quote")]
        if endorsements:
            back_cover["endorsements"] = endorsements
        else:
            del back_cover["endorsements"]
    book["editions"] = _resolve_editions(series, book, errors)
    return {"series": series, "book": book, "errors": errors}


def load_release_metadata(config_path: str | Path, book_number: int) -> dict[str, Any]:
    try:
        config = json.loads(Path(config_path).read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError) as error:
        raise MetadataError(f"Unable to read {config_path}: {error}") from error
    return release_metadata(config, book_number)


def find_placeholders(paths: list[Path]) -> list[str]:
    """List unresolved placeholders as ``path:line: text``."""
    found = []
    for path in paths:
        for number, line in enumerate(path.read_text(encoding="utf-8").splitlines(), start=1):
            if any(pattern.search(line) for pattern in PLACEHOLDER_PATTERNS):
                found.append(f"{path}:{number}: {line.strip()[:100]}")
    return found


def release_problems(
    metadata: dict[str, Any],
    formats: list[str],
    root_dir: str | Path,
    manuscript_files: list[Path] | None = None,
    inks: list[str] | None = None,
) -> list[str]:
    """Everything that blocks a non-proof release of ``formats`` (paperback in ``inks``)."""
    series, book = metadata["series"], metadata["book"]
    problems = list(metadata["errors"])
    for name in formats:
        if name not in FORMATS:
            problems.append(f"unknown format {name!r}; use {', '.join(FORMATS)}")
            continue
        editions = [name]
        if name == "paperback":
            editions = [PAPERBACK_EDITIONS[ink] for ink in interior_inks(series, inks)]
        for edition in editions:
            if "isbn" not in book["editions"].get(edition, {}):
                problems.append(f"editions.{edition}.isbn is empty")
    copyright_details = book.get("copyright", {})
    for field in ("holder", "year"):
        if field not in copyright_details:
            problems.append(f"copyright.{field} is empty")
    for field in ("title", "author"):
        if field not in (book if field == "title" else series):
            problems.append(f"{field} is empty")
    if "publisher" not in series or "name" not in series["publisher"]:
        problems.append("series.publisher.name is empty")
    photo = series.get("authorProfile", {}).get("photo")
    if photo and not (Path(root_dir) / photo).is_file():
        problems.append(f"series.authorProfile.photo: {photo} does not exist (set it to \"\" to leave the photo out)")
    problems.extend(f"unresolved placeholder at {item}" for item in find_placeholders(manuscript_files or []))
    return problems


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--config", type=Path, required=True)
    parser.add_argument("--book-number", type=int, required=True)
    parser.add_argument("--root-dir", type=Path, default=Path.cwd())
    parser.add_argument("--check", metavar="FORMATS", help="comma-separated formats to check for release")
    parser.add_argument("--inks", metavar="INKS",
                        help="comma-separated paperback inks to check (default: series.print.interiorInks)")
    parser.add_argument("manuscript", nargs="*", type=Path, help="chapter files to scan for placeholders")
    arguments = parser.parse_args()
    try:
        metadata = load_release_metadata(arguments.config, arguments.book_number)
    except MetadataError as error:
        parser.error(str(error))
    if not arguments.check:
        print(json.dumps(metadata, indent=2, ensure_ascii=False))
        return 0
    inks = arguments.inks.split(",") if arguments.inks else None
    try:
        problems = release_problems(metadata, arguments.check.split(","), arguments.root_dir, arguments.manuscript,
                                    inks)
    except MetadataError as error:
        parser.error(str(error))
    for problem in problems:
        print(problem)
    return 1 if problems else 0


if __name__ == "__main__":
    raise SystemExit(main())
