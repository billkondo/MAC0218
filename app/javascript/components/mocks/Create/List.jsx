import React from 'react';
import { Typography, Icon, Grid, colors } from '@material-ui/core';
import { Block } from '@material-ui/icons';

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

  return <div>OI</div>;
};
