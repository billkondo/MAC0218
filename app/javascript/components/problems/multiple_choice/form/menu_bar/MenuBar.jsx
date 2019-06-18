import React from 'react';
import { Grid, TextField, Button, colors } from '@material-ui/core';

import { ReadPanel } from './ReadPanel';

const Panel = ({ mode, onSubmit, isOwner, id }) => {
  switch (mode) {
    case 'create':
      return (
        <Grid item>
          <Button
            onClick={onSubmit}
            size="large"
            variant="contained"
            style={{
              background: colors.green.A700,
              color: colors.grey[50],
              fontWeight: 'bold'
            }}
          >
            CRIAR
          </Button>
        </Grid>
      );

    case 'edit':
      return (
        <Grid item>
          <Button onClick={onSubmit} size="large" variant="contained">
            SALVAR
          </Button>
        </Grid>
      );

    case 'read':
      return <ReadPanel isOwner={isOwner} id={id} />;
  }
};

export const MenuBar = ({
  title,
  handleChange,
  mode,
  onSubmit,
  isOwner,
  id,
  error
}) => {
  return (
    <Grid container alignItems="flex-start" direction="row-reverse">
      <Grid item style={{ flex: 1, paddingBottom: 32 }}>
        <Grid container justify="flex-end" spacing={4}>
          <Panel mode={mode} onSubmit={onSubmit} isOwner={isOwner} id={id} />
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
          InputProps={{
            readOnly: mode === 'read'
          }}
          error={!!error}
          helperText={error}
        />
      </Grid>
    </Grid>
  );
};
