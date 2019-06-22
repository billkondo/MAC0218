import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { withRouter } from 'react-router';

import { Header } from './Header';
import { Services } from '../../../services';

const _Read = ({ match }) => {
  // const [group, setGroup] = useState();

  useEffect(() => {
    const { id } = match.params;

    Services.Api.Groups.get_group(id)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }, []);

  return (
    <Grid container direction="column">
      <Grid item xs={12} container justify="center">
        <Grid item xs={10} md={6}>
          <Header title="OI" description="Vai tomar" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export const Read = withRouter(_Read);
