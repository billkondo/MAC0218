import React, { useState } from 'react';
import {
  Dialog,
  Button,
  withMobileDialog,
  Grid,
  TextField,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  DialogContent,
  DialogTitle,
  Divider,
  colors
} from '@material-ui/core';
import { Close } from '@material-ui/icons';

const _Editor = ({
  isOpen,
  close,
  fullScreen,
  editQuestion,
  question,
  addQuestion
}) => {
  const [errors, setErrors] = useState({});

  const clear = () => editQuestion('');
  const edit = e => {
    if (e.target.value) setErrors({});
    editQuestion(e.target.value);
  };

  const add = () => {
    if (question) {
      addQuestion(question);
      close();
      clear();
    } else {
      setErrors({ question: 'Uma pergunta não pode ser vazia ' });
    }
  };

  const dialogStyle = fullScreen ? {} : { borderRadius: 16 };

  return (
    <Dialog
      open={isOpen}
      fullWidth
      maxWidth={'md'}
      fullScreen={fullScreen}
      PaperProps={{
        style: dialogStyle
      }}
    >
      <DialogTitle style={{ backgroundColor: colors.red[300] }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item>
            <Typography variant="h6" style={{ color: colors.grey[50] }}>
              Editor de Perguntas
            </Typography>
          </Grid>

          <Grid item style={{ flex: 1 }}>
            <Grid container justify="flex-end">
              <Grid item>
                <IconButton onClick={close} style={{ color: colors.grey[50] }}>
                  <Close />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </DialogTitle>

      <DialogContent style={{ padding: 32, marginTop: 32 }}>
        <Grid container direction="column" spacing={4}>
          <Grid item container direction="column">
            <Grid item>
              <TextField
                variant="outlined"
                fullWidth
                multiline
                label="Pergunta"
                onChange={edit}
                value={question}
                name="question"
                error={!!errors.question}
                helperText={errors.question}
                autoFocus
              />
            </Grid>
          </Grid>

          <Grid item container spacing={2} justify="flex-end">
            <Grid item>
              <Button variant="outlined" onClick={clear}>
                Limpar
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" onClick={add}>
                Criar
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export const Editor = withMobileDialog({ breakpoint: 'xs' })(_Editor);
