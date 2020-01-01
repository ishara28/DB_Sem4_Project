import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Admin extends Component {
  render() {
    return (
      <div className="container" style={{margin:"100px"}}>
        <div>
          <Link to="/admin/report1" className="waves-effect waves-light btn" style={{margin:"10px"}}>
            Quarterly sales report for a given year
          </Link>
          <br />
        </div>

        <Link to="/admin/report2" className="waves-effect waves-light btn" style={{margin:"10px"}}>
          Products with most number of sales in a given period
        </Link>
        <br />
        <Link to="/admin/report3" className="waves-effect waves-light btn" style={{margin:"10px"}}>
          Product category with most orders
        </Link>
        <br />
        <Link to="/admin/report4" className="waves-effect waves-light btn" style={{margin:"10px"}}>
          Given a product, time period with most interest to it
        </Link>
        <br />

        <Link to="/admin/report5" className="waves-effect waves-light btn" style={{margin:"10px"}}>
          Customer - order report
        </Link>
      </div>
    );
  }
}

export default Admin;
