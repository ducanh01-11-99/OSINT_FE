import produce from 'immer';
import {
  ADD_ACCOUNT,
  ADD_ACCOUNT_SUCCESS,
  CHANGE_PASSWORD,
  CHANGE_PASSWORD_SUCCESS,
  DELETE_ACCOUNT,
  DELETE_ACCOUNT_SUCCESS,
  GET_LIST_ACCOUNT,
  GET_LIST_ACCOUNT_SUCCESS,
  REQUEST_BEGIN,
  REQUEST_FAIL,
  RESET_PASSWORD,
  RESET_PASSWORD_SUCCESS,
  RESET_REDUX,
} from './constants';
export const initialState = {
  isLoading: false,
  totalCount: 0,
  listAccount: [],
};

/* eslint-disable default-case, no-param-reassign */
const reportReducer = (state = initialState, action) =>
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
      case ADD_ACCOUNT:
        draft.isLoading = true;
        break;
      case ADD_ACCOUNT_SUCCESS:
        draft.isLoading = false;
        break;
      case GET_LIST_ACCOUNT:
        draft.isLoading = true;
        break;
      case GET_LIST_ACCOUNT_SUCCESS:
        draft.totalCount = action.payload.count;
        draft.listAccount = action.payload.list;
        draft.isLoading = false;
        break;
      case DELETE_ACCOUNT:
        draft.isLoading = true;
        break;
      case DELETE_ACCOUNT_SUCCESS:
        draft.isLoading = false;
        break;
      case CHANGE_PASSWORD:
        draft.isLoading = true;
        break;
      case CHANGE_PASSWORD_SUCCESS:
        draft.isLoading = false;
        break;
      case RESET_PASSWORD:
        draft.isLoading = true;
        break;
      case RESET_PASSWORD_SUCCESS:
        draft.isLoading = false;
        break;
    }
  });

export default reportReducer;
