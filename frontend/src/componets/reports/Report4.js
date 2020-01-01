import React, { Component } from 'react'
import Axios from "axios";

export class Report4 extends Component {

    componentDidMount() {
       
       
        Axios.get("http://localhost:5000/admin/report4").then(res => {
        //   this.setState({
        //     posts: res.data
        //   });
        console.log(res.data)
        });
      }
    render() {
        return (
            <div>
                <h1>Report4</h1>
                
            </div>
        )
    }
}

export default Report4
