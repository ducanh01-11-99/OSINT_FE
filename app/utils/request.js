import axios from 'axios';
import Cookies from 'js-cookie';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import { COOKIES } from './constants';
import { logOut } from '../shared/commonFunction';
import Notice from '../components/ToastContainer';
import { CONSTANT_TOASTY } from '../components/ToastContainer/constantToasty';

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @param notShowToast
 * @return {object|undefined} Returns either the response, or throws an error
 */

function checkStatus(response, notShowToast) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  if (!notShowToast) {
    Notice({
      type: CONSTANT_TOASTY.ERROR,
      message: response.data.detail,
    });
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

const instance = axios.create({
  baseURL: `${
    process.env.NODE_ENV === 'production'
      ? window.SystemConfig.API_URL
      : process.env.API_URL
  }/api/`,
});

const refreshAuthLogic = failedRequest => {
  if (Cookies.get(COOKIES.refreshToken) !== '') {
    return axios
      .post(
        `${
          process.env.NODE_ENV === 'production'
            ? window.SystemConfig.API_URL
            : process.env.API_URL
        }/api/v1/auth/refresh-token`,
        {
          refresh_token: Cookies.get(COOKIES.refreshToken),
        },
      )
      .then(tokenRefreshResponse => {
        Cookies.set(
          COOKIES.accessToken,
          tokenRefreshResponse.data.data.access_token,
        );
        Cookies.set(
          COOKIES.refreshToken,
          tokenRefreshResponse.data.data.refresh_token,
        );
        // eslint-disable-next-line no-param-reassign
        failedRequest.response.config.headers.Authorization = `Bearer ${
          tokenRefreshResponse.data.data.access_token
        }`;
        return Promise.resolve();
      })
      .catch(err => {
        console.log(err);
        return logOut();
      });
  }
  return logOut();
};

createAuthRefreshInterceptor(instance, refreshAuthLogic);

instance.defaults.timeout = 25000;

// Tạm thời bỏ đợi có đăng nhập
instance.interceptors.request.use(req => {
  req.headers.Authorization = `Bearer ${Cookies.get(COOKIES.accessToken)}`;
  return req;
});

instance.interceptors.response.use(
  response => response,
  error => {
    const responseError = {
      ...error,
      response: {
        ...error.response,
      },
    };

    return responseError.response.data;
  },
);

export async function axiosGet(path, notShowToast) {
  // if (MOOK_DATA_GET[path].switch) return MOOK_DATA_GET[path];
  const res = await instance
    .get(path)
    .then(response => checkStatus(response, notShowToast))
    .catch(error => {
      throw error;
    });
  return res;
}

export async function axiosPost(path, body, notShowToast) {
  // if (MOOK_DATA_POST[path].switch) return MOOK_DATA_POST[path];
  const res = await instance
    .post(path, body)
    .then(response => checkStatus(response, notShowToast))
    .catch(error => {
      throw error;
    });
  return res;
}

export async function axiosDelete(path, notShowToast) {
  const res = await instance
    .delete(path)
    .then(response => checkStatus(response, notShowToast))
    .catch(error => {
      throw error;
    });
  return res;
}

export async function axiosPut(path, body, notShowToast) {
  const res = await instance
    .put(path, body)
    .then(response => checkStatus(response, notShowToast))
    .catch(error => {
      throw error;
    });
  return res;
}
