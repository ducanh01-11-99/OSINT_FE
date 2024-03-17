import styled from 'styled-components';
import { Modal } from 'antd';
import { normalTheme } from '../../../../themes/normalTheme';

export const ModalChangePassword = styled(Modal)`
  .ant-modal-header {
    background-color: ${normalTheme.colors.main};
    font-size: ${normalTheme.fontSizes.normal};
    font-weight: ${normalTheme.fontWeight.medium};
    height: 40px;
    padding: 10px 24px; !important;
  }

  .ant-modal-content {
    padding: 0 !important;
  }

  .ant-modal-title {
    color: ${normalTheme.colors.white} !important;
  }

  .ant-modal-close-x {
    color: ${normalTheme.colors.white} !important;
    margin-top: -5px;
    margin-left: -10px;
  }

  .ant-modal-footer {
    border-top: none !important;
    padding-top: 0 !important;
  }
`;
