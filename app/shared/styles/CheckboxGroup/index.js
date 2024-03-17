import styled from 'styled-components';
import { Checkbox, Radio } from 'antd';
import { normalTheme } from '../../../themes/normalTheme';

const CheckboxGroup = Checkbox.Group;
export const CheckboxGroupCustom = styled(CheckboxGroup)`
  display: flex;
  flex-direction: column;
  margin-top: 2px;
  gap: 25px;

  .ant-checkbox-checked::after {
    border-color: ${normalTheme.colors.main} !important;
  }

  .ant-checkbox-wrapper {
    :hover {
      .ant-checkbox-inner {
        border-color: ${normalTheme.colors.main} !important;
      }
    }
  }

  .ant-checkbox-inner {
    background-color: ${normalTheme.colors.white} !important;
    border-color: ${normalTheme.colors.neu7} !important;
  }

  .ant-checkbox-checked .ant-checkbox-inner::after {
    border-color: ${normalTheme.colors.main} !important;
  }

  .ant-checkbox-indeterminate .ant-checkbox-inner::after {
    background-color: ${normalTheme.colors.main} !important;
  }
`;
export const CustomRadioGroup = styled(Radio.Group)`
  display: flex !important;
  flex-direction: ${props => (props.flex ? props.flex : 'column')};
  margin-top: 6px;
  gap: 16px;
  .ant-radio,
  .ant-radio-wrapper {
    :hover {
      .ant-radio-inner {
        border-color: ${normalTheme.colors.main} !important;
      }
    }
  }

  .ant-radio-wrapper .ant-radio-inner::after {
    background: ${normalTheme.colors.main};
  }

  .ant-radio-checked .ant-radio-inner {
    background-color: ${normalTheme.colors.white} !important;
    border-color: ${normalTheme.colors.white} !important;
  }

  .ant-radio-wrapper .ant-radio-inner::after {
    margin-block-start: -12px;
    margin-inline-start: -12px;
    width: 24px;
    height: 24px;
  }
`;

export const CheckboxCustom = styled(Checkbox)`
  margin-bottom: ${props => (props.heightFilter ? 0 : '15px')} !important;
  margin-top: ${props => (props.heightFilter ? 0 : '6px')} !important;
  margin-left: ${props => (props.heightFilter ? 0 : '22px')};
  .ant-checkbox-inner {
    background-color: ${normalTheme.colors.white} !important;
    border-color: ${normalTheme.colors.neu7} !important;
  }
  .ant-checkbox-checked .ant-checkbox-inner::after {
    border-color: ${normalTheme.colors.main} !important;
  }
  .ant-checkbox-indeterminate .ant-checkbox-inner::after {
    background-color: ${normalTheme.colors.main} !important;
  }
  .ant-checkbox-checked::after {
    border-color: ${normalTheme.colors.main} !important;
  }
  .ant-checkbox-wrapper {
    :hover {
      .ant-checkbox-inner {
        border-color: ${normalTheme.colors.main} !important;
      }
    }
  }
`;
