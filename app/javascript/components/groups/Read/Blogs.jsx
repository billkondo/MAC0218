import React, { useState, useEffect } from 'react';
import { Grid, Typography, Icon, colors } from '@material-ui/core';
import { Block } from '@material-ui/icons';

import { Blog } from './Blog';
import { Services } from '../../../services';

export const Blogs = ({ group_id }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    if (group_id) {
      Services.Api.Blogs.get_all(group_id)
        .then(res => {
          const { blogs, status } = res.data;

          console.log(blogs);

          if (status === 'OK') {
            setBlogs(blogs);
          } else {
            // TODO set errors
          }
        })
        .catch(err => console.log(err));
    }
  }, [group_id]);

  return (
    <Grid container direction="column" spacing={3}>
      <Grid item>
        <Typography variant="h6">Últimas postagens</Typography>
      </Grid>

      <Grid item>
        {blogs.length === 0 ? (
          <Grid container alignItems="center" spacing={3}>
            <Grid item>
              <Icon>
                <Block style={{ color: colors.red[900] }} />
              </Icon>
            </Grid>

            <Grid item>
              <Typography variant="body1">
                Nenhuma postagem feita ainda
              </Typography>
            </Grid>
          </Grid>
        ) : (
          <Grid container direction="column" spacing={4}>
            {blogs.map(blog => {
              return (
                <Grid item key={blog.id}>
                  <Blog blog={blog} group_id={group_id} />
                </Grid>
              );
            })}
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};
