import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import { Services } from '../../../services';
import {
  Typography,
  Grid,
  Button,
  colors
} from '@material-ui/core';

const _Read = ({ location }) => {
  const [mock, setMock] = useState([]);
  const [startMock, setStartMock] = useState(false);

  useEffect(() => {
    const pathname = location.pathname
    const id = pathname.substring(pathname.lastIndexOf('/') + 1)
    Services.Api.Mock.get_mock(id)
      .then(res => {
        const { mock } = res.data;
        setMock(mock)
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '20vh' }}>
      
      <Grid item xs={3}>
        <Typography variant="h3" align="center">
          {mock.title}
        </Typography>
      </Grid>  

      <Grid item xs={10}>
        <Typography variant="h6" align="center">
          {mock.description}
        </Typography>
      </Grid>  
      <Button 
        variant="contained"
        style={{
          fontWeight: 'bold',
          background: colors.green.A700,
          color: colors.grey[50]
        }}
        onClick={() => setStartMock(true)}>
          Começar!
      </Button>
      <h1>
        {startMock ? "True" : "FALSE"}
      </h1>
    </Grid>
  )
};

export const Read = withRouter(_Read);