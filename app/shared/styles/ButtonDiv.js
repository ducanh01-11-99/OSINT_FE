import styled from 'styled-components';
import { normalTheme } from '../../themes/normalTheme';
export const ButtonDiv = styled.div`
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: ${props => props.theme.fontWeight.regular};
  border: 1px;
  color: ${props =>
    props.isFocus ? normalTheme.colors.neu3 : normalTheme.colors.neu4};
  border: 1px solid ${props => props.theme.colors.neu6} !important;
  background: ${props =>
    props.isFocus ? normalTheme.colors.white : normalTheme.colors.neu9};
  padding-left: 10px;
  padding-right: 10px;
  height: 26px;
  width: fit-content;
  line-height: 24px !important;

  :hover {
    color: ${props => props.theme.colors.neu3};
    background: ${props => props.theme.colors.white};
  }

  :focus {
    color: ${props => props.theme.colors.neu3};
    background: ${props => props.theme.colors.white};
  }
`;
