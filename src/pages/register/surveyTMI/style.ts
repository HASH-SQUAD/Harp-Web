import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const SurveyTMI_Container = styled.div<{ StatusBarSize?: string }>`
  width: 100vw;
  height: 100vh;
  position: fixed;
  padding-top: ${(props) => props.StatusBarSize || '54px'};
  display: flex;
  flex-direction: column;
`;

export const SurveyTMI_Content = styled.div`
  padding: 0 20px;
`;

export const SurveyTMI_Title = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SurveyTMI_Title_Emoticon = styled.p`
  font-size: 48px;
`;

export const SurveyTMI_Title_Big = styled.p`
  color: ${theme.gray[4]};
  font-size: 28px;
  font-weight: 700;
`;

export const SurveyTMI_Title_Small = styled.p`
  color: ${theme.gray[4]};
  font-size: 16px;
  font-weight: 400;
`;

export const SurveyTMI_Box = styled.div`
  position: relative;
`;

export const SurveyTMI_Textarea = styled.textarea`
  margin-top: 15px;
  width: 100%;
  height: 200px;
  font-size: 16px;
  border-radius: 5px;
  border: 1.5px solid ${theme.gray[1]};
  border-radius: 4px;
  outline: none;
  &:focus {
    border: 1.5px solid ${theme.primary[7]};
  }
  padding: 13px 15px;
  caret-color: ${theme.primary[7]};
  &::placeholder {
    color: ${theme.gray['2.5']};
    font-weight: 400;
  }
`;

export const SurveyTMI_Text_Limit = styled.p`
  color: ${theme.gray[2]};
  font-size: 13px;
  font-weight: 400;
  position: absolute;
  bottom: 14px;
  right: 14px;
`;
