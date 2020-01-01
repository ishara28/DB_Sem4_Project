import React, { Component } from "react";
import { connect } from "react-redux";
import { buyCake, makeCake } from "../redux/index";

export class Test extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h2>Test Component</h2>
        <h1>{this.props.name}</h1>
        <h2>No. of Cakes - {this.props.numOfCakes}</h2>

        <br />
        <button onClick={this.props.buyCake}>Buy Cakes</button>
        <button onClick={this.props.makeCake}>Make Cakes</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    numOfCakes: state.numOfCakes,
    name: state.name
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake()),
    makeCake: () => dispatch(makeCake())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);
