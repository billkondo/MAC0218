import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Paper, Typography } from '@material-ui/core';

import { routes } from '../../config';

const TypeSelection = () => (
  <Grid container direction="column" justify="center" alignItems="center">
    <Grid item style={{ padding: 32 }}>
      <Typography variant="h5" align="center">
        Escolha o tipo de problema
      </Typography>
    </Grid>

    <Grid
      item
      md={6}
      xs={10}
      container
      justify="center"
      spacing={32}
      alignItems="center"
    >
      <Grid item md={6} xs={10}>
        <Link
          to={routes.multiple_choice_form}
          style={{ textDecoration: 'none' }}
        >
          <Paper style={{ padding: 32, height: 300, borderRadius: 16 }}>
            <Grid container direction="column" spacing={32}>
              <Grid item>
                <Typography variant="h6">
                  Questão de Múltipla Escolha
                </Typography>
              </Grid>

              <Grid item>
                <Typography variant="body1">
                  Os alunos devem escolher a alternativa que melhor encaixa na
                  solução do problema
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Link>
      </Grid>

      <Grid item md={6} xs={10}>
        <Link to={routes.write_form} style={{ textDecoration: 'none' }}>
          <Paper style={{ padding: 32, height: 300, borderRadius: 16 }}>
            <Grid container direction="column" spacing={32}>
              <Grid item>
                <Typography variant="h6">Questão Escrita</Typography>
              </Grid>

              <Grid item>
                <Typography variant="body1">
                  Os alunos devem demonstrar o racicíonio por trás da questão
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Link>
      </Grid>
    </Grid>
  </Grid>
);

export default TypeSelection;
