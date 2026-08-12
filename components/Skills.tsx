"use client";

const skillGroups = [
  {
    category: "Frontend",
    skills: ["Angular", "Vue 3", "Ionic", "React", "Next.js", "Flutter", "React Native", "TypeScript",
       "Tailwind CSS", "HTML", "Shopify (Liquid, theme customization)", "CSS", "JavaScript", 
       "Responsive Design", "Accessibility (WCAG 2.1)", "Cross-Browser Compatibility", 
       "Performance Optimization", "Apollo Client", "GraphQL"],
  },
  {
    category: "Backend",
    skills: ["REST APIs", "PHP", "Laravel", "Node.js", "Express", "GraphQL", "Apollo Server", 
      "JWT Authentication", "Serverless Functions"],
  },
  {
    category: "Technical SEO",
    skills: ["Sitemap/robots.txt Architecture", "Canonical Tags", "JSON-LD Structured Data", 
      "Core Web Vitals", "Programmatic/Dynamic Page Generation", "Google Search Console", 
      "Rich Results Test", "PageSpeed Insights", "Lighthouse Audits", "SEO Audits"],
  },
  {
    category: "Database",
    skills: ["MySQL", "MongoDB", "PostgreSQL", "Prisma", "Neon (serverless PostgreSQL)"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "Husky (pre-commit hooks)", "Azure DevOps (CI/CD pipelines)", "VS Code",
              "Hostinger", "Vercel", "Pusher", "Laravel Echo", "JWT", "Render"],
  },
  {
    category: "Mapping/Visualization",
    skills: ["CSS", "ArcGIS", "Maps", "SDK for JS", "Chart.js"],
  },
  {
    category: "Testing",
    skills: ["Jest", "Supertest (integration)", "Playwright (E2E)", "Vitest", "Testing Library (React)"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: "6rem 2rem",
        backgroundColor: "var(--bg-secondary)",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
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
          02. Skills
        </p>

        <h2
          style={{
            fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
            fontWeight: 700,
            letterSpacing: "-1px",
            marginBottom: "3rem",
          }}
        >
          Tech Stack
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {skillGroups.map((group) => (
            <div
              key={group.category}
              style={{
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                padding: "1.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "0.8rem",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  marginBottom: "1rem",
                  fontFamily: "var(--font-geist-mono)",
                }}
              >
                {group.category}
              </h3>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    style={{
                      color: "var(--text-muted)",
                      fontSize: "0.95rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <span style={{ color: "var(--accent)", fontSize: "0.7rem" }}>▸</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}