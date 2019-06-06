import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import { Form } from '../form';
import { Services } from '../../../../services';

const _Read = ({ match }) => {
  useEffect(() => {
    console.log('READ');
    const { id } = match.params;
    Services.Api.write
      .get(id)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }, []);

  return <Form mode="READ" />;
};

export const Read = withRouter(_Read);
