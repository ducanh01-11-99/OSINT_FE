import { createGlobalStyle } from 'styled-components';
import { normalTheme } from './themes/normalTheme';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
    font-family: "Open Sans" !important;
    font-size: 14px;
  }

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: #ffffff;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #c1c1c1;
    border-radius: 10px;
    border: 3px solid #ffffff;
  }

  body.fontLoaded {
    font-family: "Open Sans" !important;;
  }

  #app {
    background-color: #fafafa;
    height: 100%;
    min-width: 100%;
  }

  p,
  label {
    line-height: 1.5em;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }

  .ant-picker-header-view {
    color: ${normalTheme.colors.main} !important;;
    font-weight: 600;
  }

  .ant-picker-cell-in-view.ant-picker-cell-today .ant-picker-cell-inner::before {
    border-color: ${normalTheme.colors.main} !important;
  }

  .ant-picker-cell-in-view.ant-picker-cell-selected .ant-picker-cell-inner, .ant-picker-cell-in-view.ant-picker-cell-range-start .ant-picker-cell-inner, .ant-picker-cell-in-view.ant-picker-cell-range-end .ant-picker-cell-inner {
    background: ${normalTheme.colors.main} !important;;
  }


  .ant-picker-cell-range-hover-start::after {
    border-color: ${normalTheme.colors.main} !important;
  }

  .ant-picker-cell-range-hover-start::after {
    border-color: ${normalTheme.colors.main} !important;
  }

  .ant-picker-cell-range-hover-end::after,
  .ant-picker-cell-range-hover-start::after,
  .ant-picker-cell-range-hover::after {
    border-color: ${normalTheme.colors.main} !important;
  }

  .ant-picker-cell-range-start::before {
    background: ${normalTheme.colors.range} !important;
  }

  .ant-picker-cell-range-end::before {
    background: ${normalTheme.colors.range} !important;
  }

  .ant-picker-cell-in-view.ant-picker-cell-in-range::before {
    background: ${normalTheme.colors.range} !important;
  }

  .ant-picker-cell-selected::before {
    background: ${normalTheme.colors.range} !important;
  }

  .ant-picker-cell-inner::after {
    background: ${normalTheme.colors.range} !important;
  }
  .ant-picker-time-panel-cell-selected {
    .ant-picker-time-panel-cell-inner {
      background: ${normalTheme.colors.main} !important;
      color: ${normalTheme.colors.white} !important;
    }
  }
  .ant-picker-ok {
    button {
      background: ${normalTheme.colors.main} !important;
      border-color: ${normalTheme.colors.main} !important;
      :hover {
        background: ${normalTheme.colors.mainHover} !important;
        border-color: ${normalTheme.colors.mainHover} !important
      }
    }
  }
  .notify-dropdown {
    .ant-dropdown-menu {
      width: 300px;
      background: none !important;
      box-shadow: none !important;
      max-height: 550px;
      overflow-y: auto;
    }
  }

  .ant-notification-notice {
    margin-bottom: 0 !important;
    border-radius: 10px;
  }
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
  .ant-select-focused:where(.css-dev-only-do-not-override-1adbn6x).ant-select:not(.ant-select-disabled):not(.ant-select-customize-input):not(.ant-pagination-size-changer)
    .ant-select-selector {
    border-color: ${normalTheme.colors.main} !important;
    box-shadow: 0 0 0 2px ${normalTheme.colors.range} !important;
  }
  .ant-select-selector {
    &:hover {
      border-color: ${normalTheme.colors.main} !important;
    }
  }
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
  input:focus {
    border-color: ${normalTheme.colors.main} !important;
    box-shadow: 0 0 0 2px ${normalTheme.colors.range} !important;
  }
  input:hover {
    border-color: ${normalTheme.colors.main} !important;
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
  .ant-radio-inner::after {
    border-color: ${normalTheme.colors.main} !important;
  }

  .ant-radio-wrapper:hover .ant-radio,
  .ant-radio:hover .ant-radio-inner,
  .ant-radio-input:focus + .ant-radio-inner {
    border-color: ${normalTheme.colors.main} !important;
  }

  .ant-radio-wrapper:hover
  :where(.css-dev-only-do-not-override-1adbn6x).ant-radio-wrapper,
  :where(.css-dev-only-do-not-override-1adbn6x).ant-radio-wrapper:hover
  .ant-radio-inner {
    border-color: ${normalTheme.colors.main} !important;
  }

.ant-radio-checked {
    .ant-radio-inner {
      background-color: ${normalTheme.colors.white} !important;
    }
    .ant-radio-inner::after {
      background-color: ${normalTheme.colors.main} !important;
    }
  }
  .ant-radio-inner::after {
    background-color: ${normalTheme.colors.main}; !important;
  }

  .ant-radio-wrapper:hover .ant-radio,
  .ant-radio:hover .ant-radio-inner,
  .ant-radio-input:focus + .ant-radio-inner {
    border-color: ${normalTheme.colors.main}; !important;
  }

  .ant-radio-wrapper:hover
    :where(.css-dev-only-do-not-override-1adbn6x).ant-radio-wrapper,
  :where(.css-dev-only-do-not-override-1adbn6x).ant-radio-wrapper:hover
    .ant-radio-inner {
    border-color: ${normalTheme.colors.main};
  }

  :where(.css-dev-only-do-not-override-1adbn6x).ant-radio-wrapper
    .ant-radio-checked
    .ant-radio-inner {
    background-color: ${normalTheme.colors.white}; !important;
    border-color: ${normalTheme.colors.main};
  }

`;

export default GlobalStyle;
