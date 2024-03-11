import Cookie from 'js-cookie';
import { t } from 'i18next';
import { COOKIES } from '../utils/constants';

// Hàm format thời gian
export const formatDateTime = time => {
  const valueTime = new Date(time);
  const format = value => {
    if (value < 10) {
      return `0${value}`;
    }
    return value;
  };
  const data = `${format(valueTime.getDate())}-${format(
    valueTime.getMonth() + 1,
  )}-${format(valueTime.getFullYear())} ${format(
    valueTime.getHours(),
  )}:${format(valueTime.getMinutes())}`;
  return data;
};

/* Ham thuc hien logout */
export const logOut = () => {
  Cookie.remove(COOKIES.accessToken);
  Cookie.remove(COOKIES.userId);
  Cookie.remove(COOKIES.username);
  Cookie.remove(COOKIES.email);
  Cookie.remove(COOKIES.refreshToken);
  // history.push('/login');
  window.location.href = '/login';
};

// Hàm format thời gian
export const formatFullDateTime = (time, type) => {
  const valueTime = new Date(time);
  const format = value => {
    if (value < 10) {
      return `0${value}`;
    }
    return value;
  };
  if (type === 'DD/MM/YYYY HH:MM') {
    return `${format(valueTime.getDate())}/${format(
      valueTime.getMonth() + 1,
    )}/${format(valueTime.getFullYear())} ${format(
      valueTime.getHours(),
    )}:${format(valueTime.getMinutes())}`;
  }
  return `${format(valueTime.getDate())}/${format(
    valueTime.getMonth() + 1,
  )}/${format(valueTime.getFullYear())} ${format(
    valueTime.getHours(),
  )}:${format(valueTime.getMinutes())}:${valueTime.getSeconds()}`;
};

// tính chênh lệch thời gian so với thời điểm hiện tại
export const calcTimeDiff = startTime => {
  const end = new Date();
  const start = new Date(startTime);
  const differenceInDays = end - start;
  if (differenceInDays / (1000 * 60 * 60 * 24) > 1) {
    const integerPart = (differenceInDays / (1000 * 60 * 60 * 24)).toFixed(0);
    return t('common.timeDiff.days', { number: integerPart });
  }
  if (differenceInDays / (1000 * 60 * 60) > 1) {
    const integerPart = (differenceInDays / (1000 * 60 * 60)).toFixed(0);
    return t('common.timeDiff.hours', { number: integerPart });
  }
  if (differenceInDays / (1000 * 60) > 1) {
    const integerPart = (differenceInDays / (1000 * 60)).toFixed(0);
    return t('common.timeDiff.minutes', { number: integerPart });
  }
  const integerPart = (differenceInDays / 1000).toFixed(0);
  return t('common.timeDiff.seconds', { number: integerPart });
};

// định dạng lại ngày tháng từ string trả về dạng mm/dd/yyyy hh:mm:ss
export const getDate = value => {
  try {
    const arr = value.split(' ');
    const date = arr[0];
    const arrDate = date.split('/');
    return `${arrDate[1]}/${arrDate[0]}/${arrDate[2]}`;
  } catch (e) {
    return '';
  }
};

export const getTime = value => {
  try {
    const arr = value.split(' ');
    const date = arr[1];
    const arrDate = date.split(':');
    return `${arrDate[0]}h${arrDate[1]}`;
  } catch (e) {
    return '';
  }
};
