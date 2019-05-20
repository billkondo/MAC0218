import React, { useState } from 'react';
import { Grid, Button, Icon } from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';
import { withRouter } from 'react-router-dom';

import { routes } from '../../../../../config';
import { DeleteDialog } from './DeleteDialog';

const _ReadPanel = ({ isOwner, history, id }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!isOwner) return null;

  const onEdit = () => {
    history.push(routes.edit_multiple_choice(id));
  };

  const onDelete = () => {
    setIsOpen(true);
  };

  const onCloseDialog = () => {
    setIsOpen(false);
  };

  return (
    <React.Fragment>
      <Grid item>
        <Button variant="contained" onClick={onEdit}>
          <Icon style={{ marginRight: 8 }}>
            <Edit />
          </Icon>
          Editar
        </Button>
      </Grid>

      <Grid item>
        <Button variant="contained" onClick={onDelete}>
          <Icon style={{ marginRight: 8 }}>
            <Delete />
          </Icon>
          Deletar
        </Button>
      </Grid>

      <DeleteDialog isOpen={isOpen} onCloseDialog={onCloseDialog} id={id} />
    </React.Fragment>
  );
};

export const ReadPanel = withRouter(_ReadPanel);
