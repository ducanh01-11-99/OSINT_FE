import React from 'react';
import { Layout } from 'antd';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../SystemLayout/components/Header';
import logoMini from '../../images/icons/logoNCA-mini.svg';
import {
  ACCOUNT_SETTING_OPTION_ID,
  LOGOUT_OPTION_ID,
} from '../../containers/App/constants';
import { logOut } from '../../shared/commonFunction';
import avatarDefault from '../../images/icons/avatarDefault.svg';
import { COOKIES } from '../../utils/constants';
import { ContentStyled, EmptySider } from '../SystemLayout/styles';
const EmptyLayout = ({ children, breadcrumb }) => {
  const navigate = useNavigate();
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
  const USER_DATA = {
    image: avatarDefault,
    name: Cookies.get(COOKIES.username),
    email: Cookies.get(COOKIES.email),
  };
  return (
    <Layout style={{ height: '100%', overflowY: 'hidden' }}>
      <Header
        logo={logoMini}
        userData={USER_DATA}
        onClickLogo={() => navigate('/')}
        onClickOptionInformation={handleClickOptionInformation}
        breadcrumb={breadcrumb}
        minWidthLogo={86}
        isMiniLogo
      />
      <Layout style={{ backgroundColor: 'white', flexDirection: 'row' }}>
        <EmptySider />
        <ContentStyled>{children}</ContentStyled>
      </Layout>
    </Layout>
  );
};
EmptyLayout.propTypes = {
  children: PropTypes.any,
  breadcrumb: PropTypes.string,
};
export default EmptyLayout;
