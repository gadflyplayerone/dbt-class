export type Option = { text: string; correct?: boolean };
export type Question = { id: string; prompt: string; options: Option[] };
export type Lesson = { id: string; title: string; minutes: number; reading: string; quiz: Question[] };
export type Course = { id: string; title: string; description: string; lessons: Lesson[] };
export type UserProfile = { name: string };
export type QuizAttempt = { correctCount: number; timestamp: number };
export type LessonProgress = {
  lessonId: string;
  bestScore: number;        // max correct so far
  attempts: QuizAttempt[];  // history
  passed: boolean;
};
export type ProgressState = {
  user?: UserProfile;
  courseId: string;
  perLesson: Record<string, LessonProgress>;
};