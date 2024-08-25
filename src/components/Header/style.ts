import styled from 'styled-components';
import { theme } from '../../lib/utils/style/theme';

export const Header_Container = styled.div<{ isOnChatting?: boolean }>`
  width: 100vw;
  height: 40px;
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  align-items: center;
  border-bottom: 1px solid
    ${(props) => (props.isOnChatting ? theme.gray[1] : 'none ')};
  flex-shrink: 0;
  position: relative;
`;

export const Header_BackIcon = styled.div`
  display: flex;
  align-items: center;
`;

export const Header_ProgressBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const Header_Title = styled.div`
  font-weight: 600;
  font-size: 17px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const Header_Button = styled.div<{ ButtonColor?: string }>`
  color: ${(props) => props.ButtonColor};
  font-size: 15px;
  font-weight: 500;
`;
