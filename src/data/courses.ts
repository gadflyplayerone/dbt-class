import type { Course } from "@/types";
import { COURSE as DBT } from "@/data/curriculum";
import { COURSE as TEST } from "@/data/testCourse";

export const COURSES: Record<string, Course> = {
  dbt: DBT,
  test: TEST,
};

export type CourseId = keyof typeof COURSES;
