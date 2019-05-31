import React from 'react';
import { Grid } from '@material-ui/core';

import { Control } from './Control';
import { List } from './List';

export const Questions = ({
  questions,
  openEditor,
  deleteQuestion,
  editQuestion
}) => {
  return (
    <Grid container direction="column" spacing={32}>
      <Grid item>
        <List
          questions={questions}
          deleteQuestion={deleteQuestion}
          editQuestion={editQuestion}
        />
      </Grid>

      <Grid item>
        <Control openEditor={openEditor} />
      </Grid>
    </Grid>
  );
};
