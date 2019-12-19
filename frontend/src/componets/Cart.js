import React, { Component } from 'react'

export class Cart extends Component {
    state={
        products:[],
        product:null,
        qty:1
    }

    componentDidMount() {
        let id = this.props.match.params.product_id;
        console.log("pased",id)
        
        // Axios.get("http://localhost:5000/products/showcase/" + id).then(res => {
        //   this.setState({
        //     post: res.data
        //   });
        //   console.log(res);
        // });
      }

    render() {
        return (
            <div>
    <h1>{this.state.product}</h1>
            </div>
        )
    }
}

export default Cart
