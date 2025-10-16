import { createServer } from "http";
import { readFile, writeFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DB_PATH = path.join(__dirname, "leaderboard-data.json");
const PORT = Number(process.env.PORT ?? 8787);

async function readDb() {
  try {
    const raw = await readFile(DB_PATH, "utf8");
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

async function writeDb(data) {
  await writeFile(DB_PATH, JSON.stringify(data, null, 2), "utf8");
}

function send(res, status, body) {
  res.writeHead(status, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "content-type",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
  });
  if (body !== undefined) {
    res.end(JSON.stringify(body));
  } else {
    res.end();
  }
}

const server = createServer(async (req, res) => {
  if (!req.url) {
    send(res, 400, { error: "Bad request" });
    return;
  }

  if (req.method === "OPTIONS") {
    send(res, 204);
    return;
  }

  const url = new URL(req.url, `http://${req.headers.host}`);
  if (!url.pathname.startsWith("/leaderboard/")) {
    send(res, 404, { error: "Not found" });
    return;
  }

  const courseId = decodeURIComponent(url.pathname.replace("/leaderboard/", ""));
  if (!courseId) {
    send(res, 400, { error: "Missing course id" });
    return;
  }

  const database = await readDb();
  const current = Array.isArray(database[courseId]) ? database[courseId] : [];

  if (req.method === "GET") {
    send(res, 200, { leaderboard: current });
    return;
  }

  if (req.method === "POST") {
    let buffer = "";
    req.on("data", (chunk) => {
      buffer += chunk;
      if (buffer.length > 1_000_000) req.destroy();
    });
    req.on("end", async () => {
      try {
        const payload = JSON.parse(buffer);
        if (!payload || typeof payload !== "object") throw new Error("Invalid body");

        const entry = {
          name: String(payload.name ?? "").slice(0, 80),
          dateIso: String(payload.dateIso ?? new Date().toISOString()),
          totalCorrect: Number(payload.totalCorrect ?? 0) || 0,
          totalQuestions: Number(payload.totalQuestions ?? 0) || 0,
          percent: Number(payload.percent ?? 0) || 0,
          lessonsPassed: Number(payload.lessonsPassed ?? 0) || 0,
          totalLessons: Number(payload.totalLessons ?? 0) || 0,
        };

        const updated = [...current, entry].sort(
          (a, b) =>
            b.percent - a.percent ||
            b.lessonsPassed - a.lessonsPassed ||
            b.dateIso.localeCompare(a.dateIso)
        );

        database[courseId] = updated.slice(0, 50);
        await writeDb(database);
        send(res, 200, { leaderboard: database[courseId] });
      } catch (err) {
        send(res, 400, { error: err instanceof Error ? err.message : "Invalid body" });
      }
    });
    return;
  }

  send(res, 405, { error: "Method not allowed" });
});

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Leaderboard server listening on http://localhost:${PORT}`);
});
