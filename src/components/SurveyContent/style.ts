import styled from 'styled-components';

export const SurveyContent_Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

export const SurveyContent_Layout = styled.div<{ ContentWidth?: string }>`
  width: ${(props) => props.ContentWidth};
  height: ${(props) => props.ContentWidth};
  border: 1px solid var(--gray-100, #e7e7e7);
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2px;
`;

export const SurveyContent_Img = styled.img``;

export const SurveyContent_Text = styled.div`
  font-weight: 400;
  font-size: 14px;
`;
