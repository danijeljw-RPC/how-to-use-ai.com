import subprocess
import tempfile
import unittest
import zipfile
from pathlib import Path

FILTER = Path(__file__).resolve().parent.parent / "publishing" / "pandoc" / "book.lua"

SOURCE = """# Chapter 1 — One

First.[^a] Second.[^b] Again.[^a]

[^a]: Source A.
[^b]: Source B.

# Chapter 2 — Two

Same text, new chapter.[^c]

[^c]: Source A.
"""


def convert(to):
    return subprocess.run(
        ["pandoc", "-f", "markdown", "-t", to, "--lua-filter", str(FILTER)],
        input=SOURCE, capture_output=True, text=True, check=True,
    ).stdout


class RepeatedNotesTests(unittest.TestCase):
    def test_latex_prints_a_repeated_note_once_and_reuses_its_number(self):
        latex = convert("latex")

        self.assertEqual(latex.count("Source A."), 2)  # once per chapter
        self.assertEqual(latex.count("\\hwNoteAgain{c1n1}"), 1)
        self.assertIn("\\hwNoteRemember{c1n1}", latex)
        self.assertIn("\\hwNoteRemember{c2n1}", latex)

    def test_html_links_a_repeated_note_to_the_first_one(self):
        html = convert("html")

        self.assertEqual(html.count("Source A."), 2)
        self.assertIn('<a href="#fn1" class="footnote-ref" epub:type="noteref" role="doc-noteref"><sup>1</sup></a>', html)

    def test_epub2_link_leaves_out_epub3_only_attributes(self):
        # EPUB 2 is XHTML 1.1, where epub:type is an unbound prefix and
        # epubcheck stops parsing the file.
        with tempfile.TemporaryDirectory() as directory:
            output = Path(directory) / "book.epub"
            subprocess.run(
                ["pandoc", "-f", "markdown", "-t", "epub2", "--lua-filter", str(FILTER),
                 "-M", "title=Test", "-o", str(output)],
                input=SOURCE, capture_output=True, text=True, check=True,
            )
            with zipfile.ZipFile(output) as epub:
                xhtml = "".join(epub.read(name).decode() for name in epub.namelist()
                                if name.endswith(".xhtml"))

        self.assertIn('<a href="#fn1" class="footnote-ref"><sup>1</sup></a>', xhtml)
        self.assertNotIn("epub:type", xhtml)


if __name__ == "__main__":
    unittest.main()
