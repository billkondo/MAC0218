import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, CssBaseline } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home, TypeSelection, SignIn } from '../components';

const App = ({ isAuth }) => (
  <BrowserRouter>
    <CssBaseline />

    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/create_problem/" component={TypeSelection} />
      <Route exact path="/sign-in/" component={SignIn} />
    </Switch>
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
