import React, { Component } from "react";
import Showcase from "./componets/Showcase";
import NavbarHome from "./componets/NavbarHome";
import SignIn from "./componets/SignIn";
import Register from "./componets/Register";

export class App extends Component {
  state = {
    isSignInClicked: false,
    isRegisterClicked: false
  };

  clickSignInHandle = e => {
    e.preventDefault();
    this.setState(
      {
        [e.target.name]: true
      },
      function() {
        console.log(this.state.isSignInClicked);
      }
    );
  };

  render() {
    const SignInForm = this.state.isSignInClicked ? (
      <div>
        <SignIn />
      </div>
    ) : null;
    const RegisterForm = this.state.isRegisterClicked ? (
      <div>
        <Register />
      </div>
    ) : null;

    return (
      <div style={{ background: "light-blue" }}>
        {/* <Showcase /> */}
        <NavbarHome isSignInClicked={this.clickSignInHandle} />
        {SignInForm}
        {RegisterForm}
      </div>
    );
  }
}

export default App;
