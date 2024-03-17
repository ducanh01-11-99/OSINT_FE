import styled from 'styled-components';
import { Modal } from 'antd';
import { normalTheme } from '../../../../../../themes/normalTheme';

export const CustomModal = styled(Modal)`
  .ant-modal-header {
    background-color: ${normalTheme.colors.main};
    font-size: ${normalTheme.fontSizes.normal} !important;
    font-weight: ${normalTheme.fontWeight.medium} !important;
    height: 48px;
    margin-bottom: 0 !important;
    border-radius: 0;
    display: flex;
    align-items: center;
    padding: 0 24px;
  }

  .ant-modal-content {
    padding: 0 !important;
    border-radius: 0px;
  }

  .ant-modal-title {
    color: ${normalTheme.colors.white} !important;
    font-size: ${normalTheme.fontSizes.normal} !important;
    font-weight: ${normalTheme.fontWeight.medium} !important;
  }

  .ant-modal-close-x {
    color: ${normalTheme.colors.white} !important;
    margin-left: -20px;
  }

  .ant-modal-footer {
    border-top: none !important;
    margin-top: 0 !important;
  }

  .ant-modal-body {
    padding: 40px 24px 0 24px;
  }
`;
