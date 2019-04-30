import React from 'react';
import ReactDOM from 'react-dom';

import { SignIn } from '../components';

document.addEventListener('DOMContentLoaded', () => {
  const authToken = document
    .getElementById('sign-in-data')
    .getAttribute('data-token');

  const isUserSignedIn =
    document
      .getElementById('app-data')
      .getAttribute('data-is-user-signed-in') === 'true';

  ReactDOM.render(
    <SignIn authToken={authToken} />,
    document.getElementById('sign-in-container')
  );
});
