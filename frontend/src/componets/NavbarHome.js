import { Link, NavLink, withRouter,Route } from "react-router-dom";

import React, { Component } from "react";

const NavbarHome =(props)=> {
  

 
    return (
      <nav className=" cyan darken-4">
        <div className="container">
          <a className="brand-logo">C online Market</a>
          <ul className="right">
            <li>
              <button
                
                className="waves-effect waves-light btn"
                style={{ margin: "20px" }}
              >
                SignIn
              </button>
              
            </li>
            <li>
            {/* <Link to="/">7788</Link> */}
            </li>

            <li>
              <button
               
                className="waves-effect waves-light btn"
                style={{ margin: "20px" }}
              >
                Register
              </button>
            </li>
          </ul>
        </div>
      </nav>
    );
  }


export default NavbarHome;

// setTimeout(()=>{
//     props.history.push('/about')
// },3000)
// handleSignIn=()=>{
//     console.log("55")
// }
