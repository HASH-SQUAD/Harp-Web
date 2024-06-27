import styled from 'styled-components';

export const Terms_Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Terms_Layout = styled.div<{ StatusBarSize?: string }>`
  padding: ${(props) => props.StatusBarSize || '54px'} 30px 0 30px;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

export const Header_Layout = styled.div<{ StatusBarSize?: string }>`
  padding: ${(props) => props.StatusBarSize || '54px'} 0px 0 0px;
  display: flex;
  width: 100%;
  flex-direction: row;
`;
