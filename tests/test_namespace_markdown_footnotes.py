import unittest

from scripts.namespace_markdown_footnotes import namespace_footnotes


class NamespaceMarkdownFootnotesTests(unittest.TestCase):
    def test_prefixes_references_and_definitions_without_changing_other_brackets(self):
        source = "A claim.[^1]\n\n[^1]: Source text.\n\n[ordinary link](https://example.com)"

        result = namespace_footnotes(source, "chapter-02")

        self.assertEqual(
            result,
            "A claim.[^chapter-02-1]\n\n[^chapter-02-1]: Source text.\n\n[ordinary link](https://example.com)",
        )

    def test_two_chapters_with_local_note_ids_produce_unique_combined_ids(self):
        chapter_two = namespace_footnotes("First.[^1]\n\n[^1]: First source.", "chapter-02")
        chapter_three = namespace_footnotes("Second.[^1]\n\n[^1]: Second source.", "chapter-03")

        combined = chapter_two + "\n\n" + chapter_three

        self.assertEqual(combined.count("[^chapter-02-1]"), 2)
        self.assertEqual(combined.count("[^chapter-03-1]"), 2)
        self.assertNotIn("[^1]", combined)


if __name__ == "__main__":
    unittest.main()
