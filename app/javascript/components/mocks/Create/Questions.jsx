import React, { useState } from 'react';
import { Grid, Typography, IconButton } from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';

import { List } from './List';
import { Menu } from './Menu';

export const Questions = ({ problems, add, remove}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  return (
    <Grid container direction="column" spacing={4}>
      <Grid item container alignItems="center" spacing={4}>
        <Grid item>
          <Typography variant="body1">Problemas</Typography>
        </Grid>

        <Grid item>
          <IconButton onClick={openMenu}>
            <AddCircle />
          </IconButton>
        </Grid>
      </Grid>

      <Grid item>
        <List problems={problems}/>
      </Grid>

      <Menu isOpen={isOpen} close={closeMenu} problems={problems} add={add} remove={remove}/>
    </Grid>
  );
};
