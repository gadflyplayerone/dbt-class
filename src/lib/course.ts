import { useEffect, useState } from "react";
import { COURSES, CourseId } from "@/data/courses";
import type { Course } from "@/types";

const KEY = "active_course_id_v1";

export function getActiveCourseId(): CourseId {
  const v = (typeof localStorage !== "undefined" && localStorage.getItem(KEY)) || "dbt";
  return (v as CourseId) in COURSES ? (v as CourseId) : "dbt";
}

export function setActiveCourseId(id: CourseId) {
  if (!(id in COURSES)) return;
  localStorage.setItem(KEY, id);
  window.dispatchEvent(new StorageEvent("storage", { key: KEY, newValue: id } as any));
}

export function getActiveCourse(): { id: CourseId; course: Course } {
  const id = getActiveCourseId();
  return { id, course: COURSES[id] };
}

export function useActiveCourse() {
  const [id, setId] = useState<CourseId>(getActiveCourseId());
  useEffect(() => {
    const h = (e: StorageEvent) => {
      if (e.key === KEY) setId(getActiveCourseId());
    };
    window.addEventListener("storage", h);
    return () => window.removeEventListener("storage", h);
  }, []);
  const course = COURSES[id];
  const setActive = (next: CourseId) => {
    setActiveCourseId(next);
    setId(next);
  };
  return { id, course, setActive, courses: COURSES };
}
