import React from 'react';
import { Grid, TextField, IconButton } from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';

export const Question = ({ question, deleteQuestion, id, editQuestion }) => {
  const _delete = () => {
    deleteQuestion(id);
  };

  const _edit = () => {
    editQuestion(question, id);
  };

  return (
    <Grid container spacing={8} direction="column">
      <Grid item>
        <TextField
          variant="outlined"
          InputProps={{ readOnly: false }}
          fullWidth
          multiline
          value={question}
        />
      </Grid>

      <Grid item>
        <Grid container spacing={8} justify="flex-end">
          <Grid item>
            <IconButton onClick={_edit}>
              <Edit />
            </IconButton>
          </Grid>

          <Grid item>
            <IconButton onClick={_delete}>
              <Delete />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
