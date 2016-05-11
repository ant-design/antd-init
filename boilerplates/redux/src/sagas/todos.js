import { takeLatest } from 'redux-saga';
import { take, call, put, fork, cancel } from 'redux-saga/effects';
import { getAll } from '../services/todos';

function* getTodos() {
  try {
    const { data } = yield call(getAll);
    if (data) {
      yield put({
        type: 'todos/get/success',
        payload: data,
      });
    }
  } catch (err) {
    yield put({
      type: 'todos/get/failed',
      err,
    });
  }
}

function* watchTodosGet() {
  yield takeLatest('todos/get', getTodos)
}

export default function* () {
  yield fork(watchTodosGet);
}
