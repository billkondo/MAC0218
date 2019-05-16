import React from 'react';
import { Grid, TextField } from '@material-ui/core';

export const Statement = ({ statement, handleChange, mode }) => {
  return (
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
          InputProps={{
            readOnly: mode === 'read'
          }}
        />
      </Grid>
    </Grid>
  );
};
