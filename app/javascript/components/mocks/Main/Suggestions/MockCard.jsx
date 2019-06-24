import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Grid,
  Typography,
  TextField,
  Button
} from '@material-ui/core';
import { Link } from 'react-router-dom';

import { routes } from '../../../../config';

export const MockCard = ({ mock }) => {
  return (
    <Card style={{ width: 300, height: 300 }} elevation={4}>
      <CardContent>
        <Grid container direction="column">
          <Grid item style={{ padding: 8 }}>
            <Typography variant="h6" style={{ fontWeight: 'bold' }}>
              {mock.title}
            </Typography>
          </Grid>

          <Grid item>
            <TextField
              value={mock.description}
              multiline
              fullWidth
              InputProps={{ readOnly: true }}
              variant="outlined"
              rows={6}
            />
          </Grid>

          <Grid item style={{ paddingTop: 24 }} container justify="flex-end">
            <Link
              to={routes.mocks.read(mock.id)}
              style={{ textDecoration: 'none' }}
            >
              <Button variant="contained">Ver</Button>
            </Link>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
