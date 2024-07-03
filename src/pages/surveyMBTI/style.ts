import styled from 'styled-components';

export const SurveyMBTI_Container = styled.div``;

export const SurveyMBTI_Layout = styled.div<{ StatusBarSize?: string }>`
  padding: ${(props) => props.StatusBarSize || '54px'} 30px 52px 30px;
  display: flex;
  height: 95%;
  flex-direction: column;
`;
