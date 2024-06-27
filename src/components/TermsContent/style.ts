import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const TermsContent_Container = styled.div`
  width: 100%;
  color: ${theme.gray[3]};
  padding-left: 4%;
`;

export const TermsContent_Layout = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
`;

export const TermsContent_CheckIcon = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  cursor: pointer;
`;

export const TermsContent_Title = styled.div`
  font-weight: 700;
  font-size: 16px;
`;

export const TermsContent_ArrowIcon = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  cursor: pointer;
`;

export const TermsContent_Detail = styled.div`
  background-color: #fafbfb;
  width: 100%;
  height: 200px;
  padding: 15px 15px 0px 15px;
  overflow: scroll;
`;
