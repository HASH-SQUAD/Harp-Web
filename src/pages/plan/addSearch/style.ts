import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const AddSearch_Layout = styled.div`
  width: 100%;
  height: calc(100% - 40px);
  position: fixed;
`;

export const AddSearch_Container = styled.div`
  padding: 0 20px 0 20px;
  width: 100%;
  height: 100%;
`;

export const AddSearch_SearchBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: ${theme.gray[0]};
  border-radius: 10px;
  margin-top: 20px;
  padding: 20px 15px;
`;

export const AddSearch_SearchBar_Left = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

export const AddSearch_SearchBar_Input = styled.input`
  background-color: ${theme.gray[0]};
  border: none;
  height: 30px;
  font-size: 16px;
  font-weight: 400;
  outline: none;
  width: 100%;
`;

export const AddSearch_SearchBar_ClearIcon = styled.div`
  background-color: ${theme.gray[1]};
  width: 20px;
  height: 20px;
  border-radius: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const AddSearch_Content = styled.div`
  height: 80vh;
  overflow: scroll;
`;

export const AddSearch_LoadingLayout = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AddSearch_Content_Loading = styled.img`
  width: 74px;
  height: 74px;
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
