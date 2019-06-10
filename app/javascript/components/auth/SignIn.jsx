import React from 'react';
import axios from 'axios';
import {
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  Grow
} from '@material-ui/core';
import { routes } from '../../config';
import { Message } from '../';

class SignIn extends React.Component {
  state = {
    email: '',
    password: '',
    open: false,
    message: ''
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  toggleMenu = () => {
    this.setState({ open: false });
  };

  submit = () => {
    axios({
      method: 'POST',
      url: '/users/sign_in',
      headers: {
        'X-CSRF-Token': document.querySelector('meta[name=csrf-token]').content
      },
      data: {
        user: {
          email: this.state.email,
          password: this.state.password,
          remember_me: 0
        },
        authenticity_token: this.props.authToken,
        commit: 'Log in',
        utf8: '✓'
      }
    })
      .then(res => {
        const isUserSignedIn = res.data.includes('user-signed-in="true"');
        if (isUserSignedIn) window.location.href = routes.home;
        else this.setState({ open: true });
        this.setState({ message: 'E-mail ou senha errado.' });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Message
          open={this.state.open}
          mensagem={this.state.message}
          toggleMenu={this.toggleMenu}
        />
        <Grid
          container
          justify="center"
          spacing={4}
          style={{
            position: 'absolute',
            top: '25%'
          }}
        >
          <Grid item md={6} xs={10}>
            <Grow in={true}>
              <Paper elevation={4}>
                <form style={{ padding: 32 }}>
                  <Grid container direction="column" spacing={3}>
                    <Grid item>
                      <Typography variant="h6" align="center">
                        Sign in to MAC0218
                      </Typography>
                    </Grid>

                    <Grid item>
                      <Grid container direction="column" spacing={4}>
                        <Grid item>
                          <TextField
                            label="Email"
                            variant="outlined"
                            fullWidth
                            name="email"
                            onChange={this.handleChange}
                            value={this.state.email}
                          />
                        </Grid>

                        <Grid item>
                          <TextField
                            label="Password"
                            type="password"
                            variant="outlined"
                            fullWidth
                            name="password"
                            onChange={this.handleChange}
                            value={this.state.password}
                          />
                        </Grid>

                        <Grid item>
                          <Button
                            variant="contained"
                            fullWidth
                            onClick={this.submit}
                          >
                            Submit
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </form>
              </Paper>
            </Grow>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default SignIn;
