import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './Todo.less';

const Todo = ({ data, onToggleComplete }) => {
  const { text, isComplete } = data;
  const todoCls = classnames({
    [styles.normal]: true,
    [styles.isComplete]: isComplete,
  });

  return (
    <div className={todoCls}>
      <div className={styles.checkbox}>
        <input
          type="checkbox"
          value=""
          checked={isComplete}
          onChange={onToggleComplete.bind(this)}
        />
      </div>
      <div className={styles.text}>
        {text}
      </div>
    </div>
  );
};

Todo.propTypes = {
  data: PropTypes.object.isRequired,
  onToggleComplete: PropTypes.func.isRequired,
};

export default Todo;

