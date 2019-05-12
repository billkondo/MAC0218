import React from 'react';
import { Grid, Typography, Card } from '@material-ui/core';

const Alternatives = ({ alternatives }) => {
  console.log(alternatives);
  return (
    <Card style={{ padding: 32 }}>
      <Grid container direction="column" spacing={24}>
        {alternatives.map(alternative => {
          return (
            <Grid item key={alternative.id}>
              {alternative.text}
            </Grid>
          );
        })}
      </Grid>
    </Card>
  );
};

export default Alternatives;
