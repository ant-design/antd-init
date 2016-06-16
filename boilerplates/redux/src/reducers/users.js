import { handleActions } from 'redux-actions';
import { combineReducer } from 'redux';

const users = handleActions({
  ['users/showLoading'](state, action) {
    return { ...state, loading: true };
  },
  ['users/create/success'](state, action) {
    const newUser = action.payload;
    return { ...state, list: [newUser, ...state.list], loading: false };
  },
  ['users/delete/success'](state, action) {
    const id = action.payload;
    const newList = state.list.filter(user => user.id !== id);
    return { ...state, list: newList, loading: false };
  },
  ['users/update/success'](state, action) {
    const updateUser = action.payload;
    const newList = state.list.map(user => {
      if (user.id === updateUser.id) {
        return { ...user, ...updateUser };
      }
      return user;
    });
    return { ...state, list: newList, loading: false };
  },
  ['users/query/success'](state, action) {
    return { ...state, ...action.payload, loading: false };
  },
  ['users/showModal'](state, action) {
    return { ...state, ...action.payload, modalVisible: true };
  },
  ['users/hideModal'](state, action) {
    return { ...state, modalVisible: false };
  },
}, {
  list: [],
  loading: false,
  total: null,
  current: null,
  currentItem: {},
  modalVisible: false,
  modalType: 'create',
});

export default users;
