import React, { Component } from "react";
import Axios from "axios";
import {Link} from "react-router-dom";

class Post extends Component {
  state = {
    post: null
  };
  componentDidMount() {
    let id = this.props.match.params.post_id;
    console.log("pased",id)
    
    Axios.get("http://localhost:5000/products/showcase/" + id).then(res => {
      this.setState({
        post: res.data
      });
      console.log(res);
    });
  }
  render() {
    const post = this.state.post ? (
      <div className="post">
        {/* <h4 className="center">{this.state.post[0].title}</h4> */}

        <div className="center">
          <p>{this.state.post[0].title}</p>
          <p>weight {this.state.post[0].weight}g</p>
          <Link to="/cart" className="waves-effect waves-light btn">Add to Cart</Link>
        </div>
      </div>
    ) : (
      <div className="center">Loading...</div>
    );

    return <div className="container">{post}</div>;
  }
}

export default Post;
