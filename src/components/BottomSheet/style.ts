import { BOTTOM_SHEET_HEIGHT } from 'config/constants';
import { motion } from 'framer-motion';
import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const BottomSheet_Layout = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 1;
  top: calc(100% - 90px);
  left: 0;
  right: 0;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: #fff;
  height: ${BOTTOM_SHEET_HEIGHT}px;
`;

export const BottomSheet_Wrapper = styled.div`
  height: 48px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  position: relative;
  padding-top: 7px;
  padding-bottom: 4px;
`;

export const BottomSheet_Handle = styled.div`
  width: 50px;
  height: 2px;
  border-radius: 5px;
  background-color: ${theme.gray[3]};
  margin: auto;
`;

export const BottomSheet_Container = styled.div`
  padding: 16px 20px;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
`;

export const BottomSheet_Content = styled.div`
  width: 100%;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 18px;
`;

export const BottomSheet_Duration = styled.div`
  color: ${theme.gray.black};
  font-size: 16px;
  font-weight: 500;
`;

export const BottomSheet_Date = styled.div`
  position: relative;
`;

export const BottomSheet_Line = styled.div<{ height?: number }>`
  position: absolute;
  left: 94px;
  width: 2px;
  z-index: -1;
  height: ${(props) => props.height}px;
  border-radius: 5px;
  background: ${theme.gray[1]};
`;
