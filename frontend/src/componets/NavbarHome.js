import { Link, NavLink, withRouter, Route } from "react-router-dom";

import React, { Component } from "react";

const NavbarHome = props => {
  return (
    <nav className=" cyan darken-4">
      <div className="container">
        <a className="brand-logo">C online Market</a>
        <ul className="right">
          <li>
            <Link to="/signup" className="waves-effect waves-light btn">
              Sign up
            </Link>
          </li>
          <li>{/* <Link to="/">7788</Link> */}</li>

          <li>
            <Link to="/register" className="waves-effect waves-light btn">
              Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarHome;

// setTimeout(()=>{
//     props.history.push('/about')
// },3000)
// handleSignIn=()=>{
//     console.log("55")
// }
