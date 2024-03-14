import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
import { useForm } from 'antd/es/form/Form';
import { toast } from 'react-toastify';
import InputLogin from '../InputLogin';
import ButtonLogin from '../ButtonLoading';
import {
  Container,
  DivContentRight,
  DivRight,
  ImgTitleRight,
  DivInputUsername,
  DivInputPassword,
  FormItem,
  FormInput,
  DivError,
  Header,
} from './styles';
import { LABEL_PASSWORD, LABEL_USER_NAME, TEXT_BTN_LOGIN } from './constants';

const BmosLogin = ({
  logoLogin,
  url,
  callbackResponse,
  callbackError,
  background,
}) => {
  // eslint-disable-next-line no-unused-vars
  const [keepLogin, setKeepLogin] = useState(false);
  const [textError, setTextError] = useState('');
  const [loading, setLoading] = useState(false);
  const [dataLogin, setDataLogin] = useState({
    username: '',
    password: '',
  });

  const [form] = useForm();

  const onSubmitLogin = e => {
    e.preventDefault();
    setTextError('');
    onLogin();
  };

  console.log('url', url);

  const onLogin = () => {
    const { username } = dataLogin;
    const { password } = dataLogin;
    setLoading(true);
    const data = {
      username: username.trim(),
      password,
    };
    // todo xử lý login tại đây
    axios
      .post(url, data)
      .then(response => {
        setLoading(false);
        callbackResponse(response.data, keepLogin);
        Cookies.set('username', dataLogin.username);
      })
      // eslint-disable-next-line no-shadow
      .catch(error => {
        form.resetFields();
        setLoading(false);
        callbackError(error);
      });
  };

  return (
    <Container>
      <DivRight background={background}>
        <DivContentRight>
          <ImgTitleRight src={logoLogin} alt="image title" />
          <Header>Đăng nhập</Header>
          <FormInput>
            <DivInputUsername>
              <FormItem name="email">
                <InputLogin
                  allowClear
                  onChange={value =>
                    setDataLogin({ ...dataLogin, username: value })
                  }
                  label={LABEL_USER_NAME}
                  placeholder={LABEL_USER_NAME}
                  name="email"
                />
              </FormItem>
            </DivInputUsername>
            <DivInputPassword>
              <FormItem name="password">
                <InputLogin
                  allowClear
                  label={LABEL_PASSWORD}
                  placeholder={LABEL_PASSWORD}
                  name="password"
                  type="password"
                  onChange={value =>
                    setDataLogin({ ...dataLogin, password: value })
                  }
                  onEnter={() => onLogin()}
                />
              </FormItem>
            </DivInputPassword>
            <DivError>{textError}</DivError>
            <ButtonLogin
              onClick={onSubmitLogin}
              loading={loading}
              value={TEXT_BTN_LOGIN}
            />
          </FormInput>
        </DivContentRight>
      </DivRight>
    </Container>
  );
};

BmosLogin.propTypes = {
  logoLogin: PropTypes.any,
  url: PropTypes.any,
  callbackResponse: PropTypes.func,
  callbackError: PropTypes.func,
  // onClickForgetPassword: PropTypes.func,
  background: PropTypes.any,
};

export default BmosLogin;
