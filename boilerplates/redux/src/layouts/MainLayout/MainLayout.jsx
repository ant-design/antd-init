import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import styles from './MainLayout.less';
import Header from './Header';
import Sidebar from './Sidebar';

const MainLayout = ({ children, location }) => {
  return (
    <div className={styles.normal}>
      <Header location={location} />
      <div className={styles.content}>
        <Sidebar />
        <div className={styles.main}>
          {children}
        </div>
      </div>
      <div className={styles.foot}>
        Built with react, react-router, ant-tool, css-modules, antd...
      </div>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainLayout;
