import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const SurveyStyle_Container = styled.div<{ StatusBarSize?: string }>`
  padding: ${(props) => props.StatusBarSize || '54px'} 0 52px 0;
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
`;

export const SurveyStyle_Content = styled.div`
  padding: 0 20px;
`;

export const SurveyStyle_ProgressText = styled.div`
  color: ${theme.gray[3]};
  font-weight: 400;
  font-size: 14px;
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
  margin-top: 7px;
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(3, 2fr);
`;
