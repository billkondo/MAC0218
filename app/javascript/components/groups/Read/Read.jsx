import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { withRouter } from 'react-router';

import { Header } from './Header';
import { Blogs } from './Blogs';
import { Services } from '../../../services';

// TODO set errors
const _Read = ({ match }) => {
  const [group, setGroup] = useState({
    title: 'title',
    description: '',
    id: '',
    status: ''
  });

  useEffect(() => {
    const { id } = match.params;

    Services.Api.Groups.get_group(id)
      .then(res => {
        const { group, status } = res.data;

        if (status === 'OK') {
          setGroup(group);
        }
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <Grid container direction="column">
      <Grid item xs={12} container justify="center">
        <Grid item xs={10} md={6}>
          <Header
            title={group.title}
            description={group.description}
            id={group.id}
          />
        </Grid>
      </Grid>

      <Grid item xs={12} container justify="center" style={{ marginTop: 64 }}>
        <Grid item xs={10} md={6}>
          <Blogs group_id={group.id} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export const Read = withRouter(_Read);
