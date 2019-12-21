import React, { Component } from "react";
import axios from "axios";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

export class SelectCategory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cat: "ishara",
      categories: [],
      selectedCategory: ""
    };
  }

  componentDidMount() {
    let initialCategories = [];
    axios.get("http://localhost:5000/category").then(res => {
      initialCategories = res.data.map(category => {
        return category.category_name;
      });
      this.setState({
        categories: initialCategories
      });
      console.log(this.state.categories);
    });
  }

  handleSelectedCategory = option => {
    const selectedCategory = option.value;
    this.setState(
      {
        selectedCategory: selectedCategory
      },
      () => {
        this.sendData();
      }
    );
  };

  sendData = () => {
    this.props.parentCallback(this.state.selectedCategory);
  };

  render() {
    const { categories, selectedCategory } = this.state;

    return (
      <div className="container mt-2">
        <Dropdown
          className="row"
          options={categories}
          onChange={this.handleSelectedCategory}
          value={selectedCategory}
          placeholder="Select a Category"
        />
      </div>
    );
  }
}

export default SelectCategory;
