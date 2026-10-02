import re
import shutil
import subprocess
import tempfile
import textwrap
import unittest
from pathlib import Path

from scripts.build_book_index import (
    annotate,
    anchors_backmatter,
    broken_references,
    collect,
    compile_phrase,
    find_hits,
    latex_backmatter,
    load_entries,
    makeindex_key,
    unused_phrases,
)
from scripts.namespace_markdown_footnotes import namespace_footnotes


ROOT = Path(__file__).resolve().parents[1]
BOOK_ONE = ROOT / "docs" / "30-books" / "31-book-01"
TERMS = BOOK_ONE / "index" / "index-terms.toml"
CHAPTERS = BOOK_ONE / "chapters"


def write_terms(directory: Path, text: str) -> Path:
    path = directory / "terms.toml"
    path.write_text(textwrap.dedent(text), encoding="utf-8")
    return path


def labels(hits) -> list[str]:
    return [hit.entry.label for hit in hits]


class PhraseTests(unittest.TestCase):
    def test_trailing_star_matches_word_endings_only_at_word_start(self):
        pattern = compile_phrase("hallucinat*", case_sensitive=False)
        self.assertTrue(pattern.search("models hallucinate often"))
        self.assertTrue(pattern.search("a Hallucination"))
        self.assertFalse(pattern.search("unhallucinated"))

    def test_space_matches_hyphen_and_whole_words_are_required(self):
        pattern = compile_phrase("decision support", case_sensitive=False)
        self.assertTrue(pattern.search("clinical decision-support tools"))
        self.assertFalse(compile_phrase("spam", False).search("spammy tracks"))

    def test_case_sensitive_phrases(self):
        pattern = compile_phrase("VET", case_sensitive=True)
        self.assertTrue(pattern.search("VET outcomes"))
        self.assertFalse(pattern.search("a vet visit"))


class TermListTests(unittest.TestCase):
    def setUp(self):
        self.temporary_directory = tempfile.TemporaryDirectory()
        self.root = Path(self.temporary_directory.name)

    def tearDown(self):
        self.temporary_directory.cleanup()

    def test_rejects_unknown_keys(self):
        path = write_terms(self.root, '[[entry]]\nterm = "Spam"\nmatches = ["spam"]\n')
        with self.assertRaisesRegex(ValueError, "unknown keys"):
            load_entries(path)

    def test_subentries_share_the_main_heading_sort_key(self):
        path = write_terms(
            self.root,
            """
            [[entry]]
            term = "Writing with AI"
            sort = "writing"
            match = ["writing experiment"]

            [[entry]]
            term = "Writing with AI"
            sub = "keeping your own voice"
            match = ["your own voice"]
            """,
        )
        entries = load_entries(path)
        self.assertEqual({entry.sort for entry in entries}, {"writing"})
        sub = next(entry for entry in entries if entry.sub)
        self.assertEqual(
            makeindex_key(sub), "writing@Writing with AI!keeping your own voice@keeping your own voice"
        )

    def test_makeindex_and_latex_special_characters_are_escaped(self):
        path = write_terms(
            self.root,
            """
            [[entry]]
            term = "95% fail! @ R&D"
            sort = "ninety-five"
            match = ["fail"]
            """,
        )
        self.assertEqual(makeindex_key(load_entries(path)[0]), r'ninety-five@95\% fail"! "@ R\&D')

    def test_broken_cross_references_are_reported(self):
        path = write_terms(
            self.root,
            """
            [[entry]]
            term = "LLM"
            see = "Language models"
            """,
        )
        self.assertEqual(broken_references(load_entries(path)), ["LLM: refers to missing term 'Language models'"])


class MatchingTests(unittest.TestCase):
    def setUp(self):
        self.temporary_directory = tempfile.TemporaryDirectory()
        self.root = Path(self.temporary_directory.name)
        self.entries = load_entries(
            write_terms(
                self.root,
                """
                [[entry]]
                term = "Spam filters"
                match = ["spam"]

                [[entry]]
                term = "Prediction"
                match = ["predict*"]
                scope = "chapter"

                [[entry]]
                term = "Agents (AI)"
                match = ["agent*"]
                chapters = [14]

                [[entry]]
                term = "US Copyright Office"
                match = ["Copyright Office"]
                case = true

                [[entry]]
                term = "Hallucination"
                match = ["hallucination"]
                """,
            )
        )

    def tearDown(self):
        self.temporary_directory.cleanup()

    def test_skips_headings_notes_placeholders_comments_code_and_images(self):
        chapter = textwrap.dedent(
            """\
            # Spam Everywhere

            Spam filters catch spam.

            > [Author reflection placeholder: a spam story.]

            <!-- AUTHOR-INPUT id="X" -->
            > [Author input needed: spam]
            <!-- /AUTHOR-INPUT -->

            ```text
            spam
            ```

            ![A spam diagram.](../diagrams/spam.mmd)

            ## Chapter Notes

            [^1]: A study of spam.
            """
        ).split("\n")
        hits = find_hits(chapter, "1", self.entries)
        self.assertEqual([(hit.entry.label, hit.line) for hit in hits], [("Spam filters", 3)])

    def test_ignores_urls_footnote_references_and_inline_code(self):
        line = "See <https://spam.example>, `spam` and a note[^spam]."
        self.assertEqual(find_hits([line], "1", self.entries), [])

    def test_one_hit_per_paragraph_and_chapter_scope(self):
        chapter = [
            "Spam and more spam; predictions.",
            "Still spam, still predicting.",
            "",
            "New paragraph about spam and prediction.",
        ]
        hits = find_hits(chapter, "1", self.entries)
        self.assertEqual(labels(hits).count("Spam filters"), 2)
        self.assertEqual(labels(hits).count("Prediction"), 1)

    def test_chapter_limits(self):
        self.assertEqual(find_hits(["An agent acts."], "3", self.entries), [])
        self.assertEqual(labels(find_hits(["An agent acts."], "14", self.entries)), ["Agents (AI)"])

    def test_markers_follow_bold_text_and_possessives(self):
        markdown = "The **hallucination** and the Copyright Office's report.\n"
        result = annotate(markdown, "chapter-03-x", self.entries, "latex")
        self.assertIn("**hallucination**`\\index{hallucination@Hallucination}`{=latex} and", result)
        self.assertIn("Office's`\\index{us copyright office@US Copyright Office}`{=latex} report", result)

    def test_table_hits_go_in_a_block_before_the_table(self):
        markdown = "Intro.\n\n| Task | Purpose |\n| --- | --- |\n| Spam filtering | Predict |\n"
        result = annotate(markdown, "chapter-01-x", self.entries, "latex")
        self.assertIn("```{=latex}\n\\index{spam filters@Spam filters}", result)
        self.assertIn("| Spam filtering | Predict |", result)

    def test_anchor_format_ids_are_unique_and_linked_from_the_index(self):
        chapters = self.root / "chapters"
        chapters.mkdir()
        (chapters / "chapter-01-x.md").write_text("Spam here.\n\nSpam there.\n", encoding="utf-8")
        annotated = annotate((chapters / "chapter-01-x.md").read_text(), "chapter-01-x", self.entries, "anchors")
        ids = re.findall(r"\[\]\{#([^}]+)\}", annotated)
        self.assertEqual(ids, ["idx-chapter-01-x-0001", "idx-chapter-01-x-0002"])
        index = anchors_backmatter(chapters, self.entries)
        self.assertIn("Spam filters, Ch 1 [1](#idx-chapter-01-x-0001) [2](#idx-chapter-01-x-0002)", index)

    def test_latex_backmatter_writes_cross_references_immediately(self):
        entries = load_entries(
            write_terms(
                self.root,
                """
                [[entry]]
                term = "Language models"
                match = ["language model"]

                [[entry]]
                term = "LLM"
                see = "Language models"
                """,
            )
        )
        block = latex_backmatter(entries)
        self.assertIn(
            r"\immediate\write\@indexfile{\string\indexentry{\unexpanded{llm@LLM|see{Language models}}}{99999}}",
            block,
        )
        self.assertIn(r"\printindex", block)
        self.assertTrue(block.startswith("```{=latex}"))


class BookOneIndexTests(unittest.TestCase):
    """Guards for the real term list against the real manuscript."""

    @classmethod
    def setUpClass(cls):
        cls.entries = load_entries(TERMS)

    def test_every_term_matches_and_every_reference_resolves(self):
        self.assertEqual(broken_references(self.entries), [])
        found = {id(hit.entry) for hits in collect(CHAPTERS, self.entries).values() for hit in hits}
        unmatched = [entry.label for entry in self.entries if entry.rules and id(entry) not in found]
        self.assertEqual(unmatched, [])

    def test_no_dead_phrases(self):
        self.assertEqual([f"{entry.label}: {pattern}" for entry, pattern in unused_phrases(CHAPTERS, self.entries)], [])

    @unittest.skipUnless(shutil.which("pandoc"), "pandoc is not installed")
    def test_markers_change_nothing_else_in_pandoc_output(self):
        def latex(markdown: str) -> str:
            result = subprocess.run(
                ["pandoc", "-f", "markdown", "-t", "latex", "--wrap=none"],
                input=markdown, text=True, capture_output=True, check=True,
            )
            return re.sub(r"\n{3,}", "\n\n", result.stdout)

        for path in sorted(CHAPTERS.glob("*.md")):
            with self.subTest(chapter=path.name):
                source = namespace_footnotes(path.read_text(encoding="utf-8"), path.stem)
                indexed = latex(annotate(source, path.stem, self.entries, "latex"))
                self.assertGreater(indexed.count("\\index{"), 0)
                stripped = re.sub(r"\\index\{(?:[^{}]|\{[^{}]*\})*\}", "", indexed)
                self.assertEqual(re.sub(r"\n{3,}", "\n\n", stripped), latex(source))


if __name__ == "__main__":
    unittest.main()
