import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import { Services } from '../../../services';

const _Read = ({ location }) => {
  const [mock, setMock] = useState([]);

  useEffect(() => {
    console.log('READ MOCK', id);
    const { id } = queryString.parse(location.search);

    Services.Api.Mock.get_mock(id)
      .then(res => {
        const { mock } = res.data;
        console.log(res);
        setMock(mock)
      })
      .catch(err => console.log(err));
  }, []);

  return <h3> {mock.title} </h3>
};

export const Read = withRouter(_Read);