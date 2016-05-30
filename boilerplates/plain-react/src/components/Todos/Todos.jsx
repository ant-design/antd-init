import React, { Component, PropTypes } from 'react';
import { Spin } from 'antd';
import { Link } from 'react-router';
import Todo from './Todo';
import styles from './Todos.less';
import { getAll } from '../../services/todos';

function filter(todos, pathname) {
  const newList = todos.list.filter(todo => {
    if (pathname === '/todo/actived') {
      return !todo.isComplete;
    }
    if (pathname === '/todo/completed') {
      return todo.isComplete;
    }
    return true;
  });
  return { ...todos, list: newList };
}

class TodosContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.loadTodos();
  }

  loadTodos() {
    this.setState({ loading: true });
    getAll().then(({ jsonResult }) => {
      this.setState({
        list: jsonResult.data,
        loading: false,
      });
    })
  }

  handleToggleComplete = (id) => {
    const newList = this.state.list.map(todo => {
      if (id === todo.id) {
        return { ...todo, isComplete: !todo.isComplete };
      }
      return todo;
    });
    this.setState({
      list: newList,
    });
  }

  render() {
    const { location } = this.props;
    const { list, loading } = this.state;
    const todos = filter({ list, loading }, location.pathname);
    return (
      <div>
        <div>
          <Link to="/todo">All</Link><br />
          <Link to="/todo/actived">Actived</Link><br />
          <Link to="/todo/completed">Completed</Link><br />
        </div>
        <Todos todos={todos} onToggleComplete={this.handleToggleComplete} />
      </div>
    );
  }
}

const Todos = ({ todos, onToggleComplete }) => {
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
          onToggleComplete={onToggleComplete.bind(this, item.id)}
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

export default TodosContainer;
