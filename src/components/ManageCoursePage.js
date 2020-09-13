import React, { useState, useEffect } from "react";

import { toast } from "react-toastify";

import * as CourseApi from "../api/courseApi";
import CourseForm from "./CourseForm";

function ManageCoursePage(props) {
  const [errors, setErrors] = useState({});
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: "",
  });

  useEffect(() => {
    const slug = props.match.params.slug;

    if (slug) {
      CourseApi.getCourseBySlug(slug).then((_course) => setCourse(_course));
    }
  }, [props.match.params.slug]);

  function handleChange({ target }) {
    setCourse({ ...course, [target.name]: target.value });
  }

  function isFormValid() {
    const _errors = {};

    if (!course.title) _errors.title = "Please enter a Title!";
    if (!course.authorId) _errors.authorId = "Please select an Author!";
    if (!course.category) _errors.category = "Please enter a Category!";

    setErrors(_errors);
    // Form is valid if error object has no property
    return Object.keys(_errors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!isFormValid()) return;
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
        errors={errors}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
}

export default ManageCoursePage;
