import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const Home_Container = styled.div``;

export const Home_Layout = styled.div<{ StatusBarSize?: string }>`
  padding: ${(props) => props.StatusBarSize || '54px'} 30px 0 30px;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

// 캘린더
export const Home_Calendar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Home_Calendar_Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

export const Home_Calendar_Content_Day = styled.div<{ State?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.State ? '#FFF' : theme.gray[3])};
  font-weight: 400;
  font-size: 16px;
  background-color: ${(props) => (props.State ? theme.primary[7] : '')};
  padding: 4px 4px;
  width: 30px;
  height: 30px;
  border-radius: 100%;
`;

export const Home_Calendar_Content_Date = styled.div`
  color: ${theme.gray.black};
  font-weight: 400;
  font-size: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
`;

export const Home_Calendar_Content_Point = styled.div`
  width: 5px;
  height: 5px;
  background-color: #ff3f9b;
  border-radius: 100%;
  margin-bottom: 50%;
`;

//SearchBar
export const Home_SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: ${theme.gray[0]};
  border-radius: 10px;
  gap: 10px;
`;

export const Home_SearchBar_Input = styled.input`
  background-color: ${theme.gray[0]};
  border: none;
  width: 82%;
  height: 30px;
  font-size: 16px;
  font-weight: 400;
  outline: none;
`;

export const Home_Chatting = styled.div`
  
`