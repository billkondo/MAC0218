import React from 'react';
import { Grid, Typography, IconButton, Icon } from '@material-ui/core';
import { AddCircle, Block } from '@material-ui/icons';

import Alternative from './Alternative';

const Alternatives = ({
  openDialog,
  alternatives,
  deleteAlt,
  correct,
  setCorrect
}) => (
  <Grid container direction="column" spacing={32}>
    <Grid item>
      <Grid container spacing={32} alignItems="center">
        <Grid item>
          <Typography variant="h6">Alternativas</Typography>
        </Grid>

        <Grid item container style={{ flex: 1 }} justify="flex-end">
          <IconButton onClick={openDialog}>
            <AddCircle />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>

    <Grid item>
      <Grid container direction="column" spacing={32}>
        {alternatives.length > 0 ? (
          <React.Fragment>
            {alternatives.map(alt => (
              <Grid item key={alt.text}>
                <Alternative
                  alt={alt}
                  deleteAlt={() => deleteAlt(alt)}
                  isCorrect={correct === alt.text}
                  setCorrect={() => setCorrect(alt)}
                />
              </Grid>
            ))}
          </React.Fragment>
        ) : (
          <Grid item container spacing={16} alignItems="center">
            <Grid item>
              <Block />
            </Grid>
            <Grid item>
              <span>Nenhuma alternativa criada</span>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Grid>
  </Grid>
);

export default Alternatives;
