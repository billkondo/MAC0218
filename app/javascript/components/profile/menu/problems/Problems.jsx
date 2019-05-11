import React from 'react';
import { Grid } from '@material-ui/core';

import UserProblems from './UserProblems';

class Problems extends React.Component {
  render() {
    return (
      <Grid container direction="column" spacing={32}>
        <Grid item>
          <UserProblems />
        </Grid>
      </Grid>
    );
  }
}

export default Problems;
