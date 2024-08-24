import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const AddDetail_Layout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;

export const AddDetail_TitleBar = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  padding-top: 17px;
`;

export const AddDetail_Location = styled.div`
  display: flex;
  align-items: center;
`;

export const AddDetail_PlanTitle = styled.div`
  color: ${theme.gray.black};
  font-size: 27px;
  font-weight: 700;
`;

export const AddDetail_Caption = styled.div`
  color: ${theme.gray['4']};
  font-size: 15px;
  font-weight: 400;
`;

export const AddDetail_Address = styled.p`
  color: ${theme.gray['3.5']};
  font-size: 18px;
  font-weight: 400;
`;

export const AddDetail_SectionLine = styled.div`
  border-bottom: ${theme.sub[1]} 1px solid;
  padding: 17px 0 25px;
`;

export const AddDetail_Subtitle = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const AddDetail_Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const AddDetail_Input = styled.input`
  display: flex;
  align-items: center;
  gap: 5px;
  display: flex;
  width: 100%;
  height: 44px;
  padding: 14px 16px;
  align-items: center;
  gap: 16px;
  border-radius: 5px;
  border: 1.5px solid var(--gray-100, #e7e7e7);
  &:focus {
    border-color: ${theme.primary[7]};
    outline: none;
  }
`;

export const AddDetail_Menu = styled.p`
  color: ${theme.gray.black};
  font-size: 20px;
  font-weight: 600;
`;

export const AddDetail_PlanDates = styled.div`
  padding-top: 14px;
  display: flex;
  gap: 12px;
  overflow: auto;
`;

export const AddDetail_AddPlan = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 12px;
  border-radius: 5px;
  border: 1.5px solid ${theme.gray[1]};
  min-width: 75px;
  color: ${theme.gray[2.5]};;
  background-color: transparent;
  text-align: center;
  white-space: nowrap;
  

`;

export const AddDetail_AddPlanSpan = styled.span`
  font-size: 17px;
  font-weight: 400;
  color: ${theme.gray[2.5]};
  white-space: nowrap;
`;


export const AddDetail_SelectTime = styled.div`
  padding-top: 20px;
`;

export const AddDetail_TimePickerList = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 59px;
`;

export const AddDetail_Overlay = styled.div`
  position: absolute;
  top: 50px;
  z-index: -1;
  width: 100%;
  background-color: ${theme.primary[1]};
  border-radius: 5px;
  opacity: 0.5;
  height: 50px;
`;
