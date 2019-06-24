import React from 'react';
import { Grid } from '@material-ui/core';

import { Header } from './Header';
import { Suggestions } from './Suggestions';

export const Main = () => {
  return (
    <Grid container direction="column" justify="flex-end">
      <Grid item xs={12} container justify="center">
        <Grid item xs={10}>
          <Header />
        </Grid>

        <Grid item xs={10} style={{ marginTop: 64 }}>
          <Suggestions />
        </Grid>
      </Grid>
    </Grid>
  );
};
