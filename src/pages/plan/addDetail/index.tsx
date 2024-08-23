// 라이브러리
import React, { useEffect, useState } from 'react';

// 파일
import * as _ from './style';
import Header from 'components/Header';
import PlanDate from 'components/PlanDate';
import Location from 'assets/image/Location';
import Calendar from 'assets/image/Calendar';
import TimeCircle from 'assets/image/TimeCircle';
import { hasDateExpired } from 'lib/utils/hasDateExpired';
import TimePicker from 'components/TimePicker';

const addDetail = () => {
  const [isSelected, setIsSelected] = useState<number | null>(null);
  const [time, setTime] = useState({
    period: '오전',
    hour: '1',
    minute: '00'
  });

  const periods = ['오전', '오후'];
  const hours = Array.from({ length: 12 }, (_, i) => String(i + 1));
  const minutes = Array.from({ length: 60 }, (_, i) =>
    String(i).padStart(2, '0')
  );

  const plans = [
    { day: 'day1', date: '2024-08-06' },
    { day: 'day2', date: '2024-11-26' },
    { day: 'day3', date: '2024-11-27' },
    { day: 'day4', date: '2024-11-28' },
    { day: 'day5', date: '2024-11-29' }
  ];

  const handleSelectDay = (index: number, date: string) => {
    if (!hasDateExpired(date)) {
      setIsSelected(index);
    }
  };

  useEffect(() => {
    if (plans.length === 1) {
      setIsSelected(0);
    }
  }, [plans]);

  return (
    <>
      <Header title="일정추가" buttonState="완료" />
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
                  handleSelectDay(index, plan.date);
                }}
              />
            ))}
          </_.Update_PlanDates>
        </_.Update_SelectDate>
        <_.Update_SelectTime>
          <_.Update_Subtitle>
            <TimeCircle />
            <_.Update_Menu>시간 선택</_.Update_Menu>
          </_.Update_Subtitle>
          <_.Update_TimePickerList>
            <TimePicker
              list={periods}
              onSelectedChange={(selectedPeriod: string) =>
                setTime((prev) => ({ ...prev, period: selectedPeriod }))
              }
            />
            <TimePicker
              list={hours}
              onSelectedChange={(selectedHour: string) =>
                setTime((prev) => ({ ...prev, hour: selectedHour }))
              }
            />
            <TimePicker
              list={minutes}
              onSelectedChange={(selectedMinute: string) =>
                setTime((prev) => ({ ...prev, minute: selectedMinute }))
              }
            />
            <_.Update_Overlay />
          </_.Update_TimePickerList>
        </_.Update_SelectTime>
      </_.Update_Layout>
    </>
  );
};

export default addDetail;
