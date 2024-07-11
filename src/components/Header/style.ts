import styled from 'styled-components';
import { theme } from '../../lib/utils/style/theme';

export const Header_Container = styled.div<{ isOnChatting?: boolean }>`
  width: 100vw;
  height: 40px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  right: 30px;
  border-bottom: 1px solid
    ${(props) => (props.isOnChatting ? theme.gray[1] : 'none ')};
`;

export const Header_BackIcon = styled.div`
  width: 33%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  position: absolute;
  left: 30px;
`;

export const Header_ProgressBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Header_Title = styled.div`
  font-weight: 600;
  font-size: 17px;
  position: absolute;
  left: 50vw;
  transform: translateX(-50%);
`;

export const Header_Button = styled.div`
  color: ${theme.sub.red};
  font-size: 15px;
  font-weight: 500;
  position: absolute;
  right: 30px;
`;
