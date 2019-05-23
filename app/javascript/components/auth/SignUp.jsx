import React from 'react';
import axios from 'axios';
import {
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  Fade
} from '@material-ui/core';

import { routes } from '../../config';
import { Services } from '../../services';

class SignUp extends React.Component {
  state = {
    email: '',
    password: '',
    password_confirmation: ''
  };

  submit = () => {
    const { username, email, password, password_confirmation } = this.state;
    Services.Api.Auth.sign_up({
      username,
      email,
      password,
      password_confirmation
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <Grid
        container
        justify="center"
        spacing={32}
        style={{
          position: 'absolute',
          top: '25%'
        }}
      >
        <Grid item md={6} xs={10}>
          <Fade in={true}>
            <Paper elevation={4}>
              <form style={{ padding: 32 }}>
                <Grid container direction="column" spacing={24}>
                  <Grid item>
                    <Typography variant="h6" align="center">
                      Create account
                    </Typography>
                  </Grid>

                  <Grid item>
                    <TextField
                      label="Email"
                      name="email"
                      variant="outlined"
                      fullWidth
                      onChange={this.handleChange}
                      value={this.state.email}
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
          </Fade>
        </Grid>
      </Grid>
    );
  }
}

export default SignUp;
