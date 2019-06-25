import React from 'react';
import axios from 'axios';
import {
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  Grow,
  colors,
  Box
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import { routes } from '../../config';
import { Services } from '../../services';

class SignUp extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
    errors: {}
  };

  submit = () => {
    const { history } = this.props;
    const { username, email, password, password_confirmation } = this.state;
    Services.Api.Auth.sign_up({
      username,
      email,
      password,
      password_confirmation
    })
      .then(res => {
        const { errors, status } = res.data;

        if (status === 'OK') {
          window.location = routes.home;
        } else if (status === 'ERROR_AUTH') {
          this.setState({ errors });
        } else {
          // TODO handle error
        }
      })
      .catch(err => console.log(err));
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { errors } = this.state;

    return (
      <Grid container justify="center">
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
                        Criar conta
                      </Typography>
                    </Grid>

                    <Grid item>
                      <TextField
                        label="Username"
                        name="username"
                        variant="outlined"
                        fullWidth
                        onChange={this.handleChange}
                        value={this.state.username}
                        error={!!errors.username}
                        helperText={errors.username}
                      />
                    </Grid>

                    <Grid item>
                      <TextField
                        label="Email"
                        name="email"
                        variant="outlined"
                        fullWidth
                        onChange={this.handleChange}
                        value={this.state.email}
                        error={!!errors.email}
                        helperText={errors.email}
                      />
                    </Grid>

                    <Grid item>
                      <TextField
                        label="Senha"
                        name="password"
                        variant="outlined"
                        fullWidth
                        type="password"
                        onChange={this.handleChange}
                        value={this.state.password}
                        error={!!errors.password}
                        helperText={errors.password}
                      />
                    </Grid>

                    <Grid item>
                      <TextField
                        label="Confirmação de senha"
                        name="password_confirmation"
                        variant="outlined"
                        fullWidth
                        type="password"
                        onChange={this.handleChange}
                        value={this.state.password_confirmation}
                        error={!!errors.password_confirmation}
                        helperText={errors.password_confirmation}
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
                        Criar
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Paper>
            </Grow>
          </Grid>
        </Grid>

        <Grid item xs={12} container justify="center" style={{ marginTop: 32 }}>
          <Grid item xs={10} md={6}>
            <Link to={routes.sign_in}>
              <Typography align="center"> Já possuo conta </Typography>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withRouter(SignUp);
