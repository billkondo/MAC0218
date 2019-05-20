import React from 'react';
import { withRouter } from 'react-router-dom';

import { Form } from '../form';

import { routes } from '../../../../config';
import { Services } from '../../../../services';

class _Create extends React.Component {
  submitForm = problem => {
    Services.Api.MultipleChoice.create(problem)
      .then(res => {
        // redirect user
        if (res.data.status === 'OK') {
          const { history } = this.props;
          const id = res.data.id;
          history.push(routes.read_multiple_problem(id));
        } else {
          // TODO throw errors
        }
      })
      .catch(err => console.log(err));
  };

  render() {
    return <Form submitForm={this.submitForm} mode="create" />;
  }
}

export const Create = withRouter(_Create);
