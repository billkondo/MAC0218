import React from 'react';
import { Grid, TextField, Button } from '@material-ui/core';

export const MenuBar = ({
  title,
  handleChange,
  inEditMode = false,
  onSubmit
}) => (
  <Grid container alignItems="flex-start" direction="row-reverse">
    <Grid item style={{ flex: 1, paddingBottom: 32 }}>
      <Grid container justify="flex-end">
        <Grid item>
          <Button onClick={onSubmit} size="large" variant="contained">
            {inEditMode ? 'Editar' : 'Criar'}
          </Button>
        </Grid>
      </Grid>
    </Grid>

    <Grid item xs={12} md={4}>
      <TextField
        label={'Título'}
        variant="outlined"
        name="title"
        value={title}
        onChange={handleChange}
        fullWidth
      />
    </Grid>
  </Grid>
);
