import styled from 'styled-components';
import { normalTheme } from '../../themes/normalTheme';
export const Activate = styled.div`
  width: 150px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${normalTheme.colors.main};
  font-size: ${normalTheme.fontSizes.normal};
  background: rgba(72, 178, 255, 0.2);
`;
export const Deactivate = styled.div`
  width: 150px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${normalTheme.colors.red};
  font-size: ${normalTheme.fontSizes.normal};
  background: rgba(255, 86, 90, 0.2);
`;
