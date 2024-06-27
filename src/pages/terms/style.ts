import styled from 'styled-components';

export const Terms_Container = styled.div`

`;

export const Terms_Layout = styled.div<{ StatusBarSize?: string }>`
  padding: ${(props) => props.StatusBarSize || '54px'} 20px 52px 20px;
  display: flex;
  height: 100%;
  flex-direction: column;
`;
