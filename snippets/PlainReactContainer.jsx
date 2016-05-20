import React, { Component, PropTypes } from 'react';
import styles from './__COMPONENT_NAME__.less';

class __COMPONENT_NAME__ extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.normal}>
        __COMPONENT_NAME__
      </div>
    );
  }
}

__COMPONENT_NAME__.propTypes = {};

export default __COMPONENT_NAME__;
