// 라이브러리
import React, { useState } from 'react';

// 파일
import * as _ from './style';
import useStatusBarHeight from 'hooks/useStatusBarHeight';
import Header from 'components/Header';
import NextButton from 'components/NextButton';
import Calendar from 'components/Calendar';

const SelectDate = () => {
  const statusBarHeight = useStatusBarHeight();
  const [selectedDay, setSelectedDay] = useState<Date | null>(null);

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
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
            isNextMonth={true}
            isPrevMonth={false}
          />
        </_.SelectDate_Months>
      </_.SelectDate_Container>
      <NextButton text="다음" state={false} />
    </>
  );
};

export default SelectDate;
