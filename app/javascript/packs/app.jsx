import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, CssBaseline } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import {
  Home,
  TypeSelection,
  SignIn,
  SignUp,
  MultipleChoice,
  Profile,
  Navbar
} from '../components';
import { routes } from '../config';

const App = ({ isAuth }) => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Navbar isAuth={isAuth} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/create_problem/" component={TypeSelection} />
        {isAuth ? (
          <Route
            exact
            path={routes.multiple_choice_form}
            component={MultipleChoice.Create}
          />
        ) : (
          <Route exact path={routes.multiple_choice_form} component={SignIn} />
        )}
        <Route exact path="/sign-in/" component={SignIn} />
        <Route exact path="/sign-up/" component={SignUp} />
        <Route exact path={routes.user_profile} component={Profile} />
        <Route
          path="/problems/multiple_choice/:id"
          component={MultipleChoice.Read}
        />
        <Route
          path="/edit_problem/multiple_choice/:id"
          component={MultipleChoice.Edit}
        />
      </Switch>
    </BrowserRouter>
  );
};

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
