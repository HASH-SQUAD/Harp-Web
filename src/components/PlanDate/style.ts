import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

interface LayoutProps {
  isPassed: boolean;
  isSelected: boolean;
}

export const PlanDate_Layout = styled.div<LayoutProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 12px;
  border-radius: 5px;
  border-radius: 5px;
  border: 1.5px solid
    ${(props) => (props.isSelected ? theme.primary[7] : theme.gray[1])};
  width: 75px;
  text-decoration: ${(props) => (props.isPassed ? 'line-through' : 'none')};
`;

export const PlanDate_WhatDay = styled.p`
  color: ${theme.gray.black};
  font-size: 17px;
  font-weight: 500;
`;

export const PlanDate_Date = styled.p`
  color: ${theme.gray.black};
  font-size: 18px;
  font-weight: 400;
`;
