import { handleActions } from 'redux-actions';

import { COUNT_DECREASE, COUNT_REDUCE } from '../constants/count';

export default handleActions({
  [COUNT_DECREASE](state) {
    return state + 1;
  },
  [COUNT_REDUCE](state) {
    return state - 1;
  },
}, 0);
