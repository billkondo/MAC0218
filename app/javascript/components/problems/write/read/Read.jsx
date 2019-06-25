import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

import { Form } from '../form';
import { Services } from '../../../../services';

const _Read = ({ match }) => {
  const [problem, setProblem] = useState();
  const [questions, setQuestions] = useState();

  useEffect(() => {
    const { id } = match.params;

    Services.Api.Write.get(id)
      .then(res => {
        const { questions, write_problem } = res.data;

        setQuestions(questions);
        setProblem(write_problem);
      })
      .catch(err => {
        // TODO set errors
        console.log(err);
      });
  }, []);

  return <Form mode="READ" problemProps={problem} questionsProps={questions} />;
};

export const Read = withRouter(_Read);
