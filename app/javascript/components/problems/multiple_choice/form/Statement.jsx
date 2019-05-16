import React from 'react';
import { Grid, TextField } from '@material-ui/core';

export const Statement = ({ statement, handleChange }) => (
  <Grid container>
    <Grid item xs={12}>
      <TextField
        label={'Enunciado'}
        variant="outlined"
        name="statement"
        value={statement}
        onChange={handleChange}
        multiline
        fullWidth
      />
    </Grid>
  </Grid>
);
