import { set, get } from "idb-keyval";

export type LeaderboardEntry = {
  name: string;
  dateIso: string;
  totalCorrect: number;
  totalQuestions: number;
  percent: number;
  lessonsPassed: number;
  totalLessons: number;
};

const KEY_PREFIX = "leaderboard_v1_";
const API_BASE = import.meta.env.VITE_LEADERBOARD_API_URL?.replace(/\/+$/, "");

function normalizeList(list: unknown): LeaderboardEntry[] {
  if (!Array.isArray(list)) return [];
  return list
    .map((item) => {
      if (!item || typeof item !== "object") return null;
      const obj = item as Partial<LeaderboardEntry>;
      return {
        name: String(obj.name ?? ""),
        dateIso: String(obj.dateIso ?? new Date().toISOString()),
        totalCorrect: Number(obj.totalCorrect ?? 0) || 0,
        totalQuestions: Number(obj.totalQuestions ?? 0) || 0,
        percent: Number(obj.percent ?? 0) || 0,
        lessonsPassed: Number(obj.lessonsPassed ?? 0) || 0,
        totalLessons: Number(obj.totalLessons ?? 0) || 0,
      } satisfies LeaderboardEntry;
    })
    .filter(Boolean) as LeaderboardEntry[];
}

async function readList(key: string): Promise<LeaderboardEntry[]> {
  const list = await get(key);
  return normalizeList(list);
}

async function writeList(key: string, list: LeaderboardEntry[]) {
  await set(key, list);
}

async function fetchRemote<T>(
  url: string,
  init?: RequestInit
): Promise<T | null> {
  if (!API_BASE) return null;
  try {
    const res = await fetch(url, {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...(init?.headers ?? {}),
      },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return (await res.json()) as T;
  } catch (err) {
    console.warn("Leaderboard remote request failed", err);
    return null;
  }
}

export async function addToLeaderboard(entry: LeaderboardEntry, courseId: string) {
  let remote: LeaderboardEntry[] | null = null;
  if (API_BASE) {
    remote = normalizeList(
      (
        await fetchRemote<{ leaderboard: unknown }>(
          `${API_BASE}/leaderboard/${encodeURIComponent(courseId)}`,
          {
            method: "POST",
            body: JSON.stringify(entry),
          }
        )
      )?.leaderboard ?? null
    );
  }

  if (remote) {
    await writeList(KEY_PREFIX + courseId, remote);
    return;
  }

  const key = KEY_PREFIX + courseId;
  const list = await get(key);
  const arr: LeaderboardEntry[] = Array.isArray(list) ? list : [];
  arr.push(entry);
  arr.sort(
    (a, b) =>
      b.percent - a.percent ||
      b.lessonsPassed - a.lessonsPassed ||
      b.dateIso.localeCompare(a.dateIso)
  );
  await set(key, arr);
}

export async function getLeaderboard(courseId: string): Promise<LeaderboardEntry[]> {
  let remote: LeaderboardEntry[] | null = null;
  if (API_BASE) {
    remote = normalizeList(
      (
        await fetchRemote<{ leaderboard: unknown }>(
          `${API_BASE}/leaderboard/${encodeURIComponent(courseId)}`
        )
      )?.leaderboard ?? null
    );
  }

  if (remote) {
    await writeList(KEY_PREFIX + courseId, remote);
    return remote;
  }

  const key = KEY_PREFIX + courseId;
  const list = await get(key);
  return Array.isArray(list) ? list : [];
}
