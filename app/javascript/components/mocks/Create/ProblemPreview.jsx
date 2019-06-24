import React,{useState} from 'react';
import { Grid, TextField, IconButton } from '@material-ui/core';
import { Add, Close } from '@material-ui/icons';
import { Services } from '../../../services';

class ProblemPreview extends React.Component {
  state = {
    problem_id: '',
    title: ''
  }

  componentWillMount() {
    console.log("VAI MONTAR")
    const { problem_id } = this.props;
    console.log("id", problem_id)
    Services.Api.MultipleChoice.get_multiple_choice_problem(problem_id)
      .then(res => {
        console.log(res);
        const { problem, alternatives } = res.data;
        console.log("devolveu")
        console.log(problem)
        try {
          this.setState({
            title: problem.title
          });
        } catch (e) {
          console.log(e);
        }
      })
      .catch(err => this.setState({ status: this.status.error }));
  }

  render() {
    const { title } = this.state;

    return (
      <div>
        {title.toString()}
      </div>
    );
  }
};

export default ProblemPreview;