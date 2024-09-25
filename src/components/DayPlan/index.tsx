import React, { useRef, useEffect, useState } from 'react';
import Minus from 'assets/Icon/Minus';
import { schedule } from 'types/schedule';
import { formatTime } from 'lib/utils/formatTime';
import * as _ from './style';

interface DayPlanProps {
  isUpdated?: boolean;
  day: schedule[];
  dayIndex: number;
}

const DayPlan: React.FC<DayPlanProps> = ({ isUpdated, day, dayIndex }) => {
  const rightRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [heights, setHeights] = useState<number[]>([]);

  useEffect(() => {
    const newHeights = rightRefs.current.map((ref) =>
      ref ? ref.offsetHeight : 0
    );
    setHeights(newHeights);
  }, [day]);

  return (
    <_.DayPlan_Layout>
      <_.DayPlan_Times>
        <_.DayPlan_WhatDay>{dayIndex}일차</_.DayPlan_WhatDay>
        <_.DayPlan_Date>23.11.29.</_.DayPlan_Date>
      </_.DayPlan_Times>
      {day.map((plan, index) => (
        <_.DayPlan_Content key={index}>
          <_.DayPlan_Left>
            <_.DayPlan_TimeLabel>{formatTime(plan.time)}</_.DayPlan_TimeLabel>
            <_.DayPlan_Step
              style={{ marginTop: `${heights[index] / 6 - 10}px` }}
            >
              {index + 1}
            </_.DayPlan_Step>
          </_.DayPlan_Left>
          <_.DayPlan_Right ref={(el) => (rightRefs.current[index] = el)}>
            <_.DayPlan_Activity>{plan.activity}</_.DayPlan_Activity>
            <_.DayPlan_Location>{plan.location}</_.DayPlan_Location>
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
