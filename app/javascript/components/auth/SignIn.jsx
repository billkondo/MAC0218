import React from 'react';
import axios from 'axios';
import { Grid, Paper, Typography, TextField, Button } from '@material-ui/core';

class SignIn extends React.Component {
  state = {
    email: '',
    password: ''
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

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
        console.log(res);
        window.location.reload();
      })
      .catch(err => console.log(err));
  };

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
          <Paper elevation={4}>
            <Grid container direction="column" spacing={24}>
              <Grid item>
                <Typography variant="h6" align="center">
                  Sign in to MAC0218
                </Typography>
              </Grid>

              <Grid item>
                <form style={{ padding: 32 }}>
                  <Grid container direction="column" spacing={32}>
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
                </form>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default SignIn;
