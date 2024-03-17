import styled from 'styled-components';
import { normalTheme } from '../../../../../../themes/normalTheme';
export const ContentBox = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 46px;
  align-items: center;
  padding: 0 22px;
  border-bottom: 1px solid ${normalTheme.colors.neu7};
`;

export const PrimaryKey = styled.div`
  width: calc(100% - 144px);
`;

export const ForeignKey = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
`;
export const Buttons = styled.div`
  display: flex;
  margin-left: 24px;
  min-width: 144px;
  height: 36px;
  align-items: center;
`;
export const Operator = styled.div`
  width: 30px;
  text-align: center;
  margin: 0 ${props => props.mx}px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${normalTheme.colors.neu5};
  height: 36px;
`;
export const OperatorPrimaryKey = styled.div`
  width: 100%;
  text-align: left;
  color: ${normalTheme.colors.neu5};
  height: 22px;
  border-bottom: 1px solid ${normalTheme.colors.neu7};
  display: flex;
  align-items: center;
  padding-left: 22px;
  background: ${normalTheme.colors.neu7};
`;
export const Label = styled.div`
  font-size: ${normalTheme.fontSizes.normal};
  color: ${normalTheme.colors.neu2};
  background: ${normalTheme.colors.neu8};
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 8px;
  margin: 5px 0;
`;
export const PrimaryKeyLabel = styled.div`
  display: flex;
  min-width: 340px;
`;
export const IconFunction = styled.img`
  cursor: pointer;
  margin-left: 24px;
`;
export const AddNew = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${normalTheme.colors.main};
  height: 46px;
  cursor: pointer;
  font-weight: ${normalTheme.fontSizes.large};

  :hover {
    background: ${normalTheme.colors.neu8};
  }
`;
export const IconAddNew = styled.img`
  margin-right: 8px;
`;
