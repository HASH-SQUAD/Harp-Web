import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const MiniMap_Layout = styled.div`
  width: 100%;
  height: 280px;
`;

export const MiniMap_Error = styled.p`
  font-size: 16px;
  color: ${theme.sub.red};
  text-align: center;
  padding-top: 10px;
`;
