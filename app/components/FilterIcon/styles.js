import styled from 'styled-components';
import { Checkbox } from 'antd';
import { normalTheme } from '../../themes/normalTheme';
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

export const Icon = styled.img`
  cursor: pointer;
  margin-left: 8px;
`;
