import React from "react";
import { Route } from "react-router-dom";

import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Route path="/" exact component={HomePage}></Route>
      <Route path="/About" component={AboutPage}></Route>
      <Route path="/Courses" component={CoursesPage}></Route>
    </div>
  );
}

export default App;
