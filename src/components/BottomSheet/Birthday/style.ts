import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const Birthday_Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.2);
`;

export const Birthday_Layout = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 300px;
  background-color: ${theme.gray.white};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 30px 21px 33px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Birthday_Title = styled.p`
  color: #000;
  font-size: 15px;
  font-weight: 400;
`;

export const Birthday_Calendar = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 165px;
  overflow: hidden;
  position: relative;
  gap: 10px;
`;

export const Birthday_ScrollPicker = styled.div`
  flex: 0.22;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Birthday_PickerItem = styled.div<{ selected: boolean }>`
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${(props) => (props.selected ? '18px' : '16px')};
  scroll-snap-align: center;
  color: ${(props) => (props.selected ? theme.gray[4] : theme.gray[3])};
  font-weight: 400;
`;

export const Birthday_PickerItem_Placeholder = styled.div`
  height: 55px;
`;


export const Birthday_Button = styled.div`
  padding: 12px 24px;
  text-align: center;
  color: ${theme.gray.white};
  border-radius: 5px;
  background-color: ${theme.primary[7]};
  align-self: flex-end;
`;
