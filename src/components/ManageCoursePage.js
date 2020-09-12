import React, { useState } from "react";

import CourseForm from "./CourseForm";

function ManageCoursePage(props) {
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: "",
  });

  function handleChange(event) {
    const updatedcopy = { ...course, [event.target.name]: event.target.value };
    setCourse(updatedcopy);
  }

  return (
    <>
      <h2>Manage Course</h2>
      <CourseForm course={course} onChange={handleChange} />
    </>
  );
}

export default ManageCoursePage;
