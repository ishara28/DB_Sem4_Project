import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Post from "./Post";
import SignIn from "./SignIn";

function Showcase() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/contact" component={Contact}></Route>
          

          <Route path="/:post_id" component={Post}></Route>
        </Switch>
      </div>
    </BrowserRouter>

    // <div className="App">
    //   <SignIn/>
    // </div>

 
  );
}

export default Showcase;
