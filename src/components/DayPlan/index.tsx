// 라이브러리
import React, { useState } from 'react';

// 파일
import * as _ from './style';
import Minus from 'assets/Icon/Minus';
import { schedule } from 'types/schedule';

interface DayPlanProps {
  day: schedule[];
  dayIndex: number;
}

const DayPlan = ({ day, dayIndex }: DayPlanProps) => {
  const [isUpdated, setIsUpdated] = useState(false);

  return (
    <_.DayPlan_Layout>
      <_.DayPlan_Times>
        <_.DayPlan_WhatDay>{dayIndex}일차</_.DayPlan_WhatDay>
        <_.DayPlan_Date>23.11.29</_.DayPlan_Date>
      </_.DayPlan_Times>
      {day.map((plan, index) => (
        <_.DayPlan_Content key={index}>
          <_.DayPlan_Left>
            <_.DayPlan_TimeLabel>{plan.time}</_.DayPlan_TimeLabel>
            <_.DayPlan_Step>{index + 1}</_.DayPlan_Step>
          </_.DayPlan_Left>
          <_.DayPlan_Right>
            <_.DayPlan_Activity>{plan.activity}</_.DayPlan_Activity>
            <_.DayPlan_StoreName>{plan.storeName}</_.DayPlan_StoreName>
            {isUpdated && (
              <_.DayPlan_Delete>
                <Minus />
              </_.DayPlan_Delete>
            )}
          </_.DayPlan_Right>
        </_.DayPlan_Content>
      ))}
    </_.DayPlan_Layout>
  );
};

export default DayPlan;
