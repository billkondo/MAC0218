import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core';

const Home = () => (
  <Grid container direction="column" spacing={32}>
    <Grid item>
      <Typography variant="h3">Home</Typography>
    </Grid>

    <Grid item>
      <Link to="/create_problem/" style={{ textDecoration: 'none' }}>
        <Button variant="contained"> Create Problem</Button>
      </Link>
    </Grid>
  </Grid>
);

export default Home;
