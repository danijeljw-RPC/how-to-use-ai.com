import shutil
import subprocess
import tempfile
import unittest
from unittest.mock import Mock
from pathlib import Path

from PIL import Image

from scripts.book_metadata import MetadataError
from scripts.isbn_barcode import (
    EAN5_PARITY,
    EAN13_PARITY,
    G_CODES,
    L_CODES,
    R_CODES,
    draw_barcode,
    ean5_checksum,
    ean5_modules,
    ean13_modules,
    render_barcode_pdf,
)

ISBN = "9780306406157"  # a widely published valid example ISBN


def _decode_ean13(modules: str) -> str:
    """Independent decoder: recover the 13 digits from 95 modules."""
    assert modules[:3] == "101" and modules[45:50] == "01010" and modules[-3:] == "101"
    left = [modules[3 + 7 * i: 10 + 7 * i] for i in range(6)]
    right = [modules[50 + 7 * i: 57 + 7 * i] for i in range(6)]
    parity, digits = "", ""
    for code in left:
        if code in L_CODES:
            parity, digits = parity + "L", digits + str(L_CODES.index(code))
        else:
            parity, digits = parity + "G", digits + str(G_CODES.index(code))
    digits += "".join(str(R_CODES.index(code)) for code in right)
    return str(EAN13_PARITY.index(parity)) + digits


class Ean13Tests(unittest.TestCase):
    def test_round_trip(self):
        modules = ean13_modules(ISBN)
        self.assertEqual(len(modules), 95)
        self.assertEqual(_decode_ean13(modules), ISBN)

    def test_hyphenated_input(self):
        self.assertEqual(ean13_modules("978-0-306-40615-7"), ean13_modules(ISBN))

    def test_code_tables_are_complementary(self):
        for digit in range(10):
            self.assertEqual(int(L_CODES[digit], 2) ^ int(R_CODES[digit], 2), 0b1111111)
            self.assertEqual(G_CODES[digit], R_CODES[digit][::-1])

    def test_rejects_bad_check_digit(self):
        with self.assertRaises(MetadataError):
            ean13_modules("9780306406158")


class Ean5Tests(unittest.TestCase):
    def test_no_price_code(self):
        # 90000: checksum (3*9) % 10 = 7, parity LGLGL.
        self.assertEqual(ean5_checksum("90000"), 7)
        self.assertEqual(EAN5_PARITY[7], "LGLGL")
        expected = "01011" + "01".join(
            [L_CODES[9], G_CODES[0], L_CODES[0], G_CODES[0], L_CODES[0]]
        )
        self.assertEqual(ean5_modules("90000"), expected)
        self.assertEqual(len(expected), 48)

    def test_rejects_bad_code(self):
        for code in ("9000", "9000A", "900000"):
            with self.assertRaises(MetadataError):
                ean5_modules(code)


class DigitPlacementTests(unittest.TestCase):
    def test_each_digit_is_centred_under_its_own_encoded_modules(self):
        pdf = Mock()
        draw_barcode(pdf, 0, 0, 168, ISBN, font_name="Helvetica")
        calls = pdf.drawCentredString.call_args_list
        expected = [(11 + 3 + 7 * i + 3.5, digit) for i, digit in enumerate(ISBN[1:7])]
        expected += [(11 + 50 + 7 * i + 3.5, digit) for i, digit in enumerate(ISBN[7:])]
        expected += [(11 + 95 + 9 + 5 + 9 * i + 3.5, digit) for i, digit in enumerate("90000")]
        self.assertEqual([(call.args[0], call.args[2]) for call in calls[:-1]], expected)


class RenderedBarcodeTests(unittest.TestCase):
    def setUp(self):
        if not shutil.which("pdftoppm"):
            self.skipTest("pdftoppm not installed")
        self.directory = tempfile.TemporaryDirectory()
        self.addCleanup(self.directory.cleanup)
        self.pdf = render_barcode_pdf(Path(self.directory.name) / "barcode.pdf", ISBN, "90000")
        stem = Path(self.directory.name) / "barcode"
        subprocess.run(["pdftoppm", "-png", "-r", "1200", "-singlefile", "-gray", str(self.pdf), str(stem)], check=True)
        self.image = Image.open(stem.with_suffix(".png")).convert("L")

    def test_pixels_decode_to_isbn(self):
        """Scan one row through the bars and rebuild the modules from pixel runs."""
        width, height = self.image.size
        row = [self.image.getpixel((x, int(height * 0.45))) < 128 for x in range(width)]
        first_bar = row.index(True)
        # 2 in wide, 168 modules: a module is width / 168 pixels.
        module = width / 168
        bits = "".join("1" if row[min(width - 1, int(first_bar + (i + 0.5) * module))] else "0" for i in range(95))
        self.assertEqual(_decode_ean13(bits), ISBN)

    @unittest.skipUnless(shutil.which("zbarimg"), "zbarimg not installed (brew install zbar)")
    def test_scanner_reads_barcode(self):
        png = Path(self.directory.name) / "barcode.png"
        result = subprocess.run(["zbarimg", "--quiet", "--raw", str(png)], capture_output=True, text=True)
        self.assertIn(ISBN, result.stdout)


if __name__ == "__main__":
    unittest.main()
