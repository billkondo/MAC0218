import React from 'react';
import { Button, Menu, MenuItem, IconButton, colors } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import { routes } from '../../config';

class ProfileIcon extends React.Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = e => {
    const name = e.target.getAttribute('name');
    this.setState({ anchorEl: null });

    console.log(name);

    switch (name) {
      case 'profile': {
        this.props.history.push(routes.user_profile);
        break;
      }
      case 'sign-out': {
        window.location.href = routes.sign_out;
        // this.props.history.push(routes.sign_out);
        break;
      }
    }
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
          <MenuItem onClick={this.handleClose} name="profile">
            Perfil
          </MenuItem>

          <MenuItem onClick={this.handleClose} name="sign-out">
            Sair
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

export default withRouter(ProfileIcon);
