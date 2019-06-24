import React from 'react';
import { Typography, Icon, Grid, colors } from '@material-ui/core';
import { Block } from '@material-ui/icons';
import ProblemPreview from './ProblemPreview'

import { Problem } from './Problem';

const Empty = () => {
  return (
    <Grid container spacing={3}>
      <Grid item>
        <Icon>
          <Block style={{ color: colors.red[900] }} />
        </Icon>
      </Grid>

      <Grid item>
        <Typography variant="body1" style={{ fontWeight: 'bold' }}>
          Nenhum problema foi adicionada ainda
        </Typography>
      </Grid>
    </Grid>
  );
};

export const List = ({ problems }) => {
  if (problems.length === 0) return <Empty />;

  return (
    <Grid item container direction="column" spacing={4}>
      {problems.map(problem => {
        return (
          <Grid
            item
            xs={12}
            key={problem}
            container
            justify="center"
          >
            <Grid item md={6} xs={10}>
              <ProblemPreview problem_id={problem} />
            </Grid>
          </Grid>
          );
        })
      }
   </Grid>
      
  );
};
