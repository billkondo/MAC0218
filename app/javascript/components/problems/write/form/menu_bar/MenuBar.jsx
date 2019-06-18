import React from 'react';
import { Grid, TextField, Grow } from '@material-ui/core';

import { Actions } from './Actions';

export const MenuBar = ({ handleChange, title, submitQuestion, mode }) => {
  return (
    <Grid container direction="row-reverse" alignItems="center" spacing={2}>
      <Grid item style={{ flex: 1 }}>
        <Actions submitQuestion={submitQuestion} mode={mode} />
      </Grid>

      <Grid item xs={12} md={4}>
        <Grow in={true}>
          <TextField
            value={title}
            onChange={handleChange}
            name="title"
            fullWidth
            variant={'outlined'}
            label="Título"
            InputProps={{
              readOnly: mode === 'READ' ? true : false
            }}
          />
        </Grow>
      </Grid>
    </Grid>
  );
};
