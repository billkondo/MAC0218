import React from 'react';
import { Grid, Button, Typography } from '@material-ui/core';

const MenuBar = ({ problem }) => (
  <Grid container spacing={24}>
    <Grid item>
      <Typography variant="h5">{problem.title}</Typography>
    </Grid>
    {problem.isOwner && (
      <Grid item style={{ flex: 1 }}>
        <Grid container justify="flex-end" spacing={32}>
          <Grid item>
            <Button variant="contained">Editar</Button>
          </Grid>

          <Grid item>
            <Button variant="contained">Deletar</Button>
          </Grid>
        </Grid>
      </Grid>
    )}
  </Grid>
);

export default MenuBar;
