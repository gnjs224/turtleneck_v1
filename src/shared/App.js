import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Home, About, Login, Join, Oleg, Result } from "../pages";
import Navigation from "../pages/Navigation";
import Bottom from "../pages/Bottom";
import "semantic-ui-css/semantic.min.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <Route path="/" exact={true} component={Home} />
        <Route path="/Oleg" component={Oleg} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/Join" component={Join} />
        <Route path="/Result" component={Result} />
        <Bottom />
      </BrowserRouter>
    );
  }
}

export default App;
