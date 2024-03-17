import styled from 'styled-components';
import { normalTheme } from '../../themes/normalTheme';
export const Container = styled.div`
  display: flex;
  width: 100%;
  //height: calc(100vh - 50px);
  height: 100%;
`;

export const TopicsWrapper = styled.div`
  width: 100%;
  padding: 0;
`;

export const TopicsTimeFilter = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  //height: 40px;
  text-align: right;
  padding-bottom: 10px;
  padding-top: 10px;
  padding-right: 42px;
`;
