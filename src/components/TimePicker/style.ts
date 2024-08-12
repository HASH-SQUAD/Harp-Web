import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const TimePicker_Layout = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  height: 150px;
  overflow-y: scroll;
  position: relative;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TimePicker_Center = styled.div`
  height: 50px;
  position: sticky;
  top: 50px;
`;

export const TimePicker_Item = styled.li<{ isSelected: boolean }>`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ isSelected }) =>
    isSelected ? theme.gray.black : theme.gray['3.5']};
  font-size: ${({ isSelected }) => (isSelected ? '24px' : '20px')};
  font-weight: ${({ isSelected }) => (isSelected ? '400' : '600')};
`;
