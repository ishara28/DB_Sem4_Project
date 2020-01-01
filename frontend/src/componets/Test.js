import React, { Component } from "react";
import { connect } from "react-redux";
import { buyCake, makeCake } from "../redux/index";

export class Test extends Component {
  render() {
    console.log(this.props);
    return <div></div>;
  }
}

export default Test;
