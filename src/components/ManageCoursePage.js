import React, { useState } from "react";

import { toast } from "react-toastify";

import * as CourseApi from "../api/courseApi";
import CourseForm from "./CourseForm";

function ManageCoursePage(props) {
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: "",
  });

  function handleChange({ target }) {
    setCourse({ ...course, [target.name]: target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    CourseApi.saveCourse(course).then(() => {
      props.history.push("/courses");
      toast.success("Course saved..");
    });
  }

  return (
    <>
      <h2>Manage Course</h2>
      <CourseForm
        course={course}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
}

export default ManageCoursePage;
