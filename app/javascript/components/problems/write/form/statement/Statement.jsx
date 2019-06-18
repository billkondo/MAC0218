import React from 'react';
import { Grid, TextField, Grow } from '@material-ui/core';

export const Statement = ({ statement, handleChange, mode }) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Grow in={true}>
          <TextField
            multiline
            variant="outlined"
            value={statement}
            onChange={handleChange}
            name="statement"
            fullWidth
            label="Enunciado"
            InputProps={{
              readOnly: mode === 'READ' ? true : false
            }}
          />
        </Grow>
      </Grid>
    </Grid>
  );
};
