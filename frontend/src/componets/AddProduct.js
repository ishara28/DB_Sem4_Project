import React, { Component } from "react";

export class AddProduct extends Component {
  state = {
    id: null,
    content: null
  };

  handleChange = e => {
    this.setState({
      content: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({ content: " " });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Enter Todo</label>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.content}
          ></input>
        </form>
      </div>
    );
  }
}

export default AddProduct;
