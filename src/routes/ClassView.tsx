import { useMemo, useRef, useState } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";

import type { ProgressState, Question } from "@/types";
import { shuffleInPlace } from "@/lib/shuffle";
import { saveProgress } from "@/lib/storage";

type Ctx = {
  progress: ProgressState;
  setProgress: React.Dispatch<React.SetStateAction<ProgressState>>;
  course: {
    id: string;
    title: string;
    lessons: Array<{
      id: string;
      title: string;
      minutes?: number;
      reading?: string;
      quiz: Question[];
    }>;
  };
  courseId: string;
};

export default function ClassView() {
  const { progress, setProgress, course, courseId } = useOutletContext<Ctx>();
  const { lessonId = "" } = useParams();
  const nav = useNavigate();

  const lesson = course.lessons.find((l) => l.id === lessonId);
  if (!lesson) return <div className="card">Lesson not found.</div>;

  // Build questions from the active lesson; shuffle options per render as needed.
  function prepareQuestions(): Question[] {
    return lesson.quiz.map((q) => ({
      ...q,
      options: shuffleInPlace(q.options.map((o) => ({ ...o }))),
    }));
  }

  const [phase, setPhase] = useState<"read" | "quiz" | "review">("read");
  const [questions, setQuestions] = useState<Question[]>(() => prepareQuestions());
  const [answers, setAnswers] = useState<Record<string, number | null>>({});
  const [score, setScore] = useState<number | null>(null);

  // Gate: must pass previous lesson first (if any)
  const idx = course.lessons.findIndex((l) => l.id === lessonId);
  const prevPassed =
    idx <= 0 ? true : !!progress.perLesson[course.lessons[idx - 1].id]?.passed;
  if (!prevPassed)
    return <div className="card">Please pass the previous lesson first.</div>;

  const passThreshold = Math.ceil(0.6 * lesson.quiz.length);

  const canSubmit = useMemo(() => {
    return (
      Object.keys(answers).length === questions.length &&
      Object.values(answers).every((v) => v !== null && v !== undefined)
    );
  }, [answers, questions.length]);

  function startQuiz() {
    setPhase("quiz");
    setQuestions(prepareQuestions()); // reshuffle on each start
    setAnswers({});
    setScore(null);
  }

  function choose(qid: string, idx: number) {
    setAnswers((a) => ({ ...a, [qid]: idx }));
  }

  function submit() {
    let correct = 0;
    for (const q of questions) {
      const choice = answers[q.id];
      if (choice != null && q.options[choice]?.correct) correct++;
    }
    setScore(correct);
    setPhase("review");

    setProgress((prev) => {
      const prevLP =
        prev.perLesson[lesson.id] || {
          lessonId: lesson.id,
          bestScore: 0,
          attempts: [],
          passed: false,
        };
      const passed = correct >= passThreshold || prevLP.passed;
      const bestScore = Math.max(prevLP.bestScore ?? 0, correct);
      const updated: ProgressState = {
        ...prev,
        perLesson: {
          ...prev.perLesson,
          [lesson.id]: {
            ...prevLP,
            bestScore,
            passed,
            attempts: [
              ...prevLP.attempts,
              { correctCount: correct, timestamp: Date.now() },
            ],
          },
        },
      };
      // Save per-course
      saveProgress(courseId, updated);
      return updated;
    });
  }

  function nextStep() {
    const next = course.lessons[idx + 1];
    if (score != null && score >= passThreshold) {
      if (next) nav(`/class/${next.id}`);
      else nav("/certificate");
    } else {
      // back to reading with reshuffled answers
      setPhase("read");
    }
  }

  const totalDone = Object.values(progress.perLesson).filter((p) => p.passed).length;
  const remaining = Math.max(0, course.lessons.length - totalDone);

  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className="vstack" style={{ gap: 16 }}>
      <div className="card vstack">
        <div className="hstack" style={{ justifyContent: "space-between" }}>
          <h1 style={{ margin: 0 }}>{lesson.title}</h1>
          <span className="badge">{lesson.minutes ?? 0} min</span>
        </div>

        {phase === "read" && (
          <>
            <p className="status" style={{ fontSize: 16, lineHeight: 1.6 }}>
              {lesson.reading}
            </p>
            <div className="hstack" style={{ justifyContent: "space-between" }}>
              <button className="button primary" onClick={startQuiz}>
                Take Quiz
              </button>
              <div className="small">{remaining} lessons left</div>
            </div>
          </>
        )}

        {phase === "quiz" && (
          <div className="vstack" style={{ gap: 16 }}>
            {questions.map((q, qi) => (
              <div key={q.id} className="question vstack">
                <div>
                  <strong>Q{qi + 1}.</strong> {q.prompt}
                </div>
                <div className="grid">
                  {q.options.map((o, oi) => {
                    const selected = answers[q.id] === oi;
                    const label = String.fromCharCode(97 + oi); // a/b/c/d
                    return (
                      <div
                        key={oi}
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
            <div className="hstack" style={{ justifyContent: "space-between" }}>
              <button className="button" onClick={() => setPhase("read")}>
                Back to Lesson
              </button>
              <button className="button primary" disabled={!canSubmit} onClick={submit}>
                Submit
              </button>
            </div>
          </div>
        )}

        {phase === "review" && (
          <div className="vstack">
            <h2 style={{ marginBottom: 0 }}>Results</h2>
            <div className="status">
              You scored <strong>{score}</strong> / {lesson.quiz.length}.
            </div>
            <ul className="small" style={{ opacity: 0.9 }}>
              <li>Pass threshold: {passThreshold} correct.</li>
              <li>Answers are reshuffled on every attempt.</li>
            </ul>
            <div className="hstack" style={{ justifyContent: "space-between" }}>
              <button
                className="button"
                onClick={() => {
                  setPhase("quiz");
                  setQuestions(prepareQuestions());
                  setAnswers({});
                  setScore(null);
                }}
              >
                Retry Quiz
              </button>
              <button className="button primary" onClick={nextStep}>
                {score != null && score >= passThreshold ? "Continue" : "Re-read Lesson"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
