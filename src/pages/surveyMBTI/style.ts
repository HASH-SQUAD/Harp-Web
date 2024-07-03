import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const SurveyMBTI_Container = styled.div``;

export const SurveyMBTI_Layout = styled.div<{ StatusBarSize?: string }>`
  padding: ${(props) => props.StatusBarSize || '54px'} 30px 52px 30px;
  display: flex;
  height: 95%;
  flex-direction: column;
`;

export const SurveyMBTI_ProgressText = styled.div`
  color: var(--gray-300, #a5a5a5);
  font-weight: 400;
  font-size: 14px;
  text-align: right;
`;

export const SurveyMBTI_MainText = styled.div`
  color: ${theme.gray.black};
  font-weight: 700;
  font-size: 24px;
`;

export const SurveyMBTI_SubText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  color: var(--gray-400, #424242);
`;
