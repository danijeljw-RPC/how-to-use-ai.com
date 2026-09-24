#!/usr/bin/env python3
"""Render Markdown image references to Mermaid sources as fitted vector PDFs."""

from __future__ import annotations

import argparse
import hashlib
import os
import re
import shutil
import subprocess
import sys
from pathlib import Path


MERMAID_IMAGE_PATTERN = re.compile(
    r"(?P<prefix>!\[[^\]\n]*\]\()"
    r"(?P<open_angle><)?"
    r"(?P<target>[^)\s>]+\.mmd)"
    r"(?(open_angle)>)"
    r"(?P<suffix>\)(?:\{[^}\n]*\})?)"
)

BROWSER_CANDIDATES = (
    Path("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"),
    Path("/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge"),
    Path("/Applications/Chromium.app/Contents/MacOS/Chromium"),
    Path("/usr/bin/google-chrome"),
    Path("/usr/bin/chromium"),
    Path("/usr/bin/chromium-browser"),
)


class MermaidRenderError(RuntimeError):
    """Raised when a referenced Mermaid diagram cannot be rendered."""


def renderer_environment() -> dict[str, str]:
    environment = os.environ.copy()
    if environment.get("PUPPETEER_EXECUTABLE_PATH"):
        return environment
    for browser in BROWSER_CANDIDATES:
        if browser.is_file() and os.access(browser, os.X_OK):
            environment["PUPPETEER_EXECUTABLE_PATH"] = str(browser)
            break
    return environment


def mermaid_cli() -> str:
    configured = os.environ.get("MERMAID_CLI")
    if configured:
        return configured
    discovered = shutil.which("mmdc")
    if discovered:
        return discovered
    raise MermaidRenderError(
        "Mermaid CLI is required for .mmd diagrams (install @mermaid-js/mermaid-cli)."
    )


def rendered_path(source: Path, output_dir: Path) -> Path:
    source_digest = hashlib.sha256(str(source).encode("utf-8")).hexdigest()[:12]
    return output_dir / f"{source.stem}-{source_digest}.pdf"


def render_diagram(source: Path, output: Path) -> None:
    output.parent.mkdir(parents=True, exist_ok=True)
    command = [
        mermaid_cli(),
        "-i",
        str(source),
        "-o",
        str(output),
        "--pdfFit",
    ]
    result = subprocess.run(
        command,
        text=True,
        capture_output=True,
        env=renderer_environment(),
        check=False,
    )
    if result.returncode != 0:
        details = (result.stderr or result.stdout).strip()
        suffix = f"\n{details}" if details else ""
        raise MermaidRenderError(f"Failed to render Mermaid diagram {source}.{suffix}")
    if not output.is_file() or output.stat().st_size == 0:
        raise MermaidRenderError(
            f"Mermaid CLI reported success but did not create {output}."
        )


def render_references(markdown: str, source_dir: Path, output_dir: Path) -> str:
    rendered: dict[Path, Path] = {}

    def replace(match: re.Match[str]) -> str:
        source = (source_dir / match.group("target")).resolve()
        if not source.is_file():
            raise MermaidRenderError(f"Mermaid diagram source not found: {source}")
        if source not in rendered:
            output = rendered_path(source, output_dir.resolve())
            render_diagram(source, output)
            rendered[source] = output
        return (
            f'{match.group("prefix")}<{rendered[source]}>{match.group("suffix")}'
        )

    return MERMAID_IMAGE_PATTERN.sub(replace, markdown)


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--source-dir", type=Path, required=True)
    parser.add_argument("--output-dir", type=Path, required=True)
    arguments = parser.parse_args()
    try:
        transformed = render_references(
            sys.stdin.read(), arguments.source_dir, arguments.output_dir
        )
    except MermaidRenderError as error:
        print(f"Error: {error}", file=sys.stderr)
        return 1
    sys.stdout.write(transformed)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
