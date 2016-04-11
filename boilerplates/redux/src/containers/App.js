import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import Count from '../components/Count/Count';

const App = (props) =>
  <div>
    <Count {...props} />
  </div>

App.propTypes = {
};

const selectors = createSelector([
  state => state.count,
], (count) => {
  return { count };
});

export default connect(selectors)(App);
