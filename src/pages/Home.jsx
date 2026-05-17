// ============================================================
// pages/Home.jsx
// Landing page: hero headline, CTA buttons, feature cards.
// ============================================================

export default function Home({ setPage }) {
  return (
    <div className="page">
      {/* ── Hero ───────────────────────────────────────────── */}
      <div className="home-hero">
        <h1 className="home-title">
          Hire smarter,<br />
          <span className="home-title-accent">faster.</span>
        </h1>

        <p className="home-subtitle">
          TechHire scores and ranks candidates automatically so your team
          can focus on what matters — great conversations.
        </p>

        <div className="home-cta-row">
          <button className="btn-primary" onClick={() => setPage("candidates")}>
            Add a Candidate →
          </button>
          <button className="btn-ghost" onClick={() => setPage("dashboard")}>
            View Dashboard
          </button>
        </div>
      </div>

      {/* ── Feature cards ──────────────────────────────────── */}
      <div className="home-features">
        {[
          {
            icon: "⚡",
            title: "Instant scoring",
            desc: "Candidates are evaluated and ranked the moment you submit them.",
          },
          {
            icon: "📊",
            title: "Live dashboard",
            desc: "Track your pipeline with real-time stats, breakdowns and distribution charts.",
          },
          {
            icon: "🎯",
            title: "Clear decisions",
            desc: "Every candidate gets a Hire, Interview, or Reject recommendation instantly.",
          },
        ].map((f) => (
          <div className="feature-card" key={f.title}>
            <div className="feature-icon">{f.icon}</div>
            <div className="feature-title">{f.title}</div>
            <div className="feature-desc">{f.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
