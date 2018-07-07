import React, { Component } from 'react';
import Button from "@material-ui/core/es/Button/Button";
import BallotHeader from "./BallotHeader";
import './App.css';
import BallotContest from "./BallotContest";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {loaded: false};
  }

  async componentWillMount () {
    const json = await fetch('http://localhost:3000/elections/123?token=12345');
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

export default App;
