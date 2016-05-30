import React, { PropTypes } from 'react';
import { Router, Route, Link, IndexRoute, IndexRedirect } from 'react-router';

import App from '../components/App';
import NotFound from '../components/NotFound';
import Todos from '../components/Todos/Todos';

import Example from '../components/Example';
import TableList from '../components/Example/TableList/TableList';

// https://github.com/reactjs/react-router
const Routes = ({ history }) =>
  <Router history={history}>

    <Route path="/" component={App}>
      <Route path="/example" component={Example}>
        <Route path="/example/tableList" component={TableList} />
        <IndexRoute component={TableList} />
      </Route>

      <Route path="/todo" component={Todos} />
      <Route path="/todo/actived" component={Todos} />
      <Route path="/todo/completed" component={Todos} />

      <IndexRedirect to="/example/tableList" />
    </Route>

    <Route path="*" component={NotFound} />

  </Router>;

Routes.propTypes = {
  history: PropTypes.any,
};

export default Routes;
