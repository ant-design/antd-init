import React, { Component } from 'react';
import { DatePicker } from 'antd';
import styles from './App.less';

export default class App extends Component {

  render() {
    return (
      <div className={styles.normal}>
        <DatePicker style={{ margin: 20 }} />
      </div>
    );
  }
};

