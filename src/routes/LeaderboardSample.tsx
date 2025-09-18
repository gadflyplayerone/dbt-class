import { useEffect, useState } from "react";
import { getLeaderboard, LeaderboardEntry } from "@/lib/db";
import { useActiveCourse } from "@/lib/course";

export default function LeaderboardSample() {
  const [rows, setRows] = useState<LeaderboardEntry[]>([]);
  const { id: courseId } = useActiveCourse();
  useEffect(()=>{getLeaderboard(courseId).then(setRows);},[]);
  return (<div>
    <h1>Sample Leaderboard</h1>
    <div className="card"><table style={{width:"100%"}}><thead><tr><th>Name</th><th>Date</th><th>Score</th><th>Percent</th></tr></thead>
    <tbody>{rows.map((r,i)=>(<tr key={i}><td>{r.name}</td><td>{new Date(r.dateIso).toLocaleDateString()}</td><td>{r.totalCorrect}/{r.totalQuestions}</td><td>{r.percent}%</td></tr>))}
    {rows.length===0&&<tr><td colSpan={4}>No entries</td></tr>}</tbody></table></div>
  </div>);
}