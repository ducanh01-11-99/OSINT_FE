/**
 * ...
 */
import * as constants from './constants';

export function requestBegin() {
  return {
    type: constants.REQUEST_BEGIN,
  };
}

export function requestFail(errorMessage) {
  return {
    type: constants.REQUEST_FAIL,
    errorMessage,
  };
}

export function requestSuccess() {
  return {
    type: constants.REQUEST_SUCCESS,
  };
}

export function getTopics() {
  return {
    type: constants.GET_TOPICS,
  };
}

export function getTopicsSuccess(payload) {
  return {
    type: constants.GET_TOPICS_SUCCESS,
    payload,
  };
}
