import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Badge, Dropdown, Spin } from 'antd';
import { BellOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
// import iconLogoDefault from 'images/ems/ai_camera_red.svg';
import {
  HeaderEtn,
  ContainerHeader,
  LeftHeader,
  RightHeader,
  IconUser,
  PopoverCustom,
  Logo,
  LogoCard,
  LogoMiniSize,
  LogoCardTracing,
} from './style';
import iconAvatarDefault from '../../../../images/icons/avatarDefault.svg';
import MenuSideBar from '../Menu';
import InfoCardUser from '../../../../components/InfoCard/index';
import {
  DATA_MENU,
  REDUX_KEY,
  COOKIES,
  PATHS,
} from '../../../../utils/constants';
import { normalTheme } from '../../../../themes/normalTheme';

// Notification
import { useInjectSaga } from '../../../../utils/injectSaga';
import saga from '../../../../containers/Notification/saga';
import reducer from '../../../../containers/Notification/reducer';
import { useInjectReducer } from '../../../../utils/injectReducer';
import * as actions from '../../../../containers/Notification/actions';
import {
  selectListNotification,
  selectLoadingHistoriesNotification,
} from '../../../../containers/Notification/selectors';
import NotificationItem from './components/NotificationItem/NotificationItem';
import { Footer, NotifiContainer } from './components/NotificationItem/styles';
import WebSocketComponent from '../../../../components/WebSocketComponent';

// Warning
import sagaWarning from '../../../../containers/Warning/saga';
import reducerWarning from '../../../../containers/Warning/reducer';
import * as actionsWarning from '../../../../containers/Warning/actions';
import {
  // selectCountNotify,
  selectListNotify,
} from '../../../../containers/Warning/selector';
import { iconLogo } from '../../../../utils/commonFunction';
import { COUNT_NOTIFY } from '../../../../containers/Warning/constant';

const Header = ({
  // eslint-disable-next-line no-unused-vars
  logo,
  onClickLogo,
  visible,
  onVisibleChange,
  minWidthLogo,
  hideLogo,
  isMiniLogo,
}) => {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const firstPath = pathname.split('/')[1];

  const USER_DATA = {
    image: iconAvatarDefault,
    name: Cookies.get(COOKIES.username),
    email: Cookies.get(COOKIES.email),
  };

  const [pathnameCustom, setPathnameCustom] = useState(`/${firstPath}`);
  const [openDropdown, setOpenDropdown] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const notificationList = useSelector(selectListNotification());
  const loading = useSelector(selectLoadingHistoriesNotification());
  const [itemsNotification, setItemsNotification] = useState([]);
  // Notification
  const key = REDUX_KEY.notification;
  useInjectSaga({ key, saga });
  useInjectReducer({ key, reducer });

  // Waring
  const keyWarning = REDUX_KEY.warning;
  useInjectSaga({ key: keyWarning, saga: sagaWarning });
  useInjectReducer({
    key: keyWarning,
    reducer: reducerWarning,
  });
  const countNotify = localStorage.getItem(COUNT_NOTIFY);
  const listNotify = useSelector(selectListNotify());
  const filterRef = useRef({
    page: 0,
    size: 5,
    all: false,
    keyword: '',
    type: -1,
  });
  const onSelectMenu = data => {
    setPathnameCustom(data);
    navigate(data ? `${data}` : DATA_MENU[0].path);
  };
  const loadDataNotification = () => {
    if (!notificationList.list.length) {
      dispatch(actions.getNotification(filterRef.current));
    }
  };
  const resetNews = () => {
    dispatch(actionsWarning.resetNews());
    localStorage.setItem(COUNT_NOTIFY, 0);
  };
  const onClickNotification = () => {
    if (!openDropdown) {
      loadDataNotification();
      resetNews();
    } else {
      resetNews();
    }
    setOpenDropdown(!openDropdown);
  };
  const onClickViewAll = () => {
    navigate(PATHS.WARNING_TOPIC_ROOT);
    setOpenDropdown(false);
  };
  const dropdownRender = dropdown => (
    <Spin spinning={loading} tip="Loading">
      <NotifiContainer>
        {dropdown}
        <Footer onClick={onClickViewAll}>{t('common.viewAll')}</Footer>
      </NotifiContainer>
    </Spin>
  );
  useEffect(() => {
    const formatList = notificationList.list.map(item => {
      const isNew = listNotify.find(ele => ele.id === item.id);
      return {
        key: item.id,
        label: (
          <NotificationItem
            closeDropdown={() => setOpenDropdown(false)}
            data={item}
            isNew={isNew}
          />
        ),
      };
    });
    setItemsNotification(formatList);
  }, [notificationList, listNotify]);
  useEffect(() => {
    setPathnameCustom(pathname);
  }, [pathname]);

  return (
    <HeaderEtn>
      <WebSocketComponent />
      <ContainerHeader>
        <LeftHeader>
          {!hideLogo && (
            <>
              {isMiniLogo ? (
                <LogoCardTracing>
                  <LogoMiniSize
                    src={logo}
                    alt=""
                    onClick={onClickLogo || null}
                  />
                </LogoCardTracing>
              ) : (
                <LogoCard minWidthLogo={minWidthLogo}>
                  <Logo alt="" onClick={onClickLogo || null} src={iconLogo} />
                </LogoCard>
              )}
            </>
          )}
          <MenuSideBar
            dataMenu={DATA_MENU}
            onClickMenu={onSelectMenu}
            pathname={pathnameCustom}
            selectedKey={pathnameCustom}
          />
        </LeftHeader>
        <RightHeader>
          {/* <ThemeProvider /> */}
          {/* <LanguageProvider /> */}
          <Dropdown
            menu={{ items: itemsNotification }}
            // open={openDropdown}
            overlayClassName="notify-dropdown"
            dropdownRender={dropdownRender}
            trigger={['click']}
          >
            <Badge count={countNotify}>
              <BellOutlined
                style={{
                  fontSize: '24px',
                  color: normalTheme.colors.neu5,
                  cursor: 'pointer',
                }}
                onClick={onClickNotification}
              />
            </Badge>
          </Dropdown>
          <PopoverCustom
            placement="bottom"
            content={InfoCardUser}
            open={visible}
            onOpenChange={onVisibleChange}
            trigger="click"
            overlayStyle={{ paddingRight: '15px' }}
          >
            <IconUser alt="" src={USER_DATA.image || iconAvatarDefault} />
          </PopoverCustom>
        </RightHeader>
      </ContainerHeader>
    </HeaderEtn>
  );
};

Header.propTypes = {
  logo: PropTypes.any,
  onClickLogo: PropTypes.any,
  visible: PropTypes.any,
  onVisibleChange: PropTypes.any,
  minWidthLogo: PropTypes.number,
  hideLogo: PropTypes.bool,
  isMiniLogo: PropTypes.bool,
};

export default Header;
