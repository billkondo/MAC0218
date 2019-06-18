import React, { useEffect, useState } from 'react';
import { Grid, Typography, Avatar, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { routes } from '../../../config';
import { Services } from '../../../services';

const PersonalInfo = ({ name = 'Menino Maluquinho' }) => {
  const [_username, setUsername] = useState('');
  const [_name, setName] = useState('');

  useEffect(() => {
    Services.Api.profile
      .get_public_profile()
      .then(res => {
        const { username } = res.data;
        setUsername(username);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <Grid container direction="column" spacing={4} alignItems="center">
      <Grid item>
        <Avatar style={{ height: 200, width: 200 }} />
      </Grid>

      <Grid item container direction="column" spacing={1}>
        {!!_name && (
          <Grid item>
            <Typography variant="h5" align="center">
              {name}
            </Typography>
          </Grid>
        )}

        {!!_username && (
          <Grid item>
            <Typography
              variant="h6"
              align="center"
              style={{ fontWeight: 'bold' }}
            >
              {'@' + _username}
            </Typography>
          </Grid>
        )}
      </Grid>

      <Grid item>
        <Link to={routes.profile.edit} style={{ textDecoration: 'none' }}>
          <Button variant="outlined">Editar Perfil</Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default PersonalInfo;
