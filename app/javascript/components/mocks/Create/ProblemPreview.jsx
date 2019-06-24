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
    const { problem_id } = this.props;
    Services.Api.MultipleChoice.get_multiple_choice_problem(problem_id)
      .then(res => {
        if(res.data.status != "ERROR"){
          const { problem } = res.data;
          try {
            this.setState({
              title: problem.title
            });
          } catch (e) {
            console.log(e);
          }
        }
      })
      .catch(err => this.setState({ status: this.status.error }));

    Services.Api.write.get(problem_id)
      .then(res => {
        if (res.data.status != "ERROR") {
          const problem = res.data.write_problem;
          try {
            this.setState({
              title: problem.title
            });
          } catch (e) {
            console.log(e);
          }
        }
      })
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