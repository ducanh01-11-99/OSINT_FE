import produce from 'immer';
import {
  CHECK_USERNAME_ALREADY_EXIST_SUCCESS,
  EDIT_TOPIC_SUCCESS,
  GET_HISTORY_OF_TOPIC_SUCCESS,
  GET_LIST_TOPIC_SUCCESS,
  GET_TOPIC_DETAIL_SUCCESS,
  REQUEST_BEGIN,
  REQUEST_FAIL,
  RESET_REDUX,
} from './constants';
export const initialState = {
  isLoading: false,
  topicNameAlreadyExist: false,
  listTopic: {
    count: 0,
    list: [],
    total: 0,
  },
  listHistory: {
    count: 0,
    list: [],
  },
  detail: {},
};
/* eslint-disable default-case, no-param-reassign */
const topicManagementReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case RESET_REDUX:
        draft.isLoading = false;
        break;
      case REQUEST_FAIL:
        draft.isLoading = false;
        break;
      case REQUEST_BEGIN:
        draft.isLoading = true;
        break;
      case GET_LIST_TOPIC_SUCCESS:
        draft.isLoading = false;
        draft.listTopic = action.payload;
        break;
      case GET_HISTORY_OF_TOPIC_SUCCESS:
        draft.listHistory = action.payload;
        break;
      case GET_TOPIC_DETAIL_SUCCESS:
        draft.isLoading = false;
        draft.detail = action.payload;
        break;
      case CHECK_USERNAME_ALREADY_EXIST_SUCCESS:
        draft.topicNameAlreadyExist = action.payload;
        break;
      case EDIT_TOPIC_SUCCESS:
        break;
    }
  });
export default topicManagementReducer;
