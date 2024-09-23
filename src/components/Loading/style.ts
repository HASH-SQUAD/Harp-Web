import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

export const Loading_Animation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
`;

export const Loading_Dot = styled.div`
  width: 10px;
  height: 10px;
  margin: 0 5px;
  background-color: #888;
  border-radius: 50%;
  animation: ${loading} 1s infinite;

  &:nth-child(1) {
    animation-delay: 0s;
  }

  &:nth-child(2) {
    animation-delay: 0.2s;
  }

  &:nth-child(3) {
    animation-delay: 0.4s;
  }
`;
