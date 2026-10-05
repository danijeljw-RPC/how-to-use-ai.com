import json
import tempfile
import unittest
from pathlib import Path

from pypdf import PdfReader

from scripts.release_cover import CoverError, render_back, render_front, render_wrap, spine_width

ROOT = Path(__file__).resolve().parents[1]
PAPERBACK = {"coverBleedInches": 0.125, "hingeInches": 0, "spineAllowanceInches": 0}


def _config(directory: Path, isbn: str = "9780306406157") -> Path:
    config = {
        "series": {
            "author": "Danijel-James Wynyard-McClay",
            "page": {"widthInches": 7, "heightInches": 10},
            "publisher": {"name": "RePass Cloud Pty Ltd"},
            "authorProfile": {"photo": "", "shortBio": "DJ builds things."},
            "print": {
                "trimWidthInches": 7.5, "trimHeightInches": 9.25, "bleedInches": 0.125,
                "printers": {
                    "kdp": {"enabled": True, "minimumPagesForSpineText": 80,
                            "papers": {"black-and-white": {"caliperInches": 0.002252,
                                                           "spineWidthOverrideInches": ""}},
                            "bindings": {"paperback": dict(PAPERBACK)}},
                    "ingramspark": {"enabled": True, "minimumPagesForSpineText": 48,
                                    "papers": {"black-and-white": {"caliperInches": 0.0025,
                                                                   "spineWidthOverrideInches": "0.5"}},
                                    "bindings": {"paperback": dict(PAPERBACK)}},
                },
            },
        },
        "books": [{
            "number": 1, "title": "AI for Normal People", "description": "Without the Hype",
            "descriptor": "No technical skills required", "image": "assets/covers/missing.png",
            "accentColour": "#7C3AED",
            "editions": {"paperback": {"type": "print", "binding": "paperback", "ink": "black-and-white",
                                       "isbn": isbn, "priceCode": "", "price": {"AUD": "34.99", "USD": ""}}},
            "backCover": {"summary": ["A plain-English guide."], "highlights": ["Spot AI"],
                          "endorsements": [{"quote": "", "attribution": "Nobody"}]},
        }],
    }
    path = directory / "books.json"
    path.write_text(json.dumps(config), encoding="utf-8")
    return path


def _edit(path: Path, change) -> Path:
    config = json.loads(path.read_text())
    change(config)
    path.write_text(json.dumps(config), encoding="utf-8")
    return path


class CoverTests(unittest.TestCase):
    def setUp(self):
        self.directory = tempfile.TemporaryDirectory()
        self.addCleanup(self.directory.cleanup)
        self.root = Path(self.directory.name)

    def test_front_is_trim_size_with_embedded_text(self):
        output = render_front(_config(self.root), 1, ROOT, self.root / "front.pdf")
        page = PdfReader(output).pages[0]
        self.assertAlmostEqual(float(page.mediabox.width), 540.0, places=1)
        self.assertAlmostEqual(float(page.mediabox.height), 666.0, places=1)
        self.assertIn("AI for Normal People", " ".join(page.extract_text().split()))

    def test_wrap_width_is_two_panels_spine_and_bleed(self):
        spine, warnings = render_wrap(_config(self.root), 1, ROOT, self.root / "wrap.pdf", "kdp", 300)
        self.assertAlmostEqual(spine, 300 * 0.002252, places=4)
        box = PdfReader(self.root / "wrap.pdf").pages[0].mediabox
        self.assertAlmostEqual(float(box.width), (15 + spine + 0.25) * 72, places=1)
        self.assertAlmostEqual(float(box.height), 9.5 * 72, places=1)
        self.assertEqual(warnings, [])

    def test_spine_override_and_short_book(self):
        config = json.loads(_config(self.root).read_text())
        edition = config["books"][0]["editions"]["paperback"]
        self.assertEqual(spine_width(config["series"], "ingramspark", 300, edition), 0.5 * 72)
        _, warnings = render_wrap(_config(self.root), 1, ROOT, self.root / "wrap.pdf", "kdp", 40)
        self.assertTrue(any("spine left blank" in warning for warning in warnings))

    def test_back_variants(self):
        config = _config(self.root)
        render_back(config, 1, ROOT, self.root / "print.pdf", "print")
        render_back(config, 1, ROOT, self.root / "ebook.pdf", "ebook")
        render_back(config, 1, ROOT, self.root / "draft.pdf", "draft")
        printed = PdfReader(self.root / "print.pdf").pages[0].extract_text()
        ebook = PdfReader(self.root / "ebook.pdf").pages[0].extract_text()
        draft = PdfReader(self.root / "draft.pdf").pages[0].extract_text()
        self.assertIn("AUD $34.99", printed)
        self.assertIn("ISBN 9780306406157", printed)
        self.assertNotIn("ISBN", ebook)
        self.assertNotIn("AUD", ebook)
        self.assertIn("Internal review edition", draft)
        self.assertNotIn("Nobody", printed)  # endorsement without a quote is left out

    def test_pdf_back_has_its_own_isbn_barcode_without_paperback_price(self):
        config = _edit(_config(self.root), lambda data: data["books"][0]["editions"].update(
            pdf={"type": "pdf", "isbn": "9781764994811", "isbnDisplay": "978-1-7649948-1-1"}))
        output = self.root / "pdf-back.pdf"
        self.assertEqual(render_back(config, 1, ROOT, output, "pdf"), [])
        page = PdfReader(output).pages[0]
        text = page.extract_text()
        self.assertIn("ISBN 978-1-7649948-1-1", text)
        self.assertNotIn("9780306406157", text)
        self.assertNotIn("AUD", text)
        # The barcode must contain vector bars, not only an ISBN label.
        self.assertGreater(page.get_contents().get_data().count(b" re f*"), 40)

    def _colour_config(self) -> Path:
        def change(config):
            config["series"]["print"]["printers"]["kdp"]["papers"]["colour"] = {"caliperInches": 0.002347}
            config["books"][0]["editions"]["paperbackColour"] = {
                "type": "print", "binding": "paperback", "ink": "colour",
                "isbn": "9781764994804", "isbnDisplay": "978-1-7649948-0-4", "price": {"AUD": "59.99"}}
        return _edit(_config(self.root), change)

    def test_colour_wrap_uses_colour_caliper_isbn_and_price(self):
        spine, _ = render_wrap(self._colour_config(), 1, ROOT, self.root / "wrap.pdf", "kdp", 300,
                               edition_name="paperbackColour")
        self.assertAlmostEqual(spine, 300 * 0.002347, places=4)
        text = PdfReader(self.root / "wrap.pdf").pages[0].extract_text()
        self.assertIn("ISBN 978-1-7649948-0-4", text)
        self.assertIn("AUD $59.99", text)
        self.assertNotIn("9780306406157", text)

    def test_colour_wrap_without_colour_caliper_fails(self):
        config = _edit(_config(self.root), lambda data: data["books"][0]["editions"].update(
            paperbackColour={"type": "print", "ink": "colour", "isbn": "9781764994804"}))
        with self.assertRaisesRegex(CoverError, r"papers\.colour\.caliperInches"):
            render_wrap(config, 1, ROOT, self.root / "wrap.pdf", "kdp", 300, edition_name="paperbackColour")

    def test_hardcover_wrap_adds_turn_in_hinges_and_board_allowance(self):
        def change(config):
            config["series"]["print"]["printers"]["kdp"]["bindings"]["hardcover"] = {
                "coverBleedInches": 0.6, "hingeInches": 0.4, "spineAllowanceInches": 0.25}
            config["books"][0]["editions"]["hardcover"] = {
                "type": "print", "binding": "hardcover", "ink": "black-and-white", "isbn": "9781764994804",
                "trimWidthInches": 6, "trimHeightInches": 9}
        config = _edit(_config(self.root), change)
        spine, _ = render_wrap(config, 1, ROOT, self.root / "hard.pdf", "kdp", 300, edition_name="hardcover")
        self.assertAlmostEqual(spine, 300 * 0.002252 + 0.25, places=4)
        box = PdfReader(self.root / "hard.pdf").pages[0].mediabox
        self.assertAlmostEqual(float(box.width), (2 * (0.6 + 6 + 0.4) + spine) * 72, places=1)
        self.assertAlmostEqual(float(box.height), (9 + 1.2) * 72, places=1)

    def test_hardcover_without_printer_measurements_names_the_missing_field(self):
        config = _edit(_config(self.root), lambda data: data["books"][0]["editions"].update(
            hardcover={"type": "print", "binding": "hardcover", "isbn": "9781764994804"}))
        with self.assertRaisesRegex(CoverError, r"bindings\.hardcover\.coverBleedInches"):
            render_wrap(config, 1, ROOT, self.root / "hard.pdf", "kdp", 300, edition_name="hardcover")

    def test_edition_trim_sizes_the_front_cover(self):
        config = _edit(_config(self.root), lambda data: data["books"][0]["editions"].update(
            pdf={"type": "pdf", "trimWidthInches": 6, "trimHeightInches": 9}))
        box = PdfReader(render_front(config, 1, ROOT, self.root / "front.pdf", "pdf")).pages[0].mediabox
        self.assertAlmostEqual(float(box.width), 6 * 72, places=1)
        self.assertAlmostEqual(float(box.height), 9 * 72, places=1)

    def test_no_barcode_wrap_leaves_the_area_blank(self):
        render_wrap(_config(self.root), 1, ROOT, self.root / "with.pdf", "kdp", 300)
        render_wrap(_config(self.root), 1, ROOT, self.root / "without.pdf", "kdp", 300, barcode=False)
        with_page = PdfReader(self.root / "with.pdf").pages[0]
        without_page = PdfReader(self.root / "without.pdf").pages[0]
        self.assertIn("ISBN 9780306406157", with_page.extract_text())
        self.assertNotIn("ISBN", without_page.extract_text())
        self.assertEqual(with_page.mediabox, without_page.mediabox)
        bars = with_page.get_contents().get_data().count(b" re f*")
        self.assertGreater(bars - without_page.get_contents().get_data().count(b" re f*"), 40)

    def test_missing_isbn_warns_instead_of_failing(self):
        warnings = render_back(_config(self.root, isbn=""), 1, ROOT, self.root / "back.pdf", "print")
        self.assertTrue(any("ISBN is empty" in warning for warning in warnings))


if __name__ == "__main__":
    unittest.main()
