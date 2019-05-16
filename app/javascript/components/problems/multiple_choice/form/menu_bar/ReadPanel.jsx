import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

import { routes } from '../../../../../config';

const _ReadPanel = ({ isOwner, history, id }) => {
  if (!isOwner) return null;

  const onEdit = () => {
    history.push(routes.edit_multiple_choice(id));
  };

  return (
    <React.Fragment>
      <Grid item>
        <Button variant="contained" onClick={onEdit}>
          Editar
        </Button>
      </Grid>

      <Grid item>
        <Button variant="contained">Deletar</Button>
      </Grid>
    </React.Fragment>
  );
};

export const ReadPanel = withRouter(_ReadPanel);
