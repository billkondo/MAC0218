import React from 'react';
import { Grid, Button, Icon } from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';
import { withRouter } from 'react-router-dom';

import { routes } from '../../../../../config';

const _ReadPanel = ({ isOwner, history, id }) => {
  if (!isOwner) return null;

  const onEdit = () => {
    history.push(routes.edit_multiple_choice(id));
  };

  const onDelete = () => {
    console.log('delete');
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
    </React.Fragment>
  );
};

export const ReadPanel = withRouter(_ReadPanel);
