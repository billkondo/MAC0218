import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, colors } from '@material-ui/core';

const Registration = () => (
  <Grid container spacing={16} justify="flex-end">
    <Grid item>
      <Link to="/sign-in/" style={{ textDecoration: 'none' }}>
        <Button style={{ color: colors.grey[50] }}> Sign In </Button>
      </Link>
    </Grid>

    <Grid item>
      <Link to="/sign-up/" style={{ textDecoration: 'none' }}>
        <Button variant="outlined" style={{ color: colors.grey[50] }}>
          Sign Up
        </Button>
      </Link>
    </Grid>
  </Grid>
);

export default Registration;
