import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import { Services } from '../../../services';
import { Form } from '../multiple_choice/form';
import { routes } from '../../../config';

const Practice = ({ match, history }) => {
  const [problem, setProblem] = useState({});
  const [alternatives, setAlternatives] = useState([]);
  const [status, setStatus] = useState('');

  const _status = {
    done: 'DONE',
    loading: 'LOADING',
    error: 'ERROR'
  };

  useEffect(() => {
    const id = match.params.id;

    setStatus(_status.loading);

    Services.Api.MultipleChoice.get_multiple_choice_problem(id)
      .then(res => {
        const { problem, alternatives } = res.data;

        if (res.data.status === 'OK') {
          setAlternatives(alternatives);
          setProblem(problem);
          setStatus(_status.done);
        } else {
          setStatus(_status.error);
        }
      })
      .catch(err => console.log(err));
  }, []);

  const submitForm = problem => {
    const id = match.params.id;

    Services.Api.MultipleChoice.update_multiple_choice(problem, id)
      .then(res => {
        if (res.data.status === 'OK') {
          history.push(routes.read_multiple_problem(id));
        } else {
          setStatus(_status.error);
        }
      })
      .catch(err => console.log(err));
  };

  return status === _status.done ? (
    <Form
      mode="edit"
      problem={problem}
      alternatives={alternatives}
      submitForm={submitForm}
    />
  ) : null;
};

export const PracticeProblem = withRouter(Practice);
