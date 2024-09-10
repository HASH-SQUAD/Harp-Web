import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const UserInfo_Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  position: fixed;
`;

export const UserInfo_Content = styled.div`
  padding: 0 20px;
`;

export const UserInfo_Title_Layout = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 18px;
`;

export const UserInfo_Title_Big = styled.p`
  color: ${theme.gray[4]};
  font-size: 24px;
  font-weight: 700;
  white-space: pre-wrap;
`;

export const UserInfo_Title_Small = styled.p`
  color: ${theme.gray[4]};
  font-size: 15px;
  font-weight: 400;
`;

export const UserInfo_Inputs = styled.div`
  padding: 28px 10px 0 10px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const UserInfo_Input_Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const UserInfo_Input_Title = styled.p`
  color: ${theme.gray[4]};
  font-size: 14px;
  font-weight: 400;
`;

export const UserInfo_Input_Title_Star = styled.span`
  color: ${theme.sub.red};
`;

export const UserInfo_Input_Box = styled.input`
  width: 100%;
  height: 56px;
  padding-left: 16px;
  font-size: 16px;
  color: ${theme.gray[4]};
  border: 1.5px solid ${theme.gray[2]};
  border-radius: 5px;
  font-weight: 400;

  &:focus {
    outline: none;
    border: 1.5px solid ${theme.primary[7]};
  }
  &::placeholder {
    color: ${theme.gray[2]};
  }
  caret-color: ${theme.primary[7]};
`;

export const UserInfo_Gender_Box = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 10px;
`;

export const UserInfo_Gender = styled.div<{ isSelected?: boolean }>`
  padding: 14px 60px;
  width: 100%;
  text-align: center;
  color: ${(props) => (props.isSelected ? theme.gray.white : theme.gray[4])};
  font-size: 16px;
  font-weight: 400;
  border-radius: 5px;
  background-color: ${(props) =>
    props.isSelected ? theme.primary[7] : theme.gray.white};
  border: 1.5px solid
    ${(props) => (props.isSelected ? theme.primary[7] : theme.gray[1])};
`;
