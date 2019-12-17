import React, { Component } from "react";
import Showcase from "./componets/Showcase";
import NavbarHome from "./componets/NavbarHome";
import SignIn from "./componets/SignIn";
import Register from "./componets/Register";
import { Link, BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./componets/Navbar";

export class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <switch>
            <Route path="/" exact component={NavbarHome}></Route>

            <Route
              path="/signup"
              render={props => (
                <div>
                  <Navbar />
                  <SignIn />
                </div>
              )}
            />

            <Route
              path="/register"
              render={props => (
                <div>
                  <Navbar />
                  <Register />
                </div>
              )}
            />
          </switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
