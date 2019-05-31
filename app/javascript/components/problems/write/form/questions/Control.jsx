import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { Add } from '@material-ui/icons';

export const Control = ({ openEditor }) => {
  return (
    <Grid container direction="row-reverse">
      <Grid item>
        <Button variant="contained" onClick={openEditor}>
          <Add style={{ marginRight: 8 }} />
          Adicionar Pergunta
        </Button>
      </Grid>
    </Grid>
  );
};
