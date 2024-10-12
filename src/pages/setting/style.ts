import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const Setting_Layout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;

export const Setting_Version = styled.div`
  padding: 10px 0 16px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${theme.gray[1]};
`;

export const Setting_Version_Info = styled.p`
  color: ${theme.gray['3.5']};
  font-size: 16px;
  font-weight: 400;
`;

export const Setting_Version_Current = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
`;

export const Setting_Version_Title = styled.p`
  color: ${theme.gray.black};
  font-size: 17px;
  font-weight: 500;
`;

export const Setting_Version_Value = styled.p`
  color: ${theme.primary[7]};
  font-size: 15px;
  font-weight: 400;
`;

export const Setting_Version_Latest = styled.p`
  color: ${theme.gray['3.5']};
  font-size: 14px;
  font-weight: 400;
  padding-top: 7px;
`;

export const Setting_Withdrawal = styled.p`
  padding: 16px 0;
  color: ${theme.gray.black};
  font-size: 18px;
  font-weight: 400;
`;

export const Setting_Logout = styled.p`
  color: ${theme.sub.red};
  font-size: 18px;
  font-weight: 400;
`;
