import React from 'react';
import { Grid } from '@material-ui/core';

import { UserProblems } from '../problems_components';
import { Services } from '../../../../services';

class CreatedProblems extends React.Component {
  render() {
    return (
      <Grid container direction="column" spacing={4}>
        <Grid item>
          <UserProblems problems_fetch={Services.Api.MultipleChoice.get_user} />
        </Grid>
      </Grid>
    );
  }
}

export default CreatedProblems;
