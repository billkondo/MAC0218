import React from 'react';
import { Grid } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

import { Services } from '../../../../services';
import { default as Statement } from './Statement';

class Read extends React.Component {
  state = {
    status: '',
    problem: {},
    alternatives: []
  };

  status = {
    fetching: 'LOADING',
    done: 'DONE',
    error: 'ERROR'
  };

  componentWillMount() {
    // Fetch problem data
    const id = this.getProblemID();
    Services.Api.MultipleChoice.get_multiple_choice_problem(id)
      .then(res => {
        const { problem, alternatives } = res.data;
        try {
          this.setState({ problem, alternatives });
        } catch (e) {
          console.log(e);
        }
      })
      .catch(err => console.log(err));
  }

  getProblemID() {
    const { id } = this.props.match.params;
    return id;
  }

  render() {
    return (
      <Grid container direction="column" spacing={32} alignItems="center">
        <Grid item>
          <Statement problem={this.state.problem} />
        </Grid>
      </Grid>
    );
  }
}
export default withRouter(Read);
