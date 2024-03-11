import styled from 'styled-components';
import { Menu } from 'antd';
import { normalTheme } from '../../../../themes/normalTheme';

const MenuCustom = styled(Menu)`
  background-color: transparent !important;
  align-items: center;
  border-bottom: unset !important;
  //margin-left: 35px;
  max-height: 50px;
  li.ant-menu-item {
    padding: 0 24px !important;
    border-radius: 0px;
    width: auto;
    display: flex;
  }

  .ant-menu-sub.ant-menu-submenu-horizontal {
    background-color: ${props => props.theme.background.third} !important;
  }

  li.ant-menu-item::after {
    border: none !important;
  }

  li.ant-menu-item:hover {
    background: ${props => props.theme.background.primary} !important;
  }

  li.ant-menu-item.ant-menu-item-selected {
    background: ${props => props.theme.background.primary} !important;
  }

  li.ant-menu-item.ant-menu-item-selected > span.ant-menu-title-content {
    font-weight: ${normalTheme.fontWeight.regular}; !important;
    color: ${props => props.theme.textColor.menuHeaderActive} !important;
  }

  span.ant-menu-title-content {
    height: 48px;
    opacity: 1 !important;
    font-size: ${normalTheme.fontSizes.normal};
    font-weight: ${normalTheme.fontWeight.regular};
    font-family: Roboto, serif;
    display: flex;
    margin: 0;
    align-items: center;
    color: ${props => props.theme.textColor.menuHeader};
  }

  .ant-menu-sub.ant-menu-inline > .ant-menu-item,
  .ant-menu-sub.ant-menu-inline > .ant-menu-submenu > .ant-menu-submenu-title {
    //padding: 0 24px !important;
  }

  .ant-menu-item,
  .ant-menu-submenu-title {
    width: auto;
    padding: 0 !important;
    border-radius: 0;

    :hover {
      background: ${props => props.theme.background.primary} !important;
      border: none !important;
      span.ant-menu-title-content {
        color: ${props => props.theme.textColor.menuHeaderActive} !important;
      }
    }
  }

  .ant-menu-submenu-title {
    display: flex;
    height: 50px;
  }

  .ant-menu-submenu-arrow {
    position: unset;
    margin-right: 8px;
  }

  li.ant-menu-submenu-horizontal {
    padding: 0 10px 0 10px !important;
  }

  li.ant-menu-submenu.ant-menu-submenu-horizontal.ant-menu-submenu-selected
    .ant-menu-submenu-title {
    span {
      font-weight: bold;
    }
  }

  .ant-menu-title-content {
    :hover {
      color: ${normalTheme.colors.main} !important;
    }
  }
`;

export { MenuCustom };
