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
import { MoveToInbox as InboxIcon, Mail as MailIcon } from '@material-ui/icons';

export const AppDrawer = ({
  classes,
  container,
  theme,
  mobileOpen,
  handleDrawerToggle
}) => {
  const drawer = (
    <div>
      <Grid container className={classes.toolbar} alignItems="center">
        <Grid item container direction="column" justify="center">
          <Typography
            variant="h5"
            align="center"
            style={{ color: colors.grey[500], fontWeight: 'bold' }}
          >
            MAC0218
          </Typography>
        </Grid>
      </Grid>
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
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
