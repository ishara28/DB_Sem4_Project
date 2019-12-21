import React, { Component } from "react";
import Item from "./Item";
import ShowCartItems from "./ShowCartItems";

export class Cart extends Component {
  state = {
    products: [
      { product_id: "12", name: "Apple phone", qty: 1 },
      { product_id: "13", name: "SAMSUNG phone", qty: 2 },
      { product_id: "14", name: "NOKIA phone", qty: 3 },
      { product_id: "15", name: "MI phone", qty: 4 }
    ]
  };

  componentDidMount() {
    //     var id = this.props.match.params.product_id;
    //     console.log("pased", id);

    // Axios.get("http://localhost:5000/products/showcase/" + id).then(res => {
    //   this.setState({
    //     post: res.data
    //   });
    //   console.log(res);
    // });
    console.log("fk");
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
    const product_change_qty = this.state.products.map(item => {
      if (item.product_id != product_id) {
        return item;
      } else if (e.target.name == "+") {
        item.qty = item.qty + 1;
        return item;
      } else if (item.qty > 1) {
        item.qty = item.qty - 1;
        return item;
      }
    });

    this.setState({
      // products: [...product_change_qty, this.state.products.values]
    });
  };

  render() {
    return (
      <div className="card-content col-4">
        <ShowCartItems
          products={this.state.products}
          remove={this.removeProduct}
          changeQty={this.changeQty}
        />
      </div>
    );
  }
}

export default Cart;
