import { useState } from "react";
import CandidateForm from "../components/CandidateForm";
import CandidateCard from "../components/CandidateCard";
import { calculateScore } from "../utils/constants";

export default function Candidates({ candidates, setCandidates }) {
  const [sort, setSort] = useState("score");

  const addCandidate = async (form) => {
    const score = calculateScore(form);

    const newCandidate = {
      ...form,
      score,
    };

    try {
      const res = await fetch(
        "http://127.0.0.1:8000/api/candidates/add/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newCandidate),
        }
      );

      const data = await res.json();

      setCandidates((prev) => [data, ...prev]);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteCandidate = async (id) => {
    try {
      await fetch(
        `http://127.0.0.1:8000/api/candidates/delete/${id}/`,
        {
          method: "DELETE",
        }
      );

      setCandidates((prev) =>
        prev.filter((c) => c.id !== id)
      );
    } catch (err) {
      console.error(err);
    }
  };

  const sorted = [...candidates].sort((a, b) => {
    if (sort === "score") return b.score - a.score;
    if (sort === "name") return a.name.localeCompare(b.name);
    if (sort === "recent") return b.id - a.id;
    return 0;
  });

  return (
    <div className="page">
      <div className="cand-layout">
        <CandidateForm onAdd={addCandidate} />

        <div>
          <div className="sort-bar">
            <span className="sort-bar-count">
              {candidates.length} candidate
              {candidates.length !== 1 ? "s" : ""}
            </span>

            <select
              className="sort-select"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="score">Sort: Score</option>
              <option value="recent">Sort: Recent</option>
              <option value="name">Sort: Name</option>
            </select>
          </div>

          {candidates.length === 0 ? (
            <div className="cand-empty">
              <div className="cand-empty-icon">👤</div>
              No candidates yet.
            </div>
          ) : (
            <div className="cand-list">
              {sorted.map((c) => (
                <CandidateCard
                  key={c.id}
                  c={c}
                  onDelete={deleteCandidate}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

