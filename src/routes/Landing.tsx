import { Link, useOutletContext } from "react-router-dom";
import { COURSE } from "@/data/curriculum";
import { useMemo, useState } from "react";
import { ProgressState, UserProfile } from "@/types";

type Ctx = {
  progress: ProgressState;
  setProgress: React.Dispatch<React.SetStateAction<ProgressState>>;
  setUser: (u: UserProfile) => void;
};

export default function Landing() {
  const { progress, setUser } = useOutletContext<Ctx>();
  const [name, setName] = useState(progress.user?.name ?? "");

  const remaining = useMemo(() => {
    const done = Object.values(progress.perLesson).filter(p => p.passed).length;
    return COURSE.lessons.length - done;
  }, [progress]);

  return (
    <div className="vstack">
      <div className="card vstack">
        <h1 style={{margin:0}}>Welcome to DBT Foundations</h1>
        <p className="status">{COURSE.description}</p>
        <div className="hstack" style={{gap:12}}>
          <input
            className="input"
            style={{maxWidth:320}}
            placeholder="Enter your name for the certificate"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <button
            className="button primary"
            onClick={() => setUser({ name: name.trim() || "Student" })}
          >
            Save Name
          </button>
        </div>
      </div>

      <div className="grid">
        {COURSE.lessons.map((l, i) => {
          const p = progress.perLesson[l.id];
          const locked = i > 0 && !progress.perLesson[COURSE.lessons[i - 1].id]?.passed;
          return (
            <div key={l.id} className="card vstack">
              <div className="hstack" style={{justifyContent:'space-between'}}>
                <h2 style={{margin:0}}>{l.title}</h2>
                <span className="badge">{l.minutes} min</span>
              </div>
              <p className="status">{l.reading.slice(0, 120)}...</p>
              {p?.passed && <div className="small" style={{color:'var(--ok)'}}>Passed • Best score: {p.bestScore}/5</div>}
              {!p?.passed && p?.bestScore != null && <div className="small" style={{color:'var(--warn)'}}>Best so far: {p.bestScore}/5</div>}
              <div className="hstack" style={{justifyContent:'space-between'}}>
                <Link to={`/class/${l.id}`} className={`button ${locked ? "" : "primary"}`} style={{pointerEvents: locked ? 'none' : 'auto', opacity: locked ? 0.5 : 1}}>
                  {locked ? "Locked" : (p?.passed ? "Review" : "Start")}
                </Link>
                <div className="small">{remaining} lessons left</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}