import React from 'react';
import {
  Grid,
  Typography,
  TextField,
  Card,
  InputBase
} from '@material-ui/core';
import { Link } from 'react-router-dom';

import { routes } from '../../../config';

export const Blog = ({ blog, group_id }) => {
  return (
    <Card elevation={4}>
      <Grid container direction="column" style={{ padding: 32 }}>
        <Grid item>
          <Link to={routes.groups.blog.read(group_id, blog.id)}>
            <Typography variant="body1" style={{ fontWeight: 'bold' }}>
              {blog.title}
            </Typography>
          </Link>
        </Grid>

        <Grid item>
          <InputBase
            value={blog.sub_title}
            fullWidth
            inputProps={{ readOnly: true }}
          />
        </Grid>
      </Grid>
    </Card>
  );
};
