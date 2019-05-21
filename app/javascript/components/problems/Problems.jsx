import React from 'react';
import { Grid } from '@material-ui/core';
import { Services } from '../../services';
import { UserProblem } from '../profile/menu/problems_components';
import axios from 'axios';

const ProblemsList = ({ problems }) => (
  <React.Fragment>
    {problems.map(prob => (
      <Grid item key={prob.id} xs={10} md={8}>
        <UserProblem problem={prob} /> {/* TODO: Trocar isso por uma componente propria do problema */}
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
    const  problems_fetch = Services.Api.MultipleChoice.get_problems;


    if (problems_fetch) {
      this.setState({ status: this.status.loading });
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

    return (
      <Grid container direction="column" spacing={32} style={{ padding: 16 }}>
        <ProblemsList problems={problems} />
      </Grid>
    );
  }
}

export default Problems;
