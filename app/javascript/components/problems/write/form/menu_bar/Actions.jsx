import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';

const Create = ({ mode, submitQuestion }) => {
  if (mode !== 'CREATE') return null;

  return (
    <Grid item>
      <Button variant="contained" onClick={submitQuestion}>
        Criar
      </Button>
    </Grid>
  );
};

const Read = ({ mode }) => {
  if (mode !== 'READ') return null;

  return (
    <React.Fragment>
      <Grid item>
        <Button variant="contained">
          <Edit style={{ marginRight: 8 }} />
          Editar
        </Button>
      </Grid>
      <Grid item>
        <Button variant="contained">
          <Delete style={{ marginRight: 8 }} />
          Deletar
        </Button>
      </Grid>
    </React.Fragment>
  );
};

export const Actions = ({ submitQuestion, mode }) => {
  return (
    <Grid container justify="flex-end" alignItems="center" spacing={24}>
      <Create mode={mode} submitQuestion={submitQuestion} />
      <Read mode={mode} />
    </Grid>
  );
};
