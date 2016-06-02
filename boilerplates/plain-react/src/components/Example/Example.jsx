import styles from './Example.less';
import React, { Component, PropTypes } from 'react';
import Sidebar from './Sidebar';

const Index = ({ children, location }) => {
  return (
    <div>
      <Sidebar location={location} />
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

Index.propTypes = {};

export default Index;
