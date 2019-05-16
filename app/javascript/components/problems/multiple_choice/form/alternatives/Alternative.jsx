import React from 'react';
import {
  Grid,
  IconButton,
  TextField,
  colors,
  withStyles
} from '@material-ui/core';
import { Close, Check, CheckCircle } from '@material-ui/icons';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },

  cssLabel: {
    color: 'green'
  },

  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: colors.green[300]
    }
  },

  cssFocused: {},

  notchedOutline: {
    borderColor: `${colors.green[300]} !important`
  }
});

const Alternative = ({ alt, deleteAlt, isCorrect, setCorrect, classes }) => (
  <Grid container direction="column" spacing={8}>
    <Grid item xs={12}>
      <TextField
        value={alt.text}
        variant="outlined"
        multiline
        InputProps={{
          readOnly: true,
          classes: {
            focused: isCorrect ? classes.cssFocused : null,
            notchedOutline: isCorrect ? classes.notchedOutline : null
          }
        }}
        fullWidth
      />
    </Grid>

    <Grid item>
      <Grid container justify="flex-end" spacing={16}>
        <Grid item>
          <IconButton onClick={setCorrect}>
            {isCorrect ? (
              <CheckCircle style={{ color: colors.green[300] }} />
            ) : (
              <Check />
            )}
          </IconButton>
        </Grid>

        <Grid item>
          <IconButton onClick={deleteAlt}>
            <Close />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

export default withStyles(styles)(Alternative);
