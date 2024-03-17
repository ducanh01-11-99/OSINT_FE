import styled from 'styled-components';
import { Select } from 'antd';
import { normalTheme } from '../../themes/normalTheme';
export const SelectCustom = styled(Select)`
  .ant-select:not(.ant-select-disabled):hover .ant-select-selector {
    border-color: ${normalTheme.colors.main} !important;
    box-shadow: 0 0 0 2px ${normalTheme.colors.range} !important;
  }
`;
