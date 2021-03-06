import React from 'react';
import { Grid, TextField, Button } from '@material-ui/core';

export const AlternativesMenu = ({
  alternative,
  handleChange,
  clearAlternative,
  createAlternative,
  error
}) => {
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item xs={12}>
        <TextField
          multiline
          variant="outlined"
          fullWidth
          label="Alternativa"
          value={alternative}
          onChange={handleChange}
          name="alternative"
          error={!!error}
          helperText={error}
        />
      </Grid>

      <Grid item>
        <Grid container justify="flex-end" spacing={4}>
          <Grid item>
            <Button onClick={clearAlternative} variant="outlined">
              Limpar
            </Button>
          </Grid>

          <Grid item>
            <Button onClick={createAlternative} variant="outlined">
              Adicionar alternativa
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
