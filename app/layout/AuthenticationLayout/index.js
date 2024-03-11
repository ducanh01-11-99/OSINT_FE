import Cookies from 'js-cookie';
import { Navigate } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COOKIES } from '../../utils/constants';

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
`;

function AuthenticationLayout({ children }) {
  const token = Cookies.get(COOKIES.accessToken);
  if (token) {
    return <Navigate to="/" />;
  }
  return <Wrapper>{children}</Wrapper>;
}

AuthenticationLayout.propTypes = {
  children: PropTypes.any,
};

export default AuthenticationLayout;
