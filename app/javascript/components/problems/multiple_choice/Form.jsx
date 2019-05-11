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
    correct_answer: ''
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
        alternatives: state.alternatives.concat([
          {
            text: state.alternative
          }
        ]),
        alternative: '',
        isAlternativeDialogOpen: false,
        correct_answer: isCorrect ? state.alternative : state.correct_answer
      }));
    }
  };

  setCorrectAnswer = altCorrect =>
    this.setState({ correct_answer: altCorrect.text });

  deleteAlternative = altDelete => {
    this.setState(state => ({
      alternatives: state.alternatives.filter(
        alt => alt.text !== altDelete.text
      ),
      correct_answer:
        state.correct_answer === altDelete.text ? '' : state.correct_answer
    }));
  };

  onSubmit = () => {
    // TODO validate form

    Services.Api.MultipleChoice.create({
      title: this.state.title,
      statement: this.state.statement,
      alternatives_attributes: this.state.alternatives,
      correct_answer: this.state.correct_answer
    });
  };

  render() {
    return (
      <Grid container justify="center">
        <Grid item xs={10} md={5}>
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
                  correct={this.state.correct_answer}
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
