-- Expand the format constraint without losing attempts or their purchase locks.
-- Rebuild the dependent lock table too, so foreign-key enforcement remains on.
CREATE TABLE store_purchase_locks_colour_backup AS SELECT * FROM store_purchase_locks;
DROP TABLE store_purchase_locks;
CREATE TABLE store_attempts_colour (
  id TEXT PRIMARY KEY, mode TEXT NOT NULL CHECK(mode IN ('test','live')),
  email TEXT NOT NULL, format TEXT NOT NULL CHECK(format IN ('pdf','epub','bundle','signed','signed_colour')),
  currency TEXT NOT NULL, amount INTEGER NOT NULL, product_id TEXT NOT NULL,
  country TEXT, shipping_amount INTEGER NOT NULL DEFAULT 0,
  session_id TEXT UNIQUE, state TEXT NOT NULL DEFAULT 'creating',
  expires_at INTEGER NOT NULL, created_at INTEGER NOT NULL, next_check INTEGER NOT NULL DEFAULT 0
);
INSERT INTO store_attempts_colour SELECT * FROM store_attempts;
DROP TABLE store_attempts;
ALTER TABLE store_attempts_colour RENAME TO store_attempts;
CREATE INDEX store_attempts_due ON store_attempts(mode,state,next_check,expires_at);
CREATE TABLE store_purchase_locks (
  mode TEXT NOT NULL, email TEXT NOT NULL, asset TEXT NOT NULL,
  attempt_id TEXT NOT NULL REFERENCES store_attempts(id),
  PRIMARY KEY(mode,email,asset)
);
INSERT INTO store_purchase_locks SELECT * FROM store_purchase_locks_colour_backup;
DROP TABLE store_purchase_locks_colour_backup;
CREATE TRIGGER store_lock_owned BEFORE INSERT ON store_purchase_locks
WHEN EXISTS (
  SELECT 1 FROM store_entitlements e JOIN store_orders o ON o.session_id=e.order_id AND o.mode=e.mode
  WHERE e.mode=NEW.mode AND e.email=NEW.email AND e.asset=NEW.asset AND o.status='paid'
)
BEGIN SELECT RAISE(ABORT,'store_asset_already_owned'); END;
