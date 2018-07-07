import React, { Component } from 'react';
import Button from "@material-ui/core/es/Button/Button";
import BallotHeader from "./BallotHeader";
import './App.css';
import BallotContest from "./BallotContest";
import queryString from "query-string";

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
        {
          this.state.contests.map(contest => {
            return (
              <BallotContest
                name={contest.name}
                description={contest.description}
                options={contest.options}
              />
            )
          })
        }
        <Button variant="raised" color="primary">
          Cast Ballot
        </Button>
      </div>
    );
  }
}

export default BallotPage;
