import React, { useState } from 'react';
import { Grid, Typography, TextField, Button, colors } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

import { Questions } from './Questions';
import { routes } from '../../../config';
import { Services } from '../../../services';

const _Create = () => {
  const [mock, setMock] = useState({
    title: '',
    description: '',
    problems: [] // list of problems ID
  });

  const handleChange = e => {
    setMock({
      ...mock,
      [e.target.name]: e.target.value
    });
  };

  const addProblem = id => {
    setMock({
      ...mock,
      problems: mock.problems.concat(id)
    });
  };

  const removeProblem = id => {
    console.log('antes', mock.problems);
    console.log('id', id);
    console.log('id2', id.id);
    setMock({
      ...mock,
      problems: mock.problems.filter(
        prob => prob.id !== id
      ),
    });
    console.log('depois', mock.problems);
  };

  const handleSubmit = () => {
    console.log('submit', mock);

    Services.Api.Mock.create(mock)
      .then(res => console.log(res))
      .catch(err => console.log(err));

    // HTTP axios post -> servidor -> porta
  };

  // const submitForm = problem => {
  //   Services.Api.Mock.create(mock)
  //     .then(res => {
  //       // redirect user
  //       if (res.data.status === 'OK') {
  //       } else {
  //         // TODO throw errors
  //       }
  //     })
  //     .catch(err => console.log(err));
  // };

  return (
    <Grid container direction="column">
      <Grid item container justify="center">
        <Grid item md={6} xs={10} container direction="column" spacing={4}>
          <Grid item>
            <Typography variant="h6" style={{ fontWeight: 'bold' }}>
              Criando simulado
            </Typography>
          </Grid>

          <Grid item>
            <TextField
              label="Título"
              variant="outlined"
              fullWidth
              value={mock.title}
              onChange={handleChange}
              name="title"
            />
          </Grid>

          <Grid item>
            <TextField
              label="Descrição"
              variant="outlined"
              multiline
              fullWidth
              value={mock.description}
              name="description"
              onChange={handleChange}
            />
          </Grid>

          <Grid item>
            <Questions problems={mock.problems} add={addProblem} remove={removeProblem}/>
          </Grid>

          <Grid item container justify="flex-end" style={{ marginTop: 32 }}>
            <Button
              variant="contained"
              style={{
                background: colors.green.A700,
                color: colors.grey[50],
                fontWeight: 'bold'
              }}
              onClick={handleSubmit}
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
