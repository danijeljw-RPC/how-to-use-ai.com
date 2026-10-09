-- Preserve historical jobs; sent means provider acceptance, not inbox delivery.
ALTER TABLE store_outbox ADD COLUMN provider_message_id TEXT;
ALTER TABLE store_outbox ADD COLUMN submission_started_at INTEGER;
ALTER TABLE store_outbox ADD COLUMN provider_status TEXT;
ALTER TABLE store_outbox ADD COLUMN last_error_code TEXT;
