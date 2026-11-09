import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Check, X } from "lucide-react";
import hero from "@/assets/hero-portrait.png.asset.json";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Atharv Gupta — Websites for Creators & Brands" },
      { name: "description", content: "Utilize your fame to grow your business through a website. Get a free demo of our work." },
      { property: "og:title", content: "Atharv Gupta — Websites for Creators & Brands" },
      { property: "og:description", content: "Turn your fame into a thriving business with a professional website." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const pros = [
  "Lets you sell your brand products directly",
  "Helps grow and scale your business while keeping a loyal fanbase",
  "Separates your daily content from your business content",
  "Makes your brand feel professional and authentic",
];
const cons = [
  ["Maintenance cost", "Negligible compared to future growth and scalability"],
  ["Takes a little time to manage", "But we will help and guide you"],
  ["May feel like a distraction", "You'll be thankful in this connected digital world"],
];
const categories = ["Entertainment", "Lifestyle", "Fashion", "Fitness", "Food", "Travel", "Beauty", "Gaming", "Tech", "Education", "Music", "Finance", "Comedy", "Other"];

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  content_category: z.string().min(1, "Choose a category").max(50),
  email: z.string().trim().email("Enter a valid email").max(255),
  website_for: z.enum(["business", "personal_brand"]),
});

function Index() {
  const [form, setForm] = useState({ name: "", content_category: "", email: "", website_for: "business" });
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [error, setError] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) return setError(parsed.error.issues[0].message);
    setError("");
    setStatus("sending");
    const { error } = await supabase.from("demo_requests").insert(parsed.data);
    if (error) { setStatus("idle"); return setError("Something went wrong. Please try again."); }
    setStatus("done");
  }

  return (
    <main className="bg-background text-foreground">
      <section className="relative min-h-screen overflow-hidden">
        <img src={hero.url} alt="Atharv Gupta" className="absolute inset-0 h-full w-full object-cover object-right" />
        <div className="relative flex min-h-screen items-end px-6 pb-16 md:px-16">
          <div className="max-w-2xl animate-fade-up">
            <h2 className="text-2xl font-light leading-snug md:text-4xl">
              Utilize your <span className="text-primary">fame</span> to grow your business through a website.
            </h2>
            <a href="#demo" className="btn-primary mt-8 inline-block">Get a free demo</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="eyebrow">Why a website</p>
        <h2 className="mt-3 text-3xl font-medium md:text-5xl">The honest pros & cons</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="panel">
            <h3 className="text-xl font-medium text-primary">Pros</h3>
            <ul className="mt-6 space-y-5">
              {pros.map((p, i) => (
                <li key={p} className="flex gap-4">
                  <span className="num">{i + 1}</span>
                  <span className="flex items-start gap-2"><Check className="mt-1 size-4 shrink-0 text-primary" />{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="panel">
            <h3 className="text-xl font-medium text-muted-foreground">Cons</h3>
            <ul className="mt-6 space-y-5">
              {cons.map(([c, r], i) => (
                <li key={c} className="flex gap-4">
                  <span className="num">{i + 1}</span>
                  <div>
                    <p className="flex items-center gap-2"><X className="size-4 text-muted-foreground" />{c}</p>
                    <p className="mt-1 text-sm text-muted-foreground">→ {r}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="demo" className="mx-auto max-w-xl px-6 pb-28">
        <p className="eyebrow">Free demo</p>
        <h2 className="mt-3 text-3xl font-medium md:text-4xl">Fill this to get our demo work in your email</h2>
        {status === "done" ? (
          <div className="panel mt-10 text-center">
            <p className="text-xl">Thank you, {form.name}!</p>
            <p className="mt-2 text-muted-foreground">We've received your request.</p>
          </div>
        ) : (
          <form onSubmit={submit} className="panel mt-10 space-y-5">
            <label className="block">
              <span className="field-label">Name</span>
              <input className="field" maxLength={100} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            </label>
            <label className="block">
              <span className="field-label">Content category</span>
              <select className="field" value={form.content_category} onChange={(e) => setForm({ ...form, content_category: e.target.value })}>
                <option value="">Select a category</option>
                {categories.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </label>
            <label className="block">
              <span className="field-label">Email</span>
              <input type="email" className="field" maxLength={255} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </label>
            <div>
              <span className="field-label">Website for</span>
              <div className="mt-2 grid grid-cols-2 gap-3">
                {[["business", "Business"], ["personal_brand", "Personal brand"]].map(([v, l]) => (
                  <button type="button" key={v} onClick={() => setForm({ ...form, website_for: v })} className={form.website_for === v ? "choice choice-on" : "choice"}>{l}</button>
                ))}
              </div>
            </div>
            {error && <p className="text-sm text-destructive">{error}</p>}
            <button disabled={status === "sending"} className="btn-primary w-full">{status === "sending" ? "Sending..." : "Send me the demo"}</button>
          </form>
        )}
      </section>
    </main>
  );
}
