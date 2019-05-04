import React from 'react';
import {
  Grid,
  Paper,
  TextField,
  Divider,
  Button,
  Typography,
  colors
} from '@material-ui/core';

import Alternatives from './Alternatives';
import AlternativeDialog from './AlternativeDialog';

import { Services } from '../../../services';

class Form extends React.Component {
  state = {
    isAlternativeDialogOpen: false,
    title: '',
    statement: '',
    alternatives: [],
    alternative: '',
    correctAnswer: ''
  };

  openAlternativeDialog = () =>
    this.setState({ isAlternativeDialogOpen: true });

  closeAlternativeDialog = () =>
    this.setState({ isAlternativeDialogOpen: false });

  clearAlternative = () => this.setState({ alternative: '' });

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  createAlternative = (isCorrect = false) => {
    if (this.state.alternative) {
      this.setState(state => ({
        alternatives: state.alternatives.concat([state.alternative]),
        alternative: '',
        isAlternativeDialogOpen: false,
        correctAnswer: isCorrect ? state.alternative : state.correctAnswer
      }));
    }
  };

  setCorrectAnswer = altCorrect => this.setState({ correctAnswer: altCorrect });

  deleteAlternative = altDelete => {
    this.setState(state => ({
      alternatives: state.alternatives.filter(alt => alt !== altDelete),
      correctAnswer:
        state.correctAnswer === altDelete ? '' : state.correctAnswer
    }));
  };

  onSubmit = () => {
    // TODO validate form

    Services.Api.MultipleChoice.create({
      title: this.state.title,
      statement: this.state.statement,
      alternatives: this.state.alternatives,
      correctAnswer: this.state.correctAnswer
    });
  };

  render() {
    return (
      <Grid container direction="column" spacing={32}>
        <Grid item>
          <Paper elevation={4}>
            <Grid
              container
              direction="column"
              spacing={32}
              style={{ padding: 32 }}
            >
              <Grid item style={{ marginBottom: 32 }}>
                <Typography variant="h5" align="center">
                  Questão múltipla escolha
                </Typography>
              </Grid>

              <Grid item md={8} xs={12}>
                <TextField
                  label="Título"
                  name="title"
                  variant="outlined"
                  fullWidth
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Enunciado"
                  name="statement"
                  variant="outlined"
                  multiline
                  fullWidth
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item>
                <Divider />
              </Grid>
              <Grid item>
                <Alternatives
                  openDialog={this.openAlternativeDialog}
                  alternatives={this.state.alternatives}
                  deleteAlt={this.deleteAlternative}
                  correct={this.state.correctAnswer}
                  setCorrect={this.setCorrectAnswer}
                />
              </Grid>
              <Grid item>
                <Divider />
              </Grid>

              <Grid item>
                <Button
                  variant="contained"
                  fullWidth
                  style={{
                    background: colors.green[500],
                    color: colors.grey[50]
                  }}
                  onClick={this.onSubmit}
                >
                  Criar
                </Button>
              </Grid>

              <AlternativeDialog
                isOpen={this.state.isAlternativeDialogOpen}
                close={this.closeAlternativeDialog}
                handleChange={this.handleChange}
                clear={this.clearAlternative}
                alternative={this.state.alternative}
                create={this.createAlternative}
              />
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default Form;
