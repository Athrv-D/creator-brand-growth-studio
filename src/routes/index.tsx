import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Check, X } from "lucide-react";
import hero  from "@/assets/hero-portrait.png";
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
    if (!parsed.success) return setError(parsed.error.issues[0]?.message ?? "Invalid input");
    setError("");
    setStatus("sending");
    const { error } = await supabase.from("demo_requests").insert(parsed.data);
    if (error) { setStatus("idle"); return setError("Something went wrong. Please try again."); }
    setStatus("done");
  }

  return (
    <main className="bg-background text-foreground">
      <section className="relative flex min-h-svh items-center overflow-hidden">
        <header className="absolute inset-x-0 top-0 z-20">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
            <a href="#" className="flex items-center gap-3 text-sm font-medium tracking-wide text-foreground">
              <span className="flex size-9 items-center justify-center rounded-full border border-primary/50 text-base font-semibold text-primary">A</span>
              <span>Atharv Gupta</span>
            </a>
            <nav aria-label="Main navigation" className="flex items-center gap-5 text-sm">
              <a href="#why" className="text-muted-foreground transition-colors hover:text-primary">Why a website</a>
              <a href="#demo" className="rounded-full border border-primary/50 px-4 py-2 text-primary transition-colors hover:bg-primary hover:text-primary-foreground">Get a demo</a>
            </nav>
          </div>
        </header>
        <img
          src={hero}
          alt="Atharv Gupta — Transform your brand into a thriving business"
          className="hero-image absolute inset-0 h-full w-full object-cover object-[75%_60%] md:object-[50%_60%]"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="absolute inset-0 bg-background/60 md:bg-transparent" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-6xl px-6 py-24 md:py-28">
          <div className="max-w-2xl animate-fade-up">
            <span className="badge">Websites for creators & brands</span>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
              Utilize your <span className="text-primary">fame</span> to grow your business through a website.
            </h1>
            <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
              Turn your audience into customers. We build fast, professional websites that sell your brand products, scale with you, and keep your fans loyal.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#demo" className="btn-primary">Get a free demo</a>
              <a href="#why" className="btn-ghost">See why it works</a>
            </div>
            <div className="mt-14 flex flex-wrap gap-8 md:gap-10">
              {[["4", "Growth benefits"], ["3", "Concerns answered"], ["24h", "Demo turnaround"]].map(([n, l]) => (
                <div key={l}>
                  <p className="text-2xl font-semibold text-primary md:text-3xl">{n}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="mx-auto max-w-6xl scroll-mt-8 px-6 py-24">
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
                {([["business", "Business"], ["personal_brand", "Personal brand"]] as const).map(([v, l]) => (
                  <button type="button" key={v} onClick={() => setForm({ ...form, website_for: v })} className={form.website_for === v ? "choice choice-on" : "choice"}>{l}</button>
                ))}
              </div>
            </div>
            {error && <p className="text-sm text-destructive">{error}</p>}
            <button disabled={status === "sending"} className="btn-primary w-full">{status === "sending" ? "Sending..." : "Send me the demo"}</button>
          </form>
        )}
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-7 text-center text-xs text-muted-foreground sm:flex-row sm:text-left">
          <a href="#" className="font-medium tracking-wide text-foreground">Atharv Gupta</a>
          <p>© {new Date().getFullYear()} Atharv Gupta. All rights reserved.</p>
          <a href="#demo" className="transition-colors hover:text-primary">Get in touch</a>
        </div>
      </footer>
    </main>
  );
}
