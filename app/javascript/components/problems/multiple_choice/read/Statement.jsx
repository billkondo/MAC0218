import React from 'react';
import { Grid, Typography, TextField } from '@material-ui/core';

const Statement = ({ problem }) => {
  console.log(problem);
  return (
    <Grid container direction="column" spacing={24}>
      <Grid item>
        <TextField
          value={problem.statement}
          InputProps={{
            readOnly: true
          }}
          multiline
          fullWidth
          label="Enunciado"
          variant="outlined"
        />
      </Grid>
    </Grid>
  );
};

export default Statement;
