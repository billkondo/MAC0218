import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import { Services } from '../../../../services';
import { Form } from '../form';

const _Edit = ({ match }) => {
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
          console.log(alternatives);
          setAlternatives(alternatives);
          setProblem(problem);
          setStatus(_status.done);
        } else {
          setStatus(_status.error);
        }
      })
      .catch(err => console.log(err));
  }, []);

  const submitForm = () => {
    console.log('form');
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

export const Edit = withRouter(_Edit);
