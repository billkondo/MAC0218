import React, { useState, useEffect } from 'react';
import { Tabs, Grid, Tab } from '@material-ui/core';
import { withRouter } from 'react-router';
import { parse } from 'query-string';

import { Recent } from './recent';
import { MyProblems } from './my_problems';
import { routes } from '../../../../config';

const _Content = ({ history, location }) => {
  const [tab, setTab] = useState(0);
  const [load, setLoad] = useState(false);

  const handleChange = (e, newValue) =>
    history.push(routes.problems.main(mapIndexToTab(newValue)));

  const mapTabToIndex = tab => {
    switch (tab) {
      case 'recent':
        return 0;
      case 'my_problems':
        return 1;
      case 'favorites':
        return 2;

      default:
        return 0;
    }
  };

  const mapIndexToTab = index => {
    switch (index) {
      case 0:
        return 'recent';
      case 1:
        return 'my_problems';
      case 2:
        return 'favorites';

      default:
        return 0;
    }
  };

  useEffect(() => {
    const params = parse(location.search);
    const { tab } = params;
    setTab(mapTabToIndex(tab));
    setLoad(true);
  }, [location]);

  return (
    <Grid container direction="column" spacing={5}>
      <Grid item>
        <Tabs value={tab} onChange={handleChange}>
          <Tab label="Recentes" />
          <Tab label="Meus problems" />
          {/* <Tab label="Favoritos" /> */}
        </Tabs>
      </Grid>

      {load && (
        <Grid item>
          {tab === 0 && <Recent />}
          {tab === 1 && <MyProblems />}
        </Grid>
      )}
    </Grid>
  );
};

export const Content = withRouter(_Content);
