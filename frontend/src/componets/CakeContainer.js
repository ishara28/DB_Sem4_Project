import React, { Component } from "react";
import { connect } from "react-redux";
import { buyCake, makeCake } from "../redux/index";

export class CakeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: ""
    };
  }

  handleChange = e => {
    this.setState({
      number: e.target.value
    });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h2>No. of Cakes - {this.props.numOfCakes}</h2>
        <input
          type="text"
          placeholder="No.of Cakes"
          value={this.state.number}
          onChange={this.handleChange}
        />{" "}
        <br />
        <button onClick={() => this.props.buyCake(this.state.number)}>
          Buy {this.state.number} Cakes
        </button>
        <button onClick={() => this.props.makeCake(this.state.number)}>
          Make {this.state.number} Cakes
        </button>
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
    buyCake: number => dispatch(buyCake(number)),
    makeCake: number => dispatch(makeCake(number))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
