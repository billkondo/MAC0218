import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, CssBaseline } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home, TypeSelection, SignIn, MultipleChoice } from '../components';
import { routes } from '../config';

const App = ({ isAuth }) => (
  <BrowserRouter>
    <CssBaseline />

    <Grid container justify="center" style={{ marginTop: 64 }}>
      <Grid item xs={10} md={8}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/create_problem/" component={TypeSelection} />
          <Route
            exact
            path={routes.multipleChoiceForm}
            component={MultipleChoice.Form}
          />
          <Route exact path="/sign-in/" component={SignIn} />
        </Switch>
      </Grid>
    </Grid>
  </BrowserRouter>
);

document.addEventListener('DOMContentLoaded', () => {
  const isUserSignedIn =
    document
      .getElementById('app-data')
      .getAttribute('data-is-user-signed-in') === 'true';

  ReactDOM.render(
    <App isAuth={isUserSignedIn} />,
    document.getElementById('root')
  );
});
