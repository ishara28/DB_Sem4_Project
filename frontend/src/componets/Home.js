import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

export class Home extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    Axios.get("http://localhost:5000/products").then(res => {
      console.log(res.data)
      this.setState({
        posts: res.data
        
      });
    });
  }
  

  render() {
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="row">
            <div className="post card" key={post.product_id}>
              <div className="column ">
                <div className="card-content col-4">
                  <Link to={"/" + post.product_id}>
                    <span className="card title">{post.title}</span>
                    <span className="card title">{post.category_id}</span>

                  </Link>
                  <p>{post.body}</p>
                </div>
              </div>
            </div>
          </div>

          // <div className="row">
          //   <div className="column">
          //     <div className="col s12 m6">
          //       <p className="z-depth-1">
          //         z-depth-1 hjhhh hjhhhkh
          //         uiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiuuuuuuuuuuuuu
          //       </p>
          //     </div>
          //   </div>
          // </div>

          // <div className="row"></div>
            // <div className="col-sm-4 py-2">
            //   <div className="card card-body h-400">
            //     Card. I'm just a simple card-block.
            //   </div>
            // </div>
         
        );
      })
    ) : (
      <h1>No posts yet</h1>
    );
    return (
      <div>
        <div className="container">
          <h4 className="center">Home</h4>
          <div className="row">{postList}</div>
        </div>
      </div>
    );
  }
}

export default Home;
