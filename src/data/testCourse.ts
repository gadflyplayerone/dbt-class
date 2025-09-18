import type { Course } from "@/types";
import { COURSE as DBT } from "@/data/curriculum";

export const COURSE: Course = {
  id: "dbt_test_v1",
  title: "Sample Course",
  description: "A single-lesson sample built from the first lesson of the DBT course for testing the full workflow.",
  lessons: [ DBT.lessons[0] ]
};
