"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 2rem",
        maxWidth: "900px",
        margin: "0 auto",
        position: "relative",
      }}
    >
      {/* Grid background accent */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          opacity: 0.3,
          pointerEvents: "none",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 50%, black 0%, transparent 100%)",
        }}
      />

      <p
        style={{
          fontFamily: "var(--font-geist-mono)",
          color: "var(--accent)",
          fontSize: "0.9rem",
          letterSpacing: "2px",
          marginBottom: "1.5rem",
          textTransform: "uppercase",
        }}
      >
        {"<"} Hello, world! {"/>"}
      </p>

      <h1
        style={{
          fontSize: "clamp(2.5rem, 8vw, 5rem)",
          fontWeight: 700,
          lineHeight: 1.1,
          marginBottom: "1rem",
          letterSpacing: "-2px",
        }}
      >
        Alexis E.{" "}
        <span
          style={{
            color: "transparent",
            WebkitTextStroke: "1px var(--accent)",
          }}
        >
          Luzon
        </span>
      </h1>

      <h2
        style={{
          fontSize: "clamp(1.2rem, 3vw, 1.6rem)",
          fontWeight: 400,
          color: "var(--text-muted)",
          marginBottom: "2rem",
        }}
      >
        Full Stack Developer
      </h2>

      <p
        style={{
          maxWidth: "520px",
          color: "var(--text-muted)",
          fontSize: "1rem",
          lineHeight: 1.8,
          marginBottom: "2.5rem",
        }}
      >
        I build performant, scalable web applications — from clean frontends to
        robust backends. Currently open to new opportunities.
      </p>

      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <a
          href="#projects"
          style={{
            padding: "0.75rem 1.75rem",
            backgroundColor: "var(--accent)",
            color: "#000",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "0.9rem",
            borderRadius: "4px",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          View Projects
        </a>
        <a
          href="#contact"
          style={{
            padding: "0.75rem 1.75rem",
            border: "1px solid var(--border)",
            color: "var(--text-primary)",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "0.9rem",
            borderRadius: "4px",
            transition: "border-color 0.2s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.borderColor = "var(--accent)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.borderColor = "var(--border)")
          }
        >
          Contact Me
        </a>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          color: "var(--text-muted)",
          fontSize: "0.75rem",
          letterSpacing: "1px",
        }}
      >
        <span>SCROLL</span>
        <div
          style={{
            width: "1px",
            height: "40px",
            background:
              "linear-gradient(to bottom, var(--accent), transparent)",
          }}
        />
      </div>
    </section>
  );
}