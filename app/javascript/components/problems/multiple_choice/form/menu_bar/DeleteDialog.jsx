import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Button,
  Typography
} from '@material-ui/core';
import { withRouter } from 'react-router';
import { routes } from '../../../../../config';

import { Services } from '../../../../../services';

const _DeleteDialog = ({ isOpen, onCloseDialog, id, history }) => {
  const deleteProblem = () => {
    Services.Api.MultipleChoice.delete_multiple_choice(id)
      .then(res => {
        console.log(res);
        history.push(routes.user_profile);
      })
      .catch(err => console.log(err));
  };

  return (
    <Dialog open={isOpen} onClose={onCloseDialog}>
      <DialogTitle>Deleções são permanentes!</DialogTitle>
      <DialogContent>
        <Typography variant="body1">
          O problema será deletado permanentemente e todos os seus dados serão
          perdidos.
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCloseDialog}>Cancelar</Button>
        <Button onClick={deleteProblem}>Deletar</Button>
      </DialogActions>
    </Dialog>
  );
};

export const DeleteDialog = withRouter(_DeleteDialog);
