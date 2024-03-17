// eslint-disable-next-line no-unused-vars
import { call, put, takeLatest } from 'redux-saga/effects';
// import { axiosPost } from '../../utils/request';
import * as constants from './constants';
import * as actions from './actions';
import {
  axiosDelete,
  axiosGet,
  axiosPost,
  axiosPut,
} from '../../utils/request';

// eslint-disable-next-line no-unused-vars
export function* getTopicList(action) {
  yield put(actions.requestBegin());
  const { page, size } = action.payload;
  const path = `v1/topics/filter?page=${page}&size=${size}`;
  try {
    const res = yield call(axiosPost, path, action.payload);
    yield put(actions.getListTopicSuccess(res.data.data));
  } catch (err) {
    yield put(actions.requestFail());
  }
}
// eslint-disable-next-line no-unused-vars
export function* getHistoryOfTopic(action) {
  yield put(actions.requestBegin());
  const { payload } = action;
  const { id, body } = payload;
  const path = `v1/topics/${id}/list-histories`;
  try {
    const res = yield call(axiosPost, path, body);
    yield put(actions.getHistoryOfTopicSuccess(res.data.data));
  } catch (error) {
    yield put(actions.requestFail());
  }
}
export function* createTopic(action) {
  yield put(actions.requestBegin());
  const { payload } = action;
  const { body, callBackSuccess, callBackFailed } = payload;
  const path = 'v1/topics';
  try {
    const res = yield call(axiosPost, path, body);
    yield put(actions.createTopicSuccess(res.data.data));
    callBackSuccess();
  } catch (error) {
    yield put(actions.requestFail(error));
    callBackFailed();
  }
}
export function* getTopicDetail(action) {
  yield put(actions.requestBegin());
  const id = action.payload;
  const path = `v1/topics/sub-topic/${id}`;
  try {
    const res = yield call(axiosGet, path);
    yield put(actions.getTopicDetailSuccess(res.data.data));
  } catch (error) {
    yield put(actions.requestFail());
  }
}
export function* editTopic(action) {
  yield put(actions.requestBegin());
  const { payload } = action;
  const { id, body, callBackSuccess, callBackFailed } = payload;
  const path = `v1/topics/${id}`;
  try {
    const res = yield call(axiosPut, path, body);
    yield put(actions.editTopicSuccess(res.data.data));
    callBackSuccess();
  } catch (error) {
    yield put(actions.requestFail(error));
    callBackFailed();
  }
}
export function* deleteTopic(action) {
  yield put(actions.requestBegin());
  const { payload } = action;
  const { id, callBackSuccess, callBackFailed } = payload;
  const path = `v1/topics/${id}`;
  try {
    const res = yield call(axiosDelete, path);
    yield put(actions.deleteTopicSuccess(res.data.data));
    callBackSuccess();
  } catch (error) {
    yield put(actions.requestFail(error));
    callBackFailed();
  }
}
export function* checkUsernameAlreadyExist(action) {
  const { payload } = action;
  const path = `v1/topics/check-name?name=${payload}`;
  try {
    const res = yield call(axiosGet, path, true);
    if (res.data.message) {
      yield put(actions.checkTopicNameAlreadyExistSuccess(false));
    } else {
      yield put(actions.checkTopicNameAlreadyExistSuccess(true));
    }
  } catch (error) {
    yield put(actions.checkTopicNameAlreadyExistSuccess(true));
  }
}

export default function* watchFetchTopics() {
  yield takeLatest(constants.GET_LIST_TOPIC, getTopicList);
  yield takeLatest(constants.GET_HISTORY_OF_TOPIC, getHistoryOfTopic);
  yield takeLatest(constants.CREATE_TOPIC, createTopic);
  yield takeLatest(constants.GET_TOPIC_DETAIL, getTopicDetail);
  yield takeLatest(constants.EDIT_TOPIC, editTopic);
  yield takeLatest(constants.DELETE_TOPIC, deleteTopic);
  yield takeLatest(
    constants.CHECK_USERNAME_ALREADY_EXIST,
    checkUsernameAlreadyExist,
  );
}
