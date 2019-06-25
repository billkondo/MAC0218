import React, { useState, useEffect } from 'react';
import {
  Grid,
  TextField,
  Button,
  Box,
  Typography,
  colors
} from '@material-ui/core';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

import { routes } from '../../../../config';
import { Services } from '../../../../services';

const _Create = ({ match, history }) => {
  const [blog, setBlog] = useState({
    title: '',
    sub_title: '',
    body: ''
  });
  const [group, setGroup] = useState();

  const handleChange = e =>
    setBlog({
      ...blog,
      [e.target.name]: e.target.value
    });

  useEffect(() => {
    const { group_id } = match.params;

    Services.Api.Groups.get_group(group_id)
      .then(res => {
        const { group, status } = res.data;

        if (status === 'OK') {
          setGroup(group);
        } else {
          // TODO set errors
        }
      })
      .catch(err => {
        // TODO set errors
        console.log(err);
      });
  }, []);

  const handleCreate = () => {
    console.log('create');

    if (!!group) {
      Services.Api.Blogs.create(group.id, blog)
        .then(res => {
          const { status } = res.data;
          history.push(routes.groups.read(group.id));
        })
        .catch(err => {
          // TODO handle error in create
          console.log(err);
        });
    } else {
      // TODO handle group not loaded
    }
  };

  return (
    <Grid container justify="center">
      <Grid item md={6} xs={10}>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            {!!group && (
              <Link to={routes.groups.read(group.id)}>
                <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                  {group.title}
                </Typography>
              </Link>
            )}
          </Grid>

          <Grid item style={{ marginTop: 32 }}>
            <Typography variant="body1">Criando blog</Typography>
          </Grid>

          <Grid item>
            <TextField
              label="Título"
              variant="outlined"
              fullWidth
              name="title"
              value={blog.title}
              onChange={handleChange}
            />
          </Grid>

          <Grid item>
            <TextField
              label="Subtítulo"
              variant="outlined"
              fullWidth
              name="sub_title"
              value={blog.sub_title}
              onChange={handleChange}
            />
          </Grid>

          <Grid item style={{ marginTop: 32 }}>
            <TextField
              label="Texto"
              multiline
              variant="outlined"
              fullWidth
              name="body"
              value={blog.body}
              onChange={handleChange}
            />
          </Grid>

          <Grid item container justify="flex-end" style={{ marginTop: 32 }}>
            <Button
              variant="contained"
              style={{
                background: colors.green.A700,
                color: colors.grey[50],
                fontWeight: 'bold'
              }}
              onClick={handleCreate}
            >
              Criar
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export const Create = withRouter(_Create);
