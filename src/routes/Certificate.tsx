import { useMemo } from "react";
import { useOutletContext } from "react-router-dom";
import type { ProgressState } from "@/types";

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
      quiz: Array<{ text?: string; correct?: boolean }>;
    }>;
  };
  courseId: string;
};

export default function Certificate() {
  const { progress, course, courseId } = useOutletContext<Ctx>();
  const name = progress.user?.name ?? "Student";

  const allPassed = useMemo(() => {
    if (!course?.lessons?.length) return false;
    return course.lessons.every((l) => progress.perLesson[l.id]?.passed);
  }, [course, progress]);

  const aggregate = useMemo(() => {
    let totalCorrect = 0;
    let totalQuestions = 0;
    for (const l of course.lessons) {
      const lp = progress.perLesson[l.id];
      if (lp?.bestScore) totalCorrect += lp.bestScore;
      totalQuestions += l.quiz.length;
    }
    const percent =
      totalQuestions > 0 ? Math.round((100 * totalCorrect) / totalQuestions) : 0;
    return { totalCorrect, totalQuestions, percent };
  }, [course, progress]);

  async function downloadPDF() {
    // Prefer UMD jsPDF if available; fallback to print
    // @ts-ignore
    const jsPDF = (window as any).jspdf?.jsPDF;
    if (!jsPDF) {
      window.print();
      return;
    }

    const doc = new jsPDF({ unit: "pt", format: "letter" });
    const now = new Date();
    const dateStr = now.toLocaleDateString();

    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.text(`${course.title} — Certificate of Completion`, 72, 80);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text(`Recipient: ${name}`, 72, 120);
    doc.text(`Date: ${dateStr}`, 72, 140);
    doc.text(
      `Overall Score: ${aggregate.totalCorrect} / ${aggregate.totalQuestions} (${aggregate.percent}%)`,
      72,
      160
    );

    doc.setFont("helvetica", "italic");
    doc.text(
      "Educational use only. This certificate does not replace clinical treatment.",
      72,
      720
    );

    doc.save(
      `${course.title.replace(/\s+/g, "-")}-Certificate-${name.replace(/\s+/g, "_")}.pdf`
    );

    // Write to this course's leaderboard
    try {
      const { addToLeaderboard } = await import("@/lib/db");
      await addToLeaderboard(
        {
          name,
          dateIso: now.toISOString(),
          totalCorrect: aggregate.totalCorrect,
          totalQuestions: aggregate.totalQuestions,
          percent: aggregate.percent,
        },
        courseId
      );
    } catch {
      // no-op if DB unavailable
    }
  }

  return (
    <div className="card vstack">
      <h1 style={{ margin: 0 }}>Certificate</h1>

      {!allPassed && (
        <p className="status">
          Complete all lessons to unlock your certificate. You have{" "}
          {Object.values(progress.perLesson).filter((p) => p.passed).length}/
          {course.lessons.length} done.
        </p>
      )}

      <div
        style={{
          padding: 16,
          borderRadius: 12,
          border: "1px dashed rgba(255,255,255,0.2)",
          marginBottom: 12,
        }}
      >
        <div className="small">Recipient</div>
        <div style={{ fontSize: 24, fontWeight: 700 }}>{name}</div>

        <div className="small" style={{ marginTop: 8 }}>
          Course
        </div>
        <div style={{ fontSize: 16 }}>{course.title}</div>

        <div className="small" style={{ marginTop: 8 }}>
          Overall
        </div>
        <div style={{ fontSize: 16 }}>
          {aggregate.totalCorrect} / {aggregate.totalQuestions} ({aggregate.percent}%)
        </div>
      </div>

      <div className="hstack" style={{ gap: 12 }}>
        <button className="button" onClick={() => window.history.back()}>
          Back
        </button>
        <button className="button primary" onClick={downloadPDF} disabled={!allPassed}>
          {allPassed ? "Download PDF" : "Locked until all lessons complete"}
        </button>
      </div>

      <div className="small" style={{ opacity: 0.9, marginTop: 12 }}>
        Your name and progress are stored locally on your device (per course). Reset from the
        header at any time.
      </div>
    </div>
  );
}
