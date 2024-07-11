import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const MenuBar_Container = styled.div`
  width: 100vw;
  height: 54px;
  position: fixed;
  z-index: 9999;
  bottom: 0;
  right: 0;
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 40px;
  background-color: white;
`;

export const Menubar_Icon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Menubar_Title = styled.div<{ select?: boolean }>`
  text-align: center;
  font-size: 15px;
  font-weight: 400;
  color: ${(props) => (props.select ? theme.primary[7] : theme.gray['2.5'])};
`;
