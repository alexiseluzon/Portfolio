"use client";

const proofLinks = [
  {
    label: "Live Sitemap (69 URLs)",
    description: "Auto-generated sitemap covering all state and city pages.",
    href: "https://cleanco-programmaticseo.vercel.app/sitemap.xml",
  },
  {
    label: "Robots.txt",
    description: "Crawl rules with sitemap reference for search engines.",
    href: "https://cleanco-programmaticseo.vercel.app/robots.txt",
  },
  {
    label: "Google Rich Results Test",
    description: "Validates LocalBusiness JSON-LD structured data on a live city page.",
    href: "https://search.google.com/test/rich-results/result?id=EQNeFHZUAaHWHHUlL2wgmg",
  },
  {
    label: "PageSpeed Insights (Mobile)",
    description: "Core Web Vitals audit on a live location page.",
    href: "https://pagespeed.web.dev/analysis/https-cleanco-programmaticseo-vercel-app-locations-california-los-angeles/62j7ukerox?form_factor=mobile",
  },
];

const highlights = [
  "60+ city pages across 8 states, generated from a single data source via generateStaticParams (SSG)",
  "Auto-generated sitemap.xml and robots.txt — no manual URL maintenance as data grows",
  "Unique canonical tag, title, and meta description per page — prevents duplicate-content penalties",
  "Per-page LocalBusiness JSON-LD structured data, validated against Google's Rich Results Test",
  "Internal linking hierarchy (home → state hub → city) supporting crawlability at scale",
];

export default function CleanCoCaseStudy() {
  return (
    <section
      style={{
        padding: "6rem 2rem",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-geist-mono)",
          color: "var(--accent)",
          fontSize: "0.85rem",
          letterSpacing: "2px",
          marginBottom: "0.75rem",
          textTransform: "uppercase",
        }}
      >
        Case Study
      </p>

      <h1
        style={{
          fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
          fontWeight: 700,
          letterSpacing: "-1px",
          marginBottom: "1.5rem",
        }}
      >
        CleanCo — Programmatic SEO at Scale
      </h1>

      <p
        style={{
          color: "var(--text-muted)",
          lineHeight: 1.9,
          marginBottom: "2.5rem",
        }}
      >
        A Next.js demo built to solve a real-world technical SEO problem:
        generating thousands of location-based landing pages that stay
        indexable, unique, and crawlable as the dataset scales — without
        manual page-by-page maintenance.
      </p>

      <h2
        style={{
          fontSize: "1.2rem",
          fontWeight: 600,
          marginBottom: "1.25rem",
        }}
      >
        What it demonstrates
      </h2>

      <ul
        style={{
          listStyle: "none",
          display: "flex",
          flexDirection: "column",
          gap: "0.9rem",
          marginBottom: "3rem",
        }}
      >
        {highlights.map((item) => (
          <li
            key={item}
            style={{
              color: "var(--text-muted)",
              fontSize: "0.95rem",
              lineHeight: 1.7,
              display: "flex",
              gap: "0.6rem",
            }}
          >
            <span style={{ color: "var(--accent)", flexShrink: 0 }}>▸</span>
            {item}
          </li>
        ))}
      </ul>

      <h2
        style={{
          fontSize: "1.2rem",
          fontWeight: 600,
          marginBottom: "1.25rem",
        }}
      >
        Verification &amp; Proof
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          marginBottom: "3rem",
        }}
      >
        {proofLinks.map((item) => (
          <a
            key={item.href}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              padding: "1.25rem 1.5rem",
              textDecoration: "none",
              transition: "border-color 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor =
                "var(--accent)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor =
                "var(--border)";
            }}
          >
            <p
              style={{
                color: "var(--accent)",
                fontSize: "0.95rem",
                fontWeight: 600,
                marginBottom: "0.3rem",
              }}
            >
              {item.label} ↗
            </p>
            <p style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>
              {item.description}
            </p>
          </a>
        ))}
      </div>

      <a
        href="https://cleanco-programmaticseo.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: "var(--accent)",
          fontSize: "0.9rem",
          textDecoration: "none",
        }}
      >
        ← Visit Live Site
      </a>
    </section>
  );
}