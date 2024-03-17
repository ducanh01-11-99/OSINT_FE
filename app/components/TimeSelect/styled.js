import styled from 'styled-components';
import { DatePicker } from 'antd';
import { normalTheme } from '../../themes/normalTheme';
const { RangePicker } = DatePicker;

export const ItemSelect = styled.div`
  :hover {
    cursor: pointer;
    color: ${normalTheme.colors.main};
  }
  height: 42px !important;
  font-size: ${normalTheme.fontSizes.normal};
  font-weight: ${normalTheme.fontWeight.regular};
  color: ${props =>
    props.hightLight ? normalTheme.colors.main : normalTheme.colors.black};
`;

export const Label = styled.span``;

export const RangePickerCustom = styled(RangePicker)`
  border: 1px solid ${props => props.theme.colors.neu6} !important;

  &.ant-picker-range {
    //width: 0;
    padding: 0 10px 0 0;
    border: none;
  }

  &.ant-picker-panel-layout {
    display: flex;
  !important;
  }

  &.ant-picker .ant-picker-input {
    padding-left: 10px !important;
    width: 80px;
  }

  &.ant-picker .ant-picker-suffix {
    display: none;
  }

  &.ant-picker-focused.ant-picker {
    box-shadow: none;
  }

  &.ant-picker-active-bar {
    width: 70px !important;
  }

  &.ant-picker .ant-picker-input > input {
    font-size: ${props => props.theme.fontSizes.small};
    font-weight: ${props => props.theme.fontWeight.regular};
  }

`;

export const IconButton = styled.img`
  display: flex;
  align-content: center;
  cursor: pointer;
`;

export const ConfigItem = styled.div`
  flex: ${props => props.flex};
  display: flex;
  gap: 16px;
  flex-direction: column;
`;

export const ConfigTitle = styled.div`
  height: 41px;
  display: flex;
  align-items: center;
  color: ${normalTheme.colors.main};
  font-weight: 600;
  font-size: ${normalTheme.fontSizes.normal};
  border-bottom: ${normalTheme.colors.neu7};
`;

export const Wrapper = styled.div`
  display: flex;
  padding: 24px;
  border-bottom: 1px solid ${normalTheme.colors.neu7};
  width: ${props => props.customWidth || '860px'};
`;
