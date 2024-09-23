import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const NotFound_Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 18px;
  position: fixed;
`;

export const NotFound_Title = styled.p`
  color: #000;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
`;

export const NotFound_Explain = styled.p`
  color: ${theme.gray[3]};
  text-align: center;
  font-size: 15px;
  font-weight: 500;
`;

export const NotFound_Button = styled.button`
  padding: 10px 16px;
  color: ${theme.gray.black};
  font-size: 16px;
  font-weight: 500;
  border-radius: 5px;
  background: ${theme.gray[1]};
`;
