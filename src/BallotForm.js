import React from 'react';
import BallotContest from "./BallotContest";
import Button from "@material-ui/core/es/Button/Button";
import {withState} from "recompose";

const enhance = withState('selection', 'setSelection', {});

const BallotForm = ({contests, selection, setSelection}) => {

  const handleChange = (id) => {
    return (evt) => {
      setSelection({...selection, [id]: evt.target.value})
    }
  };

  return (
    <React.Fragment>
      {
        contests.map(contest => {
          return (
            <BallotContest
              name={contest.name}
              description={contest.description}
              options={contest.options}
              selectedValue={selection[contest.id]}
              onChange={handleChange(contest.id)}
            />
          )
        })
      }
      <Button variant="raised" color="primary">
        Cast Ballot
      </Button>
    </React.Fragment>
  )
};

export default enhance(BallotForm);
