import styled from 'styled-components';

export const SurveyStyle_Container = styled.div``;

export const SurveyStyle_Layout = styled.div<{ StatusBarSize?: string }>`
  padding: ${(props) => props.StatusBarSize || '54px'} 30px 52px 30px;
  display: flex;
  height: 95%;
  flex-direction: column;
`;

export const SurveyStyle_MainText = styled.div``;
