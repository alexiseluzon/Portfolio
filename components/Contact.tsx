"use client";

const socials = [
  { label: "Resume", href: "/resume.pdf" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/alexis-luzon-63849238b", icon: "LI" },
  { label: "Email", href: 
    "https://mail.google.com/mail/?view=cm&to=alexiseluzon@gmail.com&su=Hello from your portfolio" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "6rem 2rem 8rem",
        backgroundColor: "var(--bg-secondary)",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.5rem",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-geist-mono)",
            color: "var(--accent)",
            fontSize: "0.85rem",
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          04. Contact
        </p>

        <h2
          style={{
            fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
            fontWeight: 700,
            letterSpacing: "-1px",
          }}
        >
          Get In Touch
        </h2>

        <p style={{ color: "var(--text-muted)", lineHeight: 1.8 }}>
          I&apos;m currently open to new opportunities. Whether you have a
          project in mind, a question, or just want to say hi — my inbox is
          always open.
        </p>

        <a
          href="https://mail.google.com/mail/?view=cm&to=alexiseluzon@gmail.com&su=Hello from your portfolio"
          style={{
            padding: "0.85rem 2.5rem",
            border: "1px solid var(--accent)",
            color: "var(--accent)",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "0.95rem",
            borderRadius: "4px",
            letterSpacing: "0.5px",
            transition: "background-color 0.2s, color 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "var(--accent)";
            e.currentTarget.style.color = "#000";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "var(--accent)";
          }}
        >
          Say Hello
        </a>

        {/* Social links */}
        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            marginTop: "1rem",
          }}
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              download={s.label === "Resume" ? true : undefined}
              style={{
                color: "var(--text-muted)",
                textDecoration: "none",
                fontSize: "0.85rem",
                fontFamily: "var(--font-geist-mono)",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--accent)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-muted)")
              }
            >
              {s.label}
            </a>
          ))}
        </div>

        <p
          style={{
            marginTop: "3rem",
            color: "var(--text-muted)",
            fontSize: "0.8rem",
            fontFamily: "var(--font-geist-mono)",
          }}
        >
          Designed & Built by Alexis E. Luzon
        </p>
      </div>
    </section>
  );
}