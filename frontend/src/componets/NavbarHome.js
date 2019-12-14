
import { Link, NavLink, withRouter } from "react-router-dom";

import React, { Component } from 'react'







 class NavbarHome extends Component {

  
handleClick=(e)=>{
  this.props.isSignInClicked(e)
}

  render() {
    

    return (
      <nav className=" cyan darken-4">
        <div className="container">
          <a className="brand-logo">C online Market</a>
          <ul className="right">
            <li>
              <button  onClick={this.handleClick} name="isSignInClicked" className="waves-effect waves-light btn" style={{margin:"20px"}}>SignIn</button>
            </li>
            
            <li>
              <button onClick={this.handleClick} name="isRegisterClicked" className="waves-effect waves-light btn" style={{margin:"20px"}}>Register</button>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavbarHome


  // setTimeout(()=>{
  //     props.history.push('/about')
  // },3000)
// handleSignIn=()=>{
//     console.log("55")
// }
  

