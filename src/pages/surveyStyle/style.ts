import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const SurveyStyle_Container = styled.div``;

export const SurveyStyle_Layout = styled.div<{ StatusBarSize?: string }>`
  padding: ${(props) => props.StatusBarSize || '54px'} 30px 52px 30px;
  display: flex;
  height: 95%;
  flex-direction: column;
`;

export const SurveyStyle_ProgressText = styled.div`
  color: var(--gray-300, #a5a5a5);
  font-weight: 400;
  font-size: 16px;
  text-align: right;
`;

export const SurveyStyle_MainText = styled.div`
  color: ${theme.gray.black};
  font-weight: 700;
  font-size: 24px;
`;

export const SurveyStyle_SubText = styled.div`
  font-weight: 400;
  font-size: 16px;
`;

export const SurveyStyle_Contents = styled.div`
  
`