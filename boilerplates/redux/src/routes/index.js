import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import HomePage from './HomePage';
import NotFound from './NotFound';
import Users from './Users';

function Routes({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={HomePage} />
      <Route path="/users" component={Users} />
      <Route path="*" component={NotFound} />
    </Router>
  );
}

Routes.propTypes = {
  history: PropTypes.any,
};

export default Routes;
