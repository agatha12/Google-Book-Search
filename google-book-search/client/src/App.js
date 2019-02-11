import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Nav from "./components/Nav/Nav.js"
import Title from "./components/Title/Title.js"
import Search from "./pages/Search"
import Saved from "./pages/Saved"


class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Nav></Nav>
        <Title></Title>
        <Route exact path="/" component={Search}/>
        <Route exact path="/saved" component={Saved}/>
      </div>
      </Router>
    );
  }
}

export default App;
