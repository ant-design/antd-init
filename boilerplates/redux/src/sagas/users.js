import { takeLatest } from 'redux-saga';
import { take, call, put, fork, cancel, select } from 'redux-saga/effects';
import { message } from 'antd';
import { hashHistory } from 'react-router';
import { create, remove, update, query } from '../services/users';

function* _query({ payload, initial }) {
  try {
    const routing = yield select(({ routing }) => routing);
    const newQuery = {
      ...routing.locationBeforeTransitions.query,
      page: undefined,
      ...payload,
    };

    if (!initial) {
      yield call(hashHistory.push, {
        pathname: '/users',
        query: newQuery,
      });
    }

    yield put({ type: 'users/showLoading' });
    const { jsonResult } = yield call(query, newQuery);
    if (jsonResult) {
      yield put({
        type: 'users/query/success',
        payload: {
          list: jsonResult.data,
          total: jsonResult.page.total,
          current: jsonResult.page.current,
        },
      });
    }
  } catch (err) {
    message.error(err);
  }
}

function* _delete({ payload }) {
  try {
    yield put({ type: 'users/showLoading' });
    const { jsonResult } = yield call(remove, { id: payload });
    if (jsonResult && jsonResult.success) {
      yield put({
        type: 'users/delete/success',
        payload,
      });
    }
  } catch (err) {
    message.error(err);
  }
}

function* _create({ payload }) {
  try {
    yield put({ type: 'users/hideModal' });
    yield put({ type: 'users/showLoading' });
    const { jsonResult } = yield call(create, payload);
    if (jsonResult && jsonResult.success) {
      yield put({
        type: 'users/create/success',
        payload,
      });
    }
  } catch (err) {
    message.error(err);
  }
}

function* _update({ payload }) {
  try {
    yield put({ type: 'users/hideModal' });
    yield put({ type: 'users/showLoading' });
    const id = yield select(({ users }) => users.currentItem.id);
    const newUser = { ...payload, id };
    const { jsonResult } = yield call(update, newUser);
    if (jsonResult && jsonResult.success) {
      yield put({
        type: 'users/update/success',
        payload: newUser,
      });
    }
  } catch (err) {
    message.error(err);
  }
}

function* watchGet() {
  yield takeLatest('users/query', _query);
}
function* watchDelete() {
  yield takeLatest('users/delete', _delete);
}
function* watchCreate() {
  yield takeLatest('users/create', _create);
}
function* watchUpdate() {
  yield takeLatest('users/update', _update);
}

export default function* () {
  yield fork(watchGet);
  yield fork(watchDelete);
  yield fork(watchCreate);
  yield fork(watchUpdate);

  // Load users.
  const routing = yield select(({ routing }) => routing);
  yield put({
    type: 'users/query',
    payload: routing.locationBeforeTransitions.query,
    initial: true,
  });
}
