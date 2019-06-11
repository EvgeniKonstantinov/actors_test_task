import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Body } from "./components/Body";
import { Actors } from "./components/Actors";
import { Header } from "./components/Header";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Route exact path="/" component={Body} />
        <Route path="/actors" render={() => <Actors />} />
      </Router>
    );
  }
}

export default App;
