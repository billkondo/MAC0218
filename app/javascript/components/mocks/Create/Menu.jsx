import React, { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogActions,
  Grid,
  Typography,
  IconButton,
  CircularProgress
} from '@material-ui/core';
import { Clear } from '@material-ui/icons';

import { Problem } from './Problem';
import { Services } from '../../../services';

export const Menu = ({ isOpen, close, add, remove}) => {
  const [problems, setProblems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);

      Services.Api.Mock.get_problems_list()
        .then(res => {
          const { problems, status } = res.data;

          setIsLoading(false);

          if (status === 'OK') {
            setProblems(problems);
          } else {
            // TODO set errors
          }
        })
        .catch(err => {
          // TODO set errors
          console.log(err);
        });
    }
  }, [isOpen]);


  return (
    <Dialog open={isOpen} fullWidth maxWidth="md" scroll="paper">
      <DialogContent style={{ minHeight: 300, padding: 32 }}>
        <Grid container direction="column" spacing={4}>
          <Grid item container alignItems="center">
            <Grid item>
              <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                Selecione um problema
              </Typography>
            </Grid>

            <Grid item style={{ flex: 1 }} container justify="flex-end">
              <IconButton onClick={close}>
                <Clear />
              </IconButton>
            </Grid>
          </Grid>

          {isLoading && (
            <Grid item container justify="center">
              <CircularProgress />
            </Grid>
          )}

          {!isLoading && (
            <Grid item container direction="column" spacing={4}>
              {problems.map(problem => {
                return (
                  <Grid
                    item
                    xs={12}
                    key={problem.id}
                    container
                    justify="center"
                  >
                    <Grid item md={6} xs={10}>
                      <Problem problem={problem} add={add} remove={remove}/>
                    </Grid>
                  </Grid>
                );
              })}
            </Grid>
          )}
        </Grid>
      </DialogContent>

      <DialogActions>2</DialogActions>
    </Dialog>
  );
};
