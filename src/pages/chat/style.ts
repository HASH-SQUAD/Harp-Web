import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const Chat_Container = styled.div<{ StatusBarSize?: string }>`
  padding: ${(props) => props.StatusBarSize || '54px'} 30px 30px 30px;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Chat_Content = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${theme.gray.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Chat_Messages = styled.div``;

export const Chat_Typing_Box = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  border-radius: 50px;
  border: 1px solid ${theme.gray[1]};
  padding: 13px 20px 13px 20px;
`;

export const Chat_Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  color: ${theme.gray.black};
  &::placeholder {
    color: ${theme.gray[2]};
  }
  font-size: 16px;
  font-weight: 400;
`;

export const Chat_SendIcon = styled.div`
  display: flex;
  align-items: center;
`;
