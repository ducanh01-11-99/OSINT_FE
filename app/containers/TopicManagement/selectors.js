import { createSelector } from 'reselect';
import { REDUX_KEY } from '../../utils/constants';
import { initialState } from './reducer';
export const selectTopicManagement = state =>
  state[REDUX_KEY.topicManagement] || initialState;
export const selectTopicManagementList = () =>
  createSelector(
    selectTopicManagement,
    state => state.listTopic,
  );
export const selectHistoryOfTopic = () =>
  createSelector(
    selectTopicManagement,
    state => state.listHistory,
  );
export const selectTopicDetail = () =>
  createSelector(
    selectTopicManagement,
    state => state.detail,
  );
export const selectTopicManagementLoading = () =>
  createSelector(
    selectTopicManagement,
    state => state.isLoading,
  );
export const selectCheckTopicNameAlreadyExist = () =>
  createSelector(
    selectTopicManagement,
    state => state.topicNameAlreadyExist,
  );
