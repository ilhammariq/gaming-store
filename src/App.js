import React, { Component } from "react";
import NavbarComponent from "./components/NavbarComponent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./views/Home";
export default class App extends Component {
  render() {
    return (
      <Router>
        <NavbarComponent />
        <Switch>
          <Route path="/a">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}
