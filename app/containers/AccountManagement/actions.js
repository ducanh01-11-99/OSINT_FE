import {
  ADD_ACCOUNT,
  ADD_ACCOUNT_SUCCESS,
  CHANGE_PASSWORD,
  CHANGE_PASSWORD_SUCCESS,
  CHECK_EXIST_USER_NAME,
  CHECK_EXIST_USER_NAME_SUCCESS,
  DELETE_ACCOUNT,
  DELETE_ACCOUNT_SUCCESS,
  GET_LIST_ACCOUNT,
  GET_LIST_ACCOUNT_SUCCESS,
  LOGOUT,
  LOGOUT_SUCCESS,
  REQUEST_BEGIN,
  REQUEST_FAIL,
  RESET_PASSWORD,
  RESET_PASSWORD_SUCCESS,
  RESET_REDUX,
} from './constants';

export function resetRedux() {
  return {
    type: RESET_REDUX,
  };
}

export function requestFail() {
  return {
    type: REQUEST_FAIL,
  };
}

export function requestBegin() {
  return {
    type: REQUEST_BEGIN,
  };
}

export const addCount = (payload, typeAction, callback) => ({
  type: ADD_ACCOUNT,
  payload,
  typeAction,
  callback,
});

export const addAccountSuccess = payload => ({
  type: ADD_ACCOUNT_SUCCESS,
  payload,
});

export const getListAccount = (payload, currentPage, pageSize) => ({
  type: GET_LIST_ACCOUNT,
  payload,
  currentPage,
  pageSize,
});

export const getListAccountSuccess = (payload, callback) => ({
  type: GET_LIST_ACCOUNT_SUCCESS,
  payload,
  callback,
});

export const deleteAccount = (payload, callback) => ({
  type: DELETE_ACCOUNT,
  payload,
  callback,
});

export const deleteAccountSuccess = () => ({
  type: DELETE_ACCOUNT_SUCCESS,
});

export const changePassword = (payload, callback) => ({
  type: CHANGE_PASSWORD,
  payload,
  callback,
});

export const changePasswordSuccess = () => ({
  type: CHANGE_PASSWORD_SUCCESS,
});

export const checkExistName = (username, callback) => ({
  type: CHECK_EXIST_USER_NAME,
  username,
  callback,
});

export const checkExistNameSuccess = () => ({
  type: CHECK_EXIST_USER_NAME_SUCCESS,
});

export const resetPassword = (idUser, callback) => ({
  type: RESET_PASSWORD,
  payload: idUser,
  callback,
});

export const resetPasswordSuccess = () => ({
  type: RESET_PASSWORD_SUCCESS,
});

export const logout = callback => ({
  type: LOGOUT,
  callback,
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});
