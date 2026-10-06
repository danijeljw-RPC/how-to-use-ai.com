import subprocess
import unittest
from pathlib import Path

FILTER = Path(__file__).resolve().parent.parent / "publishing" / "pandoc" / "book.lua"


def convert(source, to="latex"):
    return subprocess.run(
        ["pandoc", "-f", "markdown", "-t", to, "--lua-filter", str(FILTER)],
        input=source, capture_output=True, text=True, check=True,
    ).stdout


class KeepHeadingsTests(unittest.TestCase):
    def test_section_followed_by_subsection_reserves_room_for_both(self):
        latex = convert("## Is AI Replacing Artists?\n\n### Ask About Tasks\n\nText.\n")

        self.assertLess(latex.index("\\hwKeepHeadings{12}"), latex.index("Is AI Replacing Artists?"))
        self.assertEqual(latex.count("\\hwKeepHeadings"), 1)

    def test_heading_followed_by_lead_in_reserves_room_for_the_lead_in(self):
        latex = convert("### Dependable\n\nThink of a ladder:\n\n1. Possible.\n2. Repeatable.\n")

        self.assertLess(latex.index("\\hwKeepHeadings{11}"), latex.index("{Dependable}"))
        self.assertIn("\\hwKeepStart", latex)

    def test_section_subsection_and_lead_in_are_kept_as_one_group(self):
        latex = convert("## Section\n\n### Subsection\n\nFive jobs:\n\n- One\n- Two\n")

        self.assertLess(latex.index("\\hwKeepHeadings{17}"), latex.index("{Section}"))
        self.assertIn("\\hwKeepHeadings{11}", latex)  # the subsection's own group

    def test_heading_followed_by_plain_text_relies_on_its_own_hook(self):
        self.assertNotIn("\\hwKeepHeadings", convert("## Section\n\nJust text.\n"))

    def test_keep_with_next_marker_reserves_twelve_lines_by_default(self):
        latex = convert("Before.\n\n<!-- keep-with-next -->\n\nKept with what follows.\n")

        self.assertLess(latex.index("\\hwKeepWithNext{12}"), latex.index("Kept with"))
        self.assertNotIn("<!--", latex)

    def test_keep_with_next_marker_takes_a_line_count(self):
        self.assertIn("\\hwKeepWithNext{20}", convert("<!-- keep-with-next: 20 -->\n\nText.\n"))
        self.assertIn("\\hwKeepWithNext{8}", convert("<!--keep-with-next 8-->\n\nText.\n"))

    def test_other_comments_are_not_markers(self):
        self.assertNotIn("hwKeepWithNext", convert("<!-- keep this -->\n\nText.\n"))

    def test_keep_with_next_marker_is_dropped_from_epub(self):
        html = convert("<!-- keep-with-next -->\n\nText.\n", "html")

        self.assertNotIn("keep-with-next", html)
        self.assertIn("Text.", html)

    def test_epub_output_is_unchanged(self):
        html = convert("## Section\n\n### Subsection\n\nText:\n\n- One\n", "html")

        self.assertNotIn("hwKeepHeadings", html)


if __name__ == "__main__":
    unittest.main()
