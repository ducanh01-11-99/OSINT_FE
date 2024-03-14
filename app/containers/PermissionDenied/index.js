/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const Wrapper = styled.article`
  text-align: center;
  padding-top: 10px;
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
  color: ${props => props.theme.textColor.advanceSearch};
`;

const PermissionDenied = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Title>{t('common.permissionDenied')}</Title>
      <Title>
        <Title>{t('common.contactAdmin')}</Title>
      </Title>
    </Wrapper>
  );
};

export default PermissionDenied;
