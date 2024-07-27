import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const PlanDetail_Layout = styled.div<{ StatusBarSize?: string }>`
  padding-top: /* ${(props) => props.StatusBarSize || '54px'} */ 54px;
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
`;

export const PlanDetail_Header = styled.div<{ BackgroundImage: string }>`
  background:
    linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%),
    url(${(props) => props.BackgroundImage}) lightgray 50% / cover no-repeat;
  width: 100%;
  height: 200px;
  padding: 20px;
  border-radius: 0 0 10px 10px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  justify-content: space-between;
`;

export const PlanDetail_Title = styled.p`
  color: ${theme.gray.white};
  font-size: 20px;
  font-weight: 600;
`;

export const PlanDetail_Camera = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
`;

export const PlanDetail_DDay = styled.div`
  color: ${theme.gray.white};
  font-size: 44px;
  font-weight: 600;
  letter-spacing: 0.2px;
  align-self: self-end;
`;
