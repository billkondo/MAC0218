import React from 'react';
import { Breadcrumbs, Typography, Grid } from '@material-ui/core';
import { NavigateNext } from '@material-ui/icons';
import { withRouter, Link } from 'react-router-dom';

import { breadcrumb } from '../../services';

const _Breadcrumb = ({ location }) => {
  const { pathname } = location;
  const labels = breadcrumb.getLabels(pathname);

  return (
    <Grid container alignItems="flex-start" style={{ marginBottom: 64 }}>
      <Grid item>
        <div style={{ padding: 8 }}>
          <Breadcrumbs
            separator={<NavigateNext fontSize="small" />}
            aria-label="Breadcrumb"
          >
            {labels.map(label => (
              <Link
                to={label.route}
                key={label.name}
                style={{ textDecoration: 'none', fontWeight: 'bolder' }}
              >
                {label.name}
              </Link>
            ))}
          </Breadcrumbs>
        </div>
      </Grid>
    </Grid>
  );
};

export const Breadcrumb = withRouter(_Breadcrumb);
