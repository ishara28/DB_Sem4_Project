import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";

const Navbar = props => {
  // setTimeout(()=>{
  //     props.history.push('/about')
  // },3000)

  return (
    <nav className=" cyan darken-4">
      <div className="container">
        <a className="brand-logo">C online Market</a>
        <ul className="right">
          <li>
            <Link to="/showcase">Showcase</Link>
          </li>
          <li>
            <Link to="/showcase/about">About</Link>
          </li>
          <li>
            <Link to="/showcase/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
