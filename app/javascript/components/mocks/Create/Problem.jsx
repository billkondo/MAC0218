import React from 'react';
import { Grid, TextField, IconButton } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';

export const Problem = ({ problem }) => {
  return (
    <Grid container direction="column" spacing={1}>
      <Grid item style={{ fontWeight: 'bold' }}>
        <Grid container alignItems="center">
          <Grid item>{problem.title}</Grid>

          <Grid item style={{ flex: 1 }} container justify="flex-end">
            <IconButton>
              <Add />
            </IconButton>
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
