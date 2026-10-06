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

    def test_epub_output_is_unchanged(self):
        html = convert("## Section\n\n### Subsection\n\nText:\n\n- One\n", "html")

        self.assertNotIn("hwKeepHeadings", html)


if __name__ == "__main__":
    unittest.main()
