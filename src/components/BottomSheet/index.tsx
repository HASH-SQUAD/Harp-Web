// 라이브러리
import React from 'react';

// 파일
import * as _ from './style';
import { useBottomSheet } from 'hooks/useBottomSheet';
import DayPlan from 'components/DayPlan';
import { PlanResult } from 'types/plan';

interface BottomSheetProps {
  planInfos?: PlanResult;
  duration: string;
}

const BottomSheet = ({ duration, planInfos }: BottomSheetProps) => {
  const { sheet, content } = useBottomSheet();

  return (
    <_.BottomSheet_Layout ref={sheet}>
      <_.BottomSheet_Wrapper>
        <_.BottomSheet_Handle />
      </_.BottomSheet_Wrapper>
      <_.BottomSheet_Container ref={content}>
        <_.BottomSheet_Duration>{duration}</_.BottomSheet_Duration>
        <_.BottomSheet_Content>
          {Object.keys(planInfos?.data || {}).map(
            (dayKey: string, index: number) => {
              const day =
                dayKey === 'tips'
                  ? null
                  : planInfos?.data[dayKey as keyof typeof planInfos.data];

              if (!Array.isArray(day)) {
                return null;
              }
              const lineHeight = 80 + 108 * (day.length - 1);
              return (
                <_.BottomSheet_Date key={index}>
                  <_.BottomSheet_Line height={lineHeight} />
                  <DayPlan
                    key={index}
                    day={day}
                    dayIndex={index}
                    planInfos={planInfos!}
                  />
                </_.BottomSheet_Date>
              );
            }
          )}
        </_.BottomSheet_Content>
      </_.BottomSheet_Container>
    </_.BottomSheet_Layout>
  );
};

export default BottomSheet;
