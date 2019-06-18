import React, { useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';

import { Services } from '../../../services';

export const List = () => {
  useEffect(() => {
    console.log('list');
    Services.Api.problems()
      .get_all()
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }, []);

  return (
    <Grid container direction="column">
      <Grid item>
        <Typography variant="h6">Descobrir</Typography>
      </Grid>

      <Grid item>OI</Grid>
    </Grid>
  );
};
