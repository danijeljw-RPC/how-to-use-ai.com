import json
import tempfile
import unittest
from pathlib import Path

from pypdf import PdfReader

from scripts.release_cover import render_back, render_front, render_wrap, spine_width

ROOT = Path(__file__).resolve().parents[1]


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
                    "kdp": {"enabled": True, "paperCaliperInches": 0.002252, "minimumPagesForSpineText": 80,
                            "spineWidthOverrideInches": ""},
                    "ingramspark": {"enabled": True, "paperCaliperInches": 0.0025, "minimumPagesForSpineText": 48,
                                    "spineWidthOverrideInches": "0.5"},
                },
            },
        },
        "books": [{
            "number": 1, "title": "AI for Normal People", "description": "Without the Hype",
            "descriptor": "No technical skills required", "image": "assets/covers/missing.png",
            "accentColour": "#7C3AED",
            "editions": {"paperback": {"isbn": isbn, "priceCode": "", "price": {"AUD": "34.99", "USD": ""}}},
            "backCover": {"summary": ["A plain-English guide."], "highlights": ["Spot AI"],
                          "endorsements": [{"quote": "", "attribution": "Nobody"}]},
        }],
    }
    path = directory / "books.json"
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
        self.assertEqual(spine_width(config["series"], "ingramspark", 300), 0.5 * 72)
        _, warnings = render_wrap(_config(self.root), 1, ROOT, self.root / "wrap.pdf", "kdp", 40)
        self.assertTrue(any("spine left blank" in warning for warning in warnings))

    def test_back_variants(self):
        config = _config(self.root)
        render_back(config, 1, ROOT, self.root / "paperback.pdf", "paperback")
        render_back(config, 1, ROOT, self.root / "ebook.pdf", "ebook")
        render_back(config, 1, ROOT, self.root / "draft.pdf", "draft")
        paperback = PdfReader(self.root / "paperback.pdf").pages[0].extract_text()
        ebook = PdfReader(self.root / "ebook.pdf").pages[0].extract_text()
        draft = PdfReader(self.root / "draft.pdf").pages[0].extract_text()
        self.assertIn("AUD $34.99", paperback)
        self.assertIn("ISBN 9780306406157", paperback)
        self.assertNotIn("ISBN", ebook)
        self.assertNotIn("AUD", ebook)
        self.assertIn("Internal review edition", draft)
        self.assertNotIn("Nobody", paperback)  # endorsement without a quote is left out

    def test_pdf_back_has_its_own_isbn_barcode_without_paperback_price(self):
        config = _config(self.root)
        data = json.loads(config.read_text())
        data["books"][0]["editions"]["pdf"] = {
            "isbn": "9781764994811", "isbnDisplay": "978-1-7649948-1-1"
        }
        config.write_text(json.dumps(data))
        output = self.root / "pdf-back.pdf"
        self.assertEqual(render_back(config, 1, ROOT, output, "pdf"), [])
        page = PdfReader(output).pages[0]
        text = page.extract_text()
        self.assertIn("ISBN 978-1-7649948-1-1", text)
        self.assertNotIn("9780306406157", text)
        self.assertNotIn("AUD", text)
        # The barcode must contain vector bars, not only an ISBN label.
        self.assertGreater(page.get_contents().get_data().count(b" re f*"), 40)

    def test_missing_isbn_warns_instead_of_failing(self):
        warnings = render_back(_config(self.root, isbn=""), 1, ROOT, self.root / "back.pdf", "paperback")
        self.assertTrue(any("ISBN is empty" in warning for warning in warnings))


if __name__ == "__main__":
    unittest.main()
