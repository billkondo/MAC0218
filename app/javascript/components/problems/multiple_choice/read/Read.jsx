import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

import { Form } from '../form';

import { Services } from '../../../../services';
import { routes } from '../../../../config';

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
    // TODO assert id != NULL
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

    const isReady = status === 'DONE';

    return (
      <React.Fragment>
        {isReady ? (
          <Form mode="read" problem={problem} alternatives={alternatives} />
        ) : null}
      </React.Fragment>
    );
  }
}

// withRouter pass location, history and params objects to component
export default withRouter(Read);
