import React, { Component } from "react";
import axios from "axios";
const uuidv4 = require("uuid/v4");
// import Redirect from "react-router"

export class Register extends Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    address: "",
    contact_number: "",
    password: "",
    password2: "",
    redirect: true,
    response: ""
  };

  handleSubmit = e => {
    e.preventDefault();

    const newUser = {
      user_id: uuidv4(),
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      address: this.state.address,
      contact_number: this.state.contact_number,
      password: this.state.password,
      password2: this.state.password2
    };
    console.log(newUser);

    axios.post("http://localhost:5000/user/register", newUser).then(res => {
      if (res.data == "User Registered!") {
        window.location = "/signup";
      }else{
        this.setState({
          response : res.data
        })
      }
    });

    // window.location = "/";
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    // if (this.state.redirect) {
    //   return <Redirect to="/showcase" />;
    // }

    return (
      <div className="container" style={{ margin: "100px auto" }}>
        <div className="row card hoverable">
          <div className="card-content">
            <h4 class="center blue-text">Register Form</h4>
            <form onSubmit={this.handleSubmit} className="row s12">
              <div className="col s12">
                <div className="input-field">
                  <input
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.first_name}
                    name="first_name"
                    placeholder="first name*"
                    required
                  ></input>
                </div>
              </div>

              <div className="col s12">
                <div className="">
                  <input
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.last_name}
                    name="last_name"
                    placeholder="last name*"
                    required
                  ></input>
                </div>
              </div>
              <div className="col s12">
                <div className="">
                  <input
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.email}
                    name="email"
                    placeholder="email*"
                    required
                  ></input>
                </div>
              </div>
              <div className="col s12">
                <div className="">
                  <input
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.address}
                    name="address"
                    placeholder="address*"
                    required
                  ></input>
                </div>
              </div>

              <div className="col s12">
                <div className="">
                  <input
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.contact_number}
                    name="contact_number"
                    placeholder="contact number*"
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
                    placeholder="Password"
                    required
                  ></input>
                </div>
              </div>
              <div className="col s12">
                <div className="">
                  <input
                    type="password"
                    onChange={this.handleChange}
                    value={this.state.password2}
                    name="password2"
                    placeholder="Confirm Password"
                    required
                  ></input>
                </div>
              </div>

              <div class="col s12 center">
                <button
                  type="submit"
                  class="btn btn-large waves-effect cyan darken-1"
                >
                  Register<i class="material-icons right"></i>
                </button>
              </div>
              <h5>{this.state.response}</h5>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
