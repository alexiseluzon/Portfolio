"use client";

const projects = [
  {
    title: "PediaLink",
    description:
      "A Progressive Web App for pediatric health management — built as my capstone project and deployed live. Enables parents to book appointments, track vaccinations, and message their pediatrician in real time. Built with Angular PWA, Laravel, and MySQL, hosted on Hostinger.",
    tags: ["Angular PWA", "Laravel", "MySQL", "Hostinger"],
    link: "https://pedialink.site",
    github: "https://github.com/alexiseluzon/PediaEaseFrontend",
    featured: true,
  },
  {
    title: "Inventory System",
    description:
      "A full-stack inventory management system for tracking items, borrowed items, and damaged items across school levels. Built with Laravel, Inertia.js, and Vue.js.",
    tags: ["Laravel", "Inertia.js", "Vue.js", "MySQL"],
    link: "https://inventory-laravel-inertia.pedialink.site",
    github: "https://github.com/alexiseluzon/Inventory-Laravel-Inertia",
    featured: false,
  },
  // {
  //   title: "Coming Soon",
  //   description: "Next project in progress. Check back soon.",
  //   tags: [],
  //   link: null,
  //   featured: false,
  // },
  // {
  //   title: "Coming Soon",
  //   description: "Next project in progress. Check back soon.",
  //   tags: [],
  //   link: null,
  //   featured: false,
  // },
  // {
  //   title: "Coming Soon",
  //   description: "Next project in progress. Check back soon.",
  //   tags: [],
  //   link: null,
  //   featured: false,
  // },
  // {
  //   title: "Coming Soon",
  //   description: "Next project in progress. Check back soon.",
  //   tags: [],
  //   link: null,
  //   featured: false,
  // },
  // {
  //   title: "Coming Soon",
  //   description: "Next project in progress. Check back soon.",
  //   tags: [],
  //   link: null,
  //   featured: false,
  // },
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
                View on GitHub ↗
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}