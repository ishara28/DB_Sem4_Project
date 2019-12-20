import React, { Component } from "react";
import Item from "./Item";

export class Cart extends Component {
  state = {
    products: [],
    product: null,
    qty: 1
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
    console.log("fk")
  }

  render() {
    return (
      <div className="card-content col-4">
        <Item/>
      </div>
    );
  }
}

export default Cart;
