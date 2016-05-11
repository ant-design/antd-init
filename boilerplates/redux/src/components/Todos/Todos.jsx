import React, {
  Component,
  PropTypes,
} from 'react';
import { connect } from 'react-redux';
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
      return <div className={styles.loading}>Loading</div>;
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
        <h2>Todos</h2>
        { this.renderList() }
      </div>
    );
  }
}

Todos.propTypes = propTypes;

function mapStateToProps({ todos }) {
  return {
    todos,
  };
}

export default connect(mapStateToProps)(Todos);
