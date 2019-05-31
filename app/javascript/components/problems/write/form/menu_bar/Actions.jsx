import React from 'react';
import { Grid, Button } from '@material-ui/core';

export const Actions = ({ submitQuestion }) => {
  return (
    <Grid container justify="flex-end" alignItems="center">
      <Grid item>
        <Button variant="contained" onClick={submitQuestion}>
          Criar
        </Button>
      </Grid>
    </Grid>
  );
};
