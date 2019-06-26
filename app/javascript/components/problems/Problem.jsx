import React from 'react';
import {
  Grid,
  Typography,
  TextField,
  Card,
  CardActions,
  CardContent,
  IconButton,
  CardHeader,
  colors,
  CircularProgress
} from '@material-ui/core';
import { FavoriteBorder, Favorite } from '@material-ui/icons';
import { Link } from 'react-router-dom';

import { routes } from '../../config';
import { Services } from '../../services';

class Problem extends React.Component {
  // TODO fix memory leaks
  // TODO make better text box

  state = {
    problem: {},
    status: ''
  };

  status = {
    loading: 'LOADING',
    error: 'ERROR',
    done: 'DONE'
  };

  componentDidMount() {
    const { problem } = this.props;
    this.setState({ problem });
  }

  toggleFavorite = () => {
    const { problem } = this.state;
    const { id } = problem;
    const isFavorite = !(problem.favorite !== null);

    this.setState({ status: this.status.loading });
    Services.Api.MultipleChoice.update_multiple_choice_favorites(id, isFavorite)
      .then(res => {
        this.setState(state => ({
          status: this.status.done,
          problem: {
            ...state.problem,
            favorite: isFavorite ? true : null
          }
        }));
      })
      .catch(err => this.setState({ status: this.status.error }));
  };

  render() {
    const { problem } = this.state;
    const isLoading = this.state.status === this.status.loading;

    return (
      <Card>
        <CardContent>
          <Grid container direction="column" spacing={3}>
            <Grid item>
              <Link
                to={routes.solve_multiple_problem(problem.id)}
                style={{ textDecoration: 'none' }}
              >
                <Typography variant="body1" style={{ color: colors.blue[500] }}>
                  {problem.title}
                </Typography>
              </Link>
            </Grid>

            <Grid item>
              <TextField
                value={problem.statement}
                fullWidth
                multiline
                InputProps={{ readOnly: true }}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>

        <CardActions>
          <Grid container justify="flex-end" spacing={2}>
            <Grid item>
              <Grid item container justify="center">
                <Grid item>
                  <IconButton
                    onClick={this.toggleFavorite}
                    disabled={isLoading}
                  >
                    {problem.favorite ? <Favorite /> : <FavoriteBorder />}
                  </IconButton>
                </Grid>
                {isLoading && (
                  <CircularProgress style={{ position: 'absolute' }} />
                )}
              </Grid>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    );
  }
}

export default Problem;
