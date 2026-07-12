-- D1 migration: lead metadata storage (optional — enable the LEADS_DB binding
-- in wrangler.jsonc and run: wrangler d1 migrations apply <D1_DATABASE_NAME>)
--
-- Uploaded image binaries live in R2 (LEAD_UPLOADS); this table stores only
-- object references. Retention: delete rows (and matching R2 objects) per the
-- policy documented in README.md.

CREATE TABLE IF NOT EXISTS leads (
  id TEXT PRIMARY KEY,
  created_at TEXT NOT NULL,
  full_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  property_location TEXT NOT NULL,
  city_or_county TEXT NOT NULL,
  approximate_acreage TEXT NOT NULL,
  service_needed TEXT NOT NULL,
  property_condition TEXT NOT NULL,
  intended_use TEXT NOT NULL,
  terrain TEXT NOT NULL,
  equipment_access TEXT NOT NULL,
  preferred_timing TEXT NOT NULL,
  additional_details TEXT NOT NULL,
  upload_references TEXT,          -- JSON array of R2 object keys
  lead_status TEXT NOT NULL DEFAULT 'new',
  source_page TEXT,
  consent_recorded_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads (created_at);
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads (lead_status);
