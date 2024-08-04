import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const Detail_Layout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;

export const Detail_TitleBar = styled.div`
  display: flex;
  flex-direction: column;
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
