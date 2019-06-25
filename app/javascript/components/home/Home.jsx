import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core';

import { Welcome } from './Welcome';
import { routes } from '../../config';

const Home = ({ isAuth }) => {
  if (!isAuth) {
    return <Welcome />;
  }

  return (
    <Grid container justify="center">
      <Grid item md={8} xs={12}>
        <Grid item>
          <Typography variant="h3">Home Page</Typography>
        </Grid>

        <Grid container spacing={4}>
          <Grid item mt={5}>
            <Link
              to={routes.problems.create_select_type}
              style={{ textDecoration: 'none' }}
            >
              <Button variant="contained"> Criar Problema</Button>
            </Link>
          </Grid>
          <Grid item mt={5}>
            <Link to="/problems" style={{ textDecoration: 'none' }}>
              <Button variant="contained"> Todos Problemas</Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
