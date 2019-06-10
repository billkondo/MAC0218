import React from 'react';
import { Grid } from '@material-ui/core';

import { UserProblems } from '../problems_components';
import { Services } from '../../../../services';

class FavoriteProblems extends React.Component {
  render() {
    return (
      <Grid container direction="column" spacing={4}>
        <Grid item>
          <UserProblems
            problems_fetch={
              Services.Api.MultipleChoice.get_user_favorite_problems
            }
          />
        </Grid>
      </Grid>
    );
  }
}

export default FavoriteProblems;
