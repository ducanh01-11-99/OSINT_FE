import styled from 'styled-components';
import { Table } from 'antd';
import { normalTheme } from '../../themes/normalTheme';
export const TableCustom = styled(Table)`
  background-color: transparent;
  width: 100%;
  height: ${props => (props.height ? `${props.height}%` : '100%')};

  .ant-table-tbody {
    tr {
      td {
        //height: 52px !important;
        white-space: ${props =>
          props.preWrap ? 'pre-wrap' : 'nowrap'} !important;
        background-color: transparent;
        border-bottom: none;
        border-left: none;
        border-bottom: ${props =>
          props.hasBorderTableHead
            ? `1px solid ${normalTheme.colors.neu5}`
            : null};
      }
    }
  }

  .ant-table-thead {
    tr {
      th {
        height: 48px;
        white-space: nowrap;
        background-color: transparent;
        border-bottom: none;
        border-left: none;
        border-bottom: ${props =>
          props.hasBorderTableHead
            ? `1px solid ${normalTheme.colors.neu5}`
            : null};
      }
    }
  }

  .ant-table {
    background-color: transparent;
  }

  .ant-table-cell {
    font-size: ${props => props.textCellSize || normalTheme.fontSizes.normal};
    font-weight: ${normalTheme.fontWeight.regular};
    background-color: transparent;
  }

  .ant-table-cell::before {
    display: none;
  }

  .ant-table-row {
    border-bottom: none;
  }

  .ant-table-filter-trigger {
    color: #000;
  }

  .ant-table-filter-column {
    justify-content: flex-start;

    .ant-table-column-title {
      flex: unset;
    }
  }

  .ant-pagination-item-active a {
    color: ${normalTheme.colors.main};
  }

  :where(.css-dev-only-do-not-override-pr0fja).ant-pagination
  .ant-pagination-item-active {
    font-weight: 600;
    background-color: #ffffff;
    border-color: ${normalTheme.colors.main} !important;
  }

  .ant-pagination-item-active {
    font-weight: ${normalTheme.fontWeight.medium};
    background: #fff;
    border-color: ${normalTheme.colors.main} !important;
  }

  .ant-table-cell-row-hover {
    background-color: ${normalTheme.colors.neu8} !important;
    cursor: pointer;
  }

  .ant-table-wrapper {
    height: 100%;
  !important;
  }

  :where(.css-dev-only-do-not-override-1adbn6x).ant-table-wrapper {
    height: 100%;
  }

  .ant-spin-nested-loading {
    height: 100%;
  !important;
  }

  .ant-spin-container {
    height: 100%;
  !important;
  }

  .ant-table {
    height: 100%;
  }

  .ant-table-container {
    height: 100%;
  }

  .ant-table-body {
    height: calc(100% - 60px);
    //overflow-y: auto;
  }

  .ant-table-tbody > tr > td {
    border-bottom: 1px solid ${normalTheme.colors.neu8};
    transition: background 0.3s;
  }

  .ant-table-thead > tr > th {
    border-bottom: 1px solid ${normalTheme.colors.neu5};
    transition: background 0.3s;
  }

  // .ant-table-tbody > tr > td {
  //   padding: 0 0 0 20px;
    //   height: ${props => props.heightCustom || '48px'} !important;
  //
  // }

  .ant-table-thead > tr > th {
    height: 48px !important;
    padding: 0 0 0 16px !important;
  }
`;
