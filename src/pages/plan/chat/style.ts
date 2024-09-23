import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const Chat_Layout = styled.div`
  position: fixed;
  width: 100%;
  height: calc(100vh - 40px);
`;

export const Chat_Container = styled.div<{ StatusBarSize?: string }>`
  width: 100%;
  height: 100%;
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
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  scroll-snap-type: y mandatory;
`;

export const Chat_SelectList = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  top: -30px;
  justify-content: center;
  gap: 10px;
`;

export const Chat_SelectBox = styled.div`
  height: 30px;
  padding: 3px 10px;
  border-radius: 50px;
  background: ${theme.sub[1]};
  color: ${theme.gray.black};
  font-size: 16px;
  font-weight: 400;
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
  background-color: ${theme.gray.white};
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
