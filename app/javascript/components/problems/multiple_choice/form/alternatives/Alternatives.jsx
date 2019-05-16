import React from 'react';
import { Grid, Typography, IconButton, Icon, Paper } from '@material-ui/core';
import { AddCircle, Block } from '@material-ui/icons';

import { AlternativesList } from './AlternativesList';
import { AlternativesMenu } from './AlternativesMenu';

export const Alternatives = ({
  alternatives,
  deleteAlt,
  correct,
  setCorrect,
  clearAlternative,
  alternative,
  handleChange,
  createAlternative,
  mode
}) => {
  const showMenu = mode !== 'read';

  return (
    <Grid container spacing={32}>
      <Grid item xs={12}>
        <AlternativesList
          alternatives={alternatives}
          correct={correct}
          deleteAlt={deleteAlt}
          setCorrect={setCorrect}
          mode={mode}
        />
      </Grid>

      {showMenu && (
        <Grid item xs={12}>
          <AlternativesMenu
            alternative={alternative}
            handleChange={handleChange}
            clearAlternative={clearAlternative}
            createAlternative={createAlternative}
          />
        </Grid>
      )}
    </Grid>
  );
};
