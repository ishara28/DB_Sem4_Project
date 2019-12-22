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
    redirect: true
  };

  // handleSubmit = e => {
  //   e.preventDefault();
  // Axios.post("http://localhost:5000/user/adduser"+this.state.first_name)
  // var querystring = require('querystring');
  // Axios.post("http://localhost:5000/user", querystring.stringify({ foo: 'bar' }))
  //   Axios.post("http://localhost:5000/user",{
  //     userName: 'Fred',
  //     userEmail: 'Flintstone@gmail.com'
  // })
  // .then(function (response) {
  //     console.log(response);
  // })
  // .catch(function (error) {
  //     console.log(error);
  // })
  //   .then(res => {

  //       console.log("respond fEnd");
  //     });
  //   const {
  //     first_name,
  //     last_name,
  //     email,
  //     user_id,
  //     contact_number,
  //     address
  //   } = this.state;
  //   Axios.post("http://localhost:5000/user", {
  //     first_name: first_name,
  //     last_name: last_name,
  //     email: email,
  //     user_id: user_id,
  //     contact_number: contact_number,
  //     address: address,
  //     password: ""
  //   })
  //     .then(function(response) {
  //       if (response.data == "Enter unique user name") {
  //         console.log("78564212112");
  //         this.props.history.push("13");
  //       } else {
  //         console.log(response);
  //       }
  //     })
  //     .catch(function(error) {
  //       console.log(error);
  //     });
  // };

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

    axios
      .post("http://localhost:5000/user/register", newUser)
      .then(res => console.log(res.data));

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
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
