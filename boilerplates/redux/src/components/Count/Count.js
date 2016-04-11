import styles from './Count.module.less';
import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { COUNT_DECREASE, COUNT_DECREASE_ASYNC, COUNT_REDUCE } from '../../constants/count';

const Count = ({ dispatch, count }) =>
  <div className={classnames({
      [styles.normal]: count % 2 === 0,
      [styles.odd]: count % 2 === 1,
    })}>
    <div>{count}</div>
    <button onClick={() => { dispatch({ type: COUNT_DECREASE }); }}>+</button>
    <button onClick={() => { dispatch({ type: COUNT_REDUCE }); }}>-</button>
    <button onClick={() => { dispatch({ type: COUNT_DECREASE_ASYNC }); }}>+ (async)</button>
    <br /><br />
    <If condition={count % 2 === 0}>
      <span>even</span>
    <Else />
      <span>odd</span>
    </If>
  </div>

Count.propTypes = {
  count: PropTypes.any,
};

export default Count;
