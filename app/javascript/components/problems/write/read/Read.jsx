import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

import { Form } from '../form';
import { Services } from '../../../../services';

const _Read = ({ match, location }) => {
  const [problem, setProblem] = useState();
  const [questions, setQuestions] = useState();

  useEffect(() => {
    console.log('READ');
    const { id } = queryString.parse(location.search);

    console.log(id);
    console.log(match);
    console.log(location);
    console.log(queryString.parse(location.search));

    Services.Api.write
      .get(id)
      .then(res => {
        const { questions, write_problem } = res.data;
        console.log(res);
        setQuestions(questions);
        setProblem(write_problem);
      })
      .catch(err => console.log(err));
  }, []);

  return <Form mode="READ" problemProps={problem} questionsProps={questions} />;
};

export const Read = withRouter(_Read);
