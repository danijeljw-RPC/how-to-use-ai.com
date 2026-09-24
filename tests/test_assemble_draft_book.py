import tempfile
import unittest
from pathlib import Path

from pypdf import PdfReader
from reportlab.pdfgen import canvas

from scripts.assemble_draft_book import assemble_draft_book


PAGE_SIZE = (7 * 72, 10 * 72)


def write_text_pdf(path: Path, labels: list[str]) -> None:
    document = canvas.Canvas(str(path), pagesize=PAGE_SIZE)
    for label in labels:
        document.drawString(72, 648, label)
        document.showPage()
    document.save()


class AssembleDraftBookTests(unittest.TestCase):
    def setUp(self):
        self.temporary_directory = tempfile.TemporaryDirectory()
        self.root = Path(self.temporary_directory.name)
        self.front = self.root / "front.pdf"
        self.body = self.root / "body.pdf"
        self.back = self.root / "back.pdf"
        self.output = self.root / "book.pdf"
        write_text_pdf(self.front, ["FRONT COVER"])
        write_text_pdf(self.body, ["BODY ONE", "BODY TWO"])
        write_text_pdf(self.back, ["BACK COVER"])
        self.metadata = {
            "series": {
                "title": "How To Use AI.com",
                "author": "Danijel-James Wynyard-McClay",
                "page": {"widthInches": 7, "heightInches": 10},
            },
            "book": {
                "number": 1,
                "title": "AI for Normal People",
                "description": "Understanding Artificial Intelligence Without the Hype",
            },
        }

    def tearDown(self):
        self.temporary_directory.cleanup()

    def test_inserts_review_notice_between_front_cover_and_manuscript(self):
        assemble_draft_book(self.front, self.body, self.back, self.output, self.metadata)

        reader = PdfReader(self.output)
        self.assertEqual(len(reader.pages), 5)
        self.assertIn("front cover", reader.pages[0].extract_text().lower())
        notice_text = reader.pages[1].extract_text().lower()
        self.assertIn("internal and review distribution only", notice_text)
        self.assertIn("danijel-james wynyard-mcclay", notice_text)
        self.assertIn("body one", reader.pages[2].extract_text().lower())
        self.assertIn("back cover", reader.pages[-1].extract_text().lower())

    def test_all_assembled_pages_are_exactly_seven_by_ten_inches(self):
        assemble_draft_book(self.front, self.body, self.back, self.output, self.metadata)

        for page in PdfReader(self.output).pages:
            self.assertAlmostEqual(float(page.mediabox.width), 504.0, places=1)
            self.assertAlmostEqual(float(page.mediabox.height), 720.0, places=1)


if __name__ == "__main__":
    unittest.main()
