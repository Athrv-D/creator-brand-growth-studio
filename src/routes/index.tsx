import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Detailed Benefits of a Website for Your Business — Atharv Gupta" },
      {
        name: "description",
        content:
          "Research-backed benefits of creating a website for your business or brand: credibility, accessibility, reach, brand awareness, leads, and engagement.",
      },
      {
        property: "og:title",
        content: "Detailed Benefits of a Website for Your Business — Atharv Gupta",
      },
      {
        property: "og:description",
        content: "Research-backed benefits of creating a website for your business or brand.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const sections = [
  {
    title: "Professionality & Credibility",
    articles: [
      "https://share.google/06wlmzsAE3FWJhFDf",
      "https://share.google/5m5mSUHaDMXrklb8E",
      "https://share.google/rzsyqC6gdHKzF7qLJ",
    ],
    points: [
      "75% of consumers judge a company's credibility based on its website design alone, according to Stanford Web Credibility Research.",
      "56% of consumers explicitly state they will not trust a business that does not have a website.",
      "80% of internet users are more likely to buy from a business that has a professional website.",
      "94% of first impressions are design-related, with users forming an opinion about a business's trustworthiness in just 0.05 seconds.",
    ],
  },
  {
    title: "Accessibility (Availability & Purchasing Access)",
    articles: [
      "https://share.google/uZA5TMAbQTwDZxkOl",
      "https://share.google/kENFrzWF2JBpttmfe",
      "https://share.google/KMYPGUaSicXHUNqnS",
    ],
    points: [
      "81% to 91% of shoppers conduct online research before making a purchase or visiting a physical store — meaning without a website, a business is effectively inaccessible to roughly 8 out of 10 modern buyers.",
      "61% of users are more likely to buy from a brand if its website is mobile-friendly, directly expanding accessibility to smartphone users.",
      "23% increase in revenue occurs on average when small businesses add 24/7 online booking or scheduling tools to their websites.",
    ],
  },
  {
    title: "Reach & Overall Growth",
    articles: ["https://share.google/IvhZSryCoLACFwlIu", "https://share.google/ajOCZPZrUPNYOad06"],
    points: [
      "Businesses with a website grow 15% to 50% more than comparable offline enterprises.",
      "A joint Google and Deloitte study of over 4,500 small businesses found that digitally connected businesses with websites are 2.8 times (180%) more likely to experience revenue growth than those without.",
      "68.7% of all search clicks go to the top three organic search results, showing how a search-optimized website drastically multiplies organic reach compared to relying solely on word-of-mouth.",
    ],
  },
  {
    title: "Brand Awareness",
    articles: [
      "https://share.google/A7waknz5NjO4aApsf",
      "https://share.google/eZV0CoRwMrnXExdHq",
      "https://share.google/sL5K0MZazi01IGanZ",
    ],
    points: [
      "Search visibility and digital campaigns tied to a website can increase brand awareness by up to 80%.",
      "Empirical marketing research confirms a statistically significant increase in top-of-mind awareness and brand recall when organizations actively use a website alongside digital promotion.",
    ],
  },
  {
    title: "Connections & Lead Generation",
    articles: ["https://share.google/ZeKHoIDPT2NNLw04i"],
    points: [
      "90% of marketers rely on their website as a primary tool for generating inbound leads and business connections.",
      "Businesses that maintain an active blog on their website generate 3 times (200%) more leads than those without one.",
      "Companies with 30 or more landing pages on their website generate 7 times (600%) more leads than businesses with fewer than 10 pages.",
    ],
  },
  {
    title: "Followers & Audience Engagement",
    articles: ["https://share.google/oVIvSgTb8JRehdo4o", "https://share.google/D5oCGhPJXzQWJy0jL"],
    points: [
      "Research on digital brand ecosystems shows that combining website content with social media channels increases overall audience engagement rates by up to 45%.",
      'Important caveat from academic studies: a meta-analysis in the Journal of Marketing notes a "ceiling effect" — new or smaller brands see much higher percentage jumps in follower growth and engagement after launching digital assets because they start from a low baseline, whereas large established brands see smaller percentage gains.',
    ],
  },
];

const summary: [string, string][] = [
  ["Professionality", "75% judge credibility by website; 56% distrust businesses without one."],
  ["Accessibility", "Reaches the 81%–91% of shoppers who research online before buying."],
  ["Reach", "15%–50% higher business growth; 2.8x more likely to grow revenue."],
  ["Brand Awareness", "Up to 80% lift in awareness via search visibility and digital presence."],
  ["Connections / Leads", "3x more leads with a website blog; 7x more leads with 30+ pages."],
  [
    "Followers / Engagement",
    "Up to 45% increase in engagement when integrating web and social content.",
  ],
];

function Index() {
  return (
    <main className="flex min-h-svh flex-col bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <span className="text-lg font-semibold tracking-tight">
            Atharv <span className="text-primary">Gupta</span>
          </span>
          <span className="badge">Websites for creators & brands</span>
        </div>
      </header>

      <article className="mx-auto w-full max-w-4xl flex-1 px-6 py-16 md:py-24">
        <p className="eyebrow">Research-backed</p>
        <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          Detailed Benefits of Creating a Website for Your{" "}
          <span className="text-primary">Business / Brand</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
          Existing marketing research, consumer behavior studies, and small business surveys provide
          clear benchmarks for how launching a website changes these metrics. Because a website
          moves a business from offline or social-only visibility to a 24/7 searchable asset,
          studies show measurable percentage shifts across each category:
        </p>

        <div className="mt-14 space-y-6">
          {sections.map((s, i) => (
            <section key={s.title} className="panel">
              <div className="flex items-center gap-4">
                <span className="num">{i + 1}</span>
                <h2 className="text-xl font-medium md:text-2xl">{s.title}</h2>
              </div>
              <ul className="mt-6 space-y-4">
                {s.points.map((p, pointIndex) => (
                  <li key={p} className="flex gap-3 text-muted-foreground">
                    <span
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                      aria-hidden="true"
                    />
                    <span className="min-w-0">
                      {p}{" "}
                      {pointIndex < s.articles.length && <span className="text-sm">
                        Further reading:{" "}
                        {s.articles.map((url, articleIndex) => (
                          articleIndex % s.points.length === pointIndex &&
                          <span key={url}>
                            {articleIndex >= s.points.length ? ", " : ""}
                            <a
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`${s.title}: article ${articleIndex + 1} (opens in a new tab)`}
                              className="text-primary underline underline-offset-4 hover:text-primary/80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                            >
                              Article {articleIndex + 1}
                            </a>
                          </span>
                        ))}
                      </span>}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <section className="mt-14">
          <h2 className="text-2xl font-medium md:text-3xl">Summary Table of Research Benchmarks</h2>
          <div className="panel mt-6 overflow-x-auto p-0">
            <table className="w-full min-w-[32rem] text-left text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-6 py-4 font-medium text-primary">Aspect</th>
                  <th className="px-6 py-4 font-medium text-primary">
                    Key Research Finding / Benchmark
                  </th>
                </tr>
              </thead>
              <tbody>
                {summary.map(([aspect, finding]) => (
                  <tr key={aspect} className="border-b border-border last:border-0">
                    <td className="px-6 py-4 font-medium">{aspect}</td>
                    <td className="px-6 py-4 text-muted-foreground">{finding}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <section className="mt-14 border-t border-border pt-10">
          <h2 className="text-2xl font-medium md:text-3xl">Further Reading</h2>
          <p className="mt-4 text-muted-foreground">
            You can also read the following articles for further understanding of the research
            behind these percentages.
          </p>
          <div className="mt-8 space-y-6">
            {sections.map((section) => (
              <div key={section.title}>
                <h3 className="font-medium">{section.title}</h3>
                <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-3 text-sm">
                  {section.articles.map((url, articleIndex) => (
                    <li key={url}>
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${section.title}: article ${articleIndex + 1} (opens in a new tab)`}
                        className="text-primary underline underline-offset-4 hover:text-primary/80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                      >
                        Article {articleIndex + 1}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </article>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-6 text-sm text-muted-foreground">
          <span>Atharv Gupta — Websites for creators & brands</span>
          <span>Turn your fame into a thriving business.</span>
        </div>
      </footer>
    </main>
  );
}
