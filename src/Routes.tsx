import * as React from "react";
import { Redirect, Route } from "react-router";
import About from "./pages/About/About";
import Configuration from "./pages/Configuration/Configuration";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";

const Routes = () => {
  return (
    <>
      <Route exact path="/" children={<Redirect to="/home" />} />
      <Route exact path="/home" component={Home} />;
      <Route exact path="/about" component={About} />;
      <Route exact path="/contact" component={Contact} />;
      <Route exact path="/configuration" component={Configuration} />;
    </>
  );
};

export default Routes;
