import React, { Component } from "react";
import Home from "./pages/home";
import Login from "./pages/login";
import Private from "./pages/private";
import Register from "./pages/register";
import "./styles.css";
import {BrowserRouter as Router, Route} from "react-router-dom"

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact><Home></Home></Route>  
        <Route path="/login" exact><Login></Login></Route>  
        <Route path="/private" exact><Private></Private></Route> 
        <Route path="/register" exact><Register></Register></Route>  
      </Router>
    );
  }
}

export default App;
