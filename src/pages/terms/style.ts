import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const Terms_Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Terms_Layout = styled.div<{ StatusBarSize?: string }>`
  padding: ${(props) => props.StatusBarSize || '54px'} 30px 0 30px;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

export const Header_Layout = styled.div<{ StatusBarSize?: string }>`
  padding: ${(props) => props.StatusBarSize || '54px'} 0px 0 0px;
  display: flex;
  width: 100%;
  flex-direction: row;
`;

export const Terms_Title = styled.div`
  font-weight: 700;
  font-size: 24px;
  margin-top: 18px;
`;

export const Terms_SubTitle = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: 700;
  font-size: 24px;
`;

export const Terms_SubTitle_Highlight = styled.div`
  width: max-content;
  color: ${theme.primary[7]};
  font-weight: 700;
  font-size: 24px;
`;

export const Terms_SuccessAll = styled.div`
  width: 100%;
  height: 64px;
  padding: 15px 20px;
  margin-top: 22px;
  background-color: ${theme.sub[1]};
  border-radius: 5px;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  font-weight: 600;
  font-size: 18px;
`;

export const TrueCircleCheckIcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
`

