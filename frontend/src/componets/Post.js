import React, { Component } from "react";
import Axios from "axios";

class Post extends Component {
  state = {
    post: null
  };
  componentDidMount() {
    let id = this.props.match.params.post_id;

    Axios.get("http://localhost:5000/products/" + id).then(res => {
      this.setState({
        post: res.data
      });
      console.log("st", this.state.post);
    });
  }
  render() {
    const post = this.state.post ? (
      <div className="post">
        {/* <h4 className="center">{this.state.post[0].title}</h4> */}

        <div className="center">
          <p>{this.state.post[0].product_id}</p>
          <button className="waves-effect waves-light btn">Add to Cart</button>
        </div>
      </div>
    ) : (
      <div className="center">Loading...</div>
    );

    return <div className="container">{post}</div>;
  }
}

export default Post;
