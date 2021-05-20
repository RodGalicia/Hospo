import React, { Component } from "react";
import Home from "./pages/home";
import Login from "./pages/login";
import Private from "./pages/private";
import "./styles.css";
import {BrowserRouter as Router, Route} from "react-router-dom"

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact><Home></Home></Route>  
        <Route path="/login" exact><Login></Login></Route>  
        <Route path="/private" exact><Private></Private></Route>  
      </Router>
    );
  }
}

export default App;
