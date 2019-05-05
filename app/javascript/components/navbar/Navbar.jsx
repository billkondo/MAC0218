import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AppBar, Typography, Toolbar, colors, Grid } from '@material-ui/core';

import ProfileIcon from './ProfileIcon';
import Registration from './Registration';

class Navbar extends React.Component {
  render() {
    const { isAuth } = this.props;

    return (
      <AppBar
        position="static"
        style={{
          background: colors.red[400]
        }}
      >
        <Toolbar>
          <Grid container alignItems="center">
            <Grid item>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <Typography variant="h6" style={{ color: colors.grey[50] }}>
                  MAC0218
                </Typography>
              </Link>
            </Grid>

            <Grid item style={{ flex: 1 }}>
              <Grid container justify="flex-end">
                {isAuth ? <ProfileIcon /> : <Registration />}
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

Navbar.propTypes = {
  isAuth: propTypes.bool.isRequired
};

export default Navbar;
