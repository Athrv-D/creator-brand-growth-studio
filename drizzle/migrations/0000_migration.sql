CREATE TABLE public.demo_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 100),
  content_category text NOT NULL CHECK (char_length(content_category) <= 50),
  email text NOT NULL CHECK (char_length(email) <= 255),
  website_for text NOT NULL CHECK (website_for IN ('business','personal_brand')),
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.demo_requests TO anon, authenticated;
GRANT ALL ON public.demo_requests TO service_role;
ALTER TABLE public.demo_requests ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit a demo request" ON public.demo_requests FOR INSERT TO anon, authenticated WITH CHECK (true);