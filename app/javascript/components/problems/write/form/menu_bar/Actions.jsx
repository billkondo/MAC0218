import React from 'react';
import { Grid, Button, Grow, colors } from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';

const Create = ({ mode, submitQuestion }) => {
  if (mode !== 'CREATE') return null;

  return (
    <Grid item>
      <Grow in={true}>
        <Button
          variant="contained"
          onClick={submitQuestion}
          style={{
            background: colors.green.A700,
            color: colors.grey[50],
            fontWeight: 'bold'
          }}
        >
          Criar
        </Button>
      </Grow>
    </Grid>
  );
};

const Read = ({ mode }) => {
  if (mode !== 'READ') return null;

  return (
    <React.Fragment>
      <Grid item>
        <Grow in={true}>
          <Button variant="contained">
            <Edit style={{ marginRight: 8 }} />
            Editar
          </Button>
        </Grow>
      </Grid>
      <Grid item>
        <Grow in={true}>
          <Button variant="contained">
            <Delete style={{ marginRight: 8 }} />
            Deletar
          </Button>
        </Grow>
      </Grid>
    </React.Fragment>
  );
};

export const Actions = ({ submitQuestion, mode }) => {
  return (
    <Grid container justify="flex-end" alignItems="center" spacing={3}>
      <Create mode={mode} submitQuestion={submitQuestion} />
      <Read mode={mode} />
    </Grid>
  );
};
