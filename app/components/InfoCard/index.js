import React, { useState } from 'react';
import { Button } from 'antd';
import { t } from 'i18next';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import ChangePassword from '../../containers/AccountManagement/components/ChangePassword';
import { logOut } from '../../shared/commonFunction';
import ModalWarning from '../../containers/AccountManagement/components/ModalWarning';
import { useInjectSaga } from '../../utils/injectSaga';
import saga from '../../containers/AccountManagement/saga';
import { useInjectReducer } from '../../utils/injectReducer';
import reducer from '../../containers/AccountManagement/reducer';
import { REDUX_KEY } from '../../utils/constants';
import * as actions from '../../containers/AccountManagement/actions';
import { resetTime } from '../../containers/Topics/actions';
import { Username } from './styled';
const key = REDUX_KEY.accountManagement;

const InfoCardUser = () => {
  // thông tin cá nhân lưu ở localStorage
  const dispatch = useDispatch();
  useInjectSaga({ key, saga });
  useInjectReducer({ key, reducer });
  const [openWarning, setOpenWarning] = useState(false);
  const [loadingLogout, setLoadingLogout] = useState(false);
  const name = Cookies.get('username');
  // const position = 'Phòng System';
  const [openModalChangePassword, setOpenModalChangePassword] = useState(false);
  const handleLogout = () => {
    setLoadingLogout(true);
    // call api logout
    dispatch(resetTime());
    dispatch(
      actions.logout(() => {
        setLoadingLogout(false);
        logOut();
        toast.success(t('common.logoutSuccess'));
      }),
    );
  };
  return (
    <div>
      <Username>{name}</Username>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <Button
          onClick={() => {
            setOpenModalChangePassword(true);
          }}
        >
          {t('common.changePassword')}
        </Button>

        <Button
          onClick={() => {
            setOpenWarning(true);
            // handleLogout();
          }}
        >
          {t('common.logout')}
        </Button>
      </div>
      <ChangePassword
        visible={openModalChangePassword}
        data={{ full_name: name, username: name }}
        onClose={() => {
          setOpenModalChangePassword(false);
        }}
        reload={() => {}}
      />
      <ModalWarning
        loading={loadingLogout}
        onClose={() => {
          setOpenWarning(false);
        }}
        message={t('common.logoutConfirm')}
        visible={openWarning}
        onSubmit={() => {
          handleLogout();
        }}
        buttonOk={t('common.logout')}
      />
    </div>
  );
};

export default InfoCardUser;
