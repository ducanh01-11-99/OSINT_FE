import styled from 'styled-components';
import { Form, Input, Modal, Radio, Select } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import { normalTheme } from '../../../../themes/normalTheme';

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

export const ItemContainer = styled.div`
  display: flex;
  min-height: 62px !important;
  height: ${props => props.cusHeight || 'unset'};
`;

export const NoticeItem = styled.div`
  font-size: ${normalTheme.fontSizes.small};
  font-weight: ${normalTheme.fontWeight.regular};
  color: ${normalTheme.colors.main};
  text-align: right;
`;

export const ItemLabel = styled.div`
  width: 150px;
  padding-top: 6px;
`;

export const ItemContent = styled.div`
  width: calc(100% - 150px);
`;

export const InputCustom = styled(Input)`
  .ant-input {
  }
  border-radius: 0px !important;
  height: 38px !important;
`;

export const InputPassword = styled(Input.Password)`
  .ant-input {
  }
  border-radius: 0px !important;
  height: 38px !important;
`;

export const CustomSelect = styled(Select)`
  &.ant-select {
    width: 100%; !important;
    height: 38px; !important;
  }

  .ant-select-selector {
    height: 38px !important;
    border-radius: 0px !important;
  }
`;

export const RadioCustom = styled(Radio)`
  margin-right: 16px !important;
  .ant-radio {
    top: 0 !important;
  }
`;

export const CustomForm = styled(Form)`
  .ant-form-item-explain-error {
    font-size: ${normalTheme.fontSizes.small};
    font-style: italic;
  }
`;

export const CustomFormItem = styled(FormItem)`
  .ant-form-item-explain-error {
    display: none;
  }
  .ant-form-item-explain {
    display: none;
  }

  .ant-form-item-extra {
    position: absolute;
    top: 38px;
  }
`;

export const ErrMessContainer = styled.div`
  font-size: ${normalTheme.fontSizes.small};
  font-style: italic;
  color: #ff4d4f;
`;

export const ExtraContainer = styled.div`
  font-size: ${normalTheme.fontSizes.small};
  font-style: italic;
`;
