import React, {
  Component,
  PropTypes,
} from 'react';
import styles from './Todo.less';
import classnames from 'classnames';

const propTypes = {
  data: PropTypes.object.isRequired,
  onToggleComplete: PropTypes.func.isRequired,
};

class Todo extends Component {

  render() {
    const { data, onToggleComplete } = this.props;
    const { text, isComplete } = this.props.data;
    const cls = classnames({
      [styles.normal]: true,
      [styles.isComplete]: isComplete,
    });
    return (
      <div className={cls}>
        <div className={styles.checkbox}>
          <input type="checkbox" value="" checked={isComplete} onChange={onToggleComplete.bind(this)} />
        </div>
        <div className={styles.text}>
          { text }
        </div>
      </div>
    );
  }
}

Todo.propTypes = propTypes;

export default Todo;

