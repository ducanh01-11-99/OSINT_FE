import styled from 'styled-components';
import { Layout } from 'antd';
import { normalTheme } from '../../themes/normalTheme';

const { Content } = Layout;
export const EmptySider = styled.div`
  border-right: 1px solid ${normalTheme.colors.neu8} !important;
  min-width: 86px;
  height: 100%;
`;
export const ContentStyled = styled(Content)`
  width: 90%;
`;
