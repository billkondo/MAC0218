import React from 'react';
import { Button, Grid, colors } from '@material-ui/core';

const Registration = () => (
  <Grid container spacing={16} justify="flex-end">
    <Grid item>
      <a href="/users/sign_in/" style={{ textDecoration: 'none' }}>
        <Button style={{ color: colors.grey[50] }}> Sign In </Button>
      </a>
    </Grid>

    <Grid item>
      <a href="/users/sign_up/" style={{ textDecoration: 'none' }}>
        <Button variant="outlined" style={{ color: colors.grey[50] }}>
          Sign Up
        </Button>
      </a>
    </Grid>
  </Grid>
);

export default Registration;
