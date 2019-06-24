import React, { useEffect, useState } from 'react';
import {
  Grid,
  Typography,
  InputBase,
  Card,
  Grow,
  Box,
  CircularProgress
} from '@material-ui/core';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

import { Services } from '../../../../services';
import { routes } from '../../../../config';

const _Read = ({ match }) => {
  const [blog, setBlog] = useState({});
  const [group, setGroup] = useState({});
  const [_status, setStatus] = useState('');

  useEffect(() => {
    const { blog_id, group_id } = match.params;

    setStatus('LOADING');

    Services.Api.Blogs.read(group_id, blog_id)
      .then(res => {
        const { blog, group, status } = res.data;

        if (status === 'OK') {
          setStatus('DONE');
          setBlog(blog);
          setGroup(group);
        } else {
          setStatus('ERROR');
        }
      })
      .catch(err => {
        setStatus('ERROR');
      });
  }, []);

  return (
    <Grid container justify="center">
      <Grid item xs={10} md={6}>
        <Grid container direction="column" spacing={6}>
          {_status === 'LOADING' && (
            <Grid item>
              <Box border={1} borderRadius={32} p={4}>
                <Typography variant="h6" align="center">
                  Carregando blog
                </Typography>
                <Grid container justify="center" style={{ marginTop: 32 }}>
                  <CircularProgress />
                </Grid>
              </Box>
            </Grid>
          )}

          <Grid item>
            <Grow in={_status === 'DONE'}>
              <Link to={routes.groups.read(group.id)}>
                <Typography variant="h6">{group.title}</Typography>
              </Link>
            </Grow>
          </Grid>

          <Grow in={_status === 'DONE'}>
            <Card elevation={2}>
              <Grid container direction="column" style={{ padding: 32 }}>
                <Grid item>
                  <Typography variant="h5" style={{ fontWeight: 'bold' }}>
                    {blog.title}
                  </Typography>
                </Grid>

                <Grid item>
                  <Typography variant="subtitle1">{blog.sub_title}</Typography>
                </Grid>

                <Grid item style={{ marginTop: 48 }}>
                  <InputBase value={blog.body} fullWidth multiline />
                </Grid>
              </Grid>
            </Card>
          </Grow>
        </Grid>
      </Grid>
    </Grid>
  );
};

export const Read = withRouter(_Read);
