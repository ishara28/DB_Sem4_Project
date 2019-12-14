import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import SelectCategory from "./SelectCategory";

export class Home extends Component {
  state = {
    posts: [],
    category: "Electronic"
  };

  componentDidMount() {
    Axios.get("http://localhost:5000/products").then(res => {
      this.setState({
        posts: res.data
      });
    });
  }

  selectCategory = category => {
    this.setState({
      category: category
    },()=>{
      
      Axios.get("http://localhost:5000/products/" + this.state.category, {}).then(res => {
        
      this.setState({
        posts: res.data
      });
      
    });
    });

    
  };

  render() {
    const { posts, category } = this.state;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="row">
            <div className="post card" key={post.product_id}>
              <div className="column ">
                <div className="card-content col-4">
                  <Link to={"/" + post.product_id}>
                    <span className="card title">{post.title}</span>
                    {/* <span className="card title">{post.category_id}</span> */}
                  </Link>
                  <p>{post.body}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })
    ) : (
      <h1>No posts yet under {category}</h1>
    );
    return (
      <div>
        <SelectCategory selectCategory={this.selectCategory} />
        <div className="container">
          <h4 className="center"></h4>
          <div className="row">{postList}</div>
        </div>
      </div>
    );
  }
}

export default Home;
