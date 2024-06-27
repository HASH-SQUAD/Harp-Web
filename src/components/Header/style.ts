import styled from 'styled-components';
import { theme } from '../../lib/utils/style/theme';

export const Header_Container = styled.div`
  width: 100vw;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 28vw;
  justify-content: space-between;
`;

export const Header_BackIcon = styled.div`
  width: 33%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
`;

export const Header_ProgressBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Header_Title = styled.div`
  width: 33%;
  font-weight: 600;
  font-size: 17px;
`;

export const Header_Button_Margin = styled.div`
  width: 33%;
`;

export const Header_Button = styled.div`
  width: 33%;
  color: ${theme.sub.red};
  font-size: 15px;
  font-weight: 500;
`