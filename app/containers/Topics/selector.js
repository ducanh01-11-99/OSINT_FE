/**
 * ...
 */

import { createSelector } from 'reselect';
import { REDUX_KEY } from '../../utils/constants';
import { initialState } from './reducer';

export const selectTopics = state => state[REDUX_KEY.topics] || initialState;

function selectLoading() {
  return createSelector(
    selectTopics,
    state => state.isLoading,
  );
}

function selectLoadingSubComment() {
  return createSelector(
    selectTopics,
    state => state.loadingSubComment,
  );
}

function selectLoadingTopicFilter() {
  return createSelector(
    selectTopics,
    state => state.isLoadingTopicFilter,
  );
}

function selectIDCommentLoading() {
  return createSelector(
    selectTopics,
    state => state.idCommentLoading,
  );
}

function selectTime() {
  return createSelector(
    selectTopics,
    state => state.time,
  );
}

export const selectListPartner = () =>
  createSelector(
    selectTopics,
    state => state.detailOne,
  );

function selectListTopics() {
  return createSelector(
    selectTopics,
    state => state.listTopics,
  );
}
function selectInfoListTopics() {
  return createSelector(
    selectTopics,
    state => state.infoListTopics,
  );
}

function selectListPosts() {
  return createSelector(
    selectTopics,
    state => state.listPosts,
  );
}

export const selectText = () =>
  createSelector(
    selectTopics,
    state => state.tracingData,
  );

export const selectDataChart = () =>
  createSelector(
    selectTopics,
    state => state.dataChart,
  );

export const selectRelatedTopic = () =>
  createSelector(
    selectTopics,
    state => state.listRelatedTopic,
  );

export const selectArticleTracingListCount = () =>
  createSelector(
    selectTopics,
    state => state.articleTracingListCount,
  );

export const selectLoadingTracing = () =>
  createSelector(
    selectTopics,
    state => state.isLoadingTracing,
  );

export const selectCurrentPage = () =>
  createSelector(
    selectTopics,
    state => state.currentPage,
  );

export const selectLoadingGetListRelatedArticle = () =>
  createSelector(
    selectTopics,
    state => state.isLoadingRelatedArticle,
  );

export const selectListRelated = () =>
  createSelector(
    selectTopics,
    state => state.listRelatedArticle,
  );

export const selectLoadingRelatedTopic = () =>
  createSelector(
    selectTopics,
    state => state.isLoadingRelatedTopic,
  );

export const selectLoadingDataChart = () =>
  createSelector(
    selectTopics,
    state => state.isLoadingDataChart,
  );

export {
  selectLoading,
  selectListTopics,
  selectInfoListTopics,
  selectListPosts,
  selectLoadingTopicFilter,
  selectTime,
  selectLoadingSubComment,
  selectIDCommentLoading,
};
