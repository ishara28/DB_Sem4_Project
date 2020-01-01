import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import SelectCategory from "./SelectCategory";

export class Home extends Component {
  state = {
    posts: [],
    category: ""
  };

  componentDidMount() {
    Axios.get("http://localhost:5000/products").then(res => {
      this.setState({
        posts: res.data
      });
    });
  }

  getProductsWithCategory() {
    Axios.get(
      "http://localhost:5000/products/category/" + this.state.category
    ).then(res => {
      this.setState({
        posts: res.data
      });
    });
  }

  callbackFunction = childData => {
    this.setState(
      {
        category: childData
      },
      () => {
        this.getProductsWithCategory();
      }
    );
  };

  render() {
    console.log(this.props.loggedUser);
    const { posts, category } = this.state;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="row" style={{ width: "350px" }}>
            <div className="center post card" key={post.product_id}>
              <div className="column ">
                <div className="card-content col-4">
                  <Link to={"/showcase/" + post.product_id}>
                    <span className="card title">{post.title}</span>
                    <br></br>
                    <span className="card title">whight: {post.weight}g</span>
                    <br></br>
                    <span className="card title">{post.category_id}</span>
                  </Link>

                  <p>{post.body}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })
    ) : (
      <h4>No posts yet under {category} category</h4>
    );

    return (
      <div>
        <SelectCategory parentCallback={this.callbackFunction} />
        <div className="container">
          <h5 className="ml-5">{this.state.category}</h5>
          <h4 className="center"></h4>
          <div className="row">{postList}</div>
        </div>
      </div>
    );
  }
}

export default Home;
