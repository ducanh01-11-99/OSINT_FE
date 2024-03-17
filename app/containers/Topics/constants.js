/**
 * ...
 */

import { REDUX_KEY } from 'utils/constants';
import { t } from 'i18next';

const key = REDUX_KEY.topics;

export const GET_ONE_TOPIC = `${REDUX_KEY.topics}/GET_ONE_TOPIC`;
export const GET_ONE_TOPIC_SUCCESS = `${
  REDUX_KEY.topics.accountManagement
}/GET_ONE_TOPIC_SUCCESS`;
export const REQUEST_BEGIN = `${REDUX_KEY.topics}/REQUEST_BEGIN`;

export const RESET_REDUX = `${REDUX_KEY.topics}/RESET_REDUX`;
export const REQUEST_FAIL = `${REDUX_KEY.topics}.REQUEST_FAIL`;
export const SEARCH_TOPICS = `${REDUX_KEY.topics}/SEARCH_TOPICS`;
export const SEARCH_TOPICS_SUCCESS = `${
  REDUX_KEY.topics
}/SEARCH_TOPICS_SUCCESS`;
export const LOAD_MORE_TOPICS = `${REDUX_KEY.topics}/LOAD_MORE_TOPICS`;
export const LOAD_MORE_TOPICS_SUCCESS = `${
  REDUX_KEY.topics
}/LOAD_MORE_TOPICS_SUCCESS`;
export const GET_POSTS_BY_PLATFORM = `${
  REDUX_KEY.topics
}/GET_POSTS_BY_PLATFORM`;
export const GET_POSTS_BY_PLATFORM_SUCCESS = `${
  REDUX_KEY.topics
}/GET_POSTS_BY_PLATFORM_SUCCESS`;

export const GET_COMMENT = `${REDUX_KEY.topics}/GET_COMMENT`;
export const GET_COMMENT_SUCCESS = `${REDUX_KEY.topics}/GET_COMMENT_SUCCESS`;

export const GET_SUB_COMMENT = `${REDUX_KEY.topics}/GET_SUB_COMMENT`;
export const GET_SUB_COMMENT_SUCCESS = `${
  REDUX_KEY.topics
}/GET_SUB_COMMENT_SUCCESS`;

export const GET_TOTAL_COMMENT = `${REDUX_KEY.topics}/GET_TOTAL_COMMENT`;

export const PUT_TEXT_TO_TRACING = `${REDUX_KEY.topics}/PUT_TEXT_TO_TRACING`;

export const RESET_TEXT = `${REDUX_KEY.topics}/RESET_TEXT`;
export const ARTICLE_TRACING = `${REDUX_KEY.topics}/ARTICLE_TRACING`;
export const ARTICLE_TRACING_SUCCESS = `${
  REDUX_KEY.topics
}/ARTICLE_TRACING_SUCCESS`;

export const GET_CURRENT_PAGE = `${REDUX_KEY.topics}/GET_CURRENT_PAGE`;

export const GET_ID_COMMENT_LOADING = `${key}/GET_ID_COMMENT_LOADING`;

export const SOURCE_DATA_DEFAULT = {
  facebook_group: 1,
  facebook_page: 1,
  facebook_story: 1,
  facebook_comment: 0,
  tiktok_comment: 0,
  tiktok_video: 1,
  youtube: 1,
  youtube_comment: 0,
  electronic_media: 1,
  electronic_media_comment: 0,
};

export const GET_DETAIL_ARTICLE = `${REDUX_KEY.topics}/GET_DETAIL_ARTICLE`;
export const GET_DETAIL_ARTICLE_SUCCESS = `${
  REDUX_KEY.topics
}/GET_DETAIL_ARTICLE_SUCCESS`;

export const RESET_LOADING = `${REDUX_KEY.topics}/RESET_LOADING`;
export const CHANGE_TIME = `${REDUX_KEY.topics}/CHANGE_TIME`;
export const RESET_TIME = `${REDUX_KEY.topics}/RESET_TIME`;

export const NEUTRAL = 'neutral';
export const UNKNOWN = 'unknown';
export const POSITIVE = 'positive';
export const NEGATIVE = 'negative';

export const getListEvaluate = () => [
  { value: NEGATIVE, label: t('topics.filterEvaluate.negative') },
  { value: POSITIVE, label: t('topics.filterEvaluate.positive') },
  { value: NEUTRAL, label: t('topics.filterEvaluate.neutral') },
  { value: UNKNOWN, label: t('topics.filterEvaluate.unknown') },
];

export const GET_LIST_RELATED_ARTICLE = `${key}/GET_LIST_RELATED_ARTICLE`;
export const GET_LIST_RELATED_ARTICLE_SUCCESS = `${key}/GET_LIST_RELATED_ARTICLE_SUCCESS`;
export const GET_LIST_RELATED_ARTICLE_FAIL = `${key}/GET_LIST_RELATED_ARTICLE_FAIL`;

export const GET_LIST_RELATED_TOPIC = `${key}/GET_LIST_RELATED_TOPIC`;
export const GET_LIST_RELATED_TOPIC_SUCCESS = `${key}/GET_LIST_RELATED_TOPIC_SUCCESS`;
export const GET_LIST_RELATED_TOPIC_FAIL = `${key}/GET_LIST_RELATED_TOPIC_FAIL`;

export const GET_DATA_CHART = `${key}/GET_DATA_CHART`;
export const GET_DATA_CHART_SUCCESS = `${key}/GET_DATA_CHART_SUCCESS`;
export const GET_DATA_CHART_FAIL = `${key}/GET_DATA_CHART_FAIL`;

export const DEFAULT_LIST_EVALUATE = [NEUTRAL, UNKNOWN, POSITIVE, NEGATIVE];
