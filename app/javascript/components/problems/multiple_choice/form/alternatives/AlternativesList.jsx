import React from 'react';
import { Paper, Grid, Typography } from '@material-ui/core';
import { Block } from '@material-ui/icons';

import Alternative from './Alternative';

export const AlternativesList = ({
  alternatives,
  deleteAlt,
  correct,
  setCorrect,
  mode
}) => {
  return (
    <Paper style={{ padding: 32 }}>
      <Grid container direction="column" spacing={4}>
        <Grid item>
          <Grid container spacing={4} alignItems="center">
            <Grid item>
              <Typography variant="h6">Alternativas</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid container direction="column" spacing={4}>
            {alternatives.length > 0 ? (
              <React.Fragment>
                {alternatives.map(alt => (
                  <Grid item key={alt.text}>
                    <Alternative
                      alt={alt}
                      deleteAlt={() => deleteAlt(alt)}
                      isCorrect={correct === alt.text}
                      setCorrect={() => setCorrect(alt)}
                      mode={mode}
                    />
                  </Grid>
                ))}
              </React.Fragment>
            ) : (
              <Grid item>
                <Typography variant="body1">
                  Nenhuma alternativa criada
                </Typography>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};
