ALTER TABLE store_invoices ADD COLUMN stripe_synced_at INTEGER;
ALTER TABLE store_invoices ADD COLUMN next_sync_at INTEGER NOT NULL DEFAULT 0;
ALTER TABLE store_invoices ADD COLUMN sync_error TEXT;
