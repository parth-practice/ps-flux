import React from "react";
import { NavLink } from "react-router-dom";

import "../index.css";

function Header() {
  const activeStyle = {
    color: "orange",
    borderBottom: "1px solid red",
    textDecoration: "none",
  };

  return (
    <nav>
      <NavLink className="on-hover" to="/" exact activeStyle={activeStyle}>
        Home
      </NavLink>
      {" | "}
      <NavLink className="on-hover" to="/courses" activeStyle={activeStyle}>
        Courses
      </NavLink>
      {" | "}
      <NavLink className="on-hover" to="/about" activeStyle={activeStyle}>
        About
      </NavLink>
    </nav>
  );
}

export default Header;
