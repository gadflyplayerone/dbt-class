import { ProgressState } from "@/types";

const PREFIX = "dbtProgress_v1_";

export function loadProgress(courseId: string): ProgressState | null {
  try {
    const s = localStorage.getItem(PREFIX + courseId);
    return s ? (JSON.parse(s) as ProgressState) : null;
  } catch {
    return null;
  }
}

export function saveProgress(courseId: string, p: ProgressState) {
  try {
    localStorage.setItem(PREFIX + courseId, JSON.stringify(p));
  } catch {
    // no-op (private / Safari incognito can throw)
  }
}

export function resetProgress(courseId: string) {
  try {
    localStorage.removeItem(PREFIX + courseId);
  } catch {
    // ignore
  }
  const empty: ProgressState = { courseId, perLesson: {} };
  saveProgress(courseId, empty);
  return empty;
}
