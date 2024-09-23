import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const MessageBox_Container = styled.div<{ role?: string }>`
  width: max-content;
  max-width: 250px;
  padding: 10px 18px;
  font-size: 16px;
  font-weight: 400;
  display: flex;
  white-space: break-spaces;
  align-self: ${(props) =>
    props.role == 'assistant' ? 'self-start' : 'self-end'};
  border-radius: 20px 20px
    ${(props) => (props.role == 'assistant' ? '20px 5px' : '5px 20px')};
  background-color: ${(props) =>
    props.role == 'assistant' ? '#f2f3f7' : theme.primary[7]};
  color: ${(props) =>
    props.role == 'assistant' ? theme.gray.black : theme.gray.white};
  margin-bottom: 10px;
`;
