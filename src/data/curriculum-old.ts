import { Course } from "@/types";

export const COURSE: Course = {
  id: "dbt_mastery_v2",
  title: "DBT Mastery: Complete Skills Training",
  description: "A comprehensive, practice-focused DBT skills program spanning mindfulness, emotion regulation, distress tolerance, interpersonal effectiveness, behavior analysis, and implementation tools. 37 lessons with 10-question quizzes (4 options each) and pragmatic practice plans.",
  lessons: [

    {
      id: "lesson_01",
      title: "01. Tutorial & How This Class Works",
      minutes: 15,
      reading: `
Welcome! This tutorial shows you how to navigate the class, get the most from each lesson, and pass the quizzes. Each lesson includes: an accessible reading, concrete examples, and a 10‑item quiz with four choices per item. You can learn at your own pace; most lessons run 15–25 minutes. Use the diary card to track practice and outcomes.

How to use this class. Start with the reading, highlight one takeaway, and immediately schedule a practice rep within 24 hours. Then take the quiz; if you miss an item, revisit the step you were unsure about and try again. Each week, pick 2–3 target skills.

What we cover. The course includes mindfulness (What/How/Wise Mind), emotion regulation (PLEASE, Check the Facts, Opposite Action, Build Mastery, Accumulate Positives, Cope Ahead), distress tolerance (STOP, TIPP, Pros & Cons, Self‑Soothe, IMPROVE, Radical Acceptance, Turning the Mind, Willingness), interpersonal effectiveness (DEAR MAN, GIVE, FAST), core analysis tools (Chain Analysis, Problem Solving), and implementation (Diary Cards, Coaching, Safety Planning, Contingencies, Exposure).

How quizzes work. To build real competence, items mix formats: definition, NOT/EXCEPT, scenario application, sequence order, fill‑in, example identification, troubleshooting, compare/contrast, diary‑card interpretation, and ethics. You’ll see one correct answer among four options.

Completion and certificate. Track your progress in the dashboard. A passing score is typically 80%+ across quizzes. At the end, you’ll have a toolkit to apply in daily life and with peers or care teams. This class is educational and does not replace therapy or medical care.

References. Core source: Linehan, M. M. (2014). DBT Skills Training Handouts and Worksheets, 2nd ed. Additional sources include Linehan (1993), adjunct research on arousal regulation and exposure, and standard behavior analysis methods.
`,
      quiz: [
{
  id: "q1",
  prompt: "DEFINITION — Which statement best defines Course quiz formats?",
  options: [
    { text: "Mix of definition, NOT/EXCEPT, scenario, order, fill‑in, example, troubleshooting, compare, diary, and ethics", correct: true }},
{ text: "A relaxation method that replaces problem solving" }},
{ text: "A rule that you must be calm before acting" }},
{ text: "A breathing technique that always eliminates anxiety" }}
  ]
},
      {
  id: "q2",
  prompt: "SCENARIO — In a situation like building a daily practice loop, what is the best first move?",
  options: [
    { text: "Do nothing and hope it resolves" }},
{ text: "Use GIVE" }},
{ text: "Use Using diary cards", correct: true }},
{ text: "Use Opposite Action" }}
  ]
},
      {
  id: "q3",
  prompt: "FILL‑IN — Progress tracking emphasizes ______ to help you act skillfully.",
  options: [
    { text: "overthinking" }},
{ text: "implementation intentions", correct: true }},
{ text: "avoiding feelings" }},
{ text: "winning at all costs" }}
  ]
},
      {
  id: "q4",
  prompt: "EXAMPLE — Which option best illustrates Course navigation?",
  options: [
    { text: "Ranting on social media" }},
{ text: "Ignoring physical needs" }},
{ text: "Making a decision while furious" }},
{ text: "Read → schedule practice → quiz → review misses → log one improvement", correct: true }}
  ]
},
      {
  id: "q5",
  prompt: "COMPARE — What distinguishes This class vs therapy from individual psychotherapy?",
  options: [
    { text: "This class vs therapy is only for groups, not individuals" }},
{ text: "This class vs therapy follows a specific sequence; individual psychotherapy targets a different goal", correct: true }},
{ text: "This class vs therapy and individual psychotherapy are identical" }},
{ text: "individual psychotherapy always comes first no matter the case" }}
  ]
},
      {
  id: "q6",
  prompt: "TROUBLESHOOT — If you notice this pitfall: “Using only reading without practice”, what should you do?",
  options: [
    { text: "Blame the situation" }},
{ text: "Quit using the skill" }},
{ text: "Return to the step sequence and simplify the next step", correct: true }},
{ text: "Wait until you feel motivated" }}
  ]
},
      {
  id: "q7",
  prompt: "DIARY CARD — A diary shows high arousal spikes before difficult calls. Which skill would you try first?",
  options: [
    { text: "Over-plan and delay again" }},
{ text: "Skip the call" }},
{ text: "Vent for 20 minutes" }},
{ text: "Practice scheduling", correct: true }}
  ]
},
      {
  id: "q8",
  prompt: "ETHICS — What is a key ethical safeguard when practicing Self‑guided learning?",
  options: [
    { text: "Force others to practice the skill" }},
{ text: "Use the skill in ways that are safe for you and others; escalate support if risk increases", correct: true }},
{ text: "Share others’ private data for accountability" }},
{ text: "Use the skill as a substitute for medical care" }}
  ]
},
      {
  id: "q9",
  prompt: "ORDER — What is the correct step sequence for Weekly routine?",
  options: [
    { text: "Pick skills → Schedule reps → Review and adjust → Track on diary" }},
{ text: "Pick skills → Track on diary → Schedule reps → Review and adjust" }},
{ text: "Pick skills → Schedule reps → Track on diary → Review and adjust", correct: true }},
{ text: "Schedule reps → Pick skills → Track on diary → Review and adjust" }}
  ]
},
      {
  id: "q10",
  prompt: "NOT — Which of the following is NOT a component of Completion?",
  options: [
    { text: "Practice" }},
{ text: "Reading" }},
{ text: "Blaming", correct: true }},
{ text: "Quiz" }}
  ]
}
      ]
    },

    {
      id: "lesson_02",
      title: "02. DBT Overview & Treatment Structure",
      minutes: 18,
      reading: `
DBT Overview & Treatment Structure — This lesson provides a clear, practice-ready overview and a mini toolkit you can apply immediately. We'll define the skill or concept, explain when and why to use it, and outline concrete steps with examples. As you read, identify one real situation you can apply this to within the next 24–48 hours.

What you’ll learn: What DBT is, four treatment modes, target hierarchy, and the goals of skills training. How to know when this skill is indicated versus when a different skill is a better fit. Step-by-step guidance with plain-language examples. Common traps and how to avoid them. How to practice, measure progress, and get feedback.

Real‑world example. Imagine a recent situation that triggered strong emotion. Walk through the steps out loud or in writing. If you get stuck, simplify the step and repeat. Aim for small wins and clear learning, not perfection.

Practice plan. Schedule a 10‑minute daily practice block for the next week. Use implementation intentions ("If X happens, then I will do Y") and record outcomes on your diary card. Review in your next session or with a peer coach.

Quality checks. Ask: Did I do the steps in order? Did I stay nonjudgmental? Did my actions move me toward values and goals? What will I tweak next time?

Safety and ethics. Use skills in ways that are safe for you and others. Seek professional support for acute risk. Skills complement—not replace—medical care.
`,
      quiz: [
{
  id: "q1",
  prompt: "DEFINITION — Which statement best defines DBT Overview & Treatment Structure?",
  options: [
    { text: "A DBT concept or tool related to DBT Overview & Treatment Structure.", correct: true }},
{ text: "A relaxation method that replaces problem solving" }},
{ text: "A rule that you must be calm before acting" }},
{ text: "A way to avoid difficult conversations indefinitely" }}
  ]
},
      {
  id: "q2",
  prompt: "NOT — Which of the following is NOT a component of DBT Overview & Treatment Structure?",
  options: [
    { text: "Mind reading as a certainty", correct: true }},
{ text: "Practice mindfully" }},
{ text: "Align to values" }},
{ text: "Clarify goals" }}
  ]
},
      {
  id: "q3",
  prompt: "COMPARE — What distinguishes DBT Overview & Treatment Structure from Opposite Action?",
  options: [
    { text: "DBT Overview & Treatment Structure is only for groups, not individuals" }},
{ text: "Opposite Action always comes first no matter the case" }},
{ text: "DBT Overview & Treatment Structure follows a specific sequence; Opposite Action targets a different goal", correct: true }},
{ text: "DBT Overview & Treatment Structure and Opposite Action are identical" }}
  ]
},
      {
  id: "q4",
  prompt: "SCENARIO — In a situation like high-stress situations, what is the best first move?",
  options: [
    { text: "Use DBT Overview & Treatment Structure", correct: true }},
{ text: "Use Radical Acceptance" }},
{ text: "Use Opposite Action" }},
{ text: "Do nothing and hope it resolves" }}
  ]
},
      {
  id: "q5",
  prompt: "FILL‑IN — DBT Overview & Treatment Structure emphasizes ______ to help you act skillfully.",
  options: [
    { text: "DBT Overview & Treatment Structure steps", correct: true }},
{ text: "winning at all costs" }},
{ text: "overthinking" }},
{ text: "avoiding feelings" }}
  ]
},
      {
  id: "q6",
  prompt: "EXAMPLE — Which option best illustrates DBT Overview & Treatment Structure?",
  options: [
    { text: "Making a decision while furious" }},
{ text: "Applying the steps of DBT Overview & Treatment Structure during a real situation and aligning actions with goals", correct: true }},
{ text: "Ranting on social media" }},
{ text: "Ignoring physical needs" }}
  ]
},
      {
  id: "q7",
  prompt: "TROUBLESHOOT — If you notice this pitfall: “Skipping steps”, what should you do?",
  options: [
    { text: "Quit using the skill" }},
{ text: "Wait until you feel motivated" }},
{ text: "Return to the step sequence and simplify the next step", correct: true }},
{ text: "Blame the situation" }}
  ]
},
      {
  id: "q8",
  prompt: "COMPARE — What distinguishes DBT Overview & Treatment Structure from Radical Acceptance?",
  options: [
    { text: "Radical Acceptance always comes first no matter the case" }},
{ text: "DBT Overview & Treatment Structure follows a specific sequence; Radical Acceptance targets a different goal", correct: true }},
{ text: "DBT Overview & Treatment Structure is only for groups, not individuals" }},
{ text: "DBT Overview & Treatment Structure and Radical Acceptance are identical" }}
  ]
},
      {
  id: "q9",
  prompt: "DIARY CARD — A diary shows high arousal spikes before difficult calls. Which skill would you try first?",
  options: [
    { text: "Over-plan and delay again" }},
{ text: "Skip the call" }},
{ text: "DBT Overview & Treatment Structure", correct: true }},
{ text: "Vent for 20 minutes" }}
  ]
},
      {
  id: "q10",
  prompt: "ETHICS — What is a key ethical safeguard when practicing DBT Overview & Treatment Structure?",
  options: [
    { text: "Share others’ private data for accountability" }},
{ text: "Use the skill in ways that are safe for you and others; escalate support if risk increases", correct: true }},
{ text: "Use the skill as a substitute for medical care" }},
{ text: "Force others to practice the skill" }}
  ]
}
      ]
    },

    {
      id: "lesson_03",
      title: "03. Biosocial Theory & DBT Assumptions",
      minutes: 18,
      reading: `
Biosocial Theory & DBT Assumptions — This lesson provides a clear, practice-ready overview and a mini toolkit you can apply immediately. We'll define the skill or concept, explain when and why to use it, and outline concrete steps with examples. As you read, identify one real situation you can apply this to within the next 24–48 hours.

What you’ll learn: How biology and environment co-create emotion dysregulation; core assumptions. How to know when this skill is indicated versus when a different skill is a better fit. Step-by-step guidance with plain-language examples. Common traps and how to avoid them. How to practice, measure progress, and get feedback.

Real‑world example. Imagine a recent situation that triggered strong emotion. Walk through the steps out loud or in writing. If you get stuck, simplify the step and repeat. Aim for small wins and clear learning, not perfection.

Practice plan. Schedule a 10‑minute daily practice block for the next week. Use implementation intentions ("If X happens, then I will do Y") and record outcomes on your diary card. Review in your next session or with a peer coach.

Quality checks. Ask: Did I do the steps in order? Did I stay nonjudgmental? Did my actions move me toward values and goals? What will I tweak next time?

Safety and ethics. Use skills in ways that are safe for you and others. Seek professional support for acute risk. Skills complement—not replace—medical care.
`,
      quiz: [
{
  id: "q1",
  prompt: "DEFINITION — Which statement best defines Biosocial Theory & DBT Assumptions?",
  options: [
    { text: "A way to avoid difficult conversations indefinitely" }},
{ text: "A breathing technique that always eliminates anxiety" }},
{ text: "A DBT concept or tool related to Biosocial Theory & DBT Assumptions.", correct: true }},
{ text: "A rule that you must be calm before acting" }}
  ]
},
      {
  id: "q2",
  prompt: "NOT — Which of the following is NOT a component of Biosocial Theory & DBT Assumptions?",
  options: [
    { text: "Discounting the positive", correct: true }},
{ text: "Practice mindfully" }},
{ text: "Clarify goals" }},
{ text: "Align to values" }}
  ]
},
      {
  id: "q3",
  prompt: "COMPARE — What distinguishes Biosocial Theory & DBT Assumptions from Opposite Action?",
  options: [
    { text: "Biosocial Theory & DBT Assumptions and Opposite Action are identical" }},
{ text: "Biosocial Theory & DBT Assumptions is only for groups, not individuals" }},
{ text: "Biosocial Theory & DBT Assumptions follows a specific sequence; Opposite Action targets a different goal", correct: true }},
{ text: "Opposite Action always comes first no matter the case" }}
  ]
},
      {
  id: "q4",
  prompt: "SCENARIO — In a situation like high-stress situations, what is the best first move?",
  options: [
    { text: "Use GIVE" }},
{ text: "Use Biosocial Theory & DBT Assumptions", correct: true }},
{ text: "Use Radical Acceptance" }},
{ text: "Do nothing and hope it resolves" }}
  ]
},
      {
  id: "q5",
  prompt: "FILL‑IN — Biosocial Theory & DBT Assumptions emphasizes ______ to help you act skillfully.",
  options: [
    { text: "winning at all costs" }},
{ text: "overthinking" }},
{ text: "Biosocial Theory & DBT Assumptions steps", correct: true }},
{ text: "avoiding feelings" }}
  ]
},
      {
  id: "q6",
  prompt: "EXAMPLE — Which option best illustrates Biosocial Theory & DBT Assumptions?",
  options: [
    { text: "Making a decision while furious" }},
{ text: "Ignoring physical needs" }},
{ text: "Applying the steps of Biosocial Theory & DBT Assumptions during a real situation and aligning actions with goals", correct: true }},
{ text: "Ranting on social media" }}
  ]
},
      {
  id: "q7",
  prompt: "TROUBLESHOOT — If you notice this pitfall: “Skipping steps”, what should you do?",
  options: [
    { text: "Wait until you feel motivated" }},
{ text: "Quit using the skill" }},
{ text: "Return to the step sequence and simplify the next step", correct: true }},
{ text: "Blame the situation" }}
  ]
},
      {
  id: "q8",
  prompt: "COMPARE — What distinguishes Biosocial Theory & DBT Assumptions from Radical Acceptance?",
  options: [
    { text: "Radical Acceptance always comes first no matter the case" }},
{ text: "Biosocial Theory & DBT Assumptions follows a specific sequence; Radical Acceptance targets a different goal", correct: true }},
{ text: "Biosocial Theory & DBT Assumptions and Radical Acceptance are identical" }},
{ text: "Biosocial Theory & DBT Assumptions is only for groups, not individuals" }}
  ]
},
      {
  id: "q9",
  prompt: "DIARY CARD — A diary shows high arousal spikes before difficult calls. Which skill would you try first?",
  options: [
    { text: "Vent for 20 minutes" }},
{ text: "Biosocial Theory & DBT Assumptions", correct: true }},
{ text: "Over-plan and delay again" }},
{ text: "Skip the call" }}
  ]
},
      {
  id: "q10",
  prompt: "ETHICS — What is a key ethical safeguard when practicing Biosocial Theory & DBT Assumptions?",
  options: [
    { text: "Share others’ private data for accountability" }},
{ text: "Use the skill as a substitute for medical care" }},
{ text: "Use the skill in ways that are safe for you and others; escalate support if risk increases", correct: true }},
{ text: "Force others to practice the skill" }}
  ]
}
      ]
    },

    {
      id: "lesson_04",
      title: "04. Target Hierarchy & Treatment Stages",
      minutes: 18,
      reading: `
Target Hierarchy & Treatment Stages — This lesson provides a clear, practice-ready overview and a mini toolkit you can apply immediately. We'll define the skill or concept, explain when and why to use it, and outline concrete steps with examples. As you read, identify one real situation you can apply this to within the next 24–48 hours.

What you’ll learn: Life-threatening, therapy-interfering, and quality-of-life targets; Stage 1–4 trajectory. How to know when this skill is indicated versus when a different skill is a better fit. Step-by-step guidance with plain-language examples. Common traps and how to avoid them. How to practice, measure progress, and get feedback.

Real‑world example. Imagine a recent situation that triggered strong emotion. Walk through the steps out loud or in writing. If you get stuck, simplify the step and repeat. Aim for small wins and clear learning, not perfection.

Practice plan. Schedule a 10‑minute daily practice block for the next week. Use implementation intentions ("If X happens, then I will do Y") and record outcomes on your diary card. Review in your next session or with a peer coach.

Quality checks. Ask: Did I do the steps in order? Did I stay nonjudgmental? Did my actions move me toward values and goals? What will I tweak next time?

Safety and ethics. Use skills in ways that are safe for you and others. Seek professional support for acute risk. Skills complement—not replace—medical care.
`,
      quiz: [
{
  id: "q1",
  prompt: "DEFINITION — Which statement best defines Target Hierarchy & Treatment Stages?",
  options: [
    { text: "A breathing technique that always eliminates anxiety" }},
{ text: "A relaxation method that replaces problem solving" }},
{ text: "A DBT concept or tool related to Target Hierarchy & Treatment Stages.", correct: true }},
{ text: "A way to avoid difficult conversations indefinitely" }}
  ]
},
      {
  id: "q2",
  prompt: "NOT — Which of the following is NOT a component of Target Hierarchy & Treatment Stages?",
  options: [
    { text: "Align to values" }},
{ text: "Rumination", correct: true }},
{ text: "Practice mindfully" }},
{ text: "Clarify goals" }}
  ]
},
      {
  id: "q3",
  prompt: "COMPARE — What distinguishes Target Hierarchy & Treatment Stages from Opposite Action?",
  options: [
    { text: "Target Hierarchy & Treatment Stages follows a specific sequence; Opposite Action targets a different goal", correct: true }},
{ text: "Target Hierarchy & Treatment Stages is only for groups, not individuals" }},
{ text: "Target Hierarchy & Treatment Stages and Opposite Action are identical" }},
{ text: "Opposite Action always comes first no matter the case" }}
  ]
},
      {
  id: "q4",
  prompt: "SCENARIO — In a situation like high-stress situations, what is the best first move?",
  options: [
    { text: "Use Target Hierarchy & Treatment Stages", correct: true }},
{ text: "Use GIVE" }},
{ text: "Do nothing and hope it resolves" }},
{ text: "Use Radical Acceptance" }}
  ]
},
      {
  id: "q5",
  prompt: "FILL‑IN — Target Hierarchy & Treatment Stages emphasizes ______ to help you act skillfully.",
  options: [
    { text: "avoiding feelings" }},
{ text: "Target Hierarchy & Treatment Stages steps", correct: true }},
{ text: "overthinking" }},
{ text: "winning at all costs" }}
  ]
},
      {
  id: "q6",
  prompt: "EXAMPLE — Which option best illustrates Target Hierarchy & Treatment Stages?",
  options: [
    { text: "Applying the steps of Target Hierarchy & Treatment Stages during a real situation and aligning actions with goals", correct: true }},
{ text: "Ignoring physical needs" }},
{ text: "Making a decision while furious" }},
{ text: "Ranting on social media" }}
  ]
},
      {
  id: "q7",
  prompt: "TROUBLESHOOT — If you notice this pitfall: “Giving up too soon”, what should you do?",
  options: [
    { text: "Return to the step sequence and simplify the next step", correct: true }},
{ text: "Wait until you feel motivated" }},
{ text: "Blame the situation" }},
{ text: "Quit using the skill" }}
  ]
},
      {
  id: "q8",
  prompt: "COMPARE — What distinguishes Target Hierarchy & Treatment Stages from Radical Acceptance?",
  options: [
    { text: "Target Hierarchy & Treatment Stages and Radical Acceptance are identical" }},
{ text: "Target Hierarchy & Treatment Stages is only for groups, not individuals" }},
{ text: "Target Hierarchy & Treatment Stages follows a specific sequence; Radical Acceptance targets a different goal", correct: true }},
{ text: "Radical Acceptance always comes first no matter the case" }}
  ]
},
      {
  id: "q9",
  prompt: "DIARY CARD — A diary shows high arousal spikes before difficult calls. Which skill would you try first?",
  options: [
    { text: "Vent for 20 minutes" }},
{ text: "Over-plan and delay again" }},
{ text: "Skip the call" }},
{ text: "Target Hierarchy & Treatment Stages", correct: true }}
  ]
},
      {
  id: "q10",
  prompt: "ETHICS — What is a key ethical safeguard when practicing Target Hierarchy & Treatment Stages?",
  options: [
    { text: "Share others’ private data for accountability" }},
{ text: "Use the skill as a substitute for medical care" }},
{ text: "Use the skill in ways that are safe for you and others; escalate support if risk increases", correct: true }},
{ text: "Force others to practice the skill" }}
  ]
}
      ]
    },

    {
      id: "lesson_05",
      title: "05. Mindfulness Foundations (What & How)",
      minutes: 18,
      reading: `
Mindfulness Foundations (What & How) — This lesson provides a clear, practice-ready overview and a mini toolkit you can apply immediately. We'll define the skill or concept, explain when and why to use it, and outline concrete steps with examples. As you read, identify one real situation you can apply this to within the next 24–48 hours.

What you’ll learn: What-skills and How-skills as the backbone of DBT mindfulness. How to know when this skill is indicated versus when a different skill is a better fit. Step-by-step guidance with plain-language examples. Common traps and how to avoid them. How to practice, measure progress, and get feedback.

Real‑world example. Imagine a recent situation that triggered strong emotion. Walk through the steps out loud or in writing. If you get stuck, simplify the step and repeat. Aim for small wins and clear learning, not perfection.

Practice plan. Schedule a 10‑minute daily practice block for the next week. Use implementation intentions ("If X happens, then I will do Y") and record outcomes on your diary card. Review in your next session or with a peer coach.

Quality checks. Ask: Did I do the steps in order? Did I stay nonjudgmental? Did my actions move me toward values and goals? What will I tweak next time?

Safety and ethics. Use skills in ways that are safe for you and others. Seek professional support for acute risk. Skills complement—not replace—medical care.
`,
      quiz: [
{
  id: "q1",
  prompt: "DEFINITION — Which statement best defines Mindfulness Foundations (What & How)?",
  options: [
    { text: "A breathing technique that always eliminates anxiety" }},
{ text: "A relaxation method that replaces problem solving" }},
{ text: "A DBT concept or tool related to Mindfulness Foundations (What & How).", correct: true }},
{ text: "A rule that you must be calm before acting" }}
  ]
},
      {
  id: "q2",
  prompt: "NOT — Which of the following is NOT a component of Mindfulness Foundations (What & How)?",
  options: [
    { text: "Clarify goals" }},
{ text: "Align to values" }},
{ text: "Mind reading as a certainty", correct: true }},
{ text: "Practice mindfully" }}
  ]
},
      {
  id: "q3",
  prompt: "COMPARE — What distinguishes Mindfulness Foundations (What & How) from Opposite Action?",
  options: [
    { text: "Opposite Action always comes first no matter the case" }},
{ text: "Mindfulness Foundations (What & How) and Opposite Action are identical" }},
{ text: "Mindfulness Foundations (What & How) follows a specific sequence; Opposite Action targets a different goal", correct: true }},
{ text: "Mindfulness Foundations (What & How) is only for groups, not individuals" }}
  ]
},
      {
  id: "q4",
  prompt: "SCENARIO — In a situation like high-stress situations, what is the best first move?",
  options: [
    { text: "Use Opposite Action" }},
{ text: "Do nothing and hope it resolves" }},
{ text: "Use Radical Acceptance" }},
{ text: "Use Mindfulness Foundations (What & How)", correct: true }}
  ]
},
      {
  id: "q5",
  prompt: "FILL‑IN — Mindfulness Foundations (What & How) emphasizes ______ to help you act skillfully.",
  options: [
    { text: "winning at all costs" }},
{ text: "Mindfulness Foundations (What & How) steps", correct: true }},
{ text: "avoiding feelings" }},
{ text: "overthinking" }}
  ]
},
      {
  id: "q6",
  prompt: "EXAMPLE — Which option best illustrates Mindfulness Foundations (What & How)?",
  options: [
    { text: "Applying the steps of Mindfulness Foundations (What & How) during a real situation and aligning actions with goals", correct: true }},
{ text: "Ranting on social media" }},
{ text: "Ignoring physical needs" }},
{ text: "Making a decision while furious" }}
  ]
},
      {
  id: "q7",
  prompt: "TROUBLESHOOT — If you notice this pitfall: “Giving up too soon”, what should you do?",
  options: [
    { text: "Blame the situation" }},
{ text: "Wait until you feel motivated" }},
{ text: "Return to the step sequence and simplify the next step", correct: true }},
{ text: "Quit using the skill" }}
  ]
},
      {
  id: "q8",
  prompt: "COMPARE — What distinguishes Mindfulness Foundations (What & How) from Radical Acceptance?",
  options: [
    { text: "Mindfulness Foundations (What & How) is only for groups, not individuals" }},
{ text: "Mindfulness Foundations (What & How) follows a specific sequence; Radical Acceptance targets a different goal", correct: true }},
{ text: "Mindfulness Foundations (What & How) and Radical Acceptance are identical" }},
{ text: "Radical Acceptance always comes first no matter the case" }}
  ]
},
      {
  id: "q9",
  prompt: "DIARY CARD — A diary shows high arousal spikes before difficult calls. Which skill would you try first?",
  options: [
    { text: "Mindfulness Foundations (What & How)", correct: true }},
{ text: "Skip the call" }},
{ text: "Vent for 20 minutes" }},
{ text: "Over-plan and delay again" }}
  ]
},
      {
  id: "q10",
  prompt: "ETHICS — What is a key ethical safeguard when practicing Mindfulness Foundations (What & How)?",
  options: [
    { text: "Use the skill in ways that are safe for you and others; escalate support if risk increases", correct: true }},
{ text: "Force others to practice the skill" }},
{ text: "Use the skill as a substitute for medical care" }},
{ text: "Share others’ private data for accountability" }}
  ]
}
      ]
    },

    {
      id: "lesson_06",
      title: "06. Wise Mind",
      minutes: 18,
      reading: `
Wise Mind — This lesson provides a clear, practice-ready overview and a mini toolkit you can apply immediately. We'll define the skill or concept, explain when and why to use it, and outline concrete steps with examples. As you read, identify one real situation you can apply this to within the next 24–48 hours.

What you’ll learn: Integrating Emotion Mind and Reasonable Mind; accessing Wise Mind. How to know when this skill is indicated versus when a different skill is a better fit. Step-by-step guidance with plain-language examples. Common traps and how to avoid them. How to practice, measure progress, and get feedback.

Real‑world example. Imagine a recent situation that triggered strong emotion. Walk through the steps out loud or in writing. If you get stuck, simplify the step and repeat. Aim for small wins and clear learning, not perfection.

Practice plan. Schedule a 10‑minute daily practice block for the next week. Use implementation intentions ("If X happens, then I will do Y") and record outcomes on your diary card. Review in your next session or with a peer coach.

Quality checks. Ask: Did I do the steps in order? Did I stay nonjudgmental? Did my actions move me toward values and goals? What will I tweak next time?

Safety and ethics. Use skills in ways that are safe for you and others. Seek professional support for acute risk. Skills complement—not replace—medical care.
`,
      quiz: [
{
  id: "q1",
  prompt: "DEFINITION — Which statement best defines Wise Mind?",
  options: [
    { text: "A DBT concept or tool related to Wise Mind.", correct: true }},
{ text: "A relaxation method that replaces problem solving" }},
{ text: "A rule that you must be calm before acting" }},
{ text: "A way to avoid difficult conversations indefinitely" }}
  ]
},
      {
  id: "q2",
  prompt: "NOT — Which of the following is NOT a component of Wise Mind?",
  options: [
    { text: "Clarify goals" }},
{ text: "Rumination", correct: true }},
{ text: "Practice mindfully" }},
{ text: "Align to values" }}
  ]
},
      {
  id: "q3",
  prompt: "COMPARE — What distinguishes Wise Mind from Opposite Action?",
  options: [
    { text: "Wise Mind and Opposite Action are identical" }},
{ text: "Opposite Action always comes first no matter the case" }},
{ text: "Wise Mind is only for groups, not individuals" }},
{ text: "Wise Mind follows a specific sequence; Opposite Action targets a different goal", correct: true }}
  ]
},
      {
  id: "q4",
  prompt: "SCENARIO — In a situation like high-stress situations, what is the best first move?",
  options: [
    { text: "Use Wise Mind", correct: true }},
{ text: "Use Radical Acceptance" }},
{ text: "Do nothing and hope it resolves" }},
{ text: "Use Opposite Action" }}
  ]
},
      {
  id: "q5",
  prompt: "FILL‑IN — Wise Mind emphasizes ______ to help you act skillfully.",
  options: [
    { text: "Wise Mind steps", correct: true }},
{ text: "avoiding feelings" }},
{ text: "overthinking" }},
{ text: "winning at all costs" }}
  ]
},
      {
  id: "q6",
  prompt: "EXAMPLE — Which option best illustrates Wise Mind?",
  options: [
    { text: "Ignoring physical needs" }},
{ text: "Applying the steps of Wise Mind during a real situation and aligning actions with goals", correct: true }},
{ text: "Ranting on social media" }},
{ text: "Making a decision while furious" }}
  ]
},
      {
  id: "q7",
  prompt: "TROUBLESHOOT — If you notice this pitfall: “Using the skill in the wrong context”, what should you do?",
  options: [
    { text: "Quit using the skill" }},
{ text: "Blame the situation" }},
{ text: "Return to the step sequence and simplify the next step", correct: true }},
{ text: "Wait until you feel motivated" }}
  ]
},
      {
  id: "q8",
  prompt: "COMPARE — What distinguishes Wise Mind from Radical Acceptance?",
  options: [
    { text: "Wise Mind is only for groups, not individuals" }},
{ text: "Wise Mind and Radical Acceptance are identical" }},
{ text: "Radical Acceptance always comes first no matter the case" }},
{ text: "Wise Mind follows a specific sequence; Radical Acceptance targets a different goal", correct: true }}
  ]
},
      {
  id: "q9",
  prompt: "DIARY CARD — A diary shows high arousal spikes before difficult calls. Which skill would you try first?",
  options: [
    { text: "Wise Mind", correct: true }},
{ text: "Vent for 20 minutes" }},
{ text: "Over-plan and delay again" }},
{ text: "Skip the call" }}
  ]
},
      {
  id: "q10",
  prompt: "ETHICS — What is a key ethical safeguard when practicing Wise Mind?",
  options: [
    { text: "Use the skill in ways that are safe for you and others; escalate support if risk increases", correct: true }},
{ text: "Share others’ private data for accountability" }},
{ text: "Force others to practice the skill" }},
{ text: "Use the skill as a substitute for medical care" }}
  ]
}
      ]
    },

    {
      id: "lesson_07",
      title: "07. Mindfulness What: Observe",
      minutes: 18,
      reading: `
Mindfulness What: Observe — This lesson provides a clear, practice-ready overview and a mini toolkit you can apply immediately. We'll define the skill or concept, explain when and why to use it, and outline concrete steps with examples. As you read, identify one real situation you can apply this to within the next 24–48 hours.

What you’ll learn: Noticing sensations, thoughts, and urges without altering them. How to know when this skill is indicated versus when a different skill is a better fit. Step-by-step guidance with plain-language examples. Common traps and how to avoid them. How to practice, measure progress, and get feedback.

Real‑world example. Imagine a recent situation that triggered strong emotion. Walk through the steps out loud or in writing. If you get stuck, simplify the step and repeat. Aim for small wins and clear learning, not perfection.

Practice plan. Schedule a 10‑minute daily practice block for the next week. Use implementation intentions ("If X happens, then I will do Y") and record outcomes on your diary card. Review in your next session or with a peer coach.

Quality checks. Ask: Did I do the steps in order? Did I stay nonjudgmental? Did my actions move me toward values and goals? What will I tweak next time?

Safety and ethics. Use skills in ways that are safe for you and others. Seek professional support for acute risk. Skills complement—not replace—medical care.
`,
      quiz: [
{
  id: "q1",
  prompt: "DEFINITION — Which statement best defines Mindfulness What: Observe?",
  options: [
    { text: "A DBT concept or tool related to Mindfulness What: Observe.", correct: true }},
{ text: "A relaxation method that replaces problem solving" }},
{ text: "A rule that you must be calm before acting" }},
{ text: "A breathing technique that always eliminates anxiety" }}
  ]
},
      {
  id: "q2",
  prompt: "NOT — Which of the following is NOT a component of Mindfulness What: Observe?",
  options: [
    { text: "Clarify goals" }},
{ text: "Avoidance", correct: true }},
{ text: "Practice mindfully" }},
{ text: "Align to values" }}
  ]
},
      {
  id: "q3",
  prompt: "COMPARE — What distinguishes Mindfulness What: Observe from Opposite Action?",
  options: [
    { text: "Mindfulness What: Observe and Opposite Action are identical" }},
{ text: "Mindfulness What: Observe follows a specific sequence; Opposite Action targets a different goal", correct: true }},
{ text: "Mindfulness What: Observe is only for groups, not individuals" }},
{ text: "Opposite Action always comes first no matter the case" }}
  ]
},
      {
  id: "q4",
  prompt: "SCENARIO — In a situation like high-stress situations, what is the best first move?",
  options: [
    { text: "Do nothing and hope it resolves" }},
{ text: "Use Radical Acceptance" }},
{ text: "Use Mindfulness What: Observe", correct: true }},
{ text: "Use GIVE" }}
  ]
},
      {
  id: "q5",
  prompt: "FILL‑IN — Mindfulness What: Observe emphasizes ______ to help you act skillfully.",
  options: [
    { text: "avoiding feelings" }},
{ text: "overthinking" }},
{ text: "winning at all costs" }},
{ text: "Mindfulness What: Observe steps", correct: true }}
  ]
},
      {
  id: "q6",
  prompt: "EXAMPLE — Which option best illustrates Mindfulness What: Observe?",
  options: [
    { text: "Applying the steps of Mindfulness What: Observe during a real situation and aligning actions with goals", correct: true }},
{ text: "Ranting on social media" }},
{ text: "Ignoring physical needs" }},
{ text: "Making a decision while furious" }}
  ]
},
      {
  id: "q7",
  prompt: "TROUBLESHOOT — If you notice this pitfall: “Using the skill in the wrong context”, what should you do?",
  options: [
    { text: "Wait until you feel motivated" }},
{ text: "Blame the situation" }},
{ text: "Return to the step sequence and simplify the next step", correct: true }},
{ text: "Quit using the skill" }}
  ]
},
      {
  id: "q8",
  prompt: "COMPARE — What distinguishes Mindfulness What: Observe from Radical Acceptance?",
  options: [
    { text: "Mindfulness What: Observe follows a specific sequence; Radical Acceptance targets a different goal", correct: true }},
{ text: "Mindfulness What: Observe and Radical Acceptance are identical" }},
{ text: "Radical Acceptance always comes first no matter the case" }},
{ text: "Mindfulness What: Observe is only for groups, not individuals" }}
  ]
},
      {
  id: "q9",
  prompt: "DIARY CARD — A diary shows high arousal spikes before difficult calls. Which skill would you try first?",
  options: [
    { text: "Mindfulness What: Observe", correct: true }},
{ text: "Vent for 20 minutes" }},
{ text: "Skip the call" }},
{ text: "Over-plan and delay again" }}
  ]
},
      {
  id: "q10",
  prompt: "ETHICS — What is a key ethical safeguard when practicing Mindfulness What: Observe?",
  options: [
    { text: "Share others’ private data for accountability" }},
{ text: "Force others to practice the skill" }},
{ text: "Use the skill as a substitute for medical care" }},
{ text: "Use the skill in ways that are safe for you and others; escalate support if risk increases", correct: true }}
  ]
}
      ]
    },

    {
      id: "lesson_08",
      title: "08. Mindfulness What: Describe",
      minutes: 18,
      reading: `
Mindfulness What: Describe — This lesson provides a clear, practice-ready overview and a mini toolkit you can apply immediately. We'll define the skill or concept, explain when and why to use it, and outline concrete steps with examples. As you read, identify one real situation you can apply this to within the next 24–48 hours.

What you’ll learn: Putting experience into words neutrally and specifically. How to know when this skill is indicated versus when a different skill is a better fit. Step-by-step guidance with plain-language examples. Common traps and how to avoid them. How to practice, measure progress, and get feedback.

Real‑world example. Imagine a recent situation that triggered strong emotion. Walk through the steps out loud or in writing. If you get stuck, simplify the step and repeat. Aim for small wins and clear learning, not perfection.

Practice plan. Schedule a 10‑minute daily practice block for the next week. Use implementation intentions ("If X happens, then I will do Y") and record outcomes on your diary card. Review in your next session or with a peer coach.

Quality checks. Ask: Did I do the steps in order? Did I stay nonjudgmental? Did my actions move me toward values and goals? What will I tweak next time?

Safety and ethics. Use skills in ways that are safe for you and others. Seek professional support for acute risk. Skills complement—not replace—medical care.
`,
      quiz: [
{
  id: "q1",
  prompt: "DEFINITION — Which statement best defines Mindfulness What: Describe?",
  options: [
    { text: "A breathing technique that always eliminates anxiety" }},
{ text: "A DBT concept or tool related to Mindfulness What: Describe.", correct: true }},
{ text: "A way to avoid difficult conversations indefinitely" }},
{ text: "A rule that you must be calm before acting" }}
  ]
},
      {
  id: "q2",
  prompt: "NOT — Which of the following is NOT a component of Mindfulness What: Describe?",
  options: [
    { text: "Clarify goals" }},
{ text: "Discounting the positive", correct: true }},
{ text: "Align to values" }},
{ text: "Practice mindfully" }}
  ]
},
      {
  id: "q3",
  prompt: "COMPARE — What distinguishes Mindfulness What: Describe from Opposite Action?",
  options: [
    { text: "Mindfulness What: Describe and Opposite Action are identical" }},
{ text: "Mindfulness What: Describe is only for groups, not individuals" }},
{ text: "Opposite Action always comes first no matter the case" }},
{ text: "Mindfulness What: Describe follows a specific sequence; Opposite Action targets a different goal", correct: true }}
  ]
},
      {
  id: "q4",
  prompt: "SCENARIO — In a situation like high-stress situations, what is the best first move?",
  options: [
    { text: "Use GIVE" }},
{ text: "Use Opposite Action" }},
{ text: "Do nothing and hope it resolves" }},
{ text: "Use Mindfulness What: Describe", correct: true }}
  ]
},
      {
  id: "q5",
  prompt: "FILL‑IN — Mindfulness What: Describe emphasizes ______ to help you act skillfully.",
  options: [
    { text: "winning at all costs" }},
{ text: "overthinking" }},
{ text: "avoiding feelings" }},
{ text: "Mindfulness What: Describe steps", correct: true }}
  ]
},
      {
  id: "q6",
  prompt: "EXAMPLE — Which option best illustrates Mindfulness What: Describe?",
  options: [
    { text: "Applying the steps of Mindfulness What: Describe during a real situation and aligning actions with goals", correct: true }},
{ text: "Ignoring physical needs" }},
{ text: "Making a decision while furious" }},
{ text: "Ranting on social media" }}
  ]
},
      {
  id: "q7",
  prompt: "TROUBLESHOOT — If you notice this pitfall: “Skipping steps”, what should you do?",
  options: [
    { text: "Wait until you feel motivated" }},
{ text: "Quit using the skill" }},
{ text: "Return to the step sequence and simplify the next step", correct: true }},
{ text: "Blame the situation" }}
  ]
},
      {
  id: "q8",
  prompt: "COMPARE — What distinguishes Mindfulness What: Describe from Radical Acceptance?",
  options: [
    { text: "Mindfulness What: Describe and Radical Acceptance are identical" }},
{ text: "Radical Acceptance always comes first no matter the case" }},
{ text: "Mindfulness What: Describe follows a specific sequence; Radical Acceptance targets a different goal", correct: true }},
{ text: "Mindfulness What: Describe is only for groups, not individuals" }}
  ]
},
      {
  id: "q9",
  prompt: "DIARY CARD — A diary shows high arousal spikes before difficult calls. Which skill would you try first?",
  options: [
    { text: "Mindfulness What: Describe", correct: true }},
{ text: "Over-plan and delay again" }},
{ text: "Vent for 20 minutes" }},
{ text: "Skip the call" }}
  ]
},
      {
  id: "q10",
  prompt: "ETHICS — What is a key ethical safeguard when practicing Mindfulness What: Describe?",
  options: [
    { text: "Force others to practice the skill" }},
{ text: "Share others’ private data for accountability" }},
{ text: "Use the skill as a substitute for medical care" }},
{ text: "Use the skill in ways that are safe for you and others; escalate support if risk increases", correct: true }}
  ]
}
      ]
    },

    {
      id: "lesson_09",
      title: "09. Mindfulness What: Participate",
      minutes: 18,
      reading: `
Mindfulness What: Participate — This lesson provides a clear, practice-ready overview and a mini toolkit you can apply immediately. We'll define the skill or concept, explain when and why to use it, and outline concrete steps with examples. As you read, identify one real situation you can apply this to within the next 24–48 hours.

What you’ll learn: Fully engaging in the current activity with skillful intention. How to know when this skill is indicated versus when a different skill is a better fit. Step-by-step guidance with plain-language examples. Common traps and how to avoid them. How to practice, measure progress, and get feedback.

Real‑world example. Imagine a recent situation that triggered strong emotion. Walk through the steps out loud or in writing. If you get stuck, simplify the step and repeat. Aim for small wins and clear learning, not perfection.

Practice plan. Schedule a 10‑minute daily practice block for the next week. Use implementation intentions ("If X happens, then I will do Y") and record outcomes on your diary card. Review in your next session or with a peer coach.

Quality checks. Ask: Did I do the steps in order? Did I stay nonjudgmental? Did my actions move me toward values and goals? What will I tweak next time?

Safety and ethics. Use skills in ways that are safe for you and others. Seek professional support for acute risk. Skills complement—not replace—medical care.
`,
      quiz: [
{
  id: "q1",
  prompt: "DEFINITION — Which statement best defines Mindfulness What: Participate?",
  options: [
    { text: "A relaxation method that replaces problem solving" }},
{ text: "A way to avoid difficult conversations indefinitely" }},
{ text: "A breathing technique that always eliminates anxiety" }},
{ text: "A DBT concept or tool related to Mindfulness What: Participate.", correct: true }}
  ]
},
      {
  id: "q2",
  prompt: "NOT — Which of the following is NOT a component of Mindfulness What: Participate?",
  options: [
    { text: "Clarify goals" }},
{ text: "Overgeneralization", correct: true }},
{ text: "Practice mindfully" }},
{ text: "Align to values" }}
  ]
},
      {
  id: "q3",
  prompt: "COMPARE — What distinguishes Mindfulness What: Participate from Opposite Action?",
  options: [
    { text: "Mindfulness What: Participate is only for groups, not individuals" }},
{ text: "Opposite Action always comes first no matter the case" }},
{ text: "Mindfulness What: Participate follows a specific sequence; Opposite Action targets a different goal", correct: true }},
{ text: "Mindfulness What: Participate and Opposite Action are identical" }}
  ]
},
      {
  id: "q4",
  prompt: "SCENARIO — In a situation like high-stress situations, what is the best first move?",
  options: [
    { text: "Use GIVE" }},
{ text: "Use Radical Acceptance" }},
{ text: "Use Opposite Action" }},
{ text: "Use Mindfulness What: Participate", correct: true }}
  ]
},
      {
  id: "q5",
  prompt: "FILL‑IN — Mindfulness What: Participate emphasizes ______ to help you act skillfully.",
  options: [
    { text: "overthinking" }},
{ text: "avoiding feelings" }},
{ text: "Mindfulness What: Participate steps", correct: true }},
{ text: "winning at all costs" }}
  ]
},
      {
  id: "q6",
  prompt: "EXAMPLE — Which option best illustrates Mindfulness What: Participate?",
  options: [
    { text: "Ranting on social media" }},
{ text: "Ignoring physical needs" }},
{ text: "Making a decision while furious" }},
{ text: "Applying the steps of Mindfulness What: Participate during a real situation and aligning actions with goals", correct: true }}
  ]
},
      {
  id: "q7",
  prompt: "TROUBLESHOOT — If you notice this pitfall: “Using the skill in the wrong context”, what should you do?",
  options: [
    { text: "Quit using the skill" }},
{ text: "Blame the situation" }},
{ text: "Wait until you feel motivated" }},
{ text: "Return to the step sequence and simplify the next step", correct: true }}
  ]
},
      {
  id: "q8",
  prompt: "COMPARE — What distinguishes Mindfulness What: Participate from Radical Acceptance?",
  options: [
    { text: "Mindfulness What: Participate and Radical Acceptance are identical" }},
{ text: "Radical Acceptance always comes first no matter the case" }},
{ text: "Mindfulness What: Participate is only for groups, not individuals" }},
{ text: "Mindfulness What: Participate follows a specific sequence; Radical Acceptance targets a different goal", correct: true }}
  ]
},
      {
  id: "q9",
  prompt: "DIARY CARD — A diary shows high arousal spikes before difficult calls. Which skill would you try first?",
  options: [
    { text: "Vent for 20 minutes" }},
{ text: "Mindfulness What: Participate", correct: true }},
{ text: "Skip the call" }},
{ text: "Over-plan and delay again" }}
  ]
},
      {
  id: "q10",
  prompt: "ETHICS — What is a key ethical safeguard when practicing Mindfulness What: Participate?",
  options: [
    { text: "Use the skill in ways that are safe for you and others; escalate support if risk increases", correct: true }},
{ text: "Use the skill as a substitute for medical care" }},
{ text: "Share others’ private data for accountability" }},
{ text: "Force others to practice the skill" }}
  ]
}
      ]
    },

    {
      id: "lesson_10",
      title: "10. Mindfulness How: Nonjudgmental",
      minutes: 18,
      reading: `
Mindfulness How: Nonjudgmental — This lesson provides a clear, practice-ready overview and a mini toolkit you can apply immediately. We'll define the skill or concept, explain when and why to use it, and outline concrete steps with examples. As you read, identify one real situation you can apply this to within the next 24–48 hours.

What you’ll learn: Observing and describing without labels of good/bad. How to know when this skill is indicated versus when a different skill is a better fit. Step-by-step guidance with plain-language examples. Common traps and how to avoid them. How to practice, measure progress, and get feedback.

Real‑world example. Imagine a recent situation that triggered strong emotion. Walk through the steps out loud or in writing. If you get stuck, simplify the step and repeat. Aim for small wins and clear learning, not perfection.

Practice plan. Schedule a 10‑minute daily practice block for the next week. Use implementation intentions ("If X happens, then I will do Y") and record outcomes on your diary card. Review in your next session or with a peer coach.

Quality checks. Ask: Did I do the steps in order? Did I stay nonjudgmental? Did my actions move me toward values and goals? What will I tweak next time?

Safety and ethics. Use skills in ways that are safe for you and others. Seek professional support for acute risk. Skills complement—not replace—medical care.
`,
      quiz: [
{
  id: "q1",
  prompt: "DEFINITION — Which statement best defines Mindfulness How: Nonjudgmental?",
  options: [
    { text: "A rule that you must be calm before acting" }},
{ text: "A DBT concept or tool related to Mindfulness How: Nonjudgmental.", correct: true }},
{ text: "A breathing technique that always eliminates anxiety" }},
{ text: "A way to avoid difficult conversations indefinitely" }}
  ]
},
      {
  id: "q2",
  prompt: "NOT — Which of the following is NOT a component of Mindfulness How: Nonjudgmental?",
  options: [
    { text: "Clarify goals" }},
{ text: "Align to values" }},
{ text: "Avoidance", correct: true }},
{ text: "Practice mindfully" }}
  ]
},
      {
  id: "q3",
  prompt: "COMPARE — What distinguishes Mindfulness How: Nonjudgmental from Opposite Action?",
  options: [
    { text: "Opposite Action always comes first no matter the case" }},
{ text: "Mindfulness How: Nonjudgmental and Opposite Action are identical" }},
{ text: "Mindfulness How: Nonjudgmental follows a specific sequence; Opposite Action targets a different goal", correct: true }},
{ text: "Mindfulness How: Nonjudgmental is only for groups, not individuals" }}
  ]
},
      {
  id: "q4",
  prompt: "SCENARIO — In a situation like high-stress situations, what is the best first move?",
  options: [
    { text: "Use Mindfulness How: Nonjudgmental", correct: true }},
{ text: "Use GIVE" }},
{ text: "Use Opposite Action" }},
{ text: "Do nothing and hope it resolves" }}
  ]
},
      {
  id: "q5",
  prompt: "FILL‑IN — Mindfulness How: Nonjudgmental emphasizes ______ to help you act skillfully.",
  options: [
    { text: "Mindfulness How: Nonjudgmental steps", correct: true }},
{ text: "avoiding feelings" }},
{ text: "overthinking" }},
{ text: "winning at all costs" }}
  ]
},
      {
  id: "q6",
  prompt: "EXAMPLE — Which option best illustrates Mindfulness How: Nonjudgmental?",
  options: [
    { text: "Applying the steps of Mindfulness How: Nonjudgmental during a real situation and aligning actions with goals", correct: true }},
{ text: "Making a decision while furious" }},
{ text: "Ignoring physical needs" }},
{ text: "Ranting on social media" }}
  ]
},
      {
  id: "q7",
  prompt: "TROUBLESHOOT — If you notice this pitfall: “Skipping steps”, what should you do?",
  options: [
    { text: "Return to the step sequence and simplify the next step", correct: true }},
{ text: "Blame the situation" }},
{ text: "Wait until you feel motivated" }},
{ text: "Quit using the skill" }}
  ]
},
      {
  id: "q8",
  prompt: "COMPARE — What distinguishes Mindfulness How: Nonjudgmental from Radical Acceptance?",
  options: [
    { text: "Mindfulness How: Nonjudgmental is only for groups, not individuals" }},
{ text: "Mindfulness How: Nonjudgmental and Radical Acceptance are identical" }},
{ text: "Mindfulness How: Nonjudgmental follows a specific sequence; Radical Acceptance targets a different goal", correct: true }},
{ text: "Radical Acceptance always comes first no matter the case" }}
  ]
},
      {
  id: "q9",
  prompt: "DIARY CARD — A diary shows high arousal spikes before difficult calls. Which skill would you try first?",
  options: [
    { text: "Vent for 20 minutes" }},
{ text: "Over-plan and delay again" }},
{ text: "Skip the call" }},
{ text: "Mindfulness How: Nonjudgmental", correct: true }}
  ]
},
      {
  id: "q10",
  prompt: "ETHICS — What is a key ethical safeguard when practicing Mindfulness How: Nonjudgmental?",
  options: [
    { text: "Share others’ private data for accountability" }},
{ text: "Use the skill in ways that are safe for you and others; escalate support if risk increases", correct: true }},
{ text: "Use the skill as a substitute for medical care" }},
{ text: "Force others to practice the skill" }}
  ]
}
      ]
    },

    {
      id: "lesson_11",
      title: "11. Mindfulness How: One-Mindfully",
      minutes: 18,
      reading: `
Mindfulness How: One-Mindfully — This lesson provides a clear, practice-ready overview and a mini toolkit you can apply immediately. We'll define the skill or concept, explain when and why to use it, and outline concrete steps with examples. As you read, identify one real situation you can apply this to within the next 24–48 hours.

What you’ll learn: Doing one thing at a time; reducing switching costs. How to know when this skill is indicated versus when a different skill is a better fit. Step-by-step guidance with plain-language examples. Common traps and how to avoid them. How to practice, measure progress, and get feedback.

Real‑world example. Imagine a recent situation that triggered strong emotion. Walk through the steps out loud or in writing. If you get stuck, simplify the step and repeat. Aim for small wins and clear learning, not perfection.

Practice plan. Schedule a 10‑minute daily practice block for the next week. Use implementation intentions ("If X happens, then I will do Y") and record outcomes on your diary card. Review in your next session or with a peer coach.

Quality checks. Ask: Did I do the steps in order? Did I stay nonjudgmental? Did my actions move me toward values and goals? What will I tweak next time?

Safety and ethics. Use skills in ways that are safe for you and others. Seek professional support for acute risk. Skills complement—not replace—medical care.
`,
      quiz: [
{
  id: "q1",
  prompt: "DEFINITION — Which statement best defines Mindfulness How: One-Mindfully?",
  options: [
    { text: "A rule that you must be calm before acting" }},
{ text: "A breathing technique that always eliminates anxiety" }},
{ text: "A relaxation method that replaces problem solving" }},
{ text: "A DBT concept or tool related to Mindfulness How: One-Mindfully.", correct: true }}
  ]
},
      {
  id: "q2",
  prompt: "NOT — Which of the following is NOT a component of Mindfulness How: One-Mindfully?",
  options: [
    { text: "Clarify goals" }},
{ text: "Catastrophizing", correct: true }},
{ text: "Practice mindfully" }},
{ text: "Align to values" }}
  ]
},
      {
  id: "q3",
  prompt: "COMPARE — What distinguishes Mindfulness How: One-Mindfully from Opposite Action?",
  options: [
    { text: "Mindfulness How: One-Mindfully is only for groups, not individuals" }},
{ text: "Mindfulness How: One-Mindfully follows a specific sequence; Opposite Action targets a different goal", correct: true }},
{ text: "Opposite Action always comes first no matter the case" }},
{ text: "Mindfulness How: One-Mindfully and Opposite Action are identical" }}
  ]
},
      {
  id: "q4",
  prompt: "SCENARIO — In a situation like high-stress situations, what is the best first move?",
  options: [
    { text: "Do nothing and hope it resolves" }},
{ text: "Use Opposite Action" }},
{ text: "Use GIVE" }},
{ text: "Use Mindfulness How: One-Mindfully", correct: true }}
  ]
},
      {
  id: "q5",
  prompt: "FILL‑IN — Mindfulness How: One-Mindfully emphasizes ______ to help you act skillfully.",
  options: [
    { text: "avoiding feelings" }},
{ text: "overthinking" }},
{ text: "winning at all costs" }},
{ text: "Mindfulness How: One-Mindfully steps", correct: true }}
  ]
},
      {
  id: "q6",
  prompt: "EXAMPLE — Which option best illustrates Mindfulness How: One-Mindfully?",
  options: [
    { text: "Ranting on social media" }},
{ text: "Ignoring physical needs" }},
{ text: "Applying the steps of Mindfulness How: One-Mindfully during a real situation and aligning actions with goals", correct: true }},
{ text: "Making a decision while furious" }}
  ]
},
      {
  id: "q7",
  prompt: "TROUBLESHOOT — If you notice this pitfall: “Using the skill in the wrong context”, what should you do?",
  options: [
    { text: "Quit using the skill" }},
{ text: "Blame the situation" }},
{ text: "Wait until you feel motivated" }},
{ text: "Return to the step sequence and simplify the next step", correct: true }}
  ]
},
      {
  id: "q8",
  prompt: "COMPARE — What distinguishes Mindfulness How: One-Mindfully from Radical Acceptance?",
  options: [
    { text: "Mindfulness How: One-Mindfully and Radical Acceptance are identical" }},
{ text: "Mindfulness How: One-Mindfully is only for groups, not individuals" }},
{ text: "Mindfulness How: One-Mindfully follows a specific sequence; Radical Acceptance targets a different goal", correct: true }},
{ text: "Radical Acceptance always comes first no matter the case" }}
  ]
},
      {
  id: "q9",
  prompt: "DIARY CARD — A diary shows high arousal spikes before difficult calls. Which skill would you try first?",
  options: [
    { text: "Over-plan and delay again" }},
{ text: "Mindfulness How: One-Mindfully", correct: true }},
{ text: "Vent for 20 minutes" }},
{ text: "Skip the call" }}
  ]
},
      {
  id: "q10",
  prompt: "ETHICS — What is a key ethical safeguard when practicing Mindfulness How: One-Mindfully?",
  options: [
    { text: "Use the skill as a substitute for medical care" }},
{ text: "Use the skill in ways that are safe for you and others; escalate support if risk increases", correct: true }},
{ text: "Share others’ private data for accountability" }},
{ text: "Force others to practice the skill" }}
  ]
}
      ]
    },

    {
      id: "lesson_12",
      title: "12. Mindfulness How: Effectively",
      minutes: 18,
      reading: `
Mindfulness How: Effectively — This lesson provides a clear, practice-ready overview and a mini toolkit you can apply immediately. We'll define the skill or concept, explain when and why to use it, and outline concrete steps with examples. As you read, identify one real situation you can apply this to within the next 24–48 hours.

What you’ll learn: Doing what works in service of goals and values. How to know when this skill is indicated versus when a different skill is a better fit. Step-by-step guidance with plain-language examples. Common traps and how to avoid them. How to practice, measure progress, and get feedback.

Real‑world example. Imagine a recent situation that triggered strong emotion. Walk through the steps out loud or in writing. If you get stuck, simplify the step and repeat. Aim for small wins and clear learning, not perfection.

Practice plan. Schedule a 10‑minute daily practice block for the next week. Use implementation intentions ("If X happens, then I will do Y") and record outcomes on your diary card. Review in your next session or with a peer coach.

Quality checks. Ask: Did I do the steps in order? Did I stay nonjudgmental? Did my actions move me toward values and goals? What will I tweak next time?

Safety and ethics. Use skills in ways that are safe for you and others. Seek professional support for acute risk. Skills complement—not replace—medical care.
`,
      quiz: [
{
  id: "q1",
  prompt: "DEFINITION — Which statement best defines Mindfulness How: Effectively?",
  options: [
    { text: "A way to avoid difficult conversations indefinitely" }},
{ text: "A rule that you must be calm before acting" }},
{ text: "A DBT concept or tool related to Mindfulness How: Effectively.", correct: true }},
{ text: "A breathing technique that always eliminates anxiety" }}
  ]
},
      {
  id: "q2",
  prompt: "NOT — Which of the following is NOT a component of Mindfulness How: Effectively?",
  options: [
    { text: "Clarify goals" }},
{ text: "Discounting the positive", correct: true }},
{ text: "Align to values" }},
{ text: "Practice mindfully" }}
  ]
},
      {
  id: "q3",
  prompt: "COMPARE — What distinguishes Mindfulness How: Effectively from Opposite Action?",
  options: [
    { text: "Mindfulness How: Effectively follows a specific sequence; Opposite Action targets a different goal", correct: true }},
{ text: "Mindfulness How: Effectively and Opposite Action are identical" }},
{ text: "Opposite Action always comes first no matter the case" }},
{ text: "Mindfulness How: Effectively is only for groups, not individuals" }}
  ]
},
      {
  id: "q4",
  prompt: "SCENARIO — In a situation like high-stress situations, what is the best first move?",
  options: [
    { text: "Use Radical Acceptance" }},
{ text: "Use Mindfulness How: Effectively", correct: true }},
{ text: "Use GIVE" }},
{ text: "Use Opposite Action" }}
  ]
},
      {
  id: "q5",
  prompt: "FILL‑IN — Mindfulness How: Effectively emphasizes ______ to help you act skillfully.",
  options: [
    { text: "winning at all costs" }},
{ text: "Mindfulness How: Effectively steps", correct: true }},
{ text: "overthinking" }},
{ text: "avoiding feelings" }}
  ]
},
      {
  id: "q6",
  prompt: "EXAMPLE — Which option best illustrates Mindfulness How: Effectively?",
  options: [
    { text: "Applying the steps of Mindfulness How: Effectively during a real situation and aligning actions with goals", correct: true }},
{ text: "Making a decision while furious" }},
{ text: "Ranting on social media" }},
{ text: "Ignoring physical needs" }}
  ]
},
      {
  id: "q7",
  prompt: "TROUBLESHOOT — If you notice this pitfall: “Skipping steps”, what should you do?",
  options: [
    { text: "Wait until you feel motivated" }},
{ text: "Return to the step sequence and simplify the next step", correct: true }},
{ text: "Blame the situation" }},
{ text: "Quit using the skill" }}
  ]
},
      {
  id: "q8",
  prompt: "COMPARE — What distinguishes Mindfulness How: Effectively from Radical Acceptance?",
  options: [
    { text: "Mindfulness How: Effectively follows a specific sequence; Radical Acceptance targets a different goal", correct: true }},
{ text: "Mindfulness How: Effectively is only for groups, not individuals" }},
{ text: "Mindfulness How: Effectively and Radical Acceptance are identical" }},
{ text: "Radical Acceptance always comes first no matter the case" }}
  ]
},
      {
  id: "q9",
  prompt: "DIARY CARD — A diary shows high arousal spikes before difficult calls. Which skill would you try first?",
  options: [
    { text: "Skip the call" }},
{ text: "Over-plan and delay again" }},
{ text: "Vent for 20 minutes" }},
{ text: "Mindfulness How: Effectively", correct: true }}
  ]
},
      {
  id: "q10",
  prompt: "ETHICS — What is a key ethical safeguard when practicing Mindfulness How: Effectively?",
  options: [
    { text: "Force others to practice the skill" }},
{ text: "Use the skill as a substitute for medical care" }},
{ text: "Use the skill in ways that are safe for you and others; escalate support if risk increases", correct: true }},
{ text: "Share others’ private data for accountability" }}
  ]
}
      ]
    },

    {
      id: "lesson_13",
      title: "13. Emotion Regulation Overview",
      minutes: 18,
      reading: `
Emotion Regulation Overview — This lesson provides a clear, practice-ready overview and a mini toolkit you can apply immediately. We'll define the skill or concept, explain when and why to use it, and outline concrete steps with examples. As you read, identify one real situation you can apply this to within the next 24–48 hours.

What you’ll learn: Understanding emotions, functions, and change strategies. How to know when this skill is indicated versus when a different skill is a better fit. Step-by-step guidance with plain-language examples. Common traps and how to avoid them. How to practice, measure progress, and get feedback.

Real‑world example. Imagine a recent situation that triggered strong emotion. Walk through the steps out loud or in writing. If you get stuck, simplify the step and repeat. Aim for small wins and clear learning, not perfection.

Practice plan. Schedule a 10‑minute daily practice block for the next week. Use implementation intentions ("If X happens, then I will do Y") and record outcomes on your diary card. Review in your next session or with a peer coach.

Quality checks. Ask: Did I do the steps in order? Did I stay nonjudgmental? Did my actions move me toward values and goals? What will I tweak next time?

Safety and ethics. Use skills in ways that are safe for you and others. Seek professional support for acute risk. Skills complement—not replace—medical care.
`,
      quiz: [
{
  id: "q1",
  prompt: "DEFINITION — Which statement best defines Emotion Regulation Overview?",
  options: [
    { text: "A way to avoid difficult conversations indefinitely" }},
{ text: "A relaxation method that replaces problem solving" }},
{ text: "A DBT concept or tool related to Emotion Regulation Overview.", correct: true }},
{ text: "A rule that you must be calm before acting" }}
  ]
},
      {
  id: "q2",
  prompt: "NOT — Which of the following is NOT a component of Emotion Regulation Overview?",
  options: [
    { text: "Practice mindfully" }},
{ text: "Align to values" }},
{ text: "Clarify goals" }},
{ text: "Mind reading as a certainty", correct: true }}
  ]
},
      {
  id: "q3",
  prompt: "COMPARE — What distinguishes Emotion Regulation Overview from Opposite Action?",
  options: [
    { text: "Emotion Regulation Overview is only for groups, not individuals" }},
{ text: "Opposite Action always comes first no matter the case" }},
{ text: "Emotion Regulation Overview follows a specific sequence; Opposite Action targets a different goal", correct: true }},
{ text: "Emotion Regulation Overview and Opposite Action are identical" }}
  ]
},
      {
  id: "q4",
  prompt: "SCENARIO — In a situation like high-stress situations, what is the best first move?",
  options: [
    { text: "Do nothing and hope it resolves" }},
{ text: "Use Radical Acceptance" }},
{ text: "Use Emotion Regulation Overview", correct: true }},
{ text: "Use GIVE" }}
  ]
},
      {
  id: "q5",
  prompt: "FILL‑IN — Emotion Regulation Overview emphasizes ______ to help you act skillfully.",
  options: [
    { text: "Emotion Regulation Overview steps", correct: true }},
{ text: "avoiding feelings" }},
{ text: "winning at all costs" }},
{ text: "overthinking" }}
  ]
},
      {
  id: "q6",
  prompt: "EXAMPLE — Which option best illustrates Emotion Regulation Overview?",
  options: [
    { text: "Ranting on social media" }},
{ text: "Making a decision while furious" }},
{ text: "Applying the steps of Emotion Regulation Overview during a real situation and aligning actions with goals", correct: true }},
{ text: "Ignoring physical needs" }}
  ]
},
      {
  id: "q7",
  prompt: "TROUBLESHOOT — If you notice this pitfall: “Using the skill in the wrong context”, what should you do?",
  options: [
    { text: "Wait until you feel motivated" }},
{ text: "Blame the situation" }},
{ text: "Quit using the skill" }},
{ text: "Return to the step sequence and simplify the next step", correct: true }}
  ]
},
      {
  id: "q8",
  prompt: "COMPARE — What distinguishes Emotion Regulation Overview from Radical Acceptance?",
  options: [
    { text: "Emotion Regulation Overview and Radical Acceptance are identical" }},
{ text: "Emotion Regulation Overview is only for groups, not individuals" }},
{ text: "Radical Acceptance always comes first no matter the case" }},
{ text: "Emotion Regulation Overview follows a specific sequence; Radical Acceptance targets a different goal", correct: true }}
  ]
},
      {
  id: "q9",
  prompt: "DIARY CARD — A diary shows high arousal spikes before difficult calls. Which skill would you try first?",
  options: [
    { text: "Emotion Regulation Overview", correct: true }},
{ text: "Skip the call" }},
{ text: "Vent for 20 minutes" }},
{ text: "Over-plan and delay again" }}
  ]
},
      {
  id: "q10",
  prompt: "ETHICS — What is a key ethical safeguard when practicing Emotion Regulation Overview?",
  options: [
    { text: "Share others’ private data for accountability" }},
{ text: "Force others to practice the skill" }},
{ text: "Use the skill in ways that are safe for you and others; escalate support if risk increases", correct: true }},
{ text: "Use the skill as a substitute for medical care" }}
  ]
}
      ]
    },

    {
      id: "lesson_14",
      title: "14. Emotion Model (Prompting→Aftereffects)",
      minutes: 18,
      reading: `
Emotion Model (Prompting→Aftereffects) — This lesson provides a clear, practice-ready overview and a mini toolkit you can apply immediately. We'll define the skill or concept, explain when and why to use it, and outline concrete steps with examples. As you read, identify one real situation you can apply this to within the next 24–48 hours.

What you’ll learn: DBT’s emotion model: vulnerabilities, event, interpretations, changes, urges, actions, aftereffects. How to know when this skill is indicated versus when a different skill is a better fit. Step-by-step guidance with plain-language examples. Common traps and how to avoid them. How to practice, measure progress, and get feedback.

Real‑world example. Imagine a recent situation that triggered strong emotion. Walk through the steps out loud or in writing. If you get stuck, simplify the step and repeat. Aim for small wins and clear learning, not perfection.

Practice plan. Schedule a 10‑minute daily practice block for the next week. Use implementation intentions ("If X happens, then I will do Y") and record outcomes on your diary card. Review in your next session or with a peer coach.

Quality checks. Ask: Did I do the steps in order? Did I stay nonjudgmental? Did my actions move me toward values and goals? What will I tweak next time?

Safety and ethics. Use skills in ways that are safe for you and others. Seek professional support for acute risk. Skills complement—not replace—medical care.
`,
      quiz: [
{
  id: "q1",
  prompt: "DEFINITION — Which statement best defines Emotion Model (Prompting→Aftereffects)?",
  options: [
    { text: "A way to avoid difficult conversations indefinitely" }},
{ text: "A relaxation method that replaces problem solving" }},
{ text: "A DBT concept or tool related to Emotion Model (Prompting→Aftereffects).", correct: true }},
{ text: "A rule that you must be calm before acting" }}
  ]
},
      {
  id: "q2",
  prompt: "NOT — Which of the following is NOT a component of Emotion Model (Prompting→Aftereffects)?",
  options: [
    { text: "Align to values" }},
{ text: "Overgeneralization", correct: true }},
{ text: "Practice mindfully" }},
{ text: "Clarify goals" }}
  ]
},
      {
  id: "q3",
  prompt: "COMPARE — What distinguishes Emotion Model (Prompting→Aftereffects) from Opposite Action?",
  options: [
    { text: "Emotion Model (Prompting→Aftereffects) is only for groups, not individuals" }},
{ text: "Opposite Action always comes first no matter the case" }},
{ text: "Emotion Model (Prompting→Aftereffects) follows a specific sequence; Opposite Action targets a different goal", correct: true }},
{ text: "Emotion Model (Prompting→Aftereffects) and Opposite Action are identical" }}
  ]
},
      {
  id: "q4",
  prompt: "SCENARIO — In a situation like high-stress situations, what is the best first move?",
  options: [
    { text: "Do nothing and hope it resolves" }},
{ text: "Use Emotion Model (Prompting→Aftereffects)", correct: true }},
{ text: "Use Radical Acceptance" }},
{ text: "Use Opposite Action" }}
  ]
},
      {
  id: "q5",
  prompt: "FILL‑IN — Emotion Model (Prompting→Aftereffects) emphasizes ______ to help you act skillfully.",
  options: [
    { text: "Emotion Model (Prompting→Aftereffects) steps", correct: true }},
{ text: "avoiding feelings" }},
{ text: "overthinking" }},
{ text: "winning at all costs" }}
  ]
},
      {
  id: "q6",
  prompt: "EXAMPLE — Which option best illustrates Emotion Model (Prompting→Aftereffects)?",
  options: [
    { text: "Ignoring physical needs" }},
{ text: "Making a decision while furious" }},
{ text: "Ranting on social media" }},
{ text: "Applying the steps of Emotion Model (Prompting→Aftereffects) during a real situation and aligning actions with goals", correct: true }}
  ]
},
      {
  id: "q7",
  prompt: "TROUBLESHOOT — If you notice this pitfall: “Skipping steps”, what should you do?",
  options: [
    { text: "Quit using the skill" }},
{ text: "Blame the situation" }},
{ text: "Wait until you feel motivated" }},
{ text: "Return to the step sequence and simplify the next step", correct: true }}
  ]
},
      {
  id: "q8",
  prompt: "COMPARE — What distinguishes Emotion Model (Prompting→Aftereffects) from Radical Acceptance?",
  options: [
    { text: "Emotion Model (Prompting→Aftereffects) is only for groups, not individuals" }},
{ text: "Radical Acceptance always comes first no matter the case" }},
{ text: "Emotion Model (Prompting→Aftereffects) follows a specific sequence; Radical Acceptance targets a different goal", correct: true }},
{ text: "Emotion Model (Prompting→Aftereffects) and Radical Acceptance are identical" }}
  ]
},
      {
  id: "q9",
  prompt: "DIARY CARD — A diary shows high arousal spikes before difficult calls. Which skill would you try first?",
  options: [
    { text: "Over-plan and delay again" }},
{ text: "Skip the call" }},
{ text: "Vent for 20 minutes" }},
{ text: "Emotion Model (Prompting→Aftereffects)", correct: true }}
  ]
},
      {
  id: "q10",
  prompt: "ETHICS — What is a key ethical safeguard when practicing Emotion Model (Prompting→Aftereffects)?",
  options: [
    { text: "Force others to practice the skill" }},
{ text: "Share others’ private data for accountability" }},
{ text: "Use the skill in ways that are safe for you and others; escalate support if risk increases", correct: true }},
{ text: "Use the skill as a substitute for medical care" }}
  ]
}
      ]
    },

    {
      id: "lesson_15",
      title: "15. PLEASE Skills",
      minutes: 18,
      reading: `
PLEASE Skills — This lesson provides a clear, practice-ready overview and a mini toolkit you can apply immediately. We'll define the skill or concept, explain when and why to use it, and outline concrete steps with examples. As you read, identify one real situation you can apply this to within the next 24–48 hours.

What you’ll learn: Reducing vulnerability to emotion mind via lifestyle routines. How to know when this skill is indicated versus when a different skill is a better fit. Step-by-step guidance with plain-language examples. Common traps and how to avoid them. How to practice, measure progress, and get feedback.

Definition. Lifestyle routines that lower baseline emotional reactivity.

Core steps. The typical sequence is: Treat Physical illness, Balanced Eating, Avoid mood-altering drugs, Balanced Sleep, and Exercise. Practice the exact order first; once fluent, adapt with judgment.

When to use. Examples include: Chronic irritability or low mood, Frequent emotional 'overreactions', and Recovery maintenance for SUD. If the situation doesn't fit these criteria, consider a different skill.

Common pitfalls. Watch for: All-or-nothing diet rules, Over- or under-sleeping, and Ignoring medical issues. Use a diary card to notice patterns and course-correct.

References: Linehan (2014).

Real‑world example. Imagine a recent situation that triggered strong emotion. Walk through the steps out loud or in writing. If you get stuck, simplify the step and repeat. Aim for small wins and clear learning, not perfection.

Practice plan. Schedule a 10‑minute daily practice block for the next week. Use implementation intentions ("If X happens, then I will do Y") and record outcomes on your diary card. Review in your next session or with a peer coach.

Quality checks. Ask: Did I do the steps in order? Did I stay nonjudgmental? Did my actions move me toward values and goals? What will I tweak next time?

Safety and ethics. Use skills in ways that are safe for you and others. Seek professional support for acute risk. Skills complement—not replace—medical care.
`,
      quiz: [
{
  id: "q1",
  prompt: "DEFINITION — Which statement best defines PLEASE Skills?",
  options: [
    { text: "A breathing technique that always eliminates anxiety" }},
{ text: "Lifestyle routines that lower baseline emotional reactivity.", correct: true }},
{ text: "A way to avoid difficult conversations indefinitely" }},
{ text: "A relaxation method that replaces problem solving" }}
  ]
},
      {
  id: "q2",
  prompt: "ORDER — What is the correct step sequence for PLEASE Skills?",
  options: [
    { text: "Balanced Eating → Treat Physical illness → Avoid mood-altering drugs → Balanced Sleep" }},
{ text: "Treat Physical illness → Avoid mood-altering drugs → Balanced Eating → Balanced Sleep" }},
{ text: "Treat Physical illness → Balanced Eating → Balanced Sleep → Avoid mood-altering drugs" }},
{ text: "Treat Physical illness → Balanced Eating → Avoid mood-altering drugs → Balanced Sleep → Exercise", correct: true }}
  ]
},
      {
  id: "q3",
  prompt: "NOT — Which of the following is NOT a component of PLEASE Skills?",
  options: [
    { text: "Balanced Sleep" }},
{ text: "Exercise" }},
{ text: "Treat Physical illness" }},
{ text: "Rumination", correct: true }}
  ]
},
      {
  id: "q4",
  prompt: "SCENARIO — In a situation like Chronic irritability or low mood, what is the best first move?",
  options: [
    { text: "Use PLEASE Skills", correct: true }},
{ text: "Do nothing and hope it resolves" }},
{ text: "Use Opposite Action" }},
{ text: "Use Radical Acceptance" }}
  ]
},
      {
  id: "q5",
  prompt: "FILL‑IN — PLEASE Skills emphasizes ______ to help you act skillfully.",
  options: [
    { text: "avoiding feelings" }},
{ text: "winning at all costs" }},
{ text: "overthinking" }},
{ text: "Treat Physical illness", correct: true }}
  ]
},
      {
  id: "q6",
  prompt: "EXAMPLE — Which option best illustrates PLEASE Skills?",
  options: [
    { text: "Ranting on social media" }},
{ text: "Applying the steps of PLEASE Skills during a real situation and aligning actions with goals", correct: true }},
{ text: "Making a decision while furious" }},
{ text: "Ignoring physical needs" }}
  ]
},
      {
  id: "q7",
  prompt: "TROUBLESHOOT — If you notice this pitfall: “Over- or under-sleeping”, what should you do?",
  options: [
    { text: "Wait until you feel motivated" }},
{ text: "Return to the step sequence and simplify the next step", correct: true }},
{ text: "Blame the situation" }},
{ text: "Quit using the skill" }}
  ]
},
      {
  id: "q8",
  prompt: "COMPARE — What distinguishes PLEASE Skills from Radical Acceptance?",
  options: [
    { text: "PLEASE Skills follows a specific sequence; Radical Acceptance targets a different goal", correct: true }},
{ text: "PLEASE Skills and Radical Acceptance are identical" }},
{ text: "Radical Acceptance always comes first no matter the case" }},
{ text: "PLEASE Skills is only for groups, not individuals" }}
  ]
},
      {
  id: "q9",
  prompt: "DIARY CARD — A diary shows high arousal spikes before difficult calls. Which skill would you try first?",
  options: [
    { text: "Skip the call" }},
{ text: "Vent for 20 minutes" }},
{ text: "Over-plan and delay again" }},
{ text: "PLEASE Skills", correct: true }}
  ]
},
      {
  id: "q10",
  prompt: "ETHICS — What is a key ethical safeguard when practicing PLEASE Skills?",
  options: [
    { text: "Force others to practice the skill" }},
{ text: "Use the skill in ways that are safe for you and others; escalate support if risk increases", correct: true }},
{ text: "Share others’ private data for accountability" }},
{ text: "Use the skill as a substitute for medical care" }}
  ]
}
      ]
    },

    {
      id: "lesson_16",
      title: "16. Build Mastery & Accumulate Positives",
      minutes: 18,
      reading: `
Build Mastery & Accumulate Positives — This lesson provides a clear, practice-ready overview and a mini toolkit you can apply immediately. We'll define the skill or concept, explain when and why to use it, and outline concrete steps with examples. As you read, identify one real situation you can apply this to within the next 24–48 hours.

What you’ll learn: Scheduling positives short- and long-term; mastery to raise confidence. How to know when this skill is indicated versus when a different skill is a better fit. Step-by-step guidance with plain-language examples. Common traps and how to avoid them. How to practice, measure progress, and get feedback.

Real‑world example. Imagine a recent situation that triggered strong emotion. Walk through the steps out loud or in writing. If you get stuck, simplify the step and repeat. Aim for small wins and clear learning, not perfection.

Practice plan. Schedule a 10‑minute daily practice block for the next week. Use implementation intentions ("If X happens, then I will do Y") and record outcomes on your diary card. Review in your next session or with a peer coach.

Quality checks. Ask: Did I do the steps in order? Did I stay nonjudgmental? Did my actions move me toward values and goals? What will I tweak next time?

Safety and ethics. Use skills in ways that are safe for you and others. Seek professional support for acute risk. Skills complement—not replace—medical care.
`,
      quiz: [
{
  id: "q1",
  prompt: "DEFINITION — Which statement best defines Build Mastery & Accumulate Positives?",
  options: [
    { text: "A rule that you must be calm before acting" }},
{ text: "A relaxation method that replaces problem solving" }},
{ text: "A way to avoid difficult conversations indefinitely" }},
{ text: "A DBT concept or tool related to Build Mastery & Accumulate Positives.", correct: true }}
  ]
},
      {
  id: "q2",
  prompt: "NOT — Which of the following is NOT a component of Build Mastery & Accumulate Positives?",
  options: [
    { text: "Align to values" }},
{ text: "Practice mindfully" }},
{ text: "Discounting the positive", correct: true }},
{ text: "Clarify goals" }}
  ]
},
      {
  id: "q3",
  prompt: "COMPARE — What distinguishes Build Mastery & Accumulate Positives from Opposite Action?",
  options: [
    { text: "Opposite Action always comes first no matter the case" }},
{ text: "Build Mastery & Accumulate Positives and Opposite Action are identical" }},
{ text: "Build Mastery & Accumulate Positives follows a specific sequence; Opposite Action targets a different goal", correct: true }},
{ text: "Build Mastery & Accumulate Positives is only for groups, not individuals" }}
  ]
},
      {
  id: "q4",
  prompt: "SCENARIO — In a situation like high-stress situations, what is the best first move?",
  options: [
    { text: "Use GIVE" }},
{ text: "Use Opposite Action" }},
{ text: "Use Build Mastery & Accumulate Positives", correct: true }},
{ text: "Use Radical Acceptance" }}
  ]
},
      {
  id: "q5",
  prompt: "FILL‑IN — Build Mastery & Accumulate Positives emphasizes ______ to help you act skillfully.",
  options: [
    { text: "avoiding feelings" }},
{ text: "overthinking" }},
{ text: "winning at all costs" }},
{ text: "Build Mastery & Accumulate Positives steps", correct: true }}
  ]
},
      {
  id: "q6",
  prompt: "EXAMPLE — Which option best illustrates Build Mastery & Accumulate Positives?",
  options: [
    { text: "Ranting on social media" }},
{ text: "Applying the steps of Build Mastery & Accumulate Positives during a real situation and aligning actions with goals", correct: true }},
{ text: "Ignoring physical needs" }},
{ text: "Making a decision while furious" }}
  ]
},
      {
  id: "q7",
  prompt: "TROUBLESHOOT — If you notice this pitfall: “Using the skill in the wrong context”, what should you do?",
  options: [
    { text: "Wait until you feel motivated" }},
{ text: "Return to the step sequence and simplify the next step", correct: true }},
{ text: "Blame the situation" }},
{ text: "Quit using the skill" }}
  ]
},
      {
  id: "q8",
  prompt: "COMPARE — What distinguishes Build Mastery & Accumulate Positives from Radical Acceptance?",
  options: [
    { text: "Build Mastery & Accumulate Positives is only for groups, not individuals" }},
{ text: "Radical Acceptance always comes first no matter the case" }},
{ text: "Build Mastery & Accumulate Positives and Radical Acceptance are identical" }},
{ text: "Build Mastery & Accumulate Positives follows a specific sequence; Radical Acceptance targets a different goal", correct: true }}
  ]
},
      {
  id: "q9",
  prompt: "DIARY CARD — A diary shows high arousal spikes before difficult calls. Which skill would you try first?",
  options: [
    { text: "Build Mastery & Accumulate Positives", correct: true }},
{ text: "Over-plan and delay again" }},
{ text: "Vent for 20 minutes" }},
{ text: "Skip the call" }}
  ]
},
      {
  id: "q10",
  prompt: "ETHICS — What is a key ethical safeguard when practicing Build Mastery & Accumulate Positives?",
  options: [
    { text: "Use the skill as a substitute for medical care" }},
{ text: "Share others’ private data for accountability" }},
{ text: "Force others to practice the skill" }},
{ text: "Use the skill in ways that are safe for you and others; escalate support if risk increases", correct: true }}
  ]
}
      ]
    },

    {
      id: "lesson_17",
      title: "17. Check the Facts",
      minutes: 18,
      reading: `
Check the Facts — This lesson provides a clear, practice-ready overview and a mini toolkit you can apply immediately. We'll define the skill or concept, explain when and why to use it, and outline concrete steps with examples. As you read, identify one real situation you can apply this to within the next 24–48 hours.

What you’ll learn: Testing appraisals against evidence and base rates. How to know when this skill is indicated versus when a different skill is a better fit. Step-by-step guidance with plain-language examples. Common traps and how to avoid them. How to practice, measure progress, and get feedback.

Definition. A structured appraisal to see whether an emotion fits the facts and degree of threat.

Core steps. The typical sequence is: Identify prompting event, Interpretations and assumptions, Threat appraisals, Evaluate evidence, and Generate factual reframe. Practice the exact order first; once fluent, adapt with judgment.

When to use. Examples include: When in doubt about whether an emotion is justified, Rumination, and Catastrophizing. If the situation doesn't fit these criteria, consider a different skill.

Common pitfalls. Watch for: Searching only for confirming evidence, Ignoring base rates, and Confusing possibility with probability. Use a diary card to notice patterns and course-correct.

References: Linehan (2014).

Real‑world example. Imagine a recent situation that triggered strong emotion. Walk through the steps out loud or in writing. If you get stuck, simplify the step and repeat. Aim for small wins and clear learning, not perfection.

Practice plan. Schedule a 10‑minute daily practice block for the next week. Use implementation intentions ("If X happens, then I will do Y") and record outcomes on your diary card. Review in your next session or with a peer coach.

Quality checks. Ask: Did I do the steps in order? Did I stay nonjudgmental? Did my actions move me toward values and goals? What will I tweak next time?

Safety and ethics. Use skills in ways that are safe for you and others. Seek professional support for acute risk. Skills complement—not replace—medical care.
`,
      quiz: [
{
  id: "q1",
  prompt: "DEFINITION — Which statement best defines Check the Facts?",
  options: [
    { text: "A rule that you must be calm before acting" }},
{ text: "A breathing technique that always eliminates anxiety" }},
{ text: "A way to avoid difficult conversations indefinitely" }},
{ text: "A structured appraisal to see whether an emotion fits the facts and degree of threat.", correct: true }}
  ]
},
      {
  id: "q2",
  prompt: "ORDER — What is the correct step sequence for Check the Facts?",
  options: [
    { text: "Interpretations and assumptions → Identify prompting event → Threat appraisals → Evaluate evidence" }},
{ text: "Identify prompting event → Interpretations and assumptions → Threat appraisals → Evaluate evidence → Generate factual reframe", correct: true }},
{ text: "Identify prompting event → Threat appraisals → Interpretations and assumptions → Evaluate evidence" }},
{ text: "Identify prompting event → Interpretations and assumptions → Evaluate evidence → Threat appraisals" }}
  ]
},
      {
  id: "q3",
  prompt: "NOT — Which of the following is NOT a component of Check the Facts?",
  options: [
    { text: "Blaming", correct: true }},
{ text: "Generate factual reframe" }},
{ text: "Threat appraisals" }},
{ text: "Evaluate evidence" }}
  ]
},
      {
  id: "q4",
  prompt: "SCENARIO — In a situation like Rumination, what is the best first move?",
  options: [
    { text: "Use GIVE" }},
{ text: "Use Radical Acceptance" }},
{ text: "Use Check the Facts", correct: true }},
{ text: "Do nothing and hope it resolves" }}
  ]
},
      {
  id: "q5",
  prompt: "FILL‑IN — Check the Facts emphasizes ______ to help you act skillfully.",
  options: [
    { text: "Identify prompting event", correct: true }},
{ text: "winning at all costs" }},
{ text: "avoiding feelings" }},
{ text: "overthinking" }}
  ]
},
      {
  id: "q6",
  prompt: "EXAMPLE — Which option best illustrates Check the Facts?",
  options: [
    { text: "Applying the steps of Check the Facts during a real situation and aligning actions with goals", correct: true }},
{ text: "Ranting on social media" }},
{ text: "Making a decision while furious" }},
{ text: "Ignoring physical needs" }}
  ]
},
      {
  id: "q7",
  prompt: "TROUBLESHOOT — If you notice this pitfall: “Ignoring base rates”, what should you do?",
  options: [
    { text: "Return to the step sequence and simplify the next step", correct: true }},
{ text: "Wait until you feel motivated" }},
{ text: "Quit using the skill" }},
{ text: "Blame the situation" }}
  ]
},
      {
  id: "q8",
  prompt: "COMPARE — What distinguishes Check the Facts from Radical Acceptance?",
  options: [
    { text: "Check the Facts follows a specific sequence; Radical Acceptance targets a different goal", correct: true }},
{ text: "Check the Facts and Radical Acceptance are identical" }},
{ text: "Check the Facts is only for groups, not individuals" }},
{ text: "Radical Acceptance always comes first no matter the case" }}
  ]
},
      {
  id: "q9",
  prompt: "DIARY CARD — A diary shows high arousal spikes before difficult calls. Which skill would you try first?",
  options: [
    { text: "Check the Facts", correct: true }},
{ text: "Skip the call" }},
{ text: "Vent for 20 minutes" }},
{ text: "Over-plan and delay again" }}
  ]
},
      {
  id: "q10",
  prompt: "ETHICS — What is a key ethical safeguard when practicing Check the Facts?",
  options: [
    { text: "Force others to practice the skill" }},
{ text: "Use the skill in ways that are safe for you and others; escalate support if risk increases", correct: true }},
{ text: "Use the skill as a substitute for medical care" }},
{ text: "Share others’ private data for accountability" }}
  ]
}
      ]
    },

    {
      id: "lesson_18",
      title: "18. Opposite Action",
      minutes: 18,
      reading: `
Opposite Action — This lesson provides a clear, practice-ready overview and a mini toolkit you can apply immediately. We'll define the skill or concept, explain when and why to use it, and outline concrete steps with examples. As you read, identify one real situation you can apply this to within the next 24–48 hours.

What you’ll learn: Acting opposite to unjustified emotion urges. How to know when this skill is indicated versus when a different skill is a better fit. Step-by-step guidance with plain-language examples. Common traps and how to avoid them. How to practice, measure progress, and get feedback.

Definition. Acting opposite to unjustified emotion urges to reshape emotion over time.

Core steps. The typical sequence is: Identify emotion, Check the facts, Identify action urge, Choose opposite to the urge, and Act opposite until emotion shifts. Practice the exact order first; once fluent, adapt with judgment.

When to use. Examples include: Unjustified fear, anger, or shame, and Avoidance maintaining anxiety. If the situation doesn't fit these criteria, consider a different skill.

Common pitfalls. Watch for: Skipping check-the-facts, Acting opposite only once, and Choosing unsafe opposites. Use a diary card to notice patterns and course-correct.

References: Linehan (2014).

Real‑world example. Imagine a recent situation that triggered strong emotion. Walk through the steps out loud or in writing. If you get stuck, simplify the step and repeat. Aim for small wins and clear learning, not perfection.

Practice plan. Schedule a 10‑minute daily practice block for the next week. Use implementation intentions ("If X happens, then I will do Y") and record outcomes on your diary card. Review in your next session or with a peer coach.

Quality checks. Ask: Did I do the steps in order? Did I stay nonjudgmental? Did my actions move me toward values and goals? What will I tweak next time?

Safety and ethics. Use skills in ways that are safe for you and others. Seek professional support for acute risk. Skills complement—not replace—medical care.
`,
      quiz: [
{
  id: "q1",
  prompt: "DEFINITION — Which statement best defines Opposite Action?",
  options: [
    { text: "Acting opposite to unjustified emotion urges to reshape emotion over time.", correct: true }},
{ text: "A rule that you must be calm before acting" }},
{ text: "A breathing technique that always eliminates anxiety" }},
{ text: "A relaxation method that replaces problem solving" }}
  ]
},
      {
  id: "q2",
  prompt: "ORDER — What is the correct step sequence for Opposite Action?",
  options: [
    { text: "Identify emotion → Check the facts → Identify action urge → Choose opposite to the urge → Act opposite until emotion shifts", correct: true }},
{ text: "Check the facts → Identify emotion → Identify action urge → Choose opposite to the urge" }},
{ text: "Identify emotion → Identify action urge → Check the facts → Choose opposite to the urge" }},
{ text: "Identify emotion → Check the facts → Choose opposite to the urge → Identify action urge" }}
  ]
},
      {
  id: "q3",
  prompt: "NOT — Which of the following is NOT a component of Opposite Action?",
  options: [
    { text: "Act opposite until emotion shifts" }},
{ text: "Discounting the positive", correct: true }},
{ text: "Identify emotion" }},
{ text: "Identify action urge" }}
  ]
},
      {
  id: "q4",
  prompt: "SCENARIO — In a situation like Avoidance maintaining anxiety, what is the best first move?",
  options: [
    { text: "Use Radical Acceptance" }},
{ text: "Use Opposite Action", correct: true }},
{ text: "Use GIVE" }},
{ text: "Do nothing and hope it resolves" }}
  ]
},
      {
  id: "q5",
  prompt: "FILL‑IN — Opposite Action emphasizes ______ to help you act skillfully.",
  options: [
    { text: "overthinking" }},
{ text: "avoiding feelings" }},
{ text: "Identify emotion", correct: true }},
{ text: "winning at all costs" }}
  ]
},
      {
  id: "q6",
  prompt: "EXAMPLE — Which option best illustrates Opposite Action?",
  options: [
    { text: "Making a decision while furious" }},
{ text: "Applying the steps of Opposite Action during a real situation and aligning actions with goals", correct: true }},
{ text: "Ignoring physical needs" }},
{ text: "Ranting on social media" }}
  ]
},
      {
  id: "q7",
  prompt: "TROUBLESHOOT — If you notice this pitfall: “Acting opposite only once”, what should you do?",
  options: [
    { text: "Return to the step sequence and simplify the next step", correct: true }},
{ text: "Wait until you feel motivated" }},
{ text: "Quit using the skill" }},
{ text: "Blame the situation" }}
  ]
},
      {
  id: "q8",
  prompt: "COMPARE — What distinguishes Opposite Action from Radical Acceptance?",
  options: [
    { text: "Opposite Action and Radical Acceptance are identical" }},
{ text: "Radical Acceptance always comes first no matter the case" }},
{ text: "Opposite Action follows a specific sequence; Radical Acceptance targets a different goal", correct: true }},
{ text: "Opposite Action is only for groups, not individuals" }}
  ]
},
      {
  id: "q9",
  prompt: "DIARY CARD — A diary shows high arousal spikes before difficult calls. Which skill would you try first?",
  options: [
    { text: "Vent for 20 minutes" }},
{ text: "Over-plan and delay again" }},
{ text: "Opposite Action", correct: true }},
{ text: "Skip the call" }}
  ]
},
      {
  id: "q10",
  prompt: "ETHICS — What is a key ethical safeguard when practicing Opposite Action?",
  options: [
    { text: "Use the skill as a substitute for medical care" }},
{ text: "Share others’ private data for accountability" }},
{ text: "Use the skill in ways that are safe for you and others; escalate support if risk increases", correct: true }},
{ text: "Force others to practice the skill" }}
  ]
}
      ]
    },

    {
      id: "lesson_19",
      title: "19. Problem Solving & Cope Ahead",
      minutes: 18,
      reading: `
Problem Solving & Cope Ahead — This lesson provides a clear, practice-ready overview and a mini toolkit you can apply immediately. We'll define the skill or concept, explain when and why to use it, and outline concrete steps with examples. As you read, identify one real situation you can apply this to within the next 24–48 hours.

What you’ll learn: Stepwise problem solving and mental rehearsal for difficult situations. How to know when this skill is indicated versus when a different skill is a better fit. Step-by-step guidance with plain-language examples. Common traps and how to avoid them. How to practice, measure progress, and get feedback.

Real‑world example. Imagine a recent situation that triggered strong emotion. Walk through the steps out loud or in writing. If you get stuck, simplify the step and repeat. Aim for small wins and clear learning, not perfection.

Practice plan. Schedule a 10‑minute daily practice block for the next week. Use implementation intentions ("If X happens, then I will do Y") and record outcomes on your diary card. Review in your next session or with a peer coach.

Quality checks. Ask: Did I do the steps in order? Did I stay nonjudgmental? Did my actions move me toward values and goals? What will I tweak next time?

Safety and ethics. Use skills in ways that are safe for you and others. Seek professional support for acute risk. Skills complement—not replace—medical care.
`,
      quiz: [
{
  id: "q1",
  prompt: "DEFINITION — Which statement best defines Problem Solving & Cope Ahead?",
  options: [
    { text: "A way to avoid difficult conversations indefinitely" }},
{ text: "A breathing technique that always eliminates anxiety" }},
{ text: "A relaxation method that replaces problem solving" }},
{ text: "A DBT concept or tool related to Problem Solving & Cope Ahead.", correct: true }}
  ]
},
      {
  id: "q2",
  prompt: "NOT — Which of the following is NOT a component of Problem Solving & Cope Ahead?",
  options: [
    { text: "Avoidance", correct: true }},
{ text: "Clarify goals" }},
{ text: "Align to values" }},
{ text: "Practice mindfully" }}
  ]
},
      {
  id: "q3",
  prompt: "COMPARE — What distinguishes Problem Solving & Cope Ahead from Opposite Action?",
  options: [
    { text: "Problem Solving & Cope Ahead follows a specific sequence; Opposite Action targets a different goal", correct: true }},
{ text: "Problem Solving & Cope Ahead and Opposite Action are identical" }},
{ text: "Problem Solving & Cope Ahead is only for groups, not individuals" }},
{ text: "Opposite Action always comes first no matter the case" }}
  ]
},
      {
  id: "q4",
  prompt: "SCENARIO — In a situation like high-stress situations, what is the best first move?",
  options: [
    { text: "Use Radical Acceptance" }},
{ text: "Use Problem Solving & Cope Ahead", correct: true }},
{ text: "Do nothing and hope it resolves" }},
{ text: "Use GIVE" }}
  ]
},
      {
  id: "q5",
  prompt: "FILL‑IN — Problem Solving & Cope Ahead emphasizes ______ to help you act skillfully.",
  options: [
    { text: "overthinking" }},
{ text: "avoiding feelings" }},
{ text: "Problem Solving & Cope Ahead steps", correct: true }},
{ text: "winning at all costs" }}
  ]
},
      {
  id: "q6",
  prompt: "EXAMPLE — Which option best illustrates Problem Solving & Cope Ahead?",
  options: [
    { text: "Applying the steps of Problem Solving & Cope Ahead during a real situation and aligning actions with goals", correct: true }},
{ text: "Ranting on social media" }},
{ text: "Making a decision while furious" }},
{ text: "Ignoring physical needs" }}
  ]
},
      {
  id: "q7",
  prompt: "TROUBLESHOOT — If you notice this pitfall: “Giving up too soon”, what should you do?",
  options: [
    { text: "Wait until you feel motivated" }},
{ text: "Return to the step sequence and simplify the next step", correct: true }},
{ text: "Blame the situation" }},
{ text: "Quit using the skill" }}
  ]
},
      {
  id: "q8",
  prompt: "COMPARE — What distinguishes Problem Solving & Cope Ahead from Radical Acceptance?",
  options: [
    { text: "Problem Solving & Cope Ahead is only for groups, not individuals" }},
{ text: "Problem Solving & Cope Ahead follows a specific sequence; Radical Acceptance targets a different goal", correct: true }},
{ text: "Radical Acceptance always comes first no matter the case" }},
{ text: "Problem Solving & Cope Ahead and Radical Acceptance are identical" }}
  ]
},
      {
  id: "q9",
  prompt: "DIARY CARD — A diary shows high arousal spikes before difficult calls. Which skill would you try first?",
  options: [
    { text: "Over-plan and delay again" }},
{ text: "Vent for 20 minutes" }},
{ text: "Problem Solving & Cope Ahead", correct: true }},
{ text: "Skip the call" }}
  ]
},
      {
  id: "q10",
  prompt: "ETHICS — What is a key ethical safeguard when practicing Problem Solving & Cope Ahead?",
  options: [
    { text: "Use the skill as a substitute for medical care" }},
{ text: "Use the skill in ways that are safe for you and others; escalate support if risk increases", correct: true }},
{ text: "Force others to practice the skill" }},
{ text: "Share others’ private data for accountability" }}
  ]
}
      ]
    },

    {
      id: "lesson_20",
      title: "20. Distress Tolerance Overview",
      minutes: 18,
      reading: `
Distress Tolerance Overview — This lesson provides a clear, practice-ready overview and a mini toolkit you can apply immediately. We'll define the skill or concept, explain when and why to use it, and outline concrete steps with examples. As you read, identify one real situation you can apply this to within the next 24–48 hours.

What you’ll learn: Crisis survival vs reality acceptance paths. How to know when this skill is indicated versus when a different skill is a better fit. Step-by-step guidance with plain-language examples. Common traps and how to avoid them. How to practice, measure progress, and get feedback.

Real‑world example. Imagine a recent situation that triggered strong emotion. Walk through the steps out loud or in writing. If you get stuck, simplify the step and repeat. Aim for small wins and clear learning, not perfection.

Practice plan. Schedule a 10‑minute daily practice block for the next week. Use implementation intentions ("If X happens, then I will do Y") and record outcomes on your diary card. Review in your next session or with a peer coach.

Quality checks. Ask: Did I do the steps in order? Did I stay nonjudgmental? Did my actions move me toward values and goals? What will I tweak next time?

Safety and ethics. Use skills in ways that are safe for you and others. Seek professional support for acute risk. Skills complement—not replace—medical care.
`,
      quiz: [
{
  id: "q1",
  prompt: "DEFINITION — Which statement best defines Distress Tolerance Overview?",
  options: [
    { text: "A rule that you must be calm before acting" }},
{ text: "A relaxation method that replaces problem solving" }},
{ text: "A breathing technique that always eliminates anxiety" }},
{ text: "A DBT concept or tool related to Distress Tolerance Overview.", correct: true }}
  ]
},
      {
  id: "q2",
  prompt: "NOT — Which of the following is NOT a component of Distress Tolerance Overview?",
  options: [
    { text: "Rumination", correct: true }},
{ text: "Practice mindfully" }},
{ text: "Align to values" }},
{ text: "Clarify goals" }}
  ]
},
      {
  id: "q3",
  prompt: "COMPARE — What distinguishes Distress Tolerance Overview from Opposite Action?",
  options: [
    { text: "Distress Tolerance Overview follows a specific sequence; Opposite Action targets a different goal", correct: true }},
{ text: "Opposite Action always comes first no matter the case" }},
{ text: "Distress Tolerance Overview and Opposite Action are identical" }},
{ text: "Distress Tolerance Overview is only for groups, not individuals" }}
  ]
},
      {
  id: "q4",
  prompt: "SCENARIO — In a situation like high-stress situations, what is the best first move?",
  options: [
    { text: "Use Radical Acceptance" }},
{ text: "Use GIVE" }},
{ text: "Use Distress Tolerance Overview", correct: true }},
{ text: "Do nothing and hope it resolves" }}
  ]
},
      {
  id: "q5",
  prompt: "FILL‑IN — Distress Tolerance Overview emphasizes ______ to help you act skillfully.",
  options: [
    { text: "avoiding feelings" }},
{ text: "overthinking" }},
{ text: "Distress Tolerance Overview steps", correct: true }},
{ text: "winning at all costs" }}
  ]
},
      {
  id: "q6",
  prompt: "EXAMPLE — Which option best illustrates Distress Tolerance Overview?",
  options: [
    { text: "Ranting on social media" }},
{ text: "Making a decision while furious" }},
{ text: "Ignoring physical needs" }},
{ text: "Applying the steps of Distress Tolerance Overview during a real situation and aligning actions with goals", correct: true }}
  ]
},
      {
  id: "q7",
  prompt: "TROUBLESHOOT — If you notice this pitfall: “Using the skill in the wrong context”, what should you do?",
  options: [
    { text: "Blame the situation" }},
{ text: "Return to the step sequence and simplify the next step", correct: true }},
{ text: "Wait until you feel motivated" }},
{ text: "Quit using the skill" }}
  ]
},
      {
  id: "q8",
  prompt: "COMPARE — What distinguishes Distress Tolerance Overview from Radical Acceptance?",
  options: [
    { text: "Distress Tolerance Overview is only for groups, not individuals" }},
{ text: "Radical Acceptance always comes first no matter the case" }},
{ text: "Distress Tolerance Overview and Radical Acceptance are identical" }},
{ text: "Distress Tolerance Overview follows a specific sequence; Radical Acceptance targets a different goal", correct: true }}
  ]
},
      {
  id: "q9",
  prompt: "DIARY CARD — A diary shows high arousal spikes before difficult calls. Which skill would you try first?",
  options: [
    { text: "Vent for 20 minutes" }},
{ text: "Skip the call" }},
{ text: "Over-plan and delay again" }},
{ text: "Distress Tolerance Overview", correct: true }}
  ]
},
      {
  id: "q10",
  prompt: "ETHICS — What is a key ethical safeguard when practicing Distress Tolerance Overview?",
  options: [
    { text: "Share others’ private data for accountability" }},
{ text: "Use the skill in ways that are safe for you and others; escalate support if risk increases", correct: true }},
{ text: "Use the skill as a substitute for medical care" }},
{ text: "Force others to practice the skill" }}
  ]
}
      ]
    },

    {
      id: "lesson_21",
      title: "21. STOP Skill",
      minutes: 18,
      reading: `
STOP Skill — This lesson provides a clear, practice-ready overview and a mini toolkit you can apply immediately. We'll define the skill or concept, explain when and why to use it, and outline concrete steps with examples. As you read, identify one real situation you can apply this to within the next 24–48 hours.

What you’ll learn: Crisis pause protocol to interrupt impulsivity. How to know when this skill is indicated versus when a different skill is a better fit. Step-by-step guidance with plain-language examples. Common traps and how to avoid them. How to practice, measure progress, and get feedback.

Definition. A rapid-sequence pause protocol to interrupt impulsive action and re-orient to goals.

Core steps. The typical sequence is: Stop, Take a step back, Observe, and Proceed mindfully. Practice the exact order first; once fluent, adapt with judgment.

When to use. Examples include: When emotions surge and you're about to act on impulse, When a conversation is escalating, and During urges to self-harm or use substances. If the situation doesn't fit these criteria, consider a different skill.

Common pitfalls. Watch for: Only doing 'Stop' but skipping Observe, Proceeding without aligning to values, and Using it too late after damage is done. Use a diary card to notice patterns and course-correct.

References: Linehan (2014) DBT Skills Training Handouts & Worksheets.

Real‑world example. Imagine a recent situation that triggered strong emotion. Walk through the steps out loud or in writing. If you get stuck, simplify the step and repeat. Aim for small wins and clear learning, not perfection.

Practice plan. Schedule a 10‑minute daily practice block for the next week. Use implementation intentions ("If X happens, then I will do Y") and record outcomes on your diary card. Review in your next session or with a peer coach.

Quality checks. Ask: Did I do the steps in order? Did I stay nonjudgmental? Did my actions move me toward values and goals? What will I tweak next time?

Safety and ethics. Use skills in ways that are safe for you and others. Seek professional support for acute risk. Skills complement—not replace—medical care.
`,
      quiz: [
{
  id: "q1",
  prompt: "DEFINITION — Which statement best defines STOP Skill?",
  options: [
    { text: "A breathing technique that always eliminates anxiety" }},
{ text: "A relaxation method that replaces problem solving" }},
{ text: "A rule that you must be calm before acting" }},
{ text: "A rapid-sequence pause protocol to interrupt impulsive action and re-orient to goals.", correct: true }}
  ]
},
      {
  id: "q2",
  prompt: "ORDER — What is the correct step sequence for STOP Skill?",
  options: [
    { text: "Stop → Observe → Take a step back → Proceed mindfully" }},
{ text: "Stop → Take a step back → Proceed mindfully → Observe" }},
{ text: "Take a step back → Stop → Observe → Proceed mindfully" }},
{ text: "Stop → Take a step back → Observe → Proceed mindfully", correct: true }}
  ]
},
      {
  id: "q3",
  prompt: "NOT — Which of the following is NOT a component of STOP Skill?",
  options: [
    { text: "Observe" }},
{ text: "Take a step back" }},
{ text: "Stop" }},
{ text: "Blaming", correct: true }}
  ]
},
      {
  id: "q4",
  prompt: "SCENARIO — In a situation like During urges to self-harm or use substances, what is the best first move?",
  options: [
    { text: "Use GIVE" }},
{ text: "Use STOP Skill", correct: true }},
{ text: "Do nothing and hope it resolves" }},
{ text: "Use Radical Acceptance" }}
  ]
},
      {
  id: "q5",
  prompt: "FILL‑IN — STOP Skill emphasizes ______ to help you act skillfully.",
  options: [
    { text: "overthinking" }},
{ text: "Stop", correct: true }},
{ text: "avoiding feelings" }},
{ text: "winning at all costs" }}
  ]
},
      {
  id: "q6",
  prompt: "EXAMPLE — Which option best illustrates STOP Skill?",
  options: [
    { text: "Ignoring physical needs" }},
{ text: "Applying the steps of STOP Skill during a real situation and aligning actions with goals", correct: true }},
{ text: "Making a decision while furious" }},
{ text: "Ranting on social media" }}
  ]
},
      {
  id: "q7",
  prompt: "TROUBLESHOOT — If you notice this pitfall: “Proceeding without aligning to values”, what should you do?",
  options: [
    { text: "Quit using the skill" }},
{ text: "Return to the step sequence and simplify the next step", correct: true }},
{ text: "Blame the situation" }},
{ text: "Wait until you feel motivated" }}
  ]
},
      {
  id: "q8",
  prompt: "COMPARE — What distinguishes STOP Skill from Radical Acceptance?",
  options: [
    { text: "STOP Skill follows a specific sequence; Radical Acceptance targets a different goal", correct: true }},
{ text: "STOP Skill and Radical Acceptance are identical" }},
{ text: "STOP Skill is only for groups, not individuals" }},
{ text: "Radical Acceptance always comes first no matter the case" }}
  ]
},
      {
  id: "q9",
  prompt: "DIARY CARD — A diary shows high arousal spikes before difficult calls. Which skill would you try first?",
  options: [
    { text: "Over-plan and delay again" }},
{ text: "Vent for 20 minutes" }},
{ text: "Skip the call" }},
{ text: "STOP Skill", correct: true }}
  ]
},
      {
  id: "q10",
  prompt: "ETHICS — What is a key ethical safeguard when practicing STOP Skill?",
  options: [
    { text: "Use the skill as a substitute for medical care" }},
{ text: "Use the skill in ways that are safe for you and others; escalate support if risk increases", correct: true }},
{ text: "Force others to practice the skill" }},
{ text: "Share others’ private data for accountability" }}
  ]
}
      ]
    },

    {
      id: "lesson_22",
      title: "22. TIPP Skills",
      minutes: 18,
      reading: `
TIPP Skills — This lesson provides a clear, practice-ready overview and a mini toolkit you can apply immediately. We'll define the skill or concept, explain when and why to use it, and outline concrete steps with examples. As you read, identify one real situation you can apply this to within the next 24–48 hours.

What you’ll learn: Physiology reset to rapidly lower arousal. How to know when this skill is indicated versus when a different skill is a better fit. Step-by-step guidance with plain-language examples. Common traps and how to avoid them. How to practice, measure progress, and get feedback.

Definition. A set of body-based interventions to quickly downshift high arousal.

Core steps. The typical sequence is: Temperature, Intense exercise, Paced breathing, and Paired muscle relaxation. Practice the exact order first; once fluent, adapt with judgment.

When to use. Examples include: Panic, rage, or anxiety spikes, Before high-stakes conversations, and When sleep is disrupted by hyperarousal. If the situation doesn't fit these criteria, consider a different skill.

Common pitfalls. Watch for: Doing light movement instead of intense bursts, Breathing too fast, and Skipping the 'paired' tension-relax sequence. Use a diary card to notice patterns and course-correct.

References: Linehan (2014), and Neurophysiology of vagal tone literature.

Real‑world example. Imagine a recent situation that triggered strong emotion. Walk through the steps out loud or in writing. If you get stuck, simplify the step and repeat. Aim for small wins and clear learning, not perfection.

Practice plan. Schedule a 10‑minute daily practice block for the next week. Use implementation intentions ("If X happens, then I will do Y") and record outcomes on your diary card. Review in your next session or with a peer coach.

Quality checks. Ask: Did I do the steps in order? Did I stay nonjudgmental? Did my actions move me toward values and goals? What will I tweak next time?

Safety and ethics. Use skills in ways that are safe for you and others. Seek professional support for acute risk. Skills complement—not replace—medical care.
`,
      quiz: [
{
  id: "q1",
  prompt: "DEFINITION — Which statement best defines TIPP Skills?",
  options: [
    { text: "A set of body-based interventions to quickly downshift high arousal.", correct: true }},
{ text: "A way to avoid difficult conversations indefinitely" }},
{ text: "A breathing technique that always eliminates anxiety" }},
{ text: "A relaxation method that replaces problem solving" }}
  ]
},
      {
  id: "q2",
  prompt: "ORDER — What is the correct step sequence for TIPP Skills?",
  options: [
    { text: "Temperature → Intense exercise → Paired muscle relaxation → Paced breathing" }},
{ text: "Intense exercise → Temperature → Paced breathing → Paired muscle relaxation" }},
{ text: "Temperature → Intense exercise → Paced breathing → Paired muscle relaxation", correct: true }},
{ text: "Temperature → Paced breathing → Intense exercise → Paired muscle relaxation" }}
  ]
},
      {
  id: "q3",
  prompt: "NOT — Which of the following is NOT a component of TIPP Skills?",
  options: [
    { text: "Temperature" }},
{ text: "Paced breathing" }},
{ text: "Paired muscle relaxation" }},
{ text: "Discounting the positive", correct: true }}
  ]
},
      {
  id: "q4",
  prompt: "SCENARIO — In a situation like Before high-stakes conversations, what is the best first move?",
  options: [
    { text: "Use TIPP Skills", correct: true }},
{ text: "Use Radical Acceptance" }},
{ text: "Do nothing and hope it resolves" }},
{ text: "Use Opposite Action" }}
  ]
},
      {
  id: "q5",
  prompt: "FILL‑IN — TIPP Skills emphasizes ______ to help you act skillfully.",
  options: [
    { text: "avoiding feelings" }},
{ text: "Temperature", correct: true }},
{ text: "overthinking" }},
{ text: "winning at all costs" }}
  ]
},
      {
  id: "q6",
  prompt: "EXAMPLE — Which option best illustrates TIPP Skills?",
  options: [
    { text: "Making a decision while furious" }},
{ text: "Ranting on social media" }},
{ text: "Applying the steps of TIPP Skills during a real situation and aligning actions with goals", correct: true }},
{ text: "Ignoring physical needs" }}
  ]
},
      {
  id: "q7",
  prompt: "TROUBLESHOOT — If you notice this pitfall: “Doing light movement instead of intense bursts”, what should you do?",
  options: [
    { text: "Return to the step sequence and simplify the next step", correct: true }},
{ text: "Wait until you feel motivated" }},
{ text: "Blame the situation" }},
{ text: "Quit using the skill" }}
  ]
},
      {
  id: "q8",
  prompt: "COMPARE — What distinguishes TIPP Skills from Radical Acceptance?",
  options: [
    { text: "Radical Acceptance always comes first no matter the case" }},
{ text: "TIPP Skills and Radical Acceptance are identical" }},
{ text: "TIPP Skills is only for groups, not individuals" }},
{ text: "TIPP Skills follows a specific sequence; Radical Acceptance targets a different goal", correct: true }}
  ]
},
      {
  id: "q9",
  prompt: "DIARY CARD — A diary shows high arousal spikes before difficult calls. Which skill would you try first?",
  options: [
    { text: "TIPP Skills", correct: true }},
{ text: "Vent for 20 minutes" }},
{ text: "Over-plan and delay again" }},
{ text: "Skip the call" }}
  ]
},
      {
  id: "q10",
  prompt: "ETHICS — What is a key ethical safeguard when practicing TIPP Skills?",
  options: [
    { text: "Force others to practice the skill" }},
{ text: "Use the skill as a substitute for medical care" }},
{ text: "Share others’ private data for accountability" }},
{ text: "Use the skill in ways that are safe for you and others; escalate support if risk increases", correct: true }}
  ]
}
      ]
    },

    {
      id: "lesson_23",
      title: "23. Pros & Cons",
      minutes: 18,
      reading: `
Pros & Cons — This lesson provides a clear, practice-ready overview and a mini toolkit you can apply immediately. We'll define the skill or concept, explain when and why to use it, and outline concrete steps with examples. As you read, identify one real situation you can apply this to within the next 24–48 hours.

What you’ll learn: Neutral cost–benefit analysis to guide choices under stress. How to know when this skill is indicated versus when a different skill is a better fit. Step-by-step guidance with plain-language examples. Common traps and how to avoid them. How to practice, measure progress, and get feedback.

Real‑world example. Imagine a recent situation that triggered strong emotion. Walk through the steps out loud or in writing. If you get stuck, simplify the step and repeat. Aim for small wins and clear learning, not perfection.

Practice plan. Schedule a 10‑minute daily practice block for the next week. Use implementation intentions ("If X happens, then I will do Y") and record outcomes on your diary card. Review in your next session or with a peer coach.

Quality checks. Ask: Did I do the steps in order? Did I stay nonjudgmental? Did my actions move me toward values and goals? What will I tweak next time?

Safety and ethics. Use skills in ways that are safe for you and others. Seek professional support for acute risk. Skills complement—not replace—medical care.
`,
      quiz: [
{
  id: "q1",
  prompt: "DEFINITION — Which statement best defines Pros & Cons?",
  options: [
    { text: "A rule that you must be calm before acting" }},
{ text: "A way to avoid difficult conversations indefinitely" }},
{ text: "A relaxation method that replaces problem solving" }},
{ text: "A DBT concept or tool related to Pros & Cons.", correct: true }}
  ]
},
      {
  id: "q2",
  prompt: "NOT — Which of the following is NOT a component of Pros & Cons?",
  options: [
    { text: "Catastrophizing", correct: true }},
{ text: "Clarify goals" }},
{ text: "Align to values" }},
{ text: "Practice mindfully" }}
  ]
},
      {
  id: "q3",
  prompt: "COMPARE — What distinguishes Pros & Cons from Opposite Action?",
  options: [
    { text: "Opposite Action always comes first no matter the case" }},
{ text: "Pros & Cons is only for groups, not individuals" }},
{ text: "Pros & Cons and Opposite Action are identical" }},
{ text: "Pros & Cons follows a specific sequence; Opposite Action targets a different goal", correct: true }}
  ]
},
      {
  id: "q4",
  prompt: "SCENARIO — In a situation like high-stress situations, what is the best first move?",
  options: [
    { text: "Use Radical Acceptance" }},
{ text: "Use Opposite Action" }},
{ text: "Use Pros & Cons", correct: true }},
{ text: "Use GIVE" }}
  ]
},
      {
  id: "q5",
  prompt: "FILL‑IN — Pros & Cons emphasizes ______ to help you act skillfully.",
  options: [
    { text: "winning at all costs" }},
{ text: "overthinking" }},
{ text: "Pros & Cons steps", correct: true }},
{ text: "avoiding feelings" }}
  ]
},
      {
  id: "q6",
  prompt: "EXAMPLE — Which option best illustrates Pros & Cons?",
  options: [
    { text: "Applying the steps of Pros & Cons during a real situation and aligning actions with goals", correct: true }},
{ text: "Ignoring physical needs" }},
{ text: "Making a decision while furious" }},
{ text: "Ranting on social media" }}
  ]
},
      {
  id: "q7",
  prompt: "TROUBLESHOOT — If you notice this pitfall: “Using the skill in the wrong context”, what should you do?",
  options: [
    { text: "Return to the step sequence and simplify the next step", correct: true }},
{ text: "Blame the situation" }},
{ text: "Quit using the skill" }},
{ text: "Wait until you feel motivated" }}
  ]
},
      {
  id: "q8",
  prompt: "COMPARE — What distinguishes Pros & Cons from Radical Acceptance?",
  options: [
    { text: "Pros & Cons is only for groups, not individuals" }},
{ text: "Radical Acceptance always comes first no matter the case" }},
{ text: "Pros & Cons and Radical Acceptance are identical" }},
{ text: "Pros & Cons follows a specific sequence; Radical Acceptance targets a different goal", correct: true }}
  ]
},
      {
  id: "q9",
  prompt: "DIARY CARD — A diary shows high arousal spikes before difficult calls. Which skill would you try first?",
  options: [
    { text: "Pros & Cons", correct: true }},
{ text: "Skip the call" }},
{ text: "Vent for 20 minutes" }},
{ text: "Over-plan and delay again" }}
  ]
},
      {
  id: "q10",
  prompt: "ETHICS — What is a key ethical safeguard when practicing Pros & Cons?",
  options: [
    { text: "Force others to practice the skill" }},
{ text: "Share others’ private data for accountability" }},
{ text: "Use the skill as a substitute for medical care" }},
{ text: "Use the skill in ways that are safe for you and others; escalate support if risk increases", correct: true }}
  ]
}
      ]
    },

    {
      id: "lesson_24",
      title: "24. Self‑Soothe (Five Senses)",
      minutes: 18,
      reading: `
Self‑Soothe (Five Senses) — This lesson provides a clear, practice-ready overview and a mini toolkit you can apply immediately. We'll define the skill or concept, explain when and why to use it, and outline concrete steps with examples. As you read, identify one real situation you can apply this to within the next 24–48 hours.

What you’ll learn: Grounding and soothing via sensory channels. How to know when this skill is indicated versus when a different skill is a better fit. Step-by-step guidance with plain-language examples. Common traps and how to avoid them. How to practice, measure progress, and get feedback.

Real‑world example. Imagine a recent situation that triggered strong emotion. Walk through the steps out loud or in writing. If you get stuck, simplify the step and repeat. Aim for small wins and clear learning, not perfection.

Practice plan. Schedule a 10‑minute daily practice block for the next week. Use implementation intentions ("If X happens, then I will do Y") and record outcomes on your diary card. Review in your next session or with a peer coach.

Quality checks. Ask: Did I do the steps in order? Did I stay nonjudgmental? Did my actions move me toward values and goals? What will I tweak next time?

Safety and ethics. Use skills in ways that are safe for you and others. Seek professional support for acute risk. Skills complement—not replace—medical care.
`,
      quiz: [
{
  id: "q1",
  prompt: "DEFINITION — Which statement best defines Self‑Soothe (Five Senses)?",
  options: [
    { text: "A breathing technique that always eliminates anxiety" }},
{ text: "A relaxation method that replaces problem solving" }},
{ text: "A DBT concept or tool related to Self‑Soothe (Five Senses).", correct: true }},
{ text: "A rule that you must be calm before acting" }}
  ]
},
      {
  id: "q2",
  prompt: "NOT — Which of the following is NOT a component of Self‑Soothe (Five Senses)?",
  options: [
    { text: "Align to values" }},
{ text: "Rumination", correct: true }},
{ text: "Clarify goals" }},
{ text: "Practice mindfully" }}
  ]
},
      {
  id: "q3",
  prompt: "COMPARE — What distinguishes Self‑Soothe (Five Senses) from Opposite Action?",
  options: [
    { text: "Opposite Action always comes first no matter the case" }},
{ text: "Self‑Soothe (Five Senses) and Opposite Action are identical" }},
{ text: "Self‑Soothe (Five Senses) is only for groups, not individuals" }},
{ text: "Self‑Soothe (Five Senses) follows a specific sequence; Opposite Action targets a different goal", correct: true }}
  ]
},
      {
  id: "q4",
  prompt: "SCENARIO — In a situation like high-stress situations, what is the best first move?",
  options: [
    { text: "Do nothing and hope it resolves" }},
{ text: "Use Self‑Soothe (Five Senses)", correct: true }},
{ text: "Use Opposite Action" }},
{ text: "Use GIVE" }}
  ]
},
      {
  id: "q5",
  prompt: "FILL‑IN — Self‑Soothe (Five Senses) emphasizes ______ to help you act skillfully.",
  options: [
    { text: "winning at all costs" }},
{ text: "Self‑Soothe (Five Senses) steps", correct: true }},
{ text: "overthinking" }},
{ text: "avoiding feelings" }}
  ]
},
      {
  id: "q6",
  prompt: "EXAMPLE — Which option best illustrates Self‑Soothe (Five Senses)?",
  options: [
    { text: "Ranting on social media" }},
{ text: "Making a decision while furious" }},
{ text: "Ignoring physical needs" }},
{ text: "Applying the steps of Self‑Soothe (Five Senses) during a real situation and aligning actions with goals", correct: true }}
  ]
},
      {
  id: "q7",
  prompt: "TROUBLESHOOT — If you notice this pitfall: “Using the skill in the wrong context”, what should you do?",
  options: [
    { text: "Quit using the skill" }},
{ text: "Blame the situation" }},
{ text: "Wait until you feel motivated" }},
{ text: "Return to the step sequence and simplify the next step", correct: true }}
  ]
},
      {
  id: "q8",
  prompt: "COMPARE — What distinguishes Self‑Soothe (Five Senses) from Radical Acceptance?",
  options: [
    { text: "Self‑Soothe (Five Senses) follows a specific sequence; Radical Acceptance targets a different goal", correct: true }},
{ text: "Self‑Soothe (Five Senses) and Radical Acceptance are identical" }},
{ text: "Radical Acceptance always comes first no matter the case" }},
{ text: "Self‑Soothe (Five Senses) is only for groups, not individuals" }}
  ]
},
      {
  id: "q9",
  prompt: "DIARY CARD — A diary shows high arousal spikes before difficult calls. Which skill would you try first?",
  options: [
    { text: "Self‑Soothe (Five Senses)", correct: true }},
{ text: "Over-plan and delay again" }},
{ text: "Skip the call" }},
{ text: "Vent for 20 minutes" }}
  ]
},
      {
  id: "q10",
  prompt: "ETHICS — What is a key ethical safeguard when practicing Self‑Soothe (Five Senses)?",
  options: [
    { text: "Force others to practice the skill" }},
{ text: "Share others’ private data for accountability" }},
{ text: "Use the skill in ways that are safe for you and others; escalate support if risk increases", correct: true }},
{ text: "Use the skill as a substitute for medical care" }}
  ]
}
      ]
    },

    {
      id: "lesson_25",
      title: "25. IMPROVE the Moment",
      minutes: 18,
      reading: `
IMPROVE the Moment — This lesson provides a clear, practice-ready overview and a mini toolkit you can apply immediately. We'll define the skill or concept, explain when and why to use it, and outline concrete steps with examples. As you read, identify one real situation you can apply this to within the next 24–48 hours.

What you’ll learn: Making a tough moment more bearable without avoidance. How to know when this skill is indicated versus when a different skill is a better fit. Step-by-step guidance with plain-language examples. Common traps and how to avoid them. How to practice, measure progress, and get feedback.

Definition. Coping strategies to make a hard moment more bearable without solving the problem immediately.

Core steps. The typical sequence is: Imagery, Meaning, Prayer, Relaxation, One thing in the moment, Vacation, and Encouragement. Practice the exact order first; once fluent, adapt with judgment.

When to use. Examples include: Crises that can't be fixed now, Waiting periods, and Acute grief or disappointment. If the situation doesn't fit these criteria, consider a different skill.

Common pitfalls. Watch for: Spiritual bypassing under 'Meaning', Avoidance disguised as 'Vacation', and Self-talk that becomes harsh instead of Encouraging. Use a diary card to notice patterns and course-correct.

References: Linehan (2014).

Real‑world example. Imagine a recent situation that triggered strong emotion. Walk through the steps out loud or in writing. If you get stuck, simplify the step and repeat. Aim for small wins and clear learning, not perfection.

Practice plan. Schedule a 10‑minute daily practice block for the next week. Use implementation intentions ("If X happens, then I will do Y") and record outcomes on your diary card. Review in your next session or with a peer coach.

Quality checks. Ask: Did I do the steps in order? Did I stay nonjudgmental? Did my actions move me toward values and goals? What will I tweak next time?

Safety and ethics. Use skills in ways that are safe for you and others. Seek professional support for acute risk. Skills complement—not replace—medical care.
`,
      quiz: [
{
  id: "q1",
  prompt: "DEFINITION — Which statement best defines IMPROVE the Moment?",
  options: [
    { text: "A relaxation method that replaces problem solving" }},
{ text: "A way to avoid difficult conversations indefinitely" }},
{ text: "Coping strategies to make a hard moment more bearable without solving the problem immediately.", correct: true }},
{ text: "A breathing technique that always eliminates anxiety" }}
  ]
},
      {
  id: "q2",
  prompt: "ORDER — What is the correct step sequence for IMPROVE the Moment?",
  options: [
    { text: "Imagery → Meaning → Prayer → Relaxation → One thing in the moment → Vacation → Encouragement", correct: true }},
{ text: "Imagery → Prayer → Meaning → Relaxation" }},
{ text: "Imagery → Meaning → Relaxation → Prayer" }},
{ text: "Meaning → Imagery → Prayer → Relaxation" }}
  ]
},
      {
  id: "q3",
  prompt: "NOT — Which of the following is NOT a component of IMPROVE the Moment?",
  options: [
    { text: "Encouragement" }},
{ text: "Imagery" }},
{ text: "Blaming", correct: true }},
{ text: "Prayer" }}
  ]
},
      {
  id: "q4",
  prompt: "SCENARIO — In a situation like Crises that can't be fixed now, what is the best first move?",
  options: [
    { text: "Use Opposite Action" }},
{ text: "Use IMPROVE the Moment", correct: true }},
{ text: "Use GIVE" }},
{ text: "Do nothing and hope it resolves" }}
  ]
},
      {
  id: "q5",
  prompt: "FILL‑IN — IMPROVE the Moment emphasizes ______ to help you act skillfully.",
  options: [
    { text: "overthinking" }},
{ text: "winning at all costs" }},
{ text: "Imagery", correct: true }},
{ text: "avoiding feelings" }}
  ]
},
      {
  id: "q6",
  prompt: "EXAMPLE — Which option best illustrates IMPROVE the Moment?",
  options: [
    { text: "Applying the steps of IMPROVE the Moment during a real situation and aligning actions with goals", correct: true }},
{ text: "Ignoring physical needs" }},
{ text: "Ranting on social media" }},
{ text: "Making a decision while furious" }}
  ]
},
      {
  id: "q7",
  prompt: "TROUBLESHOOT — If you notice this pitfall: “Self-talk that becomes harsh instead of Encouraging”, what should you do?",
  options: [
    { text: "Wait until you feel motivated" }},
{ text: "Quit using the skill" }},
{ text: "Blame the situation" }},
{ text: "Return to the step sequence and simplify the next step", correct: true }}
  ]
},
      {
  id: "q8",
  prompt: "COMPARE — What distinguishes IMPROVE the Moment from Radical Acceptance?",
  options: [
    { text: "IMPROVE the Moment is only for groups, not individuals" }},
{ text: "IMPROVE the Moment and Radical Acceptance are identical" }},
{ text: "Radical Acceptance always comes first no matter the case" }},
{ text: "IMPROVE the Moment follows a specific sequence; Radical Acceptance targets a different goal", correct: true }}
  ]
},
      {
  id: "q9",
  prompt: "DIARY CARD — A diary shows high arousal spikes before difficult calls. Which skill would you try first?",
  options: [
    { text: "IMPROVE the Moment", correct: true }},
{ text: "Vent for 20 minutes" }},
{ text: "Over-plan and delay again" }},
{ text: "Skip the call" }}
  ]
},
      {
  id: "q10",
  prompt: "ETHICS — What is a key ethical safeguard when practicing IMPROVE the Moment?",
  options: [
    { text: "Use the skill as a substitute for medical care" }},
{ text: "Share others’ private data for accountability" }},
{ text: "Use the skill in ways that are safe for you and others; escalate support if risk increases", correct: true }},
{ text: "Force others to practice the skill" }}
  ]
}
      ]
    },

    {
      id: "lesson_26",
      title: "26. Radical Acceptance",
      minutes: 18,
      reading: `
Radical Acceptance — This lesson provides a clear, practice-ready overview and a mini toolkit you can apply immediately. We'll define the skill or concept, explain when and why to use it, and outline concrete steps with examples. As you read, identify one real situation you can apply this to within the next 24–48 hours.

What you’ll learn: Letting reality be as it is to reduce suffering. How to know when this skill is indicated versus when a different skill is a better fit. Step-by-step guidance with plain-language examples. Common traps and how to avoid them. How to practice, measure progress, and get feedback.

Definition. Letting reality be as it is when fighting facts adds suffering.

Core steps. The typical sequence is: Notice resistance to reality, Name the facts, Turn the mind toward acceptance, Practice willingness, and Half-smile and willing hands. Practice the exact order first; once fluent, adapt with judgment.

When to use. Examples include: Irreversible losses, Past harms, and Uncontrollable externals. If the situation doesn't fit these criteria, consider a different skill.

Common pitfalls. Watch for: Confusing acceptance with approval, and Quitting problem-solving where change is possible. Use a diary card to notice patterns and course-correct.

References: Linehan (2014).

Real‑world example. Imagine a recent situation that triggered strong emotion. Walk through the steps out loud or in writing. If you get stuck, simplify the step and repeat. Aim for small wins and clear learning, not perfection.

Practice plan. Schedule a 10‑minute daily practice block for the next week. Use implementation intentions ("If X happens, then I will do Y") and record outcomes on your diary card. Review in your next session or with a peer coach.

Quality checks. Ask: Did I do the steps in order? Did I stay nonjudgmental? Did my actions move me toward values and goals? What will I tweak next time?

Safety and ethics. Use skills in ways that are safe for you and others. Seek professional support for acute risk. Skills complement—not replace—medical care.
`,
      quiz: [
{
  id: "q1",
  prompt: "DEFINITION — Which statement best defines Radical Acceptance?",
  options: [
    { text: "A way to avoid difficult conversations indefinitely" }},
{ text: "A relaxation method that replaces problem solving" }},
{ text: "A breathing technique that always eliminates anxiety" }},
{ text: "Letting reality be as it is when fighting facts adds suffering.", correct: true }}
  ]
},
      {
  id: "q2",
  prompt: "ORDER — What is the correct step sequence for Radical Acceptance?",
  options: [
    { text: "Notice resistance to reality → Name the facts → Turn the mind toward acceptance → Practice willingness → Half-smile and willing hands", correct: true }},
{ text: "Notice resistance to reality → Turn the mind toward acceptance → Name the facts → Practice willingness" }},
{ text: "Name the facts → Notice resistance to reality → Turn the mind toward acceptance → Practice willingness" }},
{ text: "Notice resistance to reality → Name the facts → Practice willingness → Turn the mind toward acceptance" }}
  ]
},
      {
  id: "q3",
  prompt: "NOT — Which of the following is NOT a component of Radical Acceptance?",
  options: [
    { text: "Blaming", correct: true }},
{ text: "Half-smile and willing hands" }},
{ text: "Name the facts" }},
{ text: "Notice resistance to reality" }}
  ]
},
      {
  id: "q4",
  prompt: "SCENARIO — In a situation like Past harms, what is the best first move?",
  options: [
    { text: "Use Opposite Action" }},
{ text: "Use GIVE" }},
{ text: "Do nothing and hope it resolves" }},
{ text: "Use Radical Acceptance", correct: true }}
  ]
},
      {
  id: "q5",
  prompt: "FILL‑IN — Radical Acceptance emphasizes ______ to help you act skillfully.",
  options: [
    { text: "avoiding feelings" }},
{ text: "overthinking" }},
{ text: "winning at all costs" }},
{ text: "Notice resistance to reality", correct: true }}
  ]
},
      {
  id: "q6",
  prompt: "EXAMPLE — Which option best illustrates Radical Acceptance?",
  options: [
    { text: "Ranting on social media" }},
{ text: "Applying the steps of Radical Acceptance during a real situation and aligning actions with goals", correct: true }},
{ text: "Making a decision while furious" }},
{ text: "Ignoring physical needs" }}
  ]
},
      {
  id: "q7",
  prompt: "TROUBLESHOOT — If you notice this pitfall: “Confusing acceptance with approval”, what should you do?",
  options: [
    { text: "Quit using the skill" }},
{ text: "Return to the step sequence and simplify the next step", correct: true }},
{ text: "Wait until you feel motivated" }},
{ text: "Blame the situation" }}
  ]
},
      {
  id: "q8",
  prompt: "COMPARE — What distinguishes Radical Acceptance from Radical Acceptance?",
  options: [
    { text: "Radical Acceptance always comes first no matter the case" }},
{ text: "Radical Acceptance is only for groups, not individuals" }},
{ text: "Radical Acceptance and Radical Acceptance are identical" }},
{ text: "Radical Acceptance follows a specific sequence; Radical Acceptance targets a different goal", correct: true }}
  ]
},
      {
  id: "q9",
  prompt: "DIARY CARD — A diary shows high arousal spikes before difficult calls. Which skill would you try first?",
  options: [
    { text: "Skip the call" }},
{ text: "Vent for 20 minutes" }},
{ text: "Over-plan and delay again" }},
{ text: "Radical Acceptance", correct: true }}
  ]
},
      {
  id: "q10",
  prompt: "ETHICS — What is a key ethical safeguard when practicing Radical Acceptance?",
  options: [
    { text: "Force others to practice the skill" }},
{ text: "Use the skill in ways that are safe for you and others; escalate support if risk increases", correct: true }},
{ text: "Share others’ private data for accountability" }},
{ text: "Use the skill as a substitute for medical care" }}
  ]
}
      ]
    },

    {
      id: "lesson_27",
      title: "27. Turning the Mind & Willingness",
      minutes: 18,
      reading: `
Turning the Mind & Willingness — This lesson provides a clear, practice-ready overview and a mini toolkit you can apply immediately. We'll define the skill or concept, explain when and why to use it, and outline concrete steps with examples. As you read, identify one real situation you can apply this to within the next 24–48 hours.

What you’ll learn: Recommitting to acceptance and skillful action. How to know when this skill is indicated versus when a different skill is a better fit. Step-by-step guidance with plain-language examples. Common traps and how to avoid them. How to practice, measure progress, and get feedback.

Real‑world example. Imagine a recent situation that triggered strong emotion. Walk through the steps out loud or in writing. If you get stuck, simplify the step and repeat. Aim for small wins and clear learning, not perfection.

Practice plan. Schedule a 10‑minute daily practice block for the next week. Use implementation intentions ("If X happens, then I will do Y") and record outcomes on your diary card. Review in your next session or with a peer coach.

Quality checks. Ask: Did I do the steps in order? Did I stay nonjudgmental? Did my actions move me toward values and goals? What will I tweak next time?

Safety and ethics. Use skills in ways that are safe for you and others. Seek professional support for acute risk. Skills complement—not replace—medical care.
`,
      quiz: [
{
  id: "q1",
  prompt: "DEFINITION — Which statement best defines Turning the Mind & Willingness?",
  options: [
    { text: "A breathing technique that always eliminates anxiety" }},
{ text: "A way to avoid difficult conversations indefinitely" }},
{ text: "A DBT concept or tool related to Turning the Mind & Willingness.", correct: true }},
{ text: "A relaxation method that replaces problem solving" }}
  ]
},
      {
  id: "q2",
  prompt: "NOT — Which of the following is NOT a component of Turning the Mind & Willingness?",
  options: [
    { text: "Align to values" }},
{ text: "Mind reading as a certainty", correct: true }},
{ text: "Practice mindfully" }},
{ text: "Clarify goals" }}
  ]
},
      {
  id: "q3",
  prompt: "COMPARE — What distinguishes Turning the Mind & Willingness from Opposite Action?",
  options: [
    { text: "Turning the Mind & Willingness follows a specific sequence; Opposite Action targets a different goal", correct: true }},
{ text: "Opposite Action always comes first no matter the case" }},
{ text: "Turning the Mind & Willingness and Opposite Action are identical" }},
{ text: "Turning the Mind & Willingness is only for groups, not individuals" }}
  ]
},
      {
  id: "q4",
  prompt: "SCENARIO — In a situation like high-stress situations, what is the best first move?",
  options: [
    { text: "Use Turning the Mind & Willingness", correct: true }},
{ text: "Use Opposite Action" }},
{ text: "Use GIVE" }},
{ text: "Do nothing and hope it resolves" }}
  ]
},
      {
  id: "q5",
  prompt: "FILL‑IN — Turning the Mind & Willingness emphasizes ______ to help you act skillfully.",
  options: [
    { text: "winning at all costs" }},
{ text: "Turning the Mind & Willingness steps", correct: true }},
{ text: "avoiding feelings" }},
{ text: "overthinking" }}
  ]
},
      {
  id: "q6",
  prompt: "EXAMPLE — Which option best illustrates Turning the Mind & Willingness?",
  options: [
    { text: "Applying the steps of Turning the Mind & Willingness during a real situation and aligning actions with goals", correct: true }},
{ text: "Ignoring physical needs" }},
{ text: "Making a decision while furious" }},
{ text: "Ranting on social media" }}
  ]
},
      {
  id: "q7",
  prompt: "TROUBLESHOOT — If you notice this pitfall: “Using the skill in the wrong context”, what should you do?",
  options: [
    { text: "Return to the step sequence and simplify the next step", correct: true }},
{ text: "Quit using the skill" }},
{ text: "Wait until you feel motivated" }},
{ text: "Blame the situation" }}
  ]
},
      {
  id: "q8",
  prompt: "COMPARE — What distinguishes Turning the Mind & Willingness from Radical Acceptance?",
  options: [
    { text: "Turning the Mind & Willingness is only for groups, not individuals" }},
{ text: "Turning the Mind & Willingness follows a specific sequence; Radical Acceptance targets a different goal", correct: true }},
{ text: "Radical Acceptance always comes first no matter the case" }},
{ text: "Turning the Mind & Willingness and Radical Acceptance are identical" }}
  ]
},
      {
  id: "q9",
  prompt: "DIARY CARD — A diary shows high arousal spikes before difficult calls. Which skill would you try first?",
  options: [
    { text: "Vent for 20 minutes" }},
{ text: "Turning the Mind & Willingness", correct: true }},
{ text: "Skip the call" }},
{ text: "Over-plan and delay again" }}
  ]
},
      {
  id: "q10",
  prompt: "ETHICS — What is a key ethical safeguard when practicing Turning the Mind & Willingness?",
  options: [
    { text: "Use the skill in ways that are safe for you and others; escalate support if risk increases", correct: true }},
{ text: "Force others to practice the skill" }},
{ text: "Use the skill as a substitute for medical care" }},
{ text: "Share others’ private data for accountability" }}
  ]
}
      ]
    },

    {
      id: "lesson_28",
      title: "28. Interpersonal Effectiveness Overview",
      minutes: 18,
      reading: `
Interpersonal Effectiveness Overview — This lesson provides a clear, practice-ready overview and a mini toolkit you can apply immediately. We'll define the skill or concept, explain when and why to use it, and outline concrete steps with examples. As you read, identify one real situation you can apply this to within the next 24–48 hours.

What you’ll learn: Balancing objectives, relationships, and self-respect. How to know when this skill is indicated versus when a different skill is a better fit. Step-by-step guidance with plain-language examples. Common traps and how to avoid them. How to practice, measure progress, and get feedback.

Real‑world example. Imagine a recent situation that triggered strong emotion. Walk through the steps out loud or in writing. If you get stuck, simplify the step and repeat. Aim for small wins and clear learning, not perfection.

Practice plan. Schedule a 10‑minute daily practice block for the next week. Use implementation intentions ("If X happens, then I will do Y") and record outcomes on your diary card. Review in your next session or with a peer coach.

Quality checks. Ask: Did I do the steps in order? Did I stay nonjudgmental? Did my actions move me toward values and goals? What will I tweak next time?

Safety and ethics. Use skills in ways that are safe for you and others. Seek professional support for acute risk. Skills complement—not replace—medical care.
`,
      quiz: [
{
  id: "q1",
  prompt: "DEFINITION — Which statement best defines Interpersonal Effectiveness Overview?",
  options: [
    { text: "A DBT concept or tool related to Interpersonal Effectiveness Overview.", correct: true }},
{ text: "A breathing technique that always eliminates anxiety" }},
{ text: "A way to avoid difficult conversations indefinitely" }},
{ text: "A relaxation method that replaces problem solving" }}
  ]
},
      {
  id: "q2",
  prompt: "NOT — Which of the following is NOT a component of Interpersonal Effectiveness Overview?",
  options: [
    { text: "Clarify goals" }},
{ text: "Align to values" }},
{ text: "Overgeneralization", correct: true }},
{ text: "Practice mindfully" }}
  ]
},
      {
  id: "q3",
  prompt: "COMPARE — What distinguishes Interpersonal Effectiveness Overview from Opposite Action?",
  options: [
    { text: "Interpersonal Effectiveness Overview follows a specific sequence; Opposite Action targets a different goal", correct: true }},
{ text: "Opposite Action always comes first no matter the case" }},
{ text: "Interpersonal Effectiveness Overview is only for groups, not individuals" }},
{ text: "Interpersonal Effectiveness Overview and Opposite Action are identical" }}
  ]
},
      {
  id: "q4",
  prompt: "SCENARIO — In a situation like high-stress situations, what is the best first move?",
  options: [
    { text: "Use GIVE" }},
{ text: "Use Opposite Action" }},
{ text: "Use Radical Acceptance" }},
{ text: "Use Interpersonal Effectiveness Overview", correct: true }}
  ]
},
      {
  id: "q5",
  prompt: "FILL‑IN — Interpersonal Effectiveness Overview emphasizes ______ to help you act skillfully.",
  options: [
    { text: "overthinking" }},
{ text: "avoiding feelings" }},
{ text: "Interpersonal Effectiveness Overview steps", correct: true }},
{ text: "winning at all costs" }}
  ]
},
      {
  id: "q6",
  prompt: "EXAMPLE — Which option best illustrates Interpersonal Effectiveness Overview?",
  options: [
    { text: "Ranting on social media" }},
{ text: "Applying the steps of Interpersonal Effectiveness Overview during a real situation and aligning actions with goals", correct: true }},
{ text: "Making a decision while furious" }},
{ text: "Ignoring physical needs" }}
  ]
},
      {
  id: "q7",
  prompt: "TROUBLESHOOT — If you notice this pitfall: “Giving up too soon”, what should you do?",
  options: [
    { text: "Blame the situation" }},
{ text: "Wait until you feel motivated" }},
{ text: "Return to the step sequence and simplify the next step", correct: true }},
{ text: "Quit using the skill" }}
  ]
},
      {
  id: "q8",
  prompt: "COMPARE — What distinguishes Interpersonal Effectiveness Overview from Radical Acceptance?",
  options: [
    { text: "Interpersonal Effectiveness Overview and Radical Acceptance are identical" }},
{ text: "Interpersonal Effectiveness Overview follows a specific sequence; Radical Acceptance targets a different goal", correct: true }},
{ text: "Radical Acceptance always comes first no matter the case" }},
{ text: "Interpersonal Effectiveness Overview is only for groups, not individuals" }}
  ]
},
      {
  id: "q9",
  prompt: "DIARY CARD — A diary shows high arousal spikes before difficult calls. Which skill would you try first?",
  options: [
    { text: "Interpersonal Effectiveness Overview", correct: true }},
{ text: "Over-plan and delay again" }},
{ text: "Skip the call" }},
{ text: "Vent for 20 minutes" }}
  ]
},
      {
  id: "q10",
  prompt: "ETHICS — What is a key ethical safeguard when practicing Interpersonal Effectiveness Overview?",
  options: [
    { text: "Force others to practice the skill" }},
{ text: "Use the skill as a substitute for medical care" }},
{ text: "Share others’ private data for accountability" }},
{ text: "Use the skill in ways that are safe for you and others; escalate support if risk increases", correct: true }}
  ]
}
      ]
    },

    {
      id: "lesson_29",
      title: "29. DEAR MAN",
      minutes: 18,
      reading: `
DEAR MAN — This lesson provides a clear, practice-ready overview and a mini toolkit you can apply immediately. We'll define the skill or concept, explain when and why to use it, and outline concrete steps with examples. As you read, identify one real situation you can apply this to within the next 24–48 hours.

What you’ll learn: Objective effectiveness script to ask or refuse. How to know when this skill is indicated versus when a different skill is a better fit. Step-by-step guidance with plain-language examples. Common traps and how to avoid them. How to practice, measure progress, and get feedback.

Definition. A structured script to make requests or say no while maximizing the chance of getting objectives met.

Core steps. The typical sequence is: Describe, Express, Assert, Reinforce, Mindful, Appear confident, and Negotiate. Practice the exact order first; once fluent, adapt with judgment.

When to use. Examples include: Negotiating boundaries, Requesting accommodations, and Saying no to unsafe or unfair demands. If the situation doesn't fit these criteria, consider a different skill.

Common pitfalls. Watch for: Skipping Reinforce so the other party lacks incentive, Arguing instead of staying Mindful, and Undermining with apologetic tone. Use a diary card to notice patterns and course-correct.

References: Linehan (2014).

Real‑world example. Imagine a recent situation that triggered strong emotion. Walk through the steps out loud or in writing. If you get stuck, simplify the step and repeat. Aim for small wins and clear learning, not perfection.

Practice plan. Schedule a 10‑minute daily practice block for the next week. Use implementation intentions ("If X happens, then I will do Y") and record outcomes on your diary card. Review in your next session or with a peer coach.

Quality checks. Ask: Did I do the steps in order? Did I stay nonjudgmental? Did my actions move me toward values and goals? What will I tweak next time?

Safety and ethics. Use skills in ways that are safe for you and others. Seek professional support for acute risk. Skills complement—not replace—medical care.
`,
      quiz: [
{
  id: "q1",
  prompt: "DEFINITION — Which statement best defines DEAR MAN?",
  options: [
    { text: "A relaxation method that replaces problem solving" }},
{ text: "A rule that you must be calm before acting" }},
{ text: "A structured script to make requests or say no while maximizing the chance of getting objectives met.", correct: true }},
{ text: "A way to avoid difficult conversations indefinitely" }}
  ]
},
      {
  id: "q2",
  prompt: "ORDER — What is the correct step sequence for DEAR MAN?",
  options: [
    { text: "Describe → Express → Reinforce → Assert" }},
{ text: "Describe → Assert → Express → Reinforce" }},
{ text: "Express → Describe → Assert → Reinforce" }},
{ text: "Describe → Express → Assert → Reinforce → Mindful → Appear confident → Negotiate", correct: true }}
  ]
},
      {
  id: "q3",
  prompt: "NOT — Which of the following is NOT a component of DEAR MAN?",
  options: [
    { text: "Assert" }},
{ text: "Mind reading as a certainty", correct: true }},
{ text: "Appear confident" }},
{ text: "Negotiate" }}
  ]
},
      {
  id: "q4",
  prompt: "SCENARIO — In a situation like Saying no to unsafe or unfair demands, what is the best first move?",
  options: [
    { text: "Use GIVE" }},
{ text: "Use Radical Acceptance" }},
{ text: "Use Opposite Action" }},
{ text: "Use DEAR MAN", correct: true }}
  ]
},
      {
  id: "q5",
  prompt: "FILL‑IN — DEAR MAN emphasizes ______ to help you act skillfully.",
  options: [
    { text: "overthinking" }},
{ text: "avoiding feelings" }},
{ text: "winning at all costs" }},
{ text: "Describe", correct: true }}
  ]
},
      {
  id: "q6",
  prompt: "EXAMPLE — Which option best illustrates DEAR MAN?",
  options: [
    { text: "Ignoring physical needs" }},
{ text: "Applying the steps of DEAR MAN during a real situation and aligning actions with goals", correct: true }},
{ text: "Ranting on social media" }},
{ text: "Making a decision while furious" }}
  ]
},
      {
  id: "q7",
  prompt: "TROUBLESHOOT — If you notice this pitfall: “Arguing instead of staying Mindful”, what should you do?",
  options: [
    { text: "Return to the step sequence and simplify the next step", correct: true }},
{ text: "Wait until you feel motivated" }},
{ text: "Blame the situation" }},
{ text: "Quit using the skill" }}
  ]
},
      {
  id: "q8",
  prompt: "COMPARE — What distinguishes DEAR MAN from Radical Acceptance?",
  options: [
    { text: "DEAR MAN and Radical Acceptance are identical" }},
{ text: "DEAR MAN follows a specific sequence; Radical Acceptance targets a different goal", correct: true }},
{ text: "DEAR MAN is only for groups, not individuals" }},
{ text: "Radical Acceptance always comes first no matter the case" }}
  ]
},
      {
  id: "q9",
  prompt: "DIARY CARD — A diary shows high arousal spikes before difficult calls. Which skill would you try first?",
  options: [
    { text: "DEAR MAN", correct: true }},
{ text: "Over-plan and delay again" }},
{ text: "Vent for 20 minutes" }},
{ text: "Skip the call" }}
  ]
},
      {
  id: "q10",
  prompt: "ETHICS — What is a key ethical safeguard when practicing DEAR MAN?",
  options: [
    { text: "Force others to practice the skill" }},
{ text: "Use the skill in ways that are safe for you and others; escalate support if risk increases", correct: true }},
{ text: "Use the skill as a substitute for medical care" }},
{ text: "Share others’ private data for accountability" }}
  ]
}
      ]
    },

    {
      id: "lesson_30",
      title: "30. GIVE",
      minutes: 18,
      reading: `
GIVE — This lesson provides a clear, practice-ready overview and a mini toolkit you can apply immediately. We'll define the skill or concept, explain when and why to use it, and outline concrete steps with examples. As you read, identify one real situation you can apply this to within the next 24–48 hours.

What you’ll learn: Relationship effectiveness to soften interactions. How to know when this skill is indicated versus when a different skill is a better fit. Step-by-step guidance with plain-language examples. Common traps and how to avoid them. How to practice, measure progress, and get feedback.

Definition. Social behaviors that maintain and repair relationships during asks or conflicts.

Core steps. The typical sequence is: Gentle, Interested, Validate, and Easy manner. Practice the exact order first; once fluent, adapt with judgment.

When to use. Examples include: Preserving closeness while negotiating, Repairing minor ruptures, and Reducing defensiveness in others. If the situation doesn't fit these criteria, consider a different skill.

Common pitfalls. Watch for: Performative interest without real listening, Invalidating with 'but', and Overdoing humor when gravity is needed. Use a diary card to notice patterns and course-correct.

References: Linehan (2014).

Real‑world example. Imagine a recent situation that triggered strong emotion. Walk through the steps out loud or in writing. If you get stuck, simplify the step and repeat. Aim for small wins and clear learning, not perfection.

Practice plan. Schedule a 10‑minute daily practice block for the next week. Use implementation intentions ("If X happens, then I will do Y") and record outcomes on your diary card. Review in your next session or with a peer coach.

Quality checks. Ask: Did I do the steps in order? Did I stay nonjudgmental? Did my actions move me toward values and goals? What will I tweak next time?

Safety and ethics. Use skills in ways that are safe for you and others. Seek professional support for acute risk. Skills complement—not replace—medical care.
`,
      quiz: [
{
  id: "q1",
  prompt: "DEFINITION — Which statement best defines GIVE?",
  options: [
    { text: "A relaxation method that replaces problem solving" }},
{ text: "A rule that you must be calm before acting" }},
{ text: "Social behaviors that maintain and repair relationships during asks or conflicts.", correct: true }},
{ text: "A way to avoid difficult conversations indefinitely" }}
  ]
},
      {
  id: "q2",
  prompt: "ORDER — What is the correct step sequence for GIVE?",
  options: [
    { text: "Interested → Gentle → Validate → Easy manner" }},
{ text: "Gentle → Interested → Validate → Easy manner", correct: true }},
{ text: "Gentle → Validate → Interested → Easy manner" }},
{ text: "Gentle → Interested → Easy manner → Validate" }}
  ]
},
      {
  id: "q3",
  prompt: "NOT — Which of the following is NOT a component of GIVE?",
  options: [
    { text: "Interested" }},
{ text: "Validate" }},
{ text: "Gentle" }},
{ text: "Blaming", correct: true }}
  ]
},
      {
  id: "q4",
  prompt: "SCENARIO — In a situation like Reducing defensiveness in others, what is the best first move?",
  options: [
    { text: "Use Radical Acceptance" }},
{ text: "Use Opposite Action" }},
{ text: "Do nothing and hope it resolves" }},
{ text: "Use GIVE", correct: true }}
  ]
},
      {
  id: "q5",
  prompt: "FILL‑IN — GIVE emphasizes ______ to help you act skillfully.",
  options: [
    { text: "Gentle", correct: true }},
{ text: "avoiding feelings" }},
{ text: "overthinking" }},
{ text: "winning at all costs" }}
  ]
},
      {
  id: "q6",
  prompt: "EXAMPLE — Which option best illustrates GIVE?",
  options: [
    { text: "Ignoring physical needs" }},
{ text: "Ranting on social media" }},
{ text: "Making a decision while furious" }},
{ text: "Applying the steps of GIVE during a real situation and aligning actions with goals", correct: true }}
  ]
},
      {
  id: "q7",
  prompt: "TROUBLESHOOT — If you notice this pitfall: “Performative interest without real listening”, what should you do?",
  options: [
    { text: "Wait until you feel motivated" }},
{ text: "Blame the situation" }},
{ text: "Quit using the skill" }},
{ text: "Return to the step sequence and simplify the next step", correct: true }}
  ]
},
      {
  id: "q8",
  prompt: "COMPARE — What distinguishes GIVE from Radical Acceptance?",
  options: [
    { text: "GIVE and Radical Acceptance are identical" }},
{ text: "Radical Acceptance always comes first no matter the case" }},
{ text: "GIVE follows a specific sequence; Radical Acceptance targets a different goal", correct: true }},
{ text: "GIVE is only for groups, not individuals" }}
  ]
},
      {
  id: "q9",
  prompt: "DIARY CARD — A diary shows high arousal spikes before difficult calls. Which skill would you try first?",
  options: [
    { text: "Over-plan and delay again" }},
{ text: "GIVE", correct: true }},
{ text: "Skip the call" }},
{ text: "Vent for 20 minutes" }}
  ]
},
      {
  id: "q10",
  prompt: "ETHICS — What is a key ethical safeguard when practicing GIVE?",
  options: [
    { text: "Force others to practice the skill" }},
{ text: "Use the skill as a substitute for medical care" }},
{ text: "Use the skill in ways that are safe for you and others; escalate support if risk increases", correct: true }},
{ text: "Share others’ private data for accountability" }}
  ]
}
      ]
    },

    {
      id: "lesson_31",
      title: "31. FAST",
      minutes: 18,
      reading: `
FAST — This lesson provides a clear, practice-ready overview and a mini toolkit you can apply immediately. We'll define the skill or concept, explain when and why to use it, and outline concrete steps with examples. As you read, identify one real situation you can apply this to within the next 24–48 hours.

What you’ll learn: Self-respect effectiveness to uphold values. How to know when this skill is indicated versus when a different skill is a better fit. Step-by-step guidance with plain-language examples. Common traps and how to avoid them. How to practice, measure progress, and get feedback.

Definition. Behaviors that protect self-respect while advocating or declining.

Core steps. The typical sequence is: Fair, Apologies (no excessive apologies), Stick to values, and Truthful. Practice the exact order first; once fluent, adapt with judgment.

When to use. Examples include: You tend to people-please at your expense, High pressure to exaggerate or omit facts, and Boundary violations. If the situation doesn't fit these criteria, consider a different skill.

Common pitfalls. Watch for: Over-apologizing, Trading values for short-term gains, and White lies to avoid discomfort. Use a diary card to notice patterns and course-correct.

References: Linehan (2014).

Real‑world example. Imagine a recent situation that triggered strong emotion. Walk through the steps out loud or in writing. If you get stuck, simplify the step and repeat. Aim for small wins and clear learning, not perfection.

Practice plan. Schedule a 10‑minute daily practice block for the next week. Use implementation intentions ("If X happens, then I will do Y") and record outcomes on your diary card. Review in your next session or with a peer coach.

Quality checks. Ask: Did I do the steps in order? Did I stay nonjudgmental? Did my actions move me toward values and goals? What will I tweak next time?

Safety and ethics. Use skills in ways that are safe for you and others. Seek professional support for acute risk. Skills complement—not replace—medical care.
`,
      quiz: [
{
  id: "q1",
  prompt: "DEFINITION — Which statement best defines FAST?",
  options: [
    { text: "Behaviors that protect self-respect while advocating or declining.", correct: true }},
{ text: "A rule that you must be calm before acting" }},
{ text: "A way to avoid difficult conversations indefinitely" }},
{ text: "A relaxation method that replaces problem solving" }}
  ]
},
      {
  id: "q2",
  prompt: "ORDER — What is the correct step sequence for FAST?",
  options: [
    { text: "Fair → Apologies (no excessive apologies) → Stick to values → Truthful", correct: true }},
{ text: "Apologies (no excessive apologies) → Fair → Stick to values → Truthful" }},
{ text: "Fair → Apologies (no excessive apologies) → Truthful → Stick to values" }},
{ text: "Fair → Stick to values → Apologies (no excessive apologies) → Truthful" }}
  ]
},
      {
  id: "q3",
  prompt: "NOT — Which of the following is NOT a component of FAST?",
  options: [
    { text: "Avoidance", correct: true }},
{ text: "Fair" }},
{ text: "Stick to values" }},
{ text: "Truthful" }}
  ]
},
      {
  id: "q4",
  prompt: "SCENARIO — In a situation like Boundary violations, what is the best first move?",
  options: [
    { text: "Use FAST", correct: true }},
{ text: "Use GIVE" }},
{ text: "Do nothing and hope it resolves" }},
{ text: "Use Opposite Action" }}
  ]
},
      {
  id: "q5",
  prompt: "FILL‑IN — FAST emphasizes ______ to help you act skillfully.",
  options: [
    { text: "avoiding feelings" }},
{ text: "winning at all costs" }},
{ text: "overthinking" }},
{ text: "Fair", correct: true }}
  ]
},
      {
  id: "q6",
  prompt: "EXAMPLE — Which option best illustrates FAST?",
  options: [
    { text: "Ignoring physical needs" }},
{ text: "Applying the steps of FAST during a real situation and aligning actions with goals", correct: true }},
{ text: "Making a decision while furious" }},
{ text: "Ranting on social media" }}
  ]
},
      {
  id: "q7",
  prompt: "TROUBLESHOOT — If you notice this pitfall: “Over-apologizing”, what should you do?",
  options: [
    { text: "Blame the situation" }},
{ text: "Quit using the skill" }},
{ text: "Wait until you feel motivated" }},
{ text: "Return to the step sequence and simplify the next step", correct: true }}
  ]
},
      {
  id: "q8",
  prompt: "COMPARE — What distinguishes FAST from Radical Acceptance?",
  options: [
    { text: "FAST is only for groups, not individuals" }},
{ text: "FAST and Radical Acceptance are identical" }},
{ text: "FAST follows a specific sequence; Radical Acceptance targets a different goal", correct: true }},
{ text: "Radical Acceptance always comes first no matter the case" }}
  ]
},
      {
  id: "q9",
  prompt: "DIARY CARD — A diary shows high arousal spikes before difficult calls. Which skill would you try first?",
  options: [
    { text: "Over-plan and delay again" }},
{ text: "Skip the call" }},
{ text: "Vent for 20 minutes" }},
{ text: "FAST", correct: true }}
  ]
},
      {
  id: "q10",
  prompt: "ETHICS — What is a key ethical safeguard when practicing FAST?",
  options: [
    { text: "Use the skill in ways that are safe for you and others; escalate support if risk increases", correct: true }},
{ text: "Use the skill as a substitute for medical care" }},
{ text: "Share others’ private data for accountability" }},
{ text: "Force others to practice the skill" }}
  ]
}
      ]
    },

    {
      id: "lesson_32",
      title: "32. Walking the Middle Path & Dialectics",
      minutes: 18,
      reading: `
Walking the Middle Path & Dialectics — This lesson provides a clear, practice-ready overview and a mini toolkit you can apply immediately. We'll define the skill or concept, explain when and why to use it, and outline concrete steps with examples. As you read, identify one real situation you can apply this to within the next 24–48 hours.

What you’ll learn: Seeing both sides, reducing extremes, finding synthesis. How to know when this skill is indicated versus when a different skill is a better fit. Step-by-step guidance with plain-language examples. Common traps and how to avoid them. How to practice, measure progress, and get feedback.

Real‑world example. Imagine a recent situation that triggered strong emotion. Walk through the steps out loud or in writing. If you get stuck, simplify the step and repeat. Aim for small wins and clear learning, not perfection.

Practice plan. Schedule a 10‑minute daily practice block for the next week. Use implementation intentions ("If X happens, then I will do Y") and record outcomes on your diary card. Review in your next session or with a peer coach.

Quality checks. Ask: Did I do the steps in order? Did I stay nonjudgmental? Did my actions move me toward values and goals? What will I tweak next time?

Safety and ethics. Use skills in ways that are safe for you and others. Seek professional support for acute risk. Skills complement—not replace—medical care.
`,
      quiz: [
{
  id: "q1",
  prompt: "DEFINITION — Which statement best defines Walking the Middle Path & Dialectics?",
  options: [
    { text: "A DBT concept or tool related to Walking the Middle Path & Dialectics.", correct: true }},
{ text: "A relaxation method that replaces problem solving" }},
{ text: "A rule that you must be calm before acting" }},
{ text: "A way to avoid difficult conversations indefinitely" }}
  ]
},
      {
  id: "q2",
  prompt: "NOT — Which of the following is NOT a component of Walking the Middle Path & Dialectics?",
  options: [
    { text: "Align to values" }},
{ text: "Overgeneralization", correct: true }},
{ text: "Clarify goals" }},
{ text: "Practice mindfully" }}
  ]
},
      {
  id: "q3",
  prompt: "COMPARE — What distinguishes Walking the Middle Path & Dialectics from Opposite Action?",
  options: [
    { text: "Walking the Middle Path & Dialectics and Opposite Action are identical" }},
{ text: "Opposite Action always comes first no matter the case" }},
{ text: "Walking the Middle Path & Dialectics is only for groups, not individuals" }},
{ text: "Walking the Middle Path & Dialectics follows a specific sequence; Opposite Action targets a different goal", correct: true }}
  ]
},
      {
  id: "q4",
  prompt: "SCENARIO — In a situation like high-stress situations, what is the best first move?",
  options: [
    { text: "Use Radical Acceptance" }},
{ text: "Use Walking the Middle Path & Dialectics", correct: true }},
{ text: "Do nothing and hope it resolves" }},
{ text: "Use GIVE" }}
  ]
},
      {
  id: "q5",
  prompt: "FILL‑IN — Walking the Middle Path & Dialectics emphasizes ______ to help you act skillfully.",
  options: [
    { text: "winning at all costs" }},
{ text: "Walking the Middle Path & Dialectics steps", correct: true }},
{ text: "avoiding feelings" }},
{ text: "overthinking" }}
  ]
},
      {
  id: "q6",
  prompt: "EXAMPLE — Which option best illustrates Walking the Middle Path & Dialectics?",
  options: [
    { text: "Making a decision while furious" }},
{ text: "Applying the steps of Walking the Middle Path & Dialectics during a real situation and aligning actions with goals", correct: true }},
{ text: "Ranting on social media" }},
{ text: "Ignoring physical needs" }}
  ]
},
      {
  id: "q7",
  prompt: "TROUBLESHOOT — If you notice this pitfall: “Using the skill in the wrong context”, what should you do?",
  options: [
    { text: "Wait until you feel motivated" }},
{ text: "Quit using the skill" }},
{ text: "Blame the situation" }},
{ text: "Return to the step sequence and simplify the next step", correct: true }}
  ]
},
      {
  id: "q8",
  prompt: "COMPARE — What distinguishes Walking the Middle Path & Dialectics from Radical Acceptance?",
  options: [
    { text: "Walking the Middle Path & Dialectics is only for groups, not individuals" }},
{ text: "Radical Acceptance always comes first no matter the case" }},
{ text: "Walking the Middle Path & Dialectics follows a specific sequence; Radical Acceptance targets a different goal", correct: true }},
{ text: "Walking the Middle Path & Dialectics and Radical Acceptance are identical" }}
  ]
},
      {
  id: "q9",
  prompt: "DIARY CARD — A diary shows high arousal spikes before difficult calls. Which skill would you try first?",
  options: [
    { text: "Over-plan and delay again" }},
{ text: "Skip the call" }},
{ text: "Vent for 20 minutes" }},
{ text: "Walking the Middle Path & Dialectics", correct: true }}
  ]
},
      {
  id: "q10",
  prompt: "ETHICS — What is a key ethical safeguard when practicing Walking the Middle Path & Dialectics?",
  options: [
    { text: "Force others to practice the skill" }},
{ text: "Use the skill in ways that are safe for you and others; escalate support if risk increases", correct: true }},
{ text: "Share others’ private data for accountability" }},
{ text: "Use the skill as a substitute for medical care" }}
  ]
}
      ]
    },

    {
      id: "lesson_33",
      title: "33. Validation (Six Levels)",
      minutes: 18,
      reading: `
Validation (Six Levels) — This lesson provides a clear, practice-ready overview and a mini toolkit you can apply immediately. We'll define the skill or concept, explain when and why to use it, and outline concrete steps with examples. As you read, identify one real situation you can apply this to within the next 24–48 hours.

What you’ll learn: Communicating that another’s inner experience makes sense. How to know when this skill is indicated versus when a different skill is a better fit. Step-by-step guidance with plain-language examples. Common traps and how to avoid them. How to practice, measure progress, and get feedback.

Definition. Communicating that the other's internal experience makes sense in some way.

Core steps. The typical sequence is: Pay attention, Reflect back, Read minds (tentatively), Understand in terms of history/biology, Normalize, and Radical genuineness. Practice the exact order first; once fluent, adapt with judgment.

When to use. Examples include: Interpersonal ruptures, Emotion escalations, and Before problem-solving. If the situation doesn't fit these criteria, consider a different skill.

Common pitfalls. Watch for: Validation + 'but', Diagnosing instead of validating, and Inauthentic tone. Use a diary card to notice patterns and course-correct.

References: Linehan (2014).

Real‑world example. Imagine a recent situation that triggered strong emotion. Walk through the steps out loud or in writing. If you get stuck, simplify the step and repeat. Aim for small wins and clear learning, not perfection.

Practice plan. Schedule a 10‑minute daily practice block for the next week. Use implementation intentions ("If X happens, then I will do Y") and record outcomes on your diary card. Review in your next session or with a peer coach.

Quality checks. Ask: Did I do the steps in order? Did I stay nonjudgmental? Did my actions move me toward values and goals? What will I tweak next time?

Safety and ethics. Use skills in ways that are safe for you and others. Seek professional support for acute risk. Skills complement—not replace—medical care.
`,
      quiz: [
{
  id: "q1",
  prompt: "DEFINITION — Which statement best defines Validation (Six Levels)?",
  options: [
    { text: "A relaxation method that replaces problem solving" }},
{ text: "Communicating that the other's internal experience makes sense in some way.", correct: true }},
{ text: "A breathing technique that always eliminates anxiety" }},
{ text: "A rule that you must be calm before acting" }}
  ]
},
      {
  id: "q2",
  prompt: "ORDER — What is the correct step sequence for Validation (Six Levels)?",
  options: [
    { text: "Pay attention → Read minds (tentatively) → Reflect back → Understand in terms of history/biology" }},
{ text: "Pay attention → Reflect back → Understand in terms of history/biology → Read minds (tentatively)" }},
{ text: "Pay attention → Reflect back → Read minds (tentatively) → Understand in terms of history/biology → Normalize → Radical genuineness", correct: true }},
{ text: "Reflect back → Pay attention → Read minds (tentatively) → Understand in terms of history/biology" }}
  ]
},
      {
  id: "q3",
  prompt: "NOT — Which of the following is NOT a component of Validation (Six Levels)?",
  options: [
    { text: "Normalize" }},
{ text: "Radical genuineness" }},
{ text: "Discounting the positive", correct: true }},
{ text: "Understand in terms of history/biology" }}
  ]
},
      {
  id: "q4",
  prompt: "SCENARIO — In a situation like Interpersonal ruptures, what is the best first move?",
  options: [
    { text: "Use Opposite Action" }},
{ text: "Use Radical Acceptance" }},
{ text: "Use Validation (Six Levels)", correct: true }},
{ text: "Use GIVE" }}
  ]
},
      {
  id: "q5",
  prompt: "FILL‑IN — Validation (Six Levels) emphasizes ______ to help you act skillfully.",
  options: [
    { text: "avoiding feelings" }},
{ text: "winning at all costs" }},
{ text: "overthinking" }},
{ text: "Pay attention", correct: true }}
  ]
},
      {
  id: "q6",
  prompt: "EXAMPLE — Which option best illustrates Validation (Six Levels)?",
  options: [
    { text: "Ignoring physical needs" }},
{ text: "Ranting on social media" }},
{ text: "Making a decision while furious" }},
{ text: "Applying the steps of Validation (Six Levels) during a real situation and aligning actions with goals", correct: true }}
  ]
},
      {
  id: "q7",
  prompt: "TROUBLESHOOT — If you notice this pitfall: “Inauthentic tone”, what should you do?",
  options: [
    { text: "Wait until you feel motivated" }},
{ text: "Blame the situation" }},
{ text: "Quit using the skill" }},
{ text: "Return to the step sequence and simplify the next step", correct: true }}
  ]
},
      {
  id: "q8",
  prompt: "COMPARE — What distinguishes Validation (Six Levels) from Radical Acceptance?",
  options: [
    { text: "Validation (Six Levels) is only for groups, not individuals" }},
{ text: "Validation (Six Levels) and Radical Acceptance are identical" }},
{ text: "Radical Acceptance always comes first no matter the case" }},
{ text: "Validation (Six Levels) follows a specific sequence; Radical Acceptance targets a different goal", correct: true }}
  ]
},
      {
  id: "q9",
  prompt: "DIARY CARD — A diary shows high arousal spikes before difficult calls. Which skill would you try first?",
  options: [
    { text: "Over-plan and delay again" }},
{ text: "Validation (Six Levels)", correct: true }},
{ text: "Vent for 20 minutes" }},
{ text: "Skip the call" }}
  ]
},
      {
  id: "q10",
  prompt: "ETHICS — What is a key ethical safeguard when practicing Validation (Six Levels)?",
  options: [
    { text: "Share others’ private data for accountability" }},
{ text: "Use the skill as a substitute for medical care" }},
{ text: "Force others to practice the skill" }},
{ text: "Use the skill in ways that are safe for you and others; escalate support if risk increases", correct: true }}
  ]
}
      ]
    },

    {
      id: "lesson_34",
      title: "34. Chain Analysis",
      minutes: 18,
      reading: `
Chain Analysis — This lesson provides a clear, practice-ready overview and a mini toolkit you can apply immediately. We'll define the skill or concept, explain when and why to use it, and outline concrete steps with examples. As you read, identify one real situation you can apply this to within the next 24–48 hours.

What you’ll learn: Analyzing behavior to design precise solutions. How to know when this skill is indicated versus when a different skill is a better fit. Step-by-step guidance with plain-language examples. Common traps and how to avoid them. How to practice, measure progress, and get feedback.

Definition. A granular analysis of antecedents and consequences to drive targeted solutions.

Core steps. The typical sequence is: Vulnerabilities, Prompting event, Links, Problem behavior, Consequences, and Solutions and prevention. Practice the exact order first; once fluent, adapt with judgment.

When to use. Examples include: Recurrent problem behaviors, Relapse, and Therapy-interfering behaviors. If the situation doesn't fit these criteria, consider a different skill.

Common pitfalls. Watch for: Jumping to advice before analysis, Vague links, and Ignoring small successes. Use a diary card to notice patterns and course-correct.

References: Linehan (1993, 2014).

Real‑world example. Imagine a recent situation that triggered strong emotion. Walk through the steps out loud or in writing. If you get stuck, simplify the step and repeat. Aim for small wins and clear learning, not perfection.

Practice plan. Schedule a 10‑minute daily practice block for the next week. Use implementation intentions ("If X happens, then I will do Y") and record outcomes on your diary card. Review in your next session or with a peer coach.

Quality checks. Ask: Did I do the steps in order? Did I stay nonjudgmental? Did my actions move me toward values and goals? What will I tweak next time?

Safety and ethics. Use skills in ways that are safe for you and others. Seek professional support for acute risk. Skills complement—not replace—medical care.
`,
      quiz: [
{
  id: "q1",
  prompt: "DEFINITION — Which statement best defines Chain Analysis?",
  options: [
    { text: "A way to avoid difficult conversations indefinitely" }},
{ text: "A breathing technique that always eliminates anxiety" }},
{ text: "A rule that you must be calm before acting" }},
{ text: "A granular analysis of antecedents and consequences to drive targeted solutions.", correct: true }}
  ]
},
      {
  id: "q2",
  prompt: "ORDER — What is the correct step sequence for Chain Analysis?",
  options: [
    { text: "Vulnerabilities → Prompting event → Links → Problem behavior → Consequences → Solutions and prevention", correct: true }},
{ text: "Prompting event → Vulnerabilities → Links → Problem behavior" }},
{ text: "Vulnerabilities → Prompting event → Problem behavior → Links" }},
{ text: "Vulnerabilities → Links → Prompting event → Problem behavior" }}
  ]
},
      {
  id: "q3",
  prompt: "NOT — Which of the following is NOT a component of Chain Analysis?",
  options: [
    { text: "Solutions and prevention" }},
{ text: "Problem behavior" }},
{ text: "Consequences" }},
{ text: "Avoidance", correct: true }}
  ]
},
      {
  id: "q4",
  prompt: "SCENARIO — In a situation like Therapy-interfering behaviors, what is the best first move?",
  options: [
    { text: "Use Radical Acceptance" }},
{ text: "Do nothing and hope it resolves" }},
{ text: "Use Opposite Action" }},
{ text: "Use Chain Analysis", correct: true }}
  ]
},
      {
  id: "q5",
  prompt: "FILL‑IN — Chain Analysis emphasizes ______ to help you act skillfully.",
  options: [
    { text: "overthinking" }},
{ text: "winning at all costs" }},
{ text: "Vulnerabilities", correct: true }},
{ text: "avoiding feelings" }}
  ]
},
      {
  id: "q6",
  prompt: "EXAMPLE — Which option best illustrates Chain Analysis?",
  options: [
    { text: "Making a decision while furious" }},
{ text: "Ignoring physical needs" }},
{ text: "Ranting on social media" }},
{ text: "Applying the steps of Chain Analysis during a real situation and aligning actions with goals", correct: true }}
  ]
},
      {
  id: "q7",
  prompt: "TROUBLESHOOT — If you notice this pitfall: “Vague links”, what should you do?",
  options: [
    { text: "Return to the step sequence and simplify the next step", correct: true }},
{ text: "Blame the situation" }},
{ text: "Quit using the skill" }},
{ text: "Wait until you feel motivated" }}
  ]
},
      {
  id: "q8",
  prompt: "COMPARE — What distinguishes Chain Analysis from Radical Acceptance?",
  options: [
    { text: "Radical Acceptance always comes first no matter the case" }},
{ text: "Chain Analysis and Radical Acceptance are identical" }},
{ text: "Chain Analysis follows a specific sequence; Radical Acceptance targets a different goal", correct: true }},
{ text: "Chain Analysis is only for groups, not individuals" }}
  ]
},
      {
  id: "q9",
  prompt: "DIARY CARD — A diary shows high arousal spikes before difficult calls. Which skill would you try first?",
  options: [
    { text: "Over-plan and delay again" }},
{ text: "Chain Analysis", correct: true }},
{ text: "Vent for 20 minutes" }},
{ text: "Skip the call" }}
  ]
},
      {
  id: "q10",
  prompt: "ETHICS — What is a key ethical safeguard when practicing Chain Analysis?",
  options: [
    { text: "Force others to practice the skill" }},
{ text: "Use the skill in ways that are safe for you and others; escalate support if risk increases", correct: true }},
{ text: "Use the skill as a substitute for medical care" }},
{ text: "Share others’ private data for accountability" }}
  ]
}
      ]
    },

    {
      id: "lesson_35",
      title: "35. Contingency Management",
      minutes: 18,
      reading: `
Contingency Management — This lesson provides a clear, practice-ready overview and a mini toolkit you can apply immediately. We'll define the skill or concept, explain when and why to use it, and outline concrete steps with examples. As you read, identify one real situation you can apply this to within the next 24–48 hours.

What you’ll learn: Shaping behavior using reinforcement and consequences ethically. How to know when this skill is indicated versus when a different skill is a better fit. Step-by-step guidance with plain-language examples. Common traps and how to avoid them. How to practice, measure progress, and get feedback.

Real‑world example. Imagine a recent situation that triggered strong emotion. Walk through the steps out loud or in writing. If you get stuck, simplify the step and repeat. Aim for small wins and clear learning, not perfection.

Practice plan. Schedule a 10‑minute daily practice block for the next week. Use implementation intentions ("If X happens, then I will do Y") and record outcomes on your diary card. Review in your next session or with a peer coach.

Quality checks. Ask: Did I do the steps in order? Did I stay nonjudgmental? Did my actions move me toward values and goals? What will I tweak next time?

Safety and ethics. Use skills in ways that are safe for you and others. Seek professional support for acute risk. Skills complement—not replace—medical care.
`,
      quiz: [
{
  id: "q1",
  prompt: "DEFINITION — Which statement best defines Contingency Management?",
  options: [
    { text: "A DBT concept or tool related to Contingency Management.", correct: true }},
{ text: "A breathing technique that always eliminates anxiety" }},
{ text: "A relaxation method that replaces problem solving" }},
{ text: "A rule that you must be calm before acting" }}
  ]
},
      {
  id: "q2",
  prompt: "NOT — Which of the following is NOT a component of Contingency Management?",
  options: [
    { text: "Practice mindfully" }},
{ text: "Align to values" }},
{ text: "Clarify goals" }},
{ text: "Avoidance", correct: true }}
  ]
},
      {
  id: "q3",
  prompt: "COMPARE — What distinguishes Contingency Management from Opposite Action?",
  options: [
    { text: "Opposite Action always comes first no matter the case" }},
{ text: "Contingency Management is only for groups, not individuals" }},
{ text: "Contingency Management and Opposite Action are identical" }},
{ text: "Contingency Management follows a specific sequence; Opposite Action targets a different goal", correct: true }}
  ]
},
      {
  id: "q4",
  prompt: "SCENARIO — In a situation like high-stress situations, what is the best first move?",
  options: [
    { text: "Use GIVE" }},
{ text: "Use Opposite Action" }},
{ text: "Use Contingency Management", correct: true }},
{ text: "Do nothing and hope it resolves" }}
  ]
},
      {
  id: "q5",
  prompt: "FILL‑IN — Contingency Management emphasizes ______ to help you act skillfully.",
  options: [
    { text: "overthinking" }},
{ text: "avoiding feelings" }},
{ text: "Contingency Management steps", correct: true }},
{ text: "winning at all costs" }}
  ]
},
      {
  id: "q6",
  prompt: "EXAMPLE — Which option best illustrates Contingency Management?",
  options: [
    { text: "Ranting on social media" }},
{ text: "Making a decision while furious" }},
{ text: "Ignoring physical needs" }},
{ text: "Applying the steps of Contingency Management during a real situation and aligning actions with goals", correct: true }}
  ]
},
      {
  id: "q7",
  prompt: "TROUBLESHOOT — If you notice this pitfall: “Giving up too soon”, what should you do?",
  options: [
    { text: "Blame the situation" }},
{ text: "Return to the step sequence and simplify the next step", correct: true }},
{ text: "Quit using the skill" }},
{ text: "Wait until you feel motivated" }}
  ]
},
      {
  id: "q8",
  prompt: "COMPARE — What distinguishes Contingency Management from Radical Acceptance?",
  options: [
    { text: "Contingency Management and Radical Acceptance are identical" }},
{ text: "Contingency Management is only for groups, not individuals" }},
{ text: "Radical Acceptance always comes first no matter the case" }},
{ text: "Contingency Management follows a specific sequence; Radical Acceptance targets a different goal", correct: true }}
  ]
},
      {
  id: "q9",
  prompt: "DIARY CARD — A diary shows high arousal spikes before difficult calls. Which skill would you try first?",
  options: [
    { text: "Skip the call" }},
{ text: "Contingency Management", correct: true }},
{ text: "Over-plan and delay again" }},
{ text: "Vent for 20 minutes" }}
  ]
},
      {
  id: "q10",
  prompt: "ETHICS — What is a key ethical safeguard when practicing Contingency Management?",
  options: [
    { text: "Force others to practice the skill" }},
{ text: "Use the skill as a substitute for medical care" }},
{ text: "Share others’ private data for accountability" }},
{ text: "Use the skill in ways that are safe for you and others; escalate support if risk increases", correct: true }}
  ]
}
      ]
    },

    {
      id: "lesson_36",
      title: "36. Exposure & Skills Generalization",
      minutes: 18,
      reading: `
Exposure & Skills Generalization — This lesson provides a clear, practice-ready overview and a mini toolkit you can apply immediately. We'll define the skill or concept, explain when and why to use it, and outline concrete steps with examples. As you read, identify one real situation you can apply this to within the next 24–48 hours.

What you’ll learn: Facing feared cues and exporting skills into daily life. How to know when this skill is indicated versus when a different skill is a better fit. Step-by-step guidance with plain-language examples. Common traps and how to avoid them. How to practice, measure progress, and get feedback.

Real‑world example. Imagine a recent situation that triggered strong emotion. Walk through the steps out loud or in writing. If you get stuck, simplify the step and repeat. Aim for small wins and clear learning, not perfection.

Practice plan. Schedule a 10‑minute daily practice block for the next week. Use implementation intentions ("If X happens, then I will do Y") and record outcomes on your diary card. Review in your next session or with a peer coach.

Quality checks. Ask: Did I do the steps in order? Did I stay nonjudgmental? Did my actions move me toward values and goals? What will I tweak next time?

Safety and ethics. Use skills in ways that are safe for you and others. Seek professional support for acute risk. Skills complement—not replace—medical care.
`,
      quiz: [
{
  id: "q1",
  prompt: "DEFINITION — Which statement best defines Exposure & Skills Generalization?",
  options: [
    { text: "A rule that you must be calm before acting" }},
{ text: "A way to avoid difficult conversations indefinitely" }},
{ text: "A DBT concept or tool related to Exposure & Skills Generalization.", correct: true }},
{ text: "A breathing technique that always eliminates anxiety" }}
  ]
},
      {
  id: "q2",
  prompt: "NOT — Which of the following is NOT a component of Exposure & Skills Generalization?",
  options: [
    { text: "Clarify goals" }},
{ text: "Blaming", correct: true }},
{ text: "Practice mindfully" }},
{ text: "Align to values" }}
  ]
},
      {
  id: "q3",
  prompt: "COMPARE — What distinguishes Exposure & Skills Generalization from Opposite Action?",
  options: [
    { text: "Exposure & Skills Generalization and Opposite Action are identical" }},
{ text: "Opposite Action always comes first no matter the case" }},
{ text: "Exposure & Skills Generalization is only for groups, not individuals" }},
{ text: "Exposure & Skills Generalization follows a specific sequence; Opposite Action targets a different goal", correct: true }}
  ]
},
      {
  id: "q4",
  prompt: "SCENARIO — In a situation like high-stress situations, what is the best first move?",
  options: [
    { text: "Do nothing and hope it resolves" }},
{ text: "Use Radical Acceptance" }},
{ text: "Use Opposite Action" }},
{ text: "Use Exposure & Skills Generalization", correct: true }}
  ]
},
      {
  id: "q5",
  prompt: "FILL‑IN — Exposure & Skills Generalization emphasizes ______ to help you act skillfully.",
  options: [
    { text: "avoiding feelings" }},
{ text: "overthinking" }},
{ text: "Exposure & Skills Generalization steps", correct: true }},
{ text: "winning at all costs" }}
  ]
},
      {
  id: "q6",
  prompt: "EXAMPLE — Which option best illustrates Exposure & Skills Generalization?",
  options: [
    { text: "Ranting on social media" }},
{ text: "Applying the steps of Exposure & Skills Generalization during a real situation and aligning actions with goals", correct: true }},
{ text: "Ignoring physical needs" }},
{ text: "Making a decision while furious" }}
  ]
},
      {
  id: "q7",
  prompt: "TROUBLESHOOT — If you notice this pitfall: “Using the skill in the wrong context”, what should you do?",
  options: [
    { text: "Wait until you feel motivated" }},
{ text: "Quit using the skill" }},
{ text: "Blame the situation" }},
{ text: "Return to the step sequence and simplify the next step", correct: true }}
  ]
},
      {
  id: "q8",
  prompt: "COMPARE — What distinguishes Exposure & Skills Generalization from Radical Acceptance?",
  options: [
    { text: "Exposure & Skills Generalization follows a specific sequence; Radical Acceptance targets a different goal", correct: true }},
{ text: "Radical Acceptance always comes first no matter the case" }},
{ text: "Exposure & Skills Generalization and Radical Acceptance are identical" }},
{ text: "Exposure & Skills Generalization is only for groups, not individuals" }}
  ]
},
      {
  id: "q9",
  prompt: "DIARY CARD — A diary shows high arousal spikes before difficult calls. Which skill would you try first?",
  options: [
    { text: "Vent for 20 minutes" }},
{ text: "Over-plan and delay again" }},
{ text: "Skip the call" }},
{ text: "Exposure & Skills Generalization", correct: true }}
  ]
},
      {
  id: "q10",
  prompt: "ETHICS — What is a key ethical safeguard when practicing Exposure & Skills Generalization?",
  options: [
    { text: "Use the skill as a substitute for medical care" }},
{ text: "Share others’ private data for accountability" }},
{ text: "Force others to practice the skill" }},
{ text: "Use the skill in ways that are safe for you and others; escalate support if risk increases", correct: true }}
  ]
}
      ]
    },

    {
      id: "lesson_37",
      title: "37. Diary Cards, Coaching, & Safety Plans",
      minutes: 18,
      reading: `
Diary Cards, Coaching, & Safety Plans — This lesson provides a clear, practice-ready overview and a mini toolkit you can apply immediately. We'll define the skill or concept, explain when and why to use it, and outline concrete steps with examples. As you read, identify one real situation you can apply this to within the next 24–48 hours.

What you’ll learn: Tracking, between-session support, and crisis planning. How to know when this skill is indicated versus when a different skill is a better fit. Step-by-step guidance with plain-language examples. Common traps and how to avoid them. How to practice, measure progress, and get feedback.

Real‑world example. Imagine a recent situation that triggered strong emotion. Walk through the steps out loud or in writing. If you get stuck, simplify the step and repeat. Aim for small wins and clear learning, not perfection.

Practice plan. Schedule a 10‑minute daily practice block for the next week. Use implementation intentions ("If X happens, then I will do Y") and record outcomes on your diary card. Review in your next session or with a peer coach.

Quality checks. Ask: Did I do the steps in order? Did I stay nonjudgmental? Did my actions move me toward values and goals? What will I tweak next time?

Safety and ethics. Use skills in ways that are safe for you and others. Seek professional support for acute risk. Skills complement—not replace—medical care.
`,
      quiz: [
{
  id: "q1",
  prompt: "DEFINITION — Which statement best defines Diary Cards, Coaching, & Safety Plans?",
  options: [
    { text: "A rule that you must be calm before acting" }},
{ text: "A way to avoid difficult conversations indefinitely" }},
{ text: "A breathing technique that always eliminates anxiety" }},
{ text: "A DBT concept or tool related to Diary Cards, Coaching, & Safety Plans.", correct: true }}
  ]
},
      {
  id: "q2",
  prompt: "NOT — Which of the following is NOT a component of Diary Cards, Coaching, & Safety Plans?",
  options: [
    { text: "Align to values" }},
{ text: "Practice mindfully" }},
{ text: "Blaming", correct: true }},
{ text: "Clarify goals" }}
  ]
},
      {
  id: "q3",
  prompt: "COMPARE — What distinguishes Diary Cards, Coaching, & Safety Plans from Opposite Action?",
  options: [
    { text: "Diary Cards, Coaching, & Safety Plans and Opposite Action are identical" }},
{ text: "Diary Cards, Coaching, & Safety Plans is only for groups, not individuals" }},
{ text: "Opposite Action always comes first no matter the case" }},
{ text: "Diary Cards, Coaching, & Safety Plans follows a specific sequence; Opposite Action targets a different goal", correct: true }}
  ]
},
      {
  id: "q4",
  prompt: "SCENARIO — In a situation like high-stress situations, what is the best first move?",
  options: [
    { text: "Use Radical Acceptance" }},
{ text: "Use GIVE" }},
{ text: "Use Opposite Action" }},
{ text: "Use Diary Cards, Coaching, & Safety Plans", correct: true }}
  ]
},
      {
  id: "q5",
  prompt: "FILL‑IN — Diary Cards, Coaching, & Safety Plans emphasizes ______ to help you act skillfully.",
  options: [
    { text: "winning at all costs" }},
{ text: "overthinking" }},
{ text: "Diary Cards, Coaching, & Safety Plans steps", correct: true }},
{ text: "avoiding feelings" }}
  ]
},
      {
  id: "q6",
  prompt: "EXAMPLE — Which option best illustrates Diary Cards, Coaching, & Safety Plans?",
  options: [
    { text: "Ignoring physical needs" }},
{ text: "Applying the steps of Diary Cards, Coaching, & Safety Plans during a real situation and aligning actions with goals", correct: true }},
{ text: "Making a decision while furious" }},
{ text: "Ranting on social media" }}
  ]
},
      {
  id: "q7",
  prompt: "TROUBLESHOOT — If you notice this pitfall: “Giving up too soon”, what should you do?",
  options: [
    { text: "Quit using the skill" }},
{ text: "Blame the situation" }},
{ text: "Wait until you feel motivated" }},
{ text: "Return to the step sequence and simplify the next step", correct: true }}
  ]
},
      {
  id: "q8",
  prompt: "COMPARE — What distinguishes Diary Cards, Coaching, & Safety Plans from Radical Acceptance?",
  options: [
    { text: "Diary Cards, Coaching, & Safety Plans is only for groups, not individuals" }},
{ text: "Diary Cards, Coaching, & Safety Plans follows a specific sequence; Radical Acceptance targets a different goal", correct: true }},
{ text: "Diary Cards, Coaching, & Safety Plans and Radical Acceptance are identical" }},
{ text: "Radical Acceptance always comes first no matter the case" }}
  ]
},
      {
  id: "q9",
  prompt: "DIARY CARD — A diary shows high arousal spikes before difficult calls. Which skill would you try first?",
  options: [
    { text: "Skip the call" }},
{ text: "Diary Cards, Coaching, & Safety Plans", correct: true }},
{ text: "Vent for 20 minutes" }},
{ text: "Over-plan and delay again" }}
  ]
},
      {
  id: "q10",
  prompt: "ETHICS — What is a key ethical safeguard when practicing Diary Cards, Coaching, & Safety Plans?",
  options: [
    { text: "Use the skill as a substitute for medical care" }},
{ text: "Share others’ private data for accountability" }},
{ text: "Force others to practice the skill" }},
{ text: "Use the skill in ways that are safe for you and others; escalate support if risk increases", correct: true }}
  ]
}
      ]
    }
  ]
};
