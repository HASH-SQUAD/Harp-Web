import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const Chat_Container = styled.div<{ StatusBarSize?: string }>`
  padding: /* ${(props) => props.StatusBarSize || '54px'}*/ 54px 0 10px 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Chat_Content = styled.div`
  width: 100%;
  height: 100%;
  max-height: 100%;
  background-color: ${theme.gray.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Chat_Messages = styled.div`
  padding: 20px 15px 10px 15px;
  overflow: auto;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  scroll-snap-type: y mandatory;
`;

export const Chat_Typing_Container = styled.div`
  width: 100%;
  padding: 10px 30px 0 30px;
  z-index: 1;
  height: max-content;
  position: relative;
`;

export const Chat_Typing_Box = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  max-height: 120px;
  justify-content: space-between;
  align-items: end;
  border-radius: 50px;
  border: 1px solid ${theme.gray[1]};
  padding: 13px 24px 13px 24px;
`;

export const Chat_Textarea = styled.textarea`
  width: 86%;
  height: auto;
  max-height: 100px;
  border: none;
  outline: none;
  color: ${theme.gray.black};
  &::placeholder {
    color: ${theme.gray[2]};
  }
  font-size: 14px;
  font-weight: 400;
  resize: none;
  overflow-y: auto;
`;

export const Chat_SendIcon = styled.div`
  display: flex;
  align-items: center;
`;
