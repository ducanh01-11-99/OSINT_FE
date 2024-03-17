import styled from 'styled-components';
import { Modal } from 'antd';
import { normalTheme } from '../../../../themes/normalTheme';

export const CustomModal = styled(Modal)`
  .ant-modal-header {
    display: none;
  }

  .ant-modal-content {
    padding: 0 !important;
    border-radius: 0;
  }

  .ant-modal-title {
    color: ${normalTheme.colors.white} !important;
  }

  .ant-modal-body {
    padding-top: 0;
    padding-bottom: 20px;
  }

  .ant-modal-close-x {
    color: ${normalTheme.colors.main} !important;
    margin-top: -5px;
    margin-left: -10px;
  }

  .ant-modal-footer {
    border-top: none !important;
    padding-top: 0 !important;
  }
`;

export const MessageContainer = styled.div`
  padding-top: 16px;
  span {
    font-weight: ${normalTheme.fontWeight.larger};
  }
  font-size: ${normalTheme.fontSizes.normal};
  text-align: center;
`;

export const Container = styled.div`
  padding: 32px 20px 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const IconWarning = styled.img`
  width: 68px;
  height: 68px;
  margin: auto;
`;

export const ButtonListContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 40px;
  padding-top: 5px;
  padding-right: 8px;
  gap: ${props => (props.gap ? `${props.gap}px` : '15px')};
`;
