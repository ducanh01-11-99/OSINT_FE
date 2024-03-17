import { normalTheme } from '../themes/normalTheme';

export const RESTART_ON_REMOUNT = '@@saga-injector/restart-on-remount';
export const DAEMON = '@@saga-injector/daemon';
export const ONCE_TILL_UNMOUNT = '@@saga-injector/once-till-unmount';

export const THEME = {
  dark: 'dark',
  light: 'light',
};

export const COOKIES = {
  accessToken: 'access_token',
  email: 'email',
  userId: 'user_id',
  username: 'username',
  refreshToken: 'refresh_token',
  id: 'id',
};

export const REDUX_KEY = {
  homePage: 'homePage',
  login: 'login',
  forgetPassword: 'forgetPassword',
  config: 'config',
  topics: 'topics',
  tracking: 'tracking',
  topicsLayout: 'topicsLayout',
  articleTracing: 'articleTracing',
  report: 'report',
  accountManagement: 'accountManagement',
  topicManagement: 'topicManagement',
  warning: 'warning',
  notification: 'notification',
};

export const STATUS_CODE = {
  success: 200,
  authenticationError: 401,
};

export const BUTTON_FUNCTION_TYPE = {
  add: 'add',
  search: 'search',
  reset: 'reset',
  export: 'export',
  filter: 'filter',
};
export const PATHS = {
  LOGIN: '/login',
  HOME: '/',
  TOPICS: `/news/:topicId?`,
  TRACKING: `/tracking/:topicId?`,
  ARTICLE_TRACING: '/tracing',
  REPORT: '/report',
  ACCOUNT_MANAGEMENT: '/manage/account',
  TOPIC_MANAGEMENT: '/manage/topic-management',
  EDIT_TOPIC_MANAGEMENT: '/manage/topic-management/edit/:id',
  WARNING: '/warning',
  WARNING_CONFIG: '/warning/config',
  NEW_WARNING: '/warning/config/new',
  EDIT_WARNING: '/warning/config/edit/:editId',
  CREATE_TOPIC: '/manage/topic-management/topic-create',
  WARNING_TOPIC_ROOT: '/warning/topic',
  WARNING_TOPIC: '/warning/topic/:id',
};

export const CODES = {
  LOGIN: '',
  HOME: '',
  CATEGORY: '',
  DEMO: '',
  TOPICS: 'p-news-topics',
  TRACKING: 'p-news-tracking',
  TRACING: 'p-news-tracing',
  REPORT: 'p-news-report',
  ACCOUNT_MANAGEMENT: 'p-management',
  TOPIC_MANAGEMENT: 'p-topic-management',
  WARNING: 'p-warning',
  WARNING_CONFIG: 'p-warning-config',
  NEW_WARNING: 'p-new-warning',
  EDIT_WARNING: 'p-edit-warning',
  CREATE_TOPIC: 'p-create-topic',
  WARNING_TOPIC: 'p-warning-topic',
};

export const TABLE_COLOR = {
  Facebook: normalTheme.channelColor.facebook,
  Youtube: normalTheme.channelColor.youtube,
  'Báo chí': normalTheme.channelColor.electronic,
  Tiktok: normalTheme.channelColor.tiktok,
};

export const TABLE_COLOR_TIME = {
  'Kỳ này': '#61B8FF',
  'Kỳ trước': '#000000',
};

export const TABLE_COLOR_NUANCE = {
  'Tích cực': normalTheme.nuances.positive,
  'Tiêu cực': normalTheme.nuances.negative,
  'Trung lập': normalTheme.nuances.neutral,
  'Không xác định': normalTheme.nuances.unknown,
};

export const DATA_MENU = [
  {
    key: 'news',
    path: '/news',
    label: 'DANH SÁCH BÀI VIẾT',
  },
  {
    key: 'tracking',
    path: '/tracking',
    label: 'THEO DÕI VÀ GIÁM SÁT',
  },
  {
    key: 'tracing',
    path: '/tracing',
    label: 'TRUY VẾT',
  },
  {
    key: 'warning',
    path: PATHS.WARNING_CONFIG,
    label: 'CẢNH BÁO',
  },
  {
    key: 'report',
    path: '/report',
    label: 'BÁO CÁO',
  },
  {
    key: 'manage',
    path: '/manage/account',
    label: 'QUẢN TRỊ',
  },
];

export const TYPE_HIGH_LIGHT_DATA = {
  ALL: 'all',
  POSITIVE: 'positive',
  NEGATIVE: 'negative',
  NEUTRAL: 'neutral',
  UNKNOWN: 'unknown',
  NORMAL: 'normal',
};
