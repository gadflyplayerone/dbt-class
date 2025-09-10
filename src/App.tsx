import { Outlet, Link, useLocation } from "react-router-dom";
import { loadProgress, saveProgress, resetProgress } from "@/lib/storage";
import { COURSE } from "@/data/curriculum";
import { useEffect, useMemo, useState } from "react";
import { ProgressState, UserProfile } from "@/types";

export default function App() {
  const location = useLocation();
  const [progress, setProgress] = useState<ProgressState>(() => {
    const existing = loadProgress();
    if (existing?.courseId === COURSE.id) return existing;
    return { courseId: COURSE.id, perLesson: {} };
  });

  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  const user = progress.user;
  const completed = Object.values(progress.perLesson).filter(p => p.passed).length;
  const total = COURSE.lessons.length;
  const overallPct = Math.round((completed / total) * 100);

  const totalMinutes = COURSE.lessons.reduce((a, l) => a + l.minutes, 0);
  const minutesDone = COURSE.lessons
    .filter(l => progress.perLesson[l.id]?.passed)
    .reduce((a, l) => a + l.minutes, 0);

  function handleSetUser(u: UserProfile) {
    setProgress(p => ({ ...p, user: u }));
  }

  function handleReset() {
    const fresh = resetProgress(COURSE.id);
    setProgress(fresh);
  }

  return (
    <div>
      <header className="container">
        <div className="card hstack" style={{justifyContent:'space-between'}}>
          <div className="hstack" style={{gap:16}}>
            <Link to="/" className="button">DBT Class</Link>
            <span className="badge">{COURSE.title}</span>
            <span className="small">Total est: {totalMinutes} min</span>
          </div>
          <div className="hstack" style={{gap:12}}>
            {user ? <span className="small">Welcome, <strong>{user.name}</strong></span> : <span className="small">Enter your name to begin</span>}
            <Link to="/certificate" className="button">Certificate</Link>
            <button className="button" onClick={handleReset}>Reset</button>
          </div>
        </div>
        <div className="container" style={{paddingTop:12}}>
          <div className="progressbar"><div style={{ width: `${overallPct}%` }} /></div>
          <div className="status" style={{marginTop:6}}>
            Overall progress: {completed}/{total} lessons complete ({overallPct}%).
            &nbsp; Time done {minutesDone} / {totalMinutes} min.
          </div>
        </div>
      </header>
      <main className="container">
        <Outlet context={{ progress, setProgress, setUser: handleSetUser }} />
      </main>
      <footer className="container small" style={{opacity:0.8, paddingBottom:24}}>
        {location.pathname !== "/certificate" && (
          <div>Complete all lessons to unlock your PDF certificate.</div>
        )}
      </footer>
    </div>
  );
}