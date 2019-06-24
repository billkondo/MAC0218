import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import { Services } from '../../../services';
import {
  Typography,
  Grid
} from '@material-ui/core';

const _Read = ({ location }) => {
  const [mock, setMock] = useState([]);

  useEffect(() => {
    const pathname = location.pathname
    const id = pathname.substring(pathname.lastIndexOf('/') + 1)
    console.log("id", id)
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
      style={{ minHeight: '100vh' }}>
      
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
    </Grid>
  )
};

export const Read = withRouter(_Read);