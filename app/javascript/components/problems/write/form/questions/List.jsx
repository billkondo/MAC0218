import React from 'react';
import { Grid, Paper, Typography, Grow } from '@material-ui/core';
import { Block } from '@material-ui/icons';

import { Question } from './Question';

export const List = ({ questions, deleteQuestion, editQuestion }) => {
  return (
    <Grow in={true}>
      <Paper style={{ padding: 32 }}>
        <Grid container spacing={4}>
          <Grid item>
            <Typography variant="h6">Perguntas</Typography>
          </Grid>

          <Grid item container spacing={4} direction="column">
            {questions.length === 0 ? (
              <Grid item>
                <Typography variant="body1">Nenhuma pergunta criada</Typography>
              </Grid>
            ) : (
              <React.Fragment>
                {questions.map(q => (
                  <Grid item key={q.id}>
                    <Question
                      question={q.question}
                      deleteQuestion={deleteQuestion}
                      id={q.app_id}
                      editQuestion={editQuestion}
                    />
                  </Grid>
                ))}
              </React.Fragment>
            )}
          </Grid>
        </Grid>
      </Paper>
    </Grow>
  );
};
