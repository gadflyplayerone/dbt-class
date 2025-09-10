import { ProgressState } from "@/types";

const KEY = "dbtProgress_v1";

export function loadProgress(): ProgressState | null {
  try {
    const s = localStorage.getItem(KEY);
    return s ? JSON.parse(s) as ProgressState : null;
  } catch {
    return null;
  }
}

export function saveProgress(p: ProgressState) {
  localStorage.setItem(KEY, JSON.stringify(p));
}

export function resetProgress(courseId: string) {
  localStorage.removeItem(KEY);
  const empty: ProgressState = { courseId, perLesson: {} };
  saveProgress(empty);
  return empty;
}