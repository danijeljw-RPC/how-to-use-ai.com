import json
import tempfile
import unittest
from pathlib import Path

from scripts.book_metadata import (
    MetadataError,
    find_placeholders,
    load_release_metadata,
    normalise_isbn13,
    prune_empty,
    release_metadata,
    release_plan,
    release_problems,
    select_editions,
)

ROOT = Path(__file__).resolve().parents[1]
DONE = {"holder": "X", "year": "2026"}


def _print(ink="black-and-white", binding="paperback", **fields):
    return {"type": "print", "binding": binding, "ink": ink, **fields}


def _config(**book_overrides):
    book = {
        "number": 1,
        "title": "AI for Normal People",
        "copyright": {"holder": "", "year": "2026"},
        "editions": {
            "paperback": _print(isbn="", priceCode="", price={"AUD": "", "USD": ""}),
            "pdf": {"type": "pdf", "isbn": ""},
            "epub": {"type": "epub", "isbn": ""},
        },
        "backCover": {
            "summary": ["One paragraph.", ""],
            "endorsements": [{"quote": "", "attribution": "Someone"}, {"quote": "Great.", "attribution": "A Reader"}],
        },
    }
    book.update(book_overrides)
    return {
        "series": {
            "author": "Danijel-James Wynyard-McClay",
            "defaultPriceCode": "90000",
            "publisher": {"name": "RePass Cloud Pty Ltd", "address": ""},
            "authorProfile": {"photo": "", "bio": ""},
            "print": {"trimWidthInches": 7.5, "trimHeightInches": 9.25, "bleedInches": 0.125, "printers": {"kdp": {
                "papers": {"black-and-white": {"caliperInches": 0.002252}, "colour": {"caliperInches": 0.002252}},
                "bindings": {"paperback": {"coverBleedInches": 0.125, "hingeInches": 0, "spineAllowanceInches": 0},
                             "hardcover": {"coverBleedInches": "", "hingeInches": "", "spineAllowanceInches": ""}},
            }}},
        },
        "books": [book],
    }


class PruneTests(unittest.TestCase):
    def test_removes_empty_values_recursively(self):
        self.assertEqual(
            prune_empty({"a": "", "b": [" ", {"c": ""}], "d": {"e": "x", "f": []}, "g": 0, "h": False}),
            {"d": {"e": "x"}, "g": 0, "h": False},
        )

    def test_all_empty_is_none(self):
        self.assertIsNone(prune_empty({"a": "", "b": []}))


class IsbnTests(unittest.TestCase):
    def test_accepts_hyphens(self):
        self.assertEqual(normalise_isbn13("978-0-306-40615-7"), "9780306406157")

    def test_rejects_wrong_check_digit(self):
        with self.assertRaisesRegex(MetadataError, "check digit"):
            normalise_isbn13("9780306406150")

    def test_rejects_isbn10(self):
        with self.assertRaises(MetadataError):
            normalise_isbn13("0306406152")


class ReleaseMetadataTests(unittest.TestCase):
    def test_empty_strings_are_left_out(self):
        metadata = release_metadata(_config(), 1)
        self.assertNotIn("authorProfile", metadata["series"])
        self.assertNotIn("address", metadata["series"]["publisher"])
        self.assertEqual(metadata["book"]["backCover"]["summary"], ["One paragraph."])

    def test_endorsement_without_quote_is_dropped(self):
        endorsements = release_metadata(_config(), 1)["book"]["backCover"]["endorsements"]
        self.assertEqual(endorsements, [{"quote": "Great.", "attribution": "A Reader"}])

    def test_all_empty_endorsements_remove_the_block(self):
        config = _config(backCover={"endorsements": [{"quote": "", "attribution": ""}]})
        self.assertNotIn("backCover", release_metadata(config, 1)["book"])

    def test_price_code_defaults_to_series_value(self):
        paperback = release_metadata(_config(), 1)["book"]["editions"]["paperback"]
        self.assertEqual(paperback["priceCode"], "90000")
        self.assertNotIn("price", paperback)

    def test_book_price_code_overrides_default(self):
        config = _config(editions={"paperback": _print(isbn="", priceCode="52499")})
        self.assertEqual(release_metadata(config, 1)["book"]["editions"]["paperback"]["priceCode"], "52499")

    def test_isbn_normalised_and_display_defaults(self):
        config = _config(editions={"paperback": _print(isbn="978-0-306-40615-7")})
        paperback = release_metadata(config, 1)["book"]["editions"]["paperback"]
        self.assertEqual(paperback["isbn"], "9780306406157")
        self.assertEqual(paperback["isbnDisplay"], "9780306406157")

    def test_invalid_isbn_is_reported(self):
        config = _config(editions={"paperback": _print(isbn="9780306406150")})
        metadata = release_metadata(config, 1)
        self.assertTrue(any("check digit" in error for error in metadata["errors"]))
        self.assertNotIn("isbn", metadata["book"]["editions"]["paperback"])

    def test_unknown_book(self):
        with self.assertRaises(MetadataError):
            release_metadata(_config(), 9)


class EditionFlagTests(unittest.TestCase):
    def editions(self, **editions):
        return release_metadata(_config(editions=editions), 1)

    def test_type_is_required(self):
        metadata = self.editions(paperback={"isbn": "9780306406157"})
        self.assertTrue(any("editions.paperback.type" in error for error in metadata["errors"]))

    def test_unknown_binding_and_ink_are_reported(self):
        metadata = self.editions(odd=_print(ink="sepia", binding="spiral"))
        self.assertTrue(any("odd.binding" in error for error in metadata["errors"]))
        self.assertTrue(any("odd.ink" in error for error in metadata["errors"]))

    def test_softcover_and_bw_aliases(self):
        edition = self.editions(soft=_print(ink="bw", binding="softcover"))["book"]["editions"]["soft"]
        self.assertEqual((edition["binding"], edition["ink"]), ("paperback", "black-and-white"))

    def test_default_labels(self):
        editions = self.editions(paperback=_print(), paperbackColour=_print("colour"), hard=_print(binding="hardcover"),
                                 pdf={"type": "pdf"}, epub={"type": "epub"})["book"]["editions"]
        self.assertEqual([edition["label"] for edition in editions.values()],
                         ["Paperback (black and white)", "Paperback (colour)", "Hardcover", "PDF", "EPUB"])

    def test_label_and_trim_from_json_win(self):
        editions = self.editions(paperback=_print(label="Softcover", trimWidthInches=6, trimHeightInches=9))
        paperback = editions["book"]["editions"]["paperback"]
        self.assertEqual(paperback["label"], "Softcover")
        self.assertEqual((paperback["trimWidthInches"], paperback["trimHeightInches"]), (6, 9))
        self.assertEqual(paperback["interiorBleedInches"], 0.125)

    def test_ebooks_inherit_the_series_trim(self):
        pdf = self.editions(pdf={"type": "pdf"})["book"]["editions"]["pdf"]
        self.assertEqual((pdf["trimWidthInches"], pdf["trimHeightInches"], pdf["ink"]), (7.5, 9.25, "colour"))


class SelectionAndPlanTests(unittest.TestCase):
    def metadata(self):
        return release_metadata(_config(editions={
            "paperback": _print(isbn="9780306406157"),
            "paperbackColour": _print("colour", isbn="9781764994835"),
            "pdf": {"type": "pdf", "isbn": "9781764994811"},
            "epub": {"type": "epub", "enabled": False},
        }), 1)

    def ids(self, formats=None, inks=None):
        return [name for name, _ in select_editions(self.metadata(), formats, inks)]

    def test_selects_enabled_editions_in_order(self):
        self.assertEqual(self.ids(), ["paperback", "paperbackColour", "pdf"])

    def test_selects_by_id_type_binding_and_ink(self):
        self.assertEqual(self.ids(["pdf"]), ["pdf"])
        self.assertEqual(self.ids(["print"]), ["paperback", "paperbackColour"])
        self.assertEqual(self.ids(["softcover"], ["colour"]), ["paperbackColour"])
        self.assertEqual(self.ids(["paperbackColour"]), ["paperbackColour"])

    def test_unknown_selector_is_an_error(self):
        with self.assertRaisesRegex(MetadataError, "hardcover"):
            self.ids(["hardcover"])

    def test_plan_names_files_by_isbn_and_lists_printers(self):
        plan = release_plan(self.metadata(), "31-book-01")
        first = plan["editions"][0]
        self.assertEqual((first["stem"], first["inkShort"], first["printers"]), ("9780306406157", "bw", ["kdp"]))
        self.assertEqual(first["coverHeightInches"], {"kdp": 9.5})
        self.assertEqual(plan["warnings"], [])

    def test_plan_stem_falls_back_to_book_and_edition(self):
        metadata = release_metadata(_config(), 1)
        self.assertEqual(release_plan(metadata, "31-book-01")["editions"][0]["stem"], "31-book-01-paperback")


class ReleaseProblemsTests(unittest.TestCase):
    def test_lists_missing_isbns_and_copyright_holder(self):
        problems = release_problems(release_metadata(_config(), 1), ["paperback", "epub"], ROOT)
        self.assertIn("editions.paperback.isbn is empty", problems)
        self.assertIn("editions.epub.isbn is empty", problems)
        self.assertNotIn("editions.pdf.isbn is empty", problems)
        self.assertIn("copyright.holder is empty", problems)

    def test_complete_metadata_passes(self):
        config = _config(copyright=DONE, editions={"paperback": _print(isbn="9780306406157")})
        self.assertEqual(release_problems(release_metadata(config, 1), ["paperback"], ROOT), [])

    def test_colour_ink_needs_the_colour_paperback_isbn(self):
        config = _config(copyright=DONE, editions={"paperback": _print(isbn="9780306406157"),
                                                   "paperbackColour": _print("colour", isbn="")})
        metadata = release_metadata(config, 1)
        self.assertEqual(metadata["book"]["editions"]["paperbackColour"]["priceCode"], "90000")
        self.assertEqual(release_problems(metadata, ["paperback"], ROOT),
                         ["editions.paperbackColour.isbn is empty"])
        # --inks narrows the check to the inks being built.
        self.assertEqual(release_problems(metadata, ["paperback"], ROOT, inks=["bw"]), [])
        self.assertEqual(release_problems(metadata, ["paperback"], ROOT, inks=["colour"]),
                         ["editions.paperbackColour.isbn is empty"])

    def test_unknown_ink_is_rejected(self):
        with self.assertRaisesRegex(MetadataError, "unknown ink"):
            release_problems(release_metadata(_config(), 1), ["paperback"], ROOT, inks=["sepia"])

    def test_hardcover_lists_the_printer_measurements_it_needs(self):
        config = _config(copyright=DONE, editions={"hard": _print(binding="hardcover", isbn="9780306406157")})
        problems = release_problems(release_metadata(config, 1), [], ROOT)
        self.assertEqual(len(problems), 1)
        for field in ("coverBleedInches", "hingeInches", "spineAllowanceInches"):
            self.assertIn(f"series.print.printers.kdp.bindings.hardcover.{field}", problems[0])

    def test_edition_can_name_an_unknown_printer(self):
        config = _config(copyright=DONE, editions={"paperback": _print(isbn="9780306406157", printers=["lulu"])})
        problems = release_problems(release_metadata(config, 1), [], ROOT)
        self.assertTrue(any("'lulu' is not in series.print.printers" in problem for problem in problems))

    def test_missing_photo_file_is_a_problem(self):
        config = _config(copyright=DONE, editions={"pdf": {"type": "pdf", "isbn": "9780306406157"}})
        config["series"]["authorProfile"]["photo"] = "assets/author/missing.jpg"
        problems = release_problems(release_metadata(config, 1), ["pdf"], ROOT)
        self.assertTrue(any("missing.jpg" in problem for problem in problems))

    def test_placeholders_are_found_with_line_numbers(self):
        with tempfile.TemporaryDirectory() as directory:
            chapter = Path(directory) / "chapter-01-test.md"
            chapter.write_text(
                "# Title\n\n"
                "> [Author reflection placeholder: add a story.]\n\n"
                '<!-- AUTHOR-INPUT id="X" status="optional" -->\n'
                "> [Author input needed (optional): confirm the URL.]\n"
                "<!-- /AUTHOR-INPUT -->\n"
                "Body text mentioning AUTHOR-INPUT blocks is fine.\n",
                encoding="utf-8",
            )
            found = find_placeholders([chapter])
        self.assertEqual(len(found), 2)
        self.assertTrue(found[0].endswith("chapter-01-test.md:3: > [Author reflection placeholder: add a story.]"))
        self.assertIn(":6: ", found[1])


class RepositoryConfigTests(unittest.TestCase):
    def test_books_json_loads_for_every_book(self):
        config_path = ROOT / "publishing" / "books.json"
        for book in json.loads(config_path.read_text(encoding="utf-8"))["books"]:
            metadata = load_release_metadata(config_path, book["number"])
            self.assertEqual(metadata["errors"], [])
            for edition in metadata["book"]["editions"].values():
                if edition["type"] == "print":
                    self.assertRegex(edition["priceCode"], r"^\d{5}$")

    def test_book_one_plan_has_every_printer(self):
        metadata = load_release_metadata(ROOT / "publishing" / "books.json", 1)
        plan = release_plan(metadata, "31-book-01")
        self.assertEqual(plan["warnings"], [])
        self.assertEqual([entry["id"] for entry in plan["editions"]], ["paperback", "paperbackColour", "epub", "pdf"])


if __name__ == "__main__":
    unittest.main()
