import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core';

import { routes } from '../../config';

const Home = () => (
  <Grid container justify="center">
    <Grid item md={8} xs={12}>
      <Grid item>
        <Typography variant="h3">Home</Typography>
      </Grid>

      <Grid container spacing={4}>
        <Grid item mt={5}>
          <Link
            to={routes.problems.create_select_type}
            style={{ textDecoration: 'none' }}
          >
            <Button variant="contained"> Create Problem</Button>
          </Link>
        </Grid>
        <Grid item mt={5}>
          <Link to="/problems" style={{ textDecoration: 'none' }}>
            <Button variant="contained"> All Problems</Button>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

export default Home;
