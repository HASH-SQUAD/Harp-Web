import styled from 'styled-components';

export const Terms_Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Terms_Layout = styled.div<{ StatusBarSize?: string }>`
  padding: ${(props) => props.StatusBarSize || '54px'} 30px 52px 30px;
  display: flex;
  height: 100%;
  flex-direction: column;
`;
