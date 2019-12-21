import React, { Component } from "react";

export class SignIn extends Component {
  state = {
    user_name: null,
    password: null
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.user_name, this.state.password);
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
            <form onSubmit={this.handleSubmit} className="row s12">
              <div className="col s12">
                <div className="input-field">
                  <input
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.user_name}
                    name="user_name"
                    placeholder="username*"
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
                    placeholder="password*"
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
