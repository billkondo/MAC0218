import React,{useState} from 'react';
import { Grid, TextField, IconButton } from '@material-ui/core';
import { Add, Close } from '@material-ui/icons';

export const Problem = ({ problem, add, remove}) => {

  const [isSelected, setIsSelected] = useState(false);
  
  const add_prob = id => {
    add(id);
    setIsSelected(true);
  };

  const remove_prob = id => {
    remove(id);
    setIsSelected(false);
  };

  return (
    <Grid container direction="column" spacing={1}>
      <Grid item style={{ fontWeight: 'bold' }}>
        <Grid container alignItems="center">
          <Grid item>{problem.title}</Grid>

          <Grid item style={{ flex: 1 }} container justify="flex-end">
            {!isSelected && 
              (<IconButton onClick={() => add_prob(problem.id)}>
                <Add />
              </IconButton>)
            }            
            {isSelected && 
              (<IconButton onClick={() => remove_prob(problem.id)}>
                <Close />
              </IconButton>)
            }
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <TextField
          value={problem.statement}
          variant="outlined"
          InputProps={{
            readOnly: true
          }}
          multiline
          fullWidth
        />
      </Grid>
    </Grid>
  );
};
