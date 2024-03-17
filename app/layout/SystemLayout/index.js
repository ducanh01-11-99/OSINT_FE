import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { Layout } from 'antd';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';

// Utis
import _ from 'lodash';
import iconLogoBoCA from '../../images/login/logo-application.png';
import { useInjectReducer } from '../../utils/injectReducer';
import { useInjectSaga } from '../../utils/injectSaga';
import {
  ACCOUNT_SETTING_OPTION_ID,
  LOGOUT_OPTION_ID,
} from '../../containers/App/constants';
import { COOKIES, REDUX_KEY } from '../../utils/constants';
import { logOut } from '../../shared/commonFunction';
import * as action from './actions';

// Icons
import avatarDefault from '../../images/icons/avatarDefault.svg';

// Component
import Sidebar from './components/Sidebar';
import Header from './components/Header';

// Saga
import saga from './saga';

// Reducer
import reducer from './reducer';

// Selector
import { selectTopics } from './selectors';
// eslint-disable-next-line import/named

const { Content } = Layout;

export default function SystemLayout({ children, breadcrumb, contextHolder }) {
  // eslint-disable-next-line no-unused-vars
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [menuExpand, setMenuExpand] = useState(true);
  const navigate = useNavigate();
  const { topicId } = useParams();
  const key = REDUX_KEY.topicsLayout;
  useInjectSaga({ key, saga });
  useInjectReducer({ key, reducer });
  useEffect(() => {
    dispatch(action.getTopics());
  }, []);

  // const sideBarData = useSelector(selectTopics());
  const sideBarData = [];

  const token = Cookies.get(COOKIES.accessToken);

  if (!token) {
    return <Navigate to="/login" />;
  }

  const USER_DATA = {
    image: avatarDefault,
    name: Cookies.get(COOKIES.username),
    email: Cookies.get(COOKIES.email),
  };

  const menuConvert = _.flatMap(sideBarData, item => {
    if (item.sub_topics && item.sub_topics.length !== 0) {
      return {
        key: item.id,
        path: item.id,
        label: item.name,
        keyword: item.keyword && JSON.parse(item.keyword),
        child:
          item.sub_topics.length !== 0
            ? _.flatMap(item.sub_topics, items => ({
                key: items.id,
                path: items.id,
                label: items.name,
                keyword: JSON.parse(items.keyword),
              }))
            : undefined,
      };
    }
    return {
      key: item.id,
      path: item.id,
      label: item.name,
      keyword: item.keyword && JSON.parse(item.keyword),
    };
  });

  const menuData = [
    {
      key: '0',
      path: '',
      label: t('topics.topics.total'),
      keyword: [].concat(...menuConvert.map(obj => obj.keyword)),
    },
    ...menuConvert,
  ];

  const onSelectMenu = data => {
    const pathParts = window.location.pathname.split('/');
    const firstPathname = pathParts[1];
    navigate(`/${firstPathname}/${data}`);
  };

  // const menuPermission = GetMenuPermission();

  const handleClickOptionInformation = data => {
    switch (data.id) {
      case ACCOUNT_SETTING_OPTION_ID:
        break;
      case LOGOUT_OPTION_ID:
        logOut();
        break;
      default:
        break;
    }
  };

  return (
    <Layout style={{ height: '100%', overflowY: 'hidden' }}>
      <Header
        logo={iconLogoBoCA}
        userData={USER_DATA}
        onClickMenu={() => setMenuExpand(!menuExpand)}
        onClickLogo={() => navigate('/')}
        onClickOptionInformation={handleClickOptionInformation}
        breadcrumb={breadcrumb}
      />
      {contextHolder}
      <Layout style={{ backgroundColor: 'white' }}>
        <Sidebar
          isExpand={menuExpand}
          minWidth="64px"
          maxWidth="328px"
          // dataMenu={menuData}
          dataMenu={[
            {
              key: '0',
              path: '',
              label: t('topics.topics.total'),
              keyword: [],
            },
          ]}
          pathname={topicId}
          onClickMenu={onSelectMenu}
        />
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
}

SystemLayout.propTypes = {
  children: PropTypes.object,
  breadcrumb: PropTypes.array,
  contextHolder: PropTypes.any,
};
