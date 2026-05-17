import { useState, useEffect } from "react";
import { css } from "./utils/styles";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Candidates from "./pages/Candidates";

export default function App() {
  const [page, setPage] = useState("home");
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/candidates/")
      .then((res) => res.json())
      .then((data) => setCandidates(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <style>{css}</style>

      <div className="app-shell">
        <Nav page={page} setPage={setPage} count={candidates.length} />

        {page === "home" && <Home setPage={setPage} />}

        {page === "dashboard" && (
          <Dashboard candidates={candidates} />
        )}

        {page === "candidates" && (
          <Candidates
            candidates={candidates}
            setCandidates={setCandidates}
          />
        )}
      </div>
    </>
  );
}