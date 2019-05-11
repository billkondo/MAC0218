import React from 'react';
import { Grid } from '@material-ui/core';

import { PersonalInfo } from './personal_info';
import { ProfileMenu } from './menu';

const Profile = () => (
  <Grid container style={{ minWidth: 300 }} spacing={32}>
    <Grid item md={4} xs={12}>
      <PersonalInfo />
    </Grid>

    <Grid item md={8} xs={12}>
      <ProfileMenu />
    </Grid>
  </Grid>
);

export default Profile;
