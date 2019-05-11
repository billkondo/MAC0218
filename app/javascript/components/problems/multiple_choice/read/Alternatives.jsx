import React from 'react';
import { Grid, Typography } from '@material-ui/core';

const Alternatives = ({ problem }) => (
  <Grid container direction="column" spacing={24}>
    <Grid item>
      <Typography variant="body1">{problem.title}</Typography>
    </Grid>
  </Grid>
);

export default Alternatives;
