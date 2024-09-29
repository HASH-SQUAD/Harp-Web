import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const Update_Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  width: 100%;
  height: 100%;
`;

export const Update_Location = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
  padding-top: 17px;
`;

export const Update_PlanTitle = styled.div`
  color: ${theme.gray.black};
  font-size: 27px;
  font-weight: 700;
`;

export const Update_PlanChange = styled.span`
  color: ${theme.gray['2.5']};
  font-size: 15px;
  font-weight: 400;
  padding-left: 6px;
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
`;

export const Update_TimePickerList = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 59px;
`;

export const Update_Overlay = styled.div`
  position: absolute;
  top: 50px;
  z-index: -1;
  width: 100%;
  background-color: ${theme.primary[1]};
  border-radius: 5px;
  opacity: 0.5;
  height: 50px;
`;

export const Update_SectionLine = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
  border-bottom: ${theme.sub[1]} 1px solid;
  padding: 17px 0 25px;
`;

export const Update_Input = styled.input`
  gap: 5px;
  width: 100%;
  height: 48px;
  padding: 14px 16px;
  align-items: center;
  gap: 16px;
  border-radius: 5px;
  border: 1.5px solid ${theme.gray[1]};
  color: ${theme.gray.black};
  font-size: 16px;
  &:focus {
    border-color: ${theme.primary[7]};
    outline: none;
  }
  &::placeholder {
    color: ${theme.gray[2.5]};
  }
`;
