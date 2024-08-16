import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const ScreenMap_Layout = styled.div`
  width: 100%;
  height: 100%;
`;

export const ScreenMap_Overlay = styled.div`
  padding: 2px 9px;
  border-radius: 20px;
  background: ${theme.gray.white};
  box-shadow: 0px 0px 5px 0px rgba(126, 80, 255, 0.3);
  color: ${theme.primary[7]};
  font-size: 14px;
  font-weight: 400;
`;

export const ScreenMap_InfoWindow = styled.div`
  display: flex;
  padding: 14px 12px;
  align-items: center;
  gap: 4px 0px;
  flex-wrap: wrap;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.93);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(4px);
`;

export const ScreenMap_Header = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`;

export const ScreenMap_Time = styled.p`
  color: ${theme.gray['2.5']};
  font-size: 14px;
  font-weight: 400;
`;

export const ScreenMap_Title = styled.p`
  color: ${theme.gray[4]};
  font-size: 16px;
  font-weight: 600;
`;

export const ScreenMap_Location = styled.div`
  color: ${theme.gray['3.5']};

  font-size: 15px;
  font-weight: 400;
`;
