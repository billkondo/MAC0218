import React from 'react';
import ReactDOM from 'react-dom';

import { Navbar } from '../components';

document.addEventListener('DOMContentLoaded', () => {
  const isUserSignedIn =
    document
      .getElementById('app-data')
      .getAttribute('data-is-user-signed-in') === 'true';

  ReactDOM.render(
    <Navbar isAuth={isUserSignedIn} />,
    document.getElementById('navbar')
  );
  // ReactDOM.render(
  //   <App isAuth={isUserSignedIn} />,
  //   document.getElementById('root')
  // );
});
