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

import { MenuBar } from './MenuBar';
import { Statement } from './Statement';
import { Alternatives } from './alternatives';

import { Services } from '../../../../services';

class Form extends React.Component {
  state = {
    title: '',
    statement: '',
    alternatives: [],
    alternative: '',
    correct_answer: ''
  };

  clearAlternative = () => this.setState({ alternative: '' });

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  createAlternative = () => {
    if (this.state.alternative) {
      this.setState(state => ({
        alternatives: state.alternatives.concat([
          {
            text: state.alternative
          }
        ]),
        alternative: ''
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
    // TODO form validation

    const { submitForm } = this.props;

    submitForm({
      title: this.state.title,
      statement: this.state.statement,
      alternatives_attributes: this.state.alternatives,
      correct_answer: this.state.correct_answer
    });
  };

  render() {
    const {
      title,
      statement,
      alternatives,
      alternative,
      correct_answer
    } = this.state;

    return (
      <Grid container alignItems="flex-start">
        <Grid item xs={12} style={{ padding: 32 }}>
          <MenuBar
            title={title}
            handleChange={this.handleChange}
            onSubmit={this.onSubmit}
          />
        </Grid>

        <Grid item xs={12} md={6} style={{ padding: 32 }}>
          <Statement statement={statement} handleChange={this.handleChange} />
        </Grid>

        <Grid item xs={12} md={6} style={{ padding: 32 }}>
          <Alternatives
            alternatives={alternatives}
            clearAlternative={this.clearAlternative}
            alternative={alternative}
            handleChange={this.handleChange}
            createAlternative={this.createAlternative}
            correct={correct_answer}
            setCorrect={this.setCorrectAnswer}
            deleteAlt={this.deleteAlternative}
          />
        </Grid>
      </Grid>
    );
  }
}

export default Form;
