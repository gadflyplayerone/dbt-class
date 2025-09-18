import { set, get } from "idb-keyval";

export type LeaderboardEntry = {
  name: string;
  dateIso: string;
  totalCorrect: number;
  totalQuestions: number;
  percent: number;
};

const KEY_PREFIX = "leaderboard_v1_";

async function readList(key: string): Promise<LeaderboardEntry[]> {
  const list = await get(key);
  return Array.isArray(list) ? list : [];
}

async function writeList(key: string, list: LeaderboardEntry[]) {
  await set(key, list);
}

export async function addToLeaderboard(entry: LeaderboardEntry, courseId: string) {
  const key = KEY_PREFIX + courseId;
  const list = await get(key);
  const arr = Array.isArray(list) ? list : [];
  arr.push(entry);
  arr.sort((a,b) => b.percent - a.percent || b.dateIso.localeCompare(a.dateIso));
  await set(key, arr);
}

export async function getLeaderboard(courseId: string): Promise<LeaderboardEntry[]> {
  const key = KEY_PREFIX + courseId;
  const list = await get(key);
  return Array.isArray(list) ? list : [];
}
