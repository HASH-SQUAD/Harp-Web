import styled from 'styled-components';

export const SurveyContent_Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;

export const SurveyContent_Layout = styled.div<{
  ContentWidth?: string;
  State?: boolean;
}>`
  width: ${(props) => props.ContentWidth};
  height: ${(props) => props.ContentWidth};
  border: ${(props) =>
    props.State
      ? '1.5px solid var(--p-700, #7e50ff)'
      : '1px solid var(--gray-100, #e7e7e7)'};
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2px;
`;

export const SurveyContent_Text = styled.div`
  font-weight: 400;
  font-size: 14px;
`;
