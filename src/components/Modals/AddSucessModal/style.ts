import { theme } from 'lib/utils/style/theme';
import styled, { keyframes } from 'styled-components';

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const AddSucessModal_Layout = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  width: calc(100% - 40px);
  padding: 14px 20px;
  background-color: ${theme.primary[7] + 'B3'};
  border-radius: 5px;
  gap: 7px;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  animation: ${fadeOut} 3s ease-out forwards;
`;

export const AddSucessModal_Message = styled.p`
  color: ${theme.gray.white};
  font-size: 16px;
  font-weight: 500;
`;
