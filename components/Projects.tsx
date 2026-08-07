"use client";

const projects = [
  {
    title: "PediaLink",
    description:
      "A Progressive Web App for pediatric health management — built as my capstone project and deployed live. Enables parents to book appointments, track vaccinations, and message their pediatrician in real time. Built with Angular PWA, Laravel, and MySQL, hosted on Hostinger.",
    tags: ["Angular PWA", "Laravel", "MySQL", "Hostinger", "Vercel", "Pusher", "Laravel Echo"],
    link: "https://pedialink.site",
    vercelLink: "https://pedia-link.vercel.app",
    github: "https://github.com/alexiseluzon/PediaEaseFrontend",
    featured: true,
  },
  {
    title: "StaySwift",
    description:
      "A hotel reservation system for browsing rooms, managing bookings, and handling reservation workflows. Built with CSS, JS, Laravel, and MySQL, hosted on Hostinger.",
    tags: ["CSS", "JS", "Laravel", "MySQL", "Hostinger"],
    link: "https://stayswift.pedialink.site",
    github: "https://github.com/alexiseluzon/LaravelLuminaries-StaySwift-Hotel-Reservation-Application",
    featured: false,
  },
  {
    title: "TaskFlow",
    description:
      "A full-stack task and project management app built to match MERN job requirements. Features JWT authentication with role-based authorization, RESTful API design, MongoDB with compound indexing, pagination, centralized error handling, and a responsive React dashboard. Includes unit and component tests (Vitest, Testing Library). Deployed serverless on Vercel with MongoDB Atlas.",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "Vitest", "Vercel"],
    link: "https://frontendtaskflow.vercel.app",
    github: "https://github.com/alexiseluzon/taskflow-frontend",
    featured: false,
  },
  {
    title: "WellData",
    description:
      "A public-facing data exploration dashboard consuming a live ArcGIS REST FeatureServer. Features ArcGIS Maps SDK integration with dynamic query-builder filters, a multi-series Chart.js visualization, CSV/JSON export, and WCAG 2.1 AA accessibility compliance verified with automated axe-core scanning. Core logic covered by 17 Jest unit tests.",
    tags: ["ArcGIS Maps SDK", "Chart.js", "Jest", "axe-core", "WCAG 2.1 AA"],
    link: "https://welldata.vercel.app",
    github: "https://github.com/alexiseluzon/Regional-Wells-Data-Dashboard",
    featured: false,
  },
  {
    title: "CleanCo — Programmatic SEO Demo",
    description:
      "A Next.js programmatic SEO system generating 60+ indexable location pages (state → city hierarchy) from a single data source. Includes auto-generated sitemap.xml, canonical tags, per-page LocalBusiness JSON-LD, and internal linking architecture — built to solve real indexing/crawlability problems at scale.",
    tags: ["Next.js", "TypeScript", "Technical SEO", "JSON-LD", "Sitemap", "SSG"],
    caseStudyLink: "/case-studies/cleanco-seo",
    link: "https://cleanco-programmaticseo.vercel.app",
    github: "https://github.com/alexiseluzon/Programmatic-SEO-Demo",
    featured: false,
  },
  {
    title: "PageSpeed",
    description:
      "A before/after case study demonstrating Core Web Vitals and technical SEO optimization. Fixed a deliberately unoptimized site: reduced image payload 99% (48MB→~500KB) via WebP conversion and responsive srcset delivery, deferred render-blocking JS/CSS, removed unused dependencies, and corrected invalid JSON-LD Organization schema to pass Google's Rich Results Test. Mobile Performance 64→90, Desktop Performance 65→99, SEO 82→100 (PageSpeed Insights).",
    tags: ["Core Web Vitals", "JSON-LD", "WebP", "PageSpeed Insights", "Technical SEO"],
    caseStudyLink: "/case-studies/pagespeed",
    link: "https://pagespeed-demo.vercel.app",
    github: "https://github.com/alexiseluzon/PageSpeed-Demo",
    featured: false,
  },
  {
    title: "AssetTrack",
    description:
      "A full-stack inventory management system for tracking items, borrowed items, and damaged goods across school levels. Features a dashboard with overdue monitoring, Excel report generation, and full item lifecycle management — from borrowing and returns to damage reporting and repair tracking. Built with Laravel, Vue and Inertia.js",
    tags: ["Laravel", "Vue", "Inertia.js", "MySQL"],
    link: "https://inventory-laravel-inertia.pedialink.site",
    github: "https://github.com/alexiseluzon/Inventory-Laravel-Inertia",
    featured: false,
  },
  {
    title: "TestPipe",
    description:
      "A working example of a full testing pipeline: unit tests (Jest), integration tests (Supertest) against a live Express app, and E2E tests (Playwright) driving a real browser. Husky pre-commit hooks block bad commits locally, and an Azure DevOps pipeline runs the full suite on every push, gating deployment on passing tests. Verified live by intentionally breaking a function and confirming Husky rejected the commit.",
    tags: ["Jest", "Supertest", "Playwright", "Husky", "Azure DevOps", "CI/CD"],
    link: null,
    // link: "https://testpipe.vercel.app",
    github: "https://github.com/alexiseluzon/Testing-and-CI",
    featured: false,
  },
  {
    title: "BundleDemo",
    description:
      "A Shopify practice project built to demonstrate theme customization and offer-building skills. Includes a custom Liquid section for trust badges and a 'Buy 2 Get 1 Free' bundle page using the Shopify AJAX Cart API. (password: bundledemo)",
    tags: ["Shopify", "Liquid", "JavaScript"],
    link: "https://demo-td4j8bty.myshopify.com",
    github: null,
    featured: false,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      style={{ padding: "6rem 2rem", maxWidth: "900px", margin: "0 auto" }}
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
        03. Projects
      </p>
      <h2
        style={{
          fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
          fontWeight: 700,
          letterSpacing: "-1px",
          marginBottom: "3rem",
        }}
      >
        What I&apos;ve Built
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {projects.map((project, i) => (
          <div
            key={i}
            style={{
              backgroundColor: "var(--bg-card)",
              border: project.featured
                ? "1px solid var(--accent)"
                : "1px solid var(--border)",
              borderRadius: "8px",
              padding: "1.75rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              opacity: project.featured ? 1 : 0.5,
              position: "relative",
              transition: "border-color 0.2s, opacity 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.opacity = "1";
              if (!project.featured)
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "var(--accent)";
            }}
            onMouseLeave={(e) => {
              if (!project.featured)
                (e.currentTarget as HTMLDivElement).style.opacity = "0.5";
              if (!project.featured)
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "var(--border)";
            }}
          >
            {project.featured && (
              <span
                style={{
                  position: "absolute",
                  top: "-12px",
                  left: "1.25rem",
                  backgroundColor: "var(--accent)",
                  color: "#000",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  padding: "2px 10px",
                  borderRadius: "20px",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                }}
              >
                Featured
              </span>
            )}

            <h3 style={{ fontSize: "1.1rem", fontWeight: 600 }}>
              {project.title}
            </h3>

            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.7 }}>
              {project.description}
            </p>

            {project.tags.length > 0 && (
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "0.72rem",
                      color: "var(--accent)",
                      backgroundColor: "var(--accent-dim)",
                      padding: "2px 10px",
                      borderRadius: "4px",
                      fontFamily: "var(--font-geist-mono)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            {project.caseStudyLink && (
              <a
                href={project.caseStudyLink}
                style={{
                  marginTop: "auto",
                  color: "var(--accent)",
                  fontSize: "0.85rem",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                }}
              >
                View Case Study ↗
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginTop: "auto",
                  color: "var(--accent)",
                  fontSize: "0.85rem",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                }}
              >
                Visit Live Site ↗
              </a>
            )}
            {project.vercelLink && (
              <a
                href={project.vercelLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "var(--accent)",
                  fontSize: "0.85rem",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                }}
              >
                Visit on Vercel ↗
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "var(--text-muted)",
                  fontSize: "0.85rem",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                }}
              >
                Request access on GitHub ↗
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}