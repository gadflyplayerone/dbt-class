import { Link, useOutletContext } from "react-router-dom";
import { useMemo, useState } from "react";
import type { ProgressState, UserProfile } from "@/types";

type Ctx = {
  progress: ProgressState;
  setProgress: React.Dispatch<React.SetStateAction<ProgressState>>;
  setUser: (u: UserProfile) => void;
  course: {
    id: string;
    title: string;
    description?: string;
    lessons: Array<{
      id: string;
      title: string;
      minutes?: number;
      quiz: Array<any>;
      reading?: string;
    }>;
  };
  courseId: string;
};

export default function Landing() {
  const { progress, setUser, course } = useOutletContext<Ctx>();

  const total = course.lessons.length;
  const completed = useMemo(
    () => Object.values(progress.perLesson).filter((p) => p.passed).length,
    [progress]
  );
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

  // --- Name input state (prefill from progress if available)
  const [name, setName] = useState(progress.user?.name ?? "");

  function saveName() {
    const trimmed = name.trim();
    if (!trimmed) return;
    setUser({ name: trimmed });
  }

  return (
    <div className="vstack" style={{ gap: 16 }}>
      <div className="card">
        <h3 style={{ margin: 0 }}>{course.title}</h3>
        {course.description && (
          <p className="small" style={{ marginTop: 8 }}>
            {course.description}
          </p>
        )}

        {/* Name input section */}
        <div className="hstack" style={{ gap: 8, marginTop: 12, alignItems: "center" }}>
          <label className="small" htmlFor="learnerName" style={{ minWidth: 80 }}>
            Your name
          </label>
          <input
            id="learnerName"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            style={{ flex: 1, padding: "6px 8px", borderRadius: 6, border: "1px solid var(--bd)" }}
          />
          <button className="button" onClick={saveName} disabled={!name.trim()}>
            Save
          </button>
          {progress.user?.name && (
            <span className="small" style={{ marginLeft: 8 }}>
              Saved as <strong>{progress.user.name}</strong>
            </span>
          )}
        </div>

        <div className="progressbar" style={{ marginTop: 12 }}>
          <div style={{ width: `${overallPct}%` }} />
        </div>
        <div className="status" style={{ marginTop: 6 }}>
          Overall progress: {completed}/{total} lessons complete ({overallPct}%).
          &nbsp; Time done {minutesDone} / {totalMinutes} min.
        </div>
      </div>

      <div className="card">
        <h2 style={{ marginTop: 0 }}>Lessons</h2>
        <ol className="list">
          {course.lessons.map((l, i) => {
            const p = progress.perLesson[l.id];
            return (
              <li key={l.id} className="hstack" style={{ justifyContent: "space-between" }}>
                <div>
                  <div style={{ fontWeight: 600 }}>{l.title}</div>
                  <div className="small">
                    {l.minutes ?? 0} min · {l.quiz.length} questions
                  </div>
                </div>
                <Link className="button" to={`/class/${l.id}`}>
                  {p?.passed ? "Review" : "Start"}
                </Link>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
