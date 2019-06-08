import React from 'react';
import { withRouter } from 'react-router-dom';

import { Form } from '../form';
import { Services } from '../../../../services';
import { routes } from '../../../../config';

const _Create = ({ history }) => {
  const goToRead = id => {
    history.push(routes.read_write_problem(id));
  };

  const createQuestion = problem => {
    problem = {
      ...problem,
      write_problem_questions_attributes: problem.write_problem_questions_attributes.map(
        m => ({ question: m.question })
      )
    };

    Services.Api.write
      .create(problem)
      .then(res => {
        console.log(res);

        const { write_problem_id, status } = res.data;

        if (status === 'OK') {
          goToRead(write_problem_id);
        } else {
          // TODO throw errors
        }
      })
      .catch(err => console.log(err));
  };
  return <Form submit={createQuestion} mode="CREATE" />;
};

export const Create = withRouter(_Create);
