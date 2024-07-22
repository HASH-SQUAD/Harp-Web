import React, { useState } from 'react';
import * as _ from './style';
import useStatusBarHeight from 'hooks/useStatusBarHeight';
import Header from 'components/Header';
import NextButton from 'components/NextButton';
import Calendar from 'components/Calendar';

const SelectDate = () => {
  const statusBarHeight = useStatusBarHeight();
  const [selectedDays, setSelectedDays] = useState<{
    start: Date | null;
    end: Date | null;
  }>({ start: null, end: null });

  return (
    <>
      <_.SelectDate_Container StatusBarSize={`${statusBarHeight}px`}>
        <Header
          title=""
          buttonState=""
          isOnChatting={false}
          onClickMethod={() => {}}
        />
        <_.SelectDate_Title>여행 날짜를 선택해주세요</_.SelectDate_Title>
        <_.SelectDate_Months>
          <Calendar
            selectedDays={selectedDays}
            setSelectedDays={setSelectedDays}
          />
        </_.SelectDate_Months>
      </_.SelectDate_Container>
      <NextButton
        text="다음"
        state={selectedDays.start && selectedDays.end ? true : false}
      />
    </>
  );
};

export default SelectDate;
