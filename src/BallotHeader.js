import React from 'react';

const BallotHeader = ({name, description}) => {
  return (
    <header className="App App-header">
      <h1>
        welcome to the election app
      </h1>
      <h2>
        {name}
      </h2>
      <h3>
        {description}
      </h3>
    </header>
  )
};

export default BallotHeader;
