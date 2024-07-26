import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const SurveyMBTI_Container = styled.div<{ StatusBarSize?: string }>`
  padding: ${(props) => props.StatusBarSize || '54px'} 0 52px 0;
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
`;

export const SurveyMBTI_Layout = styled.div`
  padding: 0 20px;
`;

export const SurveyMBTI_ProgressText = styled.div`
  color: ${theme.gray[3]};
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

export const SurveyMBTI_Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 30px;
  cursor: pointer;
`;

export const SurveyMBTI_Contents_Select = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
`;

export const SurveyMBTI_Content = styled.div<{
  State?: boolean;
}>`
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: var(--gray-400, #424242);
  font-size: 56px;
  font-weight: 700;
  border: ${(props) =>
    props.State
      ? '1.5px solid var(--p-700, #7e50ff)'
      : '1px solid var(--gray-100, #e7e7e7)'};
  border-radius: 5px;
`;

export const SurveyMBTI_Contents_Arrow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--gray-250, #bcbcbc);
  font-size: 10px;
  font-weight: 400;
`;
