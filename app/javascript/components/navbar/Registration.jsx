import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, colors } from '@material-ui/core';

import { routes } from '../../config';

const Registration = () => (
  <Grid container spacing={2} justify="flex-end">
    <Grid item>
      <Link to={routes.sign_in} style={{ textDecoration: 'none' }}>
        <Button style={{ color: colors.grey[50] }}> Entrar </Button>
      </Link>
    </Grid>

    <Grid item>
      <Link to={routes.sign_up} style={{ textDecoration: 'none' }}>
        <Button variant="outlined" style={{ color: colors.grey[50] }}>
          Registrar
        </Button>
      </Link>
    </Grid>
  </Grid>
);

export default Registration;
