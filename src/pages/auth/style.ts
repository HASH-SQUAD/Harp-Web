import styled from 'styled-components';

export const Auth_Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(180deg, #fbc7d4 0%, #9796f0 100%);
`;

export const Auth_Layout = styled.div<{ StatusBarSize?: string }>`
  padding-top: ${(props) => props.StatusBarSize || '54px'};
`;
