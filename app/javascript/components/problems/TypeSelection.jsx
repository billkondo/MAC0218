import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';

import { routes } from '../../config';

const TypeSelection = () => (
  <Grid container direction="column" spacing={32} justify="center">
    <Grid item>
      <Typography variant="h5" align="center">
        Escolha o tipo de problema
      </Typography>
    </Grid>

    <Grid item container justify="center" spacing={32} alignItems="center">
      <Grid item md={5} xs={10}>
        <a href={routes.multipleChoiceForm} style={{ textDecoration: 'none' }}>
          <Paper style={{ padding: 32, height: 250 }}>
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
        </a>
      </Grid>

      <Grid item md={5} xs={10}>
        <Paper style={{ padding: 32, height: 250 }}>
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
      </Grid>
    </Grid>
  </Grid>
);

export default TypeSelection;
