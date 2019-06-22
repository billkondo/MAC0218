import React from 'react';
import { Grid } from '@material-ui/core';

export const Header = ({ title, description }) => {
  return (
    <Grid container direction="column">
      <Grid item xs={12}>
        {title}
      </Grid>

      <Grid item xs={12}>
        {description}
      </Grid>
    </Grid>
  );
};
