import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import styles from './__COMPONENT_NAME__.less';

class __COMPONENT_NAME__ extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.normal}>
        __COMPONMENT_NAME__
      </div>
    );
  }
}

__COMPONENT_NAME__.propTypes = {};

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(__COMPONENT_NAME__);
