/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { message, notification } from 'antd';

import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet/es/Helmet';
import { useTranslation } from 'react-i18next';
import { ToastContainer } from 'react-toastify';
import { GetMenuPermission } from '../../layout/dataUtils';
import PermissionDenied from '../PermissionDenied/loadable';
import GlobalStyle from '../../global-styles';
import { darkTheme } from '../../themes/darkTheme';
import { normalTheme } from '../../themes/normalTheme';

import { THEME } from '../../utils/constants';
import * as selectors from './selectors';
import * as actions from './actions';
import GetRoutes from '../../routes';
import 'react-toastify/dist/ReactToastify.css';

const AppWrapper = styled.div`
  margin: 0 auto;
  height: 100%;
`;

export default function App() {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  // const history = useHistory();
  // const {
  //   location: { pathname },
  // } = history;
  const dispatch = useDispatch();
  const themeApp = useSelector(selectors.selectTheme());
  const notificationType = useSelector(selectors.selectNotificationType());
  const notificationMessage = useSelector(
    selectors.selectNotificationMessage(),
  );
  const messageType = useSelector(selectors.selectMessageType());
  const selectorMessage = useSelector(selectors.selectMessage());
  const routes = GetRoutes();
  const menuPermission = GetMenuPermission();
  const [strPermission, setStrPermission] = useState('');

  // Khi nào cần đăng nhập thì lật lại flag bằng true
  // if (process.env.BY_PASS_LOGIN) {
  //   Cookies.set(COOKIES.accessToken, 'BY_PASS_LOGIN');
  // }

  useEffect(() => {
    setStrPermission(menuPermission.toString().toLowerCase());
  }, []);

  // Message sử dụng Ant Message
  const notify = type => {
    switch (type) {
      case 'success':
        return message.success;
      case 'error':
        return message.error;
      case 'warning':
        return message.warning;
      case 'loading':
        return message.loading;
      case 'warn':
        return message.warn;
      default:
        return message.info;
    }
  };

  // Thông báo sử dụng Ant Notification
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (placement, mes) => {
    api[notificationType]({
      message: t('common.notification'),
      description: mes,
      placement,
    });
  };

  useEffect(() => {
    if (notificationMessage) {
      openNotificationWithIcon('bottomRight', notificationMessage);
      dispatch(actions.resetNotification());
    }
  }, [notificationMessage]);

  useEffect(() => {
    if (selectorMessage) {
      notify(messageType)(selectorMessage, 2);
      dispatch(actions.messageReset());
    }
  }, [selectorMessage]);

  return (
    <ThemeProvider
      theme={
        themeApp.isTheme && themeApp.theme === THEME.dark
          ? darkTheme
          : normalTheme
      }
    >
      <AppWrapper>
        <ToastContainer />
        <Helmet titleTemplate="%s - Osint" defaultTitle="Osint">
          <meta name="description" content="Osint" />
        </Helmet>
        <Routes>
          {routes.map(route => (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact || false}
              element={
                route.component ? (
                  <route.layout
                    breadcrumb={route.breadcrumb}
                    path={pathname}
                    contextHolder={contextHolder}
                    childrenSidebar={<route.sidebarComponent />}
                  >
                    {strPermission.includes(route.code) ||
                    pathname.startsWith('/login') ||
                    route.code === 'notfound' ? (
                      <route.component />
                    ) : (
                      <PermissionDenied />
                    )}
                  </route.layout>
                ) : (
                  <Navigate to={route.redirect} replace />
                )
              }
            />
          ))}
        </Routes>
        <GlobalStyle />
      </AppWrapper>
    </ThemeProvider>
  );
}
