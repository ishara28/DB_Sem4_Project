import React, { Component } from "react";
import Item from "./Item";
import ShowCartItems from "./ShowCartItems";
import { connect } from "react-redux";
import { stat } from "fs";

export class Cart extends Component {
  // state = {
  //   user_id:null,
  //   total: 0,
  //   products: [
  //     { product_id: "12", price: 1200, name: "Apple phone", qty: 1 },
  //     { product_id: "13", price: 1600, name: "SAMSUNG phone", qty: 2 },
  //     { product_id: "14", price: 1450, name: "NOKIA phone", qty: 3 },
  //     { product_id: "15", price: 780, name: "MI phone", qty: 4 }
  //   ]
  // };

  componentDidMount() {
    //     var id = this.props.match.params.product_id;
    //     console.log("pased", id);

    // Axios.get("http://localhost:5000/products/showcase/" + id).then(res => {
    //   this.setState({
    //     post: res.data
    //   });
    //   console.log(res);
    // });
    console.log(this.props.products);
  }

  addProduct = product => {};

  removeProduct = product_id => {
    const products = this.state.products.filter(product => {
      return product.product_id != product_id;
    });
    console.log(product_id);
    this.setState({
      products
    });
  };

  changeQty = (product_id, e) => {
    console.log("just blw", this.state.total);
    const product_change_qty = this.state.products.map(item => {
      if (item.product_id != product_id) {
        // this.state.total=this.state.total+10

        return item;
      } else if (e.target.name == "+") {
        item.qty = item.qty + 1;
        this.state.total = this.state.total + item.price * item.qty;

        // console.log(tot)
        return item;
      } else if (item.qty > 1) {
        item.qty = item.qty - 1;
        this.state.total = this.state.total - item.price * item.qty;

        return item;
      }
    });
    console.log("tot", this.state.total);
    this.setState({
      //
    });
  };

  calculateTotal = (product_id, e) => {};

  render() {
    return (
      <div className="card-content col-4">
        <ShowCartItems
          products={this.state.products}
          remove={this.removeProduct}
          changeQty={this.changeQty}
          calculateTotal={this.calculateTotal}
        />
        <div className="right">
          <button className="waves-effect waves-light btn">order now!</button>
        </div>
        <h1>Total:{this.state.total}Rs</h1>
      </div>
    );
  }
}

const mapToProps = (state) => {
  return {
    products: state.products
  };
};
export default connect(mapToProps)(Cart);
