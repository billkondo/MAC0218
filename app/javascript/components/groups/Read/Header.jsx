import React from 'react';
import { Grid, TextField, Typography, Button, colors } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { routes } from '../../../config';

export const Header = ({ title, description, id }) => {
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item xs={12} style={{ fontWeight: 'bold' }}>
        <Typography variant="h6" style={{ fontWeight: 'bold' }}>
          {title}
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <TextField
          value={description}
          InputProps={{
            readOnly: true
          }}
          multiline
          variant="outlined"
          fullWidth
        />
      </Grid>

      <Grid item xs={12} container justify="flex-end">
        <Link
          to={routes.groups.blog.create(id)}
          style={{ textDecoration: 'none' }}
        >
          <Button
            variant="contained"
            style={{
              background: colors.green.A700,
              color: colors.grey[50],
              fontWeight: 'bold'
            }}
          >
            Criar um post
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};
