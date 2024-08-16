import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const AddSearch_Container = styled.div<{ StatusBarSize?: string }>`
  padding: ${(props) => props.StatusBarSize || '54px'} 10px 10px 0;
`;

export const AddSearch_Layout = styled.div`
  padding: 0 20px 0 20px;
`;

export const AddSearch_SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: ${theme.gray[0]};
  border-radius: 10px;
  gap: 10px;
  margin-top: 20px;
`;

export const AddSearch_SearchBar_Input = styled.input`
  background-color: ${theme.gray[0]};
  border: none;
  width: 82%;
  height: 30px;
  font-size: 16px;
  font-weight: 400;
  outline: none;
`;

export const AddSearch_Content = styled.div`
  height: 80vh;
  overflow: scroll;
`;

export const AddSearch_NoCotent = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const AddSearch_NoCotent_TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AddSearch_NoCotent_Title = styled.div`
  color: ${theme.gray['3.5']};
  font-size: 18px;
  font-weight: 400;
`;

export const AddSearch_NoCotent_SubTitle = styled.div`
  color: ${theme.gray[3]};
  font-size: 14px;
  font-weight: 400;
`;

export const AddSearch_NoCotent_RestartButton = styled.button`
  width: 100px;
  height: 30px;
  padding: 10px 20px;
  background: transparent;
  border: 1px solid ${theme.gray[2]};
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: ${theme.gray[3]};
`;
