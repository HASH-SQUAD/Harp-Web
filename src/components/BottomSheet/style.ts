import { BOTTOM_SHEET_HEIGHT } from 'config/constants';
import styled from 'styled-components';

export const BottomSheet_Layout = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);
  height: ${BOTTOM_SHEET_HEIGHT}px;
`;

export const BottomSheet_Wrapper = styled.div`
  height: 48px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  position: relative;
  padding-top: 16px;
  padding-bottom: 4px;
`;

export const BottomSheet_Handle = styled.div`
  width: 32px;
  height: 4px;
  border-radius: 2px;
  background-color: #d0d0d0;
  margin: auto;
`;
