import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Todos from './Todos/Todos';

const App = (props) =>
  <div><Todos /></div>

App.propTypes = {
};

export default connect()(App);
