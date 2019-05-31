import React from 'react';
import { Grid, TextField } from '@material-ui/core';

export const Statement = ({ statement, handleChange }) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <TextField
          multiline
          variant="outlined"
          value={statement}
          onChange={handleChange}
          name="statement"
          fullWidth
          label="Enunciado"
        />
      </Grid>
    </Grid>
  );
};
