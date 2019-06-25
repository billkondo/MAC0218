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

import { routes } from '../../config';
import ProfileIcon from './ProfileIcon';
import Registration from './Registration';

class Navbar extends React.Component {
  render() {
    const { isAuth, classes, handleDrawerToggle, drawerWidth } = this.props;

    return (
      <AppBar
        position="fixed"
        style={{
          background: 'linear-gradient(#e57373, #ef5350)'
        }}
        className={classes.appBar}
        elevation={4}
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

            <Grid item style={{ width: drawerWidth }}>
              <Link to={routes.home} style={{ textDecoration: 'none' }}>
                <Typography
                  variant="h6"
                  style={{ fontWeight: 'bold', color: colors.grey[50] }}
                >
                  SimuVest
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
