import React from 'react';
import {
  Drawer,
  List,
  Divider,
  Hidden,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  colors,
  Grid
} from '@material-ui/core';
import { EditOutlined, GroupOutlined, NoteOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';

import { routes } from '../../config';

const LinkTextStyle = {
  fontWeight: 'bold',
  color: colors.grey[900]
};

const CustomLinkText = ({ text }) => {
  return (
    <ListItemText
      primary={
        <Typography variant="body1" style={LinkTextStyle}>
          {text}
        </Typography>
      }
    />
  );
};

export const AppDrawer = ({
  classes,
  container,
  theme,
  mobileOpen,
  handleDrawerToggle
}) => {
  const drawer = (
    <div>
      <Grid
        container
        className={classes.toolbar}
        alignItems="center"
        style={{
          background: 'linear-gradient(#880e4f, #b71c1c)'
        }}
      >
        <Grid item container direction="column" justify="center">
          <Link to={routes.home} style={{ textDecoration: 'none' }}>
            <Typography
              variant="h5"
              align="center"
              style={{ color: colors.grey[50], fontWeight: 'bold' }}
            >
              SimuVest
            </Typography>
          </Link>
        </Grid>
      </Grid>

      <List>
        <Link to={routes.problems.main} style={{ textDecoration: 'none' }}>
          <ListItem button>
            <ListItemIcon>
              <EditOutlined />
            </ListItemIcon>
            <CustomLinkText text="Problemas" />
          </ListItem>
        </Link>

        <Link to={routes.groups.main} style={{ textDecoration: 'none' }}>
          <ListItem button>
            <ListItemIcon>
              <GroupOutlined />
            </ListItemIcon>
            <CustomLinkText text="Grupos" />
          </ListItem>
        </Link>

        <Link to={routes.mocks.main} style={{ textDecoration: 'none' }}>
          <ListItem button>
            <ListItemIcon>
              <NoteOutlined />
            </ListItemIcon>
            <CustomLinkText text="Simulados" />
          </ListItem>
        </Link>
      </List>

      <Divider />
    </div>
  );

  return (
    <nav className={classes.drawer} aria-label="Mailbox folders">
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden smUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper
          }}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
};
