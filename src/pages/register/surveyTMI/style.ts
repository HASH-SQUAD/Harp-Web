import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const TMI_Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
`;

export const TMI_Layout = styled.div<{ StatusBarSize?: string }>`
  padding: 54px 30px 54px 30px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const TMI_Title = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TMI_Title_Emoticon = styled.p`
  font-size: 48px;
`;

export const TMI_Title_Big = styled.p`
  color: ${theme.gray[4]};
  font-size: 28px;
  font-weight: 700;
`;

export const TMI_Title_Small = styled.p`
  color: ${theme.gray[4]};
  font-size: 16px;
  font-weight: 400;
`;

export const TMI_Textarea = styled.textarea`
  margin-top: 15px;
  width: 100%;
  height: 200px;
  font-size: 16px;
  border-radius: 5px;
  border: 1.5px solid ${theme.gray[1]};
  border-radius: 4px;
  outline: none;
  &:focus {
    border: 1.5px solid ${theme.primary[7]};
  }
  padding: 13px 15px;
  caret-color: ${theme.primary[7]};
  position: relative;
  &::placeholder {
    color: ${theme.gray['2.5']};
    font-weight: 400;
  }
`;

export const TMI_Text_Limit = styled.p`
  color: ${theme.gray[2]};
  font-size: 13px;
  font-weight: 400;
  position: absolute;
  top: 49%;
  right: 11%;
`;
