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
                      Create account
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
                      label="Password"
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
                      label="Password Confirmation"
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
                    <Button variant="contained" fullWidth onClick={this.submit}>
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grow>
        </Grid>
      </Grid>
    );
  }
}

export default withRouter(SignUp);
