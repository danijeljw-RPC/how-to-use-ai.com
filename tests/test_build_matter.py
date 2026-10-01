import json
import tempfile
import unittest
from pathlib import Path

from scripts.build_matter import build, latex


def _config(directory: Path, **book_overrides) -> Path:
    book = {
        "number": 1,
        "sourceDirectory": "30-books/31-book-01",
        "title": "AI for Normal People",
        "description": "Understanding AI",
        "dedication": {"text": "For Johnny,\n\nthis book is for you."},
        "epigraph": {"quote": "Magic & more", "author": "A. Writer"},
        "copyright": {"holder": "", "year": "2026", "edition": "First edition", "publicationMonth": ""},
        "editions": {"paperback": {"isbn": "9780306406157", "isbnDisplay": "978-0-306-40615-7"},
                     "pdf": {"isbn": ""}, "epub": {"isbn": ""}},
    }
    book.update(book_overrides)
    config = {
        "series": {
            "author": "Danijel-James Wynyard-McClay",
            "about": "Five books.",
            "publisher": {"name": "RePass Cloud Pty Ltd", "imprint": "How To Use AI.com", "address": "",
                          "website": "how-to-use-ai.com"},
            "authorProfile": {"photo": "", "bio": "DJ builds **things**.\n\nSecond paragraph.", "shortBio": ""},
        },
        "books": [book, {"number": 2, "title": "Practical AI Workflows"}],
    }
    path = directory / "books.json"
    path.write_text(json.dumps(config), encoding="utf-8")
    return path


class LatexEscapeTests(unittest.TestCase):
    def test_escapes_specials_and_keeps_bold(self):
        self.assertEqual(latex("A & B 100% **bold** #1"), r"A \& B 100\% \textbf{bold} \#1")


class FrontMatterTests(unittest.TestCase):
    def setUp(self):
        self.directory = tempfile.TemporaryDirectory()
        self.addCleanup(self.directory.cleanup)
        self.root = Path(self.directory.name)

    def front(self, edition="release", **overrides):
        return build(_config(self.root, **overrides), 1, self.root, "front", edition=edition)

    def test_release_order(self):
        text = self.front()
        order = [r"\frontmatter", r"\hwHalfTitle", r"\hwSeriesPage", r"\hwTitlePage", r"\begin{hwCopyright}",
                 r"\begin{hwDedication}", r"\hwEpigraph", r"\tableofcontents*", r"\mainmatter"]
        positions = [text.index(marker) for marker in order]
        self.assertEqual(positions, sorted(positions))

    def test_empty_values_are_left_out(self):
        text = self.front()
        self.assertNotIn("Copyright ©", text)          # holder is empty
        self.assertNotIn("PDF}", text)                  # PDF ISBN is empty
        self.assertIn(r"\hwIsbn{Paperback}{ISBN 978-0-306-40615-7}", text)
        self.assertIn("First edition, 2026", text)

    def test_empty_dedication_and_epigraph_drop_their_pages(self):
        text = self.front(dedication={"text": ""}, epigraph={"quote": "", "author": ""})
        self.assertNotIn("hwDedication", text)
        self.assertNotIn("hwEpigraph", text)

    def test_draft_has_no_half_title_and_marks_review(self):
        text = self.front(edition="draft")
        self.assertNotIn(r"\hwHalfTitle", text)
        self.assertIn("Internal review draft", text)

    def test_preview_is_not_marked_internal(self):
        text = self.front(edition="preview")
        self.assertNotIn("Internal review", text)
        self.assertIn("Preview edition", text)

    def test_current_book_is_highlighted_in_series_list(self):
        text = self.front()
        self.assertIn(r"\hwSeriesItem{01}{AI for Normal People}{1}", text)
        self.assertIn(r"\hwSeriesItem{02}{Practical AI Workflows}{0}", text)


class AboutTests(unittest.TestCase):
    def test_about_author_and_series(self):
        with tempfile.TemporaryDirectory() as directory:
            text = build(_config(Path(directory)), 1, Path(directory), "about")
        self.assertIn("# About the Author", text)
        self.assertIn("DJ builds **things**.\n\nSecond paragraph.", text)
        self.assertIn("## About the Series", text)
        self.assertNotIn("hwAuthorPhoto", text)  # photo is empty

    def test_epub_front_has_isbn_and_dedication(self):
        with tempfile.TemporaryDirectory() as directory:
            text = build(_config(Path(directory)), 1, Path(directory), "front", target="epub")
        self.assertIn("Paperback ISBN 978-0-306-40615-7", text)
        self.assertIn("# Dedication", text)


if __name__ == "__main__":
    unittest.main()
