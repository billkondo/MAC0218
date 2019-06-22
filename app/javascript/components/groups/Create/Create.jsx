import React, { useState } from 'react';
import {
  Grid,
  TextField,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
  colors,
  Fade,
  Typography
} from '@material-ui/core';
import { withRouter } from 'react-router';

import { Services } from '../../../services';
import { routes } from '../../../config';

const _Create = ({ history }) => {
  const [group, setGroup] = useState({
    title: '',
    description: '',
    status: 'public'
  });

  const handleChange = e =>
    setGroup({
      ...group,
      [e.target.name]: e.target.value
    });

  const handleCreate = () => {
    Services.Api.Groups.create(group)
      .then(res => {
        const { status, id } = res.data;

        if (status === 'OK') {
          history.push(routes.groups.read(id));
        } else {
          // console.log('Error');
        }
      })
      .catch(err => {
        // console.log(err);
        // TODO implement errors
      });
  };

  return (
    <Fade in={true}>
      <Grid container justify="center">
        <Grid item xs={10} md={6}>
          <Grid container direction="column" spacing={4}>
            <Grid item xs={12}>
              <Typography
                variant="h6"
                style={{ fontWeight: 'bold' }}
                align="center"
              >
                Criando grupo
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Título"
                variant="outlined"
                fullWidth
                name="title"
                value={group.title}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Descrição"
                variant="outlined"
                fullWidth
                multiline
                name="description"
                value={group.description}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormLabel component="legend" style={{ fontWeight: 'bold' }}>
                  Status
                </FormLabel>
                <RadioGroup
                  name="status"
                  style={{ marginTop: 8 }}
                  value={group.status}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    label="Público"
                    value="public"
                    control={<Radio />}
                  />
                  <FormControlLabel
                    label="Privado"
                    value="private"
                    control={<Radio />}
                  />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item xs={12} container justify="flex-end">
              <Button
                variant="contained"
                style={{
                  fontWeight: 'bold',
                  background: colors.green.A700,
                  color: colors.grey[50]
                }}
                onClick={handleCreate}
              >
                Criar
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fade>
  );
};

export const Create = withRouter(_Create);
