// ============================================================
// components/Nav.jsx
// Sticky top navigation bar with active-page highlighting
// and a candidate-count pill on the Candidates link.
// ============================================================

export default function Nav({ page, setPage, count }) {
  return (
    <nav className="nav">
      <div className="nav-logo">
        Tech<span>Hire</span>
      </div>

      <div className="nav-links">
        {[
          ["home",       "Home"],
          ["dashboard",  "Dashboard"],
          ["candidates", "Candidates"],
        ].map(([id, label]) => (
          <button
            key={id}
            className={`nav-btn ${page === id ? "active" : ""}`}
            onClick={() => setPage(id)}
          >
            {label}
            {id === "candidates" && count > 0 && (
              <span className="nav-pill">{count}</span>
            )}
          </button>
        ))}
      </div>
    </nav>
  );
}
