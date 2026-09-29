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

    def test_transparent_art_is_shown_whole_on_white_without_bars(self):
        illustration = self.root / "assets/covers/book-01.png"
        illustration.parent.mkdir(parents=True)
        art = Image.new("RGBA", (1800, 2700), (0, 0, 0, 0))
        art.paste((200, 30, 30, 255), (600, 300, 1200, 2400))
        art.save(illustration)

        result = render_book_cover(self.config, 1, self.root, self.output)

        with Image.open(result.front_png).convert("RGB") as cover:
            # Transparent areas and side-bar positions are white, not black or accent.
            self.assertEqual(cover.getpixel((5, 2000)), (255, 255, 255))
            self.assertEqual(cover.getpixel((2095, 2000)), (255, 255, 255))
            self.assertEqual(cover.getpixel((600, 2600)), (255, 255, 255))
            # The subject's top and bottom survive (no crop) and are not faded.
            self.assertEqual(cover.getpixel((1050, 1490)), (200, 30, 30))
            self.assertEqual(cover.getpixel((1050, 2650)), (200, 30, 30))

    def test_cover_pdfs_are_vector_with_embedded_fonts(self):
        result = render_book_cover(self.config, 1, self.root, self.output)

        for pdf_path, expected_images, expected_text in (
            (result.front_pdf, 1, "AI FOR NORMAL PEOPLE"),
            (result.back_pdf, 0, "INTERNAL REVIEW EDITION"),
        ):
            page = PdfReader(pdf_path).pages[0]
            resources = page["/Resources"]
            # Only the illustration is a raster image; shapes and text are vector.
            images = resources.get("/XObject", {})
            self.assertEqual(len(images), expected_images, pdf_path)
            fonts = [font.get_object() for font in resources["/Font"].values()]
            self.assertTrue(fonts)
            for font in fonts:
                descriptor = font.get("/FontDescriptor")
                self.assertIsNotNone(descriptor, f"unembedded font {font.get('/BaseFont')} in {pdf_path}")
            self.assertIn(expected_text, page.extract_text())

    def test_author_name_sits_between_centred_rules(self):
        result = render_book_cover(self.config, 1, self.root, self.output)

        with Image.open(result.front_png).convert("RGB") as cover:
            footer = cover.crop((0, 2760, 2100, 2880))
            rule_rows = [y for y in range(footer.height) if footer.getpixel((250, y)) != (255, 255, 255)]
            name_rows = [
                y
                for y in range(footer.height)
                if any(footer.getpixel((x, y))[2] < 120 for x in range(1000, 1100))
            ]
            right_rule_at_name_height = footer.getpixel((1850, rule_rows[0]))
        self.assertTrue(rule_rows, "left rule not found")
        self.assertTrue(name_rows, "author name not found")
        self.assertLess(name_rows[0], rule_rows[0])
        self.assertGreater(name_rows[-1], rule_rows[-1])
        self.assertNotEqual(right_rule_at_name_height, (255, 255, 255))

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
