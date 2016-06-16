import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import styles from './__COMPONENT_NAME__.less';

function __COMPONENT_NAME__(props) {
  return (
    <div className={styles.normal}>
      __COMPONMENT_NAME__
    </div>
  );
}

__COMPONENT_NAME__.propTypes = {};

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(__COMPONENT_NAME__);
