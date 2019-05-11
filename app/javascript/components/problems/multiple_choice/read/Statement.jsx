import React from 'react';
import { Grid, Typography } from '@material-ui/core';

const Statement = ({ problem }) => {
  console.log(problem);
  return (
    <Grid container direction="column" spacing={24}>
      <Grid item>
        <Typography variant="body1">{problem.title}</Typography>
      </Grid>
    </Grid>
  );
};

export default Statement;
