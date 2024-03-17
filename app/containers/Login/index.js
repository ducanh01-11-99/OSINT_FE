import React from 'react';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { t } from 'i18next';
import BmosLogin from '../../shared/components/BmosLogin';
import bgLogin from '../../images/login/bgLogin.png';
import logoLogin from '../../images/login/logo-application.png';

import { COOKIES, STATUS_CODE } from '../../utils/constants';

const Login = () => {
  const navigate = useNavigate();

  const LOGIN_API_URL =
    process.env.NODE_ENV === 'production'
      ? window.SystemConfig.LOGIN_API_URL
      : process.env.LOGIN_API_URL;

  const handleCallbackResponse = res => {
    if (res.status === STATUS_CODE.success) {
      Cookies.set(COOKIES.accessToken, res.tokens.access.token);
      Cookies.set(COOKIES.refreshToken, res.tokens.refresh.token);
      toast.success(t('common.loginSuccess'));
      navigate('/news');
    }
  };

  const handleErrorResponse = err => {
    if (err.response.status === STATUS_CODE.authenticationError) {
      // todo
    } else {
      toast.error(t('common.loginFailed'));
    }
  };

  return (
    <BmosLogin
      background={bgLogin}
      logoLogin={logoLogin}
      url={LOGIN_API_URL}
      callbackResponse={handleCallbackResponse}
      callbackError={handleErrorResponse}
    />
  );
};

export default Login;
