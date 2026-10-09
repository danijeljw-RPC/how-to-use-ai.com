CREATE TABLE newsletter_signups (
  id TEXT PRIMARY KEY,
  email TEXT NOT NULL,
  consent_version TEXT NOT NULL,
  source_page TEXT NOT NULL,
  created_at TEXT NOT NULL,
  request_country TEXT,
  user_agent TEXT
);

CREATE INDEX newsletter_signups_created_at_idx ON newsletter_signups (created_at);

CREATE TABLE contact_messages (
  id TEXT PRIMARY KEY,
  name TEXT,
  email TEXT NOT NULL,
  subject TEXT,
  message TEXT NOT NULL,
  created_at TEXT NOT NULL,
  request_country TEXT
);

CREATE INDEX contact_messages_created_at_idx ON contact_messages (created_at);

CREATE TABLE stripe_events (
  stripe_event_id TEXT PRIMARY KEY,
  event_type TEXT NOT NULL,
  received_at TEXT NOT NULL,
  payload_version TEXT NOT NULL
);

CREATE TABLE commerce_orders (
  id TEXT PRIMARY KEY,
  stripe_session_id TEXT UNIQUE NOT NULL,
  stripe_payment_id TEXT,
  email TEXT,
  format TEXT NOT NULL CHECK (format IN ('ebook', 'print')),
  status TEXT NOT NULL,
  fulfilment_state TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);
