import React from "react";
import Template from "components/Template";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Template location="home" />
      </Route>
      <Route path="/about">
        <Template location="about" />
      </Route>
      <Route path="/contact">
        <Template location="contact" />
      </Route>
      <Route path="/gallery">
        <Template location="gallery" />
      </Route>
      <Route path="/mapGenerator">
        <Template location="mapGenerator" />
      </Route>
    </Switch>
  </Router>
);
