import React from 'react';
import { Grid } from '@material-ui/core';

import { Header } from './Header';
import { Content } from './content';

export const Main = () => {
  return (
    <Grid container direction="column">
      <Grid item xs={12} container justify="center">
        <Grid item xs={10}>
          <Header />
        </Grid>

        <Grid item xs={10} style={{ marginTop: 64 }}>
          <Content />
        </Grid>
      </Grid>
    </Grid>
  );
};
