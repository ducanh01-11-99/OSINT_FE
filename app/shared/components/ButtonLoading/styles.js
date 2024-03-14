import styled from 'styled-components';
import { Button } from 'antd';
import { normalTheme } from '../../../themes/normalTheme';

const ButtonLoading = styled(Button)`
  &.ant-btn {
    max-width: 186px;
    width: 100%;
    height: 38px;
    align-items: center;
    text-align: center;
    font-style: normal;
    font-weight: ${normalTheme.fontWeight.bold};
    background: ${normalTheme.colors.main};
    text-transform: uppercase;
    color: ${normalTheme.colors.white};
    box-sizing: border-box;
    margin: 50px 0;
    font-size: ${normalTheme.fontSizes.normal};
  }

  &.ant-btn:hover,
  &.ant-btn.ant-btn-loading,
  &.ant-btn:focus {
    background: ${normalTheme.colors.lightMain};
    color: ${normalTheme.colors.white} !important;
    border-color: ${normalTheme.colors.lightMain} !important;
  }
  &.ant-btn > .ant-btn-loading-icon .anticon svg {
    margin-top: -8px;
  }
`;

export { ButtonLoading };
