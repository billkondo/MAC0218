import React from 'react';
import { Grid, Typography, Avatar, Button } from '@material-ui/core';

const PersonalInfo = ({
  name = 'Menino Maluquinho',
  username = 'tester_beast'
}) => (
  <Grid container direction="column" spacing={32} alignItems="center">
    <Grid item>
      <Avatar style={{ height: 200, width: 200 }} />
    </Grid>

    <Grid item container direction="column" spacing={8}>
      <Grid item>
        <Typography variant="h5" align="center">
          {name}
        </Typography>
      </Grid>

      <Grid item>
        <Typography variant="h6" align="center">
          {'@' + username}
        </Typography>
      </Grid>
    </Grid>

    <Grid item>
      <Button variant="outlined">Editar Perfil</Button>
    </Grid>
  </Grid>
);

export default PersonalInfo;
