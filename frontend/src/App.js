import React, { Component } from "react";
import Showcase from "./componets/Showcase";
import NavbarHome from "./componets/NavbarHome";
import SignIn from "./componets/SignIn";
import Register from "./componets/Register";
import { Link, BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./componets/Navbar";
import Home from "./componets/Home";

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
                  <NavbarHome />
                  <SignIn />
                </div>
              )}
            />

            <Route
              path="/register"
              render={props => (
                <div>
                  <NavbarHome />
                  <Register />
                </div>
              )}
            />

            <Route
              path="/showcase"
              render={props => (
                <div>
                  
                  <Showcase />
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
