import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Typography,
  Toolbar,
  colors,
  Grid,
  IconButton
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';

import ProfileIcon from './ProfileIcon';
import Registration from './Registration';

class Navbar extends React.Component {
  render() {
    const { isAuth, classes, handleDrawerToggle } = this.props;

    return (
      <AppBar
        position="fixed"
        style={{
          background: 'linear-gradient(#e57373, #ef5350)'
        }}
        className={classes.appBar}
        elevation={0}
      >
        <Toolbar>
          <Grid container alignItems="center">
            <Grid item>
              <IconButton
                className={classes.menuButton}
                onClick={handleDrawerToggle}
                style={{ color: colors.grey[50] }}
              >
                <Menu />
              </IconButton>
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
