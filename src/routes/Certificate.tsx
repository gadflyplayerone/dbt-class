import { useMemo, useRef } from "react";
import { useOutletContext } from "react-router-dom";
import { COURSE } from "@/data/curriculum";
import { ProgressState } from "@/types";

type Ctx = {
  progress: ProgressState;
  setProgress: React.Dispatch<React.SetStateAction<ProgressState>>;
};

export default function Certificate() {
  const { progress } = useOutletContext<Ctx>();
  const allPassed = useMemo(() => {
    return COURSE.lessons.every(l => progress.perLesson[l.id]?.passed);
  }, [progress]);
  const name = progress.user?.name ?? "Student";
  const ref = useRef<HTMLDivElement>(null);

  function downloadPDF() {
    // Use jsPDF if available; otherwise use print as a fallback.
    // @ts-ignore
    const jsPDF = window.jspdf?.jsPDF;
    if (!jsPDF) {
      window.print();
      return;
    }
    const doc = new jsPDF({ orientation: "landscape", unit: "pt", format: "a4" });
    const W = 842, H = 595;
    doc.setFillColor(18, 26, 42);
    doc.rect(0, 0, W, H, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(28);
    doc.text("Certificate of Completion", W/2, 120, { align: "center" });
    doc.setFont("helvetica", "normal");
    doc.setFontSize(14);
    doc.text("This certifies that", W/2, 180, { align: "center" });
    doc.setFont("helvetica", "bold");
    doc.setFontSize(36);
    doc.text(name, W/2, 230, { align: "center" });
    doc.setFont("helvetica", "normal");
    doc.setFontSize(14);
    doc.text("has successfully completed the DBT Foundations course.", W/2, 270, { align: "center" });
    doc.setFontSize(12);
    const date = new Date().toLocaleDateString();
    doc.text(`Date: ${date}`, W/2, 310, { align: "center" });
    doc.setFontSize(10);
    doc.text("© DBT Class", W/2, 560, { align: "center" });
    doc.save(`DBT-Certificate-${name.replace(/\s+/g, "_")}.pdf`);
  }

  return (
    <div className="card vstack">
      <h1 style={{margin:0}}>Certificate</h1>
      {!allPassed && (
        <p className="status">
          Complete all lessons to unlock your certificate. You have {Object.values(progress.perLesson).filter(p => p.passed).length}/{COURSE.lessons.length} done.
        </p>
      )}
      <div ref={ref} style={{padding:16, borderRadius:12, border:"1px dashed rgba(255,255,255,0.2)"}}>
        <div className="small">Recipient</div>
        <div style={{fontSize:24, fontWeight:700}}>{name}</div>
      </div>
      <div className="hstack" style={{gap:12}}>
        <button className="button" onClick={() => window.history.back()}>Back</button>
        <button className="button primary" onClick={downloadPDF} disabled={!allPassed}>
          {allPassed ? "Download PDF" : "Locked until all lessons complete"}
        </button>
      </div>
      <div className="small">
        Your name and progress are stored locally on your device (localStorage). Reset from the header at any time.
      </div>
    </div>
  );
}