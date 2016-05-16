import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Todos from './Todos/Todos';
import Layout from './Layout';

const App = ({ location }) => {
  return (
    <Layout>
      <Todos location={location} />
    </Layout>
  );
};

App.propTypes = {
};

export default connect()(App);
