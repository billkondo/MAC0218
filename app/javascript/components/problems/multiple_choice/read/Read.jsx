import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

import { Services } from '../../../../services';
import { default as Statement } from './Statement';
import { default as Alternatives } from './Alternatives';
import { default as MenuBar } from './MenuBar';

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

    this.setState({ status: this.status.fetching });

    Services.Api.MultipleChoice.get_multiple_choice_problem(id)
      .then(res => {
        const { problem, alternatives } = res.data;
        try {
          this.setState({
            problem,
            alternatives,
            status: this.status.done
          });
        } catch (e) {
          console.log(e);
        }
      })
      .catch(err => this.setState({ status: this.status.error }));
  }

  getProblemID() {
    // Get problem id from URL

    const { id } = this.props.match.params;
    return id;
  }

  render() {
    const { problem, alternatives, status } = this.state;

    return (
      <Grid container spacing={32} alignItems="flex-start">
        <Grid item xs={12} style={{ padding: 32 }}>
          <MenuBar problem={problem} />
        </Grid>

        <Grid item xs={12} md={6} style={{ padding: 32 }}>
          {status == this.status.done ? (
            <Statement problem={problem} />
          ) : (
            <CircularProgress />
          )}
        </Grid>

        <Grid item xs={12} md={6} style={{ padding: 32 }}>
          {status == this.status.done ? (
            <Alternatives alternatives={alternatives} />
          ) : (
            <CircularProgress />
          )}
        </Grid>
      </Grid>
    );
  }
}

// withRouter pass location, history and params objects to component
export default withRouter(Read);
