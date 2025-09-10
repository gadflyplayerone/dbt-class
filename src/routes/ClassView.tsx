import { useMemo, useState } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { COURSE } from "@/data/curriculum";
import { ProgressState, Question } from "@/types";
import { shuffleInPlace } from "@/lib/shuffle";
import { saveProgress } from "@/lib/storage";

type Ctx = {
  progress: ProgressState;
  setProgress: React.Dispatch<React.SetStateAction<ProgressState>>;
};

function prepareQuestions(lessonId: string): Question[] {
  const lesson = COURSE.lessons.find(l => l.id === lessonId)!;
  // Deep clone to avoid mutating source data, then shuffle options per question
  return lesson.quiz.map(q => ({
    ...q,
    options: shuffleInPlace(q.options.map(o => ({ ...o })))
  }));
}

export default function ClassView() {
  const { lessonId = "" } = useParams();
  const nav = useNavigate();
  const { progress, setProgress } = useOutletContext<Ctx>();
  const lesson = COURSE.lessons.find(l => l.id === lessonId);
  const [phase, setPhase] = useState<"read" | "quiz" | "review">("read");
  const [questions, setQuestions] = useState<Question[]>(() => prepareQuestions(lessonId));
  const [answers, setAnswers] = useState<Record<string, number | null>>({});
  const [score, setScore] = useState<number | null>(null);

  const idx = COURSE.lessons.findIndex(l => l.id === lessonId);
  const prevPassed = idx <= 0 ? true : !!progress.perLesson[COURSE.lessons[idx - 1].id]?.passed;

  if (!lesson) return <div className="card">Lesson not found.</div>;
  if (!prevPassed) return <div className="card">Please pass the previous lesson first.</div>;

  const canSubmit = useMemo(() => {
    return Object.keys(answers).length === questions.length && Object.values(answers).every(v => v !== null && v !== undefined);
  }, [answers, questions.length]);

  function startQuiz() {
    setPhase("quiz");
    setQuestions(prepareQuestions(lesson.id)); // reshuffle on each start
    setAnswers({});
    setScore(null);
  }

  function choose(qid: string, idx: number) {
    setAnswers(a => ({ ...a, [qid]: idx }));
  }

  function submit() {
    let correct = 0;
    for (const q of questions) {
      const choice = answers[q.id];
      if (choice != null && q.options[choice]?.correct) correct++;
    }
    setScore(correct);
    setPhase("review");

    setProgress(prev => {
      const prevLP = prev.perLesson[lesson.id] || { lessonId: lesson.id, bestScore: 0, attempts: [], passed: false };
      const passed = correct >= 3 || prevLP.passed;
      const bestScore = Math.max(prevLP.bestScore ?? 0, correct);
      const updated = {
        ...prev,
        perLesson: {
          ...prev.perLesson,
          [lesson.id]: {
            ...prevLP,
            bestScore,
            passed,
            attempts: [...prevLP.attempts, { correctCount: correct, timestamp: Date.now() }]
          }
        }
      };
      saveProgress(updated);
      return updated;
    });
  }

  function nextStep() {
    const next = COURSE.lessons[idx + 1];
    if (score != null && score >= 3) {
      if (next) nav(`/class/${next.id}`);
      else nav("/certificate");
    } else {
      // back to reading with reshuffled answers
      setPhase("read");
    }
  }

  const totalDone = Object.values(progress.perLesson).filter(p => p.passed).length;
  const remaining = COURSE.lessons.length - totalDone;

  return (
    <div className="vstack" style={{gap:16}}>
      <div className="card vstack">
        <div className="hstack" style={{justifyContent:'space-between'}}>
          <h1 style={{margin:0}}>{lesson.title}</h1>
          <span className="badge">{lesson.minutes} min</span>
        </div>
        {phase === "read" && (
          <>
            <p className="status" style={{fontSize:16, lineHeight:1.6}}>{lesson.reading}</p>
            <div className="hstack" style={{justifyContent:'space-between'}}>
              <button className="button primary" onClick={startQuiz}>Take Quiz</button>
              <div className="small">{remaining} lessons left</div>
            </div>
          </>
        )}
        {phase === "quiz" && (
          <div className="vstack" style={{gap:16}}>
            {questions.map((q, qi) => (
              <div key={q.id} className="question vstack">
                <div><strong>Q{qi + 1}.</strong> {q.prompt}</div>
                <div className="grid">
                  {q.options.map((o, oi) => {
                    const selected = answers[q.id] === oi;
                    const label = String.fromCharCode(97 + oi); // a/b/c/d
                    return (
                      <div key={oi}
                        className={`option ${selected ? "selected" : ""}`}
                        onClick={() => choose(q.id, oi)}
                      >
                        <strong>{label})</strong> {o.text}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
            <div className="hstack" style={{justifyContent:'space-between'}}>
              <button className="button" onClick={() => setPhase("read")}>Back to Lesson</button>
              <button className="button primary" disabled={!canSubmit} onClick={submit}>Submit</button>
            </div>
          </div>
        )}
        {phase === "review" && (
          <div className="vstack">
            <h2 style={{marginBottom:0}}>Results</h2>
            <div className="status">You scored <strong>{score}</strong> / 5.</div>
            <ul className="small" style={{opacity:0.9}}>
              <li>Pass threshold: 3 correct.</li>
              <li>Answers are reshuffled on every attempt.</li>
            </ul>
            <div className="hstack" style={{justifyContent:'space-between'}}>
              <button className="button" onClick={() => { setPhase("quiz"); setQuestions(prepareQuestions(lesson.id)); setAnswers({}); setScore(null); }}>Retry Quiz</button>
              <button className="button primary" onClick={nextStep}>
                {score != null && score >= 3 ? "Continue" : "Re-read Lesson"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}