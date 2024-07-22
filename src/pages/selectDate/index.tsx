import React, { useState, useRef, useEffect } from 'react';
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

  const [months, setMonths] = useState<Date[]>([
    new Date(new Date().getFullYear(), new Date().getMonth(), 1)
  ]);
  
  const loader = useRef<HTMLDivElement | null>(null);

  const handleObserver = (entities: IntersectionObserverEntry[]) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setMonths((prevMonth) => [
        ...prevMonth,
        new Date(
          prevMonth[prevMonth.length - 1].getFullYear(),
          prevMonth[prevMonth.length - 1].getMonth() + 1,
          1
        )
      ]);
    }
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '20px',
      threshold: 1.0
    };
    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
      observer.observe(loader.current);
    }
    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, []);

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
          {months.map((month, index) => (
            <Calendar
              key={index}
              selectedDays={selectedDays}
              setSelectedDays={setSelectedDays}
              currentMonth={month}
            />
          ))}
          <div ref={loader} />
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
