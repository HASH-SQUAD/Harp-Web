import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const SelectDate_Container = styled.div<{ StatusBarSize?: string }>`
  padding-top: /* ${(props) => props.StatusBarSize || '54px'} */ 54px;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding-bottom: 90px;
`;

export const SelectDate_Content = styled.div``;

export const SelectDate_Title = styled.p`
  padding-top: 18px;
  color: ${theme.gray.black};
  font-size: 24px;
  font-weight: 700;
`;

export const SelectDate_Months = styled.div`
  padding: 10px 20px 0 20px;
  flex: 1;
  overflow-y: auto;
  height: 0;
`;
