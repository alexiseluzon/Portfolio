const features = [
  {
    feature: "Auto-triage",
    detail:
      "New tickets from the UI or an n8n webhook get a category, priority and summary as zod-validated structured JSON. Failures fall back to manual triage with a one-click retry.",
  },
  {
    feature: "Similar tickets (RAG)",
    detail:
      "Local MiniLM embeddings stored in pgvector on Neon, queried by cosine similarity.",
  },
  {
    feature: "Tool-calling agent",
    detail:
      "Searches similar tickets, adds notes and proposes status changes. A user must confirm before anything is written.",
  },
  {
    feature: "Alerts",
    detail: "High and urgent tickets post to a Slack-compatible webhook.",
  },
  {
    feature: "Reliability",
    detail:
      "Timeouts, retry with backoff, rate limiting and input validation on public routes.",
  },
  {
    feature: "Testing",
    detail:
      "Jest with a mocked LLM, Supertest route tests, Playwright E2E and GitHub Actions CI.",
  },
];

const decisions = [
  "The agent is sandboxed: the server binds the ticket id, tool arguments are validated, and status changes are proposals the user confirms before any write",
  "AI failure is a normal state: invalid or missing model output marks the ticket for manual triage instead of crashing the request",
  "Provider-agnostic LLM client: switching providers or models is a config change, not a rewrite",
  "Ticket text is treated as untrusted in prompts and escaped in outbound Slack messages",
  "Tests prove the agent never writes a status change on its own, without spending any LLM tokens",
];

const challenges = [
  "My first LLM provider denied access to my project and a model name was deprecated. Isolating the LLM behind one client made the switch a small change.",
  "Local embedding models do not load reliably on Vercel serverless. I made embedding a graceful no-op and documented a hosted-API swap point instead of hiding the limitation.",
];

const limitations = [
  "In-memory rate limiting (per instance), and no authentication",
  "Similar-ticket search runs locally, not on the hosted demo",
  "The agent is stateless per message (no conversation memory)",
];

const stack = [
  "Next.js 16",
  "TypeScript",
  "Prisma 7",
  "PostgreSQL (Neon)",
  "pgvector",
  "zod",
  "OpenAI-compatible LLM API",
  "Transformers.js",
  "n8n",
  "Jest",
  "Supertest",
  "Playwright",
  "GitHub Actions",
];

const link = { color: "var(--accent)" };
const h2 = { fontSize: "1.3rem", fontWeight: 600, marginBottom: "1rem" } as const;
const list = {
  color: "var(--text-muted)",
  fontSize: "0.9rem",
  lineHeight: 1.9,
  paddingLeft: "1.2rem",
  marginBottom: "3rem",
} as const;

export default function WillowDemoCaseStudy() {
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
        AI-Powered Support Ticket Tracker
      </h1>
      <p
        style={{
          color: "var(--text-muted)",
          fontSize: "0.95rem",
          lineHeight: 1.7,
          marginBottom: "3rem",
        }}
      >
        Support teams lose time reading each new ticket, deciding what it is and how urgent it is,
        checking whether it has happened before, and alerting someone when it is serious. I extended
        my full-stack ticket tracker (Next.js, Prisma, Postgres, n8n) with an AI layer that handles
        those steps, with guardrails so the AI can never act on its own.{" "}
        <a
          href="https://willow-demo.vercel.app/tickets"
          target="_blank"
          rel="noopener noreferrer"
          style={link}
        >
          Live site ↗
        </a>{" "}
        ·{" "}
        <a
          href="https://github.com/alexiseluzon/Willow-Demo"
          target="_blank"
          rel="noopener noreferrer"
          style={link}
        >
          GitHub ↗
        </a>
      </p>

      {/* What I built */}
      <h2 style={h2}>What I built</h2>
      <div style={{ marginBottom: "3rem", overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid var(--border)" }}>
              <th style={{ textAlign: "left", padding: "0.75rem 0.5rem", color: "var(--text-muted)" }}>
                Feature
              </th>
              <th style={{ textAlign: "left", padding: "0.75rem 0.5rem", color: "var(--text-muted)" }}>
                How it works
              </th>
            </tr>
          </thead>
          <tbody>
            {features.map((f) => (
              <tr key={f.feature} style={{ borderBottom: "1px solid var(--border)" }}>
                <td
                  style={{
                    padding: "0.75rem 0.5rem",
                    color: "var(--accent)",
                    fontWeight: 700,
                    whiteSpace: "nowrap",
                    verticalAlign: "top",
                  }}
                >
                  {f.feature}
                </td>
                <td
                  style={{
                    padding: "0.75rem 0.5rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.6,
                  }}
                >
                  {f.detail}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Personal contribution */}
      <h2 style={h2}>What I personally did</h2>
      <p
        style={{
          color: "var(--text-muted)",
          fontSize: "0.9rem",
          lineHeight: 1.8,
          marginBottom: "3rem",
        }}
      >
        Everything: the schema and migrations (including enabling pgvector on Neon), the LLM
        client, structured-output triage, embeddings and similarity queries, the tool-calling loop
        and its UI, the notification module, the reliability layer, the test suites, CI and the
        documentation.
      </p>

      <h2 style={h2}>Decisions I am proud of</h2>
      <ul style={list}>
        {decisions.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>

      <h2 style={h2}>Challenges</h2>
      <ul style={list}>
        {challenges.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>

      <h2 style={h2}>Honest limitations</h2>
      <ul style={list}>
        {limitations.map((l) => (
          <li key={l}>{l}</li>
        ))}
      </ul>

      <h2 style={h2}>Stack</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
        {stack.map((s) => (
          <span
            key={s}
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: "0.75rem",
              color: "var(--text-muted)",
              border: "1px solid var(--border)",
              borderRadius: "999px",
              padding: "0.25rem 0.75rem",
            }}
          >
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}