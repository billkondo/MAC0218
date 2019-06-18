import React from 'react';
import {
  Card,
  CardContent,
  Grid,
  Typography,
  TextField,
  Button,
  Icon,
  Tooltip
} from '@material-ui/core';
import { Subject, Edit } from '@material-ui/icons';
import { Link } from 'react-router-dom';

import { routes } from '../../../../config';

export const Problem = ({ problem }) => {
  const getText = type =>
    type === 'multiple_choice' ? 'Ver alternativas' : 'Ver perguntas';

  const getIcon = type => (type === 'multiple_choice' ? <Subject /> : <Edit />);

  const getTooltip = type =>
    type === 'multiple_choice' ? 'Múltipla escolha' : 'Dissertativo';

  const getRoute = (id, type) =>
    type === 'multiple_choice'
      ? routes.read_multiple_problem(id)
      : routes.problems.write.read(problem.id);

  return (
    <Card elevation={8}>
      <CardContent>
        <Grid container direction="column" spacing={7}>
          <Grid item>
            <Grid container>
              <Grid item>
                <Typography variant="body1" style={{ fontWeight: 'bold' }}>
                  {problem.title}
                </Typography>
              </Grid>
              <Grid item style={{ flex: 1 }} container justify="flex-end">
                <Tooltip title={getTooltip(problem.type)}>
                  <Icon>{getIcon(problem.type)}</Icon>
                </Tooltip>
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <TextField
              fullWidth
              variant="outlined"
              value={problem.statement}
              multiline
            />
          </Grid>

          <Grid item container justify="flex-end">
            <Link
              to={getRoute(problem.id, problem.type)}
              style={{ textDecoration: 'none' }}
            >
              <Button variant="outlined">{getText(problem.type)}</Button>
            </Link>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
