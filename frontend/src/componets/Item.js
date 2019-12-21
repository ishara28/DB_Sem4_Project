import React, { Component } from "react";

export class Item extends Component {
  state = {
    product_id: null,
    unit_price: 100,
    qty: 1
  };

  changeQuantity = e => {
    if (e.target.name == "+") {
      this.setState({
        qty: this.state.qty + 1
      });
    } else if (this.state.qty > 1) {
      this.setState({
        qty: this.state.qty - 1
      });
    }
  };

  render() {
    return (
      <div class="row card">
        <div class="col s12 m4 6">
          <div>
            <h1>Product name</h1>

            <button className="btn sm" name="-" onClick={this.changeQuantity}>
              -
            </button>
            <button className="btn sm" name="+" onClick={this.changeQuantity}>
              +
            </button>
          </div>
        </div>
        <div class="col s12 m4 3">
          <h1>X {this.state.qty}</h1>
        </div>
        <div class="col s12 m4 9">
          <h1>{this.state.unit_price * this.state.qty}</h1>
        </div>
      </div>
    );
  }
}

export default Item;
