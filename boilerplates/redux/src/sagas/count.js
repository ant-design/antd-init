import { takeLatest, isCancelError } from 'redux-saga';
import { take, call, put, fork, cancel } from 'redux-saga/effects';
import { COUNT_DECREASE_ASYNC, COUNT_DECREASE } from '../constants/count';
import { getAsyncCountResult } from '../services/api';
import { message } from 'antd';

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function* decreaseCountAsync() {
  const { data } = yield call(getAsyncCountResult);
  if (data) {
    yield put({type: COUNT_DECREASE});
  } else {
    message.error('出错了');
  }
}

export default function* countSaga() {
  yield takeLatest(COUNT_DECREASE_ASYNC, decreaseCountAsync);
}
