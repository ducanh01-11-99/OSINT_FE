import React, { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import { Helmet } from 'react-helmet/es/Helmet';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { notification } from 'antd';
import { normalTheme } from '../../themes/normalTheme';
import GetRoutes from '../../routes';

import { GetMenuPermission } from '../../layout/dataUtils';
import PermissionDenied from '../PermissionDenied';

import 'react-toastify/dist/ReactToastify.css';

const AppWrapper = styled.div`
  margin: 0 auto;
  height: 100%;
`;

const App = () => {
  const routes = GetRoutes();
  const [api, contextHolder] = notification.useNotification();
  const { pathname } = useLocation();
  const [strPermission, setStrPermission] = useState('');
  const menuPermission = GetMenuPermission();

  useEffect(() => {
    setStrPermission(menuPermission.toString().toLowerCase());
  }, []);
  return (
    <ThemeProvider theme={normalTheme}>
      <AppWrapper>
        <ToastContainer />
        <Helmet titleTemplate="%s - Osint" defaultTitle="Osint">
          <meta name="description" content="Osint" />
        </Helmet>
        <Routes>
          {routes.map(route => (
            <Route
              key={route.key}
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
      </AppWrapper>
    </ThemeProvider>
  );
};

export default App;
