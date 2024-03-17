import styled from 'styled-components';
import { Button } from 'antd';
import { normalTheme } from '../../themes/normalTheme';

export const Username = styled.div`
  font-weight: ${normalTheme.fontWeight.regular};
  font-size: ${normalTheme.fontSizes.normal};
  text-align: center;
  font-style: italic;
`;

export const ButtonActive = styled(Button)`
  font-size: ${normalTheme.fontSizes.regular};
  height: 38px;
  width: 122px;
  font-weight: ${normalTheme.fontWeight.larger};
  color: ${normalTheme.colors.white} !important;
  background-color: ${normalTheme.colors.main} !important;
  border-color: ${normalTheme.colors.main} !important;
`;
