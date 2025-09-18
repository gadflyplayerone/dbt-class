import { Outlet, Link, useLocation } from "react-router-dom";
import { useActiveCourse } from "@/lib/course";
import { loadProgress, saveProgress, resetProgress } from "@/lib/storage";

import { useEffect, useMemo, useState } from "react";
import { ProgressState, UserProfile } from "@/types";

export default function App() {
  const location = useLocation();
  const { id: courseId, course, setActive, courses } = useActiveCourse();

  const [progress, setProgress] = useState<ProgressState>(() => {
    const existing = loadProgress(courseId);
    if (existing?.courseId === courseId) return existing;
    return { courseId, perLesson: {} };
  });

  // Persist per course
  useEffect(() => {
    saveProgress(courseId, progress);
  }, [progress, courseId]);

  // If you want progress to reload when switching courses:
  useEffect(() => {
    const existing = loadProgress(courseId);
    setProgress(existing ?? { courseId, perLesson: {} });
  }, [courseId]);

  const user = progress.user;

  const completed = useMemo(
    () => Object.values(progress.perLesson).filter((p) => p.passed).length,
    [progress]
  );
  const total = course.lessons.length;
  const overallPct = total > 0 ? Math.round((completed / total) * 100) : 0;

  const totalMinutes = useMemo(
    () => course.lessons.reduce((a, l) => a + (l.minutes ?? 0), 0),
    [course]
  );
  const minutesDone = useMemo(
    () =>
      course.lessons
        .filter((l) => progress.perLesson[l.id]?.passed)
        .reduce((a, l) => a + (l.minutes ?? 0), 0),
    [course, progress]
  );

  function handleSetUser(u: UserProfile) {
    setProgress((p) => ({ ...p, user: u }));
  }

  function handleReset() {
    const fresh = resetProgress(courseId);
    setProgress(fresh);
  }

  return (
    <div>
      <header className="container">
        <div
          className="card hstack"
          style={{ justifyContent: "space-between" }}
        >
          {/* Left side: course title + selector */}
          {/* Left side: back-to-landing button + course title + selector */}
          <div className="hstack" style={{ gap: 16 }}>
            <Link to="/" className="button" aria-label="Go to course landing">
              <h3 style={{ margin: 0 }}>{course.title}</h3>
            </Link>

            

            <select
              onChange={(e) => setActive(e.target.value as any)}
              value={courseId}
              className="button"
              style={{ padding: "4px 8px" }}
              aria-label="Select course"
            >
              {Object.entries(courses).map(([id, c]) => (
                <option key={id} value={id}>
                  {c.title}
                </option>
              ))}
            </select>

            <span className="small">Total est: {totalMinutes} min</span>
          </div>

          {/* Right side: status + actions */}
          <div className="hstack" style={{ gap: 12 }}>
            {user ? (
              <span className="small">
                Welcome, <strong>{user.name}</strong>
              </span>
            ) : (
              <span className="small">Enter your name to begin</span>
            )}
            {/* Single per-course leaderboard link */}
            <Link to="/leaderboard" className="button">
              Leaderboard
            </Link>
            <Link to="/certificate" className="button">
              Certificate
            </Link>
            <button className="button" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>

        <div className="container" style={{ paddingTop: 12 }}>
          <div className="progressbar">
            <div style={{ width: `${overallPct}%` }} />
          </div>
          <div className="status" style={{ marginTop: 6 }}>
            Overall progress: {completed}/{total} lessons complete ({overallPct}
            %). &nbsp; Time done {minutesDone} / {totalMinutes} min.
          </div>
        </div>
      </header>

      {/* Removed NavLinks. */}
      <main className="container">
        <Outlet
          context={{
            progress,
            setProgress,
            setUser: handleSetUser,
            course,
            courseId,
          }}
        />
      </main>

      <footer
        className="container small"
        style={{ opacity: 0.8, paddingBottom: 24 }}
      >
        {location.pathname !== "/certificate" && (
          <div>Complete all lessons to unlock your PDF certificate.</div>
        )}
      </footer>
    </div>
  );
}
