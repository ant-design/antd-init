import React, {
  Component,
  PropTypes,
} from 'react';
import { connect } from 'react-redux';
import { Spin } from 'antd';
import styles from './Todos.module.less';
import Todo from './Todo';

const propTypes = {
};

class Todos extends Component {

  componentWillMount() {
    this.props.dispatch({
      type: 'todos/get',
    });
  }

  handleToggleComplete(id) {
    this.props.dispatch({
      type: 'todos/toggleComplete',
      payload: id,
    });
  }

  renderList() {
    const { list, loading } = this.props.todos;
    if (loading) {
      return <Spin />;
    } else {
      return (
        <div className={styles.list}>
          { list.map(item => <Todo
                key={item.id}
                data={item}
                onToggleComplete={this.handleToggleComplete.bind(this, item.id)}
              />
            ) }
        </div>
      );
    }
  }

  render() {
    return (
      <div className={styles.normal}>
        { this.renderList() }
      </div>
    );
  }
}

Todos.propTypes = propTypes;

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
