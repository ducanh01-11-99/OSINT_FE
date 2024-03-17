import styled from 'styled-components';
import { normalTheme } from '../../../../themes/normalTheme';

export const HistoryContainer = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
  min-height: 400px;
`;
export const HistoryHeader = styled.div`
  background: ${normalTheme.colors.main};
  color: ${normalTheme.colors.white};
  font-size: ${normalTheme.fontSizes.normal};
  font-weight: ${normalTheme.fontWeight.larger};
  height: 46px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 24px;
  justify-content: space-between;
`;
export const Title = styled.div`
  color: ${normalTheme.colors.neu2};
  font-size: ${normalTheme.fontSizes.normal};
  font-weight: ${normalTheme.fontWeight.larger};
  padding: 0 20px;
  height: 22px;
  display: flex;
  align-items: center;

  span {
    font-size: ${normalTheme.fontSizes.regular};
    margin-left: 25px;
    display: inline-block;
  }
`;
export const IconClose = styled.img`
  cursor: pointer;
`;
export const Body = styled.div`
  padding: 0 20px;
`;
