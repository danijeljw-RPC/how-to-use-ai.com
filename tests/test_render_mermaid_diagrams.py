import os
import subprocess
import sys
import tempfile
import unittest
from pathlib import Path


ROOT_DIR = Path(__file__).resolve().parents[1]
SCRIPT = ROOT_DIR / "scripts" / "render_mermaid_diagrams.py"


class RenderMermaidDiagramsTests(unittest.TestCase):
    def test_mmd_reference_is_rendered_as_a_fitted_vector_pdf(self) -> None:
        with tempfile.TemporaryDirectory() as temporary_directory:
            root = Path(temporary_directory)
            chapter_dir = root / "chapters"
            diagram_dir = root / "diagrams"
            output_dir = root / "rendered"
            chapter_dir.mkdir()
            diagram_dir.mkdir()
            source = diagram_dir / "feedback-loop.mmd"
            source.write_text("flowchart TB\n    A --> B\n", encoding="utf-8")

            renderer_log = root / "renderer.log"
            fake_mmdc = root / "mmdc"
            fake_mmdc.write_text(
                """#!/usr/bin/env python3
import os
import pathlib
import sys

arguments = sys.argv[1:]
pathlib.Path(os.environ["FAKE_MMDC_LOG"]).write_text(
    "\\n".join(arguments), encoding="utf-8"
)
output = pathlib.Path(arguments[arguments.index("-o") + 1])
output.write_bytes(b"%PDF-1.4\\n%%EOF\\n")
""",
                encoding="utf-8",
            )
            fake_mmdc.chmod(0o755)

            markdown = (
                "![Feedback loop](../diagrams/feedback-loop.mmd){ width=50% }\n"
            )
            environment = os.environ.copy()
            environment["MERMAID_CLI"] = str(fake_mmdc)
            environment["FAKE_MMDC_LOG"] = str(renderer_log)

            result = subprocess.run(
                [
                    sys.executable,
                    str(SCRIPT),
                    "--source-dir",
                    str(chapter_dir),
                    "--output-dir",
                    str(output_dir),
                ],
                input=markdown,
                text=True,
                capture_output=True,
                env=environment,
                check=False,
            )

            self.assertEqual(result.returncode, 0, result.stderr)
            rendered_files = list(output_dir.glob("*.pdf"))
            self.assertEqual(len(rendered_files), 1)
            self.assertEqual(rendered_files[0].read_bytes(), b"%PDF-1.4\n%%EOF\n")
            self.assertEqual(
                result.stdout,
                f"![Feedback loop](<{rendered_files[0].resolve()}>){'{'} width=50% {'}'}\n",
            )
            renderer_arguments = renderer_log.read_text(encoding="utf-8").splitlines()
            self.assertIn("--pdfFit", renderer_arguments)
            self.assertEqual(
                Path(renderer_arguments[renderer_arguments.index("-i") + 1]),
                source.resolve(),
            )


if __name__ == "__main__":
    unittest.main()
