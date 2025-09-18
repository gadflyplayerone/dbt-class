import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setActiveCourseId } from "@/lib/course";

export default function Sample() {
  const nav = useNavigate();
  useEffect(() => {
    setActiveCourseId("test");
    nav("/");
  }, [nav]);
  return null;
}
