import React, { useState, useEffect } from 'react';

import PracticeMultipleChoice from './PracticeMultipleChoice'

import { Services } from '../../../services';

const STATUS = {
  DONE: 'DONE',
  LOADING: 'LOADING',
  ERROR: 'ERROR'
};

const TYPE = {
  MULTIPLE_CHOICE: 'MULTIPLE_CHOICE',
  WRITE: 'WRITE',
}

export const PracticeProblem = ({ match, id, showSubmit, isSolved }) => {
  const [problem, setProblem] = useState({});
  const [alternatives, setAlternatives] = useState([]);
  const [type, setType] = useState('')
  const [status, setStatus] = useState(STATUS.LOADING);

  useEffect(() => {
    const problem_id = id || match.params.id;

    Services.Api.MultipleChoice.get_multiple_choice_problem(problem_id)
      .then(res => {
        if(res.data.status != "ERROR"){
          const { problem, alternatives } = res.data;
          try {
            setProblem(problem)
            setAlternatives(alternatives)
            setType(TYPE.MULTIPLE_CHOICE)
            setStatus(STATUS.DONE)
          } catch(e) {
            console.error(e)
          }
        }
      })
      .catch(_ => this.setState({ status: this.status.error }));

    Services.Api.write.get(problem_id)
      .then(res => {
        if (res.data.status != "ERROR") {
          const problem = res.data.write_problem;
          try {
            setProblem(problem)
            setType(TYPE.WRITE)
            setStatus(STATUS.DONE)
          } catch (e) {
            console.error(e);
          }
        }
      })
  }, []);

  return status === STATUS.DONE ? (
    <PracticeMultipleChoice
      problem={problem}
      alternatives={alternatives}
      showSubmit={showSubmit}
      isSolved={isSolved}
    />
  ) : null;
};
