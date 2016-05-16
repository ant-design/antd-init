import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Todos from './Todos/Todos';

const App = ({ location }) => {
  return (
    <div><Todos location={location}/></div>
  );
};

App.propTypes = {
};

export default connect()(App);
