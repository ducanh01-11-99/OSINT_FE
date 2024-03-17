import styled from 'styled-components';
import { Form, Input, Modal, Radio, Select } from 'antd';
import { normalTheme } from '../../../../themes/normalTheme';

export const CustomModal = styled(Modal)``;

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
