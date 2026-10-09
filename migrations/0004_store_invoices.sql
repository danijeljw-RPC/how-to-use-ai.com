CREATE TABLE store_invoices (
  number INTEGER PRIMARY KEY AUTOINCREMENT,
  session_id TEXT NOT NULL,
  mode TEXT NOT NULL CHECK(mode IN ('test','live')),
  email TEXT NOT NULL,
  snapshot_json TEXT NOT NULL,
  pdf_base64 TEXT,
  UNIQUE(session_id,mode)
);
CREATE INDEX store_invoices_owner ON store_invoices(mode,email);
