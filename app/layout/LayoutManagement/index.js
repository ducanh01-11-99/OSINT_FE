import React, { useEffect, useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import { COOKIES, PATHS } from '../../utils/constants';
import Header from '../SystemLayout/components/Header';
import iconLogoBoCA from '../../images/login/logo-application.png';
import Sidebar from './components/Sidebar';
const { Content } = Layout;

const LayoutManagement = ({ children, breadcrumb, contextHolder }) => {
  const [menuExpand, setMenuExpand] = useState(true);
  const { pathname } = useLocation();
  const [topic, setTopic] = useState(pathname);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const token = Cookies.get(COOKIES.accessToken);
  if (!token) return <Navigate to="/login" />;
  const onSelectMenu = data => {
    setTopic(data);
    navigate(data);
  };

  useEffect(() => {
    setTopic(pathname);
  }, []);

  const MENU_DATA = [
    {
      key: PATHS.ACCOUNT_MANAGEMENT,
      path: PATHS.ACCOUNT_MANAGEMENT,
      label: t('common.sideBar.accountManagement'),
    },
    {
      key: PATHS.TOPIC_MANAGEMENT,
      path: PATHS.TOPIC_MANAGEMENT,
      label: t('common.sideBar.topicManagement'),
    },
  ];

  return (
    <Layout style={{ height: '100%', overflowY: 'hidden' }}>
      <Header
        logo={iconLogoBoCA}
        onClickMenu={() => setMenuExpand(!menuExpand)}
        onClickLogo={() => navigate('/')}
        breadcrumb={breadcrumb}
      />
      {contextHolder}
      <Layout style={{ backgroundColor: 'white' }}>
        <Sidebar
          isExpand={menuExpand}
          minWidth="64px"
          maxWidth="328px"
          dataMenu={MENU_DATA}
          pathname={topic}
          onClickMenu={onSelectMenu}
          pathFocus={PATHS.ACCOUNT_MANAGEMENT}
          type={1}
        />
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};

LayoutManagement.propTypes = {
  children: PropTypes.object,
  breadcrumb: PropTypes.array,
  contextHolder: PropTypes.any,
};

export default LayoutManagement;
