import { Course } from "@/types";

// Two dummy DBT classes to wire up the framework.
// Replace reading & quiz with real content later.
export const COURSE: Course = {
  id: "dbt-101",
  title: "DBT Foundations",
  description:
    "Learn DBT core concepts step-by-step. Each lesson includes a short reading followed by a 5-question quiz. Score 3+ to pass.",
  lessons: [
    {
      id: "l1",
      title: "What is DBT?",
      minutes: 12,
      reading:
        "Dialectical Behavior Therapy (DBT) blends behavioral science with mindfulness. This lesson introduces dialectics, acceptance and change, and the DBT skills modules.",
      quiz: [
        {
          id: "l1q1",
          prompt: "DBT primarily combines behavioral techniques with what?",
          options: [
            { text: "Psychoanalysis" },
            { text: "Mindfulness", correct: true },
            { text: "Neuro-linguistic programming" },
            { text: "Hypnosis" }
          ]
        },
        {
          id: "l1q2",
          prompt: "The term 'dialectical' in DBT most closely refers to:",
          options: [
            { text: "Arguing to win" },
            { text: "Integrating opposites", correct: true },
            { text: "Memorizing facts" },
            { text: "Avoiding conflict" }
          ]
        },
        {
          id: "l1q3",
          prompt: "Which is NOT a standard DBT skills module?",
          options: [
            { text: "Mindfulness" },
            { text: "Interpersonal Effectiveness" },
            { text: "Distress Tolerance" },
            { text: "Astrology", correct: true }
          ]
        },
        {
          id: "l1q4",
          prompt: "A pass requires how many correct answers?",
          options: [
            { text: "5" },
            { text: "4" },
            { text: "3", correct: true },
            { text: "2" }
          ]
        },
        {
          id: "l1q5",
          prompt: "If you fail a quiz, you must:",
          options: [
            { text: "Skip ahead" },
            { text: "Restart the course" },
            { text: "Re-read the lesson and retry", correct: true },
            { text: "Email support" }
          ]
        }
      ]
    },
    {
      id: "l2",
      title: "Mindfulness Basics",
      minutes: 15,
      reading:
        "Mindfulness is awareness with intention and without judgment. DBT teaches observing, describing, and participating with 'wise mind'.",
      quiz: [
        {
          id: "l2q1",
          prompt: "In DBT, 'wise mind' means:",
          options: [
            { text: "Pure emotion" },
            { text: "Pure logic" },
            { text: "Integration of emotion and reason", correct: true },
            { text: "No thoughts" }
          ]
        },
        {
          id: "l2q2",
          prompt: "A nonjudgmental stance involves:",
          options: [
            { text: "Labeling experiences as good/bad" },
            { text: "Describing facts without evaluation", correct: true },
            { text: "Avoiding awareness" },
            { text: "Suppressing feelings" }
          ]
        },
        {
          id: "l2q3",
          prompt: "Which is a 'what' skill in mindfulness?",
          options: [
            { text: "Effectively" },
            { text: "Nonjudgmentally" },
            { text: "One-mindfully" },
            { text: "Observe", correct: true }
          ]
        },
        {
          id: "l2q4",
          prompt: "How many questions are in each quiz?",
          options: [
            { text: "3" },
            { text: "4" },
            { text: "5", correct: true },
            { text: "10" }
          ]
        },
        {
          id: "l2q5",
          prompt: "Progress to the next lesson requires:",
          options: [
            { text: "A passing score", correct: true },
            { text: "Teacher approval" },
            { text: "Paying a fee" },
            { text: "Skipping the quiz" }
          ]
        }
      ]
    }
  ]
};