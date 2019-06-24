import React, { useState, useEffect } from 'react';
import { Grid, Typography, Icon } from '@material-ui/core';
import { SentimentSatisfied } from '@material-ui/icons';
import { MockCard } from './MockCard';
import { routes } from '../../../../config';
import { Services } from '../../../../services'


export const Suggestions = () => {
  // TODO: make request to get mocks
  const [mocks, setMocks] = useState([]);

  useEffect(()=> {
    Services.Api.Mock.get_all_mocks()
    .then(res => {
      setMocks(res.data.mocks)
    })
    .catch(err => console.log(err));
  }, [])

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
