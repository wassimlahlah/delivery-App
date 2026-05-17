// ============================================================
// pages/Dashboard.jsx
// Stats overview: 4 metric cards, pipeline breakdown bars,
// and a top-5 candidates leaderboard.
// ============================================================

import { COLORS, DEGREE_LABELS, getStatus } from "../utils/constants";

export default function Dashboard({ candidates }) {
  const total    = candidates.length;
  const hire     = candidates.filter((c) => c.score > 80).length;
  const interview= candidates.filter((c) => c.score > 50 && c.score <= 80).length;
  const reject   = candidates.filter((c) => c.score <= 50).length;
  const avgScore = total
    ? candidates.reduce((a, c) => a + c.score, 0) / total
    : 0;

  const bars = [
    { label: "Hire",      count: hire,      color: COLORS.green },
    { label: "Interview", count: interview, color: COLORS.amber },
    { label: "Reject",    count: reject,    color: COLORS.red   },
  ];

  return (
    <div className="page">
      {/* ── Header ─────────────────────────────────────────── */}
      <div className="dash-header">
        <h2>Dashboard</h2>
        <p>Overview of your current candidate pipeline</p>
      </div>

      {total === 0 ? (
        <div className="empty-dash">
          <div className="empty-dash-icon">📭</div>
          No candidates yet. Add some to see your dashboard.
        </div>
      ) : (
        <>
          {/* ── Stat cards ───────────────────────────────────── */}
          <div className="stat-grid">
            {[
              { label: "Total",     value: total,              dot: COLORS.accent,      sub: "candidates" },
              { label: "Hire",      value: hire,               dot: COLORS.green,       sub: `${Math.round((hire / total) * 100)}% of pool` },
              { label: "Interview", value: interview,          dot: COLORS.amber,       sub: `${Math.round((interview / total) * 100)}% of pool` },
              { label: "Avg score", value: avgScore.toFixed(1),dot: COLORS.accentLight, sub: "out of 100+" },
            ].map((s) => (
              <div className="stat-card" key={s.label}>
                <div className="stat-label">
                  <span className="stat-label-dot" style={{ background: s.dot }} />
                  {s.label}
                </div>
                <div className="stat-value">{s.value}</div>
                <div className="stat-sub">{s.sub}</div>
              </div>
            ))}
          </div>

          {/* ── Pipeline breakdown bars ──────────────────────── */}
          <div className="score-dist-section">
            <div className="section-title">Pipeline breakdown</div>
            <div className="bar-row">
              {bars.map((b) => (
                <div key={b.label}>
                  <div className="bar-meta">
                    <span className="bar-label">{b.label}</span>
                    <span className="bar-count">
                      {b.count} candidate{b.count !== 1 ? "s" : ""}
                    </span>
                  </div>
                  <div className="bar-track">
                    <div
                      className="bar-fill"
                      style={{
                        width: `${(b.count / total) * 100}%`,
                        background: b.color,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Top candidates leaderboard ───────────────────── */}
          <div>
            <div className="section-title">Top candidates</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[...candidates]
                .sort((a, b) => b.score - a.score)
                .slice(0, 5)
                .map((c) => {
                  const st = getStatus(c.score);
                  return (
                    <div
                      key={c.id}
                      style={{
                        background: COLORS.surface,
                        border: `1px solid ${COLORS.border}`,
                        borderRadius: 12,
                        padding: "14px 18px",
                        display: "flex",
                        alignItems: "center",
                        gap: 14,
                      }}
                    >
                      <div
                        style={{
                          width: 8, height: 8,
                          borderRadius: "50%",
                          background: st.color,
                          flexShrink: 0,
                        }}
                      />
                      <span
                        style={{
                          flex: 1,
                          fontFamily: "'Syne', sans-serif",
                          fontSize: 14,
                          fontWeight: 600,
                        }}
                      >
                        {c.name}
                      </span>
                      <span style={{ fontSize: 12, color: COLORS.muted }}>
                        {DEGREE_LABELS[c.degree]} · {c.experience}yr exp
                      </span>
                      <span
                        style={{
                          fontFamily: "'Syne', sans-serif",
                          fontSize: 14,
                          fontWeight: 700,
                          color: st.color,
                        }}
                      >
                        {c.score.toFixed(1)}
                      </span>
                    </div>
                  );
                })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
