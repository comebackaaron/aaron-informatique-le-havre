/*
# Create devis table for quote requests

1. New Tables
- `devis`
- `id` (uuid, primary key, auto-generated)
- `nom` (text, customer name, required)
- `contact` (text, phone or email, required)
- `message` (text, description of the issue, required)
- `created_at` (timestamp, defaults to now)
2. Security
- Enable RLS on `devis`.
- Grant INSERT to `anon` + `authenticated` so the public contact form can submit quote requests.
- No SELECT/UPDATE/DELETE for anon — only the owner (via dashboard/service role) can read them.
- Allow anon + authenticated INSERT because the contact form is public (no sign-in).
*/

CREATE TABLE IF NOT EXISTS devis (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nom text NOT NULL,
  contact text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE devis ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON devis TO anon, authenticated;

DROP POLICY IF EXISTS "anon_insert_devis" ON devis;
CREATE POLICY "anon_insert_devis"
ON devis FOR INSERT
TO anon, authenticated
WITH CHECK (true);
