// ============================================================
// components/CandidateCard.jsx
// Single candidate row: score ring, metadata, status badge,
// score progress bar, and a delete button.
// ============================================================

import { DEGREE_LABELS, getStatus } from "../utils/constants";

const MAX_SCORE = 200; // theoretical maximum for the bar width

export default function CandidateCard({ c, onDelete }) {
  const st  = getStatus(c.score);
  const pct = Math.min((c.score / MAX_SCORE) * 100, 100);

  return (
    <div className="cand-card">
      {/* ── Score ring ─────────────────────────────────── */}
      <div
        className="score-ring"
        style={{ borderColor: st.ringColor, color: st.ringColor }}
      >
        <span>{Math.round(c.score)}</span>
        <span className="score-ring-sub">pts</span>
      </div>

      {/* ── Info block ─────────────────────────────────── */}
      <div className="cand-info">
        <div className="cand-name">{c.name}</div>

        <div className="cand-meta">
          <span className="cand-meta-item">
            Exp: <span>{c.experience}yr</span>
          </span>
          <span className="cand-meta-item">
            Test: <span>{c.testScore}/100</span>
          </span>
          <span className="cand-meta-item">
            Edu: <span>{DEGREE_LABELS[c.degree]}</span>
          </span>
        </div>

        {/* score progress bar */}
        <div className="score-bar-wrap">
          <div
            className="score-bar-fill"
            style={{ width: `${pct}%`, background: st.color }}
          />
        </div>
      </div>

      {/* ── Actions ────────────────────────────────────── */}
      <div className="cand-actions">
        <span
          className="status-badge"
          style={{ background: st.dimColor, color: st.color }}
        >
          {st.label}
        </span>

        <button
          className="delete-btn"
          onClick={() => onDelete(c.id)}
          title="Remove candidate"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
