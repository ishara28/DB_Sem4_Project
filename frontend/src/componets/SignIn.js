import React, { Component } from "react";
import axios from "axios";

export class SignIn extends Component {
  state = {
    email: "",
    password: "",
    response: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    const loginUser = {
      email: this.state.email,
      password: this.state.password
    };
    console.log(loginUser);

    axios.post("http://localhost:5000/user/log", loginUser).then(res => {
      if (res.data.msg == "Succesfully Logged In!") {
        window.location = "/showcase";
      } else {
        this.setState({
          response: res.data.msg
        });
      }
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div className="container" style={{ margin: "100px auto" }}>
        <div className="row card hoverable">
          <div className="card-content">
            <h4 class="center blue-text">SignIn Form</h4>
            <h5>{this.state.response}</h5>
            <form onSubmit={this.handleSubmit} className="row s12">
              <div className="col s12">
                <div className="input-field">
                  <input
                    type="email"
                    onChange={this.handleChange}
                    value={this.state.email}
                    name="email"
                    placeholder="Email*"
                    required
                  ></input>
                </div>
              </div>

              <div className="col s12">
                <div className="">
                  <input
                    type="password"
                    onChange={this.handleChange}
                    value={this.state.password}
                    name="password"
                    placeholder="Password*"
                    required
                  ></input>
                </div>
              </div>

              <div class="col s12 center">
                <button
                  type="submit"
                  class="btn btn-large waves-effect cyan darken-1"
                >
                  SignIn<i class="material-icons right"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
