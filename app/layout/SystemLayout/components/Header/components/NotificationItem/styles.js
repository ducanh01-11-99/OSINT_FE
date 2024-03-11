import styled from 'styled-components';
import { normalTheme } from '../../../../../../themes/normalTheme';
export const Header = styled.div`
  font-size: ${normalTheme.fontSizes.normal};
  font-weight: ${normalTheme.fontWeight.larger};
  margin-bottom: 4px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  align-items: center;
}
`;
export const Title = styled.div`
  font-size: ${normalTheme.fontSizes.small};
  font-weight: ${normalTheme.fontWeight.regular};
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 4px;
`;
export const DateTime = styled.div`
  color: ${normalTheme.colors.neu4};
  font-size: ${normalTheme.fontSizes.small};
  text-align: left;
`;
export const Footer = styled.div`
  text-align: center;
  font-size: ${normalTheme.fontSizes.regular};
  cursor: pointer;
  padding: 4px;

  :hover {
    background: #f5f5f5;
  }
`;
export const NotifiContainer = styled.div`
  background: ${normalTheme.colors.white};
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12),
    0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
`;
export const Container = styled.div`
  padding: 12px 10px;
  min-height: 105px;
  display: flex;
  ${props =>
    props.border &&
    `
  border-bottom: 1px solid ${normalTheme.colors.neu7};
  border-top: 1px solid ${normalTheme.colors.neu7};
  `}
  ${props =>
    props.itemId === props.id && `background: ${normalTheme.colors.neu8}`};
  cursor: pointer;
  :hover {
    background: ${normalTheme.colors.neu9};
  }
  position: relative;
`;
export const New = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${normalTheme.colors.main};
  position: absolute;
  z-index: 10;
  right: 10px;
  top: 10px;
`;
export const Icon = styled.img`
  margin-right: 8px;
  width: 24px;
  height: 24px;
`;
