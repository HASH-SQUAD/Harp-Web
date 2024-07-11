import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;


export const Loding_FadeComponent = styled.div`
  animation: ${fadeIn} 0.3s ease-in-out;
`;