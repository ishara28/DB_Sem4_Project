import React, { Component } from "react";
import Axios from "axios";

export class Register extends Component {
  state = {
    first_name: null,
    last_name: null,
    email: null,
    user_id:null,
    contact_number: null,
    address: null
  };

  handleSubmit = e => {
    e.preventDefault();
    Axios.post("http://localhost:5000/user/adduser").then(res => {
        this.setState({
          post: res.data
        });
        console.log(this.state.first_name);
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
                  ></input>
                </div>
              </div>

              <div className="col s12">
                <div className="">
                  <input
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.user_id}
                    name="user_id"
                    placeholder=" user id*"
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
