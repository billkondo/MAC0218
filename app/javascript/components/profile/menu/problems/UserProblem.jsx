import React from 'react';
import {
  Grid,
  Typography,
  TextField,
  Card,
  CardActions,
  CardContent,
  IconButton,
  CardHeader,
  colors
} from '@material-ui/core';
import { FavoriteBorder, Edit, Visibility } from '@material-ui/icons';
import { Link } from 'react-router-dom';

import { routes } from '../../../../config';

const UserProblem = ({ problem }) => (
  <Card>
    <CardContent>
      <Grid container direction="column" spacing={24}>
        <Grid item>
          <Link
            to={routes.read_multiple_problem(problem.id)}
            style={{ textDecoration: 'none' }}
          >
            <Typography variant="body1" style={{ color: colors.blue[500] }}>
              {problem.title}
            </Typography>
          </Link>
        </Grid>

        <Grid item>
          <TextField
            value={problem.statement}
            fullWidth
            multiline
            InputProps={{ readOnly: true }}
            variant="outlined"
          />
        </Grid>
      </Grid>
    </CardContent>

    <CardActions>
      <Grid container justify="flex-end" spacing={16}>
        <Grid item>
          <IconButton>
            <FavoriteBorder />
          </IconButton>
        </Grid>
      </Grid>
    </CardActions>
  </Card>
);

export default UserProblem;
