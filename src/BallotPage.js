import React, { Component } from 'react';
import BallotHeader from "./BallotHeader";
import './App.css';
import queryString from "query-string";
import BallotForm from "./BallotForm";

class BallotPage extends Component {

  constructor(props) {
    super(props);
    this.state = { loaded: false };
  }

  async componentWillMount () {
    const electionId = this.props.match.params.electionId;
    const token = queryString.parse(this.props.location.search).token;
    const json = await fetch(`http://localhost:3000/elections/${electionId}?token=${token}`);

    json.json().then(then => {
      this.setState(then);
      this.setState({loaded: true});
    })
  }

  render() {
    return this.state.loaded && (
      <div className="App-container">
        <BallotHeader
          name={this.state.name}
          description={this.state.description}
        />
        <BallotForm
          contests={this.state.contests}
        />
      </div>
    );
  }
}

export default BallotPage;
