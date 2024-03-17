import { t } from 'i18next';
import { REDUX_KEY } from '../../utils/constants';

export const REQUEST_BEGIN = `${REDUX_KEY.accountManagement}/REQUEST_BEGIN`;
export const REQUEST_FAIL = `${REDUX_KEY.accountManagement}.REQUEST_FAIL`;
export const RESET_REDUX = `${REDUX_KEY.accountManagement}.RESET_REDUX`;

export const ADMIN_KEY = 'ADMIN';
export const USER_KEY = 'USER';

export const LIST_ROLE = () => [
  {
    label: t('accountManagement.role.admin'),
    value: ADMIN_KEY,
  },
  {
    label: t('accountManagement.role.user'),
    value: USER_KEY,
  },
];

export const ACTIVE_KEY = 0;
export const INACTIVE_KEY = 1;

export const LIST_STATUS = () => [
  {
    label: t('common.status.active'),
    value: ACTIVE_KEY,
  },
  {
    label: t('common.status.inActive'),
    value: INACTIVE_KEY,
  },
];

export const ADD_ACCOUNT = `${REDUX_KEY.accountManagement}.ADD_ACCOUNT`;
export const ADD_ACCOUNT_SUCCESS = `${
  REDUX_KEY.accountManagement
}.ADD_ACCOUNT_SUCCESS`;

export const GET_LIST_ACCOUNT = `${
  REDUX_KEY.accountManagement
}.GET_LIST_ACCOUNT`;

export const GET_LIST_ACCOUNT_SUCCESS = `${
  REDUX_KEY.accountManagement
}.GET_LIST_ACCOUNT_SUCCESS`;

export const DEFAULT_PARAM_GET_LIST = {
  keyword: '',
  roles: [ADMIN_KEY, USER_KEY],
  status: [ACTIVE_KEY, INACTIVE_KEY],
};

export const DELETE_ACCOUNT = `${REDUX_KEY.accountManagement}.DELETE_ACCOUNT`;
export const DELETE_ACCOUNT_SUCCESS = `${
  REDUX_KEY.accountManagement
}.DELETE_ACCOUNT_SUCCESS`;

export const CHANGE_PASSWORD = `${REDUX_KEY.accountManagement}.CHANGE_PASSWORD`;
export const CHANGE_PASSWORD_SUCCESS = `${
  REDUX_KEY.accountManagement
}.CHANGE_PASSWORD_SUCCESS`;

// check trùng tên
export const CHECK_EXIST_USER_NAME = `${
  REDUX_KEY.accountManagement
}.CHECK_EXIST_USER_NAME`;
export const CHECK_EXIST_USER_NAME_SUCCESS = `${
  REDUX_KEY.accountManagement
}.CHECK_EXIST_USER_NAME_SUCCESS`;

export const RESET_PASSWORD = `${REDUX_KEY.accountManagement}.RESET_PASSWORD`;
export const RESET_PASSWORD_SUCCESS = `${
  REDUX_KEY.accountManagement
}.RESET_PASSWORD_SUCCESS`;

export const LOGOUT = `${REDUX_KEY.accountManagement}.LOGOUT`;
export const LOGOUT_SUCCESS = `${REDUX_KEY.accountManagement}.LOGOUT_SUCCESS`;
