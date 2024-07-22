import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const Calendar_Container = styled.div`
  padding: 0 10px;
`;

export const Calendar_Date_Title = styled.p`
  color: ${theme.gray.black};
  font-size: 20px;
  font-weight: 600;
`;

export const Calendar_Table = styled.table`
  width: 100%;
  padding-top: 15px;
  border-spacing: 10px;
`;

export const Calendar_DayofWeek_Tr = styled.tr`
  text-align: center;
`;

export const Calendar_DayofWeek_Td = styled.td<{ day?: string }>`
  color: ${(props) =>
    props.day === '일'
      ? theme.sub.red
      : props.day === '토'
        ? theme.sub.blue
        : theme.gray['3.5']};
`;

export const Calendar_Date_Tr = styled.tr`
  text-align: center;
`;

interface Date_Td_Props {
  dayOfweek: number;
  disabled: boolean;
}

export const Calendar_Date_Td = styled.td<Date_Td_Props>`
  color: ${(props) =>
    props.disabled
      ? theme.gray[3]
      : props.dayOfweek === 0
        ? theme.sub.red
        : props.dayOfweek === 6
          ? theme.sub.blue
          : theme.gray.black};
  font-size: 18px;
  font-weight: 500;
  background-color: ${(props) => (props.disabled ? 'inherit' : 'inherit')};
  border-radius: 150px;
  position: relative;
  &.selected-start {
    background-color: ${theme.primary[7]};
    border-radius: 150px;
  }
  &.selected-end {
    background-color: ${theme.primary[7]};
    border-radius: 150px;
  }
  &.between-days:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    background-color: ${theme.primary[7]};
    transform: translateY(-50%);
  }
  &.disabled-day {
    color: ${theme.gray[3]};
    cursor: not-allowed;
  }
`;
