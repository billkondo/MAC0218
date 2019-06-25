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
  Hidden,
  colors
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
  Groups,
  Mocks
} from '../components';
import { routes } from '../config';

const drawerWidth = 200;

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
    zIndex: theme.zIndex.drawer + 1
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
    flexShrink: 0,
    background: colors.grey[200]
  },
  content: {
    flexGrow: 1
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
          drawerWidth={drawerWidth}
        />

        {isAuth && (
          <Drawer
            classes={classes}
            container={container}
            theme={theme}
            mobileOpen={mobileOpen}
            handleDrawerToggle={handleDrawerToggle}
          />
        )}

        <main className={classes.content} style={{ marginBottom: 64 }}>
          <div className={classes.toolbar} style={{ marginBottom: 32 }} />
          <Switch>
            <Route
              exact
              path={routes.home}
              render={() => <Home isAuth={isAuth} />}
            />
            <Route exact path="/practice/:id" component={PracticeProblem} />
            <Route
              exact
              path={routes.problems.create_select_type}
              component={TypeSelection}
            />
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
            <Route exact path={routes.profile.main} component={Profile.Main} />
            <Route exact path={routes.profile.edit} component={Profile.Edit} />
            <Route
              exact
              path={routes.problems.multiple_choice.read(':id')}
              component={MultipleChoice.Read}
            />
            <Route
              path="/edit_problem/multiple_choice/:id"
              component={MultipleChoice.Edit}
            />
            <Route path={routes.write_form} component={Write.Create} />
            <Route
              exact
              path={routes.problems.write.read(':id')}
              component={Write.Read}
            />

            <Route exact path={routes.groups.main} component={Groups.Main} />
            <Route
              exact
              path={routes.groups.create}
              component={Groups.Create}
            />
            <Route path={routes.groups.read(':id')} component={Groups.Read} />
            <Route
              path={routes.groups.blog.create(':group_id')}
              component={Groups.Blog.Create}
            />
            <Route
              path={routes.groups.blog.read(':group_id', ':blog_id')}
              component={Groups.Blog.Read}
            />

            <Route exact path={routes.mocks.main} component={Mocks.Main} />
            <Route exact path={routes.mocks.create} component={Mocks.Create} />
            <Route path="/mocks/read/:id" component={Mocks.Read} />

            <Route
              path={routes.problems.main('', false)}
              component={Problems.Main}
            />
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
