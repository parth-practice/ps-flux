import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCourses } from "../api/courseApi";
import CourseList from "./CourseList";

function CoursesPage() {
  const [courses, setCourses] = useState([]);
  const tableHeaders = {
    title: "Title",
    authorId: "Author ID",
    category: "Category",
  };

  useEffect(() => {
    getCourses().then((_courses) => setCourses(_courses));
  }, []);

  return (
    <>
      <h2> Courses </h2>
      <Link to="/course" className="btn btn-primary">
        Add course
      </Link>
      <CourseList courses={courses} tableHeaders={tableHeaders} />
    </>
  );
}

export default CoursesPage;
