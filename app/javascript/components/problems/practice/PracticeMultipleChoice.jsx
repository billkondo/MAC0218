import React, { useState } from 'react'

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

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  group: {
    margin: theme.spacing(1, 0),
  },
}));

const PracticeMultipleChoice = ({
  problem,
  alternatives,
  showSubmit,
  isSolved,
}) => {
  const classes = useStyles()
  
  const [marked, mark] = useState('')
  const [solved, setSolved] = useState(isSolved || false)
 
  if (isSolved !== solved) {
    setSolved(isSolved)
  }

  return (
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
      {!solved && showSubmit ?
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
  )
}

export default PracticeMultipleChoice