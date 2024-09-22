import { theme } from 'lib/utils/style/theme';
import styled from 'styled-components';

export const PlanResult_Layout = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const PlanResult_Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  height: 180px;
  border-radius: 20px 20px 20px 5px;
  background:
    linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%),
    url('https://harp-back.hash-squad.kro.kr/common/CommonPlanImg.png')
      lightgray 50% / cover no-repeat;
  overflow: hidden;
`;

export const PlanResult_Title = styled.p`
  color: ${theme.sub[1]};
  font-family: Pretendard;
  font-size: 19px;
  font-weight: 600;
  padding: 20px 20px 0 20px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const PlanResult_Info = styled.div`
  padding: 12px 0 12px 10px;
  background-color: ${theme.sub[1]};
`;
export const PlanResult_DateAndMember = styled.p`
  color: ${theme.gray[3]};
  font-size: 16px;
  font-weight: 400;
`;

export const PlanResult_ShareButton = styled.div`
  background-color: ${theme.sub[1]};
  display: flex;
  width: 36px;
  height: 36px;
  justify-content: center;
  align-items: center;
  border-radius: 9999px;
`;
