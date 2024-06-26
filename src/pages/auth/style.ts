import styled from "styled-components";
import { theme } from "lib/utils/style/theme";

export const Auth_Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${theme.special[4]};
  position: relative;
`;

export const Auth_Layout = styled.div<{ StatusBarSize?: string }>`
  padding: ${(props) => props.StatusBarSize || "54px"} 40px 52px 40px;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

export const Auth_Bubble_1 = styled.div`
  position: absolute;
  width: 381px;
  height: 381px;
  border-radius: 100%;
  top: -64px;
  left: 164px;
  background: rgba(255, 255, 255, 0.2);
`;
export const Auth_Bubble_2 = styled.div`
  position: absolute;
  width: 70px;
  height: 70px;
  border-radius: 100%;
  top: 204px;
  left: 28px;
  background: rgba(255, 255, 255, 0.2);
`;
export const Auth_Bubble_3 = styled.div`
  position: absolute;
  width: 310px;
  height: 310px;
  border-radius: 100%;
  bottom: -24px;
  left: -52px;
  background: rgba(255, 255, 255, 0.2);
`;

export const Auth_Title_Layout = styled.div`
  padding-top: 48px;
`;

export const Auth_Title_Big = styled.p`
  white-space: pre-line;
  font-size: 48px;
  font-weight: 700;
  line-height: 130%;
  color: ${theme.gray.white};
  margin-bottom: -8px;
`;

export const Auth_Title_Small = styled.p`
  color: ${theme.gray.white};
  font-size: 18px;
  padding-top: 10px;
  font-weight: 400;
`;

export const Auth_Button_Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 16px;
`;

export const Auth_Button_Ballon = styled.div`
  background-color: ${theme.gray.white};
  padding: 10px 16px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
`;

export const Auth_Button_Ballon_Title = styled.p`
  color: #1a1e27;
  text-align: center;
  font-size: 15px;
  font-weight: 500;
`;

export const Auth_Button_Ballon_SVG = styled.div`
  position: absolute;
  top: 36px;
`;

export const Auth_Button_Hint = styled.p`
  color: ${theme.sub[4]};
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
