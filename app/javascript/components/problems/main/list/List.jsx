import React, { useEffect, useState } from 'react';
import { Grid, Typography, Icon } from '@material-ui/core';
import { AlarmOutlined } from '@material-ui/icons';

import { Services } from '../../../../services';

import { Problem } from './Problem';

export const List = () => {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    console.log('list');
    Services.Api.problems()
      .get_all()
      .then(res => {
        const { status, problems } = res.data;

        if (status === 'OK') {
          setProblems(problems);
        } else {
          // TODO set errors
        }
      })
      .catch(err => {
        // TODO set errors
        console.log(err);
      });
  }, []);

  return (
    <Grid container direction="column" spacing={4}>
      <Grid item>
        <Typography variant="h6" style={{ fontWeight: 'bold' }}>
          <Grid container alignItems="center" spacing={3}>
            <Grid item />
            <Icon>
              <AlarmOutlined />
            </Icon>
            <Grid item>Recentes</Grid>
          </Grid>
        </Typography>
      </Grid>

      <Grid item container direction="column" spacing={10}>
        {problems.map(problem => (
          <Grid item key={problem.id} xs={10} md={5}>
            <Problem problem={problem} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
