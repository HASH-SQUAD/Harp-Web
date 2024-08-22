// 라이브러리
import React from 'react';

// 파일
import * as _ from './style';
import { useBottomSheet } from 'hooks/useBottomSheet';
import DayPlan from 'components/DayPlan';
import { TripSchedule } from 'data/TripSchedule';

const BottomSheet = () => {
  const { sheet, content } = useBottomSheet();
  return (
    <_.BottomSheet_Layout ref={sheet}>
      <_.BottomSheet_Wrapper>
        <_.BottomSheet_Handle />
      </_.BottomSheet_Wrapper>
      <_.BottomSheet_Container ref={content}>
        <_.BottomSheet_Duration>
          24.08.08~24.08.09(1박 2일)
        </_.BottomSheet_Duration>
        <_.BottomSheet_Content>
          {TripSchedule.map((day, index) => {
            const lineHeight = 75 + 110 * (day.length - 1);
            return (
              <_.BottomSheet_Date key={index}>
                <_.BottomSheet_Line height={lineHeight} />
                <DayPlan key={index} day={day} dayIndex={index + 1} />
              </_.BottomSheet_Date>
            );
          })}
        </_.BottomSheet_Content>
      </_.BottomSheet_Container>
    </_.BottomSheet_Layout>
  );
};

export default BottomSheet;
