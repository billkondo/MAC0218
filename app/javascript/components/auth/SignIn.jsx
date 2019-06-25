import React from 'react';
import axios from 'axios';
import {
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  colors,
  Grow,
  Box
} from '@material-ui/core';
import { Link } from 'react-router-dom';

import { Message } from '../message';
import { routes } from '../../config';

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
        <Grid container direction="column">
          <Grid item xs={12} container justify="center">
            <Grid item md={6} xs={10}>
              <Grow in={true}>
                <Paper elevation={8} style={{ marginTop: 32 }}>
                  <form style={{ padding: 32 }}>
                    <Grid container direction="column" spacing={3}>
                      <Grid item>
                        <Typography
                          variant="h6"
                          align="center"
                          style={{ fontWeight: 'bold' }}
                        >
                          Entrar em SimuVest
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
                              label="Senha"
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
                              style={{
                                background: colors.green.A700,
                                color: colors.grey[50],
                                fontWeight: 'bold'
                              }}
                            >
                              Entrar
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

          <Grid
            item
            xs={12}
            container
            justify="center"
            style={{ marginTop: 64 }}
          >
            <Grow in={true}>
              <Grid item xs={10} md={6}>
                <Box border={0.5} borderRadius={5} p={3}>
                  <Grid container spacing={4} justify="center">
                    <Grid item>
                      <Box fontWeight="bold">
                        <Typography variant="body1">
                          Novo no SimuVest?
                        </Typography>
                      </Box>
                    </Grid>

                    <Grid item>
                      <Link to={routes.sign_up}>
                        <Typography
                          variant="body1"
                          style={{ fontWeight: 'bold' }}
                        >
                          Criar conta
                        </Typography>
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grow>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default SignIn;
