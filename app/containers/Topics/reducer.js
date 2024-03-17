/**
 * ...
 */

import produce from 'immer';
import { format, subDays } from 'date-fns';
import {
  RESET_REDUX,
  GET_ONE_TOPIC_SUCCESS,
  SEARCH_TOPICS_SUCCESS,
  GET_COMMENT_SUCCESS,
  GET_TOTAL_COMMENT,
  REQUEST_FAIL,
  LOAD_MORE_TOPICS_SUCCESS,
  GET_POSTS_BY_PLATFORM_SUCCESS,
  REQUEST_BEGIN,
  SEARCH_TOPICS,
  GET_POSTS_BY_PLATFORM,
  PUT_TEXT_TO_TRACING,
  RESET_TEXT,
  ARTICLE_TRACING_SUCCESS,
  ARTICLE_TRACING,
  GET_CURRENT_PAGE,
  GET_DETAIL_ARTICLE,
  GET_DETAIL_ARTICLE_SUCCESS,
  RESET_LOADING,
  CHANGE_TIME,
  RESET_TIME,
  GET_SUB_COMMENT_SUCCESS,
  GET_SUB_COMMENT,
  GET_DATA_CHART,
  GET_DATA_CHART_FAIL,
  GET_LIST_RELATED_ARTICLE,
  GET_LIST_RELATED_ARTICLE_FAIL,
  GET_LIST_RELATED_ARTICLE_SUCCESS,
  GET_LIST_RELATED_TOPIC,
  GET_LIST_RELATED_TOPIC_FAIL,
  GET_LIST_RELATED_TOPIC_SUCCESS,
  GET_DATA_CHART_SUCCESS,
  GET_ID_COMMENT_LOADING,
  GET_COMMENT,
} from './constants';

const currentDate = new Date();
const sevenDaysAgo = subDays(currentDate, 7);

export const initialState = {
  isLoading: false,
  isLoadingTopicFilter: false,
  listTopics: [],
  listPosts: [],
  infoListTopics: {},
  detailOne: {},
  comment: [],
  totalComment: 0,
  errorMessage: '',
  tracingData: {},
  articleTracingList: [],
  articleTracingListCount: 0,
  dataChart: [],
  listRelatedTopic: [],
  isLoadingTracing: false,
  isSuccessTracing: false,
  currentPage: 1,

  loadingDetail: false,
  loadingComment: false,
  loadingSubComment: false,

  isLoadingRelatedArticle: false,
  isLoadingRelatedTopic: false,
  isLoadingDataChart: false,

  listRelatedArticle: [],
  countRelatedArticle: 0,

  idCommentLoading: null,

  time: {
    from: format(sevenDaysAgo, 'yyyy-MM-dd'),
    to: format(currentDate, 'yyyy-MM-dd'),
  },
};

/* eslint-disable default-case, no-param-reassign */
const topicReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case REQUEST_BEGIN:
        draft.isLoading = true;
        break;
      case RESET_REDUX:
        draft.isLoading = false;
        draft.comment = [];
        draft.totalComment = 0;
        draft.detailOne = {};
        break;
      case RESET_TIME:
        draft.time = {
          from: format(sevenDaysAgo, 'yyyy-MM-dd'),
          to: format(currentDate, 'yyyy-MM-dd'),
        };
        break;
      case GET_ONE_TOPIC_SUCCESS:
        draft.isLoading = false;
        draft.detailOne = action.data;
        break;
      case SEARCH_TOPICS:
        draft.isLoadingTopicFilter = true;
        break;
      case SEARCH_TOPICS_SUCCESS:
        draft.isLoading = false;
        draft.isLoadingTopicFilter = false;
        draft.listTopics = action.payload.post_share_responses;
        draft.infoListTopics = action.payload;
        break;
      case LOAD_MORE_TOPICS_SUCCESS:
        draft.isLoading = false;
        draft.listPosts = action.payload.post_share_responses;
        break;
      case GET_CURRENT_PAGE:
        draft.currentPage = action.text;
        break;
      case GET_POSTS_BY_PLATFORM:
        draft.listTopics = [];
        break;
      case GET_POSTS_BY_PLATFORM_SUCCESS:
        draft.isLoading = false;
        draft.listTopics = action.payload.post_share_responses;
        break;
      case GET_COMMENT:
        draft.isLoading = true;
        break;
      case GET_COMMENT_SUCCESS:
        draft.isLoading = false;
        draft.comment = action.data;
        break;
      case GET_TOTAL_COMMENT:
        draft.totalComment = action.data;
        break;
      case GET_SUB_COMMENT:
        draft.idCommentLoading = action.data;
        draft.loadingSubComment = true;
        break;
      case GET_SUB_COMMENT_SUCCESS:
        draft.loadingSubComment = false;
        break;
      case REQUEST_FAIL:
        draft.isLoadingTracing = false;
        draft.isSuccessTracing = false;
        draft.isLoading = false;
        draft.loadingSubComment = false;
        draft.errorMessage = action.errorMessage;
        draft.loadingDetail = false;
        break;
      case PUT_TEXT_TO_TRACING:
        draft.tracingData = action.payload;
        break;
      case ARTICLE_TRACING:
        draft.isLoadingTracing = true;
        break;
      case GET_ID_COMMENT_LOADING:
        draft.idCommentLoading = action.payload.id;
        break;
      case ARTICLE_TRACING_SUCCESS:
        draft.articleTracingListCount = action.payload.post_responses.count;
        draft.articleTracingList = action.payload.post_responses.list;
        draft.dataChart = action.payload.spread_information;
        draft.listRelatedTopic = action.payload.related_topics;
        draft.isLoadingTracing = action.payload.isLoadingTracing;
        draft.isSuccessTracing = action.payload.isSuccessTracing;
        break;
      case RESET_TEXT:
        draft.tracingData = {};
        break;
      case GET_DETAIL_ARTICLE:
        draft.loadingDetail = true;
        break;
      case GET_DETAIL_ARTICLE_SUCCESS:
        draft.loadingDetail = false;
        break;
      case CHANGE_TIME:
        draft.time = action.payload.time;
        break;
      case RESET_LOADING:
        draft.loadingDetail = false;
        draft.loadingComment = false;
        break;

      case GET_LIST_RELATED_ARTICLE:
        draft.isLoadingRelatedArticle = true;
        break;
      case GET_LIST_RELATED_ARTICLE_SUCCESS:
        draft.isLoadingRelatedArticle = false;
        draft.listRelatedArticle = action.payload.data.list;
        draft.articleTracingListCount = action.payload.data.count;
        break;
      case GET_LIST_RELATED_ARTICLE_FAIL:
        draft.listRelatedArticle = [];
        draft.isLoadingRelatedArticle = false;
        break;

      case GET_LIST_RELATED_TOPIC:
        draft.isLoadingRelatedTopic = true;
        break;
      case GET_LIST_RELATED_TOPIC_FAIL:
        draft.listRelatedTopic = [];
        draft.isLoadingRelatedTopic = false;
        break;
      case GET_LIST_RELATED_TOPIC_SUCCESS:
        draft.listRelatedTopic = action.payload.data;
        draft.isLoadingRelatedTopic = false;
        break;

      case GET_DATA_CHART:
        draft.isLoadingDataChart = true;
        break;
      case GET_DATA_CHART_FAIL:
        draft.dataChart = [];
        draft.isLoadingDataChart = false;
        break;
      case GET_DATA_CHART_SUCCESS:
        draft.isLoadingDataChart = false;
        draft.dataChart = action.payload.data;
        break;
    }
  });

export default topicReducer;
