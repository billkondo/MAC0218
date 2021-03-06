import React from 'react';
import { Link } from 'react-router-dom';
import {
  Grid,
  Typography,
  Icon,
  Button,
  colors,
  Fade
} from '@material-ui/core';
import { GroupOutlined } from '@material-ui/icons';

import { routes } from '../../../config';

export const Header = () => {
  return (
    <Fade in={true}>
      <Grid container direction="column">
        <Grid item>
          <Typography variant="h6" style={{ fontWeight: 'bold' }}>
            <Grid container alignItems="center" spacing={3}>
              <Grid item />
              <Icon>
                <GroupOutlined />
              </Icon>
              <Grid item>Grupos</Grid>
            </Grid>
          </Typography>
        </Grid>

        <Grid item style={{ marginTop: 16 }}>
          <Link to={routes.groups.create} style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              style={{
                background: colors.green.A700,
                color: colors.grey[50],
                fontWeight: 'bold'
              }}
            >
              Criar grupo
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Fade>
  );
};
