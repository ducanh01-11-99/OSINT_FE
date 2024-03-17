import { GET_ONE_TOPIC_SUCCESS, REQUEST_BEGIN, REQUEST_FAIL, RESET_REDUX, RESET_TIME } from './constants';

export function resetRedux() {
  return {
    type: RESET_REDUX,
  };
}

export function resetTime() {
  return {
    type: RESET_TIME,
  };
}

export function requestBegin() {
  return {
    type: REQUEST_BEGIN,
  };
}

export function getOneTopicSuccess(data) {
  return {
    type: GET_ONE_TOPIC_SUCCESS,
    data,
  };
}

export function requestFail(errorMessage) {
  return {
    type: REQUEST_FAIL,
    errorMessage,
  };
}
