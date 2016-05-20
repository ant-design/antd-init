import React, { Component, PropTypes } from 'react';
import styles from './__LAYOUT_NAME__.less';

const __LAYOUT_NAME__ = ({ children }) => {
  return (
    <div className={styles.normal}>
      {children}
    </div>
  );
};

__LAYOUT_NAME__.propTypes = {};

export default __LAYOUT_NAME__;
