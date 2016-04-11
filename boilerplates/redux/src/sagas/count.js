import { isCancelError } from 'redux-saga';
import { take, call, put, fork, cancel } from 'redux-saga/effects';
import { COUNT_DECREASE_ASYNC, COUNT_DECREASE } from '../constants/count';

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function* decreaseCountWithDelay() {
  try {
    yield call(delay, 300);
    yield put({ type: COUNT_DECREASE });
  } catch (e) {
    if (isCancelError(e)) {}
  }
}

export default function* countSaga() {
  let task;
  while (true) {
    yield take(COUNT_DECREASE_ASYNC);
    if (task) yield cancel(task);
    task = yield fork(decreaseCountWithDelay);
  }
}
