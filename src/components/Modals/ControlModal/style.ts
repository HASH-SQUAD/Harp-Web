import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const ControlModal_Layout = styled.div`
  position: absolute;
  right: 1.25rem;
  top: 17.5rem;
  z-index: 10;
  padding: 8px 10px;
  background-color: ${theme.gray.white};
  border-radius: 15px;
  box-shadow: 0px 4px 15px 0px rgba(192, 192, 192, 0.2);
`;

export const ControlModal_Menu = styled.div`
  color: ${theme.gray.black};
  padding: 14px 11px;
  font-size: 18px;
  font-weight: 400;
  display: flex;
  gap: 4px;
  align-items: center;
  &:nth-child(2) {
    border-top: 1px solid ${theme.gray[0]};
    border-bottom: 1px solid ${theme.gray[0]};
  }
`;
