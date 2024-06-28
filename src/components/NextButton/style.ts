import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const NextButton_Container = styled.div<{ State?: boolean }>`
  width: 100vw;
  height: 90px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: absolute;
  z-index: 9999;
  bottom: 0;
  background-color: ${(props) =>
    props.State ? theme.primary[7] : theme.gray['2.5']};
  margin-left: -30px;
  padding-top: 12px;
`;

export const NextButton_Title = styled.div`
  font-weight: 600;
  font-size: 18px;
  color: white;
`;
