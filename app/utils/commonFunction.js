import { t } from 'i18next';
import _ from 'lodash';
import logo from '../images/login/logo-application.png';
import { TYPE_HIGH_LIGHT_DATA } from './constants';

export const translateChanel = channelName => {
  if (channelName) {
    if (channelName.indexOf('facebook') !== -1) {
      return 'Facebook';
    }
    if (channelName.indexOf('electronic') !== -1) {
      return 'Báo chí';
    }
    if (channelName.indexOf('youtube') !== -1) {
      return 'Youtube';
    }
    if (channelName.indexOf('tiktok') !== -1) {
      return 'Tiktok';
    }
  }
  return channelName;
};

export const translateNuance = nuanceName => {
  if (nuanceName === TYPE_HIGH_LIGHT_DATA.NEGATIVE) {
    return t('report.shade.negative');
  }
  if (nuanceName === TYPE_HIGH_LIGHT_DATA.POSITIVE) {
    return t('report.shade.positive');
  }
  if (nuanceName === TYPE_HIGH_LIGHT_DATA.NEUTRAL) {
    return t('report.shade.neutral');
  }
  if (nuanceName === TYPE_HIGH_LIGHT_DATA.UNKNOWN) {
    return t('report.shade.unknown');
  }
  return t('report.shade.unknown');
};

export const addPosifix = (name, posifix) => {
  if (name !== '1') {
    return `${name} ${posifix}`;
  }
  return name;
};

export const convertDateToDdMnYyyy = str => {
  let arr = str.split('-');
  arr = arr.reverse();
  return arr.join('-');
};

export const calculateIndex = (currentPage, pageSize, index) =>
  (currentPage - 1) * pageSize + index + 1;

const checkSpecialCharactor = text => {
  const regex = /^[^!@#$%^&*()_+=\-[\]{}\\|;:'",<.>/?1234567890]*$/;
  return !regex.test(text);
};

const checkSpecialUsername = text => {
  const regex = /^[^\\*?></]*$/;
  return !regex.test(text);
};

// eslint-disable-next-line no-unused-vars
export const validateUsername = (text, isRequired, maxLength, minLength) => {
  if (isRequired) {
    if (!text.trim()) {
      return t('accountManagement.modal.validate.userName.userNameNoBlank');
    }
    if (checkSpecialUsername(text.trim())) {
      return t('accountManagement.modal.validate.userName.hasSpecialCharacter');
    }
    return '';
  }

  if (checkSpecialUsername(text.trim())) {
    return t('accountManagement.modal.validate.userName.hasSpecialCharacter');
  }

  return '';
};

const checkPassword = password => {
  const regex = /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+-]).{8,}$/;
  if (!regex.test(password)) {
    // Mật khẩu không hợp lệ
    return false;
  }
  // Mật khẩu hợp lệ
  return true;
};

export const validatePassword = (password, maxLength, minLength) => {
  if (password.length < minLength) {
    return t('accountManagement.modal.validate.password.minLengthErr', {
      number: minLength,
    });
  }
  if (!checkPassword(password)) {
    return t('accountManagement.modal.validate.password.inValidPassword');
  }
  return '';
};

export const validateFullName = (text, isRequired) => {
  if (isRequired) {
    if (!text.trim()) {
      return t('accountManagement.modal.validate.userName.blankErr');
    }
    if (checkSpecialCharactor(text.trim())) {
      return t('accountManagement.modal.validate.userName.hasSpecialCharacter');
    }
    return '';
  }
  if (checkSpecialCharactor(text.trim())) {
    return t('accountManagement.modal.validate.userName.hasSpecialCharacter');
  }
  return '';
};

const validateEmail = email => {
  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]{3,32}@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9-]{2,8}$/;
  return regex.test(email);
};

export const validateEmailText = (email, isRequired) => {
  if (isRequired) {
    if (!email.trim()) {
      return t('accountManagement.modal.validate.email.blankErr');
    }
    if (!validateEmail(email.trim())) {
      return t('accountManagement.modal.validate.email.malFormedErr');
    }
    return '';
  }
  if (!validateEmail(email.trim())) {
    return t('accountManagement.modal.validate.email.malFormedErr');
  }
  return '';
};

const validatePhone = phone => {
  const regex = /^0[3|5|7|8|9]{1}[0-9]{8}$/;
  return regex.test(phone);
};

export const validatePhoneText = (phone, isRequired) => {
  if (isRequired) {
    if (!phone.trim()) {
      // return t('accountManagement.modal.validate.email.blankErr');
      return '';
    }
    if (!validatePhone(phone.trim())) {
      return t('accountManagement.modal.validate.phone.malFormedErr');
    }
    return '';
  }
  if (!validatePhone(phone.trim())) {
    return t('accountManagement.modal.validate.phone.malFormedErr');
  }
  return '';
};

export const hasNoSpecialCharacters = (rule, value, text) => {
  if (checkSpecialCharactor(value)) {
    return Promise.reject(text);
  }
  return Promise.resolve();
};
export const checkUnique = (rule, value, keywords, data) => {
  const values = keywords.map(item => item.primaryKey);
  if (data.primaryKey !== value && value && values.includes(value)) {
    return Promise.reject();
  }
  return Promise.resolve();
};
export const differentForeignKey = (rule, value, foreignKey) => {
  const arr = foreignKey.split(',');
  if (value && arr.includes(value)) {
    return Promise.reject();
  }
  return Promise.resolve();
};
export const differentPrimaryKey = (rule, value, primaryKey) => {
  const arr = value ? value.split(',') : [];
  if (arr.includes(primaryKey.trim())) {
    return Promise.reject();
  }
  return Promise.resolve();
};
export const hasNoSpecialCharactersExpectCommas = (rule, value) => {
  const regex = /[!@#$%^&*().?":{}|<>]/;
  const result = regex.test(value);
  if (result) {
    return Promise.reject();
  }
  return Promise.resolve();
};

export const convertObjectToString = object => {
  const array = [];
  // eslint-disable-next-line guard-for-in,no-restricted-syntax
  for (const property in object) {
    array.push({
      name: property,
      color: object[property],
    });
  }
  return array;
};

export const iconLogo =
  // eslint-disable-next-line no-nested-ternary
  process.env.NODE_ENV === 'production'
    ? window.SystemConfig.RELEASE
      ? logo
      : logo
    : process.env.RELEASE
    ? logo
    : logo;

export const compareTwoObjet = (firstObj, secondObj) =>
  _.isEqual(firstObj, secondObj);

// Hàm thêm giấu phẩy ngăn cách phần ngàn trong các số nguyên lớn
export const formatNumberWithCommas = number => {
  try {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  } catch (e) {
    return number;
  }
};
