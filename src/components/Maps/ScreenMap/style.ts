import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const ScreenMap_Layout = styled.div`
  width: 100%;
  height: 100%;
`;

export const ScreenMap_Overlay = styled.div`
  padding: 2px 9px;
  border-radius: 20px;
  background: ${theme.gray.white};
  box-shadow: 0px 0px 5px 0px rgba(126, 80, 255, 0.3);
  color: ${theme.primary[7]};
  font-size: 14px;
  font-weight: 400;
`;
