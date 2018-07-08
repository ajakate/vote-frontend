import React from 'react';
import Card from "@material-ui/core/es/Card/Card";
import CardContent from "@material-ui/core/es/CardContent/CardContent";
import RadioGroup from "@material-ui/core/es/RadioGroup/RadioGroup";
import Radio from "@material-ui/core/es/Radio/Radio";
import FormControlLabel from "@material-ui/core/es/FormControlLabel/FormControlLabel";

const BallotContest = ({name, description, options, onChange, selectedValue}) => {

  const isChecked = (option) => {
    return selectedValue === option.id;
  };

  return (
    <Card className="Contest">
      <CardContent>
        <div className="Contest-header">
          {name}
        </div>
        <div className="Contest-description">
          {description}
        </div>
        <RadioGroup value={selectedValue} onChange={onChange}>
          {
          options.map(option => (
            <FormControlLabel checked={isChecked(option)} value={option.id} control={<Radio/>} label={option.name}/>
          ))
        }
      </RadioGroup>
      </CardContent>
    </Card>
  )
};

export default BallotContest;