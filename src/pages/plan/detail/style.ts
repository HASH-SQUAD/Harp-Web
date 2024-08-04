import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const Detail_Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
`;

export const Detail_TitleBar = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
`;

export const Detail_DateAndTime = styled.p`
  color: ${theme.gray[3]};
  font-size: 16px;
  font-weight: 400;
`;

export const Detail_PlanTitle = styled.div`
  color: ${theme.gray.black};
  font-size: 27px;
  font-weight: 700;
`;

export const Detail_Location = styled.div`
  display: flex;
  align-items: center;
`;

export const Detail_Address = styled.p`
  color: ${theme.gray['3.5']};
  font-size: 18px;
  font-weight: 400;
`;

export const Detail_Content = styled.div`
  padding: 20px 10px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Detail_Memo = styled.textarea`
  padding: 16px;
  width: 100%;
  height: 160px;
  margin-top: 20px;
  background-color: ${theme.gray[0]};
  color: ${theme.gray.black};
  font-size: 16px;
  font-weight: 400;
  outline: none;
  border: none;
`;
