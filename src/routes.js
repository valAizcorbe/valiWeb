import React from "react";
import { Switch, Route } from "react-router-dom";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/about" component={About} />
    <Route exact path="/projects" component={Projects} />
  </Switch>
);
