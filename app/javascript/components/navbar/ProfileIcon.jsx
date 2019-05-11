import React from 'react';
import { Button, Menu, MenuItem, IconButton, colors } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

import { routes } from '../../config';

class ProfileIcon extends React.Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleLogout = () => {
    // TODO: handle this part outside of this component
    axios({
      method: 'GET',
      url: '/users/sign_out/',
      headers: {
        'X-CSRF-Token': document.querySelector('meta[name=csrf-token]').content
      }
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <IconButton
          aria-owns={anchorEl ? 'navbar-icon-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
          style={{ color: colors.grey[50] }}
        >
          <AccountCircle />
        </IconButton>
        <Menu
          id="navbar-icon-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <NavLink
            to={routes.user_profile}
            style={{ textDecoration: 'none' }}
            activeStyle={{ textDecoration: 'none', border: 'none' }}
          >
            <MenuItem onClick={this.handleClose}>Profile</MenuItem>
          </NavLink>

          <a href={routes.sign_out} style={{ textDecoration: 'none' }}>
            <MenuItem>Logout</MenuItem>
          </a>
        </Menu>
      </div>
    );
  }
}

export default ProfileIcon;
