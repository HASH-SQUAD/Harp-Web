// 라이브러리
import React from 'react';

// 파일
import * as _ from './style';
import Share from 'assets/Icon/Share';
import { theme } from 'lib/utils/style/theme';

const PlanResult = () => {
  return (
    <_.PlanResult_Layout>
      <_.PlanResult_Container>
        <_.PlanResult_Title>낭만 가득한 해운대 1박 2일</_.PlanResult_Title>
        <_.PlanResult_Info>
          <_.PlanResult_DateAndMember>
            2024.07.11 · 2명
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
