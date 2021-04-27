import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Home, About, Login, Join, Oleg, Result, SideMenu } from "../pages";
import Navigation from "../pages/Navigation";
import Bottom from "../pages/Bottom";
import "semantic-ui-css/semantic.min.css";
import "../pages/style.css";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <div class="body">
          <div></div>
          <div class="show">
            <Route path="/" exact={true} component={Home} />
            <Route path="/Oleg" component={Oleg} />
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />
            <Route path="/Join" component={Join} />
            <Route path="/Result" component={Result} />
            <Route path="/SideMenu" component={SideMenu} />
          </div>
          <div></div>
        </div>

        <Bottom />
      </BrowserRouter>
    );
  }
}

export default App;
