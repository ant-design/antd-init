import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import App from '../components/App';
import Layout from '../components/Layout';

const NotFound = (props) =>
  <div>
    NotFound
  </div>

const Routes = ({ history }) =>
  <Router history={history}>
    <Route path="/" component={Layout}>
      <IndexRoute component={App} />
      <Route path="actived" component={App} />
      <Route path="completed" component={App} />
    </Route>
    <Route path="*" component={NotFound}/>
  </Router>

Routes.propTypes = {
  history: PropTypes.any,
};

export default Routes;
