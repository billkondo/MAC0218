import React from 'react';

import { Grid, TextField, Button } from '@material-ui/core';

class Form extends React.Component {
  state = {
    title: '',
    description: '',
    problems: [],
    problem_id: '',

    isOwner: '',
    id: '',

    errors: []
  };

  addProblem = () => {
    if (this.state.problem) {
      this.setState(state => ({
        problems: state.problems.concat([
          {
            test: state.problem_id
          }
        ]),
        problem_id: ''
      }));
    }
  };

  render() {
    const {
      title,
      description,
      problems,
      problem_id,
      isOwner,
      id,
      errors
    } = this.state;

    const { mode } = this.props;

    return (
      <Grid container justify="center">
        <Grid item xs={10}>
          <Grid container direction="column" spacing={4}>
            <Grid item xs={10} md={6}>
              <TextField
                label="Título"
                variant="outlined"
                fullWidth
                name="title"
                value={this.title}
              />
            </Grid>
            <Grid item xs={10} md={6}>
              <TextField
                label="Descrição"
                variant="outlined"
                fullWidth
                name="description"
                value={this.description}
              />
            </Grid>
            <Grid item xs={10} md={6}>
              <Button variant="outlined">Atualizar informações</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Form;
