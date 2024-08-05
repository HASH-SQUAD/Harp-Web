// 라이브러리
import React, { useEffect, useState } from 'react';

// 파일
import * as _ from './style';
import Header from 'components/Header';
import PlanDate from 'components/PlanDate';
import Location from 'assets/image/Location';
import Calendar from 'assets/image/Calendar';

const Update = () => {
  const [isSelected, setIsSelected] = useState<number | null>(null);

  const plans = [
    { day: 'day1', date: '2024-08-06' },
    { day: 'day2', date: '2024-11-26' },
    { day: 'day3', date: '2024-11-27' },
    { day: 'day4', date: '2024-11-28' },
    { day: 'day5', date: '2024-11-29' }
  ];

  const handleSelectDay = (index: number) => {
    setIsSelected(index);
  };

  useEffect(() => {
    if (plans.length === 1) {
      setIsSelected(0);
    }
  }, [plans]);

  return (
    <>
      <Header title="수정" buttonState="완료" />
      <_.Update_Layout>
        <_.Update_TitleBar>
          <_.Update_Location>
            <Location />
            <_.Update_Address>
              부산광역시 기장군 기장해안로 147
            </_.Update_Address>
          </_.Update_Location>
          <_.Update_PlanTitle>쇼핑하기 🛍️</_.Update_PlanTitle>
        </_.Update_TitleBar>
        <_.Update_SelectDate>
          <_.Update_Subtitle>
            <Calendar />
            <_.Update_Menu>날짜 선택</_.Update_Menu>
          </_.Update_Subtitle>
          <_.Update_PlanDates>
            {plans.map((plan, index) => (
              <PlanDate
                key={plan.day}
                day={index + 1}
                date={plan.date}
                isSelected={isSelected === index}
                onSelect={() => {
                  handleSelectDay(index);
                }}
              />
            ))}
          </_.Update_PlanDates>
        </_.Update_SelectDate>
      </_.Update_Layout>
    </>
  );
};

export default Update;
