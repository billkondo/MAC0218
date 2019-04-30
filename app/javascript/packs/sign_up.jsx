import React from 'react';
import ReactDOM from 'react-dom';

import { SignUp } from '../components';

document.addEventListener('DOMContentLoaded', () => {
  // const isUserSignedIn =
  //   document
  //     .getElementById('app-data')
  //     .getAttribute('data-is-user-signed-in') === 'true';

  const authToken = document
    .getElementById('sign-up-data')
    .getAttribute('data-token');

  ReactDOM.render(
    <SignUp authToken={authToken} />,
    document.getElementById('sign-up-container')
  );
});
