// import React, { Component } from "react";

// export class SelectCategory extends Component {
//   state = {
//     category: null
//   };

//   handleSelect = event => {
//     this.setState({
//       category: event.target.value
//     },function(){
//       this.props.selectCategory(this.state.category)
//     });
//   };

//   render() {
//     return (
//       <div>
//         <div style={{ color: "blue" }}>
//           <p>Select category</p>
//           <select
//             className="browser-default"
//             value={this.state.category}
//             onChange={this.handleSelect}
//           >
//             <option value="Electronic">Electronic</option>
//             <option value="Toy">Toy</option>
//             <option value="Mobile">Mobile</option>
//           </select>
//         </div>
//       </div>
//     );
//   }
// }

// export default SelectCategory;

import React, { Component } from "react";
import axios from "axios";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

export class SelectCategory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: ["Ishara", "Asanka", "Dilanka", "Sajeewa"],
      categories2: [],
      selectedCategory: ""
    };
  }
  // Get All Main Categories
  // componentDidMount() {
  //   axios
  //     .get("http://localhost:5000/category")
  //     .then(res => {
  //       this.setState({
  //         categories2: res.data.category_name
  //       });
  //     })
  //     .then(console.log(this.state.categories2))
  //     .catch(err => console.log(err));
  // }

  componentDidMount() {
    let initialCategories = [];
    axios.get("http://localhost:5000/category").then(res => {
      initialCategories = res.data.map(category => {
        return category.category_name;
      });
      this.setState({
        categories2: initialCategories
      });
      console.log(this.state.categories2);
    });
  }

  render() {
    const { categories, categories2, selectedCategory } = this.state;

    return (
      <div className="container mt-2">
        <Dropdown
          className="row"
          options={categories2}
          onChange={this.handleSelectedCategory}
          value={selectedCategory}
          placeholder="Select a Category"
        />
      </div>
    );
  }
}

export default SelectCategory;
