"use client";

export default function About() {
  <style>{`
    @media (max-width: 640px) {
      .about-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
    }
  `}</style>
  return (
    <section
      id="about"
      style={{
        padding: "6rem 2rem",
        maxWidth: "900px",
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
        01. About Me
      </p>

      <h2
        style={{
          fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
          fontWeight: 700,
          letterSpacing: "-1px",
          marginBottom: "2.5rem",
        }}
      >
        Who I Am
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "3fr 2fr",
          gap: "4rem",
          alignItems: "start",
        }}
        className="about-grid"
      >
        <div
          style={{
            color: "var(--text-muted)",
            lineHeight: 1.9,
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
          }}
        >
          <p>
            I&apos;m a Full Stack Developer based in the Philippines, passionate
            about crafting end-to-end web solutions that are fast, scalable, and
            maintainable. I work across the MERN and Laravel stacks — from pixel-perfect UIs to
            efficient server-side architecture.
          </p>
          <p>
            My capstone project,{" "}
            <a
              href="https://pedialink.site"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--accent)", textDecoration: "none" }}
            >
              PediaLink
            </a>
            , is a live web application built and deployed end-to-end. I&apos;m
            continuously growing my skills and taking on new challenges.
          </p>
          <p>
            When I&apos;m not coding, I&apos;m exploring new technologies,
            contributing to projects, or leveling up my problem-solving skills.
          </p>
        </div>

        {/* Quick stats */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
          }}
        >
          {[
            // { label: "Projects", value: "7+" },
            { label: "Role", value: "Full Stack Dev" },
            { label: "Status", value: "Open to Work" },
            { label: "Location", value: "Philippines" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                borderLeft: "2px solid var(--accent)",
                paddingLeft: "1rem",
              }}
            >
              <p
                style={{
                  fontSize: "0.75rem",
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  marginBottom: "0.25rem",
                }}
              >
                {stat.label}
              </p>
              <p style={{ fontSize: "1rem", fontWeight: 600 }}>{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}