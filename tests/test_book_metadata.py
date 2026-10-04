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
    release_problems,
)

ROOT = Path(__file__).resolve().parents[1]


def _config(**book_overrides):
    book = {
        "number": 1,
        "title": "AI for Normal People",
        "copyright": {"holder": "", "year": "2026"},
        "editions": {
            "paperback": {"isbn": "", "priceCode": "", "price": {"AUD": "", "USD": ""}},
            "pdf": {"isbn": ""},
            "epub": {"isbn": ""},
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
        config = _config(editions={"paperback": {"isbn": "", "priceCode": "52499"}})
        self.assertEqual(release_metadata(config, 1)["book"]["editions"]["paperback"]["priceCode"], "52499")

    def test_isbn_normalised_and_display_defaults(self):
        config = _config(editions={"paperback": {"isbn": "978-0-306-40615-7"}})
        paperback = release_metadata(config, 1)["book"]["editions"]["paperback"]
        self.assertEqual(paperback["isbn"], "9780306406157")
        self.assertEqual(paperback["isbnDisplay"], "9780306406157")

    def test_invalid_isbn_is_reported(self):
        config = _config(editions={"paperback": {"isbn": "9780306406150"}})
        metadata = release_metadata(config, 1)
        self.assertTrue(any("check digit" in error for error in metadata["errors"]))
        self.assertNotIn("isbn", metadata["book"]["editions"]["paperback"])

    def test_unknown_book(self):
        with self.assertRaises(MetadataError):
            release_metadata(_config(), 9)


class ReleaseProblemsTests(unittest.TestCase):
    def test_lists_missing_isbns_and_copyright_holder(self):
        problems = release_problems(release_metadata(_config(), 1), ["paperback", "epub"], ROOT)
        self.assertIn("editions.paperback.isbn is empty", problems)
        self.assertIn("editions.epub.isbn is empty", problems)
        self.assertNotIn("editions.pdf.isbn is empty", problems)
        self.assertIn("copyright.holder is empty", problems)

    def test_complete_metadata_passes(self):
        config = _config(
            copyright={"holder": "Danijel-James Wynyard-McClay", "year": "2026"},
            editions={"paperback": {"isbn": "9780306406157"}},
        )
        self.assertEqual(release_problems(release_metadata(config, 1), ["paperback"], ROOT), [])

    def test_colour_ink_needs_the_colour_paperback_isbn(self):
        config = _config(
            copyright={"holder": "X", "year": "2026"},
            editions={"paperback": {"isbn": "9780306406157"}, "paperbackColour": {"isbn": ""}},
        )
        config["series"]["print"] = {"interiorInks": ["black-and-white", "colour"]}
        metadata = release_metadata(config, 1)
        self.assertEqual(metadata["book"]["editions"]["paperbackColour"]["priceCode"], "90000")
        self.assertEqual(release_problems(metadata, ["paperback"], ROOT),
                         ["editions.paperbackColour.isbn is empty"])
        # --inks narrows the check to the inks being built.
        self.assertEqual(release_problems(metadata, ["paperback"], ROOT, inks=["black-and-white"]), [])
        self.assertEqual(release_problems(metadata, ["paperback"], ROOT, inks=["colour"]),
                         ["editions.paperbackColour.isbn is empty"])

    def test_unknown_ink_is_rejected(self):
        with self.assertRaisesRegex(MetadataError, "unknown ink"):
            release_problems(release_metadata(_config(), 1), ["paperback"], ROOT, inks=["sepia"])

    def test_missing_photo_file_is_a_problem(self):
        config = _config(copyright={"holder": "X", "year": "2026"}, editions={"pdf": {"isbn": "9780306406157"}})
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
            for edition in ("paperback", "paperbackColour"):
                self.assertRegex(metadata["book"]["editions"][edition]["priceCode"], r"^\d{5}$")


if __name__ == "__main__":
    unittest.main()
