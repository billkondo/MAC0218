import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core';

const Home = () => (
  <Grid
    container
    justify="center"
    spacing={32}
    style={{
      position: 'absolute',
      top: '10%'
    }}
  >
    <Grid item md={8} xs={12}>
      <Grid item>
        <Typography variant="h3">Home</Typography>
      </Grid>

      <Grid item mt={5}>
        <Link to="/create_problem/" style={{ textDecoration: 'none' }}>
          <Button variant="contained"> Create Problem</Button>
        </Link>
      </Grid>
    </Grid>
  </Grid>
);

export default Home;