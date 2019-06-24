import React, { useState, useEffect } from 'react';
import { 
  Grid,
  Button,
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormLabel,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Alternative from '../multiple_choice/form/alternatives/Alternative'

import { withRouter } from 'react-router-dom';

import { Services } from '../../../services';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  group: {
    margin: theme.spacing(1, 0),
  },
}));

const STATUS = {
  DONE: 'DONE',
  LOADING: 'LOADING',
  ERROR: 'ERROR'
};

export const PracticeProblem = ({ match }) => {
  const classes = useStyles()

  const [problem, setProblem] = useState({});
  const [alternatives, setAlternatives] = useState([]);
  const [status, setStatus] = useState(STATUS.LOADING);
  const [marked, mark] = useState('')
  const [solved, setSolved] = useState(false)


  useEffect(() => {
    const id = match.params.id;

    Services.Api.MultipleChoice.get_multiple_choice_problem(id)
      .then(res => {
        const { problem, alternatives } = res.data;

        if (res.data.status === 'OK') {
          setAlternatives(alternatives);
          setProblem(problem);
          setStatus(STATUS.DONE);
        } else {
          setStatus(STATUS.ERROR);
        }
      })
      .catch(err => console.log(err));
  }, []);

  return status === STATUS.DONE ? (
    <Grid container alignContent="center" style={{ paddingLeft: 32, paddingRight: 32 }}>
      <Grid container>
        <h2>{problem.statement}</h2>
      </Grid>
      <Grid container>
        <FormControl fullWidth component="fieldset">
          <FormLabel component="legend">Alternatives</FormLabel>
          <RadioGroup
            aria-label="Alternatives"
            name="alternatives"
            className={classes.group}
            value={marked}
            onChange={event => {
              if (!solved) {
                mark(event.target.value)
              }
            }}
          >
            {
              alternatives.map(alternative => {
                const isCorrect = alternative.text === problem.correct_answer
                const isMarked = alternative.id.toString() === marked 

                return (
                  <FormControlLabel
                    value={alternative.id.toString()}
                    control={<Radio color="primary" />}
                    label={
                      !solved
                        ? alternative.text
                        :
                        <Alternative
                          alt={alternative}
                          mode="read"
                          isCorrect={isCorrect}
                          isWrong={isMarked && !isCorrect}
                        />
                    }
                    key={alternative.id}
                  />)
              })
            }
          </RadioGroup>
        </FormControl>
      </Grid>
      {!solved ?
        <Grid item container spacing={2} justify="flex-end">
          <Grid item>
            <Button variant="outlined" onClick={() => {
              setSolved(true)
            }}>
              Submit
            </Button>
          </Grid>
        </Grid>
        : null}
    </Grid>
  ) : null;
};
