import styled from 'styled-components';
import { normalTheme } from '../../themes/normalTheme';

export const TopicManagementContainer = styled.div`
  padding: 46px 24px 42px 42px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: 100%;
`;

export const SearchArea = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  gap: 24px;
  justify-content: space-between;
`;

export const TopicManagementTitle = styled.div`
  height: 42px;
  display: flex;
  align-items: center;
  font-size: ${normalTheme.fontSizes.regular};
  font-weight: ${normalTheme.fontWeight.larger};

  span {
    color: ${normalTheme.colors.main};
    margin-left: 6px;
  }
`;

export const TopicListContainer = styled.div`
  background-color: ${normalTheme.colors.neu10};
  padding: 32px 40px 0 40px;
  flex: 1;
  margin-top: 44px;
`;

export const Icon = styled.img`
  margin-right: 16px;
`;

export const CardIcon = styled.div`
  padding: 0 8px;
`;
export const InputSearch = styled.div`
  //padding-right: 18px;
  width: calc(100% - 210px);
`;

export const IconButton = styled.img`
  display: flex;
  align-content: center;
  cursor: pointer;
`;
