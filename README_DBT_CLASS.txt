DBT Class Website — Merge Notice
=================================
This archive preserves your original project contents and adds a complete, static DBT Class site.

What was added
--------------
- Folder: dbt_class_site/
  - index.html — main app
  - style.css — styles
  - app.js — app logic (progress, quizzes, summaries)
  - certificate.html — printable certificate
  - data/course.json — 36 lessons (each with 3–5 minute text, 10 questions; pass threshold 6)

Why this structure?
-------------------
You asked to retain as much of the original archive as possible. Nothing was removed or modified.
The DBT class site is self-contained in dbt_class_site/ so your original files remain untouched.

How to run
----------
Option A: Open dbt_class_site/index.html in a browser.
Option B: Serve the folder locally (recommended) to avoid CORS on JSON fetch.
  - Python:   python3 -m http.server 8080   (then open http://localhost:8080/dbt_class_site/)
  - Node:     npx http-server . -p 8080     (then open http://localhost:8080/dbt_class_site/)

Certificate & Progress
----------------------
- Progress is saved in localStorage under keys: dbt_progress and dbt_meta.
- Certificate shows name, total correct vs total, percentage, and estimated time.

Build Info
----------
- Generated: 2025-09-11T04:11:03
