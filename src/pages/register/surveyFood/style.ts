import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const SurveyFood_Container = styled.div<{ StatusBarSize?: string }>`
  padding: ${(props) => props.StatusBarSize || '54px'} 0 52px 0;
  display: flex;
  height: 95%;
  flex-direction: column;
`;

export const SurveyFood_Content = styled.div`
  padding: 0 20px;
`;

export const SurveyFood_ProgressText = styled.div`
  color: ${theme.gray[3]};
  font-weight: 400;
  font-size: 14px;
  text-align: right;
`;

export const SurveyFood_MainText = styled.div`
  color: ${theme.gray.black};
  font-weight: 700;
  font-size: 24px;
`;

export const SurveyFood_SubText = styled.div`
  font-weight: 400;
  font-size: 16px;
`;

export const SurveyFood_Contents = styled.div`
  margin-top: 7px;
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(2, 2fr);
`;
