-- Keep buyer confirmations and operator notifications independently deliverable.
ALTER TABLE store_outbox ADD COLUMN audience TEXT NOT NULL DEFAULT 'buyer' CHECK(audience IN ('buyer','operator'));
DROP INDEX store_outbox_order;
CREATE UNIQUE INDEX store_outbox_order ON store_outbox(mode,order_id,kind,audience) WHERE order_id IS NOT NULL;
