import React, { Component, PropTypes } from 'react';
import Todos from './Todos/Todos';
import MainLayout from '../layouts/MainLayout/MainLayout';

const App = ({ children, location }) => {
  return (
    <MainLayout location={location}>
      {children}
    </MainLayout>
  );
};

App.propTypes = {};

export default App;
