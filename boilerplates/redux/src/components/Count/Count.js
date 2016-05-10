import styles from './Count.module.less';
import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { Button } from 'antd';
import { COUNT_DECREASE, COUNT_DECREASE_ASYNC, COUNT_REDUCE } from '../../constants/count';

const Count = ({ dispatch, count }) =>
  <div className={classnames({
      [styles.normal]: count % 2 === 0,
      [styles.odd]: count % 2 === 1,
    })}>
    <div>{count}</div>
    <Button className={styles.button} size="small" onClick={() => { dispatch({ type: COUNT_DECREASE }); }}>+</Button>
    <Button className={styles.button} size="small" onClick={() => { dispatch({ type: COUNT_REDUCE }); }}>-</Button>
    <Button className={styles.button} size="small" type="primary" onClick={() => { dispatch({ type: COUNT_DECREASE_ASYNC }); }}>+ (async)</Button>
  </div>

Count.propTypes = {
  count: PropTypes.any,
};

export default Count;
