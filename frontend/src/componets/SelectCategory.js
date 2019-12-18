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

export class SelectCategory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: []
    };
  }
  componentDidMount() {
    axios.get()
  }

  render() {
    return <div></div>;
  }
}

export default SelectCategory;
