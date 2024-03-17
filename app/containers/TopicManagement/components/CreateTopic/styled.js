import styled from 'styled-components';
import { Button, Form } from 'antd';
import { normalTheme } from '../../../../themes/normalTheme';
export const Container = styled.div`
  margin: 38px 24px;
  height: calc(100vh - 150px);
  overflow-y: scroll;
`;
export const Box = styled.div`
  flex: 1;
`;
export const FormWrapper = styled.div`
  padding: 71px 75px 0;
`;
export const Row = styled.div`
  min-height: 38px;
  display: flex;
  align-items: flex-start;
  width: 100%;
`;
export const Label = styled.div`
  font-size: ${normalTheme.fontSizes.normal}
  color: ${normalTheme.colors.neu3};
  font-weight: ${normalTheme.fontWeight.larger};
  min-width: 185px;
  margin-right: 16px;
  span {
    color: ${normalTheme.colors.red};
    margin-left: 10px;
  }
`;
export const FormCustom = styled(Form)`
  .ant-form-item {
    margin-bottom: 0 !important;
    width: 100%;
  }
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
`;
export const MyFormItem = styled(Form.Item)`
  width: auto !important;
`;
export const KeywordBox = styled.div`
  background-color: ${normalTheme.colors.neu10};
`;
export const KeywordHeader = styled.div`
  height: 46px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${normalTheme.colors.main};
  padding: 7px 22px;
`;
export const Keyword = styled.div`
  font-size: ${normalTheme.fontSizes.normal};
  font-weight: ${normalTheme.fontWeight.larger};
  margin-right: 60px;
  min-width: ${props => (props.minWidth ? `${props.minWidth}px` : '340px')};
  color: ${normalTheme.colors.neu2};
`;
export const LabelBox = styled.div`
  display: flex;
  align-items: center;
`;
export const KeywordHint = styled.div`
  padding: 0 40px 0 80px;
  border-top: 1px solid ${normalTheme.colors.neu7};
  display: flex;
  height: 46px;
  align-items: center;
  justify-content: space-between;
`;
export const HintKey = styled.div`
  padding-left: 80px;
  span {
    font-weight: ${normalTheme.fontWeight.larger};
  }
`;
export const Hint = styled.div`
  text-align: left;
  height: 46px;
  display: flex;
  align-items: center;
  p {
    display: inline-block;
    color: ${normalTheme.colors.main};
    margin: 0 5px;
    font-weight: ${normalTheme.fontWeight.larger};
  }
`;
export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`;
export const SubRow = styled.div`
  display: flex;
  width: 83%;
  justify-content: space-between;
`;
export const Item = styled.div`
  flex: 1;
  margin-left: ${props => props.ml}px;
  display: flex;
`;

export const RowCenter = styled.div`
  min-height: 46px;
  display: flex;
  align-items: flex-start;
  width: 100%;
  padding: 7px 0;
`;
export const Function = styled.div`
  width: 144px;
`;
export const HintBox = styled.div`
  margin-top: 16px;
`;

export const ButtonCustom = styled(Button)`
  height: 38px;
  min-width: 112px;
  display: flex;
  align-items: center;
  font-size: ${normalTheme.fontSizes.normal};
  font-weight: 700;
  justify-content: center;
  margin-left: 16px;
  border: 1px solid ${normalTheme.colors.main};
  padding: 8px 20px;
  text-transform: uppercase;
  color: ${props =>
    props.type === 'cancel'
      ? normalTheme.colors.main
      : normalTheme.colors.white};
  background-color: ${props =>
    props.type === 'cancel'
      ? normalTheme.colors.white
      : normalTheme.colors.main};

  &:hover {
    color: ${props =>
      props.type === 'cancel'
        ? normalTheme.colors.lightMain
        : normalTheme.colors.white};
    background-color: ${props =>
      props.type === 'cancel'
        ? normalTheme.colors.white
        : normalTheme.colors.lightMain};
    border: 1px solid ${normalTheme.colors.lightMain} !important;
  }
`;
