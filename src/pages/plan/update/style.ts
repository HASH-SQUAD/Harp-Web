import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const Update_Layout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;

export const Update_TitleBar = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  padding-top: 17px;
`;

export const Update_Location = styled.div`
  display: flex;
  align-items: center;
`;

export const Update_PlanTitle = styled.div`
  color: ${theme.gray.black};
  font-size: 27px;
  font-weight: 700;
`;

export const Update_Address = styled.p`
  color: ${theme.gray['3.5']};
  font-size: 18px;
  font-weight: 400;
`;

export const Update_SelectDate = styled.div`
  border-bottom: ${theme.sub[1]} 1px solid;
  padding: 17px 0 25px;
`;

export const Update_Subtitle = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Update_Menu = styled.p`
  color: ${theme.gray.black};
  font-size: 20px;
  font-weight: 600;
`;

export const Update_PlanDates = styled.div`
  padding-top: 14px;
  display: flex;
  gap: 12px;
  overflow: auto;
`;

export const Update_SelectTime = styled.div`
  padding-top: 20px;

  & > div {
    margin-top: 20px;
  }
`;
