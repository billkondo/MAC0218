import React from 'react';
import { Grid } from '@material-ui/core';

import { PersonalInfo } from './personal_info';
import { ProfileMenu } from './menu';

const Profile = () => (
  <div style={{ padding: 8 }}>
    <Grid container spacing={2}>
      <Grid item md={4} xs={12}>
        <PersonalInfo />
      </Grid>

      <Grid item md={8} xs={12}>
        <ProfileMenu />
      </Grid>
    </Grid>
  </div>
);

export default Profile;
