import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const SurveyEnd_Container = styled.div<{ StatusBarSize?: string }>`
  width: 100vw;
  height: 100vh;
  padding: ${(props) => props.StatusBarSize || '54px'} 30px 52px 30px;
  display: flex;
  flex-direction: column;
`;

export const SurveyEnd_Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 16%;
`;

export const SurveyEnd_MainTitle = styled.div`
  text-align: center;
  color: ${theme.gray.black};
  font-weight: 700;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const SurveyEnd_Title = styled.div`
  text-align: center;
  color: ${theme.gray.black};
  font-weight: 700;
`;

export const SurveyEnd_SubTitle = styled.div`
  font-weight: 400;
  font-size: 14px;
`;

export const SurveyEnd_Rocket = styled.img`
  margin-top: 25%;
  width: 250px;
  height: 250px;
`;

export const SurveyEnd_Bubble1 = styled.div`
  background: ${theme.special[4]};
  width: 381px;
  height: 381px;
  position: absolute;
  flex-shrink: 0;
  opacity: 0.15;
  border-radius: 100%;
  left: 40vw;
  bottom: 60vh;
`;

export const SurveyEnd_Bubble2 = styled.div`
  background: ${theme.special[4]};
  width: 70px;
  height: 70px;
  position: absolute;
  flex-shrink: 0;
  opacity: 0.15;
  border-radius: 100%;
  right: 75vw;
  top: 21vh;
`;

export const SurveyEnd_Bubble3 = styled.div`
  background: ${theme.special[4]};
  width: 42px;
  height: 42px;
  position: absolute;
  flex-shrink: 0;
  opacity: 0.15;
  border-radius: 100%;
  right: 6vw;
  top: 42vh;
`;

export const SurveyEnd_Bubble4 = styled.div`
  background: ${theme.special[4]};
  width: 18px;
  height: 18px;
  position: absolute;
  flex-shrink: 0;
  opacity: 0.15;
  border-radius: 100%;
  right: 80vw;
  top: 51vh;
`;

export const SurveyEnd_Bubble5 = styled.div`
  background: ${theme.special[4]};
  width: 140px;
  height: 140px;
  position: absolute;
  flex-shrink: 0;
  opacity: 0.15;
  border-radius: 100%;
  left: 80vw;
  top: 62vh;
`;

export const SurveyEnd_Bubble6 = styled.div`
  background: ${theme.special[4]};
  width: 26px;
  height: 26px;
  position: absolute;
  z-index: 0;
  opacity: 0.15;
  border-radius: 100%;
  right: 88vw;
  top: 68vh;
`;

export const SurveyEnd_Bubble7 = styled.div`
  background: ${theme.special[4]};
  width: 280px;
  height: 280px;
  position: absolute;
  z-index: 0;
  opacity: 0.15;
  border-radius: 100%;
  right: 40vw;
  top: 76vh;
`;

export const SurveyEnd_OtherInfo = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: ${theme.gray[3]};
`;
