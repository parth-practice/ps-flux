import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

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
              <td>
                <Link to={"/course/" + courses.slug}>{courses.title}</Link>
              </td>
              <td>{courses.authorId}</td>
              <td>{courses.category}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

CourseList.prototype = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      authorId: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
  tableHeaders: PropTypes.object.isRequired,
};

export default CourseList;
