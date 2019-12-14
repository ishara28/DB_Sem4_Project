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
            <Link to="/">Showcase</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
