import React, { useEffect, useState } from 'react';
import {
  Grid,
  Card,
  Typography,
  InputBase,
  Chip,
  colors,
  IconButton
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Favorite, FavoriteBorder } from '@material-ui/icons';

import { FavoriteButton } from './FavoriteButton';
import { routes } from '../../../../config';

export const ProblemCard = ({ problem }) => {
  const [_problem, setProblem] = useState({});
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setProblem(problem);
    setLoad(true);
  }, []);

  const getLink = (type, id) =>
    type === 'write'
      ? routes.problems.write.read(id)
      : routes.problems.multiple_choice.read(id);

  const getLabel = type =>
    type === 'write' ? 'DISCURSSIVO' : 'MÚLITIPLA ESCOLHA';

  const getColor = type => (type === 'write' ? 'primary' : 'secondary');

  const getTextColor = type =>
    type === 'write' ? colors.indigo[800] : colors.red[800];

  const toggleFavorite = flag => {
    setProblem({
      ...problem,
      favorite: flag
    });
  };

  if (!load) return null;

  return (
    <Card elevation={2}>
      <Grid container direction="column" style={{ padding: 32 }} spacing={3}>
        <Grid item>
          <Grid container alignItems="center">
            <Grid item>
              <Typography variant="h6">
                <Link
                  to={getLink(_problem.type, _problem.id)}
                  style={{
                    fontWeight: 'bold',
                    textDecoration: 'none',
                    color: getTextColor(_problem.type)
                  }}
                >
                  {_problem.title}
                </Link>
              </Typography>
            </Grid>

            {/* <Grid item style={{ flex: 1 }}>
              <Grid container justify="flex-end">
                <FavoriteButton
                  problem={_problem}
                  toggleFavorite={toggleFavorite}
                />
              </Grid>
            </Grid> */}
          </Grid>
        </Grid>

        <Grid item>
          <InputBase
            value={_problem.statement}
            inputProps={{ readOnly: true }}
            multiline
            fullWidth
          />
        </Grid>

        <Grid item container direction="row-reverse">
          <Grid item>
            <Chip
              label={getLabel(_problem.type)}
              color={getColor(_problem.type)}
            />
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};
