-- Additive: old commerce_orders/stripe_events remain intact.
CREATE TABLE store_auth (
  token_hash TEXT PRIMARY KEY,
  mode TEXT NOT NULL CHECK(mode IN ('test','live')),
  email TEXT NOT NULL,
  kind TEXT NOT NULL CHECK(kind IN ('login','session')),
  expires_at INTEGER NOT NULL,
  used_at INTEGER,
  created_at INTEGER NOT NULL
);
CREATE INDEX store_auth_email ON store_auth(mode,email,kind,created_at);
CREATE TABLE store_attempts (
  id TEXT PRIMARY KEY, mode TEXT NOT NULL CHECK(mode IN ('test','live')),
  email TEXT NOT NULL, format TEXT NOT NULL CHECK(format IN ('pdf','epub','bundle','signed')),
  currency TEXT NOT NULL, amount INTEGER NOT NULL, product_id TEXT NOT NULL,
  country TEXT, shipping_amount INTEGER NOT NULL DEFAULT 0,
  session_id TEXT UNIQUE, state TEXT NOT NULL DEFAULT 'creating',
  expires_at INTEGER NOT NULL, created_at INTEGER NOT NULL, next_check INTEGER NOT NULL DEFAULT 0
);
CREATE TABLE store_purchase_locks (
  mode TEXT NOT NULL, email TEXT NOT NULL, asset TEXT NOT NULL,
  attempt_id TEXT NOT NULL REFERENCES store_attempts(id),
  PRIMARY KEY(mode,email,asset)
);
CREATE TABLE store_orders (
  session_id TEXT PRIMARY KEY, mode TEXT NOT NULL,
  email TEXT NOT NULL, format TEXT NOT NULL, payment_id TEXT,
  amount INTEGER NOT NULL, currency TEXT NOT NULL,
  status TEXT NOT NULL, shipping_json TEXT,
  created_at INTEGER NOT NULL
);
CREATE INDEX store_orders_payment ON store_orders(mode,payment_id);
CREATE TABLE store_entitlements (
  mode TEXT NOT NULL, email TEXT NOT NULL, asset TEXT NOT NULL,
  order_id TEXT NOT NULL REFERENCES store_orders(session_id),
  PRIMARY KEY(mode,email,asset,order_id)
);
CREATE TABLE store_outbox (
  id TEXT PRIMARY KEY, mode TEXT NOT NULL, email TEXT NOT NULL,
  kind TEXT NOT NULL CHECK(kind IN ('access','order')),
  order_id TEXT, state TEXT NOT NULL DEFAULT 'pending',
  attempts INTEGER NOT NULL DEFAULT 0, next_at INTEGER NOT NULL,
  lease_id TEXT, lease_until INTEGER, sent_at INTEGER,
  created_at INTEGER NOT NULL
);
CREATE UNIQUE INDEX store_outbox_order ON store_outbox(mode,order_id,kind) WHERE order_id IS NOT NULL;
CREATE TABLE store_events (id TEXT PRIMARY KEY, mode TEXT NOT NULL, type TEXT NOT NULL, created_at INTEGER NOT NULL);
-- A reversal tombstone also protects against refund/dispute arriving before checkout's webhook.
CREATE TABLE store_reversals (mode TEXT NOT NULL,payment_id TEXT NOT NULL,reason TEXT NOT NULL,PRIMARY KEY(mode,payment_id));
CREATE TABLE store_rate_limits (key TEXT PRIMARY KEY,window_start INTEGER NOT NULL,count INTEGER NOT NULL);
-- Ownership and reservation checks must be in one transaction, including webhook races.
CREATE TRIGGER store_lock_owned BEFORE INSERT ON store_purchase_locks
WHEN EXISTS (
  SELECT 1 FROM store_entitlements e JOIN store_orders o ON o.session_id=e.order_id AND o.mode=e.mode
  WHERE e.mode=NEW.mode AND e.email=NEW.email AND e.asset=NEW.asset AND o.status='paid'
)
BEGIN SELECT RAISE(ABORT,'store_asset_already_owned'); END;
CREATE INDEX store_outbox_due ON store_outbox(mode,state,next_at,created_at);
CREATE INDEX store_attempts_due ON store_attempts(mode,state,next_check,expires_at);
