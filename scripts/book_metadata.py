#!/usr/bin/env python3
"""Load release metadata for one book from publishing/books.json.

Every optional value follows one rule: an empty string, empty list or empty
object means "leave it out". ``release_metadata`` returns the book's metadata
with those values already removed, so renderers only test for presence.

Each product a book is sold as is one entry under ``editions`` (ADR-03-0012).
The entry's ``type`` (print, pdf, epub) says what the build makes; print
editions also give a ``binding`` (paperback/softcover, hardcover) and an
``ink`` (black-and-white, colour). ``release_plan`` turns the editions into
the list of files a release build writes, and ``release_problems`` lists what
blocks a real (non-proof) release, including printer measurements a binding
still needs.
"""

from __future__ import annotations

import argparse
import copy
import json
import re
from pathlib import Path
from typing import Any

DEFAULT_PRICE_CODE = "90000"
EDITION_TYPES = ("print", "pdf", "epub")
BINDINGS = ("paperback", "hardcover")
BINDING_ALIASES = {"softcover": "paperback"}
INKS = ("black-and-white", "colour")
INK_ALIASES = {"bw": "black-and-white", "color": "colour"}
INK_SHORT = {"black-and-white": "bw", "colour": "colour"}
INK_LABELS = {"black-and-white": "black and white", "colour": "colour"}
TYPE_LABELS = {"pdf": "PDF", "epub": "EPUB"}
# Cover measurements every printer profile must give for each binding it prints.
BINDING_FIELDS = ("coverBleedInches", "hingeInches", "spineAllowanceInches")
DEFAULT_TRIM = (7.5, 9.25)
DEFAULT_BLEED = 0.125

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


def normalise_ink(value: str) -> str:
    ink = INK_ALIASES.get(value, value)
    if ink not in INKS:
        raise MetadataError(f"unknown ink {value!r}; use {', '.join(INKS)} (or bw)")
    return ink


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
    """Check each edition's flags and fill in its defaults: ink, price code, trim, label."""
    editions = book.get("editions") or {}
    default_price_code = series.get("defaultPriceCode") or DEFAULT_PRICE_CODE
    printing = series.get("print", {})
    for name, edition in editions.items():
        where = f"editions.{name}"
        kind = edition.get("type")
        if kind not in EDITION_TYPES:
            errors.append(f"{where}.type: {kind!r} must be one of {', '.join(EDITION_TYPES)}")
            kind = edition["type"] = "print" if "binding" in edition else "pdf"
            edition["enabled"] = False
        isbn = edition.get("isbn")
        if isbn:
            try:
                edition["isbn"] = normalise_isbn13(isbn)
            except MetadataError as error:
                errors.append(f"{where}.isbn: {error}")
                del edition["isbn"]
        if "isbn" in edition:
            edition.setdefault("isbnDisplay", edition["isbn"])
        if kind == "print":
            binding = edition.get("binding", "paperback")
            binding = BINDING_ALIASES.get(binding, binding)
            if binding not in BINDINGS:
                errors.append(f"{where}.binding: {binding!r} must be paperback, softcover or hardcover")
                binding = "paperback"
            edition["binding"] = binding
            try:
                edition["ink"] = normalise_ink(edition.get("ink", "black-and-white"))
            except MetadataError as error:
                errors.append(f"{where}.ink: {error}")
                edition["ink"] = "black-and-white"
            price_code = edition.get("priceCode") or default_price_code
            if not re.fullmatch(r"\d{5}", price_code):
                errors.append(f"{where}.priceCode: {price_code!r} must be five digits (90000 = no price)")
            edition["priceCode"] = price_code
            edition.setdefault("interiorBleedInches", float(printing.get("bleedInches", DEFAULT_BLEED)))
        else:
            # Ebooks are always built in colour.
            edition["ink"] = "colour"
        edition.setdefault("trimWidthInches", float(printing.get("trimWidthInches", DEFAULT_TRIM[0])))
        edition.setdefault("trimHeightInches", float(printing.get("trimHeightInches", DEFAULT_TRIM[1])))
        edition.setdefault("enabled", True)
    for edition in editions.values():
        edition.setdefault("label", _default_label(edition, editions.values()))
    return editions


def _default_label(edition: dict[str, Any], editions) -> str:
    """"Paperback", or "Paperback (colour)" when the book has that binding in more than one ink."""
    if edition["type"] != "print":
        return TYPE_LABELS[edition["type"]]
    label = edition["binding"].capitalize()
    inks = {other.get("ink") for other in editions
            if other.get("type") == "print" and other.get("binding") == edition["binding"]}
    if len(inks) > 1 or edition["ink"] == "colour":
        label += f" ({INK_LABELS[edition['ink']]})"
    return label


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


# ---------------------------------------------------------------- selecting editions
def select_editions(metadata: dict[str, Any], formats: list[str] | None = None,
                    inks: list[str] | None = None) -> list[tuple[str, dict[str, Any]]]:
    """The enabled editions a build makes, in books.json order.

    ``formats`` names edition ids, types (print, pdf, epub) or bindings
    (paperback, softcover, hardcover); empty means every enabled edition.
    ``inks`` limits the print editions to those inks.
    """
    editions = metadata["book"].get("editions", {})
    wanted = [BINDING_ALIASES.get(name, name) for name in (formats or []) if name]
    ink_filter = [normalise_ink(ink) for ink in (inks or []) if ink]
    for name in wanted:
        if not any(name in (key, edition["type"], edition.get("binding")) for key, edition in editions.items()):
            raise MetadataError(f"no edition matches {name!r}; use an edition id from books.json, "
                                f"a type ({', '.join(EDITION_TYPES)}) or a binding (paperback, hardcover)")
    selected = []
    for key, edition in editions.items():
        if not edition.get("enabled", True):
            continue
        if wanted and not any(name in (key, edition["type"], edition.get("binding")) for name in wanted):
            continue
        if ink_filter and edition["type"] == "print" and edition["ink"] not in ink_filter:
            continue
        selected.append((key, edition))
    return selected


def printer_problems(series: dict[str, Any], edition_name: str, edition: dict[str, Any]) -> tuple[list[str], list[str]]:
    """Return (printers that can make this print edition's cover, what the others are missing)."""
    printers, problems = [], []
    profiles = series.get("print", {}).get("printers", {})
    names = edition.get("printers") or [name for name, profile in profiles.items() if profile.get("enabled", True)]
    for printer in names:
        profile = profiles.get(printer)
        where = f"series.print.printers.{printer}"
        if profile is None:
            problems.append(f"editions.{edition_name}.printers: {printer!r} is not in series.print.printers")
            continue
        missing = []
        paper = profile.get("papers", {}).get(edition["ink"], {})
        if "caliperInches" not in paper and "spineWidthOverrideInches" not in paper:
            missing.append(f"{where}.papers.{edition['ink']}.caliperInches")
        binding = profile.get("bindings", {}).get(edition["binding"], {})
        missing += [f"{where}.bindings.{edition['binding']}.{field}" for field in BINDING_FIELDS if field not in binding]
        if missing:
            problems.append(f"editions.{edition_name} ({edition['label']}) can't get a {printer} cover until these are "
                            f"set (copy them from {printer}'s cover template): {', '.join(missing)}")
        else:
            printers.append(printer)
    if not names:
        problems.append(f"editions.{edition_name}: no enabled printer in series.print.printers")
    return printers, problems


def file_stem(book_name: str, edition_name: str, edition: dict[str, Any]) -> str:
    """Release files start with ``fileStem``, else the ISBN, else <book-folder>-<edition id>."""
    return edition.get("fileStem") or edition.get("isbn") or f"{book_name}-{edition_name}"


def release_plan(metadata: dict[str, Any], book_name: str, formats: list[str] | None = None,
                 inks: list[str] | None = None) -> dict[str, Any]:
    """What a release build writes: one entry per selected edition, plus warnings."""
    series = metadata["series"]
    entries, warnings = [], []
    for name, edition in select_editions(metadata, formats, inks):
        entry = {
            "id": name, "type": edition["type"], "label": edition["label"], "ink": edition["ink"],
            "inkShort": INK_SHORT[edition["ink"]], "isbn": edition.get("isbn", ""),
            "stem": file_stem(book_name, name, edition),
            "trimWidthInches": edition["trimWidthInches"], "trimHeightInches": edition["trimHeightInches"],
        }
        if edition["type"] == "print":
            printers, problems = printer_problems(series, name, edition)
            warnings += problems
            profiles = series.get("print", {}).get("printers", {})
            # Expected wrap-cover height per printer: trim plus the binding's cover bleed top and bottom.
            heights = {printer: round(edition["trimHeightInches"] + 2 * float(
                profiles[printer]["bindings"][edition["binding"]]["coverBleedInches"]), 4) for printer in printers}
            entry.update(binding=edition["binding"], bleedInches=edition["interiorBleedInches"], printers=printers,
                         coverHeightInches=heights)
        entries.append(entry)
    return {"editions": entries, "warnings": warnings}


def release_problems(
    metadata: dict[str, Any],
    formats: list[str] | None,
    root_dir: str | Path,
    manuscript_files: list[Path] | None = None,
    inks: list[str] | None = None,
) -> list[str]:
    """Everything that blocks a non-proof release of the selected editions."""
    series, book = metadata["series"], metadata["book"]
    problems = list(metadata["errors"])
    selected = select_editions(metadata, formats, inks)
    if not selected:
        problems.append("no enabled edition matches this build")
    for name, edition in selected:
        if "isbn" not in edition:
            problems.append(f"editions.{name}.isbn is empty")
        if edition["type"] == "print":
            problems += printer_problems(series, name, edition)[1]
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


def _split(value: str | None) -> list[str]:
    return [item for item in (value or "").split(",") if item]


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--config", type=Path, required=True)
    parser.add_argument("--book-number", type=int, required=True)
    parser.add_argument("--root-dir", type=Path, default=Path.cwd())
    parser.add_argument("--check", nargs="?", const="", metavar="FORMATS",
                        help="list what blocks a release of these editions (ids, types or bindings; empty = all)")
    parser.add_argument("--plan", nargs="?", const="", metavar="FORMATS",
                        help="print the release plan for these editions as JSON")
    parser.add_argument("--book-name", default="book", help="--plan only: fallback file-name stem")
    parser.add_argument("--inks", metavar="INKS", help="comma-separated print inks to include (bw, colour)")
    parser.add_argument("manuscript", nargs="*", type=Path, help="chapter files to scan for placeholders")
    arguments = parser.parse_args()
    try:
        metadata = load_release_metadata(arguments.config, arguments.book_number)
        if arguments.plan is not None:
            print(json.dumps(release_plan(metadata, arguments.book_name, _split(arguments.plan),
                                          _split(arguments.inks)), indent=2, ensure_ascii=False))
            return 0
        if arguments.check is None:
            print(json.dumps(metadata, indent=2, ensure_ascii=False))
            return 0
        problems = release_problems(metadata, _split(arguments.check), arguments.root_dir, arguments.manuscript,
                                    _split(arguments.inks))
    except MetadataError as error:
        parser.error(str(error))
    for problem in problems:
        print(problem)
    return 1 if problems else 0


if __name__ == "__main__":
    raise SystemExit(main())
