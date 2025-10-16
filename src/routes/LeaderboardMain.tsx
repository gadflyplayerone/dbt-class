import { useEffect, useState } from "react";
import { getLeaderboard, LeaderboardEntry } from "@/lib/db";
import { useActiveCourse } from "@/lib/course";

export default function LeaderboardMain() {
  const [rows, setRows] = useState<LeaderboardEntry[]>([]);
  const { id: courseId } = useActiveCourse();

  useEffect(() => {
    let cancelled = false;
    getLeaderboard(courseId).then((data) => {
      if (!cancelled) setRows(data);
    });
    return () => {
      cancelled = true;
    };
  }, [courseId]);

  return (
    <div>
      <h1>Main Leaderboard</h1>
      <div className="card">
        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Score</th>
              <th>Percent</th>
              <th>Classes Passed</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={`${r.name}-${r.dateIso}-${i}`}>
                <td>{r.name}</td>
                <td>{new Date(r.dateIso).toLocaleDateString()}</td>
                <td>
                  {r.totalCorrect}/{r.totalQuestions}
                </td>
                <td>{r.percent}%</td>
                <td>
                  {r.lessonsPassed}/{r.totalLessons}
                </td>
              </tr>
            ))}
            {rows.length === 0 && (
              <tr>
                <td colSpan={5}>No entries</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
