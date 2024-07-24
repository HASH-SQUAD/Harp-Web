import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const Edit_Container = styled.div<{ StatusBarSize?: string }>`
  padding: /* ${(props) => props.StatusBarSize || '54px'} */ 54px 30px 0 30px;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Edit_Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding-top: 20px;
  flex-direction: column;
  align-items: center;
`;

export const Edit_Profile = styled.div`
  position: relative;
`;

export const Edit_Profile_Img = styled.img`
  width: 6.25rem;
  height: 6.25rem;
  border-radius: 100%;
  border: 1px solid ${theme.gray[1]};
`;

export const Edit_Profile_Edit = styled.div`
  position: absolute;
  bottom: 4px;
  right: -4px;
`;

export const Edit_Infos = styled.div`
  width: 100%;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Edit_Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Edit_Info_Label = styled.div`
  color: ${theme.gray[3]};
  font-size: 16px;
  font-weight: 400;
`;

export const Edit_Info_Email = styled.div`
  width: 100%;
  padding: 14px 16px;
  border-radius: 5px;
  background-color: ${theme.gray[0]};
  color: ${theme.gray['3.5']};
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Edit_Info_Input = styled.input`
  outline: none;
  border: none;
  padding: 14px 10px;
  font-size: 18px;
  color: ${theme.sub[3]};
  border-bottom: 1px solid ${theme.gray[2]};
`;
