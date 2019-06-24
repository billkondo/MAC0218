import React, { useState } from 'react';
import { Grid, Typography, Icon } from '@material-ui/core';
import { SentimentSatisfied } from '@material-ui/icons';
import { MockCard } from './MockCard';


export const Suggestions = () => {
  // TODO: make request to get mocks
  const [mocks, setMocks] = useState([
    {
      title: 'MAC0218',
      description: 'Um grupo para testes!!! Testando várias possibilidades',
      id: 1
    },
    {
      title: 'Título',
      description: 'Description',
      id: 2
    }
  ]);

  return (
    <Grid container direction="column">
      <Grid item>
        <Typography variant="h6" style={{ fontWeight: 'bold' }}>
          <Grid container alignItems="center" spacing={3}>
            <Grid item />
            <Icon>
              <SentimentSatisfied />
            </Icon>
            <Grid item>Sugestões</Grid>
          </Grid>
        </Typography>
      </Grid>

      <Grid item container style={{ marginTop: 16 }} spacing={6}>
        {mocks.map(mock => (
          <Grid item key={mock.id}>
            <MockCard mock={mock} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
