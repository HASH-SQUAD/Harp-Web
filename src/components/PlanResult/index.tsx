// 라이브러리
import React from 'react';

// 파일
import * as _ from './style';
import Share from 'assets/Icon/Share';
import { theme } from 'lib/utils/style/theme';
import { formatSelectedDate } from 'lib/utils/formatSelectedDate';
import { useNavigate } from 'react-router-dom';

interface OwnProps {
  id: string | undefined;
  img: string;
  title: string;
  startDate: string;
  member: string;
}

const PlanResult = ({ id, img, title, startDate, member }: OwnProps) => {
  const navigate = useNavigate();

  return (
    <_.PlanResult_Layout
      onClick={() => {
        navigate(`/plan/info/${id}`);
      }}
    >
      <_.PlanResult_Container imgUrl={img}>
        <_.PlanResult_Title>{title}</_.PlanResult_Title>
        <_.PlanResult_Info>
          <_.PlanResult_DateAndMember>
            {formatSelectedDate(startDate, '.')} · {member}명
          </_.PlanResult_DateAndMember>
        </_.PlanResult_Info>
      </_.PlanResult_Container>
      <_.PlanResult_ShareButton>
        <Share color={theme.gray['2.5']} />
      </_.PlanResult_ShareButton>
    </_.PlanResult_Layout>
  );
};

export default PlanResult;
