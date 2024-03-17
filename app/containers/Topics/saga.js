import { call, put, takeLatest } from 'redux-saga/effects';
import { axiosGet, axiosPost } from '../../utils/request';

import * as constants from './constants';
import * as actions from './actions';

export function* getOneTopic(action) {
  yield put(actions.requestBegin());
  const path = `v1/posts/${action.data}`;
  try {
    const res = yield call(axiosGet, path);
    yield put(actions.getOneTopicSuccess(res.data.data));
  } catch (error) {
    yield put(actions.requestFail(error));
  }
}

export default function* watchFetchTopics() {
  yield takeLatest(constants.GET_ONE_TOPIC, getOneTopic);
}
