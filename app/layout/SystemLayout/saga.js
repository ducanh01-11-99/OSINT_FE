import { call, put, takeLatest } from 'redux-saga/effects';
import * as constants from './constants';
import * as actions from './actions';
import { axiosGet } from '../../utils/request';

export function* getTopics() {
  yield put(actions.requestBegin());
  const path = 'v1/topics';
  try {
    const res = yield call(axiosGet, path);
    yield put(actions.getTopicsSuccess(res.data.data));
  } catch (error) {
    yield put(actions.requestFail());
  }
}

export default function* watchGetTopics() {
  yield takeLatest(constants.GET_TOPICS, getTopics);
}
