import {
  CHECK_USERNAME_ALREADY_EXIST,
  CHECK_USERNAME_ALREADY_EXIST_SUCCESS,
  CREATE_TOPIC,
  CREATE_TOPIC_SUCCESS,
  DELETE_TOPIC,
  DELETE_TOPIC_SUCCESS,
  EDIT_TOPIC,
  EDIT_TOPIC_SUCCESS,
  GET_HISTORY_OF_TOPIC,
  GET_HISTORY_OF_TOPIC_SUCCESS,
  GET_LIST_TOPIC,
  GET_LIST_TOPIC_SUCCESS,
  GET_TOPIC_DETAIL,
  GET_TOPIC_DETAIL_SUCCESS,
  REQUEST_BEGIN,
  REQUEST_FAIL,
  RESET_REDUX,
} from './constants';
export function resetRedux() {
  return {
    type: RESET_REDUX,
  };
}
export function requestBegin() {
  return {
    type: REQUEST_BEGIN,
  };
}
export function requestFail() {
  return {
    type: REQUEST_FAIL,
  };
}
export function getListTopic(payload) {
  return {
    type: GET_LIST_TOPIC,
    payload,
  };
}
export function getListTopicSuccess(payload) {
  return {
    type: GET_LIST_TOPIC_SUCCESS,
    payload,
  };
}
export function getHistoryOfTopic(payload) {
  return {
    type: GET_HISTORY_OF_TOPIC,
    payload,
  };
}
export function getHistoryOfTopicSuccess(payload) {
  return {
    type: GET_HISTORY_OF_TOPIC_SUCCESS,
    payload,
  };
}
export function createTopic(payload) {
  return {
    type: CREATE_TOPIC,
    payload,
  };
}
export function createTopicSuccess(payload) {
  return {
    type: CREATE_TOPIC_SUCCESS,
    payload,
  };
}
export function getTopicDetail(payload) {
  return {
    type: GET_TOPIC_DETAIL,
    payload,
  };
}
export function getTopicDetailSuccess(payload) {
  return {
    type: GET_TOPIC_DETAIL_SUCCESS,
    payload,
  };
}
export function editTopic(payload) {
  return {
    type: EDIT_TOPIC,
    payload,
  };
}
export function editTopicSuccess(payload) {
  return {
    type: EDIT_TOPIC_SUCCESS,
    payload,
  };
}
export function deleteTopic(payload) {
  return {
    type: DELETE_TOPIC,
    payload,
  };
}
export function deleteTopicSuccess(payload) {
  return {
    type: DELETE_TOPIC_SUCCESS,
    payload,
  };
}
export function checkTopicNameAlreadyExist(payload) {
  return {
    type: CHECK_USERNAME_ALREADY_EXIST,
    payload,
  };
}
export function checkTopicNameAlreadyExistSuccess(payload) {
  return {
    type: CHECK_USERNAME_ALREADY_EXIST_SUCCESS,
    payload,
  };
}
