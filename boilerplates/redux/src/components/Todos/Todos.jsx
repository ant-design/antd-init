import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Spin } from 'antd';
import Todo from './Todo';
import styles from './Todos.less';

const Todos = ({ todos, dispatch }) => {
  const handleToggleComplete = (id) => {
    dispatch({
      type: 'todos/toggleComplete',
      payload: id,
    });
  };

  const renderList = () => {
    const { list, loading } = todos;
    if (loading) {
      return <Spin />;
    }

    return (
      <div className={styles.list}>
        {list.map(item => <Todo
          key={item.id}
          data={item}
          onToggleComplete={handleToggleComplete.bind(this, item.id)}
        />
          )}
      </div>
    );
  };

  return (
    <div className={styles.normal}>
      {renderList()}
    </div>
  );
};

Todos.propTypes = {};

function filter(todos, pathname) {
  const newList = todos.list.filter(todo => {
    if (pathname === '/actived') {
      return !todo.isComplete;
    }
    if (pathname === '/completed') {
      return todo.isComplete;
    }
    return true;
  });
  return { ...todos, list: newList };
}

function mapStateToProps({ todos }, { location }) {
  return {
    todos: filter(todos, location.pathname),
  };
}

export default connect(mapStateToProps)(Todos);
