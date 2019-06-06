import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Services } from '../../services';
import { Problem } from './';
import axios from 'axios';

const ProblemsList = ({ problems }) => (
  <React.Fragment>
    {problems.map(prob => (
      <Grid item key={prob.id} xs={10} md={8}>
        <Problem problem={prob} />
      </Grid>
    ))}
  </React.Fragment>
);

class Problems extends React.Component {
  signal = axios.CancelToken.source();

  state = {
    problems: [],
    status: ''
  };

  status = {
    loading: 'LOADING',
    done: 'DONE',
    error: 'ERROR'
  };

  componentDidMount() {
    this.setState({ status: this.status.loading });

    const problems_fetch = Services.Api.MultipleChoice.get_problems;

    if (problems_fetch) {
      try {
        problems_fetch(this.signal.token)
          .then(res => {
            const { problems } = res.data;
            this.setState({ problems, status: this.status.done });
          })
          .catch(err => this.setState({ status: this.status.error }));
      } catch (e) {
        console.log(e);
      }
    }
  }

  componentWillUnmount() {
    this.signal.cancel('API: get all problems is being canceled');
  }

  render() {
    const { problems, status } = this.state;

    if (status === this.status.loading) return null;

    return (
      <Grid
        container
        justify="center"
        spacing={32}
        style={{
          position: 'absolute',
          top: '20%'
        }}
      >
        <Grid mb={5}>
          <Typography variant="h3">Problems</Typography>
        </Grid>
        <Grid container alignItems="center" justify="center" spacing={32}>
          <ProblemsList problems={problems} />
        </Grid>
      </Grid>
    );
  }
}

export default Problems;
