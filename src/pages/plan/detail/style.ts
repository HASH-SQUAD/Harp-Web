import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const Detail_Layout = styled.div<{ StatusBarSize?: string }>`
  padding-top: /* ${(props) => props.StatusBarSize || '54px'} */ 54px;
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
`;

export const Detail_Header = styled.div<{ BackgroundImage: string }>`
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

export const Detail_Title = styled.p`
  color: ${theme.gray.white};
  font-size: 20px;
  font-weight: 600;
`;

export const Detail_Camera = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
`;

export const Detail_DDay = styled.div`
  color: ${theme.gray.white};
  font-size: 44px;
  font-weight: 600;
  letter-spacing: 0.2px;
  align-self: self-end;
`;

export const Detail_Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 20px 0 20px;
`;

export const Detail_Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Detail_Duration = styled.p`
  color: ${theme.gray.black};
  font-size: 16px;
  font-weight: 500;
`;

export const Detail_Buttons = styled.div`
  display: flex;
  gap: 3px;
`;

export const Detail_Button = styled.p`
  color: ${theme.gray[3]};
  font-size: 13px;
  font-weight: 400;
`;

