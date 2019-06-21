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
  Fade
} from '@material-ui/core';

export const Create = () => {
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

  const handleCreate = () => {};

  return (
    <Fade in={true}>
      <Grid container justify="center">
        <Grid item xs={10}>
          <Grid container direction="column" spacing={4}>
            <Grid item xs={10} md={6}>
              <TextField
                label="Título"
                variant="outlined"
                fullWidth
                name="title"
                value={group.title}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={10} md={6}>
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

            <Grid item xs={10} md={6}>
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

            <Grid item xs={10} md={6} container justify="flex-end">
              <Button
                variant="contained"
                style={{
                  fontWeight: 'bold',
                  background: colors.green.A700,
                  color: colors.grey[50]
                }}
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
