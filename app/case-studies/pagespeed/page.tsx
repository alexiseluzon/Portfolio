"use client";

const results = [
  { metric: "Mobile Performance", before: 64, after: 90 },
  { metric: "Desktop Performance", before: 65, after: 99 },
  { metric: "SEO", before: 82, after: 100 },
  { metric: "Accessibility", before: 96, after: 96 },
  { metric: "Best Practices", before: 96, after: 96 },
];

const fixes = [
  "Fixed invalid JSON-LD (Organization schema) — passes Google Rich Results Test with zero errors",
  "Added proper <title> and meta description",
  "Deferred render-blocking JS, removed unused jQuery dependency",
  "Converted images to WebP with responsive srcset — 48MB → ~500KB total payload",
  "Added explicit width/height on all images to prevent layout shift",
  "Lazy-loaded below-the-fold images, eager-loaded the LCP hero image",
  "Removed duplicate nav/footer links and unused CSS rules",
];

export default function PageSpeedCaseStudy() {
  return (
    <section style={{ padding: "6rem 2rem", maxWidth: "900px", margin: "0 auto" }}>
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
          marginBottom: "1rem",
        }}
      >
        PageSpeed Optimization
      </h1>
      <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "3rem" }}>
        A before/after case study: I built a deliberately unoptimized page, then fixed it using the
        same checklist a real client engagement would require — image optimization, render-blocking
        script removal, and valid structured data.{" "}
        <a href="https://pagespeed-demo.vercel.app" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)" }}>
          Live site ↗
        </a>{" "}
        ·{" "}
        <a href="https://github.com/alexiseluzon/PageSpeed-Demo" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)" }}>
          GitHub ↗
        </a>
      </p>

      {/* Results table */}
      <div style={{ marginBottom: "3rem", overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid var(--border)" }}>
              <th style={{ textAlign: "left", padding: "0.75rem 0.5rem", color: "var(--text-muted)" }}>Metric</th>
              <th style={{ textAlign: "center", padding: "0.75rem 0.5rem", color: "var(--text-muted)" }}>Before</th>
              <th style={{ textAlign: "center", padding: "0.75rem 0.5rem", color: "var(--text-muted)" }}>After</th>
            </tr>
          </thead>
          <tbody>
            {results.map((r) => (
              <tr key={r.metric} style={{ borderBottom: "1px solid var(--border)" }}>
                <td style={{ padding: "0.75rem 0.5rem" }}>{r.metric}</td>
                <td style={{ padding: "0.75rem 0.5rem", textAlign: "center", color: "#d97706" }}>{r.before}</td>
                <td style={{ padding: "0.75rem 0.5rem", textAlign: "center", color: "var(--accent)", fontWeight: 700 }}>
                  {r.after}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Screenshots */}
      <h2 style={{ fontSize: "1.3rem", fontWeight: 600, marginBottom: "1.5rem" }}>Mobile</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "3rem" }}>
        <figure style={{ margin: 0 }}>
          <img src="/case-study/mobile-before.jpg" alt="Mobile PageSpeed score before optimization" style={{ width: "100%", borderRadius: "8px", border: "1px solid var(--border)" }} />
          <figcaption style={{ textAlign: "center", fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "0.5rem" }}>Before</figcaption>
        </figure>
        <figure style={{ margin: 0 }}>
          <img src="/case-study/mobile-after.jpg" alt="Mobile PageSpeed score after optimization" style={{ width: "100%", borderRadius: "8px", border: "1px solid var(--accent)" }} />
          <figcaption style={{ textAlign: "center", fontSize: "0.8rem", color: "var(--accent)", marginTop: "0.5rem" }}>After</figcaption>
        </figure>
      </div>

      <h2 style={{ fontSize: "1.3rem", fontWeight: 600, marginBottom: "1.5rem" }}>Desktop</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "3rem" }}>
        <figure style={{ margin: 0 }}>
          <img src="/case-study/desktop-before.jpg" alt="Desktop PageSpeed score before optimization" style={{ width: "100%", borderRadius: "8px", border: "1px solid var(--border)" }} />
          <figcaption style={{ textAlign: "center", fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "0.5rem" }}>Before</figcaption>
        </figure>
        <figure style={{ margin: 0 }}>
          <img src="/case-study/desktop-after.jpg" alt="Desktop PageSpeed score after optimization" style={{ width: "100%", borderRadius: "8px", border: "1px solid var(--accent)" }} />
          <figcaption style={{ textAlign: "center", fontSize: "0.8rem", color: "var(--accent)", marginTop: "0.5rem" }}>After</figcaption>
        </figure>
      </div>

      {/* Fix list */}
      <h2 style={{ fontSize: "1.3rem", fontWeight: 600, marginBottom: "1rem" }}>What I fixed</h2>
      <ul style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.9, paddingLeft: "1.2rem" }}>
        {fixes.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
    </section>
  );
}