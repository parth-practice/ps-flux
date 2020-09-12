import React from "react";

import TextInput from "./common/TextInput";
import InputSelector from "./common/InputSelector";

function CourseForm(props) {
  return (
    <form>
      <TextInput
        id="title"
        name="title"
        label="Title"
        value={props.course.title}
        onChange={props.onChange}
      />

      <InputSelector
        id="author"
        name="authorId"
        label="Author"
        onChange={props.onChange}
        value={props.course.authorId || ""}
        className="form-control"
        options={[
          { id: "", name: "" },
          { id: "1", name: "Cory House" },
          { id: "2", name: "Scott Allen" },
        ]}
      />

      <TextInput
        id="category"
        name="category"
        label="Category"
        onChange={props.onChange}
        value={props.course.category}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

export default CourseForm;
