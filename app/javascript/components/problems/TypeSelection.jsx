import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Paper, Typography, Grow, Fade } from '@material-ui/core';

import { routes } from '../../config';

const TypeSelection = () => {
  const multipleChoice = useRef(null);
  const write = useRef(null);

  useEffect(() => {
    const height = Math.max(
      multipleChoice.current.clientHeight,
      write.current.clientHeight
    );

    multipleChoice.current.style.height = `${height}px`;
    write.current.style.height = `${height}px`;
  }, []);

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item style={{ padding: 32 }}>
        <Fade in={true}>
          <Typography
            variant="h6"
            align="center"
            style={{ fontWeight: 'bold' }}
          >
            Escolha o tipo de problema
          </Typography>
        </Fade>
      </Grid>

      <Grid
        item
        md={12}
        xs={12}
        container
        justify="center"
        spacing={4}
        alignItems="center"
      >
        <Grid item md={4} xs={10}>
          <Link
            to={routes.multiple_choice_form}
            style={{ textDecoration: 'none' }}
          >
            <Grow in={true}>
              <Paper
                style={{ padding: 32, borderRadius: 16 }}
                ref={multipleChoice}
                elevation={4}
              >
                <Grid container direction="column" spacing={4}>
                  <Grid item>
                    <Typography
                      variant="h6"
                      align="center"
                      style={{ fontWeight: 'bold' }}
                    >
                      Múltipla Escolha
                    </Typography>
                  </Grid>

                  <Grid item>
                    <Typography variant="body1" align="center">
                      Os alunos devem escolher a alternativa que melhor encaixa
                      na solução do problema
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grow>
          </Link>
        </Grid>

        <Grid item md={4} xs={10}>
          <Link to={routes.write_form} style={{ textDecoration: 'none' }}>
            <Grow in={true}>
              <Paper
                style={{ padding: 32, borderRadius: 16 }}
                ref={write}
                elevation={4}
              >
                <Grid container direction="column" spacing={4}>
                  <Grid item>
                    <Typography
                      variant="h6"
                      align="center"
                      style={{ fontWeight: 'bold' }}
                    >
                      Discurssiva
                    </Typography>
                  </Grid>

                  <Grid item>
                    <Typography variant="body1" align="center">
                      Os alunos devem demonstrar o racicíonio por trás da
                      questão
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grow>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TypeSelection;
