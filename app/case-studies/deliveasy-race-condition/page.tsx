"use client";

const timeline = [
  {
    step: "The problem",
    detail:
      "Two riders could both tap \"Accept\" on the same delivery within milliseconds of each other. The API needed to let exactly one of them win the claim — and tell the loser why, correctly.",
  },
  {
    step: "First attempt",
    detail:
      "Checked order.status !== PREPARING before running the update, then updated separately. Passed the simple case. Failed under concurrency: the second rider's request re-read the order after the first rider's update had already landed, saw status was now OUT_FOR_DELIVERY, and returned 400 (\"not ready for pickup\") instead of 409 (\"already claimed\") — the wrong error, because the pre-check and the actual write weren't the same atomic operation.",
  },
  {
    step: "Second attempt",
    detail:
      "Moved the status check after a conditional UPDATE, reasoning that a zero-row update meant either \"never ready\" or \"just claimed.\" Still wrong — checking order.status !== PREPARING to tell them apart doesn't work, because a just-claimed order's status is OUT_FOR_DELIVERY, the same condition a never-ready order hits. Both failure modes looked identical through that field.",
  },
  {
    step: "The actual fix",
    detail:
      "The conditional UPDATE's WHERE clause became the single source of truth for who wins — only a request matching status = PREPARING AND rider_id IS NULL succeeds. When a request loses that race, rider_id — not status — is the correct signal: it's only ever set by a successful claim, so IS NOT NULL means \"someone else got there first\" (409), and NULL means the order genuinely wasn't ready (400).",
  },
  {
    step: "Verification",
    detail:
      "Added a test that fires two accept requests for the same order back to back and asserts the second gets 409, not 400 — the exact regression the first two attempts would have failed.",
  },
];

export default function DelivEasyCaseStudy() {
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
        DelivEasy — A Race Condition, Diagnosed Twice
      </h1>

      <p
        style={{
          color: "var(--text-muted)",
          lineHeight: 1.9,
          marginBottom: "2.5rem",
        }}
      >
        A concurrency bug in DelivEasy&apos;s rider-order-claiming flow —
        and the two wrong fixes it took to find the right one. Included
        here because the debugging process is more instructive than the
        final code.
      </p>

      <h2
        style={{
          fontSize: "1.2rem",
          fontWeight: 600,
          marginBottom: "1.25rem",
        }}
      >
        Timeline
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          marginBottom: "3rem",
        }}
      >
        {timeline.map((item, i) => (
          <div
            key={item.step}
            style={{
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              padding: "1.25rem 1.5rem",
            }}
          >
            <p
              style={{
                color: "var(--accent)",
                fontSize: "0.8rem",
                fontFamily: "var(--font-geist-mono)",
                letterSpacing: "1px",
                textTransform: "uppercase",
                marginBottom: "0.5rem",
              }}
            >
              {String(i + 1).padStart(2, "0")} — {item.step}
            </p>
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "0.9rem",
                lineHeight: 1.7,
              }}
            >
              {item.detail}
            </p>
          </div>
        ))}
      </div>

      <h2
        style={{
          fontSize: "1.2rem",
          fontWeight: 600,
          marginBottom: "1.25rem",
        }}
      >
        The fix
      </h2>

      <pre
        style={{
          backgroundColor: "var(--bg-card)",
          border: "1px solid var(--border)",
          borderRadius: "8px",
          padding: "1.25rem 1.5rem",
          overflowX: "auto",
          fontSize: "0.82rem",
          lineHeight: 1.6,
          marginBottom: "3rem",
        }}
      >
        <code style={{ fontFamily: "var(--font-geist-mono)", color: "var(--text-muted)" }}>
{`result = await db.execute(
    update(Order)
    .where(
        Order.id == order_id,
        Order.status == OrderStatus.PREPARING,
        Order.rider_id.is_(None),
    )
    .values(rider_id=current_user.id, status=OrderStatus.OUT_FOR_DELIVERY)
)

if result.rowcount == 0:
    order = await _get_order_or_404(order_id, db)
    if order.rider_id is not None:
        raise HTTPException(409, "Order already claimed by another rider")
    raise HTTPException(400, "Order is not ready for pickup")`}
        </code>
      </pre>

      <a
        href="https://deliver-easy.vercel.app"
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