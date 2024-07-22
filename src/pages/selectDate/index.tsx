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

  const today = new Date();
  const initialMonths = [
    new Date(today.getFullYear(), today.getMonth()), // 현재 월
    new Date(today.getFullYear(), today.getMonth() + 1), // 다음 월
    new Date(today.getFullYear(), today.getMonth() + 2) // 다다음 월
  ];

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
          {initialMonths.map((month, index) => (
            <Calendar
              key={index}
              selectedDays={selectedDays}
              setSelectedDays={setSelectedDays}
              initialMonth={month}
            />
          ))}
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
