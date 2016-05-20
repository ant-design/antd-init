import { handleActions } from 'redux-actions';
import { combineReducer } from 'redux';

const todos = handleActions({
  ['todos/get'](state) {
    return { ...state, loading: true, };
  },
  ['todos/get/success'](state, action) {
    return { ...state, list: action.payload, loading: false, };
  },
  ['todos/get/failed'](state, action) {
    return { ...state, err: action.err, loading: false, };
  },
  ['todos/delete'](state, action) {
    const id = action.payload;
    const newList = state.list.filter(todo => todo.id !== id);
    return { ...state, list: newList, };
  },
  ['todos/create'](state, action) {
    const text = action.payload;
    const newTodo = { text, };
    return { ...state, list: [newTodo, ...state.list], };
  },
  ['todos/toggleComplete'](state, action) {
    const id = action.payload;
    const newList = state.list.map(todo => {
      if (id === todo.id) {
        return { ...todo, isComplete: !todo.isComplete };
      } else {
        return todo;
      }
    });
    return { ...state, list: newList, };
  },
  ['todos/toggleCompleteAll'](state, action) {
    const isComplete = action.payload;
    const newList = state.list.map(todo => ({ ...todo, isComplete }));
    return { ...state, list: newList, };
  },
}, {
  list: [],
  loading: false,
});

export default todos;
