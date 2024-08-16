import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const AddPlanContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px 20px 20px;
  border-bottom: 1px solid ${theme.sub[1]};
`;

export const AddPlanContent_Info = styled.div`
  display: flex;
  flex-direction: column;
  height: 80px;
  justify-content: space-between;
`;

export const AddPlanContent_Title = styled.div`
  font-size: 18px;
  font-weight: 400;
`;

export const AddPlanContent_Adress = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #767676;
`;

export const AddPanContent = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #767676;
`;

export const AddPlanContent_Button = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const AddPlanContent_Button_Loaction = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: ${theme.gray[0]};
  border-radius: 100%;
`;

export const AddPlanContent_Button_Text = styled.div`
  color: ${theme.primary[7]};
  font-size: 16px;
  font-weight: 400;
`;
