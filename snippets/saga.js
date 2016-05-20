import { takeEvery, takeLatest } from 'redux-saga';
import { take, call, put, fork, cancel, select } from 'redux-saga/effects';
import { message } from 'antd';

function __TASK_NAME__() {
  try {
    //yield call();
    //yield select();
    //yield put();
  } catch(e) {
    message.error(e);
  }
}

function* taskWatcher() {
  yield takeLatest('action/type', __TASK_NAME__);
}

export default function* () {
  yield fork(taskWatcher);
}
