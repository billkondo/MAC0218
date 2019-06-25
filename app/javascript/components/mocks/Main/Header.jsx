import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Icon, Button, colors } from '@material-ui/core';
import { NoteOutlined } from '@material-ui/icons';

import { routes } from '../../../config';

export const Header = () => {
  return (
    <Grid container direction="column">
      <Grid item>
        <Typography variant="h6" style={{ fontWeight: 'bold' }}>
          <Grid container alignItems="center" spacing={3}>
            <Grid item />
            <Icon>
              <NoteOutlined />
            </Icon>
            <Grid item>Simulados</Grid>
          </Grid>
        </Typography>
      </Grid>

      <Grid item style={{ marginTop: 16 }}>
        <Link to={routes.mocks.create} style={{ textDecoration: 'none' }}>
          <Button
            variant="contained"
            style={{
              background: colors.green.A700,
              color: colors.grey[50],
              fontWeight: 'bold'
            }}
          >
            Criar simulado
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};
