import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const Birthday_Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.2);
`;

export const Birthday_Layout = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 300px;
  background-color: ${theme.gray.white};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 30px 21px 33px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Birthday_Title = styled.p`
  color: #000;
  font-size: 15px;
  font-weight: 400;
`;

export const Birthday_Calendar = styled.div`
  padding: 40px 40px 0px 40px;
`;

export const Birthday_Button = styled.div`
  padding: 14px 24px;
  text-align: center;
  color: ${theme.gray.white};
  border-radius: 5px;
  background-color: ${theme.primary[7]};
  align-self: flex-end;
`;
