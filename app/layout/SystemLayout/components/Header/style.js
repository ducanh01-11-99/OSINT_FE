import { Layout, Popover } from 'antd';
import styled from 'styled-components';
import { normalTheme } from '../../../../themes/normalTheme';

const { Header } = Layout;

const HeaderEtn = styled(Header)`
  height: 48px !important;
  background-color: ${props => props.theme.background.primary} !important;
  width: 100%;
  display: flex;
  z-index: 10;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  position: relative;

  &.ant-menu-horizontal > .ant-menu-submenu {
    top: 0px;
  }
`;

const ContainerHeader = styled.div`
  width: 100% !important;
  display: flex;
  align-items: center;
  background: #f2f2f4;
  padding: 0 !important;
`;

const LeftHeader = styled.div`
  width: 80%;
  display: flex;
  align-content: center;
`;

const IconMenu = styled.img`
  display: flex;
  align-content: center;
  cursor: pointer;
`;

const Logo = styled.img`
  display: flex;
  align-content: center;
  margin-right: 40px;
  height: 36px;
  cursor: pointer;
  width: 115px;
`;

export const LogoMiniSize = styled.img`
  display: flex;
  align-content: center;
  margin-right: 40px;
  cursor: pointer;
  width: 39px;
  height: 36px;
`;

export const LogoCard = styled.div`
  display: flex;
  height: 48px;
  min-width: ${props =>
    props.minWidthLogo ? `${props.minWidthLogo}px` : '328px'};
  padding: 0 ${props => (props.minWidthLogo ? '5px' : '24px')};
  background: ${normalTheme.colors.mainDark};
  align-items: center;
`;

// Dành riêng cho logo màn truy vết
export const LogoCardTracing = styled.div`
  display: flex;
  height: 48px;
  width: 86px;
  background: ${normalTheme.colors.mainDark};
  align-items: center;
  padding-left: 24px;
`;

const RightHeader = styled.div`
  width: 20%;
  height: 100%;
  margin-right: 42px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: auto;

  .ant-badge-count {
    background-color: ${normalTheme.colors.main};
  }
`;

const IconUser = styled.img`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: 18px;
  height: 32px;
  width: 32px;
  border-radius: 50%;
`;

const PopoverCustom = styled(Popover)`
  .ant-popover-inner-content {
    padding: 0;
  }
`;

export {
  HeaderEtn,
  ContainerHeader,
  LeftHeader,
  IconMenu,
  Logo,
  RightHeader,
  IconUser,
  PopoverCustom,
};
