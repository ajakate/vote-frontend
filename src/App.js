import React, { Component } from 'react';
import './App.css';
import BallotPage from "./BallotPage";
import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/es/Route";

class App extends Component {

  render() {
    return (
      <Router>
        <div>
        <Route path="/elections/:electionId" component={BallotPage}/>
        </div>
      </Router>
    );
  }
}

export default App;
