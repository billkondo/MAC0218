import React from 'react';
import ReactDOM from 'react-dom';
import {
  Grid,
  CssBaseline,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Hidden
} from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import {
  Home,
  TypeSelection,
  SignIn,
  SignUp,
  MultipleChoice,
  Profile,
  Navbar,
  Problems,
  PracticeProblem,
  Write,
  Drawer,
  colors
} from '../components';
import { routes } from '../config';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    background: 'linear-gradient(#ffcdd2, #c5cae9)'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

const App = ({ isAuth, container }) => {
  const classes = useStyles();
  const theme = useTheme();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.root}>
      <BrowserRouter>
        <CssBaseline />

        <Navbar
          isAuth={isAuth}
          classes={classes}
          handleDrawerToggle={handleDrawerToggle}
        />

        <Drawer
          classes={classes}
          container={container}
          theme={theme}
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        />

        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/problems" component={Problems} />
            <Route exact path="/practice/:id" component={PracticeProblem} />
            <Route exact path="/create_problem/" component={TypeSelection} />
            {isAuth ? (
              <Route
                exact
                path={routes.multiple_choice_form}
                component={MultipleChoice.Create}
              />
            ) : (
              <Route
                exact
                path={routes.multiple_choice_form}
                component={SignIn}
              />
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
            <Route path={routes.write_form} component={Write.Create} />
            <Route path="/problems/write/:id" component={Write.Read} />
          </Switch>
        </main>
      </BrowserRouter>
    </div>
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
