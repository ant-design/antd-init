import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import App from '../components/App';

const Layout = ({ children }) =>
  <div style={{margin:20}}>
    <h1>Demo</h1>
    <br />
    {children}
    <br />
    <Link to="/">Go To /</Link><br />
    <Link to="/foo">Go To /foo</Link><br />
  </div>

const Foo = (props) =>
  <div>
    Foo
  </div>

const Routes = ({ history }) =>
  <Router history={history}>
    <Route path="/" component={Layout}>
      <IndexRoute component={App} />
      <Route path="/foo" component={Foo} />
    </Route>
  </Router>

Routes.propTypes = {
  history: PropTypes.any,
};

export default Routes;
