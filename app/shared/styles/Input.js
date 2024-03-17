import styled from 'styled-components';
import { Input, Select } from 'antd';
import { normalTheme } from '../../themes/normalTheme';
export const InputCustom = styled(Input)`
  width: 100%;
  .ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover {
    border-color: ${normalTheme.colors.main} !important;
  }
  .ant-input-affix-wrapper-focused {
    border-color: ${normalTheme.colors.main} !important;
    box-shadow: 0 0 0 2px ${normalTheme.colors.range} !important;
  }
  .ant-input-affix-wrapper-focused {
    :focus-within {
      border-color: ${normalTheme.colors.main} !important;
      box-shadow: 0 0 0 2px ${normalTheme.colors.range} !important;
    }
  }
  .ant-input-affix-wrapper-success {
    border-color: ${normalTheme.colors.main} !important;
    box-shadow: 0 0 0 2px ${normalTheme.colors.range} !important;
  }
  :focus {
    border-color: ${normalTheme.colors.main} !important;
    box-shadow: 0 0 0 2px ${normalTheme.colors.range} !important;
  }
  :hover {
    border-color: ${normalTheme.colors.main} !important;
  }
`;

export const SelectCustom = styled(Select)`
  .ant-select:not(.ant-select-disabled):hover .ant-select-selector {
    border-color: ${normalTheme.colors.main} !important;
    box-shadow: 0 0 0 2px ${normalTheme.colors.range} !important;
  }
`;
