import { call, put, takeLatest } from 'redux-saga/effects';
import {
  axiosDelete,
  axiosGet,
  axiosPost,
  axiosPut,
} from '../../utils/request';
import * as constants from './constants';
import * as actions from './actions';

// api thêm sửa tài khoản
export function* addAccount(action) {
  const body = action.payload;
  try {
    let res = {};
    if (action.typeAction === 'add') {
      res = yield call(axiosPost, 'v1/users/register', body);
    }
    if (action.typeAction === 'edit') {
      res = yield call(
        axiosPut,
        `v1/users/${action.payload.id}/information`,
        body,
      );
    }
    if (action.callback) {
      action.callback(res);
    }
    if (res.data.status === 200) {
      yield put(actions.addAccountSuccess({}));
    } else {
      yield put(actions.requestFail());
    }
  } catch (error) {
    yield put(actions.requestFail());
  }
  // actions.addAccountSuccess({});
}

// api lấy danh sách tài khoản
export function* getListAccount(action) {
  const body = action.payload;
  const path = `v1/users/filter?page=${action.currentPage - 1}&size=${
    action.pageSize
  }`;
  try {
    const res = yield call(axiosPost, path, body);
    if (res.data.status === 200) {
      yield put(actions.getListAccountSuccess(res.data.data));
    } else {
      yield put(actions.getListAccountSuccess(res.data.data));
    }
  } catch (error) {
    yield put(actions.requestFail());
  }
}

export function* deleteAccount(action) {
  const idDel = action.payload.id;
  const path = `v1/users/${idDel}`;
  try {
    const res = yield call(axiosDelete, path);
    if (action.callback) {
      action.callback(res);
    }
    if (res.data.status === 200) {
      yield put(actions.deleteAccountSuccess());
    } else {
      yield put(actions.requestFail());
    }
  } catch (error) {
    yield put(actions.requestFail());
  }
}

export function* changePassword(action) {
  const idUser = action.payload.id;
  const path = `v1/users/${idUser}/password`;
  const body = action.payload;
  try {
    const res = yield call(axiosPut, path, body);
    if (action.callback) {
      action.callback(res.data);
    }
    if (res.data.status === 200) {
      yield put(actions.changePasswordSuccess());
    } else {
      yield put(actions.requestFail());
    }
  } catch (error) {
    yield put(actions.requestFail());
  }
}

export function* checkExistName(action) {
  const { username } = action;
  const path = `v1/users/check-username?username=${username}`;
  try {
    const res = yield call(axiosGet, path, true);
    if (res && res.data.status === 200) {
      action.callback(0);
      yield put(actions.checkExistNameSuccess());
    } else {
      action.callback(1);
      yield put(actions.requestFail());
    }
  } catch (error) {
    action.callback(1);
    yield put(actions.requestFail());
  }
}

export function* resetPassword(action) {
  const idUser = action.payload;
  const path = `v1/users/${idUser}/reset-password`;
  try {
    const res = yield call(axiosPut, path);
    if (res && res.data.status === 200) {
      action.callback(0);
      yield put(actions.resetPasswordSuccess());
    } else {
      action.callback(1);
      yield put(actions.requestFail());
    }
  } catch (error) {
    // action.callback(1);
    yield put(actions.requestFail());
  }
}

export function* logout(action) {
  const path = `v1/auth/logout`;
  try {
    const res = yield call(axiosGet, path);
    if (res && res.data.status === 200) {
      action.callback(0);
      yield put(actions.logoutSuccess());
    } else {
      action.callback(1);
      yield put(actions.requestFail());
    }
  } catch (error) {
    yield put(actions.requestFail());
  }
}

export default function* watchFetchTopics() {
  yield takeLatest(constants.ADD_ACCOUNT, addAccount);
  yield takeLatest(constants.GET_LIST_ACCOUNT, getListAccount);
  yield takeLatest(constants.DELETE_ACCOUNT, deleteAccount);
  yield takeLatest(constants.CHANGE_PASSWORD, changePassword);
  yield takeLatest(constants.CHECK_EXIST_USER_NAME, checkExistName);
  yield takeLatest(constants.RESET_PASSWORD, resetPassword);
  yield takeLatest(constants.LOGOUT, logout);
}
