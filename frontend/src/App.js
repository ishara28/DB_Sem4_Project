import React, { Component } from "react";
import Showcase from "./componets/Showcase";
import NavbarHome from "./componets/NavbarHome";
import SignIn from "./componets/SignIn";
import Register from "./componets/Register";
import { Link, BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./componets/Navbar";
import Home from "./componets/Home";
import Cart from "./componets/Cart";
import Admin from "./componets/Admin";
import Post from "./componets/Post";
import Report1 from "./componets/reports/Report1";
import Report2 from "./componets/reports/Report2";
import Report3 from "./componets/reports/Report3";
import Report4 from "./componets/reports/Report4";
import Report5 from "./componets/reports/Report5";

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
            <Route exact path="/admin" exact component={Admin}></Route>
            <Route exact path="/admin/report1" component={Report1}></Route>
            <Route exact path="/admin/report2" component={Report2}></Route>
            <Route exact path="/admin/report3" component={Report3}></Route>
            <Route exact path="/admin/report4" component={Report4}></Route>
            <Route exact path="/admin/report5" component={Report5}></Route>
          </switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
