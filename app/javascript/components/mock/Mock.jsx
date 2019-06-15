import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core';

const Mock = () => (
  <Grid container justify="center">
    <Grid item md={8} xs={12}>
      <Grid item>
        <Typography variant="h3">Mock Test</Typography>
      </Grid>

      <Grid container spacing={4}>
        <Grid item mt={5}>
          <Link to="/create_mock_test/" style={{ textDecoration: 'none' }}>
            <Button variant="contained"> Create Mock Test</Button>
          </Link>
        </Grid>
        <Grid item mt={5}>
          <Link to="/mock_test/" style={{ textDecoration: 'none' }}>
            <Button variant="contained"> All Mock Test</Button>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

export default Mock;
