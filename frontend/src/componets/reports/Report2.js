import React, { Component } from "react";
import Axios from "axios";

export class Report2 extends Component {
  componentDidMount() {
    Axios.get("http://localhost:5000/admin/report2").then(res => {
      //   this.setState({
      //     posts: res.data
      //   });
      console.log(res.data);
    });
  }

  render() {
    return (
      <div>
        <h1>Report2</h1>
      </div>
    );
  }
}

export default Report2;
