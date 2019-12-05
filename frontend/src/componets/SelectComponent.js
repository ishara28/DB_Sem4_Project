import React, { Component } from "react";
import DynamicSelect from "./DynamicSelect";

const arrayOfData = [
  {
    id: "1 - Jerry",
    name: "Jerry"
  },
  {
    id: "2 - Elaine",
    name: "Elaine"
  },
  {
    id: "3 - Kramer",
    name: "Kramer"
  },
  {
    id: "4 - George",
    name: "George"
  }
];

class SelectComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: "Nothing selected"
    };
  }

  handleSelectChange = selectedValue => {
    this.setState({
      selectedValue: selectedValue
    });
  };

  render() {
    return (
      <div className="SelectComponent">
        <header className="SelectComponent-header">
          <h1 className="SelectComponent-title">
            Dynamic Select Dropdown List
          </h1>
        </header>
        <p className="SelectComponent-intro">
          <DynamicSelect
            arrayOfData={arrayOfData}
            onSelectChange={this.handleSelectChange}
          />{" "}
          <br />
          
          <br />
          <div>Selected value: {this.state.selectedValue}</div>
        </p>
      </div>
    );
  }
}

export default SelectComponent;
