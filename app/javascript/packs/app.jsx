import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from '../components';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/home" component={Home} />
    </Switch>
  </BrowserRouter>
);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.getElementById('root'));
});
