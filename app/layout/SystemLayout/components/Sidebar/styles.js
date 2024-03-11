import styled from 'styled-components';
import { Layout, Menu } from 'antd';
import { normalTheme } from '../../../../themes/normalTheme';

const { Sider } = Layout;

const ContainerSider = styled.div`
  padding-top: 46px;
  height: 100%;
  width: ${props => (props.clickMenu ? 'auto' : '64px')};

  div {
    height: 100%;
  }
`;

const SiderCustom = styled(Sider)`
  z-index: 9;
  height: calc(100vh - 48px);

  .ant-layout-sider-children {
    //padding-top: 4px;
    //height: 100%;
    overflow-y: auto;
  }
  .ant-layout-sider-light {
  }
`;

const MenuCustom = styled(Menu)`
  height: 100%;
  background-color: ${props => props.theme.background.third} !important;
  //margin-top: 50px;
  padding-left: 30px;
  :where(.css-dev-only-do-not-override-1adbn6x).ant-menu-light:not(.ant-menu-horizontal)
    .ant-menu-submenu-title:hover,
  :where(.css-dev-only-do-not-override-1adbn6x).ant-menu-light
    > .ant-menu:not(.ant-menu-horizontal)
    .ant-menu-submenu-title:hover {
    background: ${normalTheme.background.second} !important;
  }
  li.ant-menu-item {
    padding: 0 0 0 20px !important;
    margin: 0 12px !important;
    border-radius: 0 !important;
    width: auto;
    display: flex;
    border-left: 2px solid #f2f2f4;
    &:hover {
      border-left: 2px solid ${props => props.theme.colors.main};
    }
  }

  .ant-menu-inline.ant-menu-root .ant-menu-item, .ant-menu-inline.ant-menu-root .ant-menu-submenu-title {
    height: 38px;
  }

  .ant-menu-inline > .ant-menu-submenu > .ant-menu-submenu-title {
    line-height: 38px !important;
    height: 38px !important;
  }

  .ant-menu-sub.ant-menu-inline {
    background-color: ${props => props.theme.background.third} !important;
  }

  li.ant-menu-item::after {
    border: none !important;
  }

  li.ant-menu-item:hover {
    text-transform: uppercase;
    color: ${props => props.theme.colors.main} !important;
  }

  li.ant-menu-item.ant-menu-item-selected {
    background-color: transparent;
    border-left: 2px solid ${props => props.theme.colors.main};
    height: 38px;
  }
  li.ant-menu-item.ant-menu-item-selected > span.ant-menu-title-content {
    text-transform: uppercase;
    color: ${props => props.theme.colors.main} !important;
  }

  span.ant-menu-title-content {
    opacity: 1 !important;
    font-size: ${normalTheme.fontSizes.normal};
    font-weight: ${normalTheme.fontWeight.medium};
    font-family: Roboto, serif;
  }

  .ant-menu-sub.ant-menu-inline > .ant-menu-item,
  .ant-menu-sub.ant-menu-inline > .ant-menu-submenu > .ant-menu-submenu-title {
    height: 38px; !important;
  }



  .ant-menu-submenu {
    border-radius: 0 !important;
    margin: 0 12px !important;
    border-left: 2px solid #f2f2f4;
    min-height: 38px;
    &:hover {
      border-left: 2px solid ${props => props.theme.colors.main};
      background: ${props => props.theme.background.second} !important;
    }
  }

  .ant-menu-item,
  .ant-menu-submenu-title {
    width: auto;
    padding: 0 !important;
    margin: 0 12px 0 19px !important;
    height: 38px; !important;
  }

  .ant-menu-submenu-arrow {
    position: unset;
    margin-right: 8px;
  }

  .ant-menu-title-content {
    font-size: ${props => props.theme.fontSizes.normal};
    font-weight: ${props => props.theme.fontWeight.medium};
    max-width: 80%;
    display: flex;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 38px;
  }

  .ant-menu-title-content span {
    display: flex;
    margin-right: 8px;
    align-items: center;
  }

  li.ant-menu-submenu.ant-menu-submenu-vertical.ant-menu-submenu-selected
    .ant-menu-submenu-title {
    background: rgb(207, 216, 220);
  }

  li.ant-menu-submenu.ant-menu-submenu-inline.ant-menu-submenu-selected
    .ant-menu-submenu-title
    span {
    font-weight: bold;
  }
  .ant-menu-submenu-title {
    :hover {
      color: ${normalTheme.colors.main} !important;
    }
  }
  .ant-menu-submenu-active {
    :hover {
      .ant-menu-submenu-arrow {
        color: ${normalTheme.colors.main} !important;
      }
    }
  }
  .ant-menu-submenu-selected {
    color: ${normalTheme.colors.main} !important;
  }

  &.ant-menu-inline > .ant-menu-submenu > .ant-menu-submenu-title {
    height: 38px !important;
    line-height: 38px !important;
  }
`;

export { ContainerSider, MenuCustom, SiderCustom };
