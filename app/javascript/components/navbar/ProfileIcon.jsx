import React from 'react';
import { Button, Menu, MenuItem, IconButton, colors } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import axios from 'axios';

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
          <MenuItem onClick={this.handleClose}>Profile</MenuItem>
          <MenuItem onClick={this.handleClose}>My account</MenuItem>
          <a href="/users/sign_out/" style={{ textDecoration: 'none' }}>
            <MenuItem>Logout</MenuItem>
          </a>
        </Menu>
      </div>
    );
  }
}

export default ProfileIcon;
