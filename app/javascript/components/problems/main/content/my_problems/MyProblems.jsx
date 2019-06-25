import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';

import { ProblemCard } from '../ProblemCard';
import { Services } from '../../../../../services';

export const MyProblems = () => {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    const source = Services.Api.Axios.getSource();

    Services.Api.Problems.get_user_problems(source.token)
      .then(res => {
        const { problems, status } = res.data;

        if (status === 'OK') {
          setProblems(problems);
        } else {
          // TODO handle errors here
        }
      })
      .catch(err => {
        if (!Services.Api.Axios.checkError(err)) {
          // TODO handle errors here
        }
      });

    return () => {
      source.cancel('Component Unmount');
    };
  }, []);
  return (
    <Grid container direction="column" spacing={4}>
      {problems.map(problem => {
        return (
          <Grid item key={problem.id} md={6} xs={10}>
            <ProblemCard problem={problem} />
          </Grid>
        );
      })}
    </Grid>
  );
};
