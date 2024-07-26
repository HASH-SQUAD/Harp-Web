import styled from 'styled-components';

export const PlanDetail_Layout = styled.div<{ StatusBarSize?: string }>`
  padding-top: /* ${(props) => props.StatusBarSize || '54px'} */ 54px;
`;
