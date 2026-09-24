import json
import tempfile
import unittest
from pathlib import Path

from PIL import Image
from pypdf import PdfReader

from scripts.cover_generator import CoverConfigurationError, render_book_cover


class CoverGeneratorTests(unittest.TestCase):
    def setUp(self):
        self.temporary_directory = tempfile.TemporaryDirectory()
        self.root = Path(self.temporary_directory.name)
        self.output = self.root / "output"
        self.config = self.root / "books.json"
        self.config.write_text(
            json.dumps(
                {
                    "series": {
                        "title": "How To Use AI.com",
                        "descriptor": "THE COMPLETE GUIDE SERIES",
                        "tagline": "Understand • Explore • Apply • Grow",
                        "author": "Danijel-James Wynyard-McClay",
                        "page": {"widthInches": 7, "heightInches": 10},
                        "coverArtwork": {
                            "widthPixels": 2100,
                            "heightPixels": 3000,
                            "previewWidthPixels": 630,
                        },
                        "illustration": {
                            "widthPixels": 1800,
                            "heightPixels": 2700,
                            "placeholder": "assets/covers/preview-placeholder.png",
                        },
                    },
                    "books": [
                        {
                            "number": 1,
                            "sourceDirectory": "02-book-01",
                            "title": "AI for Normal People",
                            "description": "Understanding Artificial Intelligence Without the Hype",
                            "descriptor": "No technical skills required",
                            "accentColour": "#7C3AED",
                            "supportingAccentColours": ["#0EA5E9"],
                            "image": "assets/covers/book-01.png",
                            "theme": "understand",
                        },
                        {
                            "number": 2,
                            "sourceDirectory": "03-book-02",
                            "title": "Practical AI Workflows & Productivity",
                            "description": "",
                            "accentColour": "#0284C7",
                            "image": "assets/covers/book-02.png",
                            "theme": "use",
                        },
                    ],
                }
            ),
            encoding="utf-8",
        )

    def tearDown(self):
        self.temporary_directory.cleanup()

    def test_missing_book_art_uses_generated_placeholder_at_configured_size(self):
        result = render_book_cover(self.config, 1, self.root, self.output)

        self.assertTrue(result.used_placeholder)
        with Image.open(result.illustration) as placeholder:
            self.assertEqual(placeholder.size, (1800, 2700))
        self.assertEqual(result.illustration, self.root / "assets/covers/preview-placeholder.png")

    def test_rendered_outputs_have_configured_dimensions_and_exact_pdf_page_size(self):
        result = render_book_cover(self.config, 1, self.root, self.output)

        expected_sizes = {
            result.front_png: (2100, 3000),
            result.back_png: (2100, 3000),
            result.front_preview: (630, 900),
            result.back_preview: (630, 900),
        }
        for image_path, expected_size in expected_sizes.items():
            with Image.open(image_path) as rendered:
                self.assertEqual(rendered.size, expected_size)

        for pdf_path in (result.front_pdf, result.back_pdf):
            page = PdfReader(pdf_path).pages[0]
            self.assertAlmostEqual(float(page.mediabox.width), 504.0, places=1)
            self.assertAlmostEqual(float(page.mediabox.height), 720.0, places=1)

    def test_existing_book_art_is_used_instead_of_placeholder(self):
        illustration = self.root / "assets/covers/book-01.png"
        illustration.parent.mkdir(parents=True)
        Image.new("RGB", (1800, 2700), "#123456").save(illustration)

        result = render_book_cover(self.config, 1, self.root, self.output)

        self.assertFalse(result.used_placeholder)
        self.assertEqual(result.illustration, illustration)

    def test_descriptor_text_does_not_spill_left_of_its_badge(self):
        result = render_book_cover(self.config, 1, self.root, self.output)

        with Image.open(result.front_png).convert("RGB") as cover:
            outside_badge = cover.crop((18, 1510, 70, 1870))
            colours = outside_badge.getcolors(maxcolors=outside_badge.width * outside_badge.height)
            navy_pixels = dict((colour, count) for count, colour in colours or []).get((6, 21, 50), 0)
        self.assertEqual(navy_pixels, 0)

    def test_empty_optional_description_does_not_prevent_rendering(self):
        result = render_book_cover(self.config, 2, self.root, self.output)

        self.assertTrue(result.front_png.is_file())
        self.assertTrue(result.back_png.is_file())

    def test_unknown_book_number_fails_with_precise_error(self):
        with self.assertRaisesRegex(CoverConfigurationError, "Book 99 is not defined"):
            render_book_cover(self.config, 99, self.root, self.output)


if __name__ == "__main__":
    unittest.main()
