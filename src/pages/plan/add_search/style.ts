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
`
