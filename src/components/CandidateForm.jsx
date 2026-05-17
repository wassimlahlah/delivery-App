// ============================================================
// components/CandidateForm.jsx
// Sticky sidebar form for adding a new candidate.
// Validates input inline (no alert()) and calls onAdd(form).
// ============================================================

import { useState } from "react";
import { DEGREE_LABELS } from "../utils/constants";

export default function CandidateForm({ onAdd }) {
  const [form, setForm] = useState({
    name: "",
    experience: "",
    testScore: "",
    degree: "3",
  });
  const [error, setError] = useState("");

  const handle = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = () => {
    // ── Validation ──────────────────────────────────────────
    if (!form.name.trim()) return setError("Name is required.");

    const exp = Number(form.experience);
    if (!form.experience || isNaN(exp) || exp < 0 || exp > 50)
      return setError("Enter valid experience (0–50 years).");

    const ts = Number(form.testScore);
    if (!form.testScore || isNaN(ts) || ts < 0 || ts > 100)
      return setError("Test score must be 0–100.");

    setError("");
    onAdd(form);
    setForm({ name: "", experience: "", testScore: "", degree: "3" });
  };

  return (
    <div className="form-card">
      <div className="form-card-title">Add Candidate</div>
      <div className="form-card-sub">
        Fill in the details to score and add to pipeline.
      </div>

      {error && <div className="error-msg">{error}</div>}

      {/* Full name */}
      <div className="field">
        <label className="field-label">Full name</label>
        <input
          name="name"
          value={form.name}
          onChange={handle}
          placeholder="Jane Appleseed"
          className="field-input"
        />
      </div>

      {/* Experience */}
      <div className="field">
        <label className="field-label">Experience</label>
        <input
          name="experience"
          value={form.experience}
          onChange={handle}
          placeholder="Years of relevant experience"
          className="field-input"
          type="number"
          min="0"
          max="50"
        />
        <div className="field-hint">0–50 years</div>
      </div>

      {/* Test score */}
      <div className="field">
        <label className="field-label">Test score</label>
        <input
          name="testScore"
          value={form.testScore}
          onChange={handle}
          placeholder="Technical assessment score"
          className="field-input"
          type="number"
          min="0"
          max="100"
        />
        <div className="field-hint">0–100 points</div>
      </div>

      {/* Education level */}
      <div className="field">
        <label className="field-label">Education level</label>
        <select
          name="degree"
          value={form.degree}
          onChange={handle}
          className="field-select"
        >
          {Object.entries(DEGREE_LABELS).map(([v, l]) => (
            <option key={v} value={v}>
              {l}
            </option>
          ))}
        </select>
      </div>

      <button className="submit-btn" onClick={submit}>
        Add to Pipeline →
      </button>
    </div>
  );
}
