import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const SelectDate_Container = styled.div<{ StatusBarSize?: string }>`
  padding: /* ${(props) => props.StatusBarSize || '54px'} */ 54px 20px 0 20px;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const SelectDate_Title = styled.p`
  padding-top: 18px;
  color: ${theme.gray.black};
  font-size: 24px;
  font-weight: 700;
`;

export const SelectDate_Months = styled.div`
  padding-top: 10px;
`;
