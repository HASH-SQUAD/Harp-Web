import styled from 'styled-components';

export const TimePicker_Layout = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  width: 100%;
  height: 150px;
  overflow-y: scroll;
  position: relative;
`;

export const TimePicker_Center = styled.div`
  box-sizing: border-box;
  border-top: 1.3px solid black;
  border-bottom: 1.3px solid black;
  height: 50px;
  position: sticky;
  top: 50px;
`;

export const TimePicker_Item = styled.li<{ isSelected: boolean }>`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${({ isSelected }) => isSelected && 'bold'};
  opacity: ${({ isSelected }) => (isSelected ? 1 : 0.4)};
`;
