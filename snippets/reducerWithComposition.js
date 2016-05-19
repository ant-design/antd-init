import { handleActions } from 'redux-actions';
import { combineReducer } from 'redux';

const __reducer_a__ = handleActions({
  ['action/type'](state, action) {
    return { ...state };
  },
}, {
  initialStatePropExample: 1,
});

const __reducer_b__ = handleActions({
  ['action/type'](state, action) {
    return { ...state };
  },
}, {
  initialStatePropExample: 1,
});

export default combineReducer({
  __reducer_a__,
  __reducer_b__,
});
