import React from 'react';
import { Grid } from '@material-ui/core';
import { Services } from '../../../../services';

import UserProblem from './UserProblem';

class UserProblems extends React.Component {
  // TODO refactor this component: bad practice

  state = {
    problems: []
  };

  componentWillMount() {
    try {
      Services.Api.MultipleChoice.get_user()
        .then(res => {
          const { problems } = res.data;
          this.setState({ problems });
        })
        .catch(err => console.log(err));
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { problems } = this.state;

    return (
      <Grid container direction="column" spacing={32} style={{ padding: 16 }}>
        {problems.map(prob => (
          <Grid item key={prob.id} xs={10} md={8}>
            <UserProblem problem={prob} />
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default UserProblems;
