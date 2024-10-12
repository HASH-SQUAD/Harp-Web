import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const All_Layout = styled.div`
  padding: 0 20px 90px;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  position: fixed;
`;

export const All_Header = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const All_Name = styled.p`
  color: ${theme.gray.black};
  font-size: 19px;
  font-weight: 600;
  display: flex;
  align-items: center;
`;

export const All_Profile = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
`;

export const All_Profile_Image = styled.div<{ url: string }>`
  width: 54px;
  height: 54px;
  border-radius: 50px;
  border: 1px solid ${theme.gray[1]};
  background: url(${(props) => props.url}) lightgray 50% / cover no-repeat;
`;

export const All_CategoryList = styled.div`
  padding-top: 15px;
  display: flex;
  flex-direction: column;
`;

export const All_CategoryBox = styled.div``;

export const All_Category = styled.p`
  color: ${theme.gray['3.5']};
  font-size: 16px;
  font-weight: 400;
`;

export const All_MenuList = styled.div`
  padding-top: 5px;
`;

export const All_Menu = styled.div`
  padding: 10px 0;
  display: flex;
  gap: 10px;
  color: ${theme.gray.black};
  font-size: 18px;
  font-weight: 400;
  align-items: center;
`;

export const All_Hr = styled.div`
  margin: 15px 0;
  width: 100%;
  height: 1px;
  background-color: var(--gray-100, #e7e7e7);
`;
