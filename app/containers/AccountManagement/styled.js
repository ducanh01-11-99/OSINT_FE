import styled from 'styled-components';
import { Button } from 'antd';
import { normalTheme } from '../../themes/normalTheme';

export const Container = styled.div`
  margin: 0 40px 24px 25px;
  height: 90vh;
`;

export const HeaderPart = styled.div`
  //padding: 20px;
  padding-top: 46px;
  display: flex;
  gap: 48px;
`;

export const ContainerSearch = styled.div`
  display: flex;
  padding-bottom: 45px;
  width: calc(100% - 210px);
`;

export const InputSearch = styled.div`
  flex: 8;
`;

export const TitleTable = styled.div`
  span {
    color: ${normalTheme.colors.main};
  }
  font-weight: ${normalTheme.fontWeight.medium};
  font-size: ${normalTheme.fontSizes.regular};
`;

export const ListButtonContainer = styled.div`
  display: flex;
  gap: 28px;
  justify-content: center;
  padding-right: 20px;
  margin-right: 10px;
`;

export const ImageFunction = styled.img`
  width: 20px;
  height: 20px;
`;

export const ButtonListContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 5px 24px 40px 24px;
  gap: 15px;
`;

export const ButtonActive = styled(Button)`
  font-size: ${normalTheme.fontSizes.regular};
  height: 38px;
  width: 122px;
  font-weight: ${normalTheme.fontWeight.larger};
  color: ${normalTheme.colors.white} !important;
  background-color: ${normalTheme.colors.main} !important;
  border-color: ${normalTheme.colors.main} !important;
`;

export const ButtonCancel = styled(Button)`
  height: 38px;
  width: 110px;
`;

export const TableContainer = styled.div`
  height: calc(100% - 100px);
  .ant-table-thead > tr > th {
    font-weight: ${normalTheme.fontWeight.medium}; !important;
  }
`;

export const TableDiv = styled.div`
  background-color: ${normalTheme.colors.neu10};
  padding-top: 32px;
  padding-left: 22px;
  height: calc(100vh - 200px);
`;
