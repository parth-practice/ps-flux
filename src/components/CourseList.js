import React from "react";

function CourseList(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>{props.tableHeaders.title}</th>
          <th>{props.tableHeaders.authorId}</th>
          <th>{props.tableHeaders.category}</th>
        </tr>
      </thead>
      <tbody>
        {props.courses.map((courses) => {
          return (
            <tr key={courses.id}>
              <td>{courses.title}</td>
              <td>{courses.authorId}</td>
              <td>{courses.category}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default CourseList;
