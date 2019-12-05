import React from "react";
import Navbar from "./componets/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./componets/Home";
import About from "./componets/About";
import Contact from "./componets/Contact";
import Post from "./componets/Post";

function App() {
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
  );
}

export default App;
