import styled from 'styled-components';
import { Button } from 'antd';
import { normalTheme } from '../../themes/normalTheme';
export const ButtonActive = styled(Button)`
  font-size: ${normalTheme.fontSizes.regular};
  display: flex;
  align-items: center;
  height: 38px;
  min-width: 113px;
  padding: 0 20px;
  font-weight: ${normalTheme.fontWeight.larger};
  color: ${normalTheme.colors.white} !important;
  background-color: ${normalTheme.colors.main} !important;
  border-color: ${normalTheme.colors.main} !important;

  &:hover {
    color: ${normalTheme.colors.white} !important;
    background-color: ${normalTheme.colors.lightMain} !important;
    border-color: ${normalTheme.colors.lightMain} !important;
  }
`;
