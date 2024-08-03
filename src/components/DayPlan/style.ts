import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const DayPlan_Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DayPlan_Times = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  align-items: center;
  width: max-content;
`;

export const DayPlan_WhatDay = styled.div`
  color: ${theme.gray.black};
  font-size: 18px;
  font-weight: 500;
`;

export const DayPlan_Date = styled.div`
  color: ${theme.gray[3]};
  font-size: 13px;
  font-weight: 400;
`;

export const DayPlan_Content = styled.div`
  display: flex;
  padding-top: 20px;
  justify-content: space-between;
`;

export const DayPlan_Left = styled.div`
  display: flex;
  width: 90px;
  align-self: flex-start;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
`;

export const DayPlan_TimeLabel = styled.p`
  color: ${theme.gray.black};
  font-size: 15px;
  font-weight: 400;
`;

export const DayPlan_Step = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 5px;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  color: ${theme.gray.white};
  font-size: 14px;
  font-weight: 600;
  background: ${theme.primary[6]};
`;

export const DayPlan_Right = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 70%;
  padding: 13px 16px;
  margin-top: 12px;
  border-radius: 15px;
  gap: 3px;
  background-color: ${theme.gray[0]};
`;

export const DayPlan_Activity = styled.p`
  color: ${theme.gray.black};
  font-size: 18px;
  font-weight: 500;
`;

export const DayPlan_StoreName = styled.p`
  color: ${theme.gray[3]};
  font-size: 15px;
  font-weight: 400;
`;

export const DayPlan_Delete = styled.div`
  position: absolute;
  right: -12px;
  top: -12px;
`;
